define([
	
], () => {
	let kz;
	let list_arr = [];

	return {
		init: (kzMc) => {
			kz = kzMc;
		},

		on: () => {
			console.log('on page01');

			$('[name=search-button').on('click', (event) => {
				search();
			});
			$('[name=search-field]').on('keydown', (event) => {
				if (event.which == 13) {
					search();
				};
			});
		},
	}




	function search() {
		const search_str = kz.element.elValue('search-field');
		if (!search_str) return;
		
		if (search_str != kz.data.clientData['keyword']) {
			kz.data.clientData['keyword'] = search_str;
console.log(search_str);
			const name_str = 'GetParkInfo';
			const serviceParam_obj = kz.seoulDb.core.getServiceParam(name_str);
			const serviceOption_obj = kz.seoulDb.core.getServiceOption(name_str);
			// 요청인자
			const send_obj = $.extend(
				serviceParam_obj,
				serviceOption_obj
			);

			// 검색어
			send_obj['ADDR'] = search_str;
			send_obj['START_INDEX'] = 1;
			send_obj['END_INDEX'] = 1000;

			list_arr = [];

			load(send_obj, (listArr) => {
console.log(listArr);
				// 리스트 저장
				kz.data.clientData['parkList'] = listArr;
				kz.core.nextPage();
			})
		}
		else {
			kz.core.nextPage();
		}
	}

	function load(sendObj, callbackFunc) {
		return kz.seoulDb.loadDetailList(sendObj)
		.then(function (result) {
			const name_str = sendObj['SERVICE'];
			
			// 서버 데이터 저장
			kz.data.serverData[name_str] = result;

			list_arr = list_arr.concat(result[name_str]['row']);

			if (list_arr.length == result[name_str]['list_total_count']) {
				callbackFunc(list_arr);
			}
			else {
				sendObj['START_INDEX'] += 1000;
				sendObj['END_INDEX'] += 1000;

				return load(sendObj, callbackFunc);
			}
		});
	}




// 	function search() {
// 		const search_str = kz.element.elValue('search-field');

// 		if (search_str) {
// 			// const name_str = 'GetParkInfo';
// 			// const serviceParam_obj = kz.seoulDb.core.getServiceParam(name_str);
// 			// const serviceOption_obj = kz.seoulDb.core.getServiceOption(name_str);
// 			// // 요청인자
// 			// const send_obj = $.extend(
// 			// 	serviceParam_obj,
// 			// 	serviceOption_obj
// 			// );

// 			// // 검색어
// 			// send_obj['ADDR'] = search_str;
// 			// send_obj['START_INDEX'] = 1;
// 			// send_obj['END_INDEX'] = 1000;

// 			let send_obj = {
// 				// serviceKey: 'qw05m%2B7UYOhznr9HvHViWlahG8N7YCJnzY%2BuwSZueDRnjdW9g5rqpXjQ0S3vFki2K%2F3dZTczE07cwixOVpZH4A%3D%3D',
// 				// s_page: 0,
// 				// s_list: 1,
// 				// type: 'json',
// 				// instt_nm: encodeURI('부산광역시중구청'),
// 			};

// 			list_arr = [];

// 			load(send_obj, (listArr) => {
// 				kz.data.serverData[name_str] = listArr;
// 				kz.core.nextPage();
// 			})
// 		}
// 	}

// 	function load(sendObj, callbackFunc) {
// 		return kz.seoulDb.loadKoreaList(sendObj)
// 		.then(function (result) {
// debugger
// 			list_arr = list_arr.concat(result['GetParkInfo']['row']);

// 			// if (list_arr.length == result['GetParkInfo']['list_total_count']) {
// 				callbackFunc(list_arr);
// 			// }
// 			// else {
// 			// 	sendObj['START_INDEX'] += 1000;
// 			// 	sendObj['END_INDEX'] += 1000;

// 			// 	return load(sendObj, callbackFunc);
// 			// }
// 		});
// 	}
});