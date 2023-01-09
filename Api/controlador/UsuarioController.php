<?php

    require_once("../modelo/Usuario.php"); 

    header('Content-Type: application/json');
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
    header("Allow: GET, POST, OPTIONS, PUT, DELETE");
    $method = $_SERVER['REQUEST_METHOD'];
    if($method == "OPTIONS") {
        die();
    }

    $body = json_decode(file_get_contents("php://input"), true);

    switch($_GET["task"]){

        case "getAllUsers":
            echo json_encode(Usuario::getAllUsers());
        break;

        case "getUserById":
            echo json_encode(Usuario::getUserById($body));
        break;

        case "registerUser":
            echo json_encode(Usuario::registerUser($body));
        break;

        case "updateUser":
            echo json_encode(Usuario::updateUser($body));
        break;

        case "deleteUser":
            echo json_encode(Usuario::deleteUser($body));
        break;
    }
?>