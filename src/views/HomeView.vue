<script setup>
//import TheWelcome from '../components/TheWelcome.vue'
import { RouterLink, RouterView } from "vue-router";
import callToAction from "../components/CallToAction.vue";
import projetsCards from "../components/ProjetsCards.vue";
import hoverAnimationScript from "../assets/scripts/hoverAnimation.vue";
import { ref } from "vue";

const componentKey = ref(0);

function reloadComponent() {
  componentKey.value += 1; // Change la clé pour forcer le rechargement
}
</script>

<template>
  <main>
    <callToAction :key="componentKey" />
    <projetsCards />
    <hoverAnimationScript />
  </main>
</template>
