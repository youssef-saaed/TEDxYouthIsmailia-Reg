<?php
require "connect.php";
$query="UPDATE event_tickets SET Status = 'REG' WHERE Id = $_GET[id]";
mysqli_query($conn_status,$query);
header("Location: index.html");
?>