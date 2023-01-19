const {Engineer} = require("../lib/Engineer");

describe("Object", () => {
  it("creates a Engineer object", () => {
    const engineer = new Engineer("Mary Chollar", 829, "Mary.Chollar@gmail.com", "Mary.Chollar@github");
 expect("name" in engineer).toEqual(true)

      
    });
    it("'id' should be a number", () => {
      const obj = new Engineer("Mary Chollar", 829, "Mary.Chollar@gmail.com","Mary.Collar@github" );

      expect(obj.id).toEqual(829);
    });
    it("getgithub method should return a string", () => {
      const obj = new Engineer("Mary Chollar", 829, "Mary.Chollar@gmail.com", "Mary.Chollar@github");

      expect(obj.getGitHub()).toEqual("Mary.Chollar@github");
    });
  })