<!DOCTYPE html>
<html>
<head>
  <title>Chat</title>
   <script>
        window.Laravel = <?php echo json_encode([
              'csrfToken' => csrf_token(),
          ]); ?>
        </script>
    <script type="text/javascript" src="bower_assets/jquery/dist/jquery.min.js"></script>
    <script type="text/javascript" src="bower_assets/bootstrap/dist/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="bower_assets/iscroll/build/iscroll.js"></script>
    <link rel="stylesheet" type="text/css" href="bower_assets/bootstrap/dist/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="css/chat.css">
    <link rel="stylesheet" type="text/css" href="css/app.css">


</head>
<body>
  @yield('main-content')
      <script type="text/javascript" src="socket.io.js"></script>
    <script type="text/javascript" src="js/scripts.js"></script>
<script type="text/javascript" src="js/app.js"></script>
    <script type="text/javascript" src="js/chat.js"></script>
</body>
</html>
