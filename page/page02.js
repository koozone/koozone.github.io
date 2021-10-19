define([
	
], () => {
	let kz;

	return {
		init: (kzMc) => {
			kz = kzMc;
		},

		on: () => {
			console.log('on page02');

			init();
		},
	}

	function init() {
		// if (kz.data.clientData['parkCheck']) return;

		makeDetail();

		kz.element.elValue('park-button', kz.data.clientData['parkCheck']);
	}

	function makeDetail(resultObj) {
		clearDetail();

		let list_mc = $('<div class="list park-list" data-style="list-search"></div>');
		// list_mc.addClass('park-list');
		// list_mc.css({height: 'max-content', maxHeight: '100%'});

		const row_arr = kz.data.clientData['parkList'];
		if (!row_arr) return;

		row_arr.forEach(function(element, index) {
			list_mc.append(
				$(`
					<label data-style="button-5">
						<input type="radio" name="park-button" value="${index}">
						<i class="bx bx-message-square off"></i>
						<i class="bx bxs-message-square-dots on"></i>
						<span>
							<div>
								${element['PARKING_NAME']}
							</div>
							<div style="font-size: 0.8rem;">
								주소: ${element['ADDR']}
							</div>
							<div style="text-align: right;">
								이용요금: ${element['RATES']}원 (${element['TIME_RATE']}분)
							</div>
						</span>
					</label>
				`)
				.on('click', function(event) {
					
				})
			);
		});

		$('.list-group').append(list_mc);

		$('[name=park-button]').on('changeEl', (event) => {
			const scrollTop_num = $('.park-list').scrollTop();
			const scrollHeight_num = $('.park-list').height();
			const itemTop_num = kz.element.elTarget('park-button')[0].offset().top;
			const itemHeight_num = kz.element.elTarget('park-button')[0].height();

			// 안보이는 영역에 있으면
			if (itemTop_num < 0 || (itemTop_num - itemHeight_num) > scrollHeight_num) {
				$('.park-list').animate({
					scrollTop: scrollTop_num + (itemTop_num - itemHeight_num),
				}, 0);
			}
		});
	}
	function clearDetail() {
		$('.list-group').empty();
	}
});