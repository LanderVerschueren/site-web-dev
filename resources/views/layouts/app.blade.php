<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Examenopdracht Web Dev') }}</title>

    <!-- Styles -->
    <link rel="stylesheet" href="/css/normalize.css">
    <link rel="stylesheet" href="/css/bootstrap.min.css">
    <link rel="stylesheet" href="/css/bootstrap-theme.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/flexslider/2.6.3/flexslider.min.css">
    <link href="/css/app.css" rel="stylesheet">
    
</head>
<body>
    <div class="container">
        <nav>
            <ul>
            	<li class="hamburger">
            		<a href="#">
                        <img src="/images/sprite.png" alt="">   
                    </a>
            	</li>
            	<li class="question" {{{ (Request::is('dashboard') ? 'class=active' : '') }}}>
                    <a href="#">
                        <img src="/images/sprite.png" alt=""> Search
                    </a>
            	</li>
            	<li class="magnifier" {{{ (Request::is('dashboard') ? 'class=active' : '') }}}>
                    <a href="">
                        <img src="/images/sprite.png" alt=""> FAQ
                    </a>
            	</li>
            	<li class="enveloppe" {{{ (Request::is('dashboard') ? 'class=active' : '') }}}>
                    <a href="/about">
                        <img src="/images/sprite.png" alt=""> Contact
                    </a>
            	</li>
            	<hr class="divider-bottom">
            	<li class="dog" {{{ (Request::is('dashboard') ? 'class=active' : '') }}}>
                    <a href="/productview">
                        <img src="/images/sprite.png" alt=""> Dogs
                    </a>
            	</li>
            	<li class="cat" {{{ (Request::is('dashboard') ? 'class=active' : '') }}}>
                    <a href="/productview">
                        <img src="/images/sprite.png" alt=""> Cats
                    </a>
            	</li>
            	<li class="fish" {{{ (Request::is('dashboard') ? 'class=active' : '') }}}>
                    <a href="/productview">
                        <img src="/images/sprite.png" alt=""> Fish
                    </a>
            	</li>
            	<li class="owl" {{{ (Request::is('dashboard') ? 'class=active' : '') }}}>
                    <a href="/productview">
                        <img src="/images/sprite.png" alt=""> Birds
                    </a>
            	</li>
            	<li class="bunny" {{{ (Request::is('dashboard') ? 'class=active' : '') }}}>
                    <a href="/productview">
                        <img src="/images/sprite.png" alt=""> Small animals
                    </a>
            	</li>
            	<li class="other" {{{ (Request::is('dashboard') ? 'class=active' : '') }}}>
                    <a href="/productview">
                        <img src="/images/sprite.png" alt=""> Other
                    </a>
            	</li>

            <div class="favicon"><a href="/" class="favicon-text">K</a></div>
        </nav>

        @yield('content')

        @include('pages.filter')
    </div>

    <!-- Scripts -->
    <script
		src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js'>
	</script>
	<script
  src="http://code.jquery.com/ui/1.12.1/jquery-ui.min.js"
  integrity="sha256-VazP97ZCwtekAsvgPBSUwPFKdrwD3unUfSGVYrahUqU="
  crossorigin="anonymous"></script>
	<script src="/js/bootstrap.min.js"></script>     
    <script src="/js/jscroll.min.js"></script>   
    <script src="https://cdnjs.cloudflare.com/ajax/libs/flexslider/2.6.3/jquery.flexslider-min.js"></script> 
    <script>
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
          (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
          m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

      ga('create', 'UA-90316874-1', 'auto');
      ga('send', 'pageview');
    </script>
    <script src="/js/app.js"></script>
</body>
</html>