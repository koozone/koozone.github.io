define([
	
], () => {
	var kz;

	return {
		init: (kzMc) => {
			kz = kzMc;
		},

		pageList: [
			{name: 'page01',},
			{name: 'page02',},
			{name: 'page03',},
		],

		pageSave: {
			load: [],
			now: '',
			old: '',
		},

		serverData: {},
		clientData: {
			keyword: '',
		},
	}
});