const research = document.querySelector(".research")
const moreIcon = document.querySelector(".more-icon");

research.addEventListener('mouseover', ()=>{
    research.style.setProperty('linear-gradient(135deg, blue 0%, #2a04ff 100%)', 'linear-gradient(0deg, red 0%, green 100%)');
    moreIcon.style.marginRight = 0 + "rem";
})
research.addEventListener('mouseleave', ()=>{
    research.style.setProperty('linear-gradient(0deg, #00a3ff 0%, #2a04ff 100%)', 'linear-gradient(135deg, #00a3ff 0%, #2a04ff 100%)');
    moreIcon.style.marginRight = 0.5 + "rem";
})


const togglerIcon = document.querySelector(".navbar-toggler-icon"),
firstHr = document.querySelector("#first-hr"),
secondHr = document.querySelector("#second-hr"),
hamButton = document.querySelector('.navbar-toggler-icon');
let i = 0;
togglerIcon.addEventListener('mousedown', ()=>{
    console.log(firstHr, secondHr)
    
    if(i==0){
        hamButton.style.transform = 'rotate(90deg)';
        // firstHr.style.transform = 'rotate(45deg)';
        // firstHr.style.marginTop = '10px';
        // secondHr.style.transform = 'rotate(-45deg)';
        // secondHr.style.marginTop = '-10px';
        i = 1;
    }
    else{
        hamButton.style.transform = 'rotate(-0deg)';

        // firstHr.style.transform = 'rotate(0)';
        // firstHr.style.marginTop = '0';
        // secondHr.style.transform = 'rotate(0)';
        // secondHr.style.marginTop = '-0px';

        i = 0;
    }
})





