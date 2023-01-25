import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const FormJoc = (props) => {
    const [id, setId] = useState(props.editjoc.id);
    const [src, setSrc] = useState(props.editjoc.src);
    const [denumire, setDenumire] = useState(props.editjoc.denumire)
    const [cod_disciplina, setDisciplina] = useState(props.editjoc.cod_disciplina);
    const [cod_grupa, setGrupa] = useState(props.editjoc.cod_grupa);
    const[scopul, setScop] =useState(props.editjoc.scopul);
    const [sarcina, setSarcina] = useState(props.editjoc.sarcina);
    const[reguli, setReguli] =useState(props.editjoc.reguli);
    const[elemente_joc, setElementeJoc] =useState(props.editjoc.elemente_joc);
    const[materiale, setMateriale] =useState(props.editjoc.materiale);
    const[desfasurare, setDesfasurare] =useState(props.editjoc.desfasurare);
    const {catDiscipline, catGrupe} = props
    

    const pentruSubmit = (evt) => {
      evt.preventDefault(); 
        
        const joc = {
          src,
          denumire,   
          cod_disciplina,
          cod_grupa,
          scopul,
          sarcina,
          reguli,
          elemente_joc,
          materiale,
          desfasurare,
          id
        };

        if (id > 0) {
          props.edJoc(joc);
        } else {
          props.addjoc(joc);
        }

        setSrc("");
        setDenumire("");
        setDisciplina("");
        setGrupa("");
        setScop("");
        setSarcina("");
        setReguli("");
        setElementeJoc("");
        setMateriale("");
        setDesfasurare("");
        setId(0);
        
  };

      const stitlu ={
        display: 'flex',
        justifyContent: 'center',
        marginTop: "20px",
        marginBottom: "20px",
        color: "#5a5a5a",
        fontWeight: 'bold'
    }

      return (
        <>
         <div>
          <Typography variant="h5" style={stitlu}>{id > 0 ? "Formular editare" : "Formular adăugare"}</Typography>
          <form onSubmit={pentruSubmit}>
          <TextField sx={{"& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {borderColor: "#6495ED"}, 
          "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {borderColor: "#4169E1"}, mb:2}} 
            type="text" 
            placeholder="Denumirea imaginii" 
            fullWidth 
            value={src} 
            onChange={(e) => setSrc(e.target.value)}/>

          <TextField  sx={{"& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {borderColor: "#6495ED"}, 
          "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {borderColor: "#4169E1"}, mb:2}} 
            type="text" 
            placeholder="Denumirea jocului" 
            fullWidth 
            value={denumire} 
            onChange={(e) => setDenumire(e.target.value)}/>

          <FormControl sx={{minWidth: 120,"& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {borderColor: "#6495ED"}, 
            "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {borderColor: "#4169E1"}, mb:2}}>
          <Select
            value={cod_disciplina ? cod_disciplina : ""}
            onChange={(e) => setDisciplina(e.target.value)}
            displayEmpty
            >
            <MenuItem value=""><em>Alege disciplina</em></MenuItem>
            {catDiscipline.map((item) => (
            <MenuItem key={item.cod_disciplina} value={item.cod_disciplina}>{item.disciplina}</MenuItem>
            ))}
          </Select>
          </FormControl>           
          <br/>
          <FormControl sx={{minWidth: 120,"& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {borderColor: "#6495ED"}, 
          "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {borderColor: "#4169E1"}, mb:2}}>
          <Select
            value={cod_grupa ? cod_grupa : ""}
            onChange={(e) => setGrupa(e.target.value)}
            displayEmpty
          >
          <MenuItem value=""><em>Alege grupa</em></MenuItem>
          {catGrupe.map((item) => (
          <MenuItem key={item.cod_grupa} value={item.cod_grupa}>{item.grupa}</MenuItem>
          ))}
          </Select>
          </FormControl>  
          <TextField sx={{"& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {borderColor: "#6495ED"}, 
          "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {borderColor: "#4169E1"}, mb:2}} 
          multiline={true} 
          rows={2}
          type="text" 
          placeholder="Scopul" 
          fullWidth 
          value={scopul} onChange={(e) => setScop(e.target.value)}/>
          <TextField sx={{"& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {borderColor: "#6495ED"}, 
          "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {borderColor: "#4169E1"}, mb:2}}  
          type="text" 
          placeholder="Sarcina didactică" 
          fullWidth 
          value={sarcina} onChange={(e) => setSarcina(e.target.value)}/>
          <TextField sx={{"& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {borderColor: "#6495ED"}, 
          "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {borderColor: "#4169E1"}, mb:2}} 
          multiline={true} 
          rows={3} 
          type="text" 
          placeholder="Regulile jocului" 
          fullWidth
          value={reguli} onChange={(e) => setReguli(e.target.value)}/>
          <TextField sx={{"& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {borderColor: "#6495ED"}, 
          "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {borderColor: "#4169E1"}, mb:2}} 
          ype="text" 
          placeholder="Elemente joc" 
          fullWidth value={elemente_joc} 
          onChange={(e) => setElementeJoc(e.target.value)}/>
          <TextField sx={{"& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {borderColor: "#6495ED"}, 
          "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {borderColor: "#4169E1"}, mb:2}} 
          type="text" 
          placeholder="Materiale didactice" 
          fullWidth 
          value={materiale} 
          onChange={(e) => setMateriale(e.target.value)}/> 
          <TextField sx={{"& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {borderColor: "#6495ED"}, 
          "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {borderColor: "#4169E1"}, mb:2}} 
          multiline={true} 
          rows={6} 
          type="text" 
          placeholder="Desfășurarea jocului" 
          fullWidth 
          value={desfasurare}
          onChange={(e) => setDesfasurare(e.target.value)} />
          <div style= {{display: 'flex', justifyContent: 'flex-end'}} >
          <Button variant="contained" type="submit">Submit</Button></div>
          </form>
          </div>
          </>
          )
        }

    export default FormJoc;
