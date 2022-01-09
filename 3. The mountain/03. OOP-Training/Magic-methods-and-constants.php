<?php

// Set first and last name values through constructor instead of the previous set method.

class User {
    private $firstName;
    private $lastName;

    public function __construct($firstName, $lastName) {
        $this -> firstName = $firstName;
        $this -> lastName = $lastName;
    }

    // Add a public method that returns the full name.
    public function getName() {
        return $this -> firstName . " " . $this -> lastName . ".";
    }
}

// Test it all out with a freshly created user.

$user1 = new User("Romain", "Berthaux");
echo $user1 -> getName();