/* eslint linebreak-style: ["error", "windows"] */
import './scss/main.scss'

document.querySelector('.choose-player-buttons').addEventListener('click', (e) => {
  console.log(e.target.classList.toggle('active'))
  
  document.querySelector(".difficulty-and-second-player").classList.toggle('active')
})

document
  .querySelector(".difficulties")
  .addEventListener("click", e => {
    console.log(e.target.classList.toggle("active"));
  });