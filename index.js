const onlySection = document.querySelector("#section");
const myList = onlySection.querySelector("ul");
console.log(onlySection);
console.log(myList);

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
    const dogUrl = data[0].url;
    const dogImage = document.createElement("img");
    dogImage.src = dogUrl;
    myList.appendChild(dogImage);
    console.log(dogUrl);
    console.log(data);
  })

  .catch((error) => {
    const errorElement = document.createElement("p");
    errorElement.innerText = error.message;
    onlySection.appendChild(errorElement);
  });
