const {loginController} =require('../controllers/authController');
const {login} = require('../services/authServices')

describe("Test loginController", ()=>{
    test("Test status-code response", () => {
        const mockReq = {body: {email: "test@test.com", password: "test"}}
        const mockRes = {};
        const mockUser = {
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzg0ZjliYTE0NTEyMTI0MjY2ZWYyMjEiLCJzdWJzY3JpcHRpb24iOiJwcm8iLCJpYXQiOjE2Njk2NTkyNTd9.lm5n4lfj7_eAFqTYUAY-S-7RwU_DCp0cZcS8JAwy114",
            "user": {
                "email": "test@test.com",
                "subscription": "pro"
            }
        }      
        // jest.spyOn(login,  ).mockImplementationOnce(async ()=> mockUser)
        // const result = loginController(mockReq, mockRes)
        expect(loginController(mockReq, mockRes)).toEqual(res.status === 200)
        // expect(result.body.token).toBe()
        // expect(result.body.user).toEqual({
        //     "email": "test@test.com",
        //     "subscription": "pro"
        // })
        // done()
    })
})