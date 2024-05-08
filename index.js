const onlySection = document.querySelector("#section");
const myList = onlySection.querySelector("ul");
const repositories = json.parse;

fetch(api_key=live_59tILUwO8GUppmwJdzaXpbh457s0r1o79I4ngwX8BU4T8vzHtQ1CgKytNapcRhCN)
    .then((res) => {
        if (!res.ok) {
        throw new Error("Something went wrong 😢");
        }
        return res.json();
    })
 
    .catch((error) => {
        const errorElement = document.createElement("p");
        errorElement.innerText = error.message;
        onlySection.appendChild(errorElement);
  });

    