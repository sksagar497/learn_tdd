import { expect } from "chai";

describe.only("find the last but one ", () => {
  context("when the list is empty", () => {
    it("it should return nothing", () => {
      const result = findLastButOne([]);
      expect(result).to.be.undefined;
    });
  });
  context("when the list is one element", () => {
    it("it should return the only element", () => {
      const result = findLastButOne([1]);
      expect(result).to.be.eql(1);
    });
  });
  context("when the list have multiple elements", () => {
    it("it should return the second last element", () => {
      const result = findLastButOne([1, 2, 3, 4, 5, 6, 7]);
      expect(result).to.be.eql(6);
    });
  });
});

const findLastButOne = (list) => list.length > 1 ? list[list.length - 2] : list[0];
