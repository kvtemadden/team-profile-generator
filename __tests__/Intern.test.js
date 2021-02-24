const Intern = require("../lib/Intern");

describe("Intern", () => {
    describe("getRole", () => {
        it("Changes the employee role to Intern", () => {
            const result = "Intern";
            const i = new Intern("Kate", "123", "kate@test.com", "UoB");
            expect(i.getRole()).toBe(result);
        });
    });

    describe("getSchool", () => {
    it("Sets the school username of the Intern", () => {
        const school = "UoB";
        const e = new Intern("Kate", 123, "kate@test.com", "UoB");
        expect(e.getSchool()).toBe(school);
    });
    });
});