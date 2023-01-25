<?php 
    require 'conectare.php';

    function efectGET($cnx) {
        $elem = [];
        $cda = "SELECT * FROM jocuri";
        if ($rez = mysqli_query($cnx,$cda)) {
            while ($lin = mysqli_fetch_assoc($rez)) {
                $elem[] = $lin;
            }
            mysqli_free_result($rez);
        }
        echo json_encode($elem);
    }  
    
    function efectPOST($cnx) {
        $sir = citeste();
        $src = $sir['src'];  
        $denumire = $sir['denumire']; 
        $cod_disciplina = $sir['cod_disciplina']; 
        $cod_grupa = $sir['cod_grupa'];
        $scopul = $sir['scopul'];
        $sarcina = $sir['sarcina'];  
        $reguli = $sir['reguli']; 
        $elemente_joc = $sir['elemente_joc']; 
        $materiale = $sir['materiale'];
        $desfasurare = $sir['desfasurare'];

        $rasp = [];
        $stmt = mysqli_prepare($cnx, "INSERT INTO jocuri(src, denumire, cod_disciplina, cod_grupa, scopul, sarcina, reguli, elemente_joc,
        materiale, desfasurare) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
        mysqli_stmt_bind_param($stmt, 'ssiissssss', $src, $denumire, $cod_disciplina, $cod_grupa, $scopul, $sarcina, $reguli, 
        $elemente_joc, $materiale, $desfasurare);
        
        if(mysqli_stmt_execute($stmt)) {
            $rasp[] = ['rezultat' => "OK"];
            $rasp[] = ['id' => mysqli_stmt_insert_id ($stmt)];
        } else {
            $rasp[] = ['rezultat' => 'Eroare: ' . mysqli_error($cnx)];
        }
        echo json_encode($rasp); 
    }
  
    function efectPATCH($cnx) {
        $sir = citeste();
        $id = $sir['id']; 
        $src = $sir['src']; 
        $denumire = $sir['denumire']; 
        $cod_disciplina = $sir['cod_disciplina']; 
        $cod_grupa = $sir['cod_grupa'];
        $scopul = $sir['scopul'];
        $sarcina = $sir['sarcina']; 
        $reguli = $sir['reguli'];
        $elemente_joc = $sir['elemente_joc'];
        $materiale = $sir['materiale'];
        $desfasurare = $sir['desfasurare'];

        $rasp = [];
        $stmt = mysqli_prepare($cnx, "update jocuri SET src=?, denumire=?, cod_disciplina=?, cod_grupa=?, scopul=?, sarcina=?, reguli=?, 
        elemente_joc=?, materiale=?, desfasurare=? WHERE id=?");
        mysqli_stmt_bind_param($stmt, 'ssiissssssi', $src, $denumire, $cod_disciplina, $cod_grupa, $scopul, $sarcina, $reguli, 
        $elemente_joc, $materiale, $desfasurare, $id);
        if(mysqli_stmt_execute($stmt)) {
            $rasp[] = ['rezultat' => "OK"];
        } else {
            $rasp[] = ['rezultat' => 'Eroare: ' . mysqli_error($cnx)];
        }
        echo json_encode($rasp);
    }

    function efectDELETE($cnx) {
        $sir = citeste();
        $id = $sir['id'];

        $cda = "DELETE FROM jocuri WHERE id = $id";
        $rasp = [];

        if (mysqli_query($cnx, $cda)) {
            $rasp[] = ['rezultat' => "OK"];
        } else {
            $rasp[] = ['rezultat' => 'Eroare: ' . mysqli_error($cnx)];
        }
        echo json_encode($rasp);
    } 

    function citeste() {
        $json = file_get_contents('php://input');
        $sir = json_decode($json, true); 
        return $sir;
    }
    
    $met = $_SERVER['REQUEST_METHOD'];
    switch ($met) {
        case 'GET':
            efectGET($cnx);  
            break;
        
        case 'POST':
            efectPOST($cnx);  
            break;
      
        case 'PATCH':
            efectPATCH($cnx);  
            break;

        case 'DELETE':
            efectDELETE($cnx);  
            break;
    }

    mysqli_close($cnx);
?>