<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>입력결과 창</title>
</head>
<body>
	<%
		request.setCharacterEncoding("UTF-8");
		String name = request.getParameter("name"); 
		String pass = request.getParameter("pwd");
		
		out.print(name + "님 반갑습니다."  + pass);	
	%>
</body>
</html>