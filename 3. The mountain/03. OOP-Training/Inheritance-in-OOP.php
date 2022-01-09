<?php

// Create an Admin class which acts as a child of the User class.

class User {
    protected $userName;

    public function setUserName($userName) {
        $this -> userName = $userName;
    }
}

class Admin extends User {
    // Add a public method.
    public function displayYourRole() {
        return __CLASS__;
    }

    // Add a hello method.
    public function sayHi() {
        return "Hi Admin, " . $this -> userName . ".";
    }
}

// Gotta name the admin Balthazar and launch the whole thing, which requires to change line 6 from private to protected.

$admin4 = new Admin();
$admin4 -> setUserName("Balthazar");
echo $admin4 -> sayHi();

/* Could have achieved the same result by adding a getter method after line 10:
public function getUserName() {
    return $this -> userName;
} */