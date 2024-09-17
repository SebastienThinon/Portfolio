<script setup>
import { ProjetsList } from "./ProjetsListe.vue";
</script>
<template>
  <section id="Projets">
    <section id="dev-web" class="sectionProjetTag">
      <h1>WEB</h1>
      <template v-for="projet in ProjetsList" :key="projet.id">
        <div
          class="ProjetCard"
          id="dev-webCard"
          v-if="projet.theme == 'dev-web'"
        >
          <RouterLink :to="`projet/${projet.id}`">
            <div
              :id="projet.name"
              class="ProjetCardContent"
              :style="projet.imageCard"
              @click=""
            >
              {{ projet.name }}
            </div>
          </RouterLink>
        </div>
      </template>
    </section>
    <section id="dev" class="sectionProjetTag">
      <h1>DEV</h1>
      <template v-for="projet in ProjetsList" :key="projet.id">
        <div class="ProjetCard" id="devCard" v-if="projet.theme == 'dev'">
          <RouterLink :to="`projet/${projet.id}`">
            <div
              :id="projet.name"
              class="ProjetCardContent"
              :style="projet.imageCard"
              @click=""
            >
              {{ projet.name }}
            </div>
          </RouterLink>
        </div>
      </template>
    </section>
    <section id="motion" class="sectionProjetTag">
      <h1>MOTION DESIGN</h1>
      <template v-for="projet in ProjetsList" :key="projet.id">
        <div class="ProjetCard" id="motionCard" v-if="projet.theme == 'motion'">
          <RouterLink :to="`projet/${projet.id}`">
            <div
              :id="projet.name"
              class="ProjetCardContent"
              :style="projet.imageCard"
              @click=""
            >
              {{ projet.name }}
            </div>
          </RouterLink>
        </div>
      </template>
    </section>
    <section id="design" class="sectionProjetTag">
      <h1>DESIGN</h1>
      <template v-for="projet in ProjetsList" :key="projet.id">
        <div class="ProjetCard" id="designCard" v-if="projet.theme == 'design'">
          <RouterLink :to="`projet/${projet.id}`">
            <div
              :id="projet.name"
              class="ProjetCardContent"
              :style="projet.imageCard"
              @click=""
            >
              {{ projet.name }}
            </div>
          </RouterLink>
        </div>
      </template>
    </section>
    <section id="autre" class="sectionProjetTag">
      <h1>AUTRE</h1>
      <template v-for="projet in ProjetsList" :key="projet.id">
        <div class="ProjetCard" id="autreCard" v-if="projet.theme == 'autre'">
          <RouterLink :to="`projet/${projet.id}`">
            <div
              :id="projet.name"
              class="ProjetCardContent"
              :style="projet.imageCard"
              @click=""
            >
              {{ projet.name }}
            </div>
          </RouterLink>
        </div>
      </template>
    </section>
  </section>
</template>
