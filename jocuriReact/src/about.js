import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';


const stilt = {
    indent: {textIndent: "50px", marginTop: "20px"}
}

const stilh = {
    h2: {color: "#303436", fontStyle:"italic", marginTop: "20px"}
}

const About = () => {
    return (
   <Container>
   <Typography style={stilh.h2} variant= 'h5'><b>Despre DGAMES</b></Typography>
   <br/>
    <img className="m-3" src="imagini/imabout.jpg"  alt="Generic placeholder"></img>
    <Typography style={stilt.indent}>Aplicația DGAMES vine în sprijinul profesorilor pentru învățământul preșcolar deoarece
    prin intermediul acesteia, se pot găsi cu ușurință jocurile didactice căutate. Acest fapt de datorează modului în care
    este construită aplicația, prin prisma căreia jocurile pot fi filtrate în funcție de disciplină sau grupă. De asemenea,
    există posibilitatea și de căuta jocuri după denumirea lor. Astfel, jocurile didactice pot fi găsite în timp util.
    </Typography>
    </Container>
     );
}

export default About;