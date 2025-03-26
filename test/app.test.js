const request = require('supertest');
const app = require('../index');

describe("API endpoints", () =>{
    it("should return all ufs - findAll", async () => {
        const res = await request(app).get("/ufs");
        expect(res.statusCode).toEqual(200);
        expect(res.body.length).toBe(27);
    });

    it("should return AC uf - findById", async () => {
        const res = await request(app).get("/ufs/1");
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual({
            "id": 1,
            "uf": "AC",
            "nome": "Acre"
        });
    })

    it("should return not found uf", async () => {
        const res = await request(app).get("/ufs/123");
        expect(res.statusCode).toEqual(404);
        expect(res.body).toHaveProperty("message", "Uf not found");
    });

    it("should return invalid param", async () => {
        const res = await request(app).get("/ufs/qwe");
        expect(res.statusCode).toEqual(404);
        expect(res.body).toHaveProperty("message", "Invalid params");
    });

    it("should return uf by name - findByName", async () => {
        const res = await request(app).get("/ufs?name=Rio");
        expect(res.statusCode).toEqual(200);
        expect(res.body.length).toBe(3);
    });
    
    it("should return no uf found - findByName", async () => {
        const res = await request(app).get("/ufs?name=asdfasdf");
        expect(res.statusCode).toEqual(404);
        expect(res.body).toHaveProperty("message", "No UF found");
    });

});