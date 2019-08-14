<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
	file_put_contents('1.txt', 'test');
	echo "Why do you post data?";
} else {
?>

<script type="text/javascript">
	var ccData = {
		url: [
			'http://b.com:8081/index.php?xxx=99999',
			'http://b.com:8081/index.php?xxx=99999'
		],
		method: 'GET',
		data: 'here is post data where request method is post'
	}
</script>
<script src='cc.js'></script>

<?php	
}
?>