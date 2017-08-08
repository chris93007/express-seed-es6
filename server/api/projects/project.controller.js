import ProjectService from './project.service';

let controller = {
    getProject(req, res, next) {
        ProjectService.getProject()
            .then(projects => {
                res.status(200);
                res.send({ projects: [projects] });
             })
            .catch(next);
    },

    getProjectById(req, res, next) {
        ProjectService.getProjectById(req.params.id)
            .then(project => {
                res.status(200);
                res.send( project );
             })
            .catch(next);
    },

    addProject(req, res, next) {
        let project = {
            name: req.body.name,
            manager: req.body.manager,
            team: req.body.team || null
        };

        ProjectService.addProject(project)
            .then(project => {
                res.status(201);
                res.send( project );
             })
            .catch(next);
    }
};

export default controller;