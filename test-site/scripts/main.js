// 点击图片换另一张图片
let myImage = document.querySelector('img');
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/cranberries.jpg') {
      myImage.setAttribute('src', 'images/cranberries2.jpg');
    } else {
      myImage.setAttribute('src', 'images/cranberries.jpg');
    }
}

// 欢迎信息
function setHeading(name) {
    let myHeading = document.querySelector('h1');
    myHeading.textContent = 'The angel has passed away~' + name + '！';
  }
  
  function setUserName() {
    let myName = prompt('请输入你的名字');
    localStorage.setItem('name', myName);
    setHeading(myName);
  } 
  
  let storedName = localStorage.getItem('name');
  if(!storedName) {
     setUserName();
  } else {
     setHeading(storedName);
  }
  
  let myButton = document.querySelector('button'); 
  myButton.onclick = setUserName;