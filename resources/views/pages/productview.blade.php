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


			<div class="product-view">
				<h3>
					DOG ARTICLES
				</h3>

				<div class="product-filter open">
					<div class="product-filter-top">
						<a href="#">Filter</a>
						<div class="arrow arrow-down"></div>
					</div>
					<form action="#" class="product-filter-filters">
						<div class="form-group">							
							<label for="">By collection</label>
							<div class="input-group">
								<input type="checkbox" name="splash" value="splash">
								<label for="splash">Splash 'n Fun</label>
								<input type="checkbox" name="luxury" value="luxury">
								<label for="luxury">Luxury</label>
								<input type="checkbox" name="new" value="new">
								<label for="new">New</label>
								<input type="checkbox" name="sale" value="sale">
								<label for="sale">On sale</label>
								<input type="checkbox" name="other" value="other">
								<label for="other">Other</label>
							</div>
						</div>
						<div class="form-group">							
							<label for="">Price Range</label>
							<div class="slider-group">
								<div id="slider-range"></div>
								<input type="text" id="amount-left">
								<input type="text" id="amount-right">
							</div>
						</div>
					</form>
				</div>

				<div class="product-view-list">
					<div class="product-view-dropdown">
						<select name="" id="">
							<option disabled selected hidden>Sort by relevance</option>
							<option value="">Price low to high</option>
							<option value="">Price high to low</option>
							<option value="">Latest</option>
							<option value="">Oldest</option>
						</select>
						<p>Dog items <span>5 of 56</span></p>
					</div>
					<div class="product-view-container">
						<div class="product-view-container-left">
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
						<div class="product-view-container-right">
							<a href="/productview-detail">
								<img src="/images/voorkant_koeling_mat_3.png" alt="Productfoto van een koeling mat voor honden."> 
								<h4 class="product-title">Cooling mat</h4>
								<p class="product-description">Hier komt een deel van de beschrijvende tekst die bij elk product hoort. Ook terug te vinden in het product detail.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius....</p>
								<div class="product-text">
									<p>Cooling Mat</p>
									<p>€ 15,49</p>
								</div>
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</content>
@endsection