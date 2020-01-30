<template>
  <div>
    <div class="bg-linen-500 grid grid-cols-12 lg:gap-4">
      <div class="col-span-12 lg:col-span-2">
        <Navigation :settings="siteSettings" />
      </div>

      <div class="col-span-12 lg:col-span-10">
        <nuxt />
      </div>
    </div>
    <div class="w-full">
      <Footer :settings="siteSettings" />
    </div>
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import Navigation from "@/components/Navigation.vue";
export default {
  name: "DefaultLayout",
  components: {
    Footer,
    Navigation
  },
  computed: {
    siteSettings() {
      return this.$store.state.siteSettings;
    }
  },
  head() {
    return {
      meta: [
        {
          hid: "twitter:site",
          name: "twitter:site",
          content: this.siteSettings.twitter
        }
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://cloud.typography.com/7044452/6402012/css/fonts.css"
        }
      ]
    };
  }
};
</script>
