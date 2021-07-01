import * as Speakers from './speakersData.js';

export default class SpeakerFunctions {
  // TEMPLATE AND TARGET
  speakerTemplate = document.getElementById('speaker-li');

  templateContainer = document.getElementById('speaker-ul');

  toggleBtn = document.getElementById('toggle-speaker');

  speakerList = [];

  createSpeakers = () => {
    Speakers.speakersList.forEach((speakerData) => {
      const clone = this.speakerTemplate.content.firstElementChild.cloneNode(true);
      this.setSpeakerData(clone, speakerData);
      this.templateContainer.appendChild(clone);
      this.speakerList.push(clone);
    });

    this.toggleBtn.addEventListener('click', () => {
      this.toggleSpeakerFrom(2);
    });
  }

  setSpeakerData = (speaker, data) => {
    speaker.querySelector('.name').innerText = data.name;
    speaker.querySelector('.titles').innerText = data.titles;
    speaker.querySelector('.desc').innerText = data.bio;
    speaker.querySelector('.speaker-img').src = data.photoPath;
  };

  // If params null toggles all speakers
  toggleSpeakerVisibility = (numToShow = this.speakerList.length) => {
    this.speakerList.forEach((speaker, index) => {
      if (index >= numToShow) {
        return;
      }
      speaker.classList.toggle('show');
    });
  };

  // index is the default number of speakers that should be always on display
  // also set the message inside this function just because it was small
  toggleSpeakerFrom = (index) => {
    const setMessage = (msg) => {
      this.toggleBtn.innerHTML = msg;
    };
    // probably a much better way to do this but got a little bit lazy
    const btnMsg = this.toggleBtn.innerText;
    if (btnMsg === 'Show more' ? setMessage('Show less') : setMessage('Show more'));

    for (let i = index; i < this.speakerList.length; i += 1) {
      this.speakerList[i].classList.toggle('show');
    }
  }
}
