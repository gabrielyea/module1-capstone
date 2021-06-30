import * as Speakers from './speakersData.js';

export default class SpeakerFunctions {
// TEMPLATE AND TARGET
speakerTemplate = document.getElementById('speaker-li');

templateContainer = document.getElementById('speaker-ul');

setSpeakerData = () => {
  Speakers.speakersList.forEach((speaker) => {
    const clone = this.speakerTemplate.content.firstElementChild.cloneNode(true);
    clone.querySelector('.name').innerText = speaker.name;
    clone.querySelector('.titles').innerText = speaker.titles;
    clone.querySelector('.desc').innerText = speaker.bio;
    clone.querySelector('.speaker-img').src = speaker.photoPath;
    this.templateContainer.appendChild(clone);
  });
};
}
