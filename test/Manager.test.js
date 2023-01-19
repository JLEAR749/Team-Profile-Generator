const {Manager} = require("../lib/Manager");

describe("Object", () => {
  
  
  it("'officeNumber' should be a number", () => {
    const obj = new Manager("John Doe", 1, "John.Doe@gmail.com", 393);
    expect(obj.officeNumber).toEqual(393);
  });

  it("getOfficeNumber method should return a number", () => {
    const obj = new Manager("John Doe", 1, "John.Doe@gmail.com", 393);
  
    expect(obj.getOfficeNumber()).toEqual(393);
  });
  it("should be a number", () => {
    const obj = new Manager("John Doe", 1, "John.Doe@gmail.com");

    expect(obj.email).toEqual("John.Doe@gmail.com");
  });
  })
