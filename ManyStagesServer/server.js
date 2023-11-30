const express = require('express');
const app = express();
const port = process.env.PORT ||5001;

app.get('/', (req, res) => {
    res.send(`Hello World from the backend server on ${port}!`)
});

app.use("/api/inventory", require("./routes/inventoryRoute"));
app.listen(port, () => console.log(`Backend server running on port ${port}`));