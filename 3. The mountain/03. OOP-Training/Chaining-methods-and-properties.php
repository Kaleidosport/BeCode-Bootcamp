<?php

class User {
    public $firstName;
    public $lastName;

    public function hello() {
        echo "Hello, " . $this -> firstName . "!";
        // Add return $this so it can be chained to any other method in the class.
        return $this;
    }

    // Add a register method.
    public function register() {
        echo " >> registered.";
        // Add return $this so it can be chained to any other method in the class.
        return $this;
    }

    // Add a mail method.
    public function mail() {
        echo " >> email sent.";
    }
}

// Try all of this with a user named Jane.

$user1 = new User();
$user1 -> firstName = "Jane";
$user1 -> hello() -> register() -> mail();