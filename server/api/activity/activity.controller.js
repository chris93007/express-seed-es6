import ActivityService from './activity.service.js';
import url from 'url';

let controller = {
    getActivity(req, res, next) {
        ActivityService.getActivity()
            .then(activities => {
                res.status(200);
                res.send({ activities: [activities] });
             })
            .catch(next);
    },

    getActivityById(req, res, next) {
        ActivityService.getActivityById(req.params.id)
            .then(activity => {
                res.status(200);
                res.send( activity );
             })
            .catch(next);
    },

    addActivity(req, res, next) {
        let activity = {
            name: req.body.name
        };

        ActivityService.addActivity(activity)
            .then(activity => {
                res.status(201);
                res.send( activity );
             })
            .catch(next);
    },

    updateActivity(req, res, next) {
        ActivityService.updateActivity(req.params.id)
            .then(activity => {
                res.status(200);
                res.send( activity );
            })
            .catch(next);
    },

    deleteActivity(req, res, next) {
        ActivityService.deleteActivity(req.params.id)
            .then(activity => {
                res.status(200);
                res.send({});
             })
            .catch(next);
    }
};

export default controller;