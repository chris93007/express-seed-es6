import Employee from '../../models/employee';

let EmployeeService = {
	getAllEmployees() {
		return Employee.find()
			.populate({
				path: 'manager',
				model: 'Employee'
			}).execAsync();
	},

	getEmployeeById(id) {
		return Employee.find({ empId: id })
			.populate({
				path: 'manager',
				model: 'Employee'
			}).execAsync();
	},

	addEmployee(emp) {
		let employee = new Employee(emp);
		return Employee.createAsync(employee);
	}
};

export default EmployeeService;