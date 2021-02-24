const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("getName", () => {
    it("Sets the name of the employee", () => {
        const name = "Kate";
        const e = new Employee(name);
        expect(e.name).toBe(name);
    });
    });

    describe("getID", () => {
    it("Sets the ID of the employee", () => {
        const idTest = 123;
        const e = new Employee("Kate", idTest);
        expect(e.id).toBe(idTest);
    });
    });

    describe("getEmail", () => {
    it("Sets the email address for the employee", () => {
        const emailTest = "test@test.com";
        const e = new Employee("Kate", 123, emailTest);
        expect(e.email).toBe(emailTest);
    });
    });

    describe("getRole", () => {
        it("Sets the role of the employee to default Employee", () => {
            const result = "Employee";
            const e = new Employee("Kate", "123", "kate@test.com");
            expect(e.getRole()).toBe(result);
        });
    });
});