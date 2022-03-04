// このファイルに解答を書いてください。
// 問題文はindex.htmlにあります。


// Q 1
console.log("Hello World");

// Q 2
let q2 = document.getElementById("q2-text");
q2.textContent = ("saki");

// Q 3
let q3 = document.getElementById("q3-text");
q3.style.color = "red";

// Q 4 (難)
// 「for of」を使います。
let q4 = document.getElementsByClassName("q4-text");
for(i=0;i<q4.length;i++){
    q4[i].style.color = "pink";
}

// Q 5
let q5 = document.querySelectorAll(".q5-text");
for(i=0;i<q5.length;i++){
    q5[i].style.backgroundColor = "blue";
}

// Q 6
let q6 = document.querySelector("#q6-text");
q6.addEventListener("mouseover",function(){
    console.log(q6);
    q6.style.color = "pink";
})
// Q 7
let q7 = document.querySelector("#q7-text");
q7.addEventListener("mouseover",function(){
    console.log(q7);
    q7.style.color = "red";
    q7.style.backgroundColor = "yellow";
})


// Q 8
let q8 = document.getElementById("q8-text");
q8.addEventListener("mouseleave",function(){
    q8.style.backgroundColor = " ";
})

// Q 9
let q9_input = document.getElementById("q9-input");
let q9_btn = document.querySelector("#q9-btn");
let q9_result = document.querySelector("#q9-result");
q9_btn.addEventListener("click",function(){
    q9_result.textContent = q9_input.value;
})

// Q 10
let q10_btn = document.querySelector(".q10-btn");
q10_btn.addEventListener('click', function () {
  let q10_input = document.querySelector('#q10-input');
  let q10_result = document.querySelector('#q10-result');

  if (q10_input.value < 20) {
    q10_result.textContent = '20歳未満の方の利用は禁止です。';
  } else {
    q10_result.textContent = q10_input.value;
  }
})

// Q 11
let q11btn = document.querySelector('.q11-btn');
q11btn.addEventListener('click', function () {
  let q11input = document.querySelector('#q11-input-age');
  let q11resultage = document.querySelector('#q11-result-age');
  let q11inputname = document.querySelector('#q11-input-name');
  let q11resultname = document.querySelector('#q11-result-name');


  if (q11input.value < 20) {
    q11resultage.style.color = 'red';
    q11resultage.textContent = '20歳未満の方の利用は禁止です。';
  } else {
    q11resultage.style.color = '';
    q11resultage.textContent = q11input.value;
  }
  
  if (q11resultname.textContent === '') {
    q11resultname.style.color = 'red';
    q11resultname.textContent = '名前が空欄です';
  } else {
    q11resultname.style.color = '';
    q11resultname.textContent = q11inputname.value;
  }

})


// Q 12
let q12btn = document.querySelector(".q12-btn");
q12btn.addEventListener('click', function(){
  let q12 = document.createElement("p");
  q12.textContent = this.textContent;
  let q12result = document.querySelector(".q12-result");
  q12result.appendChild(q12);
})

// Q 13
// 飛ばしていいです。
let q13btn = document.querySelector('.q13-btn');
q13btn.addEventListener( 'click',function(){
  let apple = document.createElement("li");
  apple.textContent = "リンゴ";
  let q13 = document.getElementById('q13-box');
  q13.insertBefore(apple,q13.firstElementChild);
})

// q14
let q14btn = document.querySelector(".q14-btn");
q14btn.addEventListener( 'click', function(){
  let chicken = document.getElementById("chicken");
  chicken.remove();
})



// Q 15 (難)
// switchまたはifを使います。
// 要素.href = 'https://google.com';
// でリンク先を追加できます。
let q15btn = document.getElementsByClassName('q15-btn');
for (q15btn of q15btns){
  q15btn.addEventListener( 'click' , function(){
    let link = document.createComment("a");
    let q15list = document.querySelector(".q15-link-list");
 if(this.textContent === 'Google' ){
   link.href = 'https://google.com';
   link.textContent = this.textContent;
 }else if(this.textContent === 'YouTube'){
   link.href = 'https://youtube.com';
   link.textContent = this.textContent;
 }else if(this.textContent === 'Amazon'){
   link.href = 'https://amazon.com';
   link.textContent = this.textContent;
 }else{
   alert('不正な操作です');
 }
 q15list.appendChild(link);



})
}