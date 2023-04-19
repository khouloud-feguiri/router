import React from 'react';
import Card from 'react-bootstrap/Card';
import ReactStars from 'react-stars';
import './MovieCard.css';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const MovieCard = ({movie}) => {
  const navigate = useNavigate ()
 

  return (
    <div>
       
    <Card className='card' style={{ width: "18rem" }} >
      <Card.Img className='img' variant="top" src={movie.posterUrl} />
      <Card.Body className='body' >
        <Card.Title className='title'>{movie.title}</Card.Title>
        <Card.Text  className='description'> {movie.description}</Card.Text>
        <ReactStars className='rate'
          value = {movie.rate} size={30}  />
      </Card.Body>
      <Button variant="dark" onClick={() => navigate (`/Description/${movie.id}`)}>
      Description
    </Button>
      <Button variant="dark" onClick ={() => navigate(`../Trailer/${movie.id}`)}>
            trailer
          </Button>
    </Card>
    </div>
  )
}

export default MovieCard
