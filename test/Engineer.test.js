const {Engineer} = require("../lib/Engineer");

it ('Create a new Engineer', ()=> {
  const employee = new Engineer('Mary Doe', 1, 'Mary.Doe@gmail.com','mary-doe');

  expect (employee.name).toBe("Mary Doe");
  expect (employee.id).toEqual (expect.any(Number));
  expect (employee.email).toEqual(expect.any(String));
  expect (employee.github).toEqual(expect.any(String));
})

it ('checks all methods for Manager Class', () => {
  const employee = new Engineer('Mary Doe', 1, 'Mary.Doe@gmail.com','mary-doe');

  expect (employee.getName()).toBe(employee.name);
  expect (employee.getId()).toBe(employee.id);
  expect (employee.getEmail()).toBe(employee.email);
  expect (employee.getSchool()).toBe(employee.github);
  expect(employee.getRole()).toBe('Engineer');
})
