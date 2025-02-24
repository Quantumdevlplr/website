import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react';

interface CardData {
  image: string;
  name: string;
  designation: string;
  description: string;
}

const cardData: CardData[] = [
  {
    image: "holder.js/100px180", // Replace with actual image URLs
    name: "Person 1",
    designation: "Software Engineer",
    description: "Some quick example text about Person 1.  This can be longer and more detailed.",
  },
  {
    image: "holder.js/100px180", // Replace with actual image URLs
    name: "Person 2",
    designation: "Data Scientist",
    description: "More details about Person 2 and their contributions.  Explain their expertise.",
  },
  {
    image: "holder.js/100px180", // Replace with actual image URLs
    name: "Person 3",
    designation: "Project Manager",
    description: "Information about Person 3 and their role.  Highlight their achievements.",
  },
  {
    image: "holder.js/100px180", // Replace with actual image URLs
    name: "Person 4",
    designation: "UX Designer",
    description: "Details about Person 4 and their design philosophy.  Mention their skills.",
  },
];

const BasicExample: React.FC = () => {  // Explicitly type the component
  return (
    <div className="d-flex flex-wrap justify-content-around">
      {cardData.map((card, index) => (
        <Card key={index} style={{ width: '18rem', margin: '1rem' }}>
          <Card.Img variant="top" src={card.image} />
          <Card.Body>
            <Card.Title>{card.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{card.designation}</Card.Subtitle>
            <Card.Text>{card.description}</Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default BasicExample;