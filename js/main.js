       /*===== Resize Navbar on Scroll =====*/
       var navbar = document.querySelector(".navbar");
       // when the scroll is higher than 20 viewport height, add the sticky classs to the tag with a class navbar 
       window.onscroll = () =>{
       this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
     }
      /*===== Nav Toggler =====*/
      const navMenu = document.querySelector(".menu");
      navToggle = document.querySelector(".menu-btn");
      if(navToggle)
      {
          navToggle.addEventListener("click", () =>
          {
              navMenu.classList.toggle("active");
          })
      }
      // closing menu when link is clicked
      const navLink = document.querySelectorAll(".nav-link");
      function linkAction()
      {
          const navMenu = document.querySelector(".menu");
          navMenu.classList.remove("active")
      }
      navLink.forEach(n => n.addEventListener("click", linkAction))
      /*===== Scroll Section Active Link =====*/

      const Section=document.querySelectorAll('section[id]')
      function scrollActive()
      {
          const scrollY = window.pageYOffset
          Section.forEach(current => {
              const sectionHeight = current.offsetHeight
              const sectionTop = current.offsetTop - 50;
              sectionId = current.getAttribute('id')
              if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight)
              {
                  document.querySelector('.links a[href*=' + sectionId + ']').classList.add('active')
              }
              else
              {
                document.querySelector('.links a[href*=' + sectionId + ']').classList.remove('active')
              }
          })
      }
      window.addEventListener('scroll', scrollActive)
      /*===== Skills Animation =====*/
      const skills_wrap = document.querySelector(".tab__item"),
      skills_bar = document.querySelectorAll(".progress-line");
      window.addEventListener("scroll", () => {
          skillsEffect();
      })
      // every time we scroll checking, we exceeded the about-skills or not
      function checkScroll(el)
      {
          //getting the top position of about-skills relative to view port, in other words we need to get
          // amount of pixels between about-skills and the top edge of the window.
          let rect = el.getBoundingClientRect();
          // after knowing the amount of pixels between the top edge of about skills and the top edge of window
          // now we will check we exceeded the bottom edge of about skills or not
          if(window.innerHeight >= rect.top + el.offsetHeight) return true;
          return false;
      }
      function skillsEffect()
      {
          if(!checkScroll(skills_wrap)) return;
          skills_bar.forEach((skill) => (skill.style.width = skill.dataset.progress));
      }
      
/* about tabs*/
const tabs=document.querySelectorAll('[data-target]')
const tabContents=document.querySelectorAll('[data-content]');
tabs.forEach((tab)=>{
    tab.addEventListener('click',()=>{
        const target=document.querySelector(tab.dataset.target);
        tabContents.forEach((tabContents)=>{
            tabContents.classList.remove('tabs__active')
        }  );
        target.classList.add('tabs__active');
        tabs.forEach((tab)=>{
            tab.classList.remove('tabs__active');
        });
        tab.classList.add('tabs__active');
    });
});



    