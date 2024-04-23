import { expect } from "chai";

describe.only("Reversing the list", () => {
  context("when the list is empty", () => {
    it("should return nothing", () => {
      const result = reverseList([]);
      expect(result).to.be.undefined;
    });
  });
  context("when the list have element", () => {
    it("should return the reverse of list", () => {
      const result = reverseList([1,2,3]);
      expect(result).to.be.eql([3,2,1]);
    });
  });
  context("when the list have single string", () => {
    it("should return the reverse of string", () => {
      const result = reverseList("sagar jymar");
      expect(result).to.be.eql("ramyj ragas");
    });
  });
});

const reverseList = (list) => {
    if (list === undefined || list.length === 0) {
        return undefined;
    }
    if(typeof list === "string"){
        return list.split('').reverse().join('');
    }
    return list.reverse();
}
