import rand from './getRandom.js'

const ulEl = document.querySelector('ul');


for(let i=0; i < 10; i += 1){
	//console.log(i);
	const li = document.createElement('li')
	li.textContent = `list-${i + 1}`
	if( (i+1) % 2 === 0 ) {
			li.addEventListener('click', function(){
			alert(li.textContent)
			console.log(li.textContent)
		})
	}
	ulEl.appendChild(li)
}

console.log('=======================');
const kbs = rand();

console.log(kbs);

if( kbs === 0 ) {
	console.log('kbs is 0');
} else if( kbs === 2 ) {
	console.log('kbs is 2');
} else {
	console.log('rest.....');
}

console.log('=======================');
const x = 1 === 2;
const y = 'AB' === 'AB';
const z = true;

console.log(x);
console.log(y);
console.log(z);
console.log('&& : ' , x && y && z );
console.log('|| : ' , x || y || z );

console.log( y ? '참' : '거짓' );


console.log('---------------------');
const a=1;
const b = "1";
const c = 1;

console.log(a == b);
console.log(a === b);
console.log('comparison operator : ' + (a !== c))
console.log(a < c);


function isEqual(x, y) {
	return x === y;
}

console.log(isEqual(1, 1));
console.log(isEqual(a, c));

console.log('---------------------');
console.log("abc".length);

/*let x = 3;
let y = 7;

let calc = y / x;
console.log("result = " + calc);*/
//document.write(calc);

