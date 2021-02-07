<?php
require "connect.php";
$id = $_GET['id'];
$check="SELECT * FROM event_tickets WHERE Id='$id'";
$raw=mysqli_query($conn_status,$check);
$result = mysqli_fetch_assoc($raw);
$id = $result[Id];
$refN= $result[Ref_Number];
$name= $result[Buyer_Name];
$email= $result[Buyer_Email];
$mob = $result[Buyer_Mobile];
$status= $result[Status];
$header="Location: registration.html?id=$id&refN=$refN&name=$name&email=$email&phone=$mob&status=$status";
header($header)
?>