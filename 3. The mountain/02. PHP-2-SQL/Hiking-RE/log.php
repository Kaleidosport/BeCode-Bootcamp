<?php

$dsn = "mysql:dbname=hiking_re;host=localhost";
$user = "root";
$password = "";

try {
    $dbh = new PDO($dsn, $user, $password); 
}
catch(Exception $e) {
    die("Error: " . $e -> getMessage());
}