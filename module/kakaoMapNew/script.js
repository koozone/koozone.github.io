requirejs.config({
	baseUrl: '../../vendor',
	paths: {
		jquery: 'jquery/3.6.0/jquery.min',
		text: 'require/plugins/text',
		common: '../common',
		module: '../module',
		minor: '../minor',
	},
});

var kz;

requirejs([
	'jquery',
	'common/kz',
], function($, kzMc) {
	kz = kzMc;

	kz.init(kz);

	requirejs([
		'module/kakaoMap/app/main',
		'minor/component/app/main',
	], function(KakaoMap, component) {
		kz.kakaoMap = new KakaoMap($('.frame.content'));
		kz.component = component;

		kz.kakaoMap.init(kz);
		kz.component.init({
			kz: kz,
			parent: '.frame.control',
		});


		// makePage();

		// function makePage() {
		// 	clearPage();

		// 	$('.section.control').append(
		// 		$(`
		// 			<div class="item button-category">
		// 				좌표 이동(goCoordMap)
		// 			</div>
		// 		`)
		// 		.on('click', function(event) {
		// 			kz.kakaoMap.goCoordMap('37.60972', '127.0306');
		// 		})
		// 	);

		// 	$('.section.control').append(
		// 		$(`
		// 			<div class="item button-category">
		// 				좌표 이동(goCoordMap)2
		// 			</div>
		// 		`)
		// 		.on('click', function(event) {
		// 			kz.kakaoMap.goCoordMap('37.49908', '127.0373');
		// 		})
		// 	);

		// 	$('.section.control').append(
		// 		$(`
		// 			<div class="item button-category">
		// 				주소 이동(goAddressMap)
		// 			</div>
		// 		`)
		// 		.on('click', function(event) {
		// 			kz.kakaoMap.goAddressMap('서울 강서구 화곡동 1120-13');
		// 		})
		// 	);

		// 	var option_obj = {
		// 		address: '',
		// 		keyword: '',
		// 	};

		// 	setSendFunc(option_obj);

		// 	$('.section.control').append(
		// 		$(`
		// 			<div class="item button-submit">
		// 				submit
		// 			</div>
		// 		`)
		// 		.on('click', function(event) {
		// 			option_obj = getSendFunc(option_obj);

		// 			if (option_obj['address']) {
		// 				kz.kakaoMap.goAddressMap(option_obj['address']);
		// 			}
		// 			else if (option_obj['keyword']) {
		// 				kz.kakaoMap.goKeywordMap(option_obj['keyword']);
		// 			}
		// 		})
		// 	);

		// 	// 불러오기
		// 	function setSendFunc(dataObj) {
		// 		const key_arr = Object.keys(dataObj);

		// 		key_arr.forEach(function(element, index) {
		// 			$('.section.control').append(
		// 				$(`
		// 					<div class="item area-send">
		// 						<label for="${element}">${element}:</label>
		// 					</div>
		// 				`)
		// 				.append(
		// 					$(`
		// 						<input type="text" id="${element}" minlength="4" maxlength="8" size="10" required>
		// 					`)
		// 					.val(`${dataObj[element]}`)
		// 				)
		// 			);
		// 		});
		// 	}
		// 	// 저장하기
		// 	function getSendFunc(dataObj) {
		// 		const key_arr = Object.keys(dataObj);
		// 		const return_obj = dataObj;

		// 		key_arr.forEach(function(element, index) {
		// 			return_obj[element] = $('.section.control').find(`#${element}`).val();
		// 		});

		// 		return return_obj;
		// 	}
		// }
		// function clearPage() {
		// 	$('.section.control').empty();
		// }









		let inteval_num;

		let value_obj = {
			mapType: 'roadmap',
			level: 2,
		};

		const self = {
			init: (value) => {

			},

			on: (value) => {
				value_obj = $.extend(value_obj, value || {});

				$('input[name="goPosition"]').on('click', self.handler.goPosition);
				$('input[name="mapType"]').on('change', self.handler.changeMapType);
				$('input[name="mapType2"]').on('change', self.handler.changeMapType2);
				$('input[name="zoomLevel"]').on('change', self.handler.changeLevel);
				$('input[name="zoomIn"]').on('click', self.handler.clickZoomIn);
				$('input[name="zoomOut"]').on('click', self.handler.clickZoomOut);
				$('input[name="zoomRange"]').on('change', self.handler.changeLevel);
				$('input[name="searchAddress"]').on('click', self.handler.clickSearchAddress);
				$('input[name="searchKeyword"]').on('click', self.handler.clickSearchKeyword);
				$(document).on('keydown', self.handler.keydown);

kakao.maps.event.addListener(kz.kakaoMap.map, 'maptypeid_changed', function() {
	update();
});
kakao.maps.event.addListener(kz.kakaoMap.map, 'zoom_changed', function() {
	update();
});
kakao.maps.event.addListener(kz.kakaoMap.map, 'center_changed', function() {
	update();
});
kakao.maps.event.addListener(kz.kakaoMap.map, 'tilesloaded', function() {
	// update();
});
kakao.maps.event.addListener(kz.kakaoMap.map, 'dragend', function() {
	self.method.setMove(0, 0);

	update();
});
kakao.maps.event.addListener(kz.kakaoMap.map, 'click', function(mouseEvent) {
	// 클릭한 위도, 경도 정보를 가져옵니다
	var latlng = mouseEvent.latLng;

	self.method.setPosition(latlng['Ma'], latlng['La']);
});
				self.method.setMapType(value_obj['mapType']);
				self.method.setLevel(value_obj['level']);

				update();
			},

			off: () => {

			},

			handler: {
				keydown: (event) => {
					let addYPos_num = 0;
					let addXPos_num = 0;
					const add_num = 0.0001 * Math.pow(kz.kakaoMap.map.getLevel(), 2);
					const accel_num = (event.shiftKey) ? 5 : 1;

					switch (event.which) {
						case 38:	// UP
						case 87:	// W
							addYPos_num = add_num * accel_num;
							break;
						case 40:	// DOWN
						case 83:	// S
							addYPos_num = -add_num * accel_num;
							break;
						case 37:	// LEFT
						case 65:	// A
							addXPos_num = -add_num * accel_num;
							break;
						case 39:	// RIGHT
						case 68:	// D
							addXPos_num = add_num * accel_num;
							break;
						case 49:	// 1
							self.method.setMapType2(toggleMapType2('district'));
							break;
						case 50:	// 2
							self.method.setMapType2(toggleMapType2('terrain'));
							break;
						case 51:	// 3
							self.method.setMapType2(toggleMapType2('traffic'));
							break;
						case 52:	// 4
							self.method.setMapType2(toggleMapType2('bicycle'));
							break;
						case 57:	// 9
							self.method.setMapType('roadmap');
							break;
						case 48:	// 0
							self.method.setMapType('airview');
							break;
						case 187:	// +
							self.method.setZoomIn();
							break;
						case 189:	// -
							self.method.setZoomOut();
							break;
						default:
					}

					if (addYPos_num || addXPos_num) {
						self.method.setMove(addYPos_num, addXPos_num);
					}
				},
				goPosition: (event) => {
					const yPos_num = kz.component.getA('yPos');
					const xPos_num = kz.component.getA('xPos');

					self.method.setPosition(yPos_num, xPos_num);
				},
				changeMapType: (event) => {
					const type_str = $(event.currentTarget).val();

					self.method.setMapType(type_str);
				},
				changeMapType2: (event) => {
					const mapType2_arr = kz.component.getA('mapType2');

					self.method.setMapType2(mapType2_arr);
				},
				changeLevel: (event) => {
					const level_str = $(event.currentTarget).val();

					self.method.setLevel(level_str);
				},
				clickZoomIn: (event) => {
					self.method.setZoomIn();
				},
				clickZoomOut: (event) => {
					self.method.setZoomOut();
				},
				clickSearchAddress: (event) => {
					const address_str = kz.component.getA('address');

					self.method.setSearchAddress(address_str);
				},
				clickSearchKeyword: (event) => {
					const keyword_str = kz.component.getA('keyword');

					self.method.setSearchKeyword(keyword_str);
				},
			},

			method: {
				setMapType: (typeStr) => {
					const type_str = typeStr;

					kz.kakaoMap.setMapType(type_str);
					update();
				},
				setMapType2: (typeArr) => {
					kz.kakaoMap.setMapType2(typeArr);
					update();
				},
				setMove: (yPosNum, xPosNum) => {
					// {La: 126.57066121198349, Ma: 33.450700761312206}
					const position_obj = kz.kakaoMap.map.getCenter();

					self.method.setPosition(position_obj['Ma'] + yPosNum, position_obj['La'] + xPosNum);
				},
				setPosition: (yPosNum, xPosNum) => {
					kz.kakaoMap.goCoordMap(yPosNum, xPosNum);
				},
				setLevel: (levelStr) => {
					const level_str = levelStr;

					kz.kakaoMap.map.setLevel(level_str);
					update();
				},
				setZoomIn: () => {
					kz.kakaoMap.zoomIn();
					update();
				},
				setZoomOut: () => {
					kz.kakaoMap.zoomOut();
					update();
				},
				setSearchAddress: (addressStr) => {
					const address_str = addressStr;

					kz.kakaoMap.goAddressMap(address_str);
				},
				setSearchKeyword: (keywordStr) => {
					const keyword_str = keywordStr;

					kz.kakaoMap.goKeywordMap(keyword_str);
				},
				getAddressName: (xPosNum, yPosNum, callbackFunc) => {
					kz.kakaoMap.getAddressName(xPosNum, yPosNum, callbackFunc);
				},
			}
		}

		// self.on();
		self.on({
			mapType: 'skyview',
			level: 3,
		});

		return self;



		function update() {
			// {La: 126.57066121198349, Ma: 33.450700761312206}
			const position_obj = kz.kakaoMap.map.getCenter();
			const type_str = kz.kakaoMap.getMapType();
			const type2_arr = kz.kakaoMap.getMapType2();
			const level_str = kz.kakaoMap.map.getLevel();

			kz.component.setA('yPos', position_obj['Ma'], false);
			kz.component.setA('xPos', position_obj['La'], false);
			kz.component.setA('mapType', [type_str], false);
			kz.component.setA('mapType2', type2_arr, false);
			kz.component.setA('zoomLevel', level_str, false);
			kz.component.setA('zoomRange', level_str, false);

			if (inteval_num) clearInterval(inteval_num);

			inteval_num = setInterval(() => {
				self.method.getAddressName(position_obj['Ma'], position_obj['La'], (result) => {
					// console.log('지역 명칭 : ' + result[0].address_name);
					// console.log('행정구역 코드 : ' + result[0].code);

					kz.component.setA('addressName', result[0].address_name, false);
				});
			}, 100);
		};

		function toggleMapType2(typeStr) {
			let return_arr = kz.kakaoMap.getMapType2() || [];
			let index_num = return_arr.indexOf(typeStr);

			if (index_num > -1) {
				return_arr.splice(index_num, 1);
			}
			else {
				return_arr.push(typeStr);
			}
			return return_arr;
		}
	});
});