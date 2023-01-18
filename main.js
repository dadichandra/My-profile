// option 2 smootScroll jQuery
// $('.navbar a').on('click', function(e){
//     if(this.hash !== ''){
//         e.prefentDefault():

//         const hash = this.hash;

//         $('html, body').animate(
//             {
//             scrollTop: $(hash).offset().top
//             },
//             800
//         );
//     }
// });

// option 3 smootscroll

const scroll = new SmoothScroll ('.heading-list a[href*="#"]', {
    speed: 800
});