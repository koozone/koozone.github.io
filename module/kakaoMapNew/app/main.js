define([
	'text!module/kakaoMapNew/app/main.html',
], function(html) {
	let kz;

	return class {
		#value_obj = {};
		#default_obj = {

		};

		constructor(ns) {
			this.#value_obj = $.extend(this.valueData, {
				ns: ns,
				view: $(html).setTemplate({ns: ns}),
			});
		}

		init(kzMc, valueObj = {}) {
			kz = kzMc;

			// const container_mc = valueObj['target']; //지도를 담을 영역의 DOM 레퍼런스
			const container_mc = this.view.find('.section.map')[0]; //지도를 담을 영역의 DOM 레퍼런스
			// 이동할 위도 경도 위치를 생성합니다
			const position_obj = new kakao.maps.LatLng(33.450701, 126.570667);
		
			//지도 생성 및 객체 리턴
			this.valueData['map'] = new kakao.maps.Map(container_mc, {
				center: position_obj, // 지도의 중심좌표.
				level: 3, // 지도의 레벨(확대, 축소 정도)
				scrollwheel: false, // 마우스 휠, 모바일 터치를 이용한 확대 및 축소 가능 여부
			});
	
			// 좌표 변환 객체
			this.valueData['geocoder'] = new kakao.maps.services.Geocoder();
		
			// 마커 클러스터러를 생성합니다
			this.valueData['clusterer'] = new kakao.maps.MarkerClusterer({
				map: this.map, // 마커들을 클러스터로 관리하고 표시할 지도 객체
				averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정
				minLevel: 10 // 클러스터 할 최소 지도 레벨
			});
		}

		// valueData
		get valueData() {
			return this.#value_obj;
		}

		// view
		get view() {
			return this.valueData['view'];
		}

		// map
		get map() {
			return this.valueData['map'];
		}

		// 해당 좌표로 지도 이동
		goCoordMap(xNum, yNum) {
			// 이동할 위도 경도 위치를 생성합니다
			const position_obj = new kakao.maps.LatLng(Number(xNum), Number(yNum));

			this.goPositionMap(position_obj);
		}

		goPositionMap(positionObj) {
			// 추가된 모든 마커를 삭제한다.
			this.valueData['clusterer'].clear();
	
			// 마커를 생성합니다
			const marker_obj = new kakao.maps.Marker({
				position: positionObj
			});
	
			// 마커가 지도 위에 표시되도록 설정합니다
			this.valueData['clusterer'].addMarker(marker_obj);
			// // 지도 중심을 이동 시킵니다
			// map_mc.setCenter(positionObj);
			// 지도 중심을 부드럽게 이동시킵니다
			this.map.panTo(positionObj);
		}
	};
});