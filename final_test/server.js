import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan'; // Importer morgan
import cors from 'cors'; // Importer cors

import { notFoundError, errorHandler } from './middlewares/error-handler.js';

import phdStudent from './routes/phdStudent.js';
import conference from './routes/conference.js';

const app = express();
const port = process.env.PORT || 9090;
const databaseName = 'examen2cinfo2324sp';

const db_url = process.env.DB_URL || `mongodb://localhost:27017`;

mongoose.set('debug', true);
mongoose.Promise = global.Promise;

mongoose
  .connect(`${db_url}/${databaseName}`)
  .then(() => {
    console.log(`Connected to ${databaseName}`);
  })
  .catch(err => {
    console.log(err);
  });

app.use(cors()); // Utiliser CORS
app.use(morgan('dev')); // Utiliser morgan
app.use(express.json()); // Pour analyser application/json
app.use(express.urlencoded({ extended: true })); // Pour analyser application/x-www-form-urlencoded
app.use('/img', express.static('public/images')); // Servir les fichiers sous le dossier public/images

// A chaque requête, exécutez ce qui suit
app.use((req, res, next) => {
  console.log("Middleware just ran !");
  next();
});
/*
// Sur toute demande à /gse, exécutez ce qui suit
app.use('/gse', (req, res, next) => {
  console.log("Middleware just ran on a gse route !");
  next();
});
*/


app.use('/conferences', conference);
app.use('/phd-students', phdStudent);
// app.use('/scientificPaper', scientificPaper);



// Utiliser le middleware de routes introuvables
app.use(notFoundError);
// Utiliser le middleware gestionnaire d'erreurs
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});