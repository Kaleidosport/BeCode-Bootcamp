<form method="get" action="">
    <label for="name">Please type the first name of your child: </label>
    <input type="text" name="name" pattern="[A-Z]{1}[a-z]{2, 20}" placeholder="Claude" size="14" maxlength="21" required/><br>

    Your child is a...

    <label for="gender">girl</label>
    <input type="radio" name="gender" value="girl" checked/>
    
    <label for="gender">boy</label>
    <input type="radio" name="gender" value="boy" /><br>

    <label for="teachersname">Please type the last name of your child's teacher: </label>
    <input type="text" name="teachersname" pattern="[A-Z]{1}[a-z]{2, 20}" placeholder="Doubtfire" size="14" maxlength="21" required/><br>

    Said teacher is a...

    <label for="teachersgender">woman</label>
    <input type="radio" name="teachersgender" value="woman" checked/>
    
    <label for="teachersgender">man</label>
    <input type="radio" name="teachersgender" value="man" /><br>

    Pick a reason to legitimate your child's absence:<br>

    <label for="illness">Illness</label>
    <input type="radio" name="reason" value="illness" />

    <label for="mourning">Mourning</label>
    <input type="radio" name="reason" value="mourning" />

    <label for="extraactivity">Extra-curricular activity</label>
    <input type="radio" name="reason" value="extraactivity" />

    <label for="kohlanta">Koh-Lanta was airing last night</label>
    <input type="radio" name="reason" value="kohlanta" checked/><br>

    <label for="duration">How long will your child be absent? (max. 14 days)</label>
    <input type="number" name="duration" min="2" max="14" placeholder="2" required/><br>

    <input type="submit" name="submit" value="Get your excuse">
    <input type="reset" value="Reset">
</form>

<?php

if (isset($_GET["name"], $_GET["gender"], $_GET["teachersname"], $_GET["teachersgender"], $_GET["reason"], $_GET["duration"])) {
    $name = $_GET["name"];
    $gender = $_GET["gender"];
    $teachersname = $_GET["teachersname"];
    $teachersgender = $_GET["teachersgender"];
    $reason = $_GET["reason"];
    $duration = $_GET["duration"];

    date_default_timezone_set("Europe/Brussels");
    $date = date("d/m/Y");

    $illness = array(
        0 => "our child is dealing with gastroenteritis",
        1 => "our child is dealing with chickenpox",
        2 => "our child is dealing with eczema",
        3 => "our child is dealing with head lice",
        4 => "our child has to deal with allergies"
    );

    $mourning = array(
        0 => "our cobra died",
        1 => "our beloved parrot died",
        2 => "our goldfish perished",
        3 => "a relative of ours died",
        4 => "our tarantula gave its last breath"
    );

    $extraactivity = array(
        0 => "our child has to attend a basketball training camp abroad",
        1 => "our child has been selected as a Belgian representative ahead of the upcoming kid's Eurovision",
        2 => "our child is bound to help at our store since many employees of ours are on break",
        3 => "our child needs to practice swordsmanship prior to the next World Series",
        4 => "our child is getting a head start in the world of acting"
    );

    $kohlanta = array(
        0 => "Claude Dartois was unrightfully eliminated in yesterday's episode of Koh-Lanta, which calls for a short recovery period",
        1 => "the latest episode of Koh-Lanta proved extremely disappointing",
        2 => "our child has to deal with a lot of anger following yesterday's episode of Koh-Lanta",
        3 => "our home is a mess after the latest episode of Koh-Lanta, so our child will have to help clean up the whole thing",
        4 => "we partied till late in the aftermath of Koh-Lanta's finale to celebrate Namadia Berete's win"
    );

    $teachersgender == "woman" ?  $teachersgender = "Mrs." : $teachersgender = "Mr.";

    $reason == "illness" ? $reason = $illness[array_rand($illness)] : 
    ($reason == "mourning" ? $reason = $mourning[array_rand($mourning)] : 
    ($reason == "extraactivity" ? $reason = $extraactivity[array_rand($extraactivity)] : 
    $reason = $kohlanta[array_rand($kohlanta)]));

}

?>

<section>
    <?php
        if (isset($_GET["name"], $_GET["gender"], $_GET["teachersname"], $_GET["teachersgender"], $_GET["reason"], $_GET["duration"])) {
            ?>
            <p>Dear <?php echo $teachersgender . " " . $teachersname; ?>,</p>

            <p>We hereby request that our child, <?php echo $name; ?>, be excused from school starting <?php echo $date; ?> 
            for a duration of <?php echo $duration; ?> days. We motivate our demand owing to the fact <?php echo $reason; ?>, 
            which is the reason why <?php echo $name; ?> will be absent until the matter at stake is solved.</p>

            <p>Please reach out to us if you feel like additional information is needed.</p>

            <p>Sincerely,</p>

            <p>Pepper & Tony Stark</p>
    <?php } ?>
</section>