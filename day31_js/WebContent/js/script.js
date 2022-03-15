// String : 문자 데이터 , ' ', " "
let myName= "이도연";
let email = 'ai.edu.kingsmile@gmail.com';
//let comb = '안녕, ' + myName + "!!!!";
let comb = `반가워!! ${ myName } !!!` ;  // `string ${ 변수 }`

// Number : 숫자 데이터 
let number = 350;
let opacity = 1.57;

// Boolean : 참거짓, 불린 데이터
checked = true;   // let, const 안하면 var 로 인식함
isShow = false;

// Undefined : 값이 할당되지 않은 상태를 나타냄
let undef;
let obj = { age : 33 }

// Null : 어떤 값이 의도적으로 비어있음을 의미
let empty = null;
console.log(empty);

console.log(undef);
console.log(obj);

console.log(checked);
console.log(isShow);

console.log(number);
console.log(opacity);

console.log(myName);
console.log(email);
console.log(comb);

//let  fruits =['Apple', 'Banana', 'Cherry'];

/*
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits);
*/
console.log("------------------")
/*console.log(new Date('2022-03-13').getDay() );*/  // 0, 일요일
console.log(new Date('2022-03-15').getDay() );  // 2, 화요일
console.log(new Date('2022-03-18').getDay() );  // 5, 금요일

/*console.log("------------------")
let x =999;
var y = 888;
const z = 0;*/

/*let x = 9;
const y = 7;  //*/
//let x = 55;
var y = 66;

console.log(x); 
console.log(y);
console.log(z);

//x = 888;
//y = 999;  // const 변수는 값 변경 금지

console.log(x); 
console.log(y);
/*const hello= ['hi'];
var hello2 = '안녕하세요';*/

/*console.log('top : ' + name);*/

function sayHello() {
	//let name = 'aa';
	var name = 'bb';
	return name;
}

let name='gildong';
/*var name='gildong';*/
console.log(name);   // gildong
console.log(sayHello());  //let : aa , var : 

/*console.log(hello); 
console.log(hello2); */

const hello= ['hi'];
var hello2 = '안녕하세요';


//var name;
/*let name='yuna';
console.log(name);*/