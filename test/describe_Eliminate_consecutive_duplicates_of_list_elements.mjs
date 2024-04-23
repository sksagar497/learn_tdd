import { expect } from "chai";

describe.only('Eliminate consecutive duplicate of list', () => {
    context('when the list have no elements', () => {
        it('It should return nothing ', () => {
            const result = eliminateDuplicate([]);
            expect(result).to.be.undefined;
        })
    })
    context('when the list have no duplicate elements', () => {
        it('It should return the list as it is ', () => {
            const result = eliminateDuplicate([1,2,3]);
            expect(result).to.be.eql([1,2,3]);
        })
    })
    context('when the list have  duplicate elements', () => {
        it('It should return the list with no duplication ', () => {
            const result = eliminateDuplicate(['a', 'a', 'a', 'a', 'b', 'c', 'c', 'a', 'a', 'd', 'e', 'e', 'e', 'e']);
            expect(result).to.be.eql(['a','b','c','d','e']);
        })
    })
})
const eliminateDuplicate = (list) => {
    if (list === undefined || list.length === 0) {
        return undefined;
    }

    if(list.length == 1)return list;
    list.sort();
    let a = 0;
    let b = 1;
    const ans = [];
    for(b = 1;b<list.length;b++){
        if(list[a] === list[b]){
            continue;
        }
        else {
            ans.push(list[a]);
            a = b;
        }
    }
    ans.push(list[a]);
    return ans;
}