function registM(t1, t2, t3) {
	var str1 = t1.value;
	if (str1.length == 0) {
		alert("아이디가 비었습니다.");
		t1.focus();
		exit();
	}
	var str2 = t2.value;
	if (str2.length == 0) {
		alert("비밀번호가 비었습니다.");
		t2.focus();
		exit();
	}
	var str3 = t3.value;
	if (str3.length == 0) {
		alert("이름이 비었습니다.");
		t3.focus();
		exit();
	} else
		document.write("등록되었습니다");
}
