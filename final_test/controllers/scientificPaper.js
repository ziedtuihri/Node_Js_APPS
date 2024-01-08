import { validationResult } from 'express-validator'; // Importer express-validator

import ScientificPaper from '../models/scientificPaper.js';

export function addOnce(req, res) {
    // Trouver les erreurs de validation dans cette requête et les envelopper dans un objet
    if(!validationResult(req).isEmpty()) {
        res.status(400).json({ errors: validationResult(req).array() });
    }
    else {
        // Invoquer la méthode create directement sur le modèle
        ScientificPaper
        .create({
            phdStudentId: req.body.phdStudentId,
            conferenceId: req.body.conferenceId,
            status: req.body.status,
        })
        .then(newScientificPaper => {
            res.status(200).json( newScientificPaper);
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
    }
}
