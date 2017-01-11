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
			<div class="introtext">
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			</div>

			<div class="categories">
				<div class="dog">
					<img src="/images/sprite.png" alt="">
					<h3>DOGS</h3>
				</div>
				<div>
					<img src="/images/sprite.png" alt="">
					<h3>CATS</h3>
				</div>
				<div>
					<img src="/images/sprite.png" alt="">
					<h3>FISH</h3>
				</div>
				<div>
					<img src="/images/sprite.png" alt="">
					<h3>BIRDS</h3>
				</div>
				<div>
					<img src="/images/sprite.png" alt="">
					<h3>SMALL ANIMALS</h3>
				</div>
				<div>
					<img src="/images/sprite.png" alt="">
					<h3>OTHER</h3>
				</div>
			</div>
		</section>
	</div>
</content>
@endsection