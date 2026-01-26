// もっと見るも
document.addEventListener('click', function (e) {
  const btn = e.target.closest('.product__description-more');
  if (!btn) return;

  const wrapper = btn.closest('.product__description-wrapper');
  const desc = wrapper.querySelector('.product__description');

  const isOpen = btn.getAttribute('aria-expanded') === 'true';

  btn.setAttribute('aria-expanded', !isOpen);
  desc.classList.toggle('is-open');

  btn.textContent = isOpen ? 'もっと見る' : '閉じる';
});

// QA
document.addEventListener('DOMContentLoaded', function () {
  const qaItems = document.querySelectorAll('.product-qa__item');
  if (!qaItems.length) return;

  qaItems.forEach((item) => {
    const question = item.querySelector('.product-qa__question');
    const answer = item.querySelector('.product-qa__answer');
    if (!question || !answer) return;

    question.setAttribute('role', 'button');
    question.setAttribute('tabindex', '0');
    question.setAttribute('aria-expanded', 'false');
    answer.hidden = true;
  });
});

document.addEventListener('click', function (e) {
  const question = e.target.closest('.product-qa__question');
  if (!question) return;

  const item = question.closest('.product-qa__item');
  const answer = item ? item.querySelector('.product-qa__answer') : null;
  if (!answer) return;

  const isOpen = question.getAttribute('aria-expanded') === 'true';
  question.setAttribute('aria-expanded', String(!isOpen));
  answer.hidden = isOpen;
});

document.addEventListener('keydown', function (e) {
  const question = e.target.closest('.product-qa__question');
  if (!question) return;

  if (e.key !== 'Enter' && e.key !== ' ') return;
  e.preventDefault();
  question.click();
});