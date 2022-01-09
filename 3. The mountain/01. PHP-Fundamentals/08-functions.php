<h1 style="text-align:center; text-decoration: dashed underline overline;">FUNCTIONS</h1>

<section><h2>Transform a string</h2>
<?php
$string = "According to a researcher (sic) at Cambridge University, it doesn't matter in what order the letters in a word are, the only important thing is that the first and last letter be at the right place. The rest can be a total mess and you can still read it without problem. This is because the human mind does not read every letter by itself but the word as a whole.";

$stringtoarray = explode(" ", $string); // Or str_split($string, $length = ??) with the need to count & specify chars in every damn word...

echo "<p>";
echo preg_replace("/\s+/", "<br>", $string); // Or str_replace(" ", "<br>", $string)
echo "</p>";

echo "<pre>";
foreach ($stringtoarray as $word) echo str_shuffle($word) . " ";
echo "</pre>";
?>
</section>

<section><h2>Chaining</h2>
<?php
function capitalize($x) {
    return mb_convert_case($x, MB_CASE_TITLE, "UTF-8"); // https://www.php.net/manual/fr/function.mb-convert-case.php
    /* Or mb_strtoupper(mb_substr($x, 0, 1)).mb_substr($x, 1);
    Thanks to https://stackoverflow.com/questions/2517947/ucfirst-function-for-multibyte-character-encodings */
} 
echo "<p>";
echo capitalize("émilie"); // A basic ucfirst() won't do the trick with accented first letters since it only takes one parameter
echo "</p>";

echo "<pre>";
echo date("Y");
echo "</pre>";

echo "<p>";
date_default_timezone_set("Europe/Brussels");
echo "Today's date and now's time are " . date("l d/m/Y h:i:s A") . ".";
echo "</p>";

function sum($x, $y) {
    return is_numeric($x) && is_numeric($y) ? $x + $y : "Error: at least one argument is not a number.";
} 
echo "<pre>";
echo sum(7, 14);
echo "<br>"; 
echo sum("Gru", "Agnès");
echo "</pre>";

function acronym($z) {
    $a = explode(" ", $z);
    $transit = ""; // Or make it an array and use implode("", $transit) later on
    foreach ($a as $word) $transit .= strtoupper($word[0]); // Same as $transit = $transit . strtoupper($word[0]);
    return $transit;
}

echo "<p>";
echo "I am Iron Man becomes <b>" . acronym("I am iron man") . ".</b>";
echo "</p>";
echo "<hr>";

$wordswithae = ["caecotrophie", "chaenichthys","microsphaera", "sphaerotheca"];
function aeize($b) {
    return preg_replace("/ae/", "æ", $b);
}
var_dump(array_map("aeize", $wordswithae)); // Map() strikes back!

$wordswithaebis = ["cæcotrophie", "chænichthys","microsphæra", "sphærotheca"];
function counteraeize($c) {
    return str_replace("æ", "ae", $c);
}
var_dump(array_map("counteraeize", $wordswithaebis)); // Second hit!
echo "<hr>";

function feedback($message, $class = "info") {
    return "<div class=" . $class . ">" . ucfirst($class) . ": " . $message . "</div>";
}
echo "<p>";
echo feedback("Incorrect email address.", "error");
echo "</p>";

echo "<pre>";
echo strtolower("STOP YELLING I CAN'T HEAR MYSELF THINKING!!");
echo "</pre>";
echo "<hr>";

function cone_volume($radius, $height) {
    $volume = $radius * $radius * pi() * $height / 3; // Or M_PI instead of pi()
    return  "The volume of a cone whose radius is $radius and height is $height = $volume cm<sup>3</sup><br>";
}  
  echo "<p>";
  echo cone_volume(5, 2) . "<br/>";
  echo cone_volume(3, 4) . "<br/>";
  echo "</p>";
  echo "<hr>";
?>
</section>

<section><h2>Generate words at random</h2>
<?php
function wordsgenerator($length) {
    return ucfirst(substr(str_shuffle("abcdefghijklmnopqrstuvwxyz"), 0, $length));
}
?>
    <article style="margin-top:2px; margin-bottom:2px;">
        <h3>Words generator</h3>
        <p><?php echo wordsgenerator(rand(1, 5)) ?></p>
        <p><?php echo wordsgenerator(rand(7, 15)) ?></p>
        <form method="post">
            <input type="submit" name="generate" value="Generate new words">
        </form>
    </article>
</section>