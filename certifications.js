const first_cat = document.querySelectorAll(".cc p")[0];
first_cat.classList.add('default1');

const first_line = document.querySelectorAll(".cc .line")[0];
first_line.classList.add('default2');

const cd = document.getElementsByClassName("certification-div")[0];
const def_Div = document.createElement("div");
def_Div.className = "default3";
cd.appendChild(def_Div);



const certify = (name,cat) => {
  var certificates = [
    {
      "CertiImage" : "./Assets/html.png",
      "CertiCompany" : "Certiport | Pearson",
      "CertiName" : "HTML & CSS Certification",
      "CertiLink" : "./Assets/HTML_CSS.pdf",
      "category"  : "global"
    },
    {
      "CertiImage" : "./Assets/oracle_java.png",
      "CertiCompany" : "ORACLE",
      "CertiName" : "JAVA Certification",
      "CertiLink" : "./Assets/ORACLE_JAVA.pdf",
      "category"  : "global"
    },
    {
      "CertiImage" : "./Assets/redhat.png",
      "CertiCompany" : "Red Hat",
      "CertiName" : "RHCSA Certification",
      "CertiLink" : "./Assets/Redhat.pdf",
      "category"  : "global"
    },
    {
      "CertiImage" : "./Assets/iot.png",
      "CertiCompany" : "NPTEL",
      "CertiName" : "Internet Of Things",
      "CertiLink" : "./Assets/IOT.pdf",
      "category"  : "global"
    },
    {
      "CertiImage" : "./Assets/cloud.png",
      "CertiCompany" : "NPTEL",
      "CertiName" : "Cloud Computing",
      "CertiLink" : "./Assets/Cloud.pdf",
      "category"  : "global"
    },
    {
      "CertiImage" : "./Assets/cisco_c.png",
      "CertiCompany" : "CISCO",
      "CertiName" : "C Essentials",
      "CertiLink" : "./Assets/Cisco_C.pdf",
      "category"  : "certificates"
    },

    {
      "CertiImage" : "./Assets/cisco_cpp.png",
      "CertiCompany" : "CISCO",
      "CertiName" : "CPP Essentials",
      "CertiLink" : "./Assets/Cisco_Cpp.pdf",
      "category"  : "certificates"
    },
    {
      "CertiImage" : "./Assets/cisco_python.png",
      "CertiCompany" : "CISCO",
      "CertiName" : "Python Essentials",
      "CertiLink" : "./Assets/Cisco_Python.pdf",
      "category"  : "certificates"
    },
    {
      "CertiImage" : "./Assets/oracle_jc1.png",
      "CertiCompany" : "ORACLE",
      "CertiName" : "JAVA Foundations",
      "CertiLink" : "./Assets/Oracle_Course_Java1.pdf",
      "category"  : "certificates"
    },
    {
      
      "CertiImage" : "./Assets/oracle_jc2.png",
      "CertiCompany" : "ORACLE",
      "CertiName" : "JAVA Programming",
      "CertiLink" : "./Assets/Oracle_Course_Java2.pdf",
      "category"  : "certificates"
    },
    {
      
      "CertiImage" : "./Assets/redhat_python.png",
      "CertiCompany" : "REDHAT",
      "CertiName" : "Python Programming",
      "CertiLink" : "./Assets/Redhat_python.pdf",
      "category"  : "certificates"
    },
    {
      "CertiImage" : "./Assets/RH124.png",
      "CertiCompany" : "REDHAT",
      "CertiName" : "RHSA 1",
      "CertiLink" : "./Assets/RH124.pdf",
      "category"  : "certificates"
    },
    {
      "CertiImage" : "./Assets/RH134.png",
      "CertiCompany" : "REDHAT",
      "CertiName" : "DO180",
      "CertiLink" : "./Assets/RH134.pdf",
      "category"  : "certificates"
    },
    {
      "CertiImage" : "./Assets/fsd_internship.png",
      "CertiCompany" : "Technical Hub",
      "CertiName" : "FSD with React Native",
      "CertiLink" : "./Assets/FSD_Internship.pdf",
      "category"  : "internships"
    },
    {
      "CertiImage" : "./Assets/js_2_Badge.png",
      "CertiCompany" : "Cisco",
      "CertiName" : "JavaScript Essentials 2",
      "CertiLink" : "./Assets/FSD_Internship.pdf",
      "category"  : "badges"
    },
    {
      "CertiImage" : "./Assets/html_essentials.png",
      "CertiCompany" : "Cisco",
      "CertiName" : "HTML Essentials",
      "CertiLink" : "./Assets/FSD_Internship.pdf",
      "category"  : "badges"
    }

    
];

var tulasi = 0;

certificates.map((cert,index) =>  {
  if(cert.category === cat) {
    
    var certificate = `
                <div class="pdf" data-aos="fade-up" >
                <div class="certi_image">
                    <img src=${cert.CertiImage} alt="" class="image_icon">
                    <div class="view_cert">
                        <button class="view"><a href=${cert.CertiLink} target = "_blank" >View Certificate</a></button>
                    </div>
                </div>
                <div class="certi_info">
                    <div class="certi_c"><div class="certi_com">${cert.CertiCompany}</div></div>
                    <div class="name_date">
                         <div class="certi_name"><h3>${cert.CertiName}</h3></div>
                    </div>
                </div>
            </div>
  `

      
      var parent = document.getElementsByClassName(name)[0];
      parent.innerHTML += certificate

      if(cert.category === 'badges') {
        const p = document.getElementsByClassName("pdf")[tulasi];
        p.style = "width:280px"
        const image = document.getElementsByClassName("image_icon")[tulasi];
        image.style = "width:280px"
        document.getElementsByClassName("view")[tulasi].innerText = "View Badge"
        tulasi = tulasi + 1
      }
  }
 
});
}
certify("default3","global");

const navigate = (event) => {
  
  first_cat.classList.remove('default1');
  first_line.classList.remove('default2');

  const del = document.getElementsByClassName("default3")[0];
  if(del) del.remove();

  const allItems = document.querySelectorAll(".cc p");

 
  allItems.forEach(item => {
    item.classList.remove('active');
  });

  event.target.classList.add('active');

  const lines = document.querySelectorAll(".cc .line");

  lines.forEach(line => {
    line.classList.remove('click');
  });

  event.target.nextElementSibling.classList.add('click');

  const category = event.target.id;

  console.log(category);

  const parent = document.getElementsByClassName("certification-div")[0];
  
  const del1 = document.getElementsByClassName("nrml_cert")[0];
    if(del1) del1.remove();

    const del2 = document.getElementsByClassName("internships_cert")[0];
    if(del2) del2.remove();

    const del3 = document.getElementsByClassName("digital_badges")[0];
    if(del3) del3.remove();
    const del4 = document.getElementsByClassName("global_cert")[0];
    if(del4) del4.remove();
  
  if(category === "global") {
    

    const newDiv = document.createElement("div");
    newDiv.className = "global_cert";
    parent.appendChild(newDiv);
    certify("global_cert",category);
  }

  if(category === "certificates") {
    
  

    const newDiv = document.createElement("div");
    newDiv.className = "nrml_cert";
    parent.appendChild(newDiv);
    certify("nrml_cert",category);
  }

  if(category === "internships") {
    
    const newDiv = document.createElement("div");
    newDiv.className = "internships_cert";
    parent.appendChild(newDiv);
    certify("internships_cert",category);
  }

  if(category === "badges") {
   

    const newDiv = document.createElement("div");
    newDiv.className = "digital_badges";
    parent.appendChild(newDiv);
    certify("digital_badges",category);
  }
  





}

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