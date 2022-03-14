
const a = 'Hello~';
//split : 문자를 인수 기준으로 쪼개서 배열로 반환.
//reverse : 배열을 뒤집기
//join : 배열을 인수 기준으로 문자로 병합해 반환.
const b = a.split('').reverse().join();
console.log(a);
console.log(b);

console.log('*********************');
// HTML 요소(Element) 모두 검색/찾기
const boxEls = document.querySelectorAll('.box');
console.log(boxEls);

// 찾은 요소들 반복해서 함수 실행
boxEls.forEach(function(boxEl, index){
	boxEl.classList.add( `order-${index + 1}` );
	console.log(index, boxEl);
});


console.log('==여기 새로 값 얻어오기/ 셋팅하기==');

// HTML 요소(Element) 1개 검색/찾기
const boxEl = document.querySelector('.box');
console.log(boxEl.textContent);//
boxEl.textContent = 'Happy virus';
console.log(boxEl.textContent);
// HTML 요소에 적용할 수 있는 메소드
//boxEl.addEventListener();
// 인수(Arguments)를 추가 가능
//boxEl.addEventListener(1, 2);  //인수 2개
boxEl.addEventListener('click', function(){
	console.log('click!!')
	//alert('Click~~~~');
	boxEl.classList.add('active');
	console.log(boxEl.classList.contains('active'));
	
	boxEl.classList.remove('active');
	console.log(boxEl.classList.contains('active'));
});  







