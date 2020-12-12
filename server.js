const express =require("express");
const app = express();
const PORT= process.env.PORT || 8080;

app.listen(PORT, ()=>{
    console.log(`app is running on http://localhost:${PORT}`);

});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.get("/", (req, res)=>{
    res.render("index");
});

