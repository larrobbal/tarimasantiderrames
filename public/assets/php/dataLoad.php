<?php
    $servername='localhost';
    $username='root';
    $password='c0merz1a*';
    $database='tarimas-antiderrame';

    $con=mysqli_connect($servername,$username,$password,$database);
    $ruta='productos.csv';
    $file=fopen($ruta,'r');
    while(!feof($file))
    {
        $cadena=fgets($file);
        $array=explode('|',$cadena);
        $idDescripcion=$array[0];
        $producto=$array[1];
        $descripcion=$array[2].' '.$array[3];
        $linea=$array[4];
        $acabado=$array[5];
        $material=$array[6];
        $calibre=$array[7];
        $capacidad=$array[8];
        $colores=$array[9];
        $anclaje=$array[10];
        $vaciado=$array[11];
        $largoT=$array[12];
        $anchoT=$array[13];
        $altoT=$array[14];
        $diametroT=$array[15];
        $largoC=$array[16];
        $anchoC=$array[17];
        $altoC=$array[18];
        $diamC=$array[19];
        $largoL=$array[20];
        $altoL=$array[21];
        $adicional=$array[22];
        $query="insert into descripcion_producto (id_descripcion,producto,descripcion,linea,acabado,material,calibre,capacidad,colores,anclaje,vaciado,largoTotal,anchoTotal,altoTotal,diametroTotal,largoCont,anchoCont,altoCont,diametroCont,largoLetrero,altoLetrero,adicional,imagen) 
        values ('$idDescripcion','$producto','$descripcion','$linea','$acabado','$material','$calibre','$capacidad','$colores','$anclaje','$vaciado','$largoT','$anchoT','$altoT','$diametroT','$largoC','$anchoC','$altoC','$diamC','$largoL','$altoL','$adicional','$idDescripcion');";
        echo $query.'<br/>';
        if(mysqli_query($con,$query))
            echo 'Done!';
        else
            echo 'Fault';
    }
?>