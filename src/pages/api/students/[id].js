export default function handler(req, res) {
    const id = +req.query.id
    res.status(200).json({
        id,
        name: `Edward E`,
        email: `edwardee${id}@gmail.com`
    })
}