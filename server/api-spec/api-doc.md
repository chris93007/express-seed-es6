Insert seed data into the following collections:

INSERT EMPLOYEES

> db.employees.insert({"empId" : "P10E001", "name" : "Rakesh D"});
> db.employees.insert({"empId" : "P10E134", "name" : "Vijay H", "manager": ObjectId of the first employee});


INSERT PROJECTS

>db.projects.insert({"name" : "Allegiant", "manager" : ObjectId of an employee, "team": [<ObjectId's of employees>]});

INSERT ACTIVITIES

>db.activities.insert({"name" : "Development" });
>db.activities.insert({"name" : "Design" });


Once seed data is inserted, use the following REST endpoints

To fetch all the employees:

>URL : /api/employee
>METHOD : get


To fetch an employee by employee ID :

>URL : /api/employee?empId=`<empId>`
>METHOD : get

To add an employee :

>URL : /api/employee
>METHOD : post

>req body: {
	name: `name of employee`,
	manager: `_id of manager`,
	empId: `empId`
}


To fetch all the activities to populate into the dropdown:

>URL : /api/activity
>METHOD : get

To fetch all the projects to populate into the dropdown:

>URL : /api/project
>METHOD : get

To add a new project:

>URL : /api/project
>METHOD : post
>req body : {
	name: `projectName`,
	manager: `_id of manager`,
	team: [{`_id of employee objId`}]
}

To get list of timesheets for an employee:

>URL : /api/timesheet?empId=`<empId>`
>METHOD : get

To add timesheet entries:

>URL : /api/timesheet
>METHOD : post
>req body : {
	"date": "2017-08-16",
	"empId": `<empId>`,
	"entries": [{"projectId":selected projectId,"activityId": selected activityId,"workLog":4},{"projectId":selected projectId,"activityId": selected activityId,"workLog":4}]
}



