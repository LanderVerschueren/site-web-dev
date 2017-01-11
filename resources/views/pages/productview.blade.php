@extends('layouts.app')

@section('content')
<content>
	<div class="inner_container">
		<header>
			<div class="slideshow-container">

				<div class="mySlides fade">
					<img src="/images/visual_a.png">
				</div>

				<div class="mySlides fade">
					<img src="/images/visual_b.png">
				</div>

			</div>

			<div class="dot-container">
				<span class="dot"></span> 
				<span class="dot"></span> 
				<span class="dot"></span> 
			</div>
		</header>

		<section>
			<div class="breadcrumbs-container">
				<img src="/images/favicon.png" alt="">
				<div class="arrow-left"></div>
				<div class="breadcrumbs first">
					<div class="circle"></div>
					<p>Dogs</p>
				</div>
				<div class="breadcrumbs">
					<p>Splash 'n Fun</p>
				</div>
			</div>


			<h2>
				DOG ARTICLES
			</h2>




		</section>
	</div>
</content>
@endsection