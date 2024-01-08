import { validationResult } from 'express-validator'; // Importer express-validator

import PhdStudent from '../models/phdStudent.js';

export function addOnce(req, res) {
    // Trouver les erreurs de validation dans cette requête et les envelopper dans un objet
    if(!validationResult(req).isEmpty()) {
        res.status(400).json({ errors: validationResult(req).array() });
    }
    else {
        // Invoquer la méthode create directement sur le modèle
        PhdStudent
        .create({
            fullname: req.body.fullname,
            email: req.body.email,
            phone: req.body.phone,
            // Récupérer l'URL de l'image pour l'insérer dans la BD
            image: `${req.protocol}://${req.get('host')}/img/${req.file.filename}`
        })
        .then(newPhdStudent => {
            res.status(200).json( newPhdStudent._id);
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
    }
}

export function getAll(req, res) {
    PhdStudent
    .find({})
    .then(docs => {
        res.status(200).json(docs);
    })
    .catch(err => {
        res.status(500).json({ error: err });
    });
}