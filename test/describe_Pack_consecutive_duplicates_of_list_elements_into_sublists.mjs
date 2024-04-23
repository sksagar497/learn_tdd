import { expect } from "chai";
 describe.only('Pack consecutive duplicates of list elements into sublists', () => {
    context('when the list is empty', () => {
        it('it should return nothing', () => {
            const result = packDublicate([]);
            expect(result).to.be.undefined;
        })
    })
    context('when the list is not empty', () => {
        it('it should return the list with pack of element in sublist', () => {
            const result = packDublicate([1,2,2,3,4,4,5]);
            expect(result).to.be.eql([[1],[2,2],[3],[4,4],[5]]);
        })
    })
 })

 const packDublicate = (list) => {
    if (list === undefined || list.length === 0) {
        return undefined;
    }
    if(list.length == 1)return list;
    list.sort();
    let char = null;
    let b = 0;
    const ans = [];
    let temp = [];
    for(b = 0;b<list.length;b++){
       if(char === null){
        char = list[b];
        temp.push(list[b]);
       }
       else if(list[b] === char){
        temp.push(char);
       }
       else {
        ans.push(temp);
        temp = [];
        char = list[b];
        temp.push(char);
       }
    }
    ans.push(temp);
    return ans;

 }