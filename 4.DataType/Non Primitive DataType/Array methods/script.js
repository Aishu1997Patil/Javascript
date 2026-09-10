let a=[1,2,3,4,5,6]
console.log(a);

let b=a.push(7,8,9)
console.log(a);

let c=a.pop(8,9)
console.log(a);

let d=a.unshift(0)
console.log(a);

let e=a.shift()
console.log(a);

let numbers=[10,20,30,40]
let f=numbers.map((value,index)=>console.log(value))

let g=numbers.map((value,index)=>(value*2))
console.log(g);

let h=numbers.filter((value,index)=>value > 20)
console.log(h)

let i=numbers.find((value,index)=>value > 20)
console.log(i)

let j=numbers.reduce((prev,curr)=>prev+curr)
console.log(j)