import pages from './pages.js';
import mainPage from './mainPage.js';
import profilePage from './profilePage.js';
import loginPage from './loginPage.js';


const pageNames = ['login', 'main', 'profile'];

pages.openPage('login');
loginPage.handleEvents();
mainPage.handleEvents();
profilePage.handleEvents();