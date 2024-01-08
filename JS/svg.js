var para = document.getElementById('message');
var heading = document.getElementById('heading');
var line = document.getElementById('details');

// introduction
var intro = document.getElementById('introduction');
intro.addEventListener('mouseover',function(){
    heading.innerHTML='Introduction Page';
    para.innerHTML='This page have details about the authors';
    line.innerHTML='Created By:Binali w1790269';
});
intro.addEventListener('mouseout',function Stop(){
    para.innerHTML='Explore';
    heading.innerHTML='Easily';
    line.innerHTML='';
});
intro.addEventListener('click',function(){
    alert('You clicked on introduction page');
});

// home
var home = document.getElementById('home');
home.addEventListener('mouseover',function(){
    heading.innerHTML='Home Page';
    para.innerHTML='This page is the main page for our website';
    line.innerHTML='Created By:Rashfa w1790271';
});
home.addEventListener('mouseout',function Stop(){
    para.innerHTML='Explore';
    heading.innerHTML='Easily';
    line.innerHTML='';
});
home.addEventListener('click',function(){
    alert('You clicked on home page');
});

// buyingForm
var buyingForm = document.getElementById('buyingForm');
buyingForm.addEventListener('mouseover',function(){
    heading.innerHTML='Buying Form';
    para.innerHTML='This page is the buying form for this website, Where users can buy items';
    line.innerHTML='Created By:Binali w1790269';
});
buyingForm.addEventListener('mouseout',function Stop(){
    para.innerHTML='Explore';
    heading.innerHTML='Easily';
    line.innerHTML='';
});
buyingForm.addEventListener('click',function(){
    alert('You clicked on buying form page');
});

// FeedbackForm
var FeedbackForm = document.getElementById('FeedbackForm');
FeedbackForm.addEventListener('mouseover',function(){
    heading.innerHTML='Feedback Form';
    para.innerHTML='This page is the feedback form for this website, Where users can give feedback to us';
    line.innerHTML='Created By:Rashfa w1790271';
});
FeedbackForm.addEventListener('mouseout',function Stop(){
    para.innerHTML='Explore';
    heading.innerHTML='Easily';
    line.innerHTML='';
});
FeedbackForm.addEventListener('click',function(){
    alert('You clicked on feedback form page');
});

// quiz
var quiz = document.getElementById('quiz');
quiz.addEventListener('mouseover',function(){
    heading.innerHTML='Quiz';
    para.innerHTML='This page has quiz with related questions';
    line.innerHTML='Created By:Thuwarakan w1790265';
});
quiz.addEventListener('mouseout',function Stop(){
    para.innerHTML='Explore';
    heading.innerHTML='Easily';
    line.innerHTML='';
});
quiz.addEventListener('click',function(){
    alert('You clicked on quiz page');
});

// gallery
var gallery = document.getElementById('gallery');
gallery.addEventListener('mouseover',function(){
    heading.innerHTML='Gallery';
    para.innerHTML='This page have related images with information';
    line.innerHTML='Created By:Nirahulan w1790287';
});
gallery.addEventListener('mouseout',function Stop(){
    para.innerHTML='Explore';
    heading.innerHTML='Easily';
    line.innerHTML='';
});
gallery.addEventListener('click',function(){
    alert('You clicked on gallery page');
});


// uk
var ukCountry = document.getElementById('ukCountry');
ukCountry.addEventListener('mouseover',function(){
    heading.innerHTML='United Kingdom';
    para.innerHTML='This page have information about UK';
    line.innerHTML='Created By:Binali w1790269';
});
ukCountry.addEventListener('mouseout',function Stop(){
    para.innerHTML='Explore';
    heading.innerHTML='Easily';
    line.innerHTML='';
});
ukCountry.addEventListener('click',function(){
    alert('You clicked on uk information page');
});

// costarica
var costaricaCountry = document.getElementById('costaricaCountry');
costaricaCountry.addEventListener('mouseover',function(){
    heading.innerHTML='Costarica';
    para.innerHTML='This page have information about Costarica';
    line.innerHTML='Created By:Rashfa w1790271';
});
costaricaCountry.addEventListener('mouseout',function Stop(){
    para.innerHTML='Explore';
    heading.innerHTML='Easily';
    line.innerHTML='';
});
costaricaCountry.addEventListener('click',function(){
    alert('You clicked on costarica information page');
});

// France
var franceCountry = document.getElementById('franceCountry');
franceCountry.addEventListener('mouseover',function(){
    heading.innerHTML='France';
    para.innerHTML='This page have information about France';
    line.innerHTML='Created By:Nirahulan w1790287';
});
franceCountry.addEventListener('mouseout',function Stop(){
    para.innerHTML='Explore';
    heading.innerHTML='Easily';
    line.innerHTML='';
});
franceCountry.addEventListener('click',function(){
    alert('You clicked on france information page');
});

// indiaCountry
var indiaCountry = document.getElementById('indiaCountry');
indiaCountry.addEventListener('mouseover',function(){
    heading.innerHTML='India';
    para.innerHTML='This page have information about India';
    line.innerHTML='Created By:Thuwarakan w1790265';
});
indiaCountry.addEventListener('mouseout',function Stop(){
    para.innerHTML='Explore';
    heading.innerHTML='Easily';
    line.innerHTML='';
});
indiaCountry.addEventListener('click',function(){
    alert('You clicked on india information page');
});
