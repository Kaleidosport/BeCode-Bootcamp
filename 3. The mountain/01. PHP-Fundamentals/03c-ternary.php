<form method="get" action="">
    Are you a man or a woman?

    <label for="gender">Male</label>
    <input type="radio" name="gender" value="male" />
    
    <label for="gender">Female</label>
    <input type="radio" name="gender" value="female" /><br>

    <input type="submit" name="submit" value="Confirm & submit">
    <input type="reset" value="Reset">
</form>

<?php
echo isset($_GET["gender"]) ? ($_GET["gender"] === "male" ? 
"Welcome, sir." : "Welcome, milady.") : "";

// Better than if (isset($_GET["gender"])) {
//    echo $_GET["gender"] === "male" ? "Welcome, sir." : "Welcome, milady.";
// } The full ternary experience!
?>