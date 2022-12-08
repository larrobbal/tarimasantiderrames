<?php
    include('dataSource.php');
    header("Content-Type: text/html;charset=utf-8");
    $str_json = file_get_contents('php://input');
    $response = json_decode($str_json, true);
    $data_source=new DataSource();
    if(isset($response['cat']))
    {
        $query="SELECT * FROM descripcion_producto ORDER BY id_descripcion ASC";
        $result_query = $data_source->exeConsulta($query);
        foreach($result_query as $row)
        {
            $result[]=Array('idDescripcion'=>$row['id_descripcion'],'producto'=>$row['producto'],'descripcion'=>$row['descripcion'],'linea'=>$row['linea'],'acabado'=>$row['acabado'],'material'=>$row['material'],'calibre'=>$row['calibre'],'capacidad'=>$row['capacidad'],'colores'=>$row['colores'],'anclaje'=>$row['anclaje'],
                            'vaciado'=>$row['vaciado'],'largototal'=>$row['largoTotal'],'anchototal'=>$row['anchoTotal'],'altototal'=>$row['altoTotal'],'diametrototal'=>$row['diametroTotal'],'largocont'=>$row['largoCont'],'anchocont'=>$row['anchoCont'],'altocont'=>$row['altoCont'],
                            'diametrocont'=>$row['diametroCont'],'largoletrero'=>$row['largoLetrero'],'altoletrero'=>$row['altoLetrero'],'adicional'=>$row['adicional'],'imagen'=>$row['imagen']);
        }
        $json=json_encode($result);
        echo $json;
    }
    else if(isset($response['idProducto']) || isset($_POST['idProducto']))
    {
        if(isset($_POST['idProducto']))
            $idProducto=$_POST['idProducto'];
        else
            $idProducto=$response['idProducto'];
        $query="SELECT descripcion,linea,acabado,material,calibre,capacidad,colores,anclaje,vaciado,largoTotal,anchoTotal,altoTotal,diametroTotal,largoCont,anchoCont,altoCont,diametroCont,largoLetrero,altoLetrero,adicional,imagen,url_ml, url_amz FROM descripcion_producto where id_descripcion = '$idProducto'";
        $result_query = $data_source->exeConsulta($query);
        foreach($result_query as $row)
        {
            $result[]=Array('descripcion'=>$row['descripcion'],'linea'=>$row['linea'],'acabado'=>$row['acabado'],'material'=>$row['material'],'calibre'=>$row['calibre'],'capacidad'=>$row['capacidad'],'colores'=>$row['colores'],'anclaje'=>$row['anclaje'],
                            'vaciado'=>$row['vaciado'],'largototal'=>$row['largoTotal'],'anchototal'=>$row['anchoTotal'],'altototal'=>$row['altoTotal'],'diametrototal'=>$row['diametroTotal'],'largocont'=>$row['largoCont'],'anchocont'=>$row['anchoCont'],'altocont'=>$row['altoCont'],
                            'diametrocont'=>$row['diametroCont'],'largoletrero'=>$row['largoLetrero'],'altoletrero'=>$row['altoLetrero'],'adicional'=>$row['adicional'],'imagen'=>$row['imagen'], 'url_ml'=>$row['url_ml'], 'url_amz'=>$row['url_amz']);
        }
        $json=json_encode($result);
        echo $json;
    }
?>