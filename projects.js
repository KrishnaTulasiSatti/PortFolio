let currentIndex = 0;

function updateSlider() {
  const track = document.querySelector('.slider-track');
  const cards = document.querySelectorAll('.slider-card');
  const totalCards = cards.length;

  if (currentIndex < 0) currentIndex = 0;
  if (currentIndex >= totalCards) currentIndex = totalCards - 1;

  const offset = currentIndex * 100;
  track.style.transform = `translateX(-${offset}%)`;
}

function nextSlide() {
  currentIndex++;
  updateSlider();
}

function prevSlide() {
  currentIndex--;
  updateSlider();
}

// Optional: initialize on load
document.addEventListener('DOMContentLoaded', updateSlider);

var objects = [
    {
       "projectImage" : "./Assets/healthhub.png",
       "website" : "https://krishnatulasisatti.github.io/HealthHub/",
       "projectTitle" : "HEALTH HUB",
       "projectDesc" : "Developed a responsive healthcare web application with a symptom checker, condition-based diet recommendations, hospital listings",
       "techStack" : "HTML, CSS",
       "github_link" : "https://krishnatulasisatti.github.io/HealthHub/"
    },
    {
       "projectImage" : "./Assets/healthhub.png",
       "website" : "https://krishnatulasisatti.github.io/HealthHub/",
       "projectTitle" : "HEALTH HUB",
       "projectDesc" : "Developed a responsive healthcare web application with a symptom checker, condition-based diet recommendations, hospital listings",
       "techStack" : "HTML, CSS",
       "github_link" : "https://krishnatulasisatti.github.io/HealthHub/"
    },
    {
       "projectImage" : "./Assets/healthhub.png",
       "website" : "https://krishnatulasisatti.github.io/HealthHub/",
       "projectTitle" : "HEALTH HUB",
       "projectDesc" : "Developed a responsive healthcare web application with a symptom checker, condition-based diet recommendations, hospital listings",
       "techStack" : "HTML, CSS",
       "github_link" : "https://krishnatulasisatti.github.io/HealthHub/"
    }

]

objects.map(ele => {
    var project = `
        <div class="slider-card">
            <div class="project_image">
                <img src=${ele.projectImage} alt="Project 1" />
                <div class="view_project">
                    <button class="view"><a href=${ele.website} target = "_blank" >Preview</a></button>
                </div>
            </div>
            <div class="project-info">
            <h1>${ele.projectTitle}</h1>
            <div class="p_line"></div>
            <p><strong>Description:</strong> ${ele.projectDesc}</p>

            <p><strong>Tech Stack:</strong> ${ele.techStack}</p>

            <a href=${ele.github_link}><button class="projectlink-button"><i class="fab fa-github" style="color: white; background-color: #e7721e;"></i> Github</button></a>
            </div>
      </div>
    ` 
    const parent = document.getElementsByClassName("slider-track")[0];
    parent.innerHTML += project;
})

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