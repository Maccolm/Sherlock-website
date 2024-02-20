// //кількість слайдів для показу 
// class NumberSlides{
// 	constructor(){
// 		this.slides = document.querySelectorAll('.slide__box')
// 		this.sliderContainer = document.querySelector('.slider__wrapper')
// 		this.mediaQuery = window.innerWidth
// 		this.widthToChange = 675
// 		window.addEventListener('resize', this.handleChangeWithScreen.bind(this))
// 		this.handleChangeWithScreen()
// 	}
// 	handleChangeWithScreen(){
// 		if(this.mediaQuery < this.widthToChange){
// 			this.moveSlide()
// 		}
// 	}
// 	moveSlide(){
// 		for (const slide of this.slides) {
// 			const review = slide.lastChild
// 			const newSlide = document.createElement('div')
// 			newSlide.className = 'slide__box'
// 			newSlide.append(review)
// 			this.sliderContainer.append(newSlide)
// 		}
// 	}
// }
// window.onload = function(){
// 	const changeNumberSlides = new NumberSlides()
// }

function dynamicClass() {
	const pagination = document.querySelector('.swiper-pagination')
	let screenWidth = window.innerWidth 
	const widthToChange = 675
	if(screenWidth <= widthToChange){
		pagination.classList.add('swiper-pagination-bullets-dynamic')
	} else {
		pagination.classList.remove('swiper-pagination-bullets-dynamic')
	}
}

window.addEventListener('resize', dynamicClass)

document.addEventListener('DOMContentLoaded', dynamicClass)