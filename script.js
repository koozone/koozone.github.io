requirejs.config({
	baseUrl: '../../vendor',
	paths: {
		jquery: 'jquery/3.6.0/jquery.min',
		jqueryUi: 'jquery-ui/1.11.4/jquery-ui.min',
		text: 'require/plugins/text',
		common: '../common',
		module: '../module',
	},
});

var kz;

requirejs([
	'common/kooz',
], function(kzMc) {
	kz = kzMc;

	kz.init(kz);

	const toggle_mc = document.querySelector('.navi-toggle');
	const menu_mc = document.querySelector('.navi-menu');
	const icon_mc = document.querySelector('.navi-icon');
	
	toggle_mc.addEventListener('click', () => {
		menu_mc.classList.toggle('active');
		icon_mc.classList.toggle('active');
	});
});