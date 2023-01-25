import React, { useState, useEffect } from "react";
import Filtrari from "./filtrari";
import Container from '@mui/material/Container';
import ResponsiveBarNav from "./navigare";
import { Route, Switch, useHistory } from "react-router-dom";
import Detalii from "./detalii"
import FormJoc from "./formjoc";
import AdresaGresita from "./adresagresita";
import About from "./about";

function App() {

  const [jocuri, setJocuri] = useState([]);
  const [modific, setModific] = useState(false);
  const [catDiscipline, setCatDiscipline] = useState([]);
  const [catGrupe, setCatGrupe] = useState([]);
  const [editez, setEditez] = useState({}); 
 
  useEffect(() => {
    fetch("http://localhost/jocuriPHP/jocuri.php")
      .then((rezultat) => rezultat.json())
      .then((sirjocuri) => setJocuri(sirjocuri));
  }, [modific]);

  useEffect(() => {
    fetch("http://localhost/jocuriPHP/discipline.php")
      .then((rezultat) => rezultat.json())
      .then((sirdis) => setCatDiscipline(sirdis));
  }, []);

  useEffect(() => {
    fetch("http://localhost/jocuriPHP/grupe.php")
      .then((rezultat) => rezultat.json())
      .then((sirgrupe) => setCatGrupe(sirgrupe));
  }, []);

 
  const addJoc = (elm) => {
    const dateScript = JSON.stringify(elm);
    const config = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: dateScript
    };
    fetch("http://localhost/jocuriPHP/jocuri.php", config).then(() => {
      setModific(!modific);
    });
};

  const deleteJoc = (id) => {
    const dateScript = JSON.stringify({ id: parseInt(id, 10) });
    const config = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: dateScript
  };
  fetch("http://localhost/jocuriPHP/jocuri.php", config).then(() => {
    setModific(!modific) 
  });
};

  const history = useHistory();
    const editareJoc = (id) => {
      var obiect = jocuri.find((item) => {
        return parseInt(item.id, 10) === parseInt(id, 10);
      });
      if (obiect) {
        setEditez(obiect);
        history.push("/Form"); 
      }
    };

    const modifJoc = (elm) => {
      const dateScript = JSON.stringify(elm);
      const config = {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: dateScript
      };
    fetch("http://localhost/jocuriPHP/jocuri.php", config).then(() => {
      setModific(!modific)
    });
    setEditez({});
    history.push("/Home"); 
  };
  
  return (
        <Container>
        <ResponsiveBarNav/>
        <Switch>
        <Route exact path={["/", "/Home"]} >
        <Filtrari
        catDiscipline={catDiscipline}
        catGrupe={catGrupe}
        jocuri={jocuri}
        editeaza={editareJoc}
        deleteJoc={deleteJoc}
      />
        </Route>
        <Route path="/detalii/:id" >
        <Detalii date={jocuri}/>
        </Route>
        <Route path="/Form">
          <FormJoc addjoc={addJoc}  edJoc={modifJoc} editjoc={editez} catDiscipline={catDiscipline}  
          catGrupe={catGrupe} />
          </Route>
        <Route path="/About">
        <About />
        </Route>
        <Route>
            <AdresaGresita />
        </Route>
        </Switch>
        </Container>
  );
  }

export default App;
