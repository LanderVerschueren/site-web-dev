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
    <link href="/css/app.css" rel="stylesheet">
    
</head>
<body>
    <div class="container">
        <nav>
            <ul>
            	<li class="hamburger">
            		<div></div>
            	</li>
            	<li class="question">
            		<div></div>
            		<span class="text_category">Search</span>
            	</li>
            	<li class="magnifier">
            		<div></div>
            		<span class="text_category">FAQ</span>
            	</li>
            	<hr class="divider-top">
            	<li class="enveloppe">
            		<div></div>
            		<span class="text_category">Contact</span>
            	</li>
            	<hr class="divider-bottom">
            	<li class="dog">
            		<div></div>
            		<span class="text_category">Dogs</span>
            	</li>
            	<li class="cat">
            		<div></div>
            		<span class="text_category">Cats</span>
            	</li>
            	<li class="fish">
            		<div></div>
            		<span class="text_category">Fish</span>
            	</li>
            	<li class="owl">
            		<div></div>
            		<span class="text_category">Birds</span>
            	</li>
            	<li class="bunny">
            		<div></div>
            		<span class="text_category">Small animals</span>
            	</li>
            	<li class="other">
            		<div></div>
            		<span class="text_category">Other</span>
            	</li>

            <div class="favicon">
            	<img src="/images/favicon.png" alt="Logo of Kowloon">
            </div>
        </nav>

        @yield('content')
    </div>

    <!-- Scripts -->
    <script
		src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js'>
	</script>
	<script src="//code.jquery.com/ui/1.12.0/jquery-ui.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.8/js/materialize.min.js"></script>
          
    <script src="/js/app.js"></script>
</body>
</html>