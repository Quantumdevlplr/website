import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import LinkedInIcon from '@mui/icons-material/LinkedIn'; // Import LinkedIn icon
import IconButton from '@mui/material/IconButton';

const useStyles = makeStyles((theme) => ({

  linkedinIcon: {
    color: '#0077B5', // LinkedIn blue
    '&:hover': {
      color: '#005882', // Darker LinkedIn blue on hover
    },
  },
  card: {
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    '&:hover': {
      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
      transform: 'translateY(-5px)',
    },
    backgroundColor: '#1f2937', // bg-gray-800 in hex
  },
  cardContent: {
    padding: '16px',
    textAlign: 'center',
  },
  cardImage: {
    borderRadius: '10px 10px 0 0',
    objectFit: 'cover', // Maintain aspect ratio and cover the area
    height: 350,       // Set a fixed height
  },
  name: {
    fontWeight: 600,
    fontSize: '1.2rem',
    color: '#fff',
  },
  designation: {
    color: '#fff',
    margin: '8px 0',
  },
  description: {
    fontSize: '0.9rem',
    color: '#fff',
    marginBottom: '16px',
    lineHeight: 1.5,
    textAlign: 'justify',
    // Add overflow properties for long text
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    '-webkit-line-clamp': 4, // Show maximum 4 lines by default
    '-webkit-box-orient': 'vertical',
  },
  expandedDescription: { // Style for expanded description
    overflow: 'hidden', // Keep overflow hidden for expanded view
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    '-webkit-line-clamp': 100, // Show many lines when expanded
    '-webkit-box-orient': 'vertical',
  },
  button: {
    color: '#0066cc',
    fontWeight: 'bold',
    textTransform: 'none',
    '&:hover': {
      backgroundColor: 'transparent',
      textDecoration: 'underline',
    },
  },
}));


const people = [
  {
    name: "Mr. Suneel Galgotia",
    designation: "Chancellor",
    description: "Galgotias University is dedicated to providing a transformative experience for students, focusing on intellectual, social, and personal growth to prepare them for leadership and citizenship. The institution emphasizes 360-degree transformation and strives for excellence at all levels. With a strong value system, cross-disciplinary learning, and flexible academic programs, Galgotias University has become synonymous with quality education. The university offers state-of-the-art infrastructure, domain-expert faculty, and international teaching standards, making it a preferred choice for higher education and a top recruitment destination for leading companies. Students engage in research and public service, contributing significantly to their fields. Galgotias University nurtures world-class professionals by fostering intellectual growth through its Thinking Quotient philosophy. The commitment to continuous development and new opportunities ensures a world-class educational environment, offering a journey of intellectual transformation.",
    image: "https://cilearningschool.com/galgotias_incubation_centre/web/wp-content/uploads/2024/08/sunil.jpg",
    linkedin: "https://www.linkedin.com/in/suneel-galgotia-77112b19/"
  },
  {
    name: "Dr. Dhruv",
    designation: "CEO",
    description: "In today's digital era, success lies in the integration of technology, skill development, and education. At Galgotias University, we are committed to continuously upgrading our programs to stay ahead of the fast-evolving technological landscape. We focus on preparing graduates with the technical skills and lifelong learning abilities needed for future careers and entrepreneurship. The university collaborates with industry leaders and regulatory bodies to ensure that education remains relevant. Beyond technical knowledge, we prioritize the development of moral values, intellectual integrity, and leadership qualities in our students, preparing them to become responsible, contributing citizens. With a vibrant campus life filled with clubs, sports, cultural activities, and hackathons, students are encouraged to explore diverse opportunities. I wish all students the best as they embark on their transformative journey at Galgotias University, which will shape their future.",
    image: "https://cilearningschool.com/galgotias_incubation_centre/web/wp-content/uploads/2024/08/ceo.jpg",
  },
  {
    name: "Dr. K. Mallikharjuna Babu",
    designation: "Vice Chancellor",
    description: "Higher education is a continuous journey, and at Galgotias University (GU), we focus on fostering lifelong learning to help students achieve career milestones. As a young, globally recognized institution, GU has made significant strides, including earning a NAAC A+ ranking in 2022 and NBA Accreditation for multiple programs. The university follows a student-centric, inclusive, and holistic approach, empowering students to pursue their goals while adapting to industry trends and research needs. GU offers multidisciplinary, flexible, and value-based programs that emphasize innovative teaching methods, real-world experiences, and the development of critical 21st-century skills like communication, critical thinking, and creativity. Our curriculum integrates internships, projects, and co-curricular activities to help students apply theoretical knowledge and become change-makers in their fields. We collaborate with stakeholders to maintain a research-focused, value-driven academic environment, enabling students to solve real-world problems with empathy and creativity for the betterment of society. Our vision is to provide an education that shapes lives and aligns with our existence and nature, creating impactful individuals ready to contribute to the world.",
    image: "https://gicrise.in/wp-content/themes/gicentre/assets/images/leader_img3.jpg",
  },
  {
    name: "Aradhana Galgotia",
    designation: "Director Operations",
    description: "The Indian higher education system is undergoing significant transformation, driven by social, economic, and demographic changes. At Galgotias University, we are continuously adapting to stay at the forefront of this evolution, offering globally relevant curricula, hands-on pedagogies, and state-of-the-art infrastructure. Our use of digital learning, blended learning, MOOCs, and a vibrant startup ecosystem enriches campus life. We offer a diverse range of courses in STEM, liberal education, and other fields, fostering research-based learning and personality development.Inspired by Rabindranath Tagore’s philosophy of holistic education, we focus on developing well-rounded individuals. Following Ratan Tata’s vision, we aim to increase education accessibility through online programs, helping students across India become employable and contributing members of society. I welcome you to Galgotias University and look forward to supporting your journey to become confident, resilient, and ready to contribute to India’s growth.",
    image: "https://gicrise.in/wp-content/themes/gicentre/assets/images/leader_img4.jpg",
  },
];

export default function PersonCards() {
  const classes = useStyles();
  const [expandedIndex, setExpandedIndex] = React.useState<number | null>(null);

  const handleReadMoreClick = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const handleLinkedInClick = (linkedinUrl: string | undefined) => { // Type the argument
    if (linkedinUrl) {
      window.open(linkedinUrl, '_blank');
    }
  };

  return (
    <Grid container spacing={2} justifyContent="center">
      {people.map((person, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                component="img"
                className={classes.cardImage}
                image={person.image}
                alt={person.name}
              />
              <CardContent className={classes.cardContent}>
                <Typography className={classes.name} variant="h6">
                  {person.name}
                </Typography>
                <Typography className={classes.designation} variant="body2">
                  {person.designation}
                </Typography>
                <Typography className={expandedIndex === index ? classes.expandedDescription : classes.description} >
                  {person.description}
                </Typography>

                {person.description.length > 150 && (
                  <Button
                    className={classes.button}
                    size="small"
                    onClick={() => handleReadMoreClick(index)}
                  >
                    {expandedIndex === index ? 'Read Less' : 'Read More'}
                  </Button>
                )}
                <IconButton
                    className={classes.linkedinIcon}
                    onClick={() => handleLinkedInClick(person.linkedin)}
                    aria-label="LinkedIn"
                    disabled={!person.linkedin} // Disable if no LinkedIn URL
                  >
                    <LinkedInIcon />
                  </IconButton>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
