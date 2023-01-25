import React from "react";
import Grid from '@mui/material/Grid';
import Joc from "./joc";


const Jocuri = (props) => {
  const { jocuri, editeaza, sterge } = props;

  return (
    <Grid container spacing={4} paddingTop="20px"  >
     {jocuri.map((item) =>   
     <Grid item xs={12} sm={6} md={4} key={item.id}>
     <Joc denumire={item.denumire} src={item.src}  id={item.id}  editeaza={editeaza}  sterge={sterge}   />
    </Grid>
  )} 
    </Grid>
  );
};

export default Jocuri;
