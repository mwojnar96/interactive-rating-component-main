var rating = "";
var ratings = document.querySelectorAll('.rating-number');

for(i=0; i < ratings.length; i++)
{
    ratings[i].addEventListener('click', getRating);
}

function getRating()
{
    var clicked = document.querySelectorAll('.rating-number-clicked');

    if(clicked.length>0)
    {
        clicked[0].className = "rating-number";
    }
    this.className = "rating-number-clicked";

    rating = this.getAttribute('value');   
}

var submit = document.querySelector('#submit');
submit.addEventListener('click', thankYou);

function thankYou()
{
    if(rating=="")
    {
        alert("Choose rate!")
    }
    else
    {
        var container = document.querySelector('#container');
        var image = "<img src='./images/illustration-thank-you.svg' alt='thank you image'/>"
        var rate = "<div id='rated'>You selected "+rating+" out of 5</div>"
        var text = 
        "<h1>Thank you!</h1>"+
        "<p>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>";    
        container.innerHTML = image + rate + text;    
    }    
}