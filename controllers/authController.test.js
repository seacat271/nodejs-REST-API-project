const {loginController} =require('./authController');
const {login} = require('../services/authServices')

describe("Test loginController", () => {
    it("Test response status-code 200", async () => {
        const mockReq = {body: {email: "test@test.com", password: "test"}}
        const mockRes = {};
        const mockUser = {
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzg0ZjliYTE0NTEyMTI0MjY2ZWYyMjEiLCJzdWJzY3JpcHRpb24iOiJwcm8iLCJpYXQiOjE2Njk2NTkyNTd9.lm5n4lfj7_eAFqTYUAY-S-7RwU_DCp0cZcS8JAwy114",
            "user": {
                "email": "test@test.com",
                "subscription": "pro"
            }
        }      
        jest.mock("login").mockResolvedValue(mockUser)
        // loginController(mockReq, mockRes)
        mockReq = await loginController(mockReq, mockRes);
        expect(result).toEqual(mockRes.status === 200)
        // expect(result.body.token).toBe()
        // expect(result.body.user).toEqual({
        //     "email": "test@test.com",
        //     "subscription": "pro"
        // })
        // done()
    })

    it("Test response should have token", async () => {

    })

    it("Test response should have user Object", async () => {

    })
})