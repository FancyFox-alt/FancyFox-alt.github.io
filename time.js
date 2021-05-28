<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>Zodiac</title>
    <link href="style.css" rel="stylesheet" type="text/css" />
 
  </head>
  <body>
  <script>
      //finding the hour
//const hr = 15
var hr = new Date();
hr = hr.getHours();
//Responses
if ((hr >=2) && (hr <= 10)){
  alert ("Bon matin!");
}else if ((hr >=11) && (hr <= 15)){
  alert ("Bonjour!");
}else if ((hr >=16) && (hr <= 19)){
  alert ("Bonne soirée!");
}else if ((hr >=20) && (hr <= 23)){
  alert ("Bonne nuit!");
} else {
alert("Tu devrais être au lit! ");
} 
</script>
  </body>
</html>
