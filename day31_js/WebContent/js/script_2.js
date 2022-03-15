// 객체 데이터
const doyeon = {
	name : '도연',
	age : 33,
	//메소드(method)
	getName: function() {
		return this.name;
	}
}

with(doyeon){
	console.log(name);
	console.log(age);
}
const herName = doyeon.getName();
console.log(herName);
console.log(doyeon.getName()); 
console.log(doyeon.name);
console.log(doyeon.age);

/*class Point {
	int x, y;
	
	public int getX() { return x; }
	public void setX(int x) { this.x = x; }
}*/

// 익명(이름이 없는) 함수
let world = function(){
	console.log("World~~~");
}

world();


// 함수 선언
function sum(a, b) { // parameters 
	return a+b;
}

let hap = sum(1, 2);
let cha = sum(10, 20);
let gob = sum(11, 22);

console.log(hap);
console.log(cha);
console.log(gob);

function returnFunc() {  // 기명(이름이 있는) 함수 
	return 1005;
}

let result = returnFunc();
console.log(result);

console.log(returnFunc());

/*function helloFunc() {
	//실행 코드
	console.log(1004);
}

// 함수 호출
helloFunc(); */

// 예약어
//let this = 'doyeon';  // SyntaxError

// 값(데이터)의 재할당 불가
const x = 10;
console.log(x);
//x = 9999;
//console.log(x);  // TypeError: Assignment to constant variable.


//변수 선언
let a = 1;
let b = 5;

console.log(a)
a = 3;
console.log(a)

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);

// Array : 배열 데이터
// 여러 데이터를 순차적으로 저장. [ ]
let  fruits =['Apple', 'Banana', 'Cherry'];
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits);

// Object : 객체 데이터
// 여러 데이터를 key: value 형태로 저장한다. { }
let user = {
	// Key : Value
	name : 'Yuna',   // cf) 'key' : 'value'
	age : 80,
	isValue : true	
}

console.log(user.name)
console.log(user.isValue)
console.log(user.age)