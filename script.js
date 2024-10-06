


document.addEventListener("DOMContentLoaded", function() {
    
    const title = document.querySelector('.title');
    const button = document.querySelector('.animate-btn');
    const container = document.querySelector('.container');


    let opacity = 0;

    const fadeIn = setInterval(() => {

        if (opacity < 1) {
            opacity += 0.05; 
            title.style.opacity = opacity; 
            title.style.transform = `translateY(-${(1 - opacity) * 20}px)`; 
        } else {
            clearInterval(fadeIn);
        }

    }, 50);

    // make new circle
    button.addEventListener('click', function() {
        // console.log("Button clicked!");
        
        const circle = document.createElement('div');

        circle.className = 'box'; 
        circle.style.display = 'block'; 
        circle.style.opacity = 0; 
        circle.style.transform = 'scale(0)'; 

        
        const maxX = container.clientWidth - 100; 
        const maxY = container.clientHeight - 100;

        const randomX = Math.random() * maxX; 
        const randomY = Math.random() * maxY; 

        circle.style.position = 'absolute';
        circle.style.left = `${randomX}px`; 
        circle.style.top = `${randomY}px`; 

        
        container.appendChild(circle);

        setTimeout(() => {
            circle.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
            circle.style.opacity = 1;
            circle.style.transform = 'scale(1)'; 
        }, 10); 
    });
});
