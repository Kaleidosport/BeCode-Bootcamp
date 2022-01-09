<?php

// Create abstract class and method with getters and setters.

abstract class User {
    protected $userName;
    
    abstract public function stateYourRole();

    public function setUserName($userName) {
        $this -> userName = $userName;
    }

    public function getUserName() {
        return $this -> userName;
    }
}

// Create an Admin class that inherits the above abstract class.

class Admin extends User {
    // Define the abstract method.
    public function stateYourRole() {
        return "Admin"; // Or return __CLASS__;
    }
}

// Same with a Viewer class.

class Viewer extends User {
    public function stateYourRole() {
        return __CLASS__;
    }
}

// Admin named Balthazar, right this instant!

$admin17 = new Admin();
$admin17 -> setUserName("Balthazar");
echo $admin17 -> stateYourRole();