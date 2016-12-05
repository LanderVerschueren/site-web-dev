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
    <link href="/css/app.css" rel="stylesheet">
    
</head>
<body>
    <div id="app">
        <nav>
            <ul>
            	<li class='hamburger'></li>
            	<li class='question'></li>
            	<li class='magnifier'></li>
				<hr class="divider-top">
            	<li class="enveloppe"></li>
            	<hr class='divider-bottom'>
            	<li class='dog'></li>
            	<li class='cat'></li>
            	<li class='fish'></li>
            	<li class='owl'></li>
            	<li class='bunny'></li>
            	<li class='other'></li>
            </ul>
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
    <script src="/js/app.js"></script>
</body>
</html>