<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Looping - fullPage.js</title>
    <link rel="stylesheet" type="text/css" href="../jquery.fullPage.css" />
    <link rel="stylesheet" type="text/css" href="examples.css" />
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
    <script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.9.1/jquery-ui.min.js"></script>
    <script type="text/javascript" src="../vendors/scrolloverflow.js"></script>
    <script type="text/javascript" src="../jquery.fullPage.js"></script>
    <script type="text/javascript" src="examples.js"></script>
    <script type="text/javascript">
        $(document).ready(function() {
            $('#fullpage').fullpage({
                sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE'],
                anchors: ['firstPage', 'secondPage', '3rdPage'],
                menu: '#menu',
                loopTop: true,
                loopBottom: true
            });
        });
    </script>

</head>