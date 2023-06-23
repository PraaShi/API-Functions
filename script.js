const dogImageDiv = document.getElementById('dogImage')
// https://dog.ceo/api/breads/image/random
console.log('run first')
const dogButton = document.getElementById('dogButton')
const getNewDog = () =>{
fetch('https://dog.ceo/api/breeds/image/random')
  .then(response => response.json())
  .then(json => {console.log(json.message)
  dogImageDiv.innerHTML = `<img src='${json.message}' height=300 width=300/>`})
}
  dogButton.onclick = () =>getNewDog() 
  console.log('run third')
