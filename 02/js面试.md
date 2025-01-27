# JS学习

1. ### 变量提升 var

   ```js
   clg(a)
   var a = 12
   a = 13
   clg(a)
   ```

   

   第一个：a = undefined

   第二个：a = 13

   解析：

   ​	全局作用域：栈内存

   ​	1. 变量提升

   ​	
