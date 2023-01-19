const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("Object", () => {
      it("should return an object containing a 'Name' property when called with the 'new' keyword", () => {
        const obj = new Employee("Sally, 1");
  
        expect("name" in obj).toEqual(true);
      });
      
      it("should be a number", () => {
        const obj = new Employee("Sally Doe", 1, "Sally.Doe@gmail.com");
  
        expect(obj.email).toEqual("Sally.Doe@gmail.com");
      });
      
      it("should be a number", () => {
        const obj = new Employee("Sally Doe", 1, "Sally.Doe@gmail.com");
        
        expect(obj.id).toEqual(1)
      })
  })
  })