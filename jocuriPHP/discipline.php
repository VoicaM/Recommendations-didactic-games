<?php 
    require 'conectare.php';

    function efectGET($cnx) {
        $elem = [];
        $cda = "SELECT * FROM discipline";
        if ($rez = mysqli_query($cnx,$cda)) {
            while ($lin = mysqli_fetch_assoc($rez)) {
                $elem[] = $lin;
            }
            mysqli_free_result($rez);
        }
        echo json_encode($elem);
    }  
    
    function efectPOST($cnx) {
    }
  
    function efectPATCH($cnx) {
       
    }

    function efectDELETE($cnx) {
       
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