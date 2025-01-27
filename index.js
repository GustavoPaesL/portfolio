function goTo(positionVh) {

  var positionPx = (positionVh * window.innerHeight) / 100;

  window.scrollTo({
    top: positionPx,
    behavior: 'smooth'
  });
}

