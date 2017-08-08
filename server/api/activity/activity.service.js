import Activity from '../../models/activity';

let ActivityService = {
    getActivity() {
        return Activity.findAsync();
    },

    getActivityById(id) {
        return Activity.findByIdAsync(id);
    },

    addActivity(activity) {
        return Activity.createAsync(activity);
    }
};

export default ActivityService;