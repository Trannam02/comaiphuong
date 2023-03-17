let obj = {
  "arrWord" : [],
  "arrIpa" : [],
  "arrTrans" : [],
  "arrEx" : []
};
let sumOfWord = 50;
let delay = 2000; // ms
let getDataa = () => {
  arrTop = document.querySelectorAll(".contentHtml");
  arrBot = document.querySelectorAll(".hintHtml");

  obj.arrWord.push(arrTop[0].innerText);
  obj.arrTrans.push(arrTop[1].innerText);
  obj.arrIpa.push(arrBot[0].innerText);
  obj.arrEx.push(arrBot[1].innerText);

  but = document.querySelector(".knowButton");
  if(but){
    but.click();
  };
}
let inkk = setInterval(getDataa, delay);
setTimeout(()=> {
  clearInterval(inkk);
  console.log("DONE! Please log obj to see result.");
}, sumOfWord*delay)

