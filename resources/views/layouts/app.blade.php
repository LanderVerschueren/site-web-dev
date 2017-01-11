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
    <link href="/css/app.css" rel="stylesheet">
    
</head>
<body>
    <div class="container">
        <nav>
            <ul>
            	<li class="hamburger">
            		
            	</li>
            	<li class="question">
            		<a href="#">Search</a>
            	</li>
            	<li class="magnifier">
            		<a href="#">FAQ</a>
            	</li>
            	<hr class="divider-top">
            	<li class="enveloppe">
            		<a href="#">Contact</a>
            	</li>
            	<hr class="divider-bottom">
            	<li class="dog">
            		<a href="#">Dogs</a>
            	</li>
            	<li class="cat">
            		<a href="#">Cats</a>
            	</li>
            	<li class="fish">
            		<a href="#">Fish</a>
            	</li>
            	<li class="owl">
            		<a href="#">Birds</a>
            	</li>
            	<li class="bunny">
            		<a href="#">Small animals</a>
            	</li>
            	<li class="other">
            		<a href="#">Other</a>
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
	<script src="https://code.jquery.com/ui/1.12.0/jquery-ui.js"></script>
	<script src="/js/bootstrap.min.js"></script>          
    <script src="/js/app.js"></script>
</body>
</html>