import * as Speakers from './speakersData.js';

export default class SpeakerFunctions {
  // TEMPLATE AND TARGET
  speakerTemplate = document.getElementById('speaker-li');

  templateContainer = document.getElementById('speaker-ul');

  createSpeaker = () => {
    Speakers.speakersList.forEach((speaker) => {
      const clone = this.speakerTemplate.content.firstElementChild.cloneNode(true);
      this.setSpeakerData(speaker);
      this.templateContainer.appendChild(clone);
    });
  }

  setSpeakerData = (speaker) => {
    speaker.querySelector('.name').innerText = speaker.name;
    speaker.querySelector('.titles').innerText = speaker.titles;
    speaker.querySelector('.desc').innerText = speaker.bio;
    speaker.querySelector('.speaker-img').src = speaker.photoPath;
  };
}
