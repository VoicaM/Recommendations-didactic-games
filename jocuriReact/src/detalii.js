import React from "react";
import { useParams } from "react-router-dom";
import {Link} from "react-router-dom";
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { Typography } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Detalii = ({date}) => {
  const {id} = useParams();

  return (
<Container>
{date.filter((card) => card.id === id).map((card, id) => (
<div style={{paddingTop: "15px"}} key={id}>
<Typography variant= 'h5'><b>{card.denumire}</b></Typography>
<Typography><b>Scopul:</b>{' '}{card.scopul}</Typography>
<Typography><b>Sarcina didactică:</b>{' '}{card.sarcina}</Typography>
<Typography><b>Regulile jocului:</b>{' '}{card.reguli}</Typography>
<Typography><b>Elemente de joc:</b>{' '}{card.elemente_joc}</Typography>
<Typography><b>Materiale didactice:</b>{' '}{card.materiale}</Typography>
<Typography><b>Desfășurarea jocului</b></Typography>
<Typography style={{whiteSpace: 'pre-wrap'}}>{card.desfasurare}</Typography>
<Link style={{textDecoration: "none"}} to="/Home">
<Button sx={{marginTop: 2}} variant="contained" size="medium" startIcon={<ArrowBackIcon />}>BACK</Button>
</Link>
</div>
))}
</Container>
  )
}
export default Detalii;
