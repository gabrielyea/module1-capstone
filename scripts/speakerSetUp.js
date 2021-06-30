import * as Speakers from './speakersData.js';

export default class SpeakerFunctions {
  // TEMPLATE AND TARGET
  speakerTemplate = document.getElementById('speaker-li');

  templateContainer = document.getElementById('speaker-ul');

  createSpeakers = () => {
    Speakers.speakersList.forEach((speakerData) => {
      const clone = this.speakerTemplate.content.firstElementChild.cloneNode(true);
      this.setSpeakerData(clone, speakerData);
      this.templateContainer.appendChild(clone);
    });
  }

  setSpeakerData = (speaker, data) => {
    speaker.querySelector('.name').innerText = data.name;
    speaker.querySelector('.titles').innerText = data.titles;
    speaker.querySelector('.desc').innerText = data.bio;
    speaker.querySelector('.speaker-img').src = data.photoPath;
  };
}
