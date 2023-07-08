(function () { /*hide a loading spinner after a delay of 200 milliseconds*/
    window.addEventListener('load', function () {
      setTimeout(function () {
        document.querySelector('.loader').style.display = 'none';
      }, 200);
    });
  
    document.addEventListener('DOMContentLoaded', function () {
      var frame1 = document.querySelector('.frame1');
      var frame2 = document.querySelector('.frame2');
      var frame3 = document.querySelector('.frame3');
      /*sets the line-height CSS property of the frame3 element to 210px*/
      frame3.style.lineHeight = '210px';
  
      setTimeout(function () {
        frame3.style.display = 'block';
        frame3.classList.add('slide-top');
      }, 380);
  
      setTimeout(function () { /*480 milliseconds to increase the size of the frame3 element*/
        frame3.style.transform = 'scale(1.2)';
        frame3.style.transition = 'all 1s ease-in-out';
      }, 480);

    });
  })();
  
  

