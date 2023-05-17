const inputbox = document.getElementById("inputBox");
const container = document.getElementById("container");
// let getValue;

const generateWord = (n) =>{
    let text  ="";
    const letter = "qwertyuiopasdfghjklzxcvbnm";
    for (let i = 0; i < n; i++) {
        const random =(Math.random()*25).toFixed(0);
        text += letter[random];   
    }
    return text;
}
const addPara = () => {
  let getValue = Number(inputbox.value);
  const para = document.createElement("p");
  let data = "";
  for (let i = 0; i < getValue; ++i) {
    const randomNumber  = (Math.random()*15).toFixed(0);
    data += generateWord(randomNumber);
    data += " ";
    
  }
  para.innerText = data;
  container.append(para);
};
