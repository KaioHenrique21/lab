import { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    fetch('http://localhost:3000/static/produtos.json')
      .then((response) => response.json())

  }, []);

  let time = 5000,
    currentImageIndex = 0,
    images = document
      .querySelectorAll("slide"),
      max = images.length;

  function nextImage() {
    images[currentImageIndex]
      .classList.remove("selected")

    currentImageIndex++

    if (currentImageIndex >= max)
      currentImageIndex = 0

    images[currentImageIndex]
      .classList.add("selected")
  }

  function start() {
    setInterval(() => {
      // troca de image
      nextImage()
    }, time)
  }

  window.addEventListener("load", start)

}

export default App;
