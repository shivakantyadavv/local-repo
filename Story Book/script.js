// Highlight the active chapter link on scroll
const links = [...document.querySelectorAll('.chapters a')];
const sections = links.map(a => document.querySelector(a.getAttribute('href')));

const onScroll = () => {
  const y = window.scrollY + 120;
  let active = 0;
  sections.forEach((sec, i) => {
    if (sec.offsetTop <= y) active = i;
  });
  links.forEach((l, i) => l.style.borderColor = i === active ? 'rgba(243,166,181,.85)' : 'rgba(200,196,227,.25)');
};
document.addEventListener('scroll', onScroll, {passive:true});
onScroll();
