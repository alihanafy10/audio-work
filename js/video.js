
  const lis = document.querySelectorAll(".under-div ul li");
  const contents = document.querySelectorAll(".content");

contents.forEach((el, idx) => {
    if (idx == 1 || idx == 2) {
          el.style.display ='none'
      }
  })

  lis.forEach((li, index) => {
      li.addEventListener("click", () => {
          lis.forEach((el) => {
            el.classList.remove("active");
        })
      contents.forEach((content) => {
        content.style.display = "none";
      });
      li.classList.add("active");
      contents[index].style.display = "block";
    });
  });


/******************* vid ********************** */
  


    const playerr = new Plyr('#playerr', {
        controls: [
            'play-large',
            'progress',
            'current-time',
            'captions',
            
            'fullscreen',
        ],
        youtube: {
            noCookie: true,
            rel: 0,
            showinfo: 0,
            iv_load_policy: 3
        }
    })
    window.playerr = playerr;
    playerr.on('ready', event => {
        playerr.on('play', event => console.log('play'));
        playerr.on('pause', event => console.log('puss'));
    })

