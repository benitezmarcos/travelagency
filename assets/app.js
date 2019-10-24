//SideNav

const sideNav = document.querySelector('.sidenav');
M.Sidenav.init(sideNav, {});

//Slider
const slider = document.querySelector('.slider');
M.Slider.init(slider, {
    indicators: false,
    height: 500,
    transition: 500,
    interval: 6000
});

//Autocomplete
const ac = document.querySelector('.autocomplete');
M.Autocomplete.init(ac, {
    data: {
        "Morrocco": null,
        "Ibiza": null,
        "Iceland": null,
        "Austria": null,
        "Brazil": null,
        "United Arab Emirates": null,
    }
});

//Material Boxed
const mb = document.querySelectorAll('.materialboxed');
M.Materialbox.init(mb,{});

//ScrollSpy

const ss = document.querySelectorAll('.scrollspy');
M.ScrollSpy.init(ss,{});