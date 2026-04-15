import ProjectList from '../components/ProjectList.jsx';
import ToDoList from '../components/ToDoList.jsx';
import Clicker from '../components/Clicker.jsx';

import '../App.css'

function Projects() {
    return (
        <home>
        <section id="projects">
        <div>
            <h2>Projects</h2>
            <ProjectList/>
        </div>
        </section>
        <section id="todo">
          <h2>Todo List</h2>
          <div className="section-content section-collapsable">
            <ToDoList />
          </div>
        </section>
        <section id="clicker-game">
            <h2>Taflan Clicker</h2>
            <div className="section-content section-collapsable">
                <Clicker />
            </div>
        </section>
        </home>
    );
}

export default Projects;