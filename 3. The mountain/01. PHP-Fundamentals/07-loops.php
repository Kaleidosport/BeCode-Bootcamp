<h1 style="text-align:center;">LOOPS</h1>

<section><h2>Inside an array</h2>
<?php
$pronouns = array ("I", "You", "He/She","We", "You", "They");
foreach ($pronouns as $pronoun) echo $pronoun . "<br>";

echo "<p>";
foreach ($pronouns as $pronoun) echo $pronoun == "He/She" ? $pronoun . " codes.<br>" : $pronoun . " code.<br>";
echo "</p>";
?>
</section>

<section><h2>Inside a string</h2>
<?php
$numbers = 1;
while ($numbers <= 120) {
    echo $numbers . "<br>";
    $numbers++;
}

echo "<pre>";
for ($i = 1; $i < 121; $i++) echo $i . "<br>";
echo "</pre>";

$startupsroster = ["Aline", "Anthony", "Arnaud", "Asuna", "Aurélien", "Christophe", "David", "Ellen", "Florian", "Jean-Louis", "Ludmila", 
"Messaoud", "Romain", "Sandra", "Sara", "Sarah", "Sylvain", "Thibaut", "William B.", "William V.", "Zaccaria"];
echo "<article>";
for ($j = 0; $j < sizeof($startupsroster); $j++) echo $startupsroster[$j] . "<br>"; // Or foreach ($startsuproster as $member) echo $member
echo "</article><br>";

$countries = ["Belgium", "France", "Japan", "Mauritius", "Russia", "The Netherlands", "United States of America"];
echo "<label for='countries'><b>Pick a country:</b></label><br>";
echo "<select name='countries'>";
foreach ($countries as $country) echo "<option value='$country'>$country</option>" ;
echo "</select>";

$nations = [
    "BE" => "Belgium",
    "FR" => "France",
    "JP" => "Japan",
    "MU" => "Mauritius",
    "RU" => "Russia",
    "NL" => "The Netherlands",
    "US" => "United States of America"
];
echo "<article>";
echo "<label for='nations'><b>Pick a country:</b></label><br>";
echo "<select name='nations'>";
foreach ($nations as $key => $value) echo "<option value=". $key .">". $value ."</option>";
echo "</select>";
echo "</article>";
?>
</section>