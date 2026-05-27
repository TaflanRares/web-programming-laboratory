import { useState, useEffect } from 'react';
import Card from './Card';
function ProjectList() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [search, setSearch] = useState('');
    const [title, setTitle] = useState('');
    const [tech, setTech] = useState('');
    const [description, setDescription] = useState('');
    const [editingProjectId, setEditingProjectId] = useState(null);
    const [editTitle, setEditTitle] = useState('');
    const [editTech, setEditTech] = useState('');
    const [editDescription, setEditDescription] = useState('');

    useEffect(function () {
        fetch('https://web-programming-laboratory.onrender.com/api/projects')
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                setProjects(data);
                setLoading(false);
            })
            .catch(function (err) {
                setError('Error loading project data');
                console.error('Error loading project data:', err);
                setLoading(false);
            });
    }, []);

    async function handleSubmit(event) {
        event.preventDefault();

        if (title.trim() === '') {
            return;
        }

        try {
            const response = await fetch('https://web-programming-laboratory.onrender.com/api/projects', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    title: title.trim(),
                    tech: tech.trim(),
                    description: description.trim()
                }),
            });

            if (!response.ok) {
                throw new Error('Create failed');
            }

            const newProject = await response.json();
            setProjects(function (prevProjects) {
                return [...prevProjects, newProject];
            });
            setTitle('');
            setTech('');
            setDescription('');
        } catch (err) {
            setError('Error adding project');
            console.error('Eroare:', err);
        }
    }

    function handleDelete(projectId) {
        if (window.confirm('Are you sure you want to delete this project?')) {
            fetch('https://web-programming-laboratory.onrender.com/api/projects/' + projectId, {
                method: 'DELETE'
            })
                .then(function (response) {
                    if (!response.ok) {
                        throw new Error('Delete failed');
                    }

                    setProjects(function (prevProjects) {
                        return prevProjects.filter(function (project) {
                            return project._id !== projectId;
                        });
                    });
                })
                .catch(function (err) {
                    setError('Error deleting project');
                    console.error('Error deleting project:', err);
                });
        }
    }

    function handleStatusToggle(project) {
        fetch('https://web-programming-laboratory.onrender.com/api/projects/' + project._id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                done: !project.done
            })
        })
            .then(function (response) {
                if (!response.ok) {
                    throw new Error('Status update failed');
                }

                return response.json();
            })
            .then(function (updatedProject) {
                setProjects(function (prevProjects) {
                    return prevProjects.map(function (item) {
                        return item._id === updatedProject._id ? updatedProject : item;
                    });
                });
            })
            .catch(function (err) {
                setError('Error updating project status');
                console.error('Error updating project status:', err);
            });
    }

    function startEditing(project) {
        setEditingProjectId(project._id);
        setEditTitle(project.title || '');
        setEditTech(project.tech || '');
        setEditDescription(project.description || project.desc || '');
    }

    function cancelEditing() {
        setEditingProjectId(null);
        setEditTitle('');
        setEditTech('');
        setEditDescription('');
    }

    async function handleUpdateProject(project) {
        if (editTitle.trim() === '') {
            return;
        }

        try {
            const response = await fetch('https://web-programming-laboratory.onrender.com/api/projects/' + project._id, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title: editTitle.trim(),
                    tech: editTech.trim(),
                    description: editDescription.trim()
                })
            });

            if (!response.ok) {
                throw new Error('Update failed');
            }

            const updatedProject = await response.json();
            setProjects(function (prevProjects) {
                return prevProjects.map(function (item) {
                    return item._id === updatedProject._id ? updatedProject : item;
                });
            });
            cancelEditing();
        } catch (err) {
            setError('Error updating project');
            console.error('Error updating project:', err);
        }
    }

    if (loading) {
        return <p>Se incarca...</p>;
    }
    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div>
            <form className="project-form" onSubmit={handleSubmit}>
                <div className="project-form-fields">
                    <input
                        className="todo-list-input"
                        placeholder="Project title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <input
                        className="todo-list-input"
                        placeholder="Tech"
                        value={tech}
                        onChange={(e) => setTech(e.target.value)}
                    />
                    <textarea
                        className="todo-list-input project-description-input"
                        placeholder="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        rows={3}
                    />
                </div>
                <button
                    type="submit"
                    className="todo-list-add-button"
                > Add </button>
            </form>

            <div className="project-toolbar">
                <input
                    className="project-search-input"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search projects"
                />
                <h5>
                    Proiecte: {projects.filter(item => item.title.toLowerCase().includes(search.toLowerCase())).length}
                </h5>
            </div>
            {
                projects
                .filter(item => item.title.toLowerCase().includes(search.toLowerCase()))
                .map(function (project) {
                    const projectCardClassName = project.done
                        ? 'project-card project-card--done'
                        : 'project-card project-card--todo';
                    const isEditing = editingProjectId === project._id;

                    const projectStatusButtonClassName = project.done
                        ? 'project-status-button project-status-button--done'
                        : 'project-status-button project-status-button--todo';

                    return (
                        <div key={project._id} className="project-item">
                            {isEditing ? (
                                <div className={projectCardClassName}>
                                    <div className="project-edit-fields">
                                        <input
                                            className="todo-list-input project-edit-input"
                                            value={editTitle}
                                            onChange={(e) => setEditTitle(e.target.value)}
                                            placeholder="Project title"
                                        />
                                        <input
                                            className="todo-list-input project-edit-input"
                                            value={editTech}
                                            onChange={(e) => setEditTech(e.target.value)}
                                            placeholder="Tech"
                                        />
                                        <textarea
                                            className="todo-list-input project-description-input project-edit-textarea"
                                            value={editDescription}
                                            onChange={(e) => setEditDescription(e.target.value)}
                                            placeholder="Description"
                                            rows={3}
                                        />
                                    </div>
                                </div>
                            ) : (
                                <Card
                                    className={projectCardClassName}
                                    title={project.title}
                                    subtitle={project.tech}
                                    description={project.description || project.desc || 'No description provided.'}
                                />
                            )}
                            <button
                                type="button"
                                className={projectStatusButtonClassName}
                                onClick={() => handleStatusToggle(project)}
                            >
                                {project.done ? 'Mark not done' : 'Mark done'}
                            </button>
                            <button
                                type="button"
                                className="project-status-button project-status-button--edit"
                                onClick={() => (isEditing ? handleUpdateProject(project) : startEditing(project))}
                            >
                                {isEditing ? 'Save' : 'Edit'}
                            </button>
                            {isEditing ? (
                                <button
                                    type="button"
                                    className="todo-list-delete-button"
                                    onClick={cancelEditing}
                                >
                                    Cancel
                                </button>
                            ) : (
                            <button
                                type="button"
                                className="todo-list-delete-button"
                                onClick={() => handleDelete(project._id)}
                            >
                                Delete
                            </button>
                            )}
                        </div>
                    );
                })
            }
        </div>
    );
}
export default ProjectList;