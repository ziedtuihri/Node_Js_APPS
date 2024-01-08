import { validationResult } from 'express-validator'; // Importer express-validator

import Conference from '../models/conference.js';

export function addOnce(req, res) {
    // Trouver les erreurs de validation dans cette requête et les envelopper dans un objet
    if(!validationResult(req).isEmpty()) {
        res.status(400).json({ errors: validationResult(req).array() });
    }
    else {
        // Invoquer la méthode create directement sur le modèle
        Conference
        .create({
            name: req.body.name,
            description: req.body.description,
            nbrPaperMax: req.body.nbrPaperMax,
        })
        .then(newConference => {
            res.status(200).json( newConference);
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
    }
}

export function getAll(req, res) {
    Conference
    .find({})
    .then(docs => {
        res.status(200).json(docs);
    })
    .catch(err => {
        res.status(500).json({ error: err });
    });
}