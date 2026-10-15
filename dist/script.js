// Destinos de contacto; las redes quedan pendientes de configurar.
const destinations = {
  'Reforma tu hogar': 'https://jaquelinemartinez.com/servicios/#transforma-espacios',
  'Armoniza tus espacios': 'https://jaquelinemartinez.com/servicios/?scroll=armonia-anchor',
  'Proyectos trabajados': 'https://jaquelinemartinez.com/portafolio/main',
  'Muebles a medida': 'https://jaquelinemartinez.com/nosotros/#directos-fabricantes',
  'Pagina web': 'https://jaquelinemartinez.com/',
  Instagram: 'https://www.instagram.com/jaquelindesign/',
  Facebook: 'https://www.facebook.com/JMdesigninterior',
  LinkedIn: 'https://www.linkedin.com/company/jaqueline-martinez-dise%C3%B1o-interior/posts/?feedView=all',
};
const notice = document.querySelector('.notice');
let noticeTimeout;
document.querySelectorAll('[data-service]').forEach(button => {
  button.addEventListener('click', () => {
    const destination = destinations[button.dataset.service];
    if (destination) { window.location.assign(destination); return; }
    notice.textContent = 'Enlace pendiente de configurar';
    notice.classList.add('visible');
    clearTimeout(noticeTimeout);
    noticeTimeout = setTimeout(() => notice.classList.remove('visible'), 2400);
  });
});
