import Project from '../../models/project.js';

let ProjectService = {
    getProject(empId) {
        return Project.findAsync({'empId': empId });
    },
    getProjectById(id) {
        return Project.findByIdAsync(id);
    },
    addProject(project) {
        return Project.createAsync(project);
    },
    updateProject(id) {
        console.log(Project);
        // return Project;
    },
    deleteProject(id) {

    }
};

export default ProjectService;