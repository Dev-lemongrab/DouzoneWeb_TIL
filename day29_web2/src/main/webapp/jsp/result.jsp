<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" >
<title>입력 결과 창</title>
</head>
<body>
<%
	 request.setCharacterEncoding("UTF-8");   // euc-kr
	 String name = request.getParameter("name");
	 String pass = request.getParameter("pwd");
	
	 out.print(name +"님 안녕하세요." + ", " + pass);
%>
</body>
</html>