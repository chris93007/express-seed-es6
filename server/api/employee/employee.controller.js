import EmployeeService from './employee.service';

let controller = {
	getEmployee(req, res, next) {
		let empId = req.query.empId;

		if (empId) {

			EmployeeService.getEmployeeById(empId)
				.then(employees => {
					res.status(200);
					res.send(employees);
				})
				.catch(next);
		}
		else {

			EmployeeService.getAllEmployees()
				.then(employees => {
					res.status(200);
					res.send({ employees: [employees] });
				})
				.catch(next);
		}
	},

	addEmployee(req, res, next) {
		let employee = {
			name: req.body.name,
			empId: req.body.empId,
			manager: req.body.manager
		};

		EmployeeService.addEmployee(employee)
			.then(employee => {
				res.status(201);
				res.send(employee);
			})
			.catch(next);
	}
};

export default controller;