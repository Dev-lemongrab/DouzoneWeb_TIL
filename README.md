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
    3. `<article>` 태그, `<aside>` 태그 등을 활용해 적절히 화면에 배치 가능
    4. `<header>` 태그는 상단, `<footer>` 태그는 하단에 배치 가능
    5. `<feildset>`태그를 사용하면 화면에 딱 맞춰진 상자를 만들어준다. 
    6. `<feildset>`태그안에 `<legend>`태그를 넣으면 위에 제목을 만들어준다.

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

- css종류
    - opacity : 투명도 조절 0.0 ~ 1.0
    - border : 테두리 속성
    - margin : 선택한 것 외부와의 거리
    - padding : 선택한 것 내부 content와의 거리
    - float : 어디에 위치 시켜줄지
    - text-decoration : none 옵션으로 a태그의 밑줄을 없앨 수 있다. 
    - background ~ : 배경색 또는 그림에 다양한 옵션을 지정할 수 있다. 
    - 가상셀렉터를 통해 다양한 상황에서 css적용이 가능
        - :hover : 마우스가 올려져있을때
        - :active : 활성화가 돼있을때만(클릭하는 순간 부터 떼는 순간 까지)
        - :focus : 한번 활성화 시키면 계속(다음 클릭 전까지 활성화)

## JS Basic
    - 작업하는 페이지를 의미하는 document로 시작해서 접근 지정 
    - document.getElementById('#id') : 해당 작업페이지의 해당id의 태그 값을 불러온다.
    - .innerHTML : 지정된 태그안의 html 
    - .innerText : 저정된 태그안의 글씨
    - parseInt(변수) : int로 변경해준다.
    - 사용예시
   ```html
        <span id="countSpan">0</span> 번 클릭 &nbsp; &nbsp;
        <input type="button"  value="Click"  onclick="countIncrease()">
   ```
   ```javascript
   function  countIncrease() {
                var spanObj = document.getElementById('countSpan');
                spanObj.innerHTML = parseInt(spanObj.innerHTML) + 1;
            }
   ```
    

       
    






