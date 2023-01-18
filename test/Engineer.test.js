const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    describe("Initialization", () => {
      it("should return an object containing a 'officeNumber' property when called with the 'new' keyword", () => {
        const obj = new Engineer(0, "Sally");
  
        expect("name" in obj).toEqual(true);
      });
      it("'id' should be a number", () => {
        const obj = new Engineer(1, "John Doe", "JD@gmail.com", 201);
  
        expect(obj.id).toEqual(1);
      });
      it("getgithub method should return a string", () => {
        const obj = new Engineer(1, "John Doe", "JD@gmail.com", "JohnDoe@github");
  
        expect(obj.getGitHub()).toEqual("JohnDoe@github");
      });
  })
  })