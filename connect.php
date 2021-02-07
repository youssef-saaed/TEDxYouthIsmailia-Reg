<link rel="icon" href="image/logo.png">
<?php
$host="localhost";
$huser="root";
$hpass="";
$db="event_registration";
$conn_status=mysqli_connect($host,$huser,$hpass,$db);
if ($conn_status){
}else{
    die(mysqli_connect_error());
}
?>