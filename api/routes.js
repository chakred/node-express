const PORT = 5000;

const index = (app) => {
    app.get('/', (req, res) => {
        console.log(req.query);
        res.status(200).json(`Server works with port:${PORT}`);
    });
}

const posts = (app) => {
    app.post('/posts', (req, res) => {
        console.log(req.body);
        res.status(200).json(`Server works with port:${PORT}`);
    });
}


export default {
    index,
    posts
}