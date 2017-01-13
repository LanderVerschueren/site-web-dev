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
			<div class="product-detail">
				<div class="product-detail-general">
					<div class="image-showcase">
						
					</div>
					<div class="general-info">
						<div class="breadcrumbs-container">
							<a href="/productview">
								<img src="/images/favicon.png" alt="">
								<div class="arrow-left"></div>
								<div class="breadcrumbs first">
									<div class="circle"></div>
									<p>Dogs</p>
								</div>
							</a>
							<a href="/productview-detail">
								<div class="breadcrumbs">
									<p>Splash 'n Fun</p>
								</div>
							</a>
						</div>
						<h3>Cooling mat</h3>
						<h4>&euro; 15,49</h4>
						<label for="colors">Colors</label>
						<div class="dot-container">
							<div class="dot white"></div>
							<div class="dot black"></div>
							<div class="dot blue"></div>
						</div>
						<label for="discription">Description</label>
						<p>Hier komt een de volledige beschrijvende tekst met een max. aantal karakters. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea clit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat consectetur.</p>
					</div>
				</div>

				<div class="product-detail-spec">
					<h4>Specifications</h4>
					<div class="spec-group">
						<label for="">Dimensions</label>
						<div class="spec-group-detail">
							<span>S - &Oslash; 53x18cm</span>
							<span>M - &Oslash; 53x18cm</span>
							<span>L - &Oslash; 53x18cm</span>
						</div>
					</div>
					<div class="spec-group">
						<label for="">Titel</label>
						<div class="spec-group-detail">
							<span>S - hier komt technische tekst</span>
						</div>
					</div>
				</div>

				<div class="product-detail-related">
					<h4>Gerelateerde producten</h4>
					
				</div>

				<div class="kowloon-faq">
					<h4>Frequently asked questions</h4>
					<div class="faq-article closed">
						<div class="faq-article-top">
							<a href="#">Dit is een vraag</a>
							<div class="arrow arrow-right"></div>
						</div>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit..Lorem ipsum dolor sit amet, consectetur adipisicing elit..Lorem ipsum dolor sit amet, consectetur adipisicing elit..Lorem ipsum dolor sit amet, consectetur adipisicing elit..Lorem ipsum dolor sit amet, consectetur adipisicing elit..</p>
					</div>
					<div class="faq-article open">
						<div class="faq-article-top">
							<a href="#">Dit is een opengeklapte vraag</a>
							<div class="arrow arrow-down"></div>
						</div>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit..Lorem ipsum dolor sit amet, consectetur adipisicing elit..Lorem ipsum dolor sit amet, consectetur adipisicing elit..Lorem ipsum dolor sit amet, consectetur adipisicing elit..Lorem ipsum dolor sit amet, consectetur adipisicing elit..</p>
					</div>
					<div class="faq-article closed">
						<div class="faq-article-top">
							<a href="#">Dit is een vraag</a>
							<div class="arrow arrow-right"></div>
						</div>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit..Lorem ipsum dolor sit amet, consectetur adipisicing elit..Lorem ipsum dolor sit amet, consectetur adipisicing elit..Lorem ipsum dolor sit amet, consectetur adipisicing elit..Lorem ipsum dolor sit amet, consectetur adipisicing elit..</p>
					</div>
				</div>
				<div class="newsletter">
					<div class="background-left">
						<h5>discover amazing<br>Kowloon deals!</h5>
						<p>only in our newsletter</p>
					</div>
					<form action="#" method="POST">
						<p class="newsletter-subscribe">Subscribe to our newsletter</p>
						<p class="newsletter-lorum">Lorum ipsum dolor sit amet..</p>
						<div class="form-group">
							<input type="text" placeholder="Domain @ name.com">
							<button type="submit">OK</button>
						</div>
					</form>
				</div>
			</div>
		</section>
	</div>
</content>
@endsection