<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<%
	if(request.getMethod().equals("Post")) {
		request.setCharacterEncoding("utf-8");
	}

	String name = request.getParameter("name");
%>
name : <%= name %>