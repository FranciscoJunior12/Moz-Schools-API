const app = require("./app.js")

require('dotenv').config();
const port = process.env.PORT || "5001"

app.listen(port, () => {
    console.log(`servidor rodando em http://localhost:${port}`);
});

