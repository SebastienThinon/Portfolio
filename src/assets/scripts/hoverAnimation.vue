<script setup>
setTimeout(function () {
  let constrain = 300;
  let mouseOverContainer = document.getElementsByClassName("ProjetCardContent");

  function transforms(x, y, el) {
    let box = el.getBoundingClientRect();
    let calcX = -(y - box.y - box.height / 2) / constrain;
    let calcY = (x - box.x - box.width / 2) / constrain;

    return (
      "perspective(100px) " +
      "   rotateX(" +
      calcX +
      "deg) " +
      "   rotateY(" +
      calcY +
      "deg) "
    );
  }

  function transformElement(el, xyEl) {
    el.style.transform = transforms.apply(null, xyEl);
  }

  for (let i = 0; i < mouseOverContainer.length; i++) {
    mouseOverContainer[i].onmousemove = function (e) {
      let xy = [e.clientX, e.clientY];
      let position = xy.concat([mouseOverContainer[i]]);

      window.requestAnimationFrame(function () {
        transformElement(mouseOverContainer[i], position);
      });
    };
  }
}, 300);
</script>
