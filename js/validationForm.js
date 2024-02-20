"use strict"

document.addEventListener('DOMContentLoaded', function (){
	const form = document.getElementById('form');
	form.addEventListener('submit', formSend);

	async function formSend(e){
		e.preventDefault();

		let error = formValidate(form);
		if (error === 0) {
			
		} else {
			alert("Fill in the required fields")
		}
	}

	function formValidate(form) {
		let error = 0
		//призначаємо клас для input, який необхідно перевіряти
		let formReq = document.querySelectorAll('._req')

		for (let i = 0; i < formReq.length; i++) {
			const input = formReq[i];
			formRemoveError(input);

			if(input.classList.contains('_email')){
				if (emailTest(input)) {
					formAddError(input);
					error++;
				}
			 } else if (input.getAttribute("type") === "checkbox" && input.checked === false) { ////якщо потрібно перевірити чекбокси
						formAddError(input);
						error++;
			} else {
				if(input.value === ""){
					formAddError(input);
					error++;
				}
			}
		}
		return error;
	}

	function formAddError(input){
		input.parentElement.classList.add('_error');
		input.classList.add('_error');
	}
	function formRemoveError(input){
		input.parentElement.classList.remove('_error');
		input.classList.remove('_error');
	}
	//функція тесту імейлу
	function emailTest(input) {
		return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
	}
})

//style:
// 	.form__input._error{
// 		box - shadow: 0 0 15px red;
// }
//HTML
	// <div class="form-container" >
	// 	<form action="" id="form" class="form-form">
	// 		<div class="form-container__form">
	// 			<input type="name" placeholder="Your Name" class="input _req">
	// 			<input type="email" placeholder="E-Mail" class="input _req _email">
	// 			<input type="tel" placeholder="Your Phone" class="input" required>
	// 			<input type="text" placeholder="Message" class="input" required>
	//			</div>
	//		</form>
	// </div>