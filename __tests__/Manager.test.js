const Manager = require("../lib/Manager");

describe("Manager", () => {
    describe("getRole", () => {
        it("Changes the employee role to Manager", () => {
            const result = "Manager";
            const e = new Manager("Kate", "123", "kate@test.com", "kvtemadden");
            expect(e.getRole()).toBe(result);
        });
    });

    describe("getOfficeNumber", () => {
    it("Sets the office number for the Manager", () => {
        const officeNum = 44121;
        const e = new Manager("Kate", 123, "kate@test.com", 44121);
        expect(e.getOfficeNumber()).toBe(officeNum);
    });
    });
});