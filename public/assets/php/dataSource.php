<?php
include('config.php');
class DataSource
{
    private $conn;
    public function conect()
    {
        try
        {
            $conn = new mysqli(DBHOST,DBUSER,DBPASS,DBNAME);
            $conn->set_charset("utf8");
            return $conn;
        }
        catch(Exception $e)
        {
            echo $e->message;
            die("Conection failed: ".$conn->connect_error);
        }
    }

    public function exeConsulta($sql)
    {
        $link=$this->conect();
        if($sql!="")
        {
            $arreglo = array();
            $result = $link->query($sql);
            while($data=mysqli_fetch_assoc($result))
            {
                $arreglo[]=$data;
            }
            return $arreglo;
        }
        else
        {
            return 0;
        }
    }

    public function exeCUD($sql)
    {
        $link=$this->conect();
        if($sql!="")
        {
            $result = $link->query($sql);
            $countRow=mysqli_affected_rows($link);
            return $countRow;
        }
        else
        {
            return 0;
        }
    }
}
?>