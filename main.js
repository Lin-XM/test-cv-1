//通过css选择器找到这个元素
let html = document.querySelector("#demo");
let style = document.querySelector("#style")
//因为中文会影响css，所以需要注释
let string = `
/*你好，我是一名互联网新人，爱好是打游戏和干饭。
*接下来添加样式，第一个样式为：*/
#div1{
    border:1px solid red;
    width:400px;
    height:400px;
}
/*添加的第二个样式，就是将div变成圆形
*/
#div1{
    border-radius:50%;
    box-shadow:0 0 3px rgba(0,0,0,0.5);
    border:none;
}
/*添加第三个样式，将这两个分成左白右黑
*你可以前往这个网站调试你的渐变色：https://cssgradient.io/
*/

#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*添加两个伪元素,将其变成黑白球，然后再利用渐变形成内白/黑
*/
#div1::before{
    width:200px;
    height:200px;
    top:0;
    left:50%;
    transform: translateX(-50%);
    background: black;
    border-radius:50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
   }
#div1::after{
    width:200px;
    height:200px;
    bottom:0;
    left:50%;
    transform: translateX(-50%);
    background: white;
    border-radius:50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 50%, rgba(255,255,255,1) 100%);
    }
`;
let string2 = '';
let n = 0;
// 设置一个变量记录当前
// html.innerHTML = string.substring(0,n);  //这里给出子字符串
// 由于setTimeout只能变化一次，所以使用setInterval；
// setInterval(() => {
//     n += 1;
//     html.innerHTML = n;
// }, 1000);
// 一个扩展写法,这个能过够更好的暂停
let step = () => {
    console.log(n);
    setTimeout(() => {
        if (string[n] === '\n') {
            //如果是回车，就不搬
            string2 +='<br>'
        } else if (string[n] === ' ') { 
            //判断是不是空格
            string2 +='&nbsp'
        }
        else { 
            //如果不是回车，直接照搬
            string2 += string[n];
        } 
        // 优化代码如下
        //string2 += string[n] === '\n' ? "<br>" : string[n];
        
        //同时陷入html和css
        html.innerHTML = string2;
        style.innerHTML = string.substring(0,n);
        if (n < string.length - 1) {
            //最大n=61进入
            //最后出现undefined的问题
            n += 1;     //此时n=61
            step();
        }
        else {
            console.log('over!!')
         }
    },10);
};
step();

