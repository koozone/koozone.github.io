define([
	
], () => {
	let kz;
	let parkItem_obj;

	return {
		init: (kzMc) => {
			kz = kzMc;
		},

		on: () => {
			console.log('on page03');

			init();
		},
	}

	function init() {
		const parkCheck_obj = kz.data.clientData['parkCheck']
		parkItem_obj = kz.data.clientData['parkList'][Number(parkCheck_obj)];
console.log(parkItem_obj);

		makeMap();
		makeDetail();
	}

	function makeMap(resultObj) {
		clearMap();

		const map_mc = new kz.kakaoMap('kakao');

		// map_mc.init(kz, {target: document.querySelector('.map-group')});
		map_mc.init(kz);

		$('.map-group').append(map_mc.view);
		
		map_mc.map.relayout();
		map_mc.goCoordMap(parkItem_obj['LAT'], parkItem_obj['LNG']);
	}
	function clearMap() {
		$('.map-group').empty();
	}

	function makeDetail(resultObj) {
		clearDetail();

		const property_obj = {
			PARKING_NAME: '주차장명',
			ADDR: '주소',
			PARKING_CODE: '주차장코드',
			PARKING_TYPE: '주차장 종류',
			PARKING_TYPE_NM: '주차장 종류명',
			OPERATION_RULE: '운영구분',
			OPERATION_RULE_NM: '운영구분명',
			TEL: '전화번호',
			CAPACITY: '주차 면(주차 가능 차량 수)',
			PAY_YN: '유무료구분',
			PAY_NM: '유무료구분명',
			NIGHT_FREE_OPEN: '야간무료개방여부',
			NIGHT_FREE_OPEN_NM: '야간무료개방여부명',
			WEEKDAY_BEGIN_TIME: '평일 운영 시작시각(HHMM)',
			WEEKDAY_END_TIME: '평일 운영 종료시각(HHMM)',
			WEEKEND_BEGIN_TIME: '주말 운영 시작시각(HHMM)',
			WEEKEND_END_TIME: '주말 운영 종료시각(HHMM)',
			HOLIDAY_BEGIN_TIME: '공휴일 운영 시작시각(HHMM)',
			HOLIDAY_END_TIME: '공휴일 운영 종료시각(HHMM)',
			SYNC_TIME: '최종데이터 동기화 시간',
			SATURDAY_PAY_YN: '토요일 유,무료 구분',
			SATURDAY_PAY_NM: '토요일 유,무료 구분명',
			HOLIDAY_PAY_YN: '공휴일 유,무료 구분',
			HOLIDAY_PAY_NM: '공휴일 유,무료 구분명',
			FULLTIME_MONTHLY: '월 정기권 금액',
			GRP_PARKNM: '노상 주차장 관리그룹번호',
			RATES: '기본 주차 요금',
			TIME_RATE: '기본 주차 시간(분 단위)',
			ADD_RATES: '추가 단위 요금',
			ADD_TIME_RATE: '추가 단위 시간(분 단위)',
			BUS_RATES: '버스 기본 주차 요금',
			BUS_TIME_RATE: '버스 기본 주차 시간(분 단위)',
			BUS_ADD_TIME_RATE: '버스 추가 단위 시간(분 단위)',
			BUS_ADD_RATES: '버스 추가 단위 요금',
			DAY_MAXIMUM: '일 최대 요금',
			LAT: '주차장 위치 좌표 위도',
			LNG: '주차장 위치 좌표 경도',
			ASSIGN_CODE: '배정코드',
			ASSIGN_CODE_NM: '배정코드명',
		};

		const key_arr = Object.keys(property_obj);

		key_arr.forEach(element => {
			$('.detail-group').append(`
				<div>
					${property_obj[element]}: ${parkItem_obj[element]}
				</div>
			`);
		});
	}
	function clearDetail() {
		$('.detail-group').empty();
	}
});