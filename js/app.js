//Start Navbar
const header = document.querySelector('header');

const navel = document.querySelector('.navbars');

const navbuttons = document.querySelector('.navbuttons');

const left = document.getElementById('left'),
      right = document.getElementById('right');

navbuttons.addEventListener('click',()=>{
    navbuttons.classList.toggle('changes');
});

bg = 1;

//For Bgchange btn


left.addEventListener('click',()=>{
    bg--;
    changebg();
    resetinterval();
});

right.addEventListener('click',()=>{
    bg++;
    changebg();
    resetinterval();
});

function changebg(){
    if(bg > 6){
        bg = 1;
    }else if(bg < 1){
        bg = 6;
    }

    header.style.backgroundImage = `url(img/h${bg}.jpg)`;
}

function runbg(){
    bg++;
    changebg();
}

function resetinterval(){
    clearInterval(interval);
    interval = setInterval(runbg,6000);
}


let interval = setInterval(runbg,6000);

window.addEventListener('scroll',()=>{
    // console.log(scrollY);
    let scrvalue = scrollY;
    // console.log(scrvalue);
    if(scrvalue >= 190){
        navel.classList.add('scroll');
    }else{
        navel.classList.remove('scroll');
    }
});




// for banner scroll
const banner = document.getElementById('banner');


window.addEventListener('scroll',()=>{
    // console.log(scrollY);
    let scrvalue = scrollY;
    // console.log(scrvalue);
    if(scrvalue <= 0){
        banner.classList.add('scroll');
    }else{
        banner.classList.remove('scroll');
    }
});

//For Booking Scroll
const bookingel = document.querySelector('.bookings');

window.addEventListener('scroll',()=>{
    // console.log(scrollY);
    let scrvalue = scrollY;
    // console.log(scrvalue);
    if(scrvalue <= 0){
        bookingel.classList.add('scroll');
    }else{
        bookingel.classList.remove('scroll');
    }
});

//End Navbar


//Start Room Section
const liels = document.querySelectorAll('#room-list ul li');

const deluxeboxs = document.querySelectorAll('.deluxe'),
      standardboxs = document.querySelectorAll('.standard'),
      studioboxs = document.querySelectorAll('.studio');

const card1 = document.querySelector('.card1s'),
      card2 = document.querySelector('.card2s'),
      card3 = document.querySelector('.card3s');


liels.forEach(liel=>{
    liel.addEventListener('click',()=>{
        removeactive();
        liel.classList.add('active');

    if(liel.textContent === "DELUXE"){
        deluxeboxs.forEach(deluxebox=>{
            deluxebox.style.display = "inline-block";
        });
        standardboxs.forEach(standardbox=>{
            standardbox.style.display = "none";
        });
        studioboxs.forEach(studiobox=>{
            studiobox.style.display = "none";
        });
    }else if(liel.textContent === "STANDART"){
        deluxeboxs.forEach(deluxebox=>{
            deluxebox.style.display = "none";
        });
        standardboxs.forEach(standardbox=>{
            standardbox.style.display = "inline-block";
        });
        studioboxs.forEach(studiobox=>{
            studiobox.style.display = "none";
        });
    }else if(liel.textContent === "STUDIO"){
        console.log("hay");
        deluxeboxs.forEach(deluxebox=>{
            deluxebox.style.display = "none";
        });
        standardboxs.forEach(standardbox=>{
            standardbox.style.display = "none";
        });
        studioboxs.forEach(studiobox=>{
            studiobox.style.display = "inline-block";
        });
    }


    });

});

function removeactive(){
    liels.forEach(liel=>{
        liel.classList.remove('active');
    });
}


window.addEventListener('scroll',()=>{
    // console.log(scrollY);
    let scrvalue = scrollY;
    // console.log(scrvalue);
    if(scrvalue >= 2500){
        card1.classList.add('fromlefts');
        card2.classList.add('frombottons');
        card3.classList.add('fromrights');
    }else{
        card1.classList.remove('fromlefts');
        card2.classList.remove('frombottons');
        card3.classList.remove('fromrights');
    }
});
//End Room Section



