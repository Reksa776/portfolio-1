function anim() {
  setTimeout(
    function () {
      var textNew = text[index];
      typeText.innerHTML = textNew.slice(0, i);
      if (statText) {
        if (i > textNew.length) {
          statText = false;
          setTimeout(function () {
            anim();
          }, 300);
          return;
        } else {
          i++;
        }
      } else {
        if (i === 0) {
          if (index > 3) {
            index == 0;
            anim();
          } else {
            index++;
          }
          statText = true;
          setTimeout(() => {
            anim();
          }, 300);
          return;
        } else {
          i--;
        }
      }
      anim();
    },
    statText ? 150 : 60
  );
}
loop: true;
anim();
var typeText = document.querySelector(".write");
var text = ["Selamat Datang", "Saya Web Developer", "Saya Seorang Pelajar"];
var index = 0;
var i = 0;
var statText = true;
