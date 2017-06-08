<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="csrf-token" content="{{ csrf_token() }}">
	<script>
		window.Laravel = {!! json_encode([
			'csrfToken' => csrf_token(),
			]) !!};
		</script>
		<title>Test FB Graphs - Thuong Le</title>
		<link rel="stylesheet" type="text/css" href="{{ asset($publicURL.'/css/jquery.fullpage.min.css' ) }}" />
		<link rel="stylesheet" type="text/css" href="{{ $publicURL }}/css/bootstrap.css" />
		<link rel="stylesheet" type="text/css" href="{{ $publicURL }}/css/font-awesome.css" />
		<link rel="stylesheet" type="text/css" href="{{ $publicURL }}/css/bootstrapsocial.css"/>
		<link rel="stylesheet" type="text/css" href="{{ $publicURL }}/css/style.css" />
		<link rel="shortcut icon" type="image/x-icon" href="{{ $publicURL }}/imgs/fav.png">
		<script src="{{ $publicURL }}/js/jquery-3.2.0.min.js"></script>
		
	</head>
	<body>
		<ul id="menu">
			<li data-menuanchor="welcomePage" class="active"><a href="#welcomePage">Welcome</a></li>
			<li data-menuanchor="chatBox"><a href="#chatBox">Talk with us</a></li>
			<li data-menuanchor="about"><a href="#about">About Us</a></li>
			<li data-menuanchor="contact"><a href="#contact">Contact Us</a></li>
		</ul>
		@if(Auth::user())
		<ul class="user-preference nav pull-right">
			<li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown">Welcome, {{ Auth::user()->name }} <b class="caret"></b></a>
				<ul class="dropdown-menu">
					<li><a href="#"><i class="icon-cog"></i> Profile</a></li>
					<li><a href="#"><i class="icon-envelope"></i> Contact Support</a></li>
					<li class="divider"></li>
					<li><a href="/logout"><i class="icon-off"></i> Logout</a></li>
				</ul>
			</li>
		</ul>
		@else
		<div class="social-btn">
			<a href="/auth/facebook" class="btn btn-block btn-social btn-facebook">
				<span class="fa fa-facebook"></span> Sign in with Facebook
			</a>
		</div>
		@endif
		<div id="fullpage">
			<div class="section " id="section0" style="background:{{ $publicURL }}/imgs/bg1.jpg">
				<h1>Welcome to FB Graphs Testing</h1>
				<p>Looping Top and Bottom Enabled</p>
				<img src="{{ $publicURL }}/imgs/fullPage.png" alt="fullPage" />
			</div>
			<div class="section" id="section1">
			<div class="chatbox" id="myChat">
					<div class="wrapper">
						<div class="container">            
							<div class="right">
								<div class="top"><span>Góc hỏi đáp, trò chuyện.</span></div>
								<div class="chat active" data-chat="person2">
									<chatlog></chatlog>
									
								</div>
								<div class="write">
									{{ csrf_field() }}
									<a href="javascript:;" class="write-link attach"></a>
									<input type="text" />
									<a href="javascript:;" class="write-link smiley"></a>
									<a href="javascript:;" class="write-link send"></a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="section" id="section2">
				<div class="intro">
					<h1>Scroll Down</h1>
					<p>And it will loop to the first section</p>
				</div>
			</div>
			<div class="section" id="section3">
				<div class="intro">
					<h1>Scroll Down</h1>
					<p>And it will loop to the first section</p>
				</div>
			</div>
		</div>
		{{-- SCRIPT --}}
		<script src="{{ $publicURL }}/js/bootstrap.min.js"></script>
		<script src="/js/app.js"></script>
		<script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.9.1/jquery-ui.min.js"></script>
		<script src="{{ $publicURL }}/js/scrolloverflow.min.js"></script>
		<script src="{{ $publicURL }}/js/jquery.fullpage.min.js"></script>
		<script src="{{ $publicURL }}/js/jquery.easings.min.js"></script>
		<script src="{{ $publicURL }}/js/jquery.fullpage.extensions.min.js"></script>
		<script src="{{ $publicURL }}/js/script.js"></script>
		<script type="text/javascript">
			$(document).ready(function() {
				$('#fullpage').fullpage({
					sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE'],
					anchors: ['welcomePage', 'chatBox', 'about','contact'],
					menu: '#menu',
					loopTop: true,
					loopBottom: true
				});
			});
		</script>
	</body>
	</html>
