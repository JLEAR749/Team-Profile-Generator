const {Intern} = require("../lib/Intern");

it ('Create a new Intern', ()=> {
  const employee = new Intern('Calvin Doe', 1, 'Calvin.Doe@gmail.com','University of Minnesota');

  expect (employee.name).toBe("Calvin Doe");
  expect (employee.id).toEqual (expect.any(Number));
  expect (employee.email).toEqual(expect.any(String));
  expect (employee.school).toEqual(expect.any(String));
})

it ('checks all methods for Manager Class', () => {
  const employee = new Intern('Calvin Doe', 1, 'Calvin.Doe@gmail.com','University of Minnesota');

  expect (employee.getName()).toBe(employee.name);
  expect (employee.getId()).toBe(employee.id);
  expect (employee.getEmail()).toBe(employee.email);
  expect (employee.getSchool()).toBe(employee.school);
  expect(employee.getRole()).toBe('Intern');
})
