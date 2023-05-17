// const getColor = () =>{
//     const randomNumber = Math.floor(Math.random(16)*16777215);
//     const randomCode = "#" + randomNumber;
//     document.getElementById("para").innerText = randomCode;
//     document.body.style.backgroundColor = randomCode;
// }

// document.getElementById("btn").addEventListener(
//     "click",getColor
// )

// getColor();

const tryy = () => {
  const randomNumber = Math.floor(Math.random(16) * 16777215);
  const haxa = "#" + randomNumber.toString();
  document.body.style.backgroundColor = haxa;
  document.getElementById("para").innerText = haxa;

//   console.log(document);
};
document.getElementById("btn").addEventListener("click",tryy);
tryy();
