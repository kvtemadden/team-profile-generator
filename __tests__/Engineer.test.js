const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    describe("getRole", () => {
        it("Changes the employee role to Engineer", () => {
            const result = "Engineer";
            const e = new Engineer("Kate", "123", "kate@test.com", "kvtemadden");
            expect(e.getRole()).toBe(result);
        });
    });

    describe("getGithub", () => {
    it("Sets the GitHub username of the Engineer", () => {
        const github = "kvtemadden";
        const e = new Engineer("Kate", 123, "kate@test.com", "kvtemadden");
        expect(e.getGithub()).toBe(github);
    });
    });
});