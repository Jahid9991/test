const togglerIcon = document.querySelector(".navbar-toggler-icon"),
  firstHr = document.querySelector("#first-hr"),
  secondHr = document.querySelector("#second-hr"),
  hamButton = document.querySelector(".navbar-toggler-icon");
let i = 0;
togglerIcon.addEventListener("mousedown", () => {
  console.log(firstHr, secondHr);

  if (i == 0) {
    hamButton.style.transform = "rotate(90deg)";
    i = 1;
  } else {
    hamButton.style.transform = "rotate(-0deg)";

    i = 0;
  }
});

const data = [
  { 
    img: "./assets/img/img3.png",
    role: "Teacher",
    category: 'teacher',
    title: "Dinajpur Math Club",
    description:
      "Over Rangpur divisions I Arranged Olympiads- BdMO, BdPHO and Programming, Robotics Camp, KL-Yes (Study Abroad) Program. During these six years Every Friday, I taught the students all the math topics free.",
  },
  {
    img: "./assets/img/img3.png",
    role: "Books",
    category: 'books',
    title: "Math Olympiad Books for A level students",
    description:
      "I have written an olympiad compitition mathematics book for those who like to go for BdMO(Bangladesh Mathematics Olympiad)",
  },
  {
    img: "./assets/img/img3.png",
    role: "Olympiads",
    category: 'others',
    title: "National Mathematics Olympiad, 2022",
    description:
      "From my childhood i am attached with mathematical olympiads. I have paid a volunteer work as a academic team member to evaluate the test exam.",
  },
  {
    img: "./assets/img/img3.png",
    role: "Olympiads",
    category: 'others',
    title: "Physics Olympiad, 2022",
    description:
      "From my childhood I am attached with Physics Olympiads. I have paid a volunteer work as a academic team member to evaluate the test exam.",
  },
  {
    img: "./assets/img/img3.png",
    role: "Teacher",
    category: 'teacher',
    title: "Dinajpur Math Club",
    description: "",
  },
  {
    img: "./assets/img/img3.png",
    role: "School Teaching",
    category: 'teacher',
    title: "School visit, 2017",
    description:
      "I visited a lots of school to teach children all the enjoyable stuffs in mathematics that the fear of mathematics cut out from their head.",
  },
  {
    img: "./assets/img/img3.png",
    role: "Programming Camp",
    title: "BdOSN Hello Programming Camp",
    description:
      "With the help of BdOSN I visited a lot of district to spread the basics of Programming and help the teenage girls to know the new generation that the upcoming world based on computer & you must have to prepare for this.",
  },
  {
    img: "./assets/img/img3.png",
    role: "Tutor",
    category: 'teacher',
    title: "Math, Science and ICT Tutor",
    description:
      "Conducted classes for a small group of students and grading their tests. Taught them the fundamentals of mathematics, Experience them with fun of physics & ICT.",
  },
  {
    img: "./assets/img/img3.png",
    role: "British Council Teacher",
    category: 'teacher',
    title: "Kano Programming Coding Club",
    description:
      "At 2019 to 2020 I taught over 1000 students about the basic fundamental of programming or micro:bit.",
  },
  {
    img: "./assets/img/img3.png",
    role: "Social work",
    title: "World Orphan's Day- 2019",
    description:
      "Though loving children like moon and back, I have a soft corner for the orphan child. I celebrate time with the orphan's and street child.",
  },
  {
    img: "./assets/img/img3.png",
    role: "Science Fair",
    title: "Science fair, 2017",
    description:
      'From 2017 to 2020 I regularly attend science fair on the banners of "Dinajpur Math Club" and get many times first prizes.',
  },
  {
    img: "./assets/img/img3.png",
    role: "Program Anchoring",
    title: "Child Foundation Program",
    description:
      "In that foundation to help street children who deserve to study, eat healthy food and be hygienic. We aimed to meet the targets of SDG in the education of children by 2030.",
  },
  {
    img: "./assets/img/img3.png",
    role: "Program Anchoring",
    title: "Child Foundation Program",
    description:
      "In that foundation to help street children who deserve to study, eat healthy food and be hygienic. We aimed to meet the targets of SDG in the education of children by 2030.",
  },
  {
    img: "./assets/img/img3.png",
    role: "Leadership Programme",
    title: "BYLC Youth leadership summit",
    description:
      "YLS is three days intensive leadership training on the core challenges encountered by youth leaders. The workshop focused on developing essential aspects of leadership such as critical thinking.",
  },
  {
    img: "./assets/img/img3.png",
    role: "Leadership Programme",
    title: "NYLC Youth leadership summit",
    description:
      "YLS is one days intensive leadership training on the core challenges encountered by youth leaders. The workshop focused on developing essential aspects of leadership such as critical thinking.",
  },
  {
    img: "./assets/img/img3.png",
    role: "Campus Resilience",
    title: "SAVE-HSTU chapter",
    description:
      "Office ipsum you must be muted. To dive creep productive only will read. Eco-system standup search pivot awareness today web discussion this centric. Guys anomalies call back next.",
  },
  {
    img: "./assets/img/img3.png",
    role: "Job Fair",
    title: "Participated job fair",
    description:
      "Office ipsum you must be muted. To dive creep productive only will read. Eco-system standup search pivot awareness today web discussion this centric. Guys anomalies call back next.",
  },
  {
    img: "./assets/img/img3.png",
    role: "Debate workshop",
    title: "English debate organizer",
    description: "Here i organized English Debate",
  },
  {
    img: "./assets/img/img3.png",
    role: "K-L YES Program",
    title: "K-L YES program organizer",
    description:
      "Office ipsum you must be muted. To dive creep productive only will read. Eco-system standup search pivot awareness today web discussion this centric. Guys anomalies call back next.",
  },
  {
    img: "./assets/img/img3.png",
    role: "Team Big Data",
    title: "Dr. Mohammad Zoynul Abedin",
    description:
      "For 2 years i have learned there data science data envelopment analysis and worked with the team",
  },
  {
    img: "./assets/img/img3.png",
    role: "Blender 3D work",
    title: "Learned 3D design during COVID-19",
    description: "In covid time i have learned blender artwork.",
  },
  {
    img: "./assets/img/img3.png",
    role: "Chess Player",
    title: "Wanna play a round on Lichess?",
    description: 'I like to play chess in my free time on lichess.',
  },
];

const skillsContainer = document.querySelector('.skills-container');

function createCard(filterData){
  skillsContainer.innerHTML = "";
  filterData.forEach(element=>{
    const singleCard = document.createElement('div')
    singleCard.classList.add("single-card");
    singleCard.classList.add('skill-single-card')
    const card = 
    `<div class="card-details">
      <a class="card-img">
        <img src="${element.img}" alt="" />
      </a>
      <div class="role">${element.role}</div>
      <div class="card-title">
        ${element.title}
      </div>
      <div class="card-description">
        ${element.description}
      </div>
    </div>`
    singleCard.innerHTML += card;
    skillsContainer.appendChild(singleCard);
  });
}







const btns = document.querySelectorAll(".gallery button");
const cards = document.querySelectorAll(".skill-single-card");
const dropdown = document.querySelector('.dropdown-toggle span');


createCard(data)

function filterDatacategory() {
  btns.forEach((btn) => {
    btn.classList.remove("btn-clicked");
  });
  this.classList.add('btn-clicked');

  
  var text = this.innerText.toLowerCase();
  dropdown.innerText = text;
  
  var filterData = [];
  if (text == "all") {
    filterData = data;
  } else {
    var filterData = data.filter((obj) => obj.category == text);
    
  }
  createCard(filterData);
}

btns.forEach(btn=>{
  btn.addEventListener('click', filterDatacategory)
})

