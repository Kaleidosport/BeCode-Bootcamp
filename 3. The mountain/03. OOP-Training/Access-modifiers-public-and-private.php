<?php

// Use the private access modifier.

class User {
    private $firstName;

// Make it so one can access $firstName regardless.

    public function setFirstName($firstName) {
        $this -> firstName = $firstName;
    }

    public function getFirstName() {
        return $this -> firstName;
    }
}

// Create a user named Joe and return his name.

$user8 = new User();
$user8 -> setFirstName("Joe");
echo $user8 -> getFirstName();

// Additional note that should act as a reminder: one can (must) use arrays to sort properties.