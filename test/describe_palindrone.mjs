import { expect } from "chai";

describe.only("List is Palindrone or what ?", () => {
  context("when the list is empty", () => {
    it("should return nothing", () => {
      const result = isPalindrone([]);
      expect(result).to.be.undefined;
    });
  });
  context("when the list have elements", () => {
    it("should return true if it is palindrone", () => {
      const result = isPalindrone("asa");
      expect(result).to.be.eql(true);
    });
  });
});

const isPalindrone = (list) => {
    if (list === undefined || list.length === 0) {
        return undefined;
    }
    let a = 0;
    let b = list.length - 1;

    while(a < b){
        if(list[a] !== list[b])return false;
        a++;
        b--;
    }
    return true;
}