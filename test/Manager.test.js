const {Manager} = require("../lib/Manager");

it ('Create a new Manager', ()=> {
  const employee = new Manager('John Doe', 1, 'John.Doe@gmail.com','393');

  expect (employee.name).toBe("John Doe");
  expect (employee.id).toEqual (expect.any(Number));
  expect (employee.email).toEqual(expect.any(String));
  expect (employee.officeNumber).toEqual(expect.any(Number));
})

it ('checks all methods for Manager Class', () => {
  const employee = new Manager('John Doe', 1, 'John.Doe@gmail.com','393');

  expect (employee.getName()).toBe(employee.name);
  expect (employee.getId()).toBe(employee.id);
  expect (employee.getEmail()).toBe(employee.email);
  expect (employee.getOfficeNumber()).toBe(employee.officeNumber);
  expect(employee.getRole()).toBe('Manager');
})
