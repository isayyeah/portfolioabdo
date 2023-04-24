import React from 'react';
import Card from 'react-bootstrap/Card';

const projects = [
    {
        name: "Application Mobile en Java de Pokemon à l'aide des Apis",
        school: "EMSI Marrakech",
        link: "https://github.com/elbyaz/PokemonAPI-Java/tree/master/PokemonAPI-Java-master"
    },
    {
        name: "Application Web Portfolio en React",
        school: "EMSI Marrakech",
        link: "https://github.com/isayyeah/elby-portfolio"
    },
    {
        name: "Application Web de jeu de Tic Tac Toe en React",
        school: "EMSI Marrakech",
        link: "https://github.com/isayyeah/tictactoeXO_ELBYAZ_ABDERRAHMAN"
    }
];

const ProjectCard = () => {
    return (
        <div className="project-container">
            {projects.map((project, index) => (
                <Card key={index} className="project-card">
                    <Card.Body>
                        <Card.Title className="project-title">{project.name}</Card.Title>
                        {project.school && <Card.Subtitle className="project-school">{project.school}</Card.Subtitle>}
                        {project.competition && <Card.Text className="project-competition">{project.competition}</Card.Text>}
                        <Card.Link href={project.link} className="project-link">Voir le projet</Card.Link>
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
};

export default ProjectCard;
