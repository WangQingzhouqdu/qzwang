(() => {
  const filterButtons = [...document.querySelectorAll('[data-filter]')];
  const cards = [...document.querySelectorAll('[data-category]')];
  const count = document.querySelector('[data-result-count]');
  if (!filterButtons.length || !cards.length) return;
  function selectCategory(category, updateAddress = true) {
    const available = filterButtons.some(button => button.dataset.filter === category);
    const selected = available ? category : 'all';
    let visible = 0;
    cards.forEach(card => {
      card.hidden = selected !== 'all' && card.dataset.category !== selected;
      if (!card.hidden) visible++;
    });
    filterButtons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.filter === selected)));
    if (count) count.textContent = `显示 ${visible} 个项目`;
    if (updateAddress) {
      const url = new URL(location.href);
      if (selected === 'all') url.searchParams.delete('category');
      else url.searchParams.set('category', selected);
      try { history.replaceState(null, '', url); } catch (_) { /* Direct file preview still supports filtering. */ }
    }
  }
  filterButtons.forEach(button => button.addEventListener('click', () => selectCategory(button.dataset.filter)));
  selectCategory(new URL(location.href).searchParams.get('category') || 'all', false);
})();
