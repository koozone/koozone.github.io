define([
	'jquery',
], function($) {
	var kz;

	return {
		init: function(kzMc) {
			kz = kzMc;

			$.fn.extend({
				htmlAll: function() {
					var target_mc = $(this).clone();
					var return_mc = target_mc.wrap('<div/>').parent().html();

					return return_mc;
				},

				getLibrary: function(selectorStr) {
					var sample_mc = $(this).find('library');
					var return_mc = sample_mc.children(selectorStr + ':first');
					if (!return_mc.length) return_mc = sample_mc.children('default');
				
					return return_mc.clone();
				},

				setTemplate: function(paramObj) {
					$(this).each(function(index, element) {
						var data_obj = $.extend(($(element).prop('tempData') || {}), paramObj);
						data_obj['originHTML'] = data_obj['originHTML'] || $(element).prop('innerHTML') || '';
	
						var replace_str = replaceFunc(data_obj['originHTML'], data_obj);
	
						// 내용 변경
						$(element).html(replace_str).prop('tempData', data_obj);
					});

					return $(this);


					function replaceFunc(targetStr, valueObj) {
						var return_str = targetStr;

						for (var key in valueObj) {
							var pattern_reg = new RegExp('_' + key + '_', 'g');

							return_str = return_str.replace(pattern_reg, valueObj[key]);
						}
						return return_str;
					}
				},

				setAnimate: function(paramObj, optionObj) {
					optionObj = optionObj || {};

					var target_mc = $(this);
					var easing_str = optionObj['easing'] || 'swing';
					var duration_num = optionObj['duration'] || 0;
					var data_obj = $.extend((target_mc.prop('tempData') || {}), paramObj);

					var return_mc = target_mc.stop().animate(paramObj, {
						easing: easing_str,
						duration: duration_num,
						step: optionObj['step'],
						complete: optionObj['complete'],
					});

					return_mc.prop('tempData', data_obj);

					return return_mc;
				},
			});
		}
	}
});