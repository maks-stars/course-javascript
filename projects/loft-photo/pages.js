const pagesMap = {
  login: '.page-login',
  main: '.page-main',
  profile: '.page-profile',
};

export default {
  openPage(name) {
    const selector = pagesMap[name];
    const element = document.querySelector(selector);
    const currentPage = element;
    currentPage?.classList.add('hidden');
    currentPage.classList.remove('hidden');
  },
};