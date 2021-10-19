define([
	
], function () {
	var kz;

	return {
		init: function(kzMc) {
			kz = kzMc;
		},

		categoryList: [
			{code: '01', disc: '보건 (1737)',},
			{code: '02', disc: '문화/관광 (1571)',},
			{code: '03', disc: '산업/경제 (829)',},
			{code: '04', disc: '환경 (517)',},
			{code: '05', disc: '일반행정 (476)',},
			{code: '06', disc: '교육 (474)',},
			{code: '07', disc: '교통 (335)',},
			{code: '08', disc: '복지 (261)',},
			{code: '09', disc: '인구/가구 (239)',},
			{code: '10', disc: '안전 (198)',},
			{code: '11', disc: '도시관리 (194)',},
			{code: '12', disc: '주택/건설 (155)',},
		],

		popularList: [
			{code: '01', disc: '코로나19',},
			{code: '02', disc: '건설공사정보',},
			{code: '03', disc: '골목상권분석정보',},
			{code: '04', disc: '공공서비스예약정보',},
			{code: '05', disc: '공공자전거이용정보',},
			{code: '06', disc: '공영주차장정보',},
			{code: '07', disc: '교통카드이용정보',},
			{code: '08', disc: '기상관측정보',},
			{code: '09', disc: '기상예보정보',},
			{code: '10', disc: '나눔카지점정보',},
			{code: '11', disc: '모기예보정보',},
			{code: '12', disc: '문화행사정보',},
			{code: '13', disc: '물가정보',},
			{code: '14', disc: '버스운행정보',},
			{code: '15', disc: '서울시물관리정보',},
			{code: '16', disc: '실시간도로소통정보',},
			{code: '17', disc: '장애인콜시스템정보',},
			{code: '18', disc: '지하철 운행정보',},
			{code: '19', disc: '지하철역정보',},
			{code: '20', disc: '부동산',},
		],

		serviceList: [
			{
				code: '',
				category: '',
				popular: '',
				disc: '',
				name: 'default',
				param: {
					// HOST: 'http://openAPI.seoul.go.kr:8088',	// 주소
					HOST: '115.84.165.45',	// 주소
					KEY: '576a6b47416b6f6f37384f554a6459',		// 인증키 (OpenAPI 에서 발급된 인증키)
					TYPE: 'json',								// 요청파일타입 (xml : xml, xml파일 : xmlf, 엑셀파일 : xls, json파일 : json)
					SERVICE: '',								// 서비스명
					START_INDEX: 1,								// 요청시작위치 (정수 입력 (페이징 시작번호 입니다 : 데이터 행 시작번호))
					END_INDEX: 5,								// 요청종료위치 (정수 입력 (페이징 끝번호 입니다 : 데이터 행 끝번호))
				},
				option: {},
			},

			{
				code: '',
				category: '01',
				popular: '01',
				disc: '서울특별시 코로나19 백신 예방접종 현황',
				name: 'tvCorona19VaccinestatNew',
				param: {},
				option: {},
			},
			{
				code: '',
				category: '01',
				popular: '01',
				disc: '서울시 코로나19 확진자 현황',
				name: 'Corona19Status',
				param: {},
				option: {},
			},
			{
				code: '',
				category: '01',
				popular: '01',
				disc: '서울특별시 코로나19 확진자 발생동향',
				name: 'TbCorona19CountStatus',
				param: {},
				option: {},
			},
			{
				code: '',
				category: '01',
				popular: '01',
				disc: '서울특별시 코로나19 자치구별 확진자 발생동향',
				name: 'TbCorona19CountStatusJCG',
				param: {},
				option: {
					JCG_DT: '2021.08.01.00'						// 자치구 기준일
				},
			},

			{
				code: '',
				category: '11',
				popular: '02',
				disc: '서울시 건설 알림이 정보',
				name: 'ListConstructionWorkService',
				param: {},
				option: {
					FCT_F25_NM: '',								// 자치구 구분 (자치구명)
					PJT_END_DIV: '',							// 프로젝트 종료여부(진행:0, 종료:1)
				},
			},

			{
				code: '',
				category: '05',
				popular: '03',
				disc: '서울시 우리마을가게 상권분석서비스(상권-생활인구)',
				name: 'VwsmTrdarFlpopQq',
				param: {},
				option: {
					STDR_YY_CD: '',								// 기준 년코드
					TRDAR_SE_CD: '',							// 상권_구분_코드	'A','D','R','U'
				},
			},
			{
				code: '',
				category: '05',
				popular: '03',
				disc: '서울시 우리마을가게 상권분석서비스(상권배후지-집객시설)',
				name: 'VwsmTrdhlFcltyQq',
				param: {},
				option: {
					STDR_YY_CD: '2019',							// 기준_년_코드
				},
			},
			{
				code: '',
				category: '05',
				popular: '03',
				disc: '서울시 우리마을가게 상권분석서비스(상권배후지-생활인구)',
				name: 'VwsmTrdhlFlpopQq',
				param: {},
				option: {
					STDR_YY_CD: '2019',							// 기준_년_코드
				},
			},
			{
				code: '',
				category: '05',
				popular: '03',
				disc: '서울시 우리마을가게 상권분석서비스(상권-집객시설)',
				name: 'VwsmTrdarFcltyQq',
				param: {},
				option: {
					STDR_YY_CD: '2019',							// 기준_년_코드
				},
			},
			{
				code: '',
				category: '05',
				popular: '03',
				disc: '서울시 우리마을가게 상권분석서비스(상권배후지-상주인구)',
				name: 'VwsmTrdhlRepopQq',
				param: {},
				option: {
					STDR_YY_CD: '2019',							// 기준_년_코드
					TRDAR_SE_CD: '',							// 상권_구분_코드
				},
			},
			{
				code: '',
				category: '05',
				popular: '03',
				disc: '서울시 우리마을가게 상권분석서비스(상권_상주인구)',
				name: 'VwsmTrdarRepopQq',
				param: {},
				option: {
					STDR_YY_CD: '2019',							// 기준_년_코드
					TRDAR_SE_CD: '',							// 상권_구분_코드
				},
			},
			{
				code: '',
				category: '05',
				popular: '03',
				disc: '서울시 우리마을가게 상권분석서비스(상권배후지-아파트)',
				name: 'VwsmTrdhlAptQq',
				param: {},
				option: {
					STDR_YY_CD: '2019',							// 기준_년_코드
				},
			},
			{
				code: '',
				category: '05',
				popular: '03',
				disc: '서울시 우리마을가게 상권분석서비스(상권배후지-점포)',
				name: 'VwsmTrdhlStorQq',
				param: {},
				option: {
					STDR_YY_CD: '2019',							// 기준_년_코드
				},
			},
			{
				code: '',
				category: '05',
				popular: '03',
				disc: '서울시 우리마을가게 상권분석서비스(상권-상권변화지표)',
				name: 'VwsmTrdarIxQq',
				param: {},
				option: {
					STDR_YY_CD: '2019',							// 기준_년_코드
					TRDAR_SE_CD: '',							// 상권_구분_코드
				},
			},
			{
				code: '',
				category: '05',
				popular: '03',
				disc: '서울시 우리마을가게 상권분석서비스(행정동별 상권변화지표)',
				name: 'VwsmAdstrdIxQq',
				param: {},
				option: {
					STDR_YY_CD: '2019',							// 기준_년_코드
				},
			},
			{
				code: '',
				category: '05',
				popular: '03',
				disc: '서울시 우리마을가게 상권분석서비스(상권-추정매출)',
				name: 'VwsmTrdarSelngQq',
				param: {},
				option: {
					STDR_YY_CD: '2019',							// 기준_년_코드
					TRDAR_SE_CD: 'A',							// 상권_구분_코드
				},
			},
			{
				code: '',
				category: '05',
				popular: '03',
				disc: '서울시 우리마을가게 상권분석서비스(상권-직장인구)',
				name: 'VwsmTrdarWrcPopltnQq',
				param: {},
				option: {
					STDR_YY_CD: '2019',							// 기준_년_코드
					TRDAR_SE_CD: 'A',							// 상권_구분_코드
				},
			},
			{
				code: '',
				category: '05',
				popular: '03',
				disc: '서울시 우리마을가게 상권분석서비스(상권배후지-소득소비)',
				name: 'VwsmTrdhlNcmCnsmpQq',
				param: {},
				option: {
					STDR_YY_CD: '2019',							// 기준_년_코드
				},
			},
			{
				code: '',
				category: '05',
				popular: '03',
				disc: '서울시 우리마을가게 상권분석서비스(상권배후지-직장인구)',
				name: 'Vwsm_TrdhlWrcPopltnQq',
				param: {},
				option: {
					STDR_YY_CD: '2019',							// 기준_년_코드
				},
			},
			{
				code: '',
				category: '05',
				popular: '03',
				disc: '서울시 우리마을가게 상권분석서비스(자치구별 상권변화지표)',
				name: 'VwsmSignguIxQq',
				param: {},
				option: {
					STDR_YY_CD: '2019',							// 기준_년_코드
				},
			},
			{
				code: '',
				category: '05',
				popular: '03',
				disc: '서울시 우리마을가게 상권분석서비스(상권-아파트)',
				name: 'InfoTrdarAptQq',
				param: {},
				option: {
					STDR_YY_CD: '2019',							// 기준_년_코드
				},
			},
			{
				code: '',
				category: '05',
				popular: '03',
				disc: '서울시 우리마을가게 상권분석서비스(상권영역)',
				name: 'TbgisTrdarRelm',
				param: {},
				option: {},
			},
			{
				code: '',
				category: '05',
				popular: '03',
				disc: '서울시 우리마을가게 상권분석서비스(상권-점포)',
				name: 'VwsmTrdarStorQq',
				param: {},
				option: {
					STDR_YY_CD: '2019',							// 기준_년_코드
					TRDAR_SE_CD: 'A',							// 상권_구분_코드
				},
			},

			{
				code: '',
				category: '02',
				popular: '04',
				disc: '서울시 공공서비스예약 정보',
				name: 'ListPublicReservationDetail',
				param: {},
				option: {
					SVCID: 'S200504173712757413',				// 서비스번호 (서비스ID문자열)
				},
			},
			{
				code: '',
				category: '02',
				popular: '04',
				disc: '서울시 영문 공공서비스예약 정보',
				name: 'ListPublicReservationEnglish',
				param: {},
				option: {
					MINCLASSNM: 'Tennis',						// 소분류명 (소분류명 문자열 (대소문자 구분))
				},
			},
			{
				code: '',
				category: '02',
				popular: '04',
				disc: '서울시 진료 공공서비스예약 정보',
				name: 'ListPublicReservationMedical',
				param: {},
				option: {
					MINCLASSNM: '서북병원',						// 소분류명 (소분류명 문자열 (대소문자 구분))
				},
			},
			{
				code: '',
				category: '02',
				popular: '04',
				disc: '서울시 문화행사 공공서비스예약 정보',
				name: 'ListPublicReservationCulture',
				param: {},
				option: {
					MINCLASSNM: '전시',							// 소분류명 (소분류명 문자열 (대소문자 구분))
				},
			},
			{
				code: '',
				category: '02',
				popular: '04',
				disc: '서울시 교육 공공서비스예약 정보',
				name: 'ListPublicReservationEducation',
				param: {},
				option: {
					MINCLASSNM: '역사',							// 소분류명 (소분류명 문자열 (대소문자 구분))
					SVCNM: '한양도성',							// 서비스명 (서비스명 문자열)
					USETGTINFO: '초등학교',						// 서비스대상 (서비스대상 문자열)
					AREANM: '종로구',							// 지역명 (지역명 문자열)
				},
			},
			{
				code: '',
				category: '02',
				popular: '04',
				disc: '서울시 시설대관 공공서비스예약 정보',
				name: 'ListPublicReservationInstitution',
				param: {},
				option: {
					MINCLASSNM: '회의실',						// 소분류명 (소분류명 문자열 (대소문자 구분))
				},
			},
			{
				code: '',
				category: '02',
				popular: '04',
				disc: '서울시 체육시설 공공서비스예약 정보',
				name: 'ListPublicReservationSport',
				param: {},
				option: {
					MINCLASSNM: '테니스장',						// 소분류명 (소분류명 문자열 (대소문자 구분))
				},
			},

			{
				code: '',
				category: '07',
				popular: '05',
				disc: '서울특별시 공공자전거 대여소 정보',
				name: '',
				param: {},
				option: {},
			},
			{
				code: '',
				category: '07',
				popular: '05',
				disc: '서울특별시 공공자전거 이용정보(시간대별)',
				name: '',
				param: {},
				option: {},
			},
			{
				code: '',
				category: '07',
				popular: '05',
				disc: '서울특별시 공공자전거 외국인대여정보(일별)',
				name: 'cycleForeignerRentDayInfo',
				param: {},
				option: {
					RENT_DT: '',								// 대여일자
				},
			},
			{
				code: '',
				category: '07',
				popular: '05',
				disc: '서울특별시 공공자전거 이용정보(월별)',
				name: '',
				param: {},
				option: {},
			},
			{
				code: '',
				category: '07',
				popular: '05',
				disc: '서울특별시 공공자전거 외국인 대여정보(월별)',
				name: 'cycleForeignerRentMonthInfo',
				param: {},
				option: {
					RENT_DT: '',								// 대여일자
					RENT_ID: '',								// 대여소번호
				},
			},
			{
				code: '',
				category: '07',
				popular: '05',
				disc: '서울특별시 공공자전거 신규가입자 정보(일별)',
				name: 'cycleNewMemberRentInfoDay',
				param: {},
				option: {
					RENT_DT: '',								// 대여일자
				},
			},
			{
				code: '',
				category: '07',
				popular: '05',
				disc: '서울특별시 공공자전거 이용정보(일별)',
				name: '',
				param: {},
				option: {},
			},
			{
				code: '',
				category: '07',
				popular: '05',
				disc: '서울특별시 공공자전거 대여소별 이용정보(월별)',
				name: '',
				param: {},
				option: {},
			},
			{
				code: '',
				category: '07',
				popular: '05',
				disc: '서울특별시 공공자전거 신규가입자 정보(월별)',
				name: 'cycleNewMemberRentInfoMonth',
				param: {},
				option: {
					RENT_DT: '202101',							// 대여일자
				},
			},
			{
				code: '',
				category: '07',
				popular: '05',
				disc: '서울시 공공자전거 이용현황',
				name: '',
				param: {},
				option: {},
			},
			{
				code: '',
				category: '07',
				popular: '05',
				disc: '서울특별시 공공자전거 대여이력 정보',
				name: '',
				param: {},
				option: {},
			},
			{
				code: '',
				category: '07',
				popular: '05',
				disc: '서울특별시 공공자전거 실시간 대여정보',
				name: 'bikeList',
				param: {},
				option: {},
			},

			{
				code: '',
				category: '07',
				popular: '06',
				disc: '서울시 공영주차장 안내 정보',
				name: 'GetParkInfo',
				param: {},
				option: {
					ADDR: '강남',								// 주소 (주소 문자열)
					PARKING_CODE: '',							// 주차장코드
				},
			},

			{
				code: '',
				category: '07',
				popular: '07',
				disc: '서울시 지하철호선별 역별 승하차 인원 정보',
				name: 'CardSubwayStatsNew',
				param: {},
				option: {
					USE_DT: '20151101',							// 사용일자 (YYYYMMDD 형식의 문자열)
				},
			},
			{
				code: '',
				category: '07',
				popular: '07',
				disc: '서울시 대중교통 수단별 이용 현황',
				name: '',
				param: {},
				option: {},
			},
			{
				code: '',
				category: '07',
				popular: '07',
				disc: '서울시 지하철 호선별 역별 유/무임 승하차 인원 정보',
				name: 'CardSubwayPayFree',
				param: {},
				option: {
					USE_MON: '201901',							// 사용월 (YYYYMM형식의 문자열)
					LINE_NUM: '',								// 호선명 (호선명 문자열 예) 1호선)
					SUB_STA_NM: '',								// 지하철역 (지하철역명 문자열)
				},
			},
			{
				code: '',
				category: '07',
				popular: '07',
				disc: '서울시 지하철 호선별 역별 시간대별 승하차 인원 정보',
				name: 'CardSubwayTime',
				param: {},
				option: {
					USE_MON: '201501',							// 사용월 (YYYYMM형식의 문자열)
					LINE_NUM: '',								// 호선명 (호선명 문자열 예) 1호선)
					SUB_STA_NM: '',								// 지하철역 (지하철역명 문자열)
				},
			},
			{
				code: '',
				category: '07',
				popular: '07',
				disc: '서울시 버스노선별 정류장별 승하차 인원 정보',
				name: 'CardBusStatisticsServiceNew',
				param: {},
				option: {
					USE_DT: '20151101',							// 사용일자 (YYYYMMDD 형식의 문자열)
					BUS_ROUTE_NO: '6617',						// 노선번호 (버스노선번호)
				},
			},
			{
				code: '',
				category: '07',
				popular: '07',
				disc: '서울시 버스노선별 정류장별 시간대별 승하차 인원 정보',
				name: 'CardBusTimeNew',
				param: {},
				option: {
					USE_MON: '201511',							// 사용월 (YYYYMM형식의 문자열)
					BUS_ROUTE_NO: '7730',						// 노선번호 (버스노선번호)
				},
			},

			{
				code: '',
				category: '04',
				popular: '08',
				disc: '서울특별시 대기오염전광판 위치정보',
				name: 'airPollutionBrdInfo',
				param: {},
				option: {
					GU_NM: '',									// 구별
					INSTALL_LOC: '',							// 설치위치
				},
			},
			{
				code: '',
				category: '04',
				popular: '08',
				disc: '서울특별시 초미세먼지 연도별 발령정보',
				name: 'yearMicroDustInfo',
				param: {},
				option: {
					YEAR: '',									// 년도
				},
			},
			{
				code: '',
				category: '04',
				popular: '08',
				disc: '서울시 대기오염물질 측정소 높이 정보',
				name: '',
				param: {},
				option: {},
			},
			{
				code: '',
				category: '04',
				popular: '08',
				disc: '서울시 시간 평균 대기오염도 정보',
				name: 'TimeAverageAirQuality',
				param: {},
				option: {
					MSRDT: '20130615',							// 측정일시 ('YYYYMMDDHH24MI')
					MSRSTE_NM: '종로구',						// 측정소명 (문자열)
				},
			},
			{
				code: '',
				category: '04',
				popular: '08',
				disc: '서울시 연도별 황사 경보발령 현황',
				name: 'YearlyYellowDustIssue',
				param: {},
				option: {
					YYYY: '',									// 년도
				},
			},
			{
				code: '',
				category: '04',
				popular: '08',
				disc: '서울시 연도별 미세먼지 경보발령 현황',
				name: 'YearlyPM10Issue',
				param: {},
				option: {
					YYYY: '',									// 년도
				},
			},
			{
				code: '',
				category: '04',
				popular: '08',
				disc: '서울시 연도별 오존 경보발령 현황',
				name: 'YearlyOzoneIssue',
				param: {},
				option: {
					YYYY: '',									// 년도
				},
			},
			{
				code: '',
				category: '04',
				popular: '08',
				disc: '서울시 도로변 기간별 일평균 대기환경 현황',
				name: 'DailyAverageRoadside',
				param: {},
				option: {
					MSRDT_DE: '20200315',						// 측정일자 (YYYYMMDD)
					MSRCLS_CD: '일반도로',						// 도로변구분
					MSRSTE_NM: '',								// 측정소명 (문자열)
				},
			},
			{
				code: '',
				category: '04',
				popular: '08',
				disc: '서울시 도로변 측정소별 실시간 대기환경 현황',
				name: 'RealtimeRoadsideStation',
				param: {},
				option: {
					MSRCLS_CD: '일반도로',						// 도로변구분
					MSRSTE_NM: '',								// 측정소명 (문자열)
				},
			},
			{
				code: '',
				category: '04',
				popular: '08',
				disc: '서울시 기간별 시간평균 대기환경 정보',
				name: 'TimeAverageCityAir',
				param: {},
				option: {
					MSRDT: '201303061100',						// 측정일시 (YYYYMMDDHH2400 (시간 단위))
					MSRRGN_NM: '',								// 권역명 (문자열)
					MSRSTE_NM: '',								// 측정소명 (문자열)
				},
			},
			{
				code: '',
				category: '04',
				popular: '08',
				disc: '서울시 권역별 실시간 대기환경 현황',
				name: 'RealtimeCityAir',
				param: {},
				option: {
					MSRRGN_NM: '동북권',						// 권역명 (도심권, 동북권, 동남권, 서북권, 서남권)
					MSRSTE_NM: '성북구',						// 측정소명 (문자열)
				},
			},
			{
				code: '',
				category: '04',
				popular: '08',
				disc: '서울시 기간별 일평균 대기환경 정보',
				name: 'DailyAverageCityAir',
				param: {},
				option: {
					MSRDT_DE: '20130306',						// 측정일자 (YYYYMMDD)
					MSRRGN_NM: '동남권',						// 권역명 (도심권, 동북권, 동남권, 서북권, 서남권)
					MSRSTE_NM: '강남구',						// 측정소명 (문자열)
				},
			},
			{
				code: '',
				category: '04',
				popular: '08',
				disc: '서울시 년도별 평균 대기오염도 정보',
				name: 'YearlyAverageAirQuality',
				param: {},
				option: {
					MSRDT_YEAR: '2013',							// 측정년도 (YYYY)
					MSRSTE_NM: '서대문구',						// 측정소명 (문자열)
				},
			},
			{
				code: '',
				category: '04',
				popular: '08',
				disc: '서울시 일별 평균 대기오염도 정보',
				name: 'DailyAverageAirQuality',
				param: {},
				option: {
					MSRDT_DE: '20130228',						// 측정일시 (YYYYMMDD)
					MSRSTE_NM: '강변북로',						// 측정소명 (문자열)
				},
			},
			{
				code: '',
				category: '04',
				popular: '08',
				disc: '서울시 월별 평균 대기오염도 정보',
				name: 'MonthlyAverageAirQuality',
				param: {},
				option: {
					MSRDT_MT: '201302',							// 측정월 (YYYYMM)
					MSRSTE_NM: '강남구',						// 측정소명 (문자열)
				},
			},
			{
				code: '',
				category: '04',
				popular: '08',
				disc: '서울시 지역 구별 측정소 행정코드 정보',
				name: 'SearchMeasuringSTNOfAirQualityService',
				param: {},
				option: {
					MSRADM: '',									// 측정소코드
					MSRSTE_NM: '',								// 측정소명 (문자열)
				},
			},
			{
				code: '',
				category: '04',
				popular: '08',
				disc: '서울시 실시간 대기환경 평균 현황',
				name: 'ListAvgOfSeoulAirQualityService',
				param: {},
				option: {},
			},
			{
				code: '',
				category: '04',
				popular: '08',
				disc: '서울시 실시간 자치구별 대기환경 현황',
				name: 'ListAirQualityByDistrictService',
				param: {},
				option: {
					MSRADMCODE: '111121',						// 측정소 (행정코드)
				},
			},

			{
				code: '',
				category: '04',
				popular: '09',
				disc: '서울시 초미세먼지 경보 현황',
				name: 'ForecastWarningUltrafineParticleOfDustService',
				param: {},
				option: {
					APPLC_DT: '',								// 발표시간(YYYYMMDDHHMI)
				},
			},
			{
				code: '',
				category: '04',
				popular: '09',
				disc: '서울시 황사 경보 현황',
				name: 'WarningYellowDustService',
				param: {},
				option: {
					APPLC_DT: '',								// 발표시간(YYYYMMDDHHMI)
				},
			},
			{
				code: '',
				category: '04',
				popular: '09',
				disc: '서울시 미세먼지 경보 현황',
				name: 'ForecastWarningMinuteParticleOfDustService',
				param: {},
				option: {
					APPLC_DT: '',								// 발표시간(YYYYMMDDHHMI)
				},
			},
			{
				code: '',
				category: '04',
				popular: '09',
				disc: '서울시 권역별 오존 경보 현황',
				name: 'ForecastWarningOzoneService',
				param: {},
				option: {
					APPLC_DT: '',								// 발표시간(YYYYMMDDHHMI)
				},
			},

			{
				code: '',
				category: '07',
				popular: '10',
				disc: '서울시 나눔카 거점리스트 정보',
				name: 'NanumcarSpotList',
				param: {
					END_INDEX: 100,
				},
				option: {
					POSITN_CD: '',								// 거점ID
				},
			},
			{
				code: '',
				category: '07',
				popular: '10',
				disc: '서울시 나눔카 예약가능 차량 정보',
				name: 'NanumcarCarList',
				param: {
					TYPE: 'xml',
				},
				option: {
					POSITN_CD: '493',							// 거점ID
					CAR_CD: 'gr',								// 나눔카 대상 (gr: GreenCar, so: SOCAR, 딜카, people car)
				},
			},

			{
				code: '',
				category: '01',
				popular: '11',
				disc: '서울시 모기예보제 정보',
				name: 'MosquitoStatus',
				param: {},
				option: {
					MOSQUITO_DATE: '2020-04-12',				// 모기지수 발생일 (YYYY-MM-DD)
				},
			},

			{
				code: '',
				category: '02',
				popular: '12',
				disc: '서울시 문화행사정보 자치구코드 정보',
				name: 'SearchConcertDetailServicCGG',
				param: {},
				option: {
					GCODE: '',									// 자치구 코드
					GCODE_1: '',								// 자치구 명
				},
			},
			{
				code: '',
				category: '02',
				popular: '12',
				disc: '서울시 장르별 문화공간 현황',
				name: 'GenreCulturalFacilitiesStatus',
				param: {},
				option: {
					GRP_NAME: '',								// 장르 명
				},
			},
			{
				code: '',
				category: '02',
				popular: '12',
				disc: '서울시 문화행사정보 장소명 검색',
				name: 'SearchConcertPlaceService',
				param: {},
				option: {
					S_PLACE: '남서울미술관',					// 장소 검색조건 (장소 문자값)
				},
			},
			{
				code: '',
				category: '02',
				popular: '12',
				disc: '서울시 문화행사 기간 검색',
				name: 'SearchConcertPeriodService',
				param: {},
				option: {
					S_START_YMD: '20130701',					// 시작일자 (yyyymmdd 형식)
					S_END_YMD: '20231231',						// 종료일자 (yyyymmdd 형식)
				},
			},
			{
				code: '',
				category: '02',
				popular: '12',
				disc: '서울시 문화위치정보 명칭 검색',
				name: 'SearchCulturalFacilitiesNameService',
				param: {},
				option: {
					FAC_NAME: '노원정보도서관',					// 문화공간명 (문화공간명 문자값)
				},
			},
			{
				code: '',
				category: '02',
				popular: '12',
				disc: '서울시 문화위치정보 교통 정보',
				name: 'SearchCulturalFacilitiesTrafficService',
				param: {},
				option: {
					FAC_CODE: '100430',							// 문화공간코드
				},
			},
			{
				code: '',
				category: '02',
				popular: '12',
				disc: '서울시 문화위치정보 장르코드 정보',
				name: 'SearchCulturalFacilitiesBySubjectService',
				param: {},
				option: {
					CODE: '',									// 코드
					CODENAME: '',								// 코드명
				},
			},
			{
				code: '',
				category: '02',
				popular: '12',
				disc: '서울시 문화행사정보 명칭 검색',
				name: 'SearchConcertNameService',
				param: {},
				option: {
					S_TITLE: '뮤지컬',							// 행사정보 제목 (제목 문자값)
				},
			},
			{
				code: '',
				category: '02',
				popular: '12',
				disc: '서울시 문화행사정보 장르별 검색',
				name: 'SearchPerformanceBySubjectService',
				param: {},
				option: {
					SUBJCODE21: '1',							// 장르분류코드 (1:콘서트,2:클래식,3:뮤지컬/오페라,5:연극,6:무용,7:전시/미술,10:기타,11:국악,12:축제,17:독주/독창회)
				},
			},
			{
				code: '',
				category: '02',
				popular: '12',
				disc: '서울시 문화행사정보 장르코드 정보',
				name: 'SearchConcertSubjectCatalogService',
				param: {},
				option: {
					CODE: '',									// 코드
					CODENAME: '',								// 코드명
				},
			},
			{
				code: '',
				category: '02',
				popular: '12',
				disc: '서울특별시 문화행사 정보',
				name: 'culturalEventInfo',
				param: {},
				option: {
					CODENAME: '',								// 분류
					TITLE: '',									// 공연/행사명
				},
			},
			{
				code: '',
				category: '02',
				popular: '12',
				disc: '서울특별시 문화공간 정보',
				name: 'culturalSpaceInfo',
				param: {},
				option: {
					NUM: '',									// 번호
				},
			},
			{
				code: '',
				category: '02',
				popular: '12',
				disc: '서울시 세종문화회관 공연 및 전시 정보',
				name: 'SJWPerform',
				param: {},
				option: {
					PERFORM_CODE: '',							// 공연코드
				},
			},

			{
				code: '',
				category: '03',
				popular: '13',
				disc: '서울시 생필품 농수축산물 가격 정보',
				name: 'ListNecessariesPricesService',
				param: {},
				option: {
					M_NAME_SCH: '하나로마트',					// 시장/마트 이름 (시장/마트 이름 문자열)
					A_NAME: '사과',								// 품목 이름 (품목 이름)
					P_YEAR_MONTH: '',							// 년도-월 (YYYY-MM)
					M_TYPE_NAME: '',							// 시장유형 구분 이름 (시장유형)
					M_GU_NAME: '',								// 자치구 이름
				},
			},
			{
				code: '',
				category: '03',
				popular: '13',
				disc: '서울특별시 물가 소식정보',
				name: 'VwNotice',
				param: {},
				option: {},
			},
			{
				code: '',
				category: '03',
				popular: '13',
				disc: '서울특별시 할인행사/직거래장터 정보',
				name: 'VwNews',
				param: {},
				option: {},
			},
			{
				code: '',
				category: '03',
				popular: '13',
				disc: '서울시 가격안정 모범업소 상품목록 현황',
				name: 'ListPriceModelStoreProductService',
				param: {},
				option: {
					SH_ID: '',									// 업소아이디 (업소아이디를 검색할 때 사용)
				},
			},
			{
				code: '',
				category: '03',
				popular: '13',
				disc: '서울시 개인서비스 요금 정보',
				name: 'IndividualServiceChargeService',
				param: {},
				option: {
					GU_NM: '',									// 구명
				},
			},
			{
				code: '',
				category: '03',
				popular: '13',
				disc: '서울시 착한가격업소 현황',
				name: 'ListPriceModelStoreService',
				param: {},
				option: {
					INDUTY_CODE_SE: '001',						// 분류코드
				},
			},
			{
				code: '',
				category: '01',
				popular: '13',
				disc: '서울시 농수산물 경매 정보',
				name: 'GarakAuctionRslt',
				param: {},
				option: {
					PUM_NAME: '딸기',							// 품목명
					ADJ_DT: '',									// 입력일 (년월일(YYYYMMDD))
				},
			},

			{
				code: '',
				category: '07',
				popular: '14',
				disc: '서울특별시 버스정류소 위치정보',
				name: 'busStopLocationXyInfo',
				param: {},
				option: {
					STOP_NM: '',								// 정류소명
				},
			},
			{
				code: '',
				category: '07',
				popular: '14',
				disc: '서울특별시 버스운행노선 정보',
				name: '',
				param: {},
				option: {},
			},
			{
				code: '',
				category: '07',
				popular: '14',
				disc: '서울시 버스도착 정보 조회',
				name: 'link',
				param: {},
				option: {},
			},
			{
				code: '',
				category: '07',
				popular: '14',
				disc: '서울시 버스위치 정보 조회',
				name: 'link',
				param: {},
				option: {},
			},
			{
				code: '',
				category: '07',
				popular: '14',
				disc: '서울시 버스 정류소 정보 조회',
				name: 'link',
				param: {},
				option: {},
			},
			{
				code: '',
				category: '07',
				popular: '14',
				disc: '서울시 대중교통 환승경로 조회',
				name: 'link',
				param: {},
				option: {},
			},
			{
				code: '',
				category: '07',
				popular: '14',
				disc: '서울시 버스 노선 정보 조회',
				name: 'link',
				param: {},
				option: {},
			},

			{
				code: '',
				category: '04',
				popular: '15',
				disc: '서울시 강우량 정보',
				name: 'ListRainfallService',
				param: {},
				option: {
					GU_NAME: '강남구',							// 구청명
				},
			},
			{
				code: '',
				category: '10',
				popular: '15',
				disc: '서울시 하천 수위 현황',
				name: 'ListRiverStageService',
				param: {},
				option: {},
			},

			{
				code: '',
				category: '07',
				popular: '16',
				disc: '서울시 실시간 도로 소통 정보',
				name: 'TrafficInfo',
				param: {
					TYPE: 'xml',
				},
				option: {
					LINK_ID: '1220003800',						// 링크 아이디
				},
			},
			{
				code: '',
				category: '07',
				popular: '16',
				disc: '서울특별시 교통량 정보',
				name: 'link',
				param: {},
				option: {
					LINK_ID: '1220003800',						// 링크 아이디
				},
			},
			{
				code: '',
				category: '07',
				popular: '16',
				disc: '서울특별시 월별 교통량 정보',
				name: 'link',
				param: {},
				option: {
					LINK_ID: '1220003800',						// 링크 아이디
				},
			},
			{
				code: '',
				category: '07',
				popular: '16',
				disc: '서울특별시 도로 기능별 구분정보',
				name: 'roadFuncTypeInfo',
				param: {},
				option: {
					ROAD_CODE: '',								// 도로축코드	
					ROAD_NM: '',								// 도로명	
					FUNC_CODE: '',								// 도로기능별구분코드	
					FUNC_NM: '',								// 도로기능별구분명	
				},
			},
			{
				code: '',
				category: '07',
				popular: '16',
				disc: '서울특별시 교통소통 서비스링크 보간점 정보',
				name: 'trafficSvcLinkInfo',
				param: {},
				option: {
					LINK_ID: '',								// 링크아이디	
				},
			},
			{
				code: '',
				category: '07',
				popular: '16',
				disc: '서울특별시 교통소통 표준링크 매핑정보',
				name: 'trafficMlrdLinkInfo',
				param: {},
				option: {
					SERVICE_ID: '',								// 서비스링크아이디
					LINK_ID: '',								// 표준링크아이디
				},
			},
			{
				code: '',
				category: '07',
				popular: '16',
				disc: '서울시 소통 돌발 교통 권역 정보',
				name: 'RegionInfo',
				param: {
					TYPE: 'xml',
				},
				option: {},
			},
			{
				code: '',
				category: '07',
				popular: '16',
				disc: '서울시 소통 돌발 링크 Vertex 정보',
				name: 'LinkVerInfo',
				param: {
					TYPE: 'xml',
				},
				option: {
					LINK_ID: '1220003800',						// 링크 아이디	
				},
			},
			{
				code: '',
				category: '07',
				popular: '16',
				disc: '서울시 소통 돌발 도로 정보',
				name: 'RoadInfo',
				param: {
					TYPE: 'xml',
				},
				option: {
					ROAD_DIV_CD: '02',							// 도로 분류 코드	
				},
			},
			{
				code: '',
				category: '07',
				popular: '16',
				disc: '서울시 교통량 지점 정보',
				name: 'SpotInfo',
				param: {
					TYPE: 'xml',
				},
				option: {},
			},
			{
				code: '',
				category: '07',
				popular: '16',
				disc: '서울시 돌발 유형 코드 정보',
				name: 'AccMainCode',
				param: {
					TYPE: 'xml',
				},
				option: {},
			},
			{
				code: '',
				category: '07',
				popular: '16',
				disc: '서울시 소통 돌발 도로별 링크 정보',
				name: 'LinkWithLoad',
				param: {
					TYPE: 'xml',
				},
				option: {
					AXIS_CD: '204',								// 도로 축 코드
				},
			},
			{
				code: '',
				category: '07',
				popular: '16',
				disc: '서울시 소통 돌발 도로 분류 정보',
				name: 'RoadDivInfo',
				param: {
					TYPE: 'xml',
				},
				option: {},
			},
			{
				code: '',
				category: '07',
				popular: '16',
				disc: '서울시 교통량 이력 정보',
				name: 'VolInfo',
				param: {
					TYPE: 'xml',
				},
				option: {
					SPOT_NUM: 'A-01',							// 지점번호	
					YMD: '20160301',							// 년월일 (YYYYMMDD)
					HH: '12',									// 시간 (HH)
				},
			},
			{
				code: '',
				category: '07',
				popular: '16',
				disc: '서울시 소통 돌발 링크 정보',
				name: 'LinkInfo',
				param: {
					TYPE: 'xml',
				},
				option: {
					LINK_ID: '1220003800',						// 링크 아이디	
				},
			},
			{
				code: '',
				category: '07',
				popular: '16',
				disc: '서울시 실시간 돌발 정보',
				name: 'AccInfo',
				param: {
					TYPE: 'xml',
				},
				option: {},
			},
			{
				code: '',
				category: '07',
				popular: '16',
				disc: '서울시 돌발 세부유형 코드 정보',
				name: 'AccSubCode',
				param: {
					TYPE: 'xml',
				},
				option: {},
			},

			{
				code: '',
				category: '05',
				popular: '17',
				disc: '장애인콜시스템',
				name: 'disabledCalltaxi',
				param: {
					TYPE: 'xml',
				},
				option: {
					REG_DATE: '20190101',						// 요청일
				},
			},

			{
				code: '',
				category: '07',
				popular: '18',
				disc: '서울시 지하철 실시간 도착정보',
				name: 'realtimeStationArrival',
				param: {
					HOST: 'http://swopenAPI.seoul.go.kr/api/subway',
					KEY: '534179544c6b6f6f35344c50614c42',
				},
				option: {
					statnNm: '서울', 							// 지하철역명
				},
			},
			{
				code: '',
				category: '07',
				popular: '18',
				disc: '서울시 지하철 실시간 열차 위치정보',
				name: 'realtimePosition',
				param: {
					HOST: 'http://swopenAPI.seoul.go.kr/api/subway',
					KEY: '534179544c6b6f6f35344c50614c42',
				},
				option: {
					subwayNm: '1호선',							// 지하철호선명
				},
			},

			{
				code: '',
				category: '07',
				popular: '19',
				disc: '서울시 역코드로 지하철역별 열차 시간표 정보 검색',
				name: 'SearchSTNTimeTableByIDService',
				param: {},
				option: {
					STATION_CD: '2561',							// 전철역코드 (전철역코드 문자값)
					WEEK_TAG: '1',								// 요일
					INOUT_TAG: '1',								// 상/하행선
				},
			},
			{
				code: '',
				category: '07',
				popular: '19',
				disc: '서울특별시 지하철 호선별 첫차와 막차 정보(전철역코드,외부코드)',
				name: 'SearchFirstAndLastTrainbyLineServiceNew',
				param: {},
				option: {
					LINE_NUM: '02호선',							// 호선 (01호선,1호선,09호선,분당선,신분당선 등)
					INOUT_TAG: '1',								// 상/하행선 (상행,내선:1, 하행,외선:2)
					WEEK_TAG: '1',								// 요일 (평일:1, 토요일:2, 휴일/일요일:3)
					STATION_CD: '',								// 전철역코드 (전철역코드(공백가능))
					FR_CODE: '243',								// 외부코드
				},
			},
			{
				code: '',
				category: '07',
				popular: '19',
				disc: '서울교통공사 노선별 지하철역 정보',
				name: 'SearchSTNBySubwayLineInfo',
				param: {
					END_INDEX: 3,
				},
				option: {
					STATION_CD: '',								// 전철역코드
					STATION_NM: '서울역',						// 전철역명
					LINE_NUM: '',								// 호선
				},
			},
			{
				code: '',
				category: '07',
				popular: '19',
				disc: '서울시 역외부코드로 지하철 막차시간표 정보 검색',
				name: 'SearchLastTrainTimeByFRCodeService',
				param: {},
				option: {
					FR_CODE: '352',								// 외부코드 (외부코드 문자값)
					WEEK_TAG: '1',								// 요일	
					INOUT_TAG: '1',								// 상/하행선	
				},
			},
			{
				code: '',
				category: '07',
				popular: '19',
				disc: '서울시 역코드로 지하철 막차시간표 정보 검색',
				name: 'SearchLastTrainTimeByIDService',
				param: {},
				option: {
					STATION_CD: '0342',							// 전철역코드 (전철역코드 문자값)
					WEEK_TAG: '1',								// 요일	
					INOUT_TAG: '1',								// 상/하행선	
				},
			},
			{
				code: '',
				category: '07',
				popular: '19',
				disc: '서울시 역외부코드로 지하철역별 열차 시간표 정보 검색',
				name: 'SearchSTNTimeTableByFRCodeService',
				param: {},
				option: {
					FR_CODE: '352',								// 외부코드 (외부코드 문자값)
					WEEK_TAG: '1',								// 요일	
					INOUT_TAG: '1',								// 상/하행선	
				},
			},
			{
				code: '',
				category: '07',
				popular: '19',
				disc: '서울시 지하철역 정보 검색 (역명)',
				name: 'SearchInfoBySubwayNameService',
				param: {},
				option: {
					STATION_NM: '종로3가',						// 전철역명 (전철역명 문자값)
				},
			},

			{
				code: '',
				category: '11',
				popular: '20',
				disc: '서울특별시 공동주택 아파트 정보',
				name: 'OpenAptInfo',
				param: {},
				option: {},
			},
			{
				code: '',
				category: '11',
				popular: '20',
				disc: '서울특별시 부동산 실거래가 정보',
				name: 'landActualPriceInfo',
				param: {},
				option: {
					RTMS_ID: '',								// 실거래가아이디
					LAND_CD: '',								// 지번코드
					ACC_YEAR: '',								// 신고년도
				},
			},
			{
				code: '',
				category: '11',
				popular: '20',
				disc: '서울시 개별공시지가 정보',
				name: 'IndividuallyPostedLandPriceService',
				param: {},
				option: {
					SIGUNGU_NM: '종로구',						// 시군구명
					BJDONG_NM: '',								// 법정동명
					BONBEON: '',								// 본번 (정수 입력(0~9999))
					BUBEON: '',									// 부번 (정수 입력(0~9999))
					PILGI_CD: '',								// 필지구분코드 (1:토지, 2:임야, 3:가지번, 4:가지번(부분세분), 5:블럭지번, 6:블럭지번(롯트세분), 7:블럭지번(지구), 8:블럭지번(지구-롯트), 9:기타지번)
					YEAR: '2020',								// 기준년도 (YYYY)
				},
			},
			{
				code: '',
				category: '11',
				popular: '20',
				disc: '서울시 재개발 재건축 정비사업 현황',
				name: 'CleanupBussinessInfo',
				param: {},
				option: {
					GU_NM: '성북구',							// 자치구
					BJDON_NM: '',								// 법정동 (법정동명 문자열)
				},
			},
			{
				code: '',
				category: '11',
				popular: '20',
				disc: '서울특별시 전월세가 정보',
				name: 'houseRentPriceInfo',
				param: {},
				option: {
					LAND_CD: '',								// 지번코드
				},
			},
			{
				code: '',
				category: '11',
				popular: '20',
				disc: '서울특별시 부동산 중개업소 정보',
				name: 'landBizInfo',
				param: {},
				option: {
					SYS_REGNO: '',								// 시스템등록번호
				},
			},
		],

		koreaServiceList: [
			{
				code: '',
				category: '',
				popular: '',
				disc: '',
				name: 'default',
				param: {
					url: 'http://api.data.go.kr/openapi/',	// 주소
					KEY: '576a6b47416b6f6f37384f554a6459',		// 인증키 (OpenAPI 에서 발급된 인증키)
					TYPE: 'json',								// 요청파일타입 (xml : xml, xml파일 : xmlf, 엑셀파일 : xls, json파일 : json)
					SERVICE: '',								// 서비스명
					START_INDEX: 1,								// 요청시작위치 (정수 입력 (페이징 시작번호 입니다 : 데이터 행 시작번호))
					END_INDEX: 5,								// 요청종료위치 (정수 입력 (페이징 끝번호 입니다 : 데이터 행 끝번호))
				},
				option: {},
			},

			{
				code: '',
				category: '',
				popular: '',
				disc: '전국주차장정보표준데이',
				name: 'tn_pubr_prkplce_info_api',
				param: {},
				option: {
					serviceKey: 'qw05m%2B7UYOhznr9HvHViWlahG8N7YCJnzY%2BuwSZueDRnjdW9g5rqpXjQ0S3vFki2K%2F3dZTczE07cwixOVpZH4A%3D%3D',
					s_page: 0,
					s_list: 1,
					type: 'json',
				},
			},
		],
	}
});