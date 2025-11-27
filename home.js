const words = ["Full Stack Developer","Competitive Coder", "Website Designer"];
const typewriterDiv = document.getElementsByClassName("info")[0];

let word_ind = 0;
let ind = 0;
let del_flag = false;

function type() {
  const current_word = words[word_ind];
  
  if (del_flag) {
    typewriterDiv.innerHTML = current_word.substring(0, ind--);
  } 
  else {
    typewriterDiv.innerHTML = current_word.substring(0, ind++);
  }

  let delay = del_flag ? 70 : 140;

  if (!del_flag && ind === current_word.length+1) {
    delay = 1000; 
    del_flag = true;
  } 
  else if (del_flag && ind === 0) {
    del_flag = false;
    word_ind = (word_ind + 1) % words.length;
    delay = 500;
  }

  setTimeout(type, delay);
}

type();

var objects = [
  {
    "SkillName" : "Problem Solving",
    "SkillHeading" : "Competitive Coding",
    "image1" : "https://leetcode.com/favicon-32x32.png",
    "image2" : "https://www.geeksforgeeks.org/favicon.ico",
    "image3" : "https://upload.wikimedia.org/wikipedia/commons/6/65/HackerRank_logo.png",
    "image4" : "https://www.codechef.com/favicon.ico",
    "point1" : "Achieved a maximum rating of <span>1667</span> on LeetCode, ranking in the top 19.68% percentile for problem-solving ability across various topics.",
    "point2" : "Maintained a maximum rating of <span>1742 </span>(3-Star) in GFG, demonstrating proficiency in algorithms and data structures.",
    "point3" : "Reached a maximum rating of <span>1494 </span>(2-Star) in Codechef, achieving strong performance in competitive programming challenges.",
    "point4" : "Achieved a <span>4-star</span> rating in HackerRank in problem-solving."
  },

  {
    "SkillName" : "Technology",
    "SkillHeading" : "Full Stack Development",
    "image1" : "https://cdn-icons-png.flaticon.com/512/919/919827.png",
    "image2" : "https://cdn-icons-png.flaticon.com/512/919/919826.png",
    "image3" : "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
    "image4" : "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    "point1" : "Structuring web content using semantic HTML to ensure accessibility, SEO optimization, and clean, maintainable code architecture.",
    "point2" : "Styling visually appealing and responsive layouts with CSS and Bootstrap, leveraging grid systems, flexbox for cross-device compatibility.",
    "point3" : "Adding interactivity and dynamic behavior using JavaScript, including form validation, animations, event handling, and DOM manipulation.",
    "point4" : "Building complete front-end projects combining HTML, CSS, JavaScript, and Bootstrap, such as interactive web apps."
  },

  {
    "SkillName": "Development Tools",
    "SkillHeading": "Version Control & Environment",
    "image1": "https://git-scm.com/favicon.ico",
    "image2": "https://logowik.com/content/uploads/images/github9775.jpg",
    "image3": "https://code.visualstudio.com/favicon.ico",
    "image4": "https://seekicon.com/free-icon-download/redhat_3.png",
    "point1": "Proficient in using <span>Git</span> for version control, including branching, merging, and managing project history effectively in team environments.",
    "point2": "Experienced with <span>GitHub</span> for collaborative development, pull requests, issue tracking, and contributing to open-source projects.",
    "point3": "Skilled in <span>Visual Studio Code</span> with custom extensions, debugging tools, and integrated terminal for efficient code development.",
    "point4": "Familiar with <span>Red Hat Linux</span> environment, including basic shell scripting, package management, and system navigation for development and deployment."
  }

]

let cnt = 0



objects.map(ele => {
  
  var skill = document.createElement("div")
  skill.className = "skill"

  var fade = "fade-right";
  var fade_anim = "fade-up";

  // if(cnt % 2 === 1) {
  //   fade = "fade-right";
  //   fade_anim = "fade-left";
  // }

  var skill_info = `  
      <div class="skill-info">
        <p style="color: #e7721e;">${ele.SkillName}</p>
        <h2>${ele.SkillHeading}</h2>
        <div class="images">
            <a href="" data-aos="fade-left"  data-aos-delay = "200"><img src=${ele.image1} alt="LeetCode Icon" width="28"></a>
            <a href="" data-aos="fade-left"  data-aos-delay = "400"><img src=${ele.image2} alt="GFG Favicon" width="29"></a>
            <a href="" data-aos="fade-left"  data-aos-delay = "600"><img src=${ele.image3} alt="HackerRank Logo" width="30"></a>
            <a href="" data-aos="fade-left"  data-aos-delay = "800"><img src=${ele.image4} alt="CodeChef Icon" width="28"></a>
            
            
        </div>

        <div class="bullets">
            <ul>
              <li data-aos = ${fade_anim} data-aos-delay = 300>${ele.point1}</li>
              <li data-aos = ${fade_anim} data-aos-delay = 600>${ele.point2}</li>
              <li data-aos = ${fade_anim} data-aos-delay = 900>${ele.point3}</li>
              <li data-aos = ${fade_anim} data-aos-delay = 1200>${ele.point4}</li>
            </ul>
        </div>

      </div>
`   
    
    var gif = `<div class="gif" data-aos = ${fade} data-aos-duration="2500" data-aos-delay="300"></div>`

    

    if(cnt % 2 === 0) {
      skill.innerHTML += skill_info
      skill.innerHTML += gif
    }
    else {
      skill.innerHTML += gif
      skill.innerHTML += skill_info
    }

    

    const myskills_div = document.getElementsByClassName("myskills")[0];
    myskills_div.appendChild(skill)

    if(cnt % 2 === 1) {
      skill.style.flexWrap = "wrap-reverse";
    }

    cnt += 1

  
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

var a = 0;

var achievements = [
  {
    "icon" : "./Assets/thub.png",
    "link" : "",
    "heading" : "Winner of Quiz in Winter War Event",
    "matter" : "Won the quiz competition by demonstrating strong general knowledge and quick thinking.",
    "date" : "December 2023, Technical Hub"
  },
  {
    "icon" : "./Assets/thub.png",
    "link" : "",
    "heading" : "Winner of Code Complete in Winter War Event",
    "matter" : "Won the coding competition held in Winter War event",
    "date" : "December 2023, Technical Hub"
  },
  {
    "icon" : "./Assets/thub.png",
    "link" : "",
    "heading" : "Winner of Bi-weekly Coding Contest 6",
    "matter" : "Excelled in solving coding problems through efficient problem-solving.",
    "date" : "January 2024, Technical Hub"
  },
  {
    "icon" : "./Assets/trainee_of_month.png",
    "link" : "",
    "heading" : "Trainee Of the Month (Bamboo Coders)",
    "matter" : "Awarded 'Trainee of the Month' for exceptional performance and commitment",
    "date" : "October 2024, Technical Hub"
  },
  {
    "icon" : "./Assets/thub.png",
    "link" : "",
    "heading" : "Winner of Bash Battle",
    "matter" : "Achieved top position in Bash Battle through efficient and accurate command-line problem-solving.",
    "date" : "January 2025, Technical Hub"
  },
  {
    "icon" : "./Assets/thub.png",
    "link" : "",
    "heading" : "Winner of SQL Detectives Challenge",
    "matter" : "Achieved top position for demonstrating strong database querying.",
    "date" : "January 2025, Technical Hub"
  }


]

var a = 0;

achievements.map((ele) => {
  var card = `
     
            <div class="achieve_card">
                <div class="achieve_icon-div">
                    <div class="achieve_icon">
                         <a href=${ele.link}><img src=${ele.icon} alt="" style="border-radius: 50%; height: 100px; width: 100px; "></a>
                    </div>
                </div>
                <div class="achieve_matter">
                    <p style="font-size: 22px; margin-bottom: 20px; padding:0px 10px;">${ele.heading}</p>
                    <p style="color: #d1d1d1; margin: 0px 20px;">${ele.matter}</p>
                    <p style="margin-top : 10px">${ele.date}</p>
                </div>
            </div>
        
  `


  var ind = Math.floor(a/3);
  const parent = document.getElementsByClassName("achieve_cards")[ind];
  parent.innerHTML += card;
  
  a = a + 1;
  
})


  lottie.loadAnimation({
    container: document.getElementsByClassName("gif")[0], // the container element
    renderer: 'svg', // use 'svg' for vector-based rendering
    loop: true,      // loop animation
    autoplay: true,  // start automatically
    path: './Assets/RPeXbewMU8.json' // path to your Lottie JSON file
  });

    lottie.loadAnimation({
    container: document.getElementsByClassName("gif")[1], // the container element
    renderer: 'svg', // use 'svg' for vector-based rendering
    loop: true,      // loop animation
    autoplay: true,  // start automatically
    path: './Assets/frontend.json' // path to your Lottie JSON file
  });

    lottie.loadAnimation({
    container: document.getElementsByClassName("gif")[2], // the container element
    renderer: 'svg', // use 'svg' for vector-based rendering
    loop: true,      // loop animation
    autoplay: true,  // start automatically
    path: './Assets/Laptop.json' // path to your Lottie JSON file
  });


const nextscrollFun = () => {
  const parent = document.getElementsByClassName("cards")[0];
  parent.scrollLeft += 920;
}

const prevscrollFun = () => {
  const parent = document.getElementsByClassName("cards")[0];
  if(parent.scrollLeft > 0) {
    parent.scrollLeft -= 920;
  }
}