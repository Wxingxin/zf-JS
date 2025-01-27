// // add two numbers  and * 10 and / 2
// //sum is function and 代表这个函数
// function sum(n, m){
//   //行参默认处理，：如果没有传递行参，给予一个默认值
//   if(n == undefined){
//     n = 0//下面的更严谨因为： NaN == undefined  --》true
//   }
//   if(typeof m === 'undefined'){
//     m = 0
//   }
//   let result = n + m
//   result *= 10
//   result /= 2
//   console.log(result)
// }
// console.log(sum)//函数本身
// sum(10, 20)//函数运行起来
// //行参的细节：行参定义几个和要传递的没有一定的关系
// //创建的时候我们设置了行参变量，但执行的时候没有穿的，默认是undefined
// sum(10)
// sum(10, 20, 30)
// let n = 10 + 10
// n = n *10
// n = n / 2

//函数的返回值
//函数执行的时候，函数体内部创建的变量我们是无法获取和操作的，如果想要获取内部的信息，
//我们要基于return的返回机制，把信息返回才可以
// function sum(n, m){
//   let result = n + m
//   //return的一定是值，此处是把return变量存储的值返回给外面
//   return result//==》return 30
// }
// let AA = sum(10, 20)
// console.log(AA)//30
// //如果没有返回值-------对比一下
// function sum1(n, m){
//   let result = n +m
// }
// let BB = sum1(10, 20)//没有写return，函数默认返回undefined
// console.log(BB)
// //项目中常用的
// function sum2(n, m){
//   if(n === undefined || m === undefined){
//     //函数体用到return，后面的代码不再执行
//     return;
//   }
//   let result = n + m
// }


// document.body.onclick = function(){}
// setTimeout(function(){}, 1000)//设置定时器，1000ms后执行匿名函数
// //匿名函数：自定义函数，创建完一个匿名函数，紧接着就把当前的函数加上小括号执行
// (function(n){
// // 100 => n
// })(100)