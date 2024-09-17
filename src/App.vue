<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <div class="hidden">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <a href="#Projets">projets</a>
        <a href="#id">à propos</a>
        <a href="#">contact</a>
      </nav>
    </div>
  </header>
  <RouterView />
</template>
