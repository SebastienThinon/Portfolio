<style scoped>
@import "../assets/main.css";
</style>

<script>
import { RouterLink, RouterView } from "vue-router";
import { ProjetsList } from "../components/ProjetsListe.vue";

export default {
  data() {
    return {
      projetId: null,
      projetData: null,
      erreur: null,
    };
  },
  mounted() {
    // Récupération du paramètre id de la route
    this.projetId = this.$route.params.id;
    this.findProjet();
  },
  methods: {
    findProjet() {
      this.projetData = ProjetsList.find(
        (projet) => projet.id == this.projetId
      );

      if (!this.projetData) {
        this.erreur = "projet non trouvé";
        this.redirectTo404();
      }
    },
    redirectTo404() {
      this.$router.replace({ name: "Page404" });
    },
  },
};
</script>

<template>
  <main id="ContainerProjet">
    <section class="illustrationSection">
      <div id="video" v-if="projetData?.video">
        <iframe
          width="560"
          height="315"
          :src="projetData.video + '?rel=0'"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>

      <div id="designProjet" v-if="projetData?.theme == 'design'">
        <img
          :src="projetData.images.image1.src"
          :alt="projetData.images.image1.alt"
        />
      </div>
      <div id="dev-web" v-if="projetData?.theme == 'dev-web'">
        <template v-if="projetData?.images">
          <template v-for="img in projetData.images" :key="img">
            <img :src="img" alt="" />
          </template>
        </template>
      </div>
      <div id="dev" v-if="projetData?.theme == 'dev'">
        <template v-if="projetData?.images">
          <template v-for="img in projetData.images" :key="img">
            <img :src="img" alt="" />
          </template>
        </template>
      </div>
    </section>
    <section class="descriptionSection">
      <span id="descriptionSection">
        <div id="home">
          <RouterLink to="/">←</RouterLink>
        </div>
        <div>
          <template v-if="projetData?.tag">
            <div id="tagProjet">
              <p v-for="tag in projetData.tag" :key="tag">
                #{{ tag }}&nbsp&nbsp
              </p>
            </div>
          </template>
          <h1 id="titleProjet" v-if="projetData">{{ projetData.name }}</h1>
          <p id="descriptionProjet" v-if="projetData">{{ projetData.descr }}</p>
        </div>
      </span>
    </section>
  </main>
</template>

<style scoped></style>
