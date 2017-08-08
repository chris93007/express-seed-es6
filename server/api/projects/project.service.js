import Project from '../../models/project';

let ProjectService = {
    getProject(empId) {
        return Project.find({ 'empId': empId })
            .populate({
                path: 'manager',
                model: 'Employee'
            })
            .populate({
                path: 'team',
                model: 'Employee'
            }).execAsync();
    },

    getProjectById(id) {
        return Project.find({ '_id': id })
            .populate({
                path: 'manager',
                model: 'Employee'
            })
            .populate({
                path: 'team',
                model: 'Employee'
            }).execAsync();
    },

    addProject(proj) {
        let project = new Project(proj)
        return Project.createAsync(project);
    }
};

export default ProjectService;