// eslint-disable-next-line no-unused-vars
const bgpic = {
  width: 800,
  height: 450,
  originalWidth: 1920,
  originalHeight: 1080,
  filename: '/assets/bg_small.jpg',
  fullBackgroundName: 'assets/bg.jpg',
};

$(document).ready(() => {
  $('#text').val('Neue Zeiten\nneue [Antworten].');
});

// eslint-disable-next-line no-unused-vars
function reset() {
  // do nothing, stay here
}

function reDraw() {
  addPic1.draw();
  addPic2.draw();
  logo.load();

  window.setTimeout(() => {
    text.draw();
    subText.draw();
    pin.draw();
  }, 10);

  window.setTimeout(() => {
    copyright.draw();
    icon.load();
  }, 20);
}
