requirejs.config({
	baseUrl: '../../vendor',
	paths: {
		jquery: 'jquery/3.6.0/jquery.min',
		jqueryUi: 'jquery-ui/1.11.4/jquery-ui.min',
		text: 'require/plugins/text',
		common: '../common',
		module: '../module',
		minor: '../minor',
	},
});

var kz;

requirejs([
	'common/kz',
], function(kzMc) {
	kz = kzMc;

	kz.init(kz);

	requirejs([
		'minor/element/app/main',
	], function(element) {
		kz.element = element;

		kz.element.init(kz);

		// 예제 dom 객체 재구성
		document.querySelectorAll('.hlcode').forEach((element) => {
			const hlcode_mc = $(element);
			const hlcode_str = hlcode_mc.html();
			const type_str = hlcode_mc.data('lang');

			hlcode_mc.empty();

			let html_str = kz.util.htmlToText(hlcode_str);
			// html_str = html_str.replace(/^\s*\n|^\t{1,4}|\n\s*$/gm, '');
			html_str = html_str.replace(/^\t{1,4}/gm, '');

			if (hlcode_mc.hasClass('example')) {
				// 예제 ui dom 추가
				hlcode_mc.append(
					`<fieldset>
						<legend><span>예제</span></legend>
						${hlcode_str}
					</fieldset>`
				);
			}

			// 예제 code dom 추가
			hlcode_mc.append(
				`<pre><code class="${type_str}" data-lang="${type_str}">${html_str}\n</code></pre>`
			);

			// code 하일라이트 효과 적용
			hlcode_mc.find('pre code').each(function(i, el) {
				hljs.highlightElement(el);
				// hljs.highlightAll();
				// hljs.highlightAuto('<h1>Hello World!</h1>').value;
			});
		});

		// 예제 dom 객체 이벤트 적용
		document.querySelectorAll('.example').forEach((element) => {
			const example_mc = $(element);

			// click 이벤트 적용
			example_mc.find('input').on('click', (event) => {
				const name_str = event.target.name;
			
				console.log(`name="${name_str}" 클릭`);
			});

			if (example_mc.data('name')) {
				// changeEl 이벤트 적용
				document.querySelector(`[name="${example_mc.data('name')}"]`).addEventListener('changeEl', (event) => {
					const name_str = event.target.name;
				
					console.log(`name="${name_str}" 변경:`, kz.element.elValue(name_str));
				});
			}
		});
	});
});