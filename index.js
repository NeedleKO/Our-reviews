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
  {
    id: 4,
    name: "Marks Jagurs",
    job: "DONT HAVE ONE",
  },
];

rightBtn.addEventListener("click", () => {
  for (let i = 0; i < reviews.length; i++) {
    if (reviews[0].id === 1) {
      author.textContent = reviews[0].name;
      job.textContent = reviews[0].job;
      document.getElementById("person-img").src = "/workers imgs/worker1.jpg";
    }
    if (reviews[1].id === 2) {
      author.textContent = reviews[1].name;
      job.textContent = reviews[1].job;
      document.getElementById("person-img").src = "/workers imgs/worker2.jpg";
    }
    if (reviews[2].id === 3) {
      author.textContent = reviews[2].name;
      job.textContent = reviews[2].job;
      document.getElementById("person-img").src = "/workers imgs/worker3.jpg";
    }
    if (reviews[3].id === 4) {
        author.textContent = reviews[3].name;
        job.textContent = reviews[3].job;
        document.getElementById("person-img").src = "/workers imgs/worker3.jpg";
      }
  }
  //   document.getElementById("person-img").src = "/workers imgs/worker2.jpg";
});

// console.log(reviews[0].name);
