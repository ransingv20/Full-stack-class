<?php
$user=filter_input('INPUT_POST','username');
$pass=filter_input('INPUT_POST','password');
if(!empty($user))
{
    $host="localhost";
    $dbusername="root";
    $dbpass="";
    $dbname="test";
    $conn=new mysqli($host,$dbusername,$dbpass,$dbname);

    if(mysql_connect_error())
    {
        die("Connection error");
    }
    else
    {
        $sql="insert into login(username,password) values($user,$pass);";
        if($conn->query($sql))
        {
            echo"new records inserted";
        }
        else
        {
            $conn->close();
        }
    }
}
else
{
    echo"error";
}
?>