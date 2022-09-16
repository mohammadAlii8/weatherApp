// ! code By MohammdaAli mirzakhani
const form = document.querySelector(".top-banner form");
const input = document.querySelector(".top-banner input");
const msg = document.querySelector(".top-banner msg");
const list = document.querySelector(".ajax-section .cities");

const apiKey = "c802ff1403fa352d8ea98bd627fa2be6";

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let inputVal = input.value;
  //   console.log(inputVal);
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;
  console.log(url);
  fetch(url)
    .then((Response) => Response.json())
    .then((data) => {
      // console.log(data);
      const { main, name, sys, weather } = data;
      const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0]["icon"]}.svg`;
      const li = document.createElement("li");
      li.classList.add("city");
      const markup = `
      <h2 class='city-name' data-name=${name},${sys.country}>
      <span>${name}</span>
      <span>${sys.country}</span>
      </h2>
     <div class='city-temp'>${Math.round(main.temp)}</div>
     <figure>
     <img class = 'city-icon' src='${icon}' alt='city'> 
     </figure>
     <figurecaption> ${weather[0]["description"]} </figurecaption>
      `;
      li.innerHTML = markup;
      list.appendChild(li);
      msg.innerHTML = "";
    })
    .catch(() => {
      msg.innerHTML = `search for valid city`;
    });
  input.value = "";
});
