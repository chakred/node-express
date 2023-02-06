import { Router } from "express"

const router = new Router()
const PORT = 5000

router.post('/posts', (req, res) => {
    console.log(req.body)
    res.status(200).json(`Server works with port:${PORT}`)
})


router.get('/', (req, res) => {
    console.log(req.query)
    res.status(200).json(`Server works with port:${PORT}`)
})
// const index = (app) => {
//     app.get('/', (req, res) => {
//         console.log(req.query);
//         res.status(200).json(`Server works with port:${PORT}`);
//     });
// }

// const posts = (app) => {
//     app.post('/api/posts', (req, res) => {
//         console.log(req.body);
//         res.status(200).json(`Server works with port:${PORT}`);
//     });
// }


export default {
    router
}