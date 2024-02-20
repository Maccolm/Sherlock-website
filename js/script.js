//Скролинг move to
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener("click", onMenuLinkClick);
	});

	function onMenuLinkClick(e) {
		const menuLink = e.target;
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset

			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth",
			});
			e.preventDefault();
		}
	}
}
//Burger  =====================
	const mainContainer = document.querySelector('.main')
	const menu = document.querySelector('.header__menu')
	const icon = document.querySelector('.menu__icon')
	const logo = document.querySelector('.row-header__logo')
	//Добавляю слухач на контейнер, щоб визначити, що нажав не на іконку і закрити меню
	mainContainer.addEventListener('click', function(event){
		if (!icon.contains(event.target)) {
			icon.classList.remove('_open')
			menu.classList.remove('_active')
		}
	})
if(icon){
	icon.addEventListener('click', function(e){
		icon.classList.toggle('_open')
		menu.classList.toggle('_active')
		if (menu.classList.contains('_active') && window.innerWidth <= 515) {
			logo.style.opacity = 0 
		} else {logo.style.opacity = 1}
	})
}

//adaptive block 18...
class AdaptiveBlock{
	constructor(blockToMove, blockRecieve, ParentBlockToMove, widthToChange){
		this.blockToMove = document.querySelector(blockToMove)
		this.blockToRecieve = document.querySelector(blockRecieve)
		this.parentBlockToMove = document.querySelector(ParentBlockToMove)
		this.mediaQuery = window.matchMedia(`(max-width: ${widthToChange}px)`)
		this.mediaQuery.addEventListener('change', this.handleScreenWidthChange.bind(this))
		this.handleScreenWidthChange(this.mediaQuery)
	}
	handleScreenWidthChange(event){
		if(event.matches)
			this.blockToRecieve.append(this.blockToMove)
		else 
			this.parentBlockToMove.append(this.blockToMove)
	}
}
// const adBlock = new AdaptiveBlock('.experiense-text__row', '.text__label', '.text__experience', '1200')

// //adaptive block actions move to block-picture
// const moveActionsBlock = new AdaptiveBlock('.actions', '.media-block__picture','.media-block__actions', '1322')

//адаптив для слайдера. Робимо один слайдер при ширині екрану


// Клас для запуску анімації при позиції екрану.
class PlayAnimation{
	constructor(blockName, animationClass, cssObj){
		this.blockName = document.querySelector(blockName)
		this.animationClass = animationClass
		this.cssObj = {
			positionDown: 'positionDown',
			hide: 'hide',
			positionRight: 'positionRight',
			positionLeft: 'positionLeft',
			positionUp: 'positionUp',
			...(cssObj ?? {})
		}
		this.options = { threshold: [0.3] }
		this.observer = new IntersectionObserver(this.onIntersection.bind(this), this.options)
		this.init()
	}
	init(){
		switch (this.animationClass) {
			case 'moveFromUp':
				this.blockPosition = this.cssObj.positionUp
				this.animationTransition = 'all 1s'
				break;
			case 'moveFromDown':
				this.blockPosition = this.cssObj.positionDown
				this.animationTransition = 'all 1s'
				break
			case 'moveFromDown_1hs':
				this.blockPosition = this.cssObj.positionDown
				this.animationTransition = 'all 1s ease 0.1s'
				break
			case 'moveFromDown_2hs':
				this.blockPosition = this.cssObj.positionDown
				this.animationTransition = 'all 1s ease 0.2s'
				break
			case 'moveFromDown_3hs':
				this.blockPosition = this.cssObj.positionDown
				this.animationTransition = 'all 1s ease 0.3s'
				break
			case 'moveFromDown_4hs':
				this.blockPosition = this.cssObj.positionDown
				this.animationTransition = 'all 1s ease 0.4s'
				break;
			case 'moveFromLeft':
				this.blockPosition = this.cssObj.positionLeft
				this.animationTransition = 'all 1s ease'
			case 'moveFromLeft_1hs':
				this.blockPosition = this.cssObj.positionLeft
				this.animationTransition = 'all 1.5s ease'
				break;
			case 'moveFromLeft_2s':
				this.blockPosition = this.cssObj.positionLeft
				this.animationTransition = 'all 2s ease'
				break;
			case 'moveFromRight':
				this.blockPosition = this.cssObj.positionRight
				this.animationTransition = 'all 1s ease'
				break;
			case 'moveFromRight_2s':
				this.blockPosition = this.cssObj.positionRight
				this.animationTransition = 'all 2s ease'
				break;
			case 'opacityDelay':	
			this.blockPosition = this.cssObj.hide
			this.animationTransition = 'all 3s ease 1s'
			break;
			default:
				this.blockPosition = this.cssObj.hide
				this.animationTransition = 'all 2s'
				break;
		}
		this.blockName.classList.add(this.blockPosition)
		this.observer.observe(this.blockName)
		setTimeout(()=>{
			this.blockName.style.transition = this.animationTransition
		},1000)
	}	
	onIntersection(entries) {
		// Отримання першого запису
		const entry = entries[0];

		// Деструктуризація entry
		const { target, isIntersecting } = entry;

			if (isIntersecting) {
				target.classList.add(this.animationClass);
			} else {
				target.classList.remove(this.animationClass);
			}
	}
}

const animation_Block_First_Arrow = [
	{
		blockName: '.label-text__legal',
		animationName: 'moveFromUp',
	},
	{
		blockName: '.label-text__services',
		animationName: 'moveFromLeft',
	},
	{
		blockName: '.label-text__sherlock',
		animationName: 'moveFromRight',
	},
	{
		blockName: '.label-text__other',
		animationName: 'opacity',
	},
	{
		blockName: '.row-header',
		animationName: 'opacity',
	},
	{
		blockName: '.actions__quote',
		animationName: 'moveFromLeft_1hs',
	},
	{
		blockName: '.actions__text',
		animationName: 'moveFromRight',
	},
	{
		blockName: '.experiense-text__row',
		animationName: 'moveFromRight_2s',
	},

]
//анімую колекцію з першим блоком\
window.addEventListener('DOMContentLoaded',  function(){
	animation_Block_First_Arrow.forEach((element) =>{
	 const b1 = new PlayAnimation(element.blockName, element.animationName)
	})
})

//анімуємо другий блок
const animation_Block_Second_Arrow = [
	{
		blockName: '.about__title',
		animationName: 'moveFromLeft',
	},
	{
		blockName: '.about__text',
		animationName: 'opacity',
	},
	{
		blockName: '.lawyers',
		animationName: 'moveFromRight',
	},
	{
		blockName: '.years',
		animationName: 'moveFromLeft_1hs',
	},
	{
		blockName: '.countries',
		animationName: 'opacity',
	},
	{
		blockName: '.partner-banks',
		animationName: 'moveFromRight',
	},
	{
		blockName: '.projects',
		animationName: 'moveFromLeft',
	},
	{
		blockName: '.narrative__row',
		animationName: 'moveFromDown',
	},
]

//Анімую другий блок
animation_Block_Second_Arrow.forEach((el)=>{
	const b2 = new PlayAnimation(el.blockName, el.animationName)
})

//Анімую третій блок
const animation_Block_Third_Arrow = [
	{
		blockName: '.directions__label',
		animationName: 'moveFromRight',
	},
	{
		blockName: '.directions-company',
		animationName: 'moveFromLeft',
	},
	{
		blockName: '.directions__text',
		animationName: 'moveFromDown',
	},
]
//Анімую третій блок
animation_Block_Third_Arrow.forEach((el) =>{
	const b3 = new PlayAnimation(el.blockName, el.animationName)
})

//Анімую четвертий блок
const animation_Block_Forth_Arrow = [
	{
		blockName: '.specialist',
		animationName: 'moveFromLeft',
	},
	{
		blockName: '.label-specialists__lawyers',
		animationName: 'moveFromRight',
	},
	{
		blockName: '.label-specialists__detectives',
		animationName: 'moveFromLeft',
	},
	{
		blockName: '.expert',
		animationName: 'opacity',
	},
	{
		blockName: '.label-specialists__text',
		animationName: 'moveFromDown',
	},
]

animation_Block_Forth_Arrow.forEach((el) =>{
	const b4 = new PlayAnimation(el.blockName, el.animationName)
})

//Анімую п'ятий блок
const animation_Block_Fifth_Arrow = [
	{
		blockName: '.conditions__title',
		animationName: 'moveFromRight',
	},
	{
		blockName: '.title-payment',
		animationName: 'moveFromLeft',
	},
	{
		blockName: '.conditions__text',
		animationName: 'opacityDelay',
	},
]

//Анімую п'ятий блок
animation_Block_Fifth_Arrow.forEach((el) =>{
	const b5 = new PlayAnimation(el.blockName, el.animationName,)
})

//анімую 5-й блок, колонки
const reviewColumns_5_Block = [
	{
		blockName: '.about-conditions__column',
		animationName: 'moveFromDown',
	},
	{
		blockName: '.about-conditions__column_2',
		animationName: 'moveFromDown_1hs',
	},
	{
		blockName: '.about-conditions__column_3',
		animationName: 'moveFromDown_2hs',
	},
	{
		blockName: '.about-conditions__column_3',
		animationName: 'moveFromDown_3hs',
	},
	{
		blockName: '.about-conditions__column_4',
		animationName: 'moveFromDown_4hs',
	},
]

//анімую 5-й блок, колонки
reviewColumns_5_Block.forEach((el)=>{
		const b5Columns = new PlayAnimation(el.blockName, el.animationName) 

})
//6 блок слово REVIEW
const reviewWord = [{	
	blockName: '.reviews__text',
	animationName: 'opacity'
}]

reviewWord.forEach((el) =>{
	const b6 = new PlayAnimation(el.blockName, el.animationName)
})

// 7 block
const animation_Block_Seventh_Arrow = [
	{
		blockName: '.form__quote',
		animationName: 'opacity'
	},
	{
		blockName: '.form-container__btn',
		animationName: 'opacity'
	},
	{
		blockName: '.form__title',
		animationName: 'opacity'
	},
	{
		blockName: '.form-container__form',
		animationName: 'moveFromDown'
	}
]
animation_Block_Seventh_Arrow.forEach((el) =>{
	const b7 = new PlayAnimation(el.blockName, el.animationName)
})
//footer
const animation_Block_eight_Arrow = [
	{
		blockName: '.footer__label',
		animationName: 'moveFromRight'
	},
	{
		blockName: '.footer__column-year',
		animationName: 'opacityDelay'
	},
	{
		blockName: '.footer__phone',
		animationName: 'moveFromLeft'
	},
	{
		blockName: '.footer__mail',
		animationName: 'moveFromRight'
	},
	{
		blockName: '.footer__column-remark',
		animationName: 'moveFromLeft'
	},
	{
		blockName: '.column-footer__text',
		animationName: 'opacity'
	},
	{
		blockName: '.column-footer__item-1',
		animationName: 'moveFromDown'
	},
	{
		blockName: '.column-footer__item-2',
		animationName: 'moveFromDown_1hs'
	},
	{
		blockName: '.column-footer__item-3',
		animationName: 'moveFromDown_2hs'
	},
	{
		blockName: '.column-footer__item-4',
		animationName: 'moveFromDown_3hs'
	},
	
]
animation_Block_eight_Arrow.forEach((el) =>{
	const b8 = new PlayAnimation(el.blockName, el.animationName)
})