const employees = [
    {id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000 },
    {id: 2, name: 'Bob Johnson', age: 40, department: 'HR', salary: 70000 },
    {id: 3, name: 'Alice Smith', age: 48, department: 'FD', salary: 100000},
    {id: 4, name: 'Daniel Brown', age: 36, department: 'MD', salary: 57000},
    {id: 5, name: 'Bob Johnson(2)', age: 40, department: 'HR', salary: 75000 } // Testing
];

// Function to display all employees
function displayEmployees() {
    const totalEmployees = employees.map((employee, index) => `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
    document.getElementById('employeesDetails').innerHTML = totalEmployees;
}

// function to calculate employees' total salaries
function calculateTotalSalaries() {
    const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
    alert(`Total Salaries: $${totalSalaries}`); 
}

// function to display employees details based on department (such as HR department)
function displayHREmployees() {
    const hrEmployees = employees.filter(employee => employee.department === 'HR');
    const hrEmployeesDisplay = hrEmployees.map((employee, index) => `
        <p> 
        ${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary}
        </p>
    `).join('');

    document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
}

// function to display employees' details based on ID
function findEmployeeById(employeeId) {
    const foundEmployee = employees.find(employee => employee.id === employeeId)

    if (foundEmployee) {
        document.getElementById('employeesDetails').innerHTML = `<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
    } else {
        document.getElementById('employeesDetails').innerHTML = "No employee has been found with this ID";
    }
}
