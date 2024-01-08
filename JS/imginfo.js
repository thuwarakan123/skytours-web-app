
// For color and background color change 
function gruopColor(navColor,headingColor){
    var links = document.getElementsByTagName('a');
    for(var i =0; i<links.length; i++  ){
        links[i].style.color= navColor;
    }
    var headIngs = document.getElementsByClassName('links-heading');
    for(var i =0; i<headIngs.length; i++  ){
        headIngs[i].style.color= headingColor;
    }
}

var btn = document.getElementById('images-btn');
function backColor(bgcolor){    
    document.body.style.backgroundColor = bgcolor;
}

function Color(color){
    document.body.style.color = color;
    gruopColor(color,color);
}

function reset(value){
    if(value==='bg'){
        document.body.style.background = "white"; 
    }else if(value==='color'){
        document.body.style.color = "black"; 
        gruopColor('white','white')
        btn.style.color="black";
    }    
} 

// 
// For heading change
var heading = document.getElementById('imgs-heading');
function Change(){
    heading.innerHTML= "Click the image to find more info";
};

function Rechange(){
    heading.innerHTML= "Trending Tourist Places";
};

var nam= document.getElementById('image-name');
var loc= document.getElementById('image-loc-name');
var population= document.getElementById('image-place-population');
var histroy= document.getElementById('image-histroy');

var singaporeImage = document.getElementById('singapore-large-image');
var eiffelImage = document.getElementById('france-large-image');
var newyorkImage = document.getElementById('newyork-large-image');
var uaeImage = document.getElementById('uae-large-image');
var bangkokImage = document.getElementById('bangkok-large-image');

function imageShow(imageVaribleName){
    singaporeImage.style.display="none";
    eiffelImage.style.display="none";
    newyorkImage.style.display="none";
    uaeImage.style.display="none";
    bangkokImage.style.display ="none";
    imageVaribleName.style.display="inline-block";
};

function Show(placeName){
    document.getElementById('second-gallery-section').style.display = 'inline-block';

    if(placeName==="singapore"){
        nam.innerHTML="Singapore Merlin Park";
        loc.innerHTML="1 Fullerton Rd, Singapore 049213";
        population.innerHTML=" 5.70 million";
        histroy.innerHTML="The Merlion is the national symbol of the city-state of Singapore. It is depicted as a mythical creature with a lion's head and the body of a fish. Being of prominent symbolic nature to Singapore and Singaporeans in general.The Merlion was first used in Singapore as the logo for the tourism board.";
        // Image
        imageShow(singaporeImage);

    }else if(placeName==="eiffel"){
        nam.innerHTML="Paris Eiffel Tower";
        loc.innerHTML="7th arrondissement, Paris, France";
        population.innerHTML=" 67 million";
        histroy.innerHTML="The Eiffel Tower is a wrought-iron lattice tower on the Champ de Mars in Paris.It was initially criticised by some of France's leading artists and intellectuals for its design, but it has become a global cultural icon of France and one of the most recognisable structures in the world. The Eiffel Tower surpassed the Washington Monument to become the tallest man-made structure in the world";
        // Image
        imageShow(eiffelImage);

    }else if(placeName==="newyork"){
        nam.innerHTML="New York City";
        loc.innerHTML="Southern tip of the U.S. state of New York";
        population.innerHTML="330 million";
        histroy.innerHTML="New York City, it is one of the world's most populous megacities. New York City has been described as the cultural, financial, and media capital of the world, significantly influencing commerce, entertainment, research, technology, education, politics, tourism, art, fashion, and sports. Home to the headquarters of the United Nations, New York is an important center for international diplomacy.";
        // Image
        imageShow(newyorkImage);
 
    }else if(placeName==="uae"){
        nam.innerHTML="Burj Khalifa";
        loc.innerHTML="	1 Sheikh Mohammed bin Rashid Boulevard Dubai";
        population.innerHTML=" 9.20 million";
        histroy.innerHTML="Burj Khalifa With a total height of 829.8 m, the Burj Khalifa has been the tallest structure and building in the world since its topping out in 2009.Construction of the Burj Khalifa began in 2004, with the exterior completed five years later in 2009. The decision to construct the building is based on the government's decision to diversify from an oil-based economy, and for Dubai to gain international recognition.";
        // Image
        imageShow(uaeImage);

    }else if(placeName==="bangkok"){
        nam.innerHTML="Bangkok";
        loc.innerHTML="Central Thailand";
        population.innerHTML="69 million";
        histroy.innerHTML="Bangkok is the capital and most populous city of Thailand.  dwarfing Thailand's other urban centres in both size and importance to the national economy. Bangkok traces its roots to a small trading post during the Ayutthaya Kingdom in the 15th century,";
        // Image
        imageShow(bangkokImage);
    }
}

