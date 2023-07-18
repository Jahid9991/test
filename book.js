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
    img: "./assets/img/Dr. Md. Tarikul Islam.png",
    title: "Professor",
    name:'Dr. Md. Tarikul Islam',
    description:
      "Department of Mathematics, Hajee Mohammad Danesh Science & Technology University",
    email:'tarikul_hstu@yahoo.com'
  },
  { 
    img: "./assets/img/Dr. Md. Tarikul Islam-1.png",
    title: "Professor",
    name:'Dr. Md. Tarikul Islam',
    description:
      "Senior Lecturer in Fintech & Financial Innovation,TUIBS Finance, Performance & Marketing",
    email:'tarikul_hstu@yahoo.com'
  },
  { 
    img: "./assets/img/Md Juwel Ahmed Sarker.png",
    title: "Asst. Professor",
    name:'Md Juwel Ahmed Sarker',
    description:
      "Chairman, Development Studies Department, Hajee Mohammad Danesh Science & Technology University",
    email:'juwel@hstu.ac.bd'
  }
  
];

const skillsContainer = document.querySelector('.skills-container');

function createCard(filterData){
  skillsContainer.innerHTML = "";
  filterData.forEach(element=>{
    const singleCard = document.createElement('div')
    singleCard.classList.add("single-card");
    singleCard.classList.add('skill-single-card')
    const card = 
    `<div class="card-details card-details-mentor"> 
        <a class="card-img card-img-mentor">
          <img src="${element.img}" alt="" />
        </a>
      <div class="role">${element.title}</div>
      <div class="card-title">
        ${element.name}
      </div>
      <div class="card-description">
        ${element.description}
      </div>
      <a href="mailto: ${element.email}" class="card-email">
        ${element.email}
      </a>
    </div>`
    singleCard.innerHTML += card;
    skillsContainer.appendChild(singleCard);
  });
}







const btns = document.querySelectorAll("button");
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

