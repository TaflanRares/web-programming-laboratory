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

    useEffect(function () {
        fetch('http://localhost:3000/api/projects')
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
            const response = await fetch('http://localhost:3000/api/projects', {
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
        fetch('http://localhost:3000/api/projects/' + projectId, {
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

            <input value={search} onChange={(e) => setSearch(e.target.value)} />
            <h5>
                Proiecte: {projects.filter(item => item.title.toLowerCase().includes(search.toLowerCase())).length}
            </h5>
            {
                projects
                .filter(item => item.title.toLowerCase().includes(search.toLowerCase()))
                .map(function (project) {
                    return (
                        <div key={project._id}>
                            <Card
                                title={project.title}
                                subtitle={project.tech}
                                description={project.description || project.desc || 'No description provided.'}
                            />
                            <button
                                type="button"
                                className="todo-list-delete-button"
                                onClick={() => handleDelete(project._id)}
                            >
                                Delete
                            </button>
                        </div>
                    );
                })
            }
        </div>
    );
}
export default ProjectList;