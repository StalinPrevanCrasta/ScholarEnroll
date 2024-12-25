import express from 'express';
import { MongoClient } from 'mongodb';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.json());
app.use(cors());

client.connect().then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Failed to connect to MongoDB', err);
});

app.post('/register', async (req, res) => {
    const data = req.body;
    try {
        const database = client.db('StudentDatabase');
        const collection = database.collection('Student');
        await collection.insertOne(data);
        res.status(200).send('Student registered successfully');
    } catch (err) {
        console.error(err);
        res.status(500).send('Error registering student');
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});