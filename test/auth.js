const chai = require('chai')
const chaiHttp = require('chai-http')
const app = require('../server')
const util = require('util')

chai.use(chaiHttp)
chai.should()
let response, user

describe("Auth", () => {
    it("Register", (done) => {
        chai.request(app)
            .post('/api/v1/auth/register')
            .set({})
            .send({
                email: "example@email.com",
                password: '12345'
            })
            .end((err, res) => {
                response = res
                res.should.have.status(200)
                done()
            })
    })

    it("Login", (done) => {
        chai.request(app)
            .post('/api/v1/auth/login')
            .set({})
            .send({
                email: "example@email.com",
                password: '12345'
            })
            .end((err, res) => {
                user = res.body
                response = res
                res.should.have.status(200)
                done()
            })
    })

    afterEach(function () {
        if (this.currentTest.state == 'failed') {
            console.log("    Response body: " + util.inspect(response.body, { depth: null, colors: true }) + "\n");
        }
    })
})