define([
	
], function() {
	var kz;

	return {
		init: function(kzMc) {
			kz = kzMc;
		},

		// getLibrary: function(selectorStr) {
		// 	var sample_mc = $('library');
		// 	var return_mc = sample_mc.children(selectorStr + ':first');
		// 	if (!return_mc.length) return_mc = sample_mc.children('default');
		
		// 	return return_mc.clone();
		// },
		
		getDate: function(targetDate) {
			targetDate = targetDate || new Date();
		
			var return_obj = {};
		
			return_obj['time'] = targetDate.getTime();
			return_obj['year'] = targetDate.getFullYear();
			return_obj['month'] = targetDate.getMonth();
			return_obj['date'] = targetDate.getDate();
			return_obj['day'] = targetDate.getDay();
			return_obj['hour'] = targetDate.getHours();
			return_obj['minute'] = targetDate.getMinutes();
			return_obj['second'] = targetDate.getSeconds();
			return_obj['millisecond'] = targetDate.getMilliseconds();
		
			return_obj['YY'] = String(return_obj['year']).padStart(2, '0');
			return_obj['MM'] = String(return_obj['month'] + 1).padStart(2, '0');
			return_obj['DD'] = String(return_obj['date']).padStart(2, '0');
			return_obj['hh'] = String(return_obj['hour']).padStart(2, '0');
			return_obj['mm'] = String(return_obj['minute']).padStart(2, '0');
			return_obj['ss'] = String(return_obj['second']).padStart(2, '0');
			return_obj['mmm'] = String(return_obj['millisecond']).padStart(3, '0');
		
			return_obj['MM_ko'] = ['일', '이', '삼', '사', '오', '유', '칠', '팔', '구', '시', '십일', '십이'][return_obj['month']];
			return_obj['MM_ch'] = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'][return_obj['month']];
			return_obj['MM_us'] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][return_obj['month']];
			return_obj['dd_ko'] = ['일', '월', '화', '수', '목', '금', '토'][return_obj['day']];
			return_obj['dd_ch'] = ['日', '月', '火', '水', '木', '金', '土'][return_obj['day']];
			return_obj['dd_us'] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][return_obj['day']];
			return_obj['hh_12'] = String(return_obj['hour'] % 12).padStart(2, '0');
			return_obj['ap_ko'] = (return_obj['hour'] < 12) ? '오전' : '오후';
			return_obj['ap_us'] = (return_obj['hour'] < 12) ? 'AM' : 'PM';
		
			return return_obj;
		},
		
		// transDigit: function(targetNum, digitNum, simbolStr) {
		// 	targetNum = targetNum || 0;
		// 	digitNum = digitNum || 2;
		// 	simbolStr = simbolStr || '0';
		
		// 	var simbol_arr = Array.from({length: digitNum}, function() {return simbolStr});
		// 	var return_str = (simbol_arr.join('') + targetNum).slice(-digitNum);
		
		// 	return return_str;
		// },

		htmlToText: function(htmlStr, levelNum) {
			let return_str = htmlStr;
			return_str = return_str.replace(/</gi, '&lt;');
			return_str = return_str.replace(/>/gi, '&gt;');
			// return_str = return_str.replace(/ /gi, '&nbsp;');
			// return_str = return_str.replace(/\t/gi, '&nbsp;&nbsp;&nbsp;&nbsp;');
			// return_str = return_str.replace(/\r|\n|\r\n/gi, '<br>');

			return return_str;
		},

		xmlToString: function(dataXml) {
			var return_str;
			//IE
			if (window.ActiveXObject){
				return_str = dataXml.xml;
			}
			// code for Mozilla, Firefox, Opera, etc.
			else{
				return_str = (new XMLSerializer()).serializeToString(dataXml);
			}

			return return_str;
		},
	}
});