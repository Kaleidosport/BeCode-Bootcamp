<?php

// The $this keyword

class User {
    public $firstName;
    public $lastName;

    public function hello() {
        return "Hello, " . $this -> firstName . "!";
    }
}

// Applied to John Doe.

$user1 = new User();
$user1 -> firstName = "John";
$user1 -> lastName = "Doe";
echo $user1 -> hello();