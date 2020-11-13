function blink(){
    let helloblink = document.querySelector('#blink');
    if (helloblink.style.visibility === 'hidden')
    {
      helloblink.style.visibility = 'visible';
    } 
    else
    {
      helloblink.style.visibility = 'hidden';
    }
    
  }
  //blinked every 500ms
  window.setInterval(blink, 500);
