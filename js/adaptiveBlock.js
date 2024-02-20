//adaptive block 18...
class AdaptiveBlock {
	constructor(blockToMove, blockRecieve, ParentBlockToMove, widthToChange) {
		this.blockToMove = document.querySelector(blockToMove)
		this.blockToRecieve = document.querySelector(blockRecieve)
		this.parentBlockToMove = document.querySelector(ParentBlockToMove)
		this.mediaQuery = window.matchMedia(`(max-width: ${widthToChange}px)`)
		this.mediaQuery.addEventListener('change', this.handleScreenWidthChange.bind(this))
		this.handleScreenWidthChange(this.mediaQuery)
	}
	handleScreenWidthChange(event) {
		if (event.matches)
			this.blockToRecieve.append(this.blockToMove)
		else
			this.parentBlockToMove.append(this.blockToMove)
	}
}
const adBlock = new AdaptiveBlock('.experiense-text__row', '.text__label', '.text__experience', '1200')

//adaptive block actions move to block-picture
const moveActionsBlock = new AdaptiveBlock('.actions', '.media-block__picture', '.media-block__actions', '1322')