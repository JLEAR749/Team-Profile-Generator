const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("Initialization", () => {
      it("should return an object containing a 'Name' property when called with the 'new' keyword", () => {
        const obj = new Employee(0,"Bob");
  
        expect("name" in obj).toEqual(true);
      });
      it("'id' should be a number", () => {
        const obj = new Employee(1, "John Doe", "JD@gmail.com", );
  
        expect(obj.id).toEqual(1);
      });
      
  })
  })