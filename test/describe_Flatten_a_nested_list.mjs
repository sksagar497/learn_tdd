import { expect } from "chai";

describe.only('Flatten a nested list', () => {
    context('when the list is empty', () => {
        it('it should return nothing', () => {
            const result = flattenList([]);
            expect(result).to.be.undefined;
        })
    })
    context('when the list have not nested list', () => {
        it('it should return the list as it is', () => {
            const result = flattenList([1,2,3]);
            expect(result).to.be.eql([1,2,3]);
        })
    })
    context('when the list have nested list', () => {
        it('it should return the flatten list ', () => {
            const result = flattenList([1,2,[3,4,5],[7,8]]);
            expect(result).to.be.eql([1,2,3,4,5,7,8]);
        })
    })
})

const flattenList = (list) => {
    if (list === undefined || list.length === 0) {
        return undefined;
    }
    let flattenedArray = [];

    list.forEach(element => {
        if (Array.isArray(element)) {
            flattenedArray = flattenedArray.concat(flattenList(element));
        } else {
            flattenedArray.push(element);
        }
    });
    return flattenedArray;
}