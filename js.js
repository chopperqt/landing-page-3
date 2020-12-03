//mobil actions
let mobilBtn = document.querySelectorAll(".mobil__menu_button")[0]; //button open/close mobil menu
let mobilContainer = document.querySelectorAll(".container__mobil")[0]; //mobil container

//button lines
let line__1 = document.querySelectorAll(".line__1")[0];
let line__2 = document.querySelectorAll(".line__2")[0];
let line__3 = document.querySelectorAll(".line__3")[0];

//mobil options
let eventContainer = false; //check open/close mobil menu. Default: false.

//mobil animation styles
let openContainer = "height: 100vh; transition: .3s";
let closeContainer = "height: 0; transition: .3s";

//open mobil menu style
let line__1_style_open = "transition: .3s; transform: rotate(45deg) translate(5px, 5px)";
let line__3_style_open = "transition: .3s; transform: rotate(-45deg) translate(5px, -5px)";
let line__2_style_open = "transition: 0; opacity: 0";

//close mobil menu style
let line__1_style_close = "transition: .3s ;transform: rotate(0deg) translate(0, 0)";
let line__3_style_close = "transition: .3s ;transform: rotate(0deg) translate(0, 0)";
let line__2_style_close = "transtion: .6s; opacity: 1";



//initilization styles

    mobilContainer.style = closeContainer;
    line__1.style = line__1_style_close;
    line__3.style = line__3_style_close;
    line__2.style = line__2_style_close;


//click listener on mobil button 
mobilBtn.addEventListener('click' , () => {
    console.log('click')
    if (eventContainer) {
        mobilContainer.style = openContainer;
        line__1.style = line__1_style_open;
        line__3.style = line__3_style_open;
        line__2.style = line__2_style_open;
        eventContainer = !eventContainer;
    }else {
        mobilContainer.style = closeContainer;
        line__1.style = line__1_style_close;
        line__3.style = line__3_style_close;
        line__2.style = line__2_style_close;
        eventContainer = !eventContainer;
    }
});

//transform: rotate(45deg) translate(5px, 5px);
//transform: rotate(-45deg) translate(5px, -5px);