document.querySelectorAll('.faq__link').forEach(function(faqLink) {
  faqLink.addEventListener('click', function(e) {
    document.querySelectorAll('.faq_link-description').forEach(function(el) {
      el.classList.remove('faq_link-description--active');
    });

    const workEl = faqLink.querySelector('.faq_link-description');
    workEl.classList.add('faq_link-description--active')

    e.currentTarget.addEventListener('click', function() {
      workEl.classList.toggle('faq_link-description--active')
    })


  });

})
