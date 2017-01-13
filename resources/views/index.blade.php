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

				<div class="mySlides fade">
					<img src="/images/visual_c.png">
				</div>

			</div>
		</header>

		<section>
			<div class="introtext">
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			</div>

			<div class="categories">
				<div class="categories-container">
					<a href="/productview">
						<div class="image-container">
							<img src="/images/category/dog.png" alt="">
						</div>
						<h3>DOGS</h3>
					</a>
				</div>
				<div class="categories-container">
					<a href="/productview"><div class="image-container">
						<img src="/images/category/cat.png" alt="">
					</div>
					<h3>CATS</h3>
					</a>
				</div>
				<div class="categories-container">
					<a href="/productview"><div class="image-container">
						<img src="/images/category/fish.png" alt="">
					</div>
					<h3>FISH</h3>
					</a>
				</div>
				<div class="categories-container">
					<a href="/productview"><div class="image-container">
						<img src="/images/category/bird.png" alt="">
					</div>
					<h3>BIRDS</h3>
					</a>
				</div>
				<div class="categories-container">
					<a href="/productview"><div class="image-container">
						<img src="/images/category/hamster.png" alt="">
					</div>
					<h3>SMALL ANIMALS</h3>
					</a>
				</div>
				<div class="categories-container">
					<a href="/productview"><div class="image-container">
						<img src="/images/category/+.png" alt="">
					</div>
					<h3>OTHER</h3>
					</a>
				</div>
			</div>

			<div class="hot-items">
				<h3>HOT ITEMS.</h3>
				<div class="product-container">
					<div class="product">
						<a href="/productview-detail">
							<img src="/images/voorkant_koeling_mat.png" alt="Productfoto van een koeling mat voor honden.">
							<div class="product-text">
								<p>Cooling Mat</p>
								<p>€ 15,49</p>
							</div>

							<div class="dot-container">
								<div class="dot white"></div>
								<div class="dot black"></div>
								<div class="dot blue"></div>
							</div>
						</a>
					</div>
					<div class="product">
						<a href="/productview-detail">
							<img src="/images/voorkant_koeling_mat.png" alt="Productfoto van een koeling mat voor honden.">
							<div class="product-text">
								<p>Cooling Mat</p>
								<p>€ 15,49</p>
							</div>

							<div class="dot-container">
								<div class="dot white"></div>
								<div class="dot black"></div>
								<div class="dot blue"></div>
							</div>
						</a>
					</div>
					<div class="product">
						<a href="/productview-detail">
							<img src="/images/voorkant_koeling_mat.png" alt="Productfoto van een koeling mat voor honden.">
							<div class="product-text">
								<p>Cooling Mat</p>
								<p>€ 15,49</p>
							</div>

							<div class="dot-container">
								<div class="dot white"></div>
								<div class="dot black"></div>
								<div class="dot blue"></div>
							</div>
						</a>
					</div>

					<div class="product-stack">
						<a href="/productview-detail">
							<div class="front">
								<img src="/images/voorkant_koeling_mat_2.png" alt="Productfoto van een koeling mat voor honden.">
								<div class="product-text stack">
									<p>Cooling Mat</p>
									<p>€ 15,49</p>
								</div>
							</div>
							<div class="middle"></div>
							<div class="back"></div>
						</a>
					</div>
				</div>
				<a href="#" class="visit-store-link">Visit the store</a>
			</div>

			<div class="newsletter">
				<div class="background-left">
					<h5>discover amazing<br>Kowloon deals!</h5>
					<p>only in our newsletter</p>
				</div>
				<form action="/emailPost" method="POST">
					{{ csrf_field() }}
					<p class="newsletter-subscribe">Subscribe to our newsletter</p>
					<p class="newsletter-lorum">Lorum ipsum dolor sit amet..</p>
					<div class="form-group">
						<input name="email" type="email" required placeholder="Domain @ name.com">
						<button type="submit">OK</button>
					</div>
				</form>
			</div>
		</section>
	</div>
</content>
@endsection