<?php
/**
 * Part of the BeCode formation, discovering PHP through a bunch of exercises
 * 
 * Start date: November 8th 2021
 */

 // 1.1 Clean your room Exercise 

$room_is_filthy = false;

if ($room_is_filthy === true) {
	echo "<p>Yuk, Room is dirty : let's clean it up !</p>";
	cleanup_room();
	echo "<p>Room is now clean!</p>";
	$room_is_filthy = false;
} 

else echo "<p>Nothing to do, room is neat.</p>";

// 1.2 Clean your room Exercise, improved

// Create the array of possible states
$possible_states = array(
    0 => "health hazard",
    1 => "filthy",
    2 => "dirty",
    3 => "clean",
    4 => "immaculate"
);

// When testing, change the index value to navigate to the possible array values
$room_filthiness = $possible_states[1]; 

if ($room_filthiness === $possible_states[0] OR $room_filthiness === $possible_states[1]) {
	echo "<p>Yuk, Room is Disgusting! Let's clean it up !</p>";
} else if ($room_filthiness === $possible_states[2]) {
	echo "<p>Yuk, Room is dirty : let's clean it up !</p>";
// ...
} else {
	echo "<p>Nothing to do, room is neat.</p>";
}

// 2. "Different greetings according to time" Exercise

date_default_timezone_set("Europe/Brussels");
$now = date("H:i"); // How to get the current time in PHP ? Google is your friend ;-)

// Test the value of $now and display the right message according to the specifications.
if ($now <= "09:00") {
    echo "<p>Good morning!</p>";
}
else if ($now <= "12:00") {
    echo "<p>Good day!</p>";
}
else if ($now <= "16:00") {
    echo "<p>Good afternoon!</p>";
}
else if ($now <= "20:00") {
    echo "<p>Good evening!</p>";
}
else echo "<p>Good night!</p>";
?>

<form method="get" action="">
    <label for="age">How old are you? </label>
    <input type="text" name="age" /><br>

    <label for="gender">Female</label>
    <input type="radio" name="gender" value="female" />
    
    <label for="gender">Male</label>
    <input type="radio" name="gender" value="male" /><br>

    Are you a native English speaker?

    <label for="yes">Yes</label>
    <input type="radio" name="language" value="yes" />

    <label for="no">No</label>
    <input type="radio" name="language" value="no" /><br>

    <input type="submit" name="submit" value="Greetings">
    <input type="reset" value="Reset">
</form>

<?php
// 3, 4, 5. "Different greetings according to age, gender & mothertongue" Exercise

if (isset($_GET["age"]) && isset($_GET["gender"]) && isset($_GET["language"])) {
    $age = $_GET["age"];
    $gender = $_GET["gender"];
    $language = $_GET["language"];

    if ($gender === "female") {
        if ($language === "yes") {
            if ($age > 0 && $age < 12) echo "<p>Hello, young miss kiddo!<p>";
            else if ($age >= 12 && $age < 18) echo"<p>Hello, miss teenager!<p>";
            else if ($age >= 18 && $age < 115) echo "<p>Hello, adult lady!</p>";
            else if ($age >= 115) echo "<p>Wow, hello! Still alive? Are you a lady robot like me? Can I hug you?</p>";
        }
        else if ($language === "no") {
            if ($age > 0 && $age < 12) echo "<p>Aloha, young miss kiddo!<p>";
            else if ($age >= 12 && $age < 18) echo"<p>Aloha, miss teenager!<p>";
            else if ($age >= 18 && $age < 115) echo "<p>Aloha, adult lady!</p>";
            else if ($age >= 115) echo "<p>Wow, aloha! Still alive? Are you a lady robot like me? Can I hug you?</p>";
        }
    }

    else if ($gender === "male") {
        if ($language === "yes") {
            if ($age > 0 && $age < 12) echo "<p>Hello, young mister kiddo!<p>";
            else if ($age >= 12 && $age < 18) echo"<p>Hello, mister teenager!<p>";
            else if ($age >= 18 && $age < 115) echo "<p>Hello, sir adult!</p>";
            else if ($age >= 115) echo "<p>Wow, hello! Still alive? Are you a mister robot like me? Can I hug you?</p>";
        }
        else if ($language === "no") {
            if ($age > 0 && $age < 12) echo "<p>Aloha, young mister kiddo!<p>";
            else if ($age >= 12 && $age < 18) echo"<p>Aloha, mister teenager!<p>";
            else if ($age >= 18 && $age < 115) echo "<p>Aloha, sir adult!</p>";
            else if ($age >= 115) echo "<p>Wow, aloha! Still alive? Are you a mister robot like me? Can I hug you?</p>";
        }
    }
}
?>

<form method="get" action="">
    <label for="age">How old are you? </label>
    <input type="text" name="age" /><br>

    <label for="gender">Female</label>
    <input type="radio" name="gender" value="female" />
    
    <label for="gender">Male</label>
    <input type="radio" name="gender" value="male" /><br>

    <input type="submit" name="submit" value="Confirm & submit">
    <input type="reset" value="Reset">
</form>

<?php
// 6, 7. "The girls'soccer team" Exercise

if (isset($_GET["age"]) && isset($_GET["gender"])) {
    $age = $_GET["age"];
    $gender = $_GET["gender"];

    echo ($age >= 21 && $age <= 40 && $gender === "female") ? 
    "<p>Welcome to the team, glad to have ya!</p>" 
    : "<p>Sorry, you don't fit the criteria.</p>";
}
?>

<form method="get" action="">
    <label for="age">Grade ranging from 1 to 20: </label>
    <input type="text" name="grade" /><br>

    <input type="submit" name="submit" value="Adjudication">
    <input type="reset" value="Reset">
</form>

<?php
// 8. School grades Exercise

if (isset($_GET["grade"])) {
    $grade = $_GET["grade"];

    echo $grade <= 4 ? "This work is really bad. What a dumb kid." : 
    (($grade > 4 && $grade <= 9) ? "This is not sufficient. More work is required." :
    ($grade == 10 ? "Barely enough" : 
    (($grade > 10 && $grade <= 14) ? "Not bad!" : 
    (($grade > 14 && $grade <= 18) ? "Bravo, bravissimo!" : 
    "Too good to be true: confront the cheater!"))));
}
?>