import express from "express";

// array apaga os dados depois, logo: tem q usar um banco:  Mongo

const posts = [
    { id: 1, descricao: "Gato um", imagem: "https://placecats.com/millie/300/150" },
    { id: 2, descricao: "Gato dois", imagem: "https://placecats.com/millie/300/150" },
    { id: 3, descricao: "Gato tres", imagem: "https://placecats.com/millie/300/150"},
];

const app = express();
app.use(express.json());

app.listen(3000, () => {
    console.log("Servidor escutando...");
});

app.get("/posts", (req, res) => {
    res.status(200).json(posts);
});

function buscarpostporID(id){
    return posts.findIndex((post) => {
        return post.id === Number(id)
    })
}

app.get("/posts/:id", (req, res) => {
    const index = buscarpostporID(req.params.id)
    res.status(200).json(posts[index]);
});