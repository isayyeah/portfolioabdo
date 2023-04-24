import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Pagination from 'react-bootstrap/Pagination';


function CertificationCard(props) {
    const { title, issuer } = props;
    return (
        <Card className="h-100">
           
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    
                    <br />
                    <span>{issuer}</span>
                    <br />
                    
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

function Certificats() {
    const certifications = [
        {
        
            title: 'Full-Stack Web Development with React Specialization',
            issuer: 'The Hong Kong University of Science and Technology'
            
        },
       
        {
           
            title: 'DevOps, Cloud, and Agile Foundations Specialization',
            issuer: 'IBM Skills Network'
        },
        {
            
            title: 'Introduction to Cloud Computing',
            issuer: 'IBM Skills '
        },
        {
            
            title: 'Python Functions,Files, and Dictionaries',
            issuer: 'Coursera Course Certificates'
        },
        {
            
            title: 'Data Collection and Processing with Python',
            issuer: 'Coursera Course Certificates'
        },
        {
            
            title: 'Front-end Web Ui Frameworks and Tools',
            issuer: 'Coursera Course Certificates'
        }
    ];
    const PAGE_SIZE = 3;
    const [activePage, setActivePage] = React.useState(1);

    const totalPages = Math.ceil(certifications.length / PAGE_SIZE);

    const handleClick = (event) => {
        setActivePage(event.target.text);
    }

    const pages = [];

    for (let number = 1; number <= totalPages; number++) {
        pages.push(
            <Pagination.Item key={number} active={number === activePage} onClick={handleClick}>
                {number}
            </Pagination.Item>,
        );
    }

    const startIndex = (activePage - 1) * PAGE_SIZE;
    const endIndex = activePage * PAGE_SIZE;
    const currentCertifications = certifications.slice(startIndex, endIndex);

    return (
        <div>
            <Row className="my-3">
                {currentCertifications.map(certification => (
                    <Col key={certification.id} xs={12} sm={6} lg={4} className="d-flex">
                        <CertificationCard {...certification} />
                    </Col>
                ))}
            </Row>
            <Row className="my-3">
                <Col>
                    <Pagination>{pages}</Pagination>
                </Col>
            </Row>
        </div>
    );
}

export default Certificats;