import express from 'express';
import mongoose, { mongo } from 'mongoose';
import cors from 'cors';

import routes from './routes/soccerRoute';

const app = express();
const PORT = 4000;

// Mongo connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/soccerDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Body parser setup (express version)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//CORS setup
app.use(cors());

//config routes
routes(app);

app.get('/', (req, res) => {
  res.send('Tudo ok');
});

app.listen(PORT, () => {
  console.log(`Your soccer server is running on port ${PORT}`);
});
