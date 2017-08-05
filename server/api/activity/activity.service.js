import Activity from '../../models/activity';

let ActivityService = {
    getActivity(empId) {
        return Activity.findAsync({'empId': empId });
    },
    getActivityById(id) {
        return Activity.findByIdAsync(id);
    },
    addActivity(activity) {
        return Activity.createAsync(activity);
    },
    updateActivity(id) {
        console.log(Activity);
        // return Project;
    },
    deleteActivity(id) {

    }
};

export default ActivityService;