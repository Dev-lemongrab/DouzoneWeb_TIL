# DouzoneWeb_TIL


## HTML Basic
참고사이트 : [w3schools](https://www.w3schools.com/)
-  이클립스 html Template 만들기
이클립스 preference -> web -> Templates -> new -> 원하는 html구조 입력 -> cotext를 NEW HTML로 해주기 -> apply<br>

> 웹표준을 지키기 위해서는  
> 1. 이텔릭체 :  `<i>` 대신 `<em>`   
> 2. 굵게 : `<b>` 대신 `<strong>`  
>> 장애인들은 학습에 제한이 있기 때문에 표준을 맞춰주는 게 중요하며 장애인차별법에 의해 표준을 지켜서 작업을 해줘야 함.

- 테이블만들기
    1. <table></table> 태그 : 테이블 생성태그
    2. <tr></tr> 태그 : 테이블 행 생성 태그
    3. <td></td> 태그 : 테이블 한 칸 생성 태그
    4. 예시
- 테이블 행, 열 병합
    1. colspan : 열을 병합해줍니다.(가로)
    2. rowspan : 행을 병합해줍니다.(세로)
    사용 시 병합할 열 혹은 행의 갯수를 값으로 입력해줍니다.
    3. 예시
- a태그로 페이지 내부에서 이동하기
    1. `<a href="#이름">`(name)`</a>`
    2. `<a name="이름">``</a>`
    3. 1을 누르면 2로 이동
    4. 예시
- img 태그로 이미지 만들기
    1. `<img>`태그사용
    2. `<img src="주소" alt="이름">` 방식으로 사용
    3. 예시
- list만들기 (ul/bl)
    1. UnOrderedList : `<ul>` 사용
        - type 옵션으로 모양을 정할 수 있다.
    2. OrderedList : `<ol>` 사용
        - type 옵션으로 번호형식을 정할 수 있다.
        - start 옵션으로 시작번호를 지정할 수 있다.
- 제목 만들기
    - `<h1>`~`<h6>` 태그 사용 : 숫자가 작을수록 큽니다.
- form 태그 만들기
    1. `<form>`태그 사용
        - action 옵션을 사용해 url Mapping
        - **get 방식** : method 지정 안해주면 default는 get방식
            - 주소 뒤에 ?를 기준으로 key, value값이 넘어감
            - &를 기준으로 key, value값을 구분
            - 255자 글자수 제한이 있음
            - 보안에 취약함
        - **post** 방식
            - 글자수에 제한이 없음
            - 약한 보안에 적용
    2. `<input>` 태그 
        - type 옵션을 통해 입력태그의 속성을 설정한다. ex) text, password, submit...
        - name 옵션을 사용해 이름을 결정합니다.
        - id 옵션을 사용해 id를 결정합니다.
        - placeholder 옵션을 사용해 태그안의 설명을 보여줄 수 있습니다.
        - type옵션에 hidden속성을 사용하면 페이지에 보이진 않지만 키-값을 전달할 수 있습니다.
        - search, tel, url, date, time, text 등의 태그가 있습니다.
        - required 속성을 넣으면 무조건 입력해야합니다.
        - textarea :
        - `<select>`태그와 `<option>`태그 사용해서 셀렉트 박스 만듦
        - radio, checkbox를 사용하면 선택 버튼을 만들 수 있다.

## CSS Basic


1. Internal 방식
    - class 선택자를 이용할 경우 .(classname)으로 접근해서 css를 적용해줍니다
    - 한마디로, 선택자를 이용해 css를 적용해 주는 것 입니다.

2. Inline 방식 
    - 태그 하나하나에 직접 css를 적용하는 방식 입니다

3. 외부 링크 방식
    - `<link rel="stylesheet" href="경로">`태그를 활용해서 css적용

- CSS 적용 예시

``` css 
/* 1. Internal */
<style type="text/css">
.navi {
	background: yellow; /* #003E00; */ margin-top : -15px;
	/* margin: 10 15 20px;  */
	width: 960px;
	height: 60px;
	margin-top: -15px;
}

/* 2. Inline */
<font size="4" color="red">웹표준</font>

/* 3. link */
<link rel="stylesheet" href="../css/regist.css" type="text/css">

```

- css적용 우선순위
    1. Inline 
    2. Internal
    3. 외부링크
- html/ css 적용해서 회원가입 테이블 만들어보기
    1. form태그 안에 table만들어주기 
    2. css를 통해 이쁘게 꾸며주기 
- css 접근지정자 
    1. Class : .Class이름
    2. Id : #id
    3. 태그이름 : 태그이름 

- navigation 메뉴 만들어보기 
    1. ul태그의 padding값을 조절해 네비 안에 적절히 리스트 배치 -> padding : 내용과 테두리 사이 간격을 조정해줌
    2. li태그를 inline으로 해줘야한다. -> 줄바꿈 없애줌
    3. li태그를 float : left -> 왼쪽 정렬해줌
    4. 이외에 a 태그를 hover, visited, active, focus 속성을 지정 해줍니다.








