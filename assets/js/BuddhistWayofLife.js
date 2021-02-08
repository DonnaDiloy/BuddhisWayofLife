


(function() {
    const quotes = [
      {
        quote:
          "Work out your own salvation. Do not depend on others.",
        author: "Buddha"
      },
      {
        quote:
          "There is no fear for one whose mind is not filled with desires.",
        author: "Buddha"
      },
      {
        quote:
          "If anything is worth doing, do it with all your heart.",
        author: "Buddha "
      },
      {
        quote: "Do not look for a sanctuary in anyone except your self.",
        author: "Buddha"
      },
      {
        quote:
          "No one saves us but ourselves. No one can and no one may. We ourselves must walk the path. ",
        author: "Buddha"
      },
      {
        quote:
          "To live a pure unselfish life, one must count nothing as one’s own in the midst of abundance.",
        author: " Buddha"
      }
    //   {
    //     quote:
    //       "Happiness does not depend on what you have or who you are.It solely relies on what you think",
    //     author: " Buddha"
    //   }
    ];
  
    const btn = document.getElementById("quote-btn");
  
    btn.addEventListener("click", function() {
      let random = Math.floor(Math.random() * quotes.length);
      console.log(random);
  
      document.getElementById("quote").textContent = quotes[random].quote;
      document.querySelector(".author").textContent = quotes[random].author;
    });
  })();