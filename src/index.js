
document.addEventListener("DOMContentLoaded", () => {
  fetchDogBreeds()
  fetchDogImages()

  dogContainer = document.getElementById("dog-image-container")
  dogBreedList = document.getElementById("dog-breeds")
})

let dogContainer
let dogBreedList

function fetchDogImages() {
  fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(response => response.json())
    .then(dogsArray => {
      dogsArray.message.forEach((dog) => renderDogImages(dog))
    })
}

function renderDogImages(dogUrl) {
  let dogImage = document.createElement("img")
  dogImage.src = dogUrl
// debugger
  dogContainer.appendChild(dogImage)
}

function fetchDogBreeds() {
  fetch('https://dog.ceo/api/breeds/list/all')
    .then(response => response.json())
    .then(dogsObj => {
      for (let breed in dogsObj.message) {
        renderDogBreeds(breed)
      }
    })
}

function renderDogBreeds(breed) {
  let breedListItem = document.createElement("li")
debugger
    if ((typeof breed) !== 'string') {
  debugger
      breed.values.forEach()

    }
    breedListItem.innerText = `${breed}`
  // debugger
    dogBreedList.appendChild(breedListItem)

}
