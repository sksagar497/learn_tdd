import { expect } from "chai";

describe.only("Number of element present in list", () => {
  context("when the list is empty", () => {
    it("should return nothing", () => {
      const result = lengthOfList([]);
    });
  });
  context("when the list have element", () => {
    it("should return the length of list", () => {
      const result = lengthOfList([1,2,3]);
      expect(result).to.be.eql(3);
    });
  });
  context("when the list have single string", () => {
    it("should return the length of string", () => {
      const result = lengthOfList("sagar jymar");
      expect(result).to.be.eql(11);
    });
  });
});

const lengthOfList = (list) => list.length;
