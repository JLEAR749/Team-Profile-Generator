const {Intern} = require("../lib/Intern");

describe("Object", () => {
    it("creates a intern object", () => {
      const intern = new Intern("Jane Doe ", 466, "Jane.Doe@gmail.com", "University of Minnesota");
      expect("name" in intern).toEqual(true);
    })
      
    it("'id' should be a number", () => {
      const obj = new Intern("Jane Doe", 466, "Jane.Doe@gmail.com", "University of Minnesota");
      expect(obj.id).toEqual(466);
    });
    it("getSchool method should return a string", () => {
      const obj = new Intern("Jane Doe", 466, "Jane.Doe@gmail.com", "University of Minnesota");

      expect(obj.getSchool()).toEqual("University of Minnesota");
    });
  });