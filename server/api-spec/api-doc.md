Insert seed data into the following collections:

INSERT EMPLOYEES

> db.employees.insert({"empId" : "P10E001", "name" : "Rakesh D"});
> db.employees.insert({"empId" : "P10E134", "name" : "Vijay H", manager: <ObjectId of the first employee>});


INSERT PROJECTS

>db.projects.insert({"name" : "Allegiant", "manager" : <ObjectId of an employee>, "team": [<ObjectId's of employees>]});

INSERT ACTIVITIES

>db.activities.insert({"name" : "Development" });
>db.activities.insert({"name" : "Design" });


Once the seed data is entered into the DB, use the following REST endpoints

<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
To fetch all the employees :

url : /api/employee
method : get

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
To fetch an employee by employee ID :

url : /api/employee?empId=P10E134
method : get

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
To add an employee :

url : /api/employee
method : post

req body: {
	name: <name of employee>,
	manager: <id of manager>,
	empId: <empId>
}

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

To fetch all the activities to populate into the dropdown:

url : /api/activity
method : get

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

To fetch all the projects to populate into the dropdown:

url : /api/project
method : get

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

To add a new project:

url : /api/project
method : post
req body : {
	name: <projectName>,
	manager: <manager objId>,
	team: [{<employee objId>}]
}

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

To get list of timesheets for an employee:

url : /api/timesheet?empId=<empId>
method : get

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

To add timesheet entries:

url : /api/timesheet
method : post
req body : {
	"date": "2017-08-16",
	"empId": "P10E004",
	"entries": [{"projectId":"<selected projectId>"},{"activityId": "<selected activityId>"},{"workLog":4}]
}

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


