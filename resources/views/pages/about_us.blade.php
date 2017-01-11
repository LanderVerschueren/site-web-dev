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
					<p>About us</p>
				</div>
			</div>

			<div class="about">
				<h3>About us.</h3>

				<div class="kowloon-info">
					<div class="history-container">
						<h4>Kowloon</h4>
						<div class="history">
							<p>Pet Concept, active since 1998, is developing, importing and exporting products for pets worldwide.</p>

							<p>natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae sequi nesciunt.</p>
						</div>
					</div>
					<div class="contact-container">
						<h4>Contact</h4>
						<ul>
							<li>Deckx Johan</li>
							<li>Bosdreef 7</li>
							<li>2200 Herentals</li>
						</ul>
					</div>
				</div>

				<div class="kowloon-contact">
					<h4>Leave us a message</h4>
					<form action="#">
						<div class="form-group">
							<label for="">E-mail</label>
							<input type="email" placeholder="name@domain.com" required>
						</div>

						<div class="form-group">
							<label for="">Your message</label>
							<textarea name="" id="" required></textarea>
						</div>

						<button>Send</button>
					</form>
				</div>

				<div class="kowloon-faq">
					<h4>Frequently asked questions</h4>
					<div class="closed"><a href="#">Dit is een vraag</a></div>
					<div class="open">
						<a href="">Dit is een opengeklapte vraag</a>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit..Lorem ipsum dolor sit amet, consectetur adipisicing elit..Lorem ipsum dolor sit amet, consectetur adipisicing elit..Lorem ipsum dolor sit amet, consectetur adipisicing elit..Lorem ipsum dolor sit amet, consectetur adipisicing elit..</p>
					</div>
					<div class="closed"><a href="#">Dit is een vraag</a></div>
				</div>
			</div>
		</section>
	</div>
</content>
@endsection