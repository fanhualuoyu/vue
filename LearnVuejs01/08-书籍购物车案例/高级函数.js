//filter中的回调函数有一个要求：必须返回一个boolean值
//true：当返回true时，函数内部会自动将这次回调的n加入到新的数组中
//false:当返回false时，函数内部会过滤掉这次的n
const nums = [10,20,111,222,444,40,50]


//(一)
//1.filter函数的使用
let newNums = nums.filter(function (n) {
  return n < 100
})

//2.map函数的使用
let new2Nums = newNums.map(function (n) {
  return n * 2
})

//3.reduce函数的使用：对数组中所有的内容进行汇总
let new3Nums = new2Nums.reduce(function (preValue,n) {
  return preValue + n
},0)


//(二)
let total = nums.filter(function (n) {
  return n < 100
}).map(function (n) {
  return n * 2
}).reduce(function (preValue,n) {
  return preValue + n
},0)


//(三)
let total2 = nums.filter(n => n < 100).map(n => n*2).reduce((pre,n) => pre + n,0)
console.log(total2)