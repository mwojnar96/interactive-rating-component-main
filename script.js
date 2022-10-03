let rating = "";
const ratings = document.querySelectorAll('.rating-number');

for(let i of ratings)
{
    ratings[i].addEventListener('click', getRating);
}

function getRating()
{
    const clicked = document.querySelectorAll('.rating-number-clicked');

    if(clicked.length>0)
    {
        clicked[0].className = "rating-number";
    }
    this.className = "rating-number-clicked";

    rating = this.getAttribute('value');   
}

const submit = document.querySelector('#submit');
submit.addEventListener('click', thankYou);

function redirectToThankYouPage()
{
    if(rating==="")
    {
        alert("Choose rate!")
    }
    else
    {
        const container = document.querySelector('#container');
        const image = "<img src='./images/illustration-thank-you.svg' alt='thank you image'/>"
        const rate = "<div id='rated'>You selected "+rating+" out of 5</div>"
        const text = 
        "<h1>Thank you!</h1>"+
        "<p>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>";    
        container.innerHTML = image + rate + text;    
    }    
}