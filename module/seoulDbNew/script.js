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

requirejs([
	'jquery',
	'common/kz',
], function($, kz) {
	kz.init(kz);

	requirejs([
		'module/seoulDbNew/app/main',
		'minor/element/app/main',
	], function(seoulDb, element) {
		kz.seoulDb = new seoulDb();
		kz.element = element;
	
		kz.seoulDb.init(kz);
		kz.element.init(kz);






		let value_obj = {
			type: 'popular',
		};

		const self = {
			init: (value) => {

			},

			on: (value) => {
				value_obj = $.extend(value_obj, value || {});

				loadCategory();
			},

			off: () => {
				
			},

			handler: {

			},

			method: {

			}
		}

		// self.on();
		self.on({
			type: 'popular',
		});

		return self;
	});

	// let categoryCode_str;
	// let popularCode_str;
	let serviceParam_obj;
	let serviceOption_obj;
	let send_obj;

	function loadCategory() {
		kz.seoulDb.loadPopularList()
		// kz.seoulDb.loadCategoryList()
		.then(function (result) {
			makeCategory(result);
		})
		.catch(function (error) { 
			console.error(error);
		});
	}
	function makeCategory(listArr) {
		clearCategory();

		let list_mc = $('<div class="list" data-style="list-1"></div>');
		list_mc.addClass('list-category');
		list_mc.css({height: 'max-content', maxHeight: '100%'});

		listArr.forEach(function(element, index) {
			list_mc.append(
				$(`
					<label data-style="button-5">
						<input type="radio" name="list-category" value="${index}">
						<i class="bx bx-message-square off"></i>
						<i class="bx bxs-message-square-dots on"></i>
						<span>${element['code']}. ${element['disc']}</span>
					</label>
				`)
				.on('click', function(event) {
					// console.log(kz.element.getA('mainList'));
					// const select_num = kz.element.getA('mainList')[0];

					// $('.category-list').children()[select_num].data();

					// $('.section.category').children().removeClass('selected');
					// $('.section.popular').children().removeClass('selected');
					// $(this).addClass('selected');

					// categoryCode_str = element['code'];
					// popularCode_str = '';

					// clearSend();
					// clearDetail();
					// makeService();
					clearDetail();
					loadService(element['code']);
				})
			);
		});

		$('.frame.control section').append(list_mc);

		// kz.element.refreshForm();
	}
	function clearCategory() {
		$('.frame.control section').find('.list-category').remove();
	}


	function loadService(code_str) {
		kz.seoulDb.loadServiceList('popular', code_str)
		.then(function (result) {
			makeService(result);
		})
		.catch(function (error) { 
			console.error(error);
		});
	}
	function makeService(listArr) {
		clearService();

		let list_mc = $('<div class="list" data-style="list-1"></div>');
		list_mc.addClass('list-service');
		list_mc.css({height: 'max-content', maxHeight: '100%'});

		listArr.forEach(function(element, index) {
			list_mc.append(
				$(`
					<label data-style="button-5">
						<input type="radio" name="list-service" value="${index}">
						<i class="bx bx-message-square off"></i>
						<i class="bx bxs-message-square-dots on"></i>
						<span>${element['code']}. ${element['disc']}</span>
					</label>
				`)
				.on('click', function(event) {
					// console.log(kz.element.getA('mainList'));
					// const select_num = kz.element.getA('mainList')[0];

					// $('.category-list').children()[select_num].data();

					// $('.section.category').children().removeClass('selected');
					// $('.section.popular').children().removeClass('selected');
					// $(this).addClass('selected');

					serviceParam_obj = kz.seoulDb.core.getServiceParam(element['name']);
					serviceOption_obj = kz.seoulDb.core.getServiceOption(element['name']);

					loadDetail();
				})
			);
		});

		$('.frame.control section').append(list_mc);
	}
	function clearService() {
		$('.frame.control section').find('.list-service').remove();
	}


	function loadDetail() {
		// 요청인자
		send_obj = $.extend(
			serviceParam_obj,
			serviceOption_obj
		);

		kz.seoulDb.loadDetailList(send_obj)
		.then(function (result) {
			makeDetail(result);
		})
		.catch(function (error) { 
			console.error(error);
		});
	}
	function makeDetail(resultObj) {
		clearDetail();

		let list_mc = $('<div class="list" data-style="list-1"></div>');
		list_mc.addClass('list-detail');
		list_mc.css({height: 'max-content', maxHeight: '100%'});

		// json 형태 요청파일타입이면
		if (send_obj['TYPE'] == 'json') {
			const res_obj = (typeof(resultObj) == 'string') ? JSON.parse(resultObj) : resultObj;
			const row_arr = Object.values(res_obj)[0]['row'];
			if (!row_arr) return;

			// // row 아이템 표기
			// row_arr.forEach(function(element) {
			// 	$('.section.detail').append(
			// 		$(`
			// 			<div class="item area-detail">
			// 				${JSON.stringify(element)}
			// 			</div>
			// 		`)
			// 		.on('click', function(event) {
			// 			$('.section.detail').children().removeClass('selected');
			// 			$(this).addClass('selected');
			// 		})
			// 	);
			// });
			row_arr.forEach(function(element, index) {
				list_mc.append(
					$(`
						<label data-style="button-5">
							<input type="radio" name="list-detail" value="${index}">
							<i class="bx bx-message-square off"></i>
							<i class="bx bxs-message-square-dots on"></i>
							<span>${JSON.stringify(element)}</span>
						</label>
					`)
					.on('click', function(event) {
						
					})
				);
			});
		}
		// xml 형태 요청파일타입이면
		else if (send_obj['TYPE'] == 'xml') {
			const res_mc = (typeof(resultObj) == 'string') ? $(resultObj) : $(kz.util.xmlToString(resultObj));
			const row_mc = res_mc.children('row');
			if (!row_mc) return;

			// // row 아이템 표기
			// row_mc.each(function(index) {
			// 	$('.section.detail').append(
			// 		$(`
			// 			<div class="item area-detail"></div>
			// 		`)
			// 		.text(`
			// 			${$(this).htmlAll()}
			// 		`)
			// 	);
			// });
			row_mc.each(function(index) {
				list_mc.append(
					$(`
						<label data-style="button-5">
							<input type="radio" name="list-detail" value="${index}">
							<i class="bx bx-message-square off"></i>
							<i class="bx bxs-message-square-dots on"></i>
							<span></span>
						</label>
					`)
					.on('click', function(event) {
						
					})
					.find('span').text(`
						${$(this).htmlAll()}
					`)
				);
			});
		}

		$('.frame.control section').append(list_mc);
	}
	function clearDetail() {
		$('.frame.control section').find('.list-detail').remove();
	}
});