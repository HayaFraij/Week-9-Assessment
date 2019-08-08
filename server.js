const express = require('express');
const app = express();

app.use(express.json())
app.get('/', (req, res) => {
    res.json("it's working!")
})

app.get('/tasks', (req, res) => {
    res.json(tasks)
})

app.post('/tasks', (req, res) => {
    console.log(req.body);
    tasks.push(req.body);
    res.json(tasks)
})

app.delete('/tasks/:id', (req, res) => {
    let index = parseInt(req.params.id);
    console.log(index);
    let result = tasks.filter(elem => {
        return elem.id !== index
    });
    res.json(result)
})




const tasks = [
    {
        id: 1,
        title: 'solve the assesment!'
    },
    {
        id: 2,
        title: 'Go back home!'
    },
    {
        id: 3,
        title: 'Sleep till tomorow!!'
    }
]
const PORT =2000;
app.listen(PORT, () => console.log(`You are listining to port: ${PORT}`))