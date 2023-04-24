import React from "react";
import { Card } from "react-bootstrap";

function Formations() {
    const formations = [
       
        {
            diplome: "Ingénierie Informatique et Réseaux",
            etablissement: "EMSI , Marrakech",
            annees: "2021 - en cours"
        },
        {
            diplome: "OFPPT - Marrakech",
            etablissement: "OFPPT, sidi youssef ben ali",
            annees: "2018 - 2020"
        },
        {
            diplome: "BAC - Science Physique",
            etablissement: "Etablissement EL BACHIR, Marrakech",
            annees: "2011 - 2012"
        },
    ];

    return (
        <section className="section">
            {formations.map((formation) => (
                <Card key={formation.diplome} className="mb-3">
                    <Card.Body>
                        <Card.Title>{formation.diplome}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                            {formation.etablissement}
                        </Card.Subtitle>
                        <Card.Text>{formation.annees}</Card.Text>
                    </Card.Body>
                </Card>
            ))}
        </section>
    );
}

export default Formations;