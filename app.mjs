import express from "express"

const app = express();
const port = 4000;


app.get("/profiles", (req, res) =>{
    const data = {
        "data":  {
            "name": "john",
            "age": 20
        }
    }
    return res.json(data);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});