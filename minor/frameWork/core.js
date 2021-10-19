define([
	
], () => {
	let kz;

	return {
		init: (kzMc) => {
			kz = kzMc;
		},

		// 페이지 인덱스
		getPageIndex: (pageStr) => {
			pageStr = pageStr || kz.data.pageSave.now;

			const return_num = kz.data.pageList.findIndex(item => item.name == pageStr);

			return return_num;
		},

		nextPage: () => {
			jumpPage(1);
		},

		prevPage: () => {
			jumpPage(-1);
		},

		showPage: (pageStr) => {
			let pageSave_obj = kz.data.pageSave.load.find(item => item.name == pageStr);

			// 저장 정보가 있으면
			if (pageSave_obj) {
				makePage(pageSave_obj);
			}
			else {
				kz.core.loadPage(pageStr)
				.then((pageObj) => {
					const page_mc = $(`
						<div class="page-group">
							${pageObj.html}
						</div>
					`)
					// 문자 치환
					.setTemplate({
						ns: pageStr
					});

					pageSave_obj = {
						name: pageStr,
						obj: pageObj,
						mc: page_mc,
					};

					kz.data.pageSave.load.push(pageSave_obj);

					makePage(pageSave_obj, true);
				})
				.catch((error) => { 
					console.error(error);
				});
			}
		},

		loadPage: (pageStr) => {
			return new Promise((resolve, reject) => {
				requirejs([
					`text!minor/frameWork/page/${pageStr}.html`,
					`minor/frameWork/page/${pageStr}`,
				], (htmlStr, jsObj) => {
					// 초기화
					jsObj.init(kz);
					jsObj.html = htmlStr;

					resolve(jsObj);
				});
			});
		},

		movePage: (directionBln, durationNum = 500) => {
			$('.page-group.now').animate({
				// left: '25%',
				left: '0',
			}, {
				duration: durationNum,
				easing: 'swing',
			});
			
			$('.page-group.old').animate({
				// left: (directionBln) ? '-25%' : '75%',
				left: (directionBln) ? '-100%' : '100%',
			}, {
				duration: durationNum,
				easing: 'swing',
				complete: () => {
					$('.page-group.old').remove();
				},
			});
		},
	}

	function makePage(pageSaveObj, newBln) {
		kz.data.pageSave.old = kz.data.pageSave.now;
		kz.data.pageSave.now = pageSaveObj.name;

		const oldIndex_num = kz.core.getPageIndex(kz.data.pageSave.old);
		const nowIndex_num = kz.core.getPageIndex();
		const direction_bln = (nowIndex_num >= oldIndex_num);
		const duration_num = ($('.page-group').length) ? 500 : 0;

		// 기존 page를 old로
		$('.page-group').removeClass('now').addClass('old');
		// 새로운 page를 now로
		pageSaveObj.mc.removeClass('old').addClass('now')
		.css({
			// left: (direction_bln) ? '75%' : '-25%',
			left: (direction_bln) ? '100%' : '-100%',
		});

		$('.page-container').append(pageSaveObj.mc);
		// 처음 사용이면
		// if (newBln) pageSaveObj.obj.on();
		pageSaveObj.obj.on();

		kz.core.movePage(direction_bln, duration_num);
	}

	function jumpPage(addIndexNum) {
		const index_num = kz.core.getPageIndex();
		const page_obj = kz.data.pageList[index_num + addIndexNum];

		if (page_obj) {
			kz.core.showPage(page_obj.name);
		}
	}
});