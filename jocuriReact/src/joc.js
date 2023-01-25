import React from "react";
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Link} from "react-router-dom";


const Joc = (props) => {
  const { src, denumire, id, editeaza, sterge } = props; 

  return (
    <Card sx={{   minWidth: "200px" }}>
    <Link style={{textDecoration: 'none', color: "black"}} to={`/detalii/${id}`}>
    <CardActionArea>
      <CardMedia component="img" height="auto" width="auto"
      src={(`imagini/${src}`)} alt="Generic placeholder"/>
      <CardContent>
        <Typography gutterBottom variant="body1" fontWeight='bold' component="div">
          {denumire}
        </Typography>
      </CardContent>
      </CardActionArea>
      </Link>
      <CardActions>
        <Button onClick={() => editeaza(id)} id={id} size="small">Edit</Button>
        <Button onClick={() => sterge(id)} id={id} size="small">Delete</Button>
      </CardActions>
    </Card> 
  );
}

export default Joc;