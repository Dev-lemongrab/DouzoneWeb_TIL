// day32_2.js

// 타이머 함수
// setTimeout(함수, 시간) : 일정 시간 후 함수 실행
// setInterval(함수, 시간) : 시간 간격마다 함수 실행
// clearTimeout() : 설정된 Timeout 함수를 종료
// clearInterval() : 설정된 Interval 함수를 종료


// 콜백(Callback) : 함수의 인수로 사용되는 함수
// setTimeout(함수, 시간)


// 호이스팅(Hoisting) : 함수 선언부가 유효범위 최상단으로 끌어올려지는 현상

// 화살표(Arrow) 함수(Function)
// ( ) => { }  vs   function( ){ }
const double = function(x) {
	return x * 2
}
console.log('double : ' , double(7) )

/*const doubleArrow = (x) => {
	return x * 2
}*/
//const doubleArrow = (x) => x * 2
//const doubleArrow = x => [1, 2, 3]
// ( ) => { } 
const doubleArrow = x => ( { name: 'kingsmile' } )
console.log('doubleArrow : ' , doubleArrow(3) )


const mul = function(x, y) {
	return x * y
}
console.log('mul : ',  mul(3, 4) )

const mulArrow = (x, y) =>  x * y
console.log('mulArrow : ',  mulArrow(5, 4) )

const show = function() {
	return "show!!"
}
console.log('show : ', show() )
// 인수(파라미터) 없는 경우
const showArrow = () => "showArrow!!"
console.log('showArrow : ', showArrow() )


// 함수 
function sub() {
	console.log(arguments)
	return arguments[0]
}

console.log(sub(7, 3))

const hap = function(x, y) { // 함수 정의
	if( x < 2 ) {
		return
	}
	return x + y
	//console.log("hahaha~")
}

console.log( 'hap = ' + hap(1, 200) )

function plus(x, y) { // 함수 정의
	return x + y
}

const d = plus(2, 3)
const e = plus(12, 13)

console.log(d)
console.log(e)
console.log(d + e)

console.log(plus(3, 5) + plus(1, 3))




function sum(x, y) { // 함수 정의
	console.log(x + y);
}

sum(10, 2)
sum(3, 12)


// 형 변환(Type Conversion)
// Truthy(참하고 같은 값)
// true, {}, [], 1,2, 'false', -12, '12.34',...
// Falsy(거짓하고 같은 값)
// false, '', null, undefined, 0, -0, NaN
const b = 1
const c = '1'

console.log( b == c )

// 변수 유효범위 - var, let, const 
function scop() {  // 함수 정의
	console.log(a)
	if(true) {
		var a = 123
	}
}

scop(); // 함수호출

//var x = 12.34 ;
//console.log(x);