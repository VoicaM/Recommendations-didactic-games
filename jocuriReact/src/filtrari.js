import React, { useState, useEffect } from "react";
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { TextField } from "@mui/material";
import Box from '@mui/material/Box';
import Jocuri from "./jocuri";
import Grid from '@mui/material/Grid';


const Filtrari = (props) => {

  const [disciplina, setDisciplina] = useState("");
  const [grupa, setGrupa] = useState("");
  let [searchJocuri, setSearchJocuri] = useState("");
  let [jocuriFiltrate, setJocuriFiltrate] = useState([]);
  const{catDiscipline, catGrupe}= props

  const FiltrareJocuri = ({ date }, cod_disciplina, cod_grupa) => {
    cod_disciplina = disciplina;
    cod_grupa = grupa;

  useEffect(() => {
  setJocuriFiltrate(date);
  }, [date]);

  if (cod_disciplina !== "") {
  jocuriFiltrate = jocuriFiltrate.filter((item) => {
  return item.cod_disciplina === cod_disciplina;
  });
  }

  if (cod_grupa !== "") {
  jocuriFiltrate = jocuriFiltrate.filter((item) => {
  return item.cod_grupa === cod_grupa;
  });
  }

  if (searchJocuri !== "") {
  jocuriFiltrate = jocuriFiltrate.filter((item) => {
  return item.denumire.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "").replace(/[^a-zA-Z ]+/g, '').replace('/ {2,}/',' ').includes(searchJocuri);
  });
  } 
  
  if (jocuriFiltrate.length !== 0) {
  return <Jocuri jocuri={jocuriFiltrate} editeaza={props.editeaza}  sterge={props.deleteJoc} />;
  }
}
  return (
      <Box>
      <Grid container>
      <Grid style={{ flexGrow: "1" }}>
      <FormControl variant="standard" sx={{m:2, minWidth: 140 }}>
      <Select
          value={disciplina}
          onChange={(e) => setDisciplina(e.target.value)}
          displayEmpty
         >
          <MenuItem value=""><em>Alege disciplina</em></MenuItem>
          {catDiscipline.map((item) => (
         <MenuItem key={item.cod_disciplina} value={item.cod_disciplina}>{item.disciplina}</MenuItem>
         ))}
         </Select>
      </FormControl>
      
      <FormControl variant="standard"  sx={{m:2, minWidth: 120 }}>
      <Select onChange={(e) => setGrupa(e.target.value)} 
       value={grupa}
       displayEmpty>
      <MenuItem value=""><em>Alege grupa</em></MenuItem>
        {catGrupe.map((item) => (
          <MenuItem key={item.cod_grupa} value={item.cod_grupa}>
            {item.grupa}
          </MenuItem>
        ))}
      </Select>
      </FormControl>
      </Grid>
      <Grid item xs={3} sx={{marginLeft:2 }} >
      <TextField 
          label="Search"
          type="search"
          variant="standard"
          value={searchJocuri}
          onChange={(event) => setSearchJocuri(event.target.value)} 
        /> 
      </Grid>
      </Grid>
      <FiltrareJocuri date={props.jocuri} cod_disciplina={disciplina} cod_grupa={grupa} />
      </Box>
     
  );
};

export default Filtrari;
