import SpeakerFunctions from './speakerSetUp.js';
import MobileMenu from './mobileMenu.js';

const sFunctions = new SpeakerFunctions();
const mobileMenu = new MobileMenu();

window.addEventListener('load', () => {
  // init? dont know how to avoid the linter error I just need to set the references
  // If I use the constructor only I get linter error
  mobileMenu.init();

  // if there is a place to place the speakers
  if (sFunctions.templateContainer != null) {
    sFunctions.setSpeakerData();
  }
});
