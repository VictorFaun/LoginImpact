<?php
    require_once("../db/DataBase.php");
    class Usuario extends DataBase{

        public static function getAllUsers(){
            $bd= parent::connect();
            $sql="SELECT * FROM USER";
            $sql=$bd->prepare($sql);
            $sql->execute();
            return $resultado=$sql->fetchAll(PDO::FETCH_ASSOC);
        }

        public static function getUserById($body){
            $bd= parent::connect();
            $sql="SELECT * FROM USER WHERE CORREO = ?";
            $sql=$bd->prepare($sql);
            $sql->bindValue(1, $body["correo"]);
            $sql->execute();
            return $resultado=$sql->fetchAll(PDO::FETCH_ASSOC);
        }

        public static function registerUser($body){
            $bd= parent::connect();
            $sql="INSERT INTO USER(CORREO,CONTRASEÑA,NOMBRE,APELLIDO_P,APELLIDO_M,TELEFONO) VALUES (?,?,?,?,?,?)";
            $sql=$bd->prepare($sql);
            $sql->bindValue(1, $body["correo"]);
            $sql->bindValue(2, $body["contraseña"]);
            $sql->bindValue(3, $body["nombre"]);
            $sql->bindValue(4, $body["apellido_p"]);
            $sql->bindValue(5, $body["apellido_m"]);
            $sql->bindValue(6, $body["telefono"]);
            $sql->execute();
            return $resultado=$sql->fetchAll(PDO::FETCH_ASSOC);
        }

        public static function updateUser($body){
            $bd= parent::connect();
            $sql="UPDATE USER SET CONTRASEÑA = ?, NOMBRE= ?, APELLIDO_P =?, APELLIDO_M=?, TELEFONO=? WHERE CORREO = ?";
            $sql=$bd->prepare($sql);
            $sql->bindValue(1, $body["contraseña"]);
            $sql->bindValue(2, $body["nombre"]);
            $sql->bindValue(3, $body["apellido_p"]);
            $sql->bindValue(4, $body["apellido_m"]);
            $sql->bindValue(5, $body["telefono"]);
            $sql->bindValue(6, $body["correo"]);
            $sql->execute();
            return $resultado=$sql->fetchAll(PDO::FETCH_ASSOC);
        }

        public static function deleteUser($body){
            $bd= parent::connect();
            $sql="DELETE FROM USER WHERE CORREO = ?";
            $sql=$bd->prepare($sql);
            $sql->bindValue(1, $body["correo"]);
            $sql->execute();
            return $resultado=$sql->fetchAll(PDO::FETCH_ASSOC);
        }
    }
?>