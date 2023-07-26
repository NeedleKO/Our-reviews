const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const randomBtn = document.querySelector(".randomBtn");
const rightBtn = document.querySelector(".rightBtn");
const leftBtn = document.querySelector(".leftBtn");



const reviews = [
  {
    id: 1,
    name: "Jenna Bareina",
    job: "THE VISIONARY",
  },

  {
    id: 2,
    name: "Alicia Fieldman",
    job: "THE DESIGNER",
  },
  {
    id: 3,
    name: "Frank Zappa",
    job: "THE PHOTOGRAPHER",
  },
];

// let randomGenerated = Math.floor(Math.random() * reviews.length);
// console.log(randomGenerated);

let counter = 0;

rightBtn.addEventListener("click", () => {
  counter += 1;

  if (counter > 2) {
    counter = 0;
  }
  if (reviews[counter].id === 1) {
    author.textContent = reviews[counter].name;
    job.textContent = reviews[counter].job;
    info.textContent =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum consequatur, iure perspiciatis illo sunt placeat similique labore ab doloribus ratione quis voluptas non voluptatum vero blanditiis delectus dolore in tenetur.";
    document.getElementById("person-img").src = "/workers imgs/worker1.jpg";
  }
  if (reviews[counter].id === 2) {
    author.textContent = reviews[counter].name;
    job.textContent = reviews[counter].job;
    info.textContent =
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores nobis enim ut unde perspiciatis, dolores eos fugiat mollitia sint at nisi culpa molestias illo dolor, quos, voluptatibus a aut alias.";
    document.getElementById("person-img").src = "/workers imgs/worker2.jpg";
  }
  if (reviews[counter].id === 3) {
    author.textContent = reviews[counter].name;
    job.textContent = reviews[counter].job;
    info.textContent =
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos libero excepturi distinctio odio iure? Natus ipsum, iure fugit rem similique optio alias porro distinctio reprehenderit.";
    document.getElementById("person-img").src = "/workers imgs/worker3.jpg";
  }
});

leftBtn.addEventListener("click", () => {
  counter -= 1;
  if (counter < 0) {
    counter = 2;
  }
  if (reviews[counter].id === 1) {
    author.textContent = reviews[counter].name;
    job.textContent = reviews[counter].job;
    info.textContent =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum consequatur, iure perspiciatis illo sunt placeat similique labore ab doloribus ratione quis voluptas non voluptatum vero blanditiis delectus dolore in tenetur.";
    document.getElementById("person-img").src = "/workers imgs/worker1.jpg";
  }
  if (reviews[counter].id === 2) {
    author.textContent = reviews[counter].name;
    job.textContent = reviews[counter].job;
    info.textContent =
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores nobis enim ut unde perspiciatis, dolores eos fugiat mollitia sint at nisi culpa molestias illo dolor, quos, voluptatibus a aut alias.";
    document.getElementById("person-img").src = "/workers imgs/worker2.jpg";
  }
  if (reviews[counter].id === 3) {
    author.textContent = reviews[counter].name;
    job.textContent = reviews[counter].job;
    info.textContent =
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos libero excepturi distinctio odio iure? Natus ipsum, iure fugit rem similique optio alias porro distinctio reprehenderit.";
    document.getElementById("person-img").src = "/workers imgs/worker3.jpg";
  }
});
//random btn logic
randomBtn.addEventListener("click", () => {
  let randomGenerated = Math.floor(Math.random() * reviews.length);
  console.log(randomGenerated);
  if (reviews[randomGenerated].id === 1) {
    author.textContent = reviews[randomGenerated].name;
    job.textContent = reviews[randomGenerated].job;
    info.textContent =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum consequatur, iure perspiciatis illo sunt placeat similique labore ab doloribus ratione quis voluptas non voluptatum vero blanditiis delectus dolore in tenetur.";
    document.getElementById("person-img").src = "/workers imgs/worker1.jpg";
  }
  if (reviews[randomGenerated].id === 2) {
    author.textContent = reviews[randomGenerated].name;
    job.textContent = reviews[randomGenerated].job;
    info.textContent =
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores nobis enim ut unde perspiciatis, dolores eos fugiat mollitia sint at nisi culpa molestias illo dolor, quos, voluptatibus a aut alias.";
    document.getElementById("person-img").src = "/workers imgs/worker2.jpg";
  }
  if (reviews[randomGenerated].id === 3) {
    author.textContent = reviews[randomGenerated].name;
    job.textContent = reviews[randomGenerated].job;
    info.textContent =
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos libero excepturi distinctio odio iure? Natus ipsum, iure fugit rem similique optio alias porro distinctio reprehenderit.";
    document.getElementById("person-img").src = "/workers imgs/worker3.jpg";
  }
})