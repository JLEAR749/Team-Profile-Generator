const Manager = require("../lib/Manager");

describe("Manager", () => {
  describe("Initialization", () => {
    it("should return an object containing a 'officeNumber' property when called with the 'new' keyword", () => {
      const obj = new Manager();

      expect("officeNumber" in obj).toEqual(true);
    });
    it("'officeNumber' should be a number", () => {
      const obj = new Manager(1, "John Doe", "JD@gmail.com", 201);

      expect(obj.officeNumber).toEqual(201);
    });
    it("getOfficeNumber method should return a number", () => {
      const obj = new Manager(1, "John Doe", "JD@gmail.com", 201);

      expect(obj.getOfficeNumber()).toEqual(201);
    });
  })
})
