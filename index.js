const firstSection = document.querySelector("#section1");
const myList = firstSection.querySelector("ul");
console.log(firstSection);
console.log(myList);
const secondSection = document.querySelector("#section2");
const otherList = secondSection.querySelector("ul");

fetch(
  "https://api.thedogapi.com/v1/images/search?limit=3&has_breeds=3&api_key=live_59tILUwO8GUppmwJdzaXpbh457s0r1o79I4ngwX8BU4T8vzHtQ1CgKytNapcRhCN"
)
  .then((res) => {
    if (!res.ok) {
      throw new Error("Something went wrong 😢");
    }
    return res.json();
  })
  .then((data) => {
    const dogUrl = data[0].url;
    const dogImage = document.createElement("img");
    dogImage.src = dogUrl;
    myList.appendChild(dogImage);
    console.log(dogUrl);
    console.log(data);

    const dogBreed = data[0].breeds[0].name;
    const breedName = document.createElement("p");
    breedName.setAttribute("id", "breedOne");
    breedName.innerText = dogBreed;
    myList.appendChild(breedName);
  })

  .catch((error) => {
    const errorElement = document.createElement("p");
    errorElement.innerText = error.message;
    onlySection.appendChild(errorElement);
  });

fetch(
  "https://api.thedogapi.com/v1/images/search?limit=1&has_breeds=1&api_key=live_59tILUwO8GUppmwJdzaXpbh457s0r1o79I4ngwX8BU4T8vzHtQ1CgKytNapcRhCN"
)
  .then((res) => {
    if (!res.ok) {
      throw new Error("Something went wrong 😢");
    }
    return res.json();
  })
  .then((data) => {
    for (let i = 0; i < 3; i++) {
      var dogUrl = data[i].url;
      var dogImage = document.createElement("img");
      dogImage.src = dogUrl;
      otherList.appendChild(dogImage);
    }
  })
  .catch((error) => {
    const errorElement = document.createElement("p");
    errorElement.innerText = error.message;
    onlySection.appendChild(errorElement);
  });
