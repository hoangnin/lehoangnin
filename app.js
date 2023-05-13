/* 
1	Let,const	
2	Template Literals
3	Multi—line String
4	Arrow  function (arrow: mũi tên)
5	Classes	
6	Default parameter values
7	Destructuring
8	Rest parameters
9	Spread	
10	Enhanced object literals
11	Tagged template literal
12	Modules	
*/


// //4. arrow function
// const logger = function(log){
//   console.log(log)
// }
// logger('lenin')
// // arrow function được viết như sau:
// const logger1 = (log) => {
//   console.log(log)
// }
// logger1('test')
// // ngắn gọn hơn: 
// const sum = (a,b) => a+b //return mọi thứ sau dấu arrow (trừ dấu ngoặc nhọn)
// // nếu muốn return object
// const sum1 = (a,b) => ({a:a, b:b})



// 10	Enhanced object literals (3 việc mà nó có thể làm được)
// 1.định nghĩa key: value cho object (ngắn gọn hơn)
// 2.định nghĩa method cho object
// 3.định nghĩa key cho object dưới dạng biến

var name  = 'Javascript'
var price = 1000
// biến phải trùng tên 
var course = {
  // 1.định nghĩa key: value cho object (ngắn gọn hơn)
  name,
  price,
  // 2.định nghĩa method cho object
  // getName: function(){
  //   return name
  // }
  getName(){
    return name
  }
}
console.log(course.getName())

var fieldName = 'name'
var fieldPrice = 'price'

const course1 = {
  [fieldName]: 'Javascipt',
  [fieldPrice]: 2000
}
console.log(course1)




function arrToObj(arr) {
  return arr.reduce((acc, [key, value]) => ({...acc,[key]: value}),{})
}
console.log(arrToObj)
const obj1 = arrToObj([
  ['name', 'Son Dang'], 
  ['age', 21], 
  ['address', 'Ha Noi']
])
console.log(obj1)

