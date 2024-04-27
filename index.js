function goHome() {
    var position = 0;
    window.scrollTo({
      top: position,
      behavior: 'smooth'
    });
  }

  function goAboutMe() {
    var positionVh = 100;
    var positionPx = (positionVh * window.innerHeight) / 100;

    window.scrollTo({
      top: positionPx,
      behavior: 'smooth'
    });
  }

