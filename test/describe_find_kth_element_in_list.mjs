import { expect } from "chai";

describe.only("Finding the kth element in list", () => {
  context("when the list is empty", () => {
    it("it should return nothing", () => {
      const result = findKthElement([], 2);
      expect(result).to.be.undefined;
    });
  });
  context("when the value of k is 0", () => {
    it("it should return nothing", () => {
      const result = findKthElement([1, 2, 3], 0);
      expect(result).to.be.undefined;
    });
  });
  context("when the list have less element than k", () => {
    it("it should return nothing", () => {
      const result = findKthElement([1, 2, 3], 4);
      expect(result).to.be.undefined;
    });
  });
  context("when the list have exactly k element", () => {
    it("it should return the last element of list", () => {
      const result = findKthElement([1, 2, 3, 4, 5], 5);
      expect(result).to.be.eql(5);
    });
  });
  context("when the list have more than k element", () => {
    it("it should return the kth element of list", () => {
      const result = findKthElement([1, 2, 3, 4, 5], 3);
      expect(result).to.be.eql(3);
    });
  });
});

const findKthElement = (list, k) => {
    if(k == 0)return undefined;
  if (list.length < 1 || list.length < k) return undefined;
  return list[k - 1];
};
