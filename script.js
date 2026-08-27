document.addEventListener("DOMContentLoaded", function() {
  // Scroll Reveal Animation
  const reveals = document.querySelectorAll(".reveal");
  
  function revealOnScroll() {
    reveals.forEach(el => {
      const windowHeight = window.innerHeight;
      const elementTop = el.getBoundingClientRect().top;
      const elementVisible = 100;
      if (elementTop < windowHeight - elementVisible) {
        el.classList.add("visible");
      }
    });
  }
  
  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // Initial check

  // Custom Cursor
  const cursor = document.querySelector(".cursor");
  if (cursor && window.innerWidth > 800) {
    window.addEventListener("mousemove", (e) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    });
  }

  // Typing Effect
  const textElement = document.getElementById("typedOutput");
  if (textElement) {
    const phrases = [
      "ACTING LEAD × BUSINESS ANALYST × AUTOMATION",
      "5+ YEARS IT EXP × UAT & CRM SYSTEMS",
      "KNIME WORKFLOWS × AI VIBE CODING"
    ];
    
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function typeEffect() {
      let currentPhrase = phrases[phraseIndex];
      
      if (isDeleting) {
        textElement.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
      } else {
        textElement.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
      }

      if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true;
        typingSpeed = 2000;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typingSpeed = 500;
      }

      setTimeout(typeEffect, typingSpeed);
    }
    setTimeout(typeEffect, 1000);
  }

  // Interactive Kid Luffy Companion Reactions (Raising hand with Meat when scrolling up)
  const luffyCompanion = document.getElementById("luffyCompanion");
  const luffyHat = document.getElementById("luffyHat");
  const luffyArmRight = document.getElementById("luffyArmRight");
  const luffyMeat = document.getElementById("luffyMeat");
  const luffyBubble = document.getElementById("luffyBubble");
  const luffyEyes = document.getElementById("luffyEyes");
  const luffyMouth = document.getElementById("luffyMouth");
  
  let isGrumpy = false;
  let scrollTimeout;

  // Click behavior: Pulls straw hat over eyes angrily/shyly
  if (luffyCompanion) {
    luffyCompanion.addEventListener("click", () => {
      isGrumpy = true;
      luffyHat.style.transform = "translateY(16px) rotate(-5deg)";
      luffyEyes.style.opacity = "0"; 
      luffyMouth.setAttribute("d", "M 70 95 Q 80 88 90 95"); 
      luffyBubble.textContent = "Hey! Don't touch my hat!";
      
      setTimeout(() => {
        isGrumpy = false;
        luffyHat.style.transform = "translateY(0px) rotate(0deg)";
        luffyEyes.style.opacity = "1"; 
        luffyMouth.setAttribute("d", "M 68 90 Q 80 102 92 90"); 
        luffyBubble.textContent = "Shishishi! 🍖";
      }, 2500);
    });
  }

  // Scroll behavior: Raises hand holding meat and says "MEAT!" when scrolling up
  let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  window.addEventListener("scroll", () => {
    let st = window.pageYOffset || document.documentElement.scrollTop;
    
    if (!isGrumpy) {
      if (st < lastScrollTop) {
        // Scrolling UP -> Raises hand up and holds meat ("MEAT!")
        luffyArmRight.setAttribute("y2", "70");
        luffyArmRight.setAttribute("x2", "135");
        luffyMeat.style.opacity = "1";
        luffyBubble.textContent = "MEAT! 🍖";
      } else {
        // Scrolling DOWN -> Stretches arm outward
        luffyArmRight.setAttribute("y2", "120");
        luffyArmRight.setAttribute("x2", "150");
        luffyMeat.style.opacity = "0";
        luffyBubble.textContent = "Gomu Gomu! 🚀";
      }
    }
    
    lastScrollTop = st <= 0 ? 0 : st;

    // Reset arm and meat after scrolling stops
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      if (!isGrumpy) {
        luffyArmRight.setAttribute("y2", "120");
        luffyArmRight.setAttribute("x2", "140");
        luffyMeat.style.opacity = "0";
        luffyBubble.textContent = "Set sail for data! ⚓";
      }
    }, 400);
  });
});

// Interactive Terminal Command Executor
function executeCmd(action) {
  const feedback = document.getElementById("copyFeedback");
  if (action === 'email') {
    navigator.clipboard.writeText("npsreehariprasad@gmail.com");
    feedback.textContent = "COPIED EMAIL TO CLIPBOARD!";
    setTimeout(() => {
      window.location.href = "mailto:npsreehariprasad@gmail.com";
    }, 400);
  } else if (action === 'linkedin') {
    feedback.textContent = "OPENING LINKEDIN...";
    window.open("https://www.linkedin.com/in/sreeharinp/", "_blank");
  } else if (action === 'github') {
    feedback.textContent = "OPENING GITHUB...";
    window.open("http://github.com/Sreekuttan28", "_blank");
  }
  
  setTimeout(() => {
    feedback.textContent = "";
  }, 3000);
}