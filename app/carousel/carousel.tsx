import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample({ results }) {
    return (
      <Carousel>
        {results.map((result, index) => (
          <Carousel.Item key={index}>
            <h3>{result.title}</h3>
            <p>What a carousel {result.text}</p>
          </Carousel.Item>
        ))}
      </Carousel>
    );
  }
  

export default UncontrolledExample;