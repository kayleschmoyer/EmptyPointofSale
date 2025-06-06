const btn = document.getElementById('voiceBtn');
const output = document.getElementById('voiceOutput');

if ('webkitSpeechRecognition' in window) {
  const recog = new webkitSpeechRecognition();
  recog.continuous = false;
  recog.lang = 'en-US';
  btn.addEventListener('click', () => {
    output.textContent = 'Listening...';
    recog.start();
  });
  recog.onresult = event => {
    const text = event.results[0][0].transcript;
    output.textContent = text;
    // Demo API call
    fetch(`/api/echo?msg=${encodeURIComponent(text)}`)
      .then(r => r.json())
      .then(d => console.log('Echo from server:', d));
  };
} else {
  btn.disabled = true;
  output.textContent = 'Speech recognition not supported';
}
console.log('Dashboard loaded');
