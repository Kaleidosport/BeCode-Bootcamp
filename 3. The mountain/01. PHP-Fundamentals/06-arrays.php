<section id="family">
<?php
$family = ["Sara", "Jean-Marie", "Anthony", "Grégory"];
print_r($family);
?>
</section>

<section id="dishes">
<?php
$favoritedishes = ["Pizza", "Chicken curry", "Croque-monsieur", "Meat balls", "Cheese and mushroom croquettes", "Ramen"];
print_r($favoritedishes);
?>
</section>

<section id="movies">
<?php
$favoritemovies = ["Iron Man", "Iron Man II", "Iron Man III", "Terminator II", "The Big Lebowski", "He got game", "Avengers: Infinity War", 
"Avengers: Endgame", "Eternal sunshine of the spotless mind", "The silver linings playbook", "Porco Rosso", "Léon", "A game of shadows", 
"Donnie Darko", "Remember the Titans", "Howl's moving castle", "The girl with the dragon tatoo", "Live and let die", "The Phantom Menace", 
"Million Dollar Baby", "American Psycho", "Astérix et Obélix: Mission Cléopâtre", "Seishun Buta Yarou wa Yumemiru Shoujo no Yume wo Minai", 
"Lost in translation", "Marriage story", "The Truman show", "21", "Man on fire", "Eli's book", "John Q", "Bad Boys", "Bad Boys II", "Black Panther"];
print_r($favoritemovies[sizeOf($favoritemovies) - 25]);
var_dump($favoritemovies);
?>
</section>

<section id="associative_and_multidimensional_arrays">
<?php
$me = array(
    "First name" => "Anthony",
    "Last name" => "Quiça",
    "Age" => 35,
    "Favorite season" => "summer",
    "Like soccer" => true,
    "Favorite movies" => array("Eternal sunshine of the spotless mind", "The silver linings playbook", "Avengers: Endgame")
);

echo "<pre>";
print_r($me);
echo "</pre>";

$me["Hobbies"] = ["reading", "writing", "running", "fitness", "basketball"];

echo "<pre>";
var_dump($me);
echo "</pre>";

$mom = array(
    "First name" => "Sara",
    "Last name" => "Lamam",
    "Age" => 56,
    "Favorite season" => "winter",
    "Likes soccer" => false,
    "Favorite movies" => array("Bodyguard", "Titanic", "Avengers: Endgame"),
    "Hobbies" => array("philanthropy", "movies", "series", "handcrafting")
);

$me["mom"] = $mom;

echo "<pre>";
var_dump($mom);
echo "</pre";

echo "<pre>";
print_r($me);
echo "</pre>";

$myhobbies = sizeof($me["Hobbies"]);
$momshobbies = count($mom["Hobbies"]);

echo "<pre>";
print_r($myhobbies + $momshobbies);
echo "</pre>";

$me["Hobbies"][] = "cooking"; // Taxidermy? Not my kinda taxi
$me["Last name"] = "Durant"; // Like KD, cause that sounds way cooler than Durand
?>
</section>

<section id="intersection_and_fusion">
<?php
$me = array(
    "First name" => "Anthony",
    "Last name" => "Quiça",
    "Age" => 35,
    "Favorite season" => "summer",
    "Like soccer" => true,
    "Favorite movies" => array("Eternal sunshine of the spotless mind", "The silver linings playbook", "Avengers: Endgame"),
    "Hobbies" => array("reading", "writing", "running", "fitness", "basketball", "movies")
);

$soulmate = array(
    "First name" => "Lady",
    "Last name" => "Unknown",
    "Age" => 28,
    "Favorite season" => "spring",
    "Likes soccer" => false,
    "Favorite movies" => array("Catch me if you can", "Mean girls", "American Beauty", "The Devil wears Prada"),
    "Hobbies" => array("fitness", "movies", "series", "travelling", "hiking", "golf")
);

$intersected = array_intersect($me["Hobbies"], $soulmate["Hobbies"]);
$fuuuuuuuusionyaaa = array_merge($me["Hobbies"], $soulmate["Hobbies"]);

echo "<pre>";
print_r($intersected);
echo "</pre>";

echo "<pre>";
print_r(array_unique($fuuuuuuuusionyaaa));
echo "</pre>";
?>
</section>

<section id="climax">
<?php
$webdevelopment = array(
    "Frontend" => [],
    "Backend" => []
);

$webdevelopment["Frontend"] = ["XHTML", "CSS", "JavaScript"];
array_push($webdevelopment["Backend"], "Python", "Ruby on Rails", "Flash"); // Will have to look up why spread operators fail with both methods
echo "<pre>";
var_dump($webdevelopment);
echo "</pre>";

array_splice($webdevelopment["Frontend"], 0, 1, "HTML"); // Could also have used array_replace
array_splice($webdevelopment["Backend"], -1); // Could also have used array_pop or unset() methods
echo "<pre>";
print_r($webdevelopment);
echo "</pre>";
?>
</section>