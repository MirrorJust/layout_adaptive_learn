document.querySelectorAll('.step-list__button').forEach(function(tabsBtn) {
  tabsBtn.addEventListener('click', function(e) {
    const path = e.currentTarget.dataset.path;

    document.querySelectorAll('.step-list__button').forEach(function(btn) {
      btn.classList.remove('step-list__button--active')
    });

    e.currentTarget.classList.add('step-list__button--active');

    document.querySelectorAll('.tab-item').forEach(function(tabsBtn) {
      tabsBtn.classList.remove('tab-item--active')
    });

    document.querySelector(`[data-target="${path}"]`).classList.add('tab-item--active');
  });
});
