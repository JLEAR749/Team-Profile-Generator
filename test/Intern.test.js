const Intern = require("../lib/Intern");

describe("Intern", () => {
  describe("Initialization", () => {
    it("should return an object containing a 'Name' property when called with the 'new' keyword", () => {
      const obj = new Intern(0, "Bob");

      expect("name" in obj).toEqual(true);
    });
    it("'id' should be a number", () => {
      const obj = new Intern(1, "John Doe", "JD@gmail.com",);

      expect(obj.id).toEqual(1);
    });
    it("getSchool method should return a string", () => {
      const obj = new Intern(1, "John Doe", "JD@gmail.com", "University of Minnesota");

      expect(obj.getSchool()).toEqual("University of Minnesota");
    });
  })
})