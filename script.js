let star=document.getElementById('star');
let moon=document.getElementById('moon');
let mountains_behind=document.getElementById('mountains_behind');
let mountains_front=document.getElementById('mountains_front');
let text=document.getElementById('text');
let btn=document.getElementById('btn');
let header=document.querySelector("header")

window.addEventListener('scroll',function(){
    let value = this.window.scrollY;
    star.style.left=value*0.25+'px';
    moon.style.top=value*1.05+'px';
    mountains_behind.style.top=value*0.5+'px';
    mountains_front.style.top=value*0.02+'px';
    text.style.marginRight=value*4+'px';
    text.style.marginTop=value*1.5+'px';
    btn.style.marginTop=value*1.5+'px';
    header.style.top=value*0.5+'px';
})
document.querySelector('header').addEventListener('click', function(event) {
  
    if (event.target.tagName === 'A') {
      // Remove 'active' class from all links
      document.querySelectorAll('header a').forEach(function(link) {
        link.classList.remove('active');
      });

      // Add 'active' class to the clicked link
      event.target.classList.add('active');
    }
  });
