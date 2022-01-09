<?php

class User {
    protected $userName;
     
    public function setUserName($userName) {
        $this -> userName = $userName;
    }

    public function getUserName() {
        return $this -> userName;
    }
}

// Create an Author interface with assigned methods.

interface Author {
    public function setAuthorPrivileges($array);
    public function getAuthorPrivileges();
}

// Same with Editor interface.

interface Editor {
    public function setEditorPrivileges($array);
    public function getEditorPrivileges();
}

// Create an AuthorEditor class, all bets are off!

class AuthorEditor extends User implements Author, Editor {
    private $authorPrivilegesArray = array();
    private $editorPrivilegesArray = array();

    public function setAuthorPrivileges($array) {
        $this -> authorPrivilegesArray = $array;
    }

    public function getAuthorPrivileges() {
        return $this -> authorPrivilegesArray;
    }

    public function setEditorPrivileges($array) {
        $this -> editorPrivilegesArray = $array;
    }

    public function getEditorPrivileges() {
        return $this -> editorPrivilegesArray;
    }
}

// Create an AuthorEditor user named Balthazar.

$authorEditor1 = new AuthorEditor();
$authorEditor1 -> setUserName("Balthazar");
$authorEditor1 -> setAuthorPrivileges(["Write text", "Add punctuation"]);
$authorEditor1 -> setEditorPrivileges(array("Edit text", "Edit punctuation"));

// Get the user's name and privileges.

$userName = $authorEditor1 -> getUserName();
$userPrivileges = array_merge($authorEditor1 -> getAuthorPrivileges(), $authorEditor1 -> getEditorPrivileges());

echo $userName . " has the following privileges: ";
echo implode(", ", $userPrivileges);
echo ".";