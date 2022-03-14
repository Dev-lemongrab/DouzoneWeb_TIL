//객체 데이터
const ys = {
	name : 'ys',
	age : 33,
	//method
	getName:function() {
		return this.name;
	}
}
const herName = ys.getName();
console.log(herName);
console.log(ys.getName());
/*
class Point {
	int x, y;
	public int getX() {return x;}
	public void setX(int x) {this.x = x;}
}
*/
//익명 함수
let world = function () {
	console.log("World~~~~~!!");
}
world();

//함수선언
function sum(a,b) {
	return a+b;
}
let hap = sum(1,2);
let cha = sum(10,20);
let gob = sum(11,22);

console.log(hap);
console.log(cha);
console.log(gob);

function returnFunc() {//기명(이름이 있는) 함수
	return 1005;
}
let result = returnFunc();
console.log(result);

function helloFunc() {
	//실행코드 
	console.log(1004);
}
//함수호출
helloFunc(); 

//예약어
//let this = 'doyeon'; //SyntaxError


//값의 재할당 불가 
const x = 10;
console.log(x);
//x = 9999;
//console.log(x);

//변수선언
let a = 1;
let b = 5;

console.log(a);
a = 3;
console.log(a);



console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);


//Array : 배열 
//여러 데이터를 순차적으로 저장 []
let fruits = ['Apple','Banana', 'Cherry']
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits);


let user = {
	//key : Value
	name : 'Yuna',//cf) 'key' : 'value'
	age : 80,
	isValue : true
}

console.log(user.name);
console.log(user.age);
console.log(user.isValue);