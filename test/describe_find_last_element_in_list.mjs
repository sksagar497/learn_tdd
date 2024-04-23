import { expect } from "chai";
// const expect = chai.expect;

describe.only("find the last element in list", () => {
  context("when the list is empty", () => {
    it("should return nothing", () => {
      let result = findLastElement([]);
      expect(result).to.be.undefined;
    });
  });
  context("when the list have one element", () => {
    it("should return only element", () => {
      let result = findLastElement([1]);
      expect(result).to.be.eql(1);
    });
  });
  context("when the list have multiple element", () => {
    it("should return the last element", () => {
      let result = findLastElement([1, 3, 4, 5, 6]);
      expect(result).to.be.eql(6);
    });
  });
});

const findLastElement = (list) => {
  return list[list.length - 1];
};
