const temp = document.querySelector(".weather1");
const locationm = document.querySelector(".weather2 p");
const time = document.querySelector(".weather2 span");
const icon = document.querySelector(".weather3 img");
const condition = document.querySelector(".weather3 span");
const getValue = document.querySelector(".inputbox");
const button = document.querySelector("form");
// let store = "jaipur" ;

let target = "jaipur";
const fetchdata = async () => {
  // const url = `https://api.weatherapi.com/v1/current.json?key=1e0847e73e6e41e0b2853814230405&q=${target}`;
  // const response = await fetch(url);
  // const data = await response.json();
  const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${target}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "49597c12a5msha330542511643ffp18049djsnf15d892192eb",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };

//   try {
//     const response = await fetch(url, options);
//     const result = await response.text();
//     console.log("ha yahi");
//     console.log(result);
//   } catch (error) {
//     console.error(error);
//   }
//   try {
//     function updateTime() {
//       const now = new Date();
//       const year = now.getFullYear();
//       const month = now.getMonth() + 1; // Month index starts from 0
//       const day = now.getDate();
//       const hours = now.getHours();
//       const minutes = now.getMinutes();
//       const seconds = now.getSeconds();
//       const dateString = `${day}/${month}/${year}`;
//       const timeString = `${hours}:${minutes}:${seconds}`;
//       time.textContent = `Time:- ${timeString} Date :- ${dateString}`;
//     }

//     setInterval(updateTime, 1000);

//     updateDom(
//       data.current.temp_c,
//       data.location.name,
//       data.current.condition.icon,
//       data.current.condition.text
//     );

//     console.log(data);
//     // temp.textContent = data.current.temp_c;
//     temp.textContent = temp;
//     locationm.textContent = data.location.name;
//     icon.src = data.current.condition.icon;
//     condition.textContent = data.current.condition.text;
//   } catch (error) {
//     alert("location not found");
//   }
// };

// function updateDom(temperate, city, emoji, text) {
//   temp.innerText = temperate;
//   locationm.innerText = city;
//   icon.src = emoji;
//   condition.innerText = text;
// }

// button.addEventListener("submit", (event) => {
//   event.preventDefault();
//   target = getValue.value;
//   console.log(target);
//   fetchdata(target);
// });
}
fetchdata();
