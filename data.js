const jokeContainer = document.getElementById("Joke");
const btn = document.getElementById("btn");
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit";

let getJoke = () => {
    jokeContainer.classList.remove("fade");
    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.type === "single") {
                jokeContainer.textContent = data.joke;
            } else if (data.type === "twopart") {
                jokeContainer.innerHTML = `<strong>${data.setup}</strong><br>${data.delivery}`;
            }
            jokeContainer.classList.add("fade");
        })
        .catch(error => console.log(error));
};

btn.addEventListener("click", getJoke);
getJoke();
