btnWhiteMode.addEventListener('click', getWhiteMode);
bars__menu.addEventListener("click", animateBars);
btnSectionKnowledge[0].addEventListener("click", () => targetSection[0].scrollIntoView({ behavior: 'smooth' }));
btnSectionWork[0].addEventListener("click", () => targetSection[1].scrollIntoView({ behavior: 'smooth' }));
btnSectionMessage[0].addEventListener("click", () => targetSection[2].scrollIntoView({ behavior: 'smooth' }));

function getWhiteMode(){
    pageOne.classList.toggle('-whiteMode');
    pageTwo.classList.toggle('-whiteMode');
    pageThree.classList.toggle('-whiteMode');
    pageFour.classList.toggle('-whiteMode');

    pageOneMain.classList.toggle('mainMode');
    pageTwoMain.classList.toggle('mainMode');
    pageThreeMain.classList.toggle('mainMode');

    bars__menu.classList.toggle('mode');
    
    lettersP.forEach(p => {
      p.classList.toggle('letters');
  });
    lettersH1.forEach(h1 => {
      h1.classList.toggle('letters');
  });
    lettersH2.forEach(h2 => {
      h2.classList.toggle('letters');
  });
    lettersH3.forEach(h3 => {
      h3.classList.toggle('letters');
  });
    lettersH4.forEach(h4 => {
      h4.classList.toggle('letters');
  });

  borderBar.forEach(c => {
    c.classList.toggle('borderBar');
});
  iconsTitle.forEach(d => {
    d.classList.toggle('iconMode');
});

}

function animateBars(){
    line1__bars.classList.toggle("activeline1__bars-menu");
    line2__bars.classList.toggle("activeline2__bars-menu");
    line3__bars.classList.toggle("activeline3__bars-menu");

    paragraph.forEach(c => {
      c.classList.toggle('hidden');
  });
  menuShift.forEach(m => {
      m.classList.toggle('show');

      setTimeout(() => {
        m.classList.toggle('animate');
    }, 800);
  });
}
