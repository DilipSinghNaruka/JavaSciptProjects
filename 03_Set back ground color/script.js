const changecolor = () => {
  const optionColor = document.getElementById("box");
  const selectedColor = optionColor.value;
  const body = document.body;
  body.style.backgroundColor = selectedColor; 

};