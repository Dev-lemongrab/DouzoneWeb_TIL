/** day33.js  */

// 타이머 함수
// setTimeout(함수, 시간) : 일정 시간 후 함수 실행
// setInterval(함수, 시간) : 시간 간격마다 함수 실행
// clearTimeout() : 설정된 Timeout 함수를 종료
// clearInterval() : 설정된 Interval 함수를 종료

/*const timer = setTimeout(function(){
	console.log('Hello JS!!')
}, 3000)

const h1El = document.querySelector('h1')
h1El.addEventListener('click', ()=> {
			clearTimeout(timer)
})*/

// 콜백(Callback) : 함수의 인수로 사용되는 함수
// setTimeout(함수, 시간)

function timeout(callback) {
	setTimeout(()=> {
			console.log('Hello JS!!')
			callback()
		}, 3000)
}

timeout(() => { 
	console.log('Done')//callback 함수를 인수로 받는거네 
})
timeout(() => {
	console.log('Done2')
})

/*
// cf ) 작업의 순서를 원하는 형태로 진행 시키고자 할때
function timeout() {
	setTimeout(()=> {	console.log('Hello JS!!')	}, 3000)
}

timeout()
console.log('Done')
*/

/*
// 함수
function sub(x, y) {
	
	//console.log('sub.length : ' + sub.length) // 0
	//console.log('arguments.length : ' + arguments.length)
	//return arguments[0]
	return x + y;
}

console.log(sub())  // NaN
console.log(sub(7, 3))
console.log(sub(7, 3, 10, 33))  // 나머지 버린다.

*/