const meal = document.querySelector("#meal");
const area = document.querySelector("#area");
const photo = document.querySelector("#photo");
const instru = document.querySelector("#instru");
const video = document.querySelector("#video");
const btn = document.querySelector("#btn");

const changeLink = (e) => {
  return e.replace("watch?v=", "embed/");
};
const getMeal = () => {
  fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then((res) => res.json())
    .then((data) => {
      meal.innerHTML = `<h2>${data.meals[0].strMeal}</h2>`;
      area.innerHTML = `<p>${data.meals[0].strArea}</p>`;
      photo.innerHTML = `<img src="${data.meals[0].strMealThumb}">`;
      instru.innerHTML = `<p>${data.meals[0].strInstructions}</p>`;
      if (data.meals[0].strYoutube) {
        video.innerHTML = `<iframe width="949" height="534" src="${changeLink(
          data.meals[0].strYoutube
        )}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
      }
    });
};

btn.addEventListener("click", () => {
  getMeal();
});

getMeal();
