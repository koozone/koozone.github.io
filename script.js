requirejs.config({
	baseUrl: '../../vendor',
	paths: {
		jquery: 'jquery/3.6.0/jquery.min',
		jqueryUi: 'jquery-ui/1.11.4/jquery-ui.min',
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
	'minor/frameWork/data',
	'minor/frameWork/core',
	'minor/element/app/main',
	'module/seoulDbNew/app/main',
	'module/kakaoMapNew/app/main',
], function($, kzMc, data, core, element, seoulDb, kakaoMap) {
	kz = kzMc;
	kz.data = data;
	kz.core = core;
	kz.element = element.init(kz);
	kz.seoulDb = new seoulDb();
	kz.kakaoMap = kakaoMap;

	kz.init(kz);
	kz.data.init(kz);
	kz.core.init(kz);
	kz.seoulDb.init(kz);
	// kz.kakaoMap.init(kz);




	$('[name=prev-button').on('click', (event) => {
		kz.core.prevPage();
	});
	$('[name=next-button').on('click', (event) => {
		if (kz.data.pageSave.now == 'page02') {
			kz.data.clientData['parkCheck'] = kz.element.elValue('park-button');
		}

		kz.core.nextPage();

		kz.core.nextPage();
	});

	kz.core.showPage('page01');
});