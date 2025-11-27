lottie.loadAnimation({
    container: document.getElementsByClassName("gif")[0], // the container element
    renderer: 'svg', // use 'svg' for vector-based rendering
    loop: true,      // loop animation
    autoplay: true,  // start automatically
    path: './Assets/Welcome.json' // path to your Lottie JSON file
});

function openSidebar() {
    const menu = document.getElementsByClassName("menu-bar")[0];
    
    // Step 1: Make it visible
    menu.style.display = "flex";
    
    // Step 2: Delay the slide-in to allow the browser to render "display:flex"
    setTimeout(() => {
        menu.style.right = "0px";
    }, 10); // Small timeout ensures proper rendering before animating
}

function closeSidebar() {
    const menu = document.getElementsByClassName("menu-bar")[0];
    
    // Step 1: Start slide-out animation
    menu.style.right = "-200px";

    // Step 2: After animation ends, hide it
    setTimeout(() => {
        menu.style.display = "none";
    }, 300); // Match this to your CSS transition duration
}