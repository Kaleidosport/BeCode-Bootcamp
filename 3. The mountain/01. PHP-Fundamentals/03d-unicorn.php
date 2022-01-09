<form method="get" action="">
    What species would you rather be?

    <label for="species">A human</label>
    <input type="radio" name="species" value="human" />
    
    <label for="species">A cat</label>
    <input type="radio" name="species" value="cat" />

    <label for="species">A unicorn</label>
    <input type="radio" name="species" value="unicorn" /><br>

    <input type="submit" name="submit" value="Gif's a given">
    <input type="reset" value="Reset">
</form>

<?php
// 11bis. More ternary

echo isset($_GET["species"]) ? ($_GET["species"] === "human" ? 
    "<img src='https://www.icegif.com/wp-content/uploads/tony-stark-icegif-6.gif' alt='human'>" : 
    ($_GET["species"] === "cat" ? "<img src='https://i.gifer.com/origin/6c/6c3c326e35e382d4818482e32dd6841f.gif' alt='cat'>" : 
    "<img src='https://31.media.tumblr.com/ad814616b331b3fb28ea57c91a86bceb/tumblr_mrkdmzjtvt1sni8y4o1_500.gif' alt='unicorn'>")) : "";
?>