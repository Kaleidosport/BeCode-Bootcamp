<?php

// Write what you think should be the class name...method that returns hello.

class User {
    public $firstName;
    public $lastName;

    public function hello() {
        return "Hello";
    }
}

// Create the first instance and call it $user1.

$user1 = new User();

// Set values.

$user1 -> firstName = "John";
$user1 -> lastName = "Doe";

// Get values, then print them.

echo $user1 -> firstName . " " . $user1 -> lastName . ".";

// Use the hello method.

echo $user1 -> hello() . ", " . $user1 -> firstName . "!";

// Repeat the above process with a newly created Jane Doe.

$user2 = new User();
$user2 -> firstName = "Jane";
$user2 -> lastName = "Doe";
echo $user2 -> firstName . " " . $user2 -> lastName . ".<br>";
echo $user2 -> hello() . ", " . $user2 -> firstName . "!";