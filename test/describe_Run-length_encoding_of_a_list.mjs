import { expect } from "chai";
 describe.only('Pack consecutive duplicates of list elements into sublists', () => {
    context('when the list is empty', () => {
        it('it should return nothing', () => {
            const result = countDublicate([]);
            expect(result).to.be.undefined;
        })
    })
    context('when the list is not empty', () => {
        it('it should return the list with count and char', () => {
            const result = countDublicate([1,2,2,3,4,4,5]);
            expect(result).to.be.eql([[1,1],[2,2],[1,3],[2,4],[1,5]]);
        })
    })
    context('when the list have one element', () => {
        it('it should return the list with count 1', () => {
            const result = countDublicate([1]);
            expect(result).to.be.eql([[1,1]]);
        })
    })
 })

 const countDublicate = (list) => {
    if (list === undefined || list.length === 0) {
        return undefined;
    }

    const ans = [];
    let count = 1;

    for (let i = 1; i <= list.length; i++) {
        if (i === list.length || list[i] !== list[i - 1]) {
            ans.push([count, list[i - 1]]);
            count = 1;
        } else {
            count++;
        }
    }

    return ans;

 }