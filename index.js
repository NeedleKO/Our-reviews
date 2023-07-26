// const personImg = document.getElementById("person-img");
// const workerImg1 = (document.getElementById("person-img").src =
//   "/workers imgs/worker1.jpg");
// const workerImg2 = document.getElementById("person-img").src = "/workers imgs/worker2.jpg";

const author = document.getElementById("author");
const job = document.getElementById("job");

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

let counter = 0;

rightBtn.addEventListener("click", () => {
  counter += 1;

  if (counter > 2) {
    counter = 0;
  }
  if (reviews[counter].id === 1) {
    author.textContent = reviews[counter].name;
    job.textContent = reviews[counter].job;
    document.getElementById("person-img").src = "/workers imgs/worker1.jpg";
  }
  if (reviews[counter].id === 2) {
    author.textContent = reviews[counter].name;
    job.textContent = reviews[counter].job;
    document.getElementById("person-img").src = "/workers imgs/worker2.jpg";
  }
  if (reviews[counter].id === 3) {
    author.textContent = reviews[counter].name;
    job.textContent = reviews[counter].job;
    document.getElementById("person-img").src = "/workers imgs/worker3.jpg";
  }

  console.log(counter);

  
});

leftBtn.addEventListener("click", () => {
  counter -= 1;
  if (counter < 0) {
    counter = 2;
  }
  if (reviews[counter].id === 1) {
    author.textContent = reviews[counter].name;
    job.textContent = reviews[counter].job;
    document.getElementById("person-img").src = "/workers imgs/worker1.jpg";
  }
  if (reviews[counter].id === 2) {
    author.textContent = reviews[counter].name;
    job.textContent = reviews[counter].job;
    document.getElementById("person-img").src = "/workers imgs/worker2.jpg";
  }
  if (reviews[counter].id === 3) {
    author.textContent = reviews[counter].name;
    job.textContent = reviews[counter].job;
    document.getElementById("person-img").src = "/workers imgs/worker3.jpg";
  }
  console.log(counter);
});
