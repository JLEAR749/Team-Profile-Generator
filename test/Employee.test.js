const {Employee} = require("../lib/Employee");

it("create an employee Object",() =>{
  const employee = new Employee('Sally Doe',1,'Sally.Doe@gmail.com');

  expect (typeof(employee)).toBe('Object');
  expect (employee.name).toEqual(expect.any(String));
  expect (employee.name.length).toBeGreaterThan(2);
  expect (employee.id).toEqual (expect.any(Number));
  expect (employee.email).toEqual(expect.any(String));
});

it ('checks all methods for Manager Class', () => {
  const employee = new Employee('Sally Doe', 1, 'Sally.Doe@gmail.com');

  // expect (employee.getName()).toBe(employee.name);
  // expect (employee.getId()).toBe(employee.id);
  expect (employee.getEmail()).toBe(employee.email);
  expect(employee.getRole()).toBe('Employee');

})