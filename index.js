function goHome() {
    var position = 0;
    window.scrollTo({
      top: position,
      behavior: 'smooth'
    });
}

function goAboutMe() {
    var positionVh = 80;
    var positionPx = (positionVh * window.innerHeight) / 100;

    window.scrollTo({
      top: positionPx,
      behavior: 'smooth'
    });
}
function goSkills() {
  var positionVh = 180;
  var positionPx = (positionVh * window.innerHeight) / 100;

  window.scrollTo({
    top: positionPx,
    behavior: 'smooth'
  });
}


