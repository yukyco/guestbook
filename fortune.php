<?php
	$omikuji = array('LUCKY', 'HAPPY', 'UNLUCKY', 'UNHAPPY', 'TOO HAPPY', 'PRETTY HAPPY',);

	$result = $omikuji[mt_rand(0, count($omikuji)-1)];
?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="shortcut icon" href="assets/img/favicon.png">

    <title>Siimple - AdminArtist</title>

    <!-- Bootstrap -->
    <link href="assets/css/bootstrap.css" rel="stylesheet">
	<link href="assets/css/bootstrap-theme.css" rel="stylesheet">

    <!-- siimple style -->
    <link href="assets/css/style.css" rel="stylesheet">

    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
      <script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>
    <![endif]-->
  </head>

  <body>

    <!-- Fixed navbar -->
    <div class="navbar navbar-inverse navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="index.html">AdminArtist</a>
        </div>
        <div class="navbar-collapse collapse">
          <ul class="nav navbar-nav navbar-right">
            <li><a href="../guestbook/fortune.php">Fortune Cookie</a></li>
            <li><a href="../guestbook/yourage.html">How old are you</a></li>
	          <li><a href="../guestbook/game.html">What character</a></li>
	          <li><a href="../guestbook/joblist.html">Find Occupation</a></li>
            <li><a href="../guestbook/5seconds.html">5 seconds Game</a></li>
            <li><!--<a href="../guestbook/ousama.html">King Game</a>--></li>
          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </div>

	<div id="header">
		<div class="container">
			<div class="row">
				<div class="col-lg-6">
					<h5>Today's Fortune♩</h5>
					<h2>Today's fortune is 「<?php echo $result; ?> !」</h2>
                     <p align="center"><a href="<?php echo $_SERVER["SCRIPT_NAME"]; ?>"> Try again ?</a></p>

       <!-- Start cssSlider.com -->
		<!-- Generated by cssSlider.com 1.8 -->
		<link rel="stylesheet" href="http://yukycohamabe.ciao.jp/picture/cssslider_files/csss_engine1/style.css">
		<!--[if IE]><link rel="stylesheet" href="http://yukycohamabe.ciao.jp/picture/cssslider_files/csss_engine1/ie.css"><![endif]-->
		<!--[if lte IE 9]><script type="text/javascript" src="http://yukycohamabe.ciao.jp/picture/cssslider_files/csss_engine1/ie.js"></script><![endif]-->
       <div class="csslider1 autoplay ">
		<input name="cs_anchor1" id="cs_slide1_0" type="radio" class="cs_anchor slide">
		<input name="cs_anchor1" id="cs_slide1_1" type="radio" class="cs_anchor slide">
		<input name="cs_anchor1" id="cs_slide1_2" type="radio" class="cs_anchor slide">
		<input name="cs_anchor1" id="cs_slide1_3" type="radio" class="cs_anchor slide">
		<input name="cs_anchor1" id="cs_slide1_4" type="radio" class="cs_anchor slide">
		<input name="cs_anchor1" id="cs_slide1_5" type="radio" class="cs_anchor slide">
		<input name="cs_anchor1" id="cs_play1" type="radio" class="cs_anchor" checked="">
		<input name="cs_anchor1" id="cs_pause1_0" type="radio" class="cs_anchor pause">
		<input name="cs_anchor1" id="cs_pause1_1" type="radio" class="cs_anchor pause">
		<input name="cs_anchor1" id="cs_pause1_2" type="radio" class="cs_anchor pause">
		<input name="cs_anchor1" id="cs_pause1_3" type="radio" class="cs_anchor pause">
		<input name="cs_anchor1" id="cs_pause1_4" type="radio" class="cs_anchor pause">
		<input name="cs_anchor1" id="cs_pause1_5" type="radio" class="cs_anchor pause">
		 <ul>
			<li class="cs_skeleton"><img src="../../picture/cssslider_files/csss_images1/slide5.jpg" style="width: 100%;"></li>
			<li class="num0 img slide"> <img src="../../picture/cssslider_files/csss_images1/slide5.jpg" alt="slide5" title="slide5"></li>
			<li class="num1 img slide"> <img src="../../picture/cssslider_files/csss_images1/slide3.jpg" alt="slide3" title="slide3"></li>
			<li class="num2 img slide"> <img src="../../picture/cssslider_files/csss_images1/slide4.jpg" alt="slide4" title="slide4"></li>
			<li class="num3 img slide"> <img src="../../picture/cssslider_files/csss_images1/slide2.jpg" alt="slide2" title="slide2"></li>
			<li class="num4 img slide"> <img src="../../picture/cssslider_files/csss_images1/slide1.jpg" alt="slide1" title="slide1"></li>
			<li class="num5 img slide"> <img src="../../picture/cssslider_files/csss_images1/slide.jpg" alt="slide" title="slide"></li>
		 </ul>
		<div class="cs_engine"><a href="http://cssslider.com">slideshow jquery</a> by cssSlider.com v1.8m</div>
		 <div class="cs_description">
			<label class="num0"><span class="cs_title"><span class="cs_wrapper">slide5</span></span></label>
			<label class="num1"><span class="cs_title"><span class="cs_wrapper">slide3</span></span></label>
			<label class="num2"><span class="cs_title"><span class="cs_wrapper">slide4</span></span></label>
			<label class="num3"><span class="cs_title"><span class="cs_wrapper">slide2</span></span></label>
			<label class="num4"><span class="cs_title"><span class="cs_wrapper">slide1</span></span></label>
			<label class="num5"><span class="cs_title"><span class="cs_wrapper">slide</span></span></label>
		 </div>
		 <div class="cs_play_pause">
			<label class="cs_play" for="cs_play1"><span><i></i><b></b></span></label>
			<label class="cs_pause num0" for="cs_pause1_0"><span><i></i><b></b></span></label>
			<label class="cs_pause num1" for="cs_pause1_1"><span><i></i><b></b></span></label>
			<label class="cs_pause num2" for="cs_pause1_2"><span><i></i><b></b></span></label>
			<label class="cs_pause num3" for="cs_pause1_3"><span><i></i><b></b></span></label>
			<label class="cs_pause num4" for="cs_pause1_4"><span><i></i><b></b></span></label>
			<label class="cs_pause num5" for="cs_pause1_5"><span><i></i><b></b></span></label>
			</div>
          <div class="cs_arrowprev">
			<label class="num0" for="cs_slide1_0"><span><i></i><b></b></span></label>
			<label class="num1" for="cs_slide1_1"><span><i></i><b></b></span></label>
			<label class="num2" for="cs_slide1_2"><span><i></i><b></b></span></label>
			<label class="num3" for="cs_slide1_3"><span><i></i><b></b></span></label>
			<label class="num4" for="cs_slide1_4"><span><i></i><b></b></span></label>
			<label class="num5" for="cs_slide1_5"><span><i></i><b></b></span></label>
		  </div>
		   <div class="cs_arrownext">
			<label class="num0" for="cs_slide1_0"><span><i></i><b></b></span></label>
			<label class="num1" for="cs_slide1_1"><span><i></i><b></b></span></label>
			<label class="num2" for="cs_slide1_2"><span><i></i><b></b></span></label>
			<label class="num3" for="cs_slide1_3"><span><i></i><b></b></span></label>
			<label class="num4" for="cs_slide1_4"><span><i></i><b></b></span></label>
			<label class="num5" for="cs_slide1_5"><span><i></i><b></b></span></label>
		   </div>
		   <div class="cs_bullets">
			 <label class="num0" for="cs_slide1_0"> <span class="cs_point"></span>
			  <span class="cs_thumb"><img src="../../picture/cssslider_files/csss_tooltips1/slide5.jpg" alt="slide5" title="slide5"></span></label>
			 <label class="num1" for="cs_slide1_1"> <span class="cs_point"></span>
			  <span class="cs_thumb"><img src="../../picture/cssslider_files/csss_tooltips1/slide3.jpg" alt="slide3" title="slide3"></span></label>
			 <label class="num2" for="cs_slide1_2"> <span class="cs_point"></span>
			  <span class="cs_thumb"><img src="../../picture/cssslider_files/csss_tooltips1/slide4.jpg" alt="slide4" title="slide4"></span></label>
			 <label class="num3" for="cs_slide1_3"> <span class="cs_point"></span>
			  <span class="cs_thumb"><img src="../../picture/cssslider_files/csss_tooltips1/slide2.jpg" alt="slide2" title="slide2"></span></label>
			 <label class="num4" for="cs_slide1_4"> <span class="cs_point"></span>
			  <span class="cs_thumb"><img src="../../picture/cssslider_files/csss_tooltips1/slide1.jpg" alt="slide1" title="slide1"></span></label>
			 <label class="num5" for="cs_slide1_5"> <span class="cs_point"></span>
			  <span class="cs_thumb"><img src="../../picture/cssslider_files/csss_tooltips1/slide.jpg" alt="slide" title="slide"></span></label>
		    </div>
		  </div>
		<!-- End cssSlider.com -->
		   <p></p>
		 <!-- アンケート
	      <p align="right"><a href="../guestbook/questions/wizard1.php"><font color="#40e0d0">サイト改善アンケートにご協力ください♩</font></a></p> -->
     </div>
   </div>
 </div>
	<!-- footer -->
 	<div id="footer">
	<div class="container">
		<div class="row">
			<div class="col-lg-6 col-lg-offset-3">
			    <p class="copyright">Copyright &copy; 2015 - 2018 AdminArtist</p>
                            <p align="right"><a class="twitter-follow-button" href="https://twitter.com/ArtistBoxStanda" data-size="large">
Follow @ArtistBoxStanda</a></p>
			</div>
		</div>
	</div>
  </body>
</html>
