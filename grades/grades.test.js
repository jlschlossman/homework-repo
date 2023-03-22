const arrayFunction = require("./grades.js")


describe("arrayFunction", () => {
    describe("addScore function", () => {
        test('item is added to scores', () => {
            arrayFunction.addScore('jeremy', 99);
            expect(arrayFunction.scores[0].name).toEqual("jeremy")
        })
    })
})