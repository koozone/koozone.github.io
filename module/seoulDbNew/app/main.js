define([
	'module/seoulDbNew/app/data',
	'module/seoulDbNew/app/core',
], function(data, core) {
	var kz;

	return class {
		#data_obj;
		#core_obj;
		#value_obj = {};
		#default_obj = {
			// option: {
			// 	type: 'number',
			// 	duration: 500,
			// 	easing: 'swing',
			// 	value: 0,
			// },
		};

		constructor(ns) {
			this.#value_obj = $.extend(this.valueData, {
				ns: ns,
				// view: $(html).setTemplate({ns: ns}),
			});
		}

		init(kzMc, valueObj = {}) {
			kz = kzMc;
			this.#data_obj = data;
			this.#core_obj = core;

			this.data.init(kz);
			this.core.init(kz, this.data);
		}

		get valueData() {
			return this.#value_obj;
		}
		get data() {
			return this.#data_obj;
		}
		get core() {
			return this.#core_obj;
		}

		loadCategoryList() {
			var data_obj = this.data;

			return new Promise(function (resolve, reject) {
				resolve(data_obj.categoryList);
			});
		}
	
		loadPopularList() {
			var data_obj = this.data;

			return new Promise(function (resolve, reject) {
				resolve(data_obj.popularList);
			});
		}
	
		loadServiceList(typeStr, codeStr) {
			var core_obj = this.core;

			return new Promise(function (resolve, reject) {
				resolve(core_obj.getServiceList(typeStr, codeStr));
			});
		}
	
		loadDetailList(sendObj) {
			return new Promise(function (resolve, reject) {
				const send_str = Object.values(sendObj).map(element => element ? element : ' ').join('/');
	
				$.ajax({
					method: 'GET',
					url: `${encodeURI(send_str)}`,
					data: sendObj,
	
					beforeSend : function() {
						
					},
	
					success: function (resultObj) {
						resolve(resultObj);
					},
	
					error: function () {
						reject(Error("실패!!"));
					},
				});
			});
		}

		loadKoreaList(sendObj) {
			return new Promise(function (resolve, reject) {
				const send_str = Object.values(sendObj).map(element => element ? element : ' ').join('/');

				const send_obj = {
					serviceKey: 'qw05m%2B7UYOhznr9HvHViWlahG8N7YCJnzY%2BuwSZueDRnjdW9g5rqpXjQ0S3vFki2K%2F3dZTczE07cwixOVpZH4A%3D%3D',
					s_page: 0,
					s_list: 1,
					type: 'json',
					// instt_nm: encodeURIComponent('부산광역시중구청'),
				}
console.log(send_obj);
				// sendObj = {
				// 	serviceKey: 'qw05m%2B7UYOhznr9HvHViWlahG8N7YCJnzY%2BuwSZueDRnjdW9g5rqpXjQ0S3vFki2K%2F3dZTczE07cwixOVpZH4A%3D%3D',
				// 	s_page: 0,
				// 	s_list: 1,
				// 	type: 'json',
				// 	instt_nm: '부산광역시중구청',
				// };

				// $.ajax({
				// 	post: 'get',
				// 	url: 'http://api.data.go.kr/openapi/tn_pubr_prkplce_info_api',
				// 	data: data,
				// 	dataType: 'jsonp',
				// 	success: function(data){
				// 		 console.log(data);
				// 	}
				// });
				$.ajax({
					post: 'get',
					// url: 'http://api.data.go.kr/openapi/tn_pubr_prkplce_info_api?serviceKey=qw05m%2B7UYOhznr9HvHViWlahG8N7YCJnzY%2BuwSZueDRnjdW9g5rqpXjQ0S3vFki2K%2F3dZTczE07cwixOVpZH4A%3D%3D&pageNo=0&numOfRows=100&type=xml&prkplceNm=고니샘',
					url: 'http://api.data.go.kr/openapi/tn_pubr_prkplce_info_api',
					data: send_obj,
					dataType: 'jsonp',
	
					beforeSend : function() {
						
					},
	
					success: function (resultObj) {
debugger
						resolve(resultObj);
					},
	
					error: function (request, status, error){
						alert("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
						reject(Error("실패!!"));
					},
				});
			});
		}

		// #makeClock = (typeStr) => {

		// }
	};
});