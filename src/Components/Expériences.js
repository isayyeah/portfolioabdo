import React from 'react';
import { Card } from 'primereact/card';

const ExperienceCard = ({  title,  duration, courses }) => {
    return (
        <Card title={title}  footer={duration}>
            <div>
                <h5>Tâches:</h5>
                <ul>
                    {courses.map((course, index) => (
                        <li key={index}>{course}</li>
                    ))}
                </ul>
            </div>
        </Card>
    );
};

const Expériences = () => {
    // Données pour chaque expérience
    const experienceData = [
        {
            
            title: 'Stage fin d\'année Développeur informatique chez SEOCOM :',
            location: 'Marrakech, Maroc',
            courses: [
                'Création application Web de Gestion des Agences Immobilière.',
                'Création  application Web sous laravel et mysql.'
            ],
            duration: '01/07/20202  - 31/08/2022'
        },
        
        {
            
            title: 'Stage fin de formation de Développeur informatique chez Smart :',
            location: 'Marrakech, Maroc',
            courses: ['Création application mobile E-commerce (Android Java).',
                'Création application web de gestion de stock (ASP.net).'],
                duration: '20/01/2020 - 22/02/2020 '
        }
        
    ];

    return (
        <section className="section">
            <div className="experience-grid">
                {experienceData.map((experience, index) => (
                    <div key={index} className="card" style={{ backgroundColor: "#f2f2f2", marginBottom: "20px" }}>
                        <ExperienceCard
                            title={experience.title}
                            position={experience.position}
                            duration={experience.duration}
                            courses={experience.courses}
                        />
                    </div>
                ))}
            </div>
        </section>

    );
};

export default Expériences;
