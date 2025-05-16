//Show an alert when the website loads
window,addEventListener('load',()=>{alert('Welcome to My Educational website!');});
//Show "Back to Top"button when scrolling down
const backToTopBtn=document.getElementById('backToTop');
window.onscroll=()=>{if(window.scrolly>300){backToTopBtn.style.display='block';}else{backToTopBtn.display='none';}};
// Scroll to top when button is clicked
backToTopBtn.onclick=()=>{window.scrollTo({top:0,behavior:'smooth'});};
//course data
const courses=[{title:"MATHEMATICS FOR O-LEVEL",description:"Learn the the Basic Mathematics concepts."},{title:"MATHEMATICS FOR O-LEVEL",description:"Learn the the Basic Mathematics concepts."},{title:"PHYSICS FOR O-LEVEL",
    description:"The concept of Physics."}]
    //Elements
    const courseList=document.getElementById('courseList');
    const searchInput=document.getElementById('searchInput');
    // Function to display courses
    function displayCourses(courseArray){courseList.innerHTML='';courseArray.forEach(course=>{const li=document.createElement('li');li.innerHTML='<strong>${course.title}</strong>:${course.description}';courseList.appendChild(li);})}
// initial display
displayCourses(courses);
//Search filter
searchInput.addEventListener('input',()=>{const keyword=searchInput ).value.toLowerCase();
    const fiteredCourses=courses.filter(course=>
     course.title.toLowerCase().includes(keyword)||
     course.description.toLowerCase().includes(keyword));
     displayCourses(filteredCourses);});
   