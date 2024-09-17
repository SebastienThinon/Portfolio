<script setup>
const options = {
  effect: "txt-an-8",
  text: [
    " d'applications web",
    " de sites web",
    " d'interfaces UX/UI",
    " de parcours pédagogiques",
  ],
};
</script>

<template>
  <section class="CallToAction" id="particles-js">
    <div class="CallToActionContainer">
      <p id="first">Bonjour, je suis Sébastien Thinon</p>
      <span>
        <p id="second">Je suis intégrateur et développeur&nbsp</p>
        <VueTxtAnime :options="options" />
      </span>
    </div>
  </section>
</template>
