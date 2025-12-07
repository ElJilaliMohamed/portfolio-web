// const init = () => {
//   const form = document.querySelector('.js-form');
//   form?.addEventListener('submit', (e) => {
//     e.preventDefault();

//     const formData = new FormData(form);
//     const searchTerm = formData.get('search')?.toString();
//     const url = new URL('/search', window.location.origin);
//     url.searchParams.set('q', searchTerm);
//     window.location.assign(url.toString());
//   });
// };
// init();
