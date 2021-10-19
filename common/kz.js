define([
	'common/module',
	'common/util',
], function(module, util) {
	var kz;
	
	return {
		init: function(kzMc) {
			kz = kzMc;
			kz.module = module;
			kz.util = util;

			kz.module.init(kz);
			kz.util.init(kz);
		},
	}
});