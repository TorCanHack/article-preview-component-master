document.querySelector('.defaultShare').style.display = 'flex';
document.querySelector('.share2').style.display = 'none';
document.querySelector('.share3').style.display = 'none';

// Select all buttons
let buttons = document.querySelectorAll('button');

// Function to toggle display of divs
function toggleDivs() {
    let defaultShareDiv = document.querySelector('.defaultShare');
    let share2Div = document.querySelector('.share2');
    let share3Div = document.querySelector('.share3');

    let viewportWidth = window.innerWidth;

    // check if the viewport width is 1440px or more 
    if (viewportWidth >= 1440) {
        share3Div.style.display = share3Div.style.display === "none" ? "flex" : "none" ;

    } else {
        if (defaultShareDiv.style.display === "flex"){
            defaultShareDiv.style.display = "none";
            share2Div.style.display = "flex";
        } else {
            defaultShareDiv.style.display = "flex";
            share2Div.style.display = "none";
        }
        
    }
}

// Add click event listener to all buttons
buttons.forEach(function(button) {
    button.addEventListener('click', toggleDivs);
});
