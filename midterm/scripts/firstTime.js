function callAjax(){
	var uname = $("#uname").val();
	var email = $("#email").val();

	var dataString = 'uname='+ uname + 'email='+ email;
	$.ajax({
		type: "POST",
		url: "http://localhost:8015/insert",
		data: dataString,
		cache: false,
		success: function(result){
			alert(result);
		}
	});
}