define([
	
], function () {
	var kz;
	var data;

	return {
		init: function(kzMc, dataObj) {
			kz = kzMc;
			data = dataObj;
		},

		getServiceList: function(typeStr, codeStr) {
			const service_arr = JSON.parse(JSON.stringify(data.serviceList));
			const return_arr = service_arr.filter(element => element[typeStr] === codeStr);

			return return_arr;
		},

		getServiceParam: function(serviceNameStr) {
			const service_arr = JSON.parse(JSON.stringify(data.serviceList));
			const default_obj = service_arr.find(element => element['name'] === 'default');
			const service_obj = service_arr.find(element => element['name'] === serviceNameStr);
			const return_obj = service_obj['param'] || {};
			return_obj['SERVICE'] = serviceNameStr;

			return $.extend(default_obj['param'], return_obj);
		},
		getServiceOption: function(serviceNameStr) {
			const service_arr = JSON.parse(JSON.stringify(data.serviceList));
			const default_obj = service_arr.find(element => element['name'] === 'default');
			const service_obj = service_arr.find(element => element['name'] === serviceNameStr);
			const return_obj = service_obj['option'] || {};

			return $.extend(default_obj['option'], return_obj);
		},
	}
});