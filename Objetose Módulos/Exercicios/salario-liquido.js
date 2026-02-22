import * as salaryService from './service/salary-service.js';
import Employee from './modules/employee.js';

const data = document.getElementById("grossSalaryInout").innerHTML.split("\n");

const employee = new Employee(data[0], parseFloat(data[1]));

const netSalary = salaryService.netSalary(employee);

data.push(netSalary.toFixed(2));

console.log(`Funcionário: ${employee.name}`);
console.log(`Salário bruto: ${employee.grossSalary}`);
console.log(`Salário líquido: ${netSalary.toFixed(2)}`);

console.log(data);