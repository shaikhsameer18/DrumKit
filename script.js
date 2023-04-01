function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
}


function removeTransition(e) {
    if (e.propertyName !== "transform") return;
    this.classList.remove('playing')
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);

/* 
The code has two functions: playSound and removeTransition.

The first function plays a sound when the user presses a key on their keyboard, while the second removes any transition that is currently playing from an element.

The code starts by declaring keys as an array of objects with data-key attributes for each key pressed on the keyboard.

Then it declares audio as an object with data-key="e" and e being the event object passed to it in order to listen for events such as "keydown".

It then uses document.querySelectorAll() to find all elements with class names .key which are children of window, so they can be listened for events like "transitionend", which will call removeTransition(). 

*/