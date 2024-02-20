const sliderExperts = new Swiper('.swiper', {
	//безкінечність прокрутки
	loop: true,
	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	slidesPerView: 3,
	spaceBetween: 10,
	simulateTouch: false,

	breakPoints: {
		1300:{
			slidesPerView: 3.2,
		},
		550:{
			spaceBetween: 30,
		}
	}
}) 
//адаптив для слайда
function adaptiveLinesForMobile() {
	const sliderSlide = document.querySelectorAll('.slider__slide')
	//для кожного слайда дістаю висоту тексту і присвоюю окремо константи 	
	for(const el  of sliderSlide){
		const textSliderBox = el.querySelector('.slide__text')
		let textHeight = textSliderBox.clientHeight

		let textSliderBoxBefore = el.style
		let textSliderBoxAfter = el.style

		let adaptiveTransform
		let adaptiveTop

		if(textHeight <= 192){
			adaptiveTop = 230
			adaptiveTransform = 0.755
		} else if (textHeight > 192 && textHeight <= 231) {
			adaptiveTop = 270
			adaptiveTransform = 0.589
		} else if (textHeight > 231 && textHeight <= 250) {
			adaptiveTop = 290
			adaptiveTransform = 0.508
		} else if (textHeight > 250 && textHeight <= 288) {
			adaptiveTop = 330
			adaptiveTransform = 0.342
		} else {
			adaptiveTop = 368
			adaptiveTransform = 0.185
		}
		textSliderBoxBefore.setProperty('--top-value', `${adaptiveTop}px`)
		textSliderBoxAfter.setProperty('--transform', `${adaptiveTransform}`)
	}
}
function adaptiveLinesForTablet(){
	const sliderSlide = document.querySelectorAll('.slider__slide')
	//для кожного слайда дістаю висоту тексту і присвоюю окремо константи 	
	for (const el of sliderSlide) {
		const textSliderBox = el.querySelector('.slide__text')
		let textHeight = textSliderBox.clientHeight

		let textSliderBoxBefore = el.style
		let textSliderBoxAfter = el.style

		let adaptiveTransform
		let adaptiveTop

		if (textHeight <= 192) {
			adaptiveTop = 275
			adaptiveTransform = 0.791
		} else if ( textHeight > 192 && textHeight <= 220) {
			adaptiveTop = 290
			adaptiveTransform = 0.74
		} else if ( textHeight > 220 && textHeight <= 250) {
			adaptiveTop = 320
			adaptiveTransform = 0.64
		} else {
			adaptiveTop = 414
			adaptiveTransform = 0.327
		}
		textSliderBoxBefore.setProperty('--top-value', `${adaptiveTop}px`)
		textSliderBoxAfter.setProperty('--transform', `${adaptiveTransform}`)
	}
}
function adaptiveLines() {
	const sliderSlide = document.querySelectorAll('.slider__slide')
//для кожного слайда дістаю висоту тексту і присвоюю окремо константи 	
	for (const el of sliderSlide) {
		const textSliderBox = el.querySelector('.slide__text')
		let textHeight = textSliderBox.clientHeight
		
		let textSliderBoxBefore = el.style
		let textSliderBoxAfter = el.style	
		
		let adaptiveTransform
		let adaptiveTop
	if (textHeight <= 280) {
		adaptiveTop = 370
		adaptiveTransform = 0.82
	} else if( textHeight > 280 && textHeight <= 365) {
		adaptiveTop = 454
		adaptiveTransform = 0.627
	} else if (textHeight > 365 && textHeight <= 420) {
		adaptiveTop = 510
		adaptiveTransform = 0.499
	} else if (textHeight > 420 && textHeight <= 504) {
		adaptiveTop = 594
		adaptiveTransform = 0.306
	}  else {
		adaptiveTop = 650
		adaptiveTransform = 0.177
	}
		textSliderBoxBefore.setProperty('--top-value', `${adaptiveTop}px`)
		textSliderBoxAfter.setProperty('--transform', `${adaptiveTransform}`)
	}
}
function handleResize(){
	const width = window.innerWidth
	//Умова якщо ширина тексту менша за 1185px, то викликаю іншу функцію
	if(width < 910){
		adaptiveLinesForMobile()
	} else if (width > 910 && width < 1185) {
		adaptiveLinesForTablet()
	} else {
		adaptiveLines()
	}
}
window.onload = function(){
	handleResize()
	window.addEventListener('resize', handleResize)
}

// слайдер для відгуків
	document.addEventListener('DOMContentLoaded', function(){
	const	sliderReview = new Swiper('.review-slider', {
			slidesPerView: 1,
			spaceBetween: 30,
			navigation:{
				nextEl:".review-slider__btn-next",
				prevEl: ".review-slider__btn-prev",
			},
			pagination:{
				el: ".swiper-pagination",
				clickable: true,
				dynamicBullets: true,
			},
		})
	})
