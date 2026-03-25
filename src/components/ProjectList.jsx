import { useState, useEffect } from 'react';
import Card from './Card';
function ProjectList() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(function () {
        fetch('/data/projects.json')
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                setProjects(data.projects);
                setLoading(false);
            })
            .catch(function (err) {
                setError('Error loading project data');
                console.error('Error loading project data:', err);
                setLoading(false);
            });
    }, []);
    if (loading) {
        return <p>Se incarca...</p>;
    }
    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div>
            {/* TODO: Afisati proiectele cu map() si componenta Card din Lab 4 */}
            {
                projects.map(function (project, index) {
                    return (
                        Card({
                            key: index,
                            title: project.title,
                            subtitle: project.tech,
                            description: project.description
                        })
                    )
                })
            }
        </div>
    );
}
export default ProjectList;