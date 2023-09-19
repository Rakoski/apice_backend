const express = require("express")
const app = express();
const port = 3000;

app.listen(port, (error) => {
    if (error) {
        console.log("Deu erro", error);
        return;
    }
    console.log("Subiu")
})

// tava funfando:
// netstat -tuln | grep 3000
// tcp6       0      0 :::3000                 :::*                    OUÇA
