<template>
    <div>Audition</div>
</template>
<script>
export default {
  data: function () {
    return {
      audition: {},
    };
  },
  mounted() {
    this.getAudition();
  },
  methods: {
    getAudition() {
        console.log({id: this.$route.params.id});
    }
  }
}
</script>
<style>
    
</style>