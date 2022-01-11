<?php
use PHPMailer\PHPMailer\PHPMailer;

// die ("1");

require_once "Assets/PHP/PHPMailer/PHPMailer.php";
require_once "Assets/PHP/PHPMailer/SMTP.php";
require_once "Assets/PHP/PHPMailer/Exception.php";

if (isset($_POST["submit"])) {
  $firstname = ucfirst(filter_var($_POST["firstname"], FILTER_SANITIZE_STRIPPED));
  $lastname = ucfirst(filter_var($_POST["lastname"], FILTER_SANITIZE_STRIPPED));
  $name = "{$firstname} {$lastname}";
  $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
  $subject = $_POST["subject"];
  $gender = $_POST["gender"] === "male" ? "Mr." : "Mrs.";
  $company = filter_var($_POST["company"], FILTER_SANITIZE_STRIPPED);
  $message = filter_var($_POST["message"], FILTER_SANITIZE_STRIPPED);
  $body = "New message from " . $gender . " " . $name . ", a representative of " . $company . ".<br><br>" . $message;

  $secretkey = "";
  $responsekey = $_POST["g-recaptcha-response"];
  $userIP = $_SERVER["REMOTE_ADDR"];
  $url = "https://www.google.com/recaptcha/api/siteverify?secret=$secretkey&response=$responsekey&remoteip=$userIP";
  $response = file_get_contents($url);
  $response = json_decode($response);
  var_dump($response);

  // Works with ($response -> success === true)

  if (isset($firstname, $lastname, $email, $company, $message) && $response -> success == true) {
    if (filter_var($email, FILTER_VALIDATE_EMAIL) && $email != "jennifer-vh@itconsulting.du") {
      var_dump($email);
      var_dump($firstname);
      $mail = new PHPMailer();

      $mail -> isSMTP();
      $mail -> Host = "smtp@gmail.com";
      $mail -> SMTPAuth = true;
      $mail -> Username = "k***********@gmail.com";
      $mail -> Password = "";
      $mail -> Port = 587;
      $mail -> SMTPSecure = "PHPMAILER::ENCRYPTION_STARTTLS";

      $mail -> isHTML(true);
      $mail -> setFrom($email, $name);
      $mail -> addAddress("k***********@gmail.com");
      $mail -> Subject = "From " . $email . " regarding " . $subject;
      $mail -> Body = $body;

      if ($mail -> send()) {
        // die("success");
        $status = "Success.";
        $formresponse = "Your email just took flight.";
        // var_dump($status);
        // var_dump($response);
      } else {
        // die("failed");
        $status = "Failed.";
        $formresponse = "Something went wrong.<br>" . $mail -> ErrorInfo;
        // var_dump($status);
        // var_dump($response);
      }

      exit(json_encode(["status" => $status, "response" => $formresponse]));
      // mail($recipient, $subject, $context, $headers);
    }

    else echo "<script>alert('Please enter a valid email address.');</script>";
  }

  else if ($response -> success == false) echo "<script>alert('You need to complete the captcha process.');</script>";

  else if ($firstname === "") echo "<script>alert('Please provide a first name.');</script>";
  else if (!preg_match("/^[a-zA-Z’' -]+$/", stripslashes($firstname))) echo "<script>alert('Please provide a valid first name.');</script>";
  else if (strlen($firstname) > 25) echo "<script>alert('Expected first names can contain 25 characters at most.');</script>";

  else if ($lastname === "") echo "<script>alert('Please provide a last name.');</script>";
  else if (!preg_match("/^[a-zA-Z’' -]+$/", stripslashes($lastname))) echo "<script>alert('Please provide a valid last name.');</script>";
  else if (strlen($lastname) > 25) echo "<script>alert('Expected last names can contain 25 characters at most.');</script>";
  
  else if ($company === "") echo "<script>alert('Please provide a company name.');</script>";
  else if (strlen($company) > 25) echo "<script>alert('Expected company names can contain 50 characters at most.');</script>";
  else if ($message === "") echo "<script>alert('Please tell me how I can help you. A few words will do.');</script>";
  
}

?>

<!doctype html>
<html lang="en">
  <head>
    <title>Anthony Lambert's Contact page</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="description" content="Contact page by Kaleidosport">
    <meta name="keywords" content="Form, contact, PHP, training, portfolio">
    <meta name="author" content="Kaleidosport">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
    integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

    <!-- Additional CSS -->
    <link rel="stylesheet" href="./Assets/CSS/style.css" />

    <!-- FontAwesome -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.4/css/fontawesome.min.css" 
    integrity="sha384-jLKHWM3JRmfMU0A5x5AkjWkw/EYfGUAGagvnfryNV3F9VqM98XiIH7VBGVoxVSc7" crossorigin="anonymous">

    <!-- Recaptcha API -->
    <script src="https://www.google.com/recaptcha/api.js" async defer></script>

    <!-- Additional font -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&display=swap" rel="stylesheet"> 
    <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">  
    <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet">    
  </head>

  <body>
    
    <header>
    <!-- Title & branding -->
      <h1 class="container-fluid text-center bg-kal text-uppercase text-white">
        Anthony Lambert<br>
        <small class="text-khaki h2">Junior Web Developer & Storyteller</small>
      </h1>
    </header>

    <!-- Main section dedicated to the form in itself -->
    <main>

      <section class="d-flex justify-content-md-center">
        <section class="p-3 mx-3 mx-md-5 mt-3 section-border col col-md-8">
          <h2 class="text-center text-uppercase mb-3 kal-h2">Let's get in touch</h2>
          <form method="post" action="" class="row row-cols-1 row-cols-md-4 px-4 gy-3">

            <!-- Filling in the form: sender's name -->
            <div class="col col-md-6">
              <label for="firstname" class="form-label">First name</label>
              <input type="text" class="form-control" placeholder="Jennifer" name="firstname" maxlength="25" aria-label="First name" required/>
            </div>
            <div class="col col-md-6">
              <label for="lastname" class="form-label">Last name</label>
              <input type="text" class="form-control" placeholder="Van Hooijdonk" name="lastname" maxlength="25" aria-label="Last name" required/>
            </div>

            <!-- Filling in the form: sender's gender -->
            <div class="col col-md-4">   
              <div class="form-check form-check-inline">
                <label for="gender" class="form-check-label">Female</label>
                <input type="radio" class="form-check-input" name="gender" value="female" checked/>
              </div>
              <div class="form-check form-check-inline">
                <label for="gender" class="form-check-label">Male</label>
                <input type="radio" class="form-check-input" name="gender" value="male"/>
              </div>
            </div>

            <!-- Filling in the form: company name -->
            <div class="col col-md-6 offset-md-2">
              <label for="company" class="form-label">Company name</label>
              <input type="text" class="form-control" placeholder="IT Consulting" name="company" aria-label="company" maxlength="50" required/>
            </div>

            <!-- Filling in the form: email address -->
            <div class="col col-md-6">
              <div class="form-floating">
                  <input type="email" class="form-control" placeholder="jennifer-vh@itconsulting.du" value="jennifer-vh@itconsulting.du" name="email" id="floatingEmail" aria-describedby="Your email address"/>
                  <label for="floatingEmail">Email</label>
                  <div class="form-text" id="mobiletext">Your email address won't be disclosed.</div>
              </div>
            </div>  

            <!-- Filling in the form: subject -->
            <div class="col col-md-6">
              <div class="form-floating">              
                <select class="form-select" name="subject" id="floatingSubject" aria-label="subject">
                  <option value="a job offer">Job offer</option>
                  <option value="an internship opportunity">Internship opportunity</option>
                  <option value="something to be discussed" selected>Other (see comment area below)</option>
                </select>
                <label for="floatingSubject">Subject</label>
              </div>
            </div>

            <!-- Filling in the form: message -->
            <div class="col col-md-12">
              <div class="form-floating">
                <textarea class="form-control" placeholder="How may I be of help?" id="messageArea" name="message">
                </textarea>
                <label for="message">Feel free to write down a message hereafter.</label>
              </div>
            </div>

            <!-- Captcha & Submit button -->
            <div class="col offset-md-3 g-recaptcha" data-sitekey="6LdhaUwdAAAAAFVIhLroRBXDOalVkR3oVzS-mSdU"></div>
            <div class="col col-md-12 text-center">
              <button type="submit" name="submit" class="btn btn-primary">Confirm & submit</button>
            </div>
          
          </form>
      
        </section>

      </section>  

        <!-- Captcha -->
        <!-- <div class="text-center mt-3">
          <div class="d-inline-block g-recaptcha" data-sitekey="6LdhaUwdAAAAAFVIhLroRBXDOalVkR3oVzS-mSdU"></div>
        </div> -->

    </main>
    
    <!-- Footer: more branding with a pinch of advertising -->
    <footer class="container-fluid reverse-bg-kal mt-3 pt-3" role="contentinfo">
      <div class="row">
        <div class="offset-1 col-10 offset-md-1 col-md-5">
          <h5 class="text-khaki text-uppercase">About me</h5>
          <p class="text-justify text-white"><i>Always be the hardest worker in the room.</i> This mindset makes me a driven, committed developer who's always up for the most intricate challenges. 
            While I enjoy working under pressure and pushing myself past my limits, I look forward to meeting like-minded professionals. 
            Should this brief introduction appeal to you, hit me with what you got. I'll reach back asap.
          </p>
        </div>

        <div class="offset-1 col-10 offset-md-2 col-md-3">
          <h5 class="text-khaki text-uppercase">Friends</h5>
          <ul class="list-unstyled ps-0">
            <li><a href="http://www.saravydelingum.be" target="_blank">Sara Vydelingum</a></li>
            <li><a href="http://www.thibaut-fourneaux.be" target="_blank">Thibaut Fourneaux</a></li>
            <li><a href="https://becode.org" target="_blank">BeCode</a></li>
          </ul>
        </div>
      </div>
      
      <hr class="mx-5" style="color:#F0E68C; opacity:.5;">

      <div class="row">
        <div class="offset-1 col-10 offset-md-1 col-md-6">
          <p class="text-white"><span class="fw-bold">Copyright © 2021</span> All rights reserved by <a href="http://www.kaleidosport.net" target="_blank">Kaleidosport</a>.</p>
        </div>
        
        <div class="offset-1 col-10 offset-md-1 col-md-3 last-div">
          <ul class="list-unstyled ps-0 list-inline">
            <li class="list-inline-item"><a href="https://github.com/Kaleidosport" title="Github" target="_blank"><i class="fab fa-github fa-lg"></i></a></li>
            <li class="list-inline-item"><a href="https://www.linkedin.com/in/anthonylambert14/" title="Linkedin" target="_blank"><i class="fab fa-linkedin-in fa-lg"></i></a></li>
            <li class="list-inline-item"><a href="https://twitter.com/Kaleidosport" title="Twitter" target="_blank"><i class="fab fa-twitter fa-lg"></i></a></li>
          </ul>
        </div>
      </div>
    </footer>    

  </body>

  <!-- Javascript -->
  <!-- <script src="./Assets/script.js"></script> -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/js/all.min.js" integrity="sha512-Tn2m0TIpgVyTzzvmxLNuqbSJH3JP8jm+Cy3hvHrW7ndTDcJ1w5mBiksqDBb8GpE2ksktFvDB/ykZ0mDpsZj20w==" 
  crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  
</html>