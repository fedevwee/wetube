import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import morgan from 'morgan';

const app = express();

const PORT = 4000;

const handleListening = () => {
  console.log(`✅Listening on: http://localhost:${PORT}`)
}

const handleHome = (req, res) => {
  res.send('Hello from home!');
}

const handleProfile = (req, res) => {
  res.send('You are on my Profile');
}


app.use(helmet());
app.use(morgan("dev"));

app.get('/', handleHome);
app.get('/profile', handleProfile);

app.listen(PORT, handleListening);