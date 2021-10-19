define([
	'text!minor/element/app/main.html',
], function (html) {
	var kz;

	return {
		init: function(kzMc, valueObj = {}) {
			kz = kzMc;

			$('body').append($(html));

			document.querySelector('form').addEventListener('change', (event) => {
				const name_str = event.target.name;
				if (!name_str) return;
				
				// combobox 입력 내용 제어
				$(`[name="${name_str}-combo"]`).each(function(index, element) {
					// 선택된 input 객체
					const element_arr = kz.element.elTarget(name_str) || [];
					let text_str = '';
		
					if (element_arr.length) {
						// 선택된 input 객체의 버튼 내용
						text_str = element_arr[0].children('span').text();
					}

					// combobox 입력 내용 갱신
					$(element).val(text_str);
				});

				// 같은 name 을 사용하는 객체들
				$(`[name="${name_str}"]`).each(function(index, element) {
					// 체크 상태 갱신
					$(element).closest('label').attr('checked', $(element).is(':checked'));
				});
				
				// 같은 name 을 사용하는 객체중 첫번째 객체에 이벤트 발생
				document.querySelector(`[name="${name_str}"]`).dispatchEvent(new Event('changeEl'));
			});

			document.querySelector('form').addEventListener('focus', (event) => {
				// 포커스 상태 적용
				$(event.target).closest('label').attr('focus', true);
			}, true);

			document.querySelector('form').addEventListener('blur', (event) => {
				setTimeout(() => {
					// 포커스 상태 해제
					$(event.target).closest('label').removeAttr('focus');
				}, 10);		// combobox 운영 방식으로 delay 적용
			}, true);

			// document.querySelector('form').addEventListener('keydown', (event) => {
			// 	if (event.code === 'Enter') {
			// 		event.preventDefault();
			// 	};
			// }, true);


			return this;
		},

		elValue: elValue,
		// elInput: elInput,
		elTarget: elTarget,
	}


	function elValue(nameStr, valueObj, eventBln) {
		const element_arr = document.querySelectorAll(`[name="${nameStr}"]`);
	
		// get
		if (valueObj == undefined) {
			let return_obj = [];
	
			element_arr.forEach(element => {
				if (['radio', 'checkbox'].includes(element.type)) {
					if (element.checked) {
						return_obj.push(element.value);
					}
				}
				else {
					return_obj = element.value;
				}
			});
	
			return return_obj;
		}
		// set
		else {
			valueObj = (valueObj) ? ((Array.isArray(valueObj)) ? valueObj : [valueObj]) : [];
			let result_obj;
	
			element_arr.forEach(element => {
				if (['radio', 'checkbox'].includes(element.type)) {
					result_obj = valueObj.includes(element.value);
	
					// 주요 변수값이 변경됐으면
					if (element.checked != result_obj) {
						element.checked = result_obj;
						if (eventBln == undefined) eventBln = true;
					}
				}
				else {
					result_obj = valueObj.join('');
	
					// 주요 변수값이 변경됐으면
					if (element.value != result_obj) {
						element.value = result_obj;
						if (eventBln == undefined) eventBln = true;
					}
				}
			});
	
			// 이벤트 발생 상황이면
			if (eventBln) {
				// bubble 을 사용해 form 객체에 change 에벤트 발생
				element_arr[0].dispatchEvent(new Event('change', {bubbles: true}));
			}
		}
	}

	// // 대상 input 반환 (radio, checkbox 선택된 아이템)
	// function elInput(nameStr) {
	// 	const element_arr = document.querySelectorAll(`[name="${nameStr}"]`);
	// 	let return_obj = [];

	// 	element_arr.forEach(element => {
	// 		if (['radio', 'checkbox'].includes(element.type)) {
	// 			if (element.checked) {
	// 				return_obj.push(element);
	// 			}
	// 		}
	// 		else {
	// 			return_obj = element;
	// 		}
	// 	});

	// 	return return_obj;
	// }

	// 대상 element 반환 (radio, checkbox 선택된 아이템)
	function elTarget(nameStr) {
		const element_arr = document.querySelectorAll(`[name="${nameStr}"]`);
		let return_obj = [];

		element_arr.forEach(element => {
			if (['radio', 'checkbox'].includes(element.type)) {
				if (element.checked) {
					return_obj.push($(element).parent());
				}
			}
			else {
				return_obj = $(element).parent();
			}
		});

		return return_obj;
	}
});