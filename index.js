let sumOfWord = 50;
let delay = 2000; // ms

let obj = {
  "arrWord" : [],
  "arrIpa" : [],
  "arrTrans" : [],
  "arrEx" : []
};
let getDataa = () => {
  arrTop = document.querySelectorAll(".contentHtml");
  arrBot = document.querySelectorAll(".hintHtml");

  obj.arrWord.push(arrTop[0].innerText);
  try{
    obj.arrTrans.push(arrTop[1].innerText);
  }catch{
    obj.arrTrans.push("no data");
  }
  try{
    obj.arrIpa.push(arrBot[0].innerText);
  }catch{
    obj.arrIpa.push("no data");
  }
  try{
    obj.arrEx.push(arrBot[1].innerText);
  }catch{
    obj.arrEx.push("no data");
  }

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

