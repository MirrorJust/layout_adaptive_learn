document.querySelectorAll('.faq__link').forEach(function(faqLink) {
  faqLink.addEventListener('click', function() {

    const workEl = faqLink.querySelector('.faq_link-description');
    workEl.classList.toggle('faq_link-description--active');

    const svgEl = faqLink.querySelector('.faq_icon');
    console.log(svgEl);
    svgEl.classList.toggle('faq__icon--open');
  });

});
