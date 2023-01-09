<?php

class DataBase{

    function connect(){
    
        try{
            $connection = "mysql:host=localhost;dbname=login;charset=utf8mb4";
            $pdo = new PDO($connection,"root","");
            return $pdo;
        }catch(Exception $e){
            print_r('Error connection: ' . $e->getMessage());
        }   
    }
}

?>