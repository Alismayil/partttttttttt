import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
const { Schema } = mongoose;

const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

const ExamSchema = new Schema({
    name: String,
    price: Number,
});
const ExamPart999 = mongoose.model('ExamPart999', ExamSchema);

app.get('/exam', async (req, res) => {
    const data = await ExamPart999.find({})
    res.send(data)
})

app.get('/exam/:id', async (req, res) => {
    try {
        const { id } = req.params
        const data = await ExamPart999.findById(id)
        res.status(200).send(data)
    } catch (error) {
        res.status(404).send(error)

    }
})

app.delete('/exam/:id', async (req, res) => {
    try {
        const { id } = req.params
        const data = await ExamPart999.findByIdAndDelete(id)
        res.status(200).send("Delete Product")
    } catch (error) {
        res.status(404).send("Not Delete Product")

    }
})

app.post('/exam', async (req, res) => {
    try {
        const data =new ExamPart999(req.body)
        await data.save()
        res.status(200).send("Create Product")
    } catch (error) {
        res.status(404).send("Not Create Product")

    }
})

mongoose.connect('mongodb+srv://AliIsmayil:ali123@cluster0.tzldidp.mongodb.net/')
    .then(() => console.log('Connected!'));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})