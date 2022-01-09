<?php

require "log.php";

$pdo -> setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_OBJ);

$sql = "SELECT * FROM `hiking`";
$query = $pdo -> prepare($sql);
$query -> execute();
$result = $query -> fetchAll(PDO::FETCH_ASSOC);

foreach ($result as $path) {
  echo"
  <tr>
      <td><a href='update.php/?id=" . $hikes -> id . "'>" . $hikes -> name . "</a></td>
      <td>" . $path -> difficulty . "</td>
      <td>" . $path -> distance . " km</td>
      <td>" . $path -> duration . "</td>
      <td>" . $path -> height_difference . " m</td>
      <td>" . $path -> available . "</td>
      <td>
          <form action='read.php' method='POST'>
              <div>
                  <button type='submit' name='remove' value='" . $hikes -> id . "'>Del</button>
              </div>
          </form>
      </td>
  </tr>
";
}

?>

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Randonnées</title>
    <link rel="stylesheet" href="css/basics.css" media="screen" title="no title" charset="utf-8">
  </head>
  <body>
    <h1>Liste des randonnées</h1>
    <table>
    <thead>
      <tr>
        <th>Nom de la randonnée</th>
        <th>Difficulté</th>
        <th>Distance</th>
        <th>Durée</th>
        <th>Dénivelé</th>
        <th>Available</th>
      </tr>
    </thead>
    <tbody>
      <?php ?>
    </tbody>
    </table>
  </body>
</html>
