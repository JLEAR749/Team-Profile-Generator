const {Employee} = require("../lib/Employee");

it ('Creates a new employee', ()=> {
  const employee = new employee('Sally Doe', 1, 'Sally.Doe@gmail.com','393');

  expect (employee.name).toBe("Sally Doe");
  expect (employee.id).toEqual (expect.any(Number));
  expect (employee.email).toEqual(expect.any(String));
})

it ('checks all methods for Manager Class', () => {

  const employee = new Employee('Sally Doe', 1, 'Sally.Doe@gmail.com','393');

  expect (employee.getName()).toBe(employee.name);
  expect (employee.getId()).toBe(employee.id);
  expect (employee.getEmail()).toBe(employee.email);
  expect(employee.getRole()).toBe('Employee');

})