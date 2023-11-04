<template>
  <BaseLayout crumb="Quản lý liên kết ngân hàng">
    <a-collapse
        v-model="activeSearchKey"
        class="collapse-left"
        style="margin-bottom: 8px">
      <a-collapse-panel header="Điều kiện tìm kiếm" key="1">
        <p>{{ 1 }}</p>
      </a-collapse-panel>
    </a-collapse>
    <a-card>
      <p>Bank link</p>
      <div style="width: 100%; height: 500px"></div>
    </a-card>
  </BaseLayout>
</template>

<script>
import BaseLayout from "@/components/BaseLayout.vue";

export default {
  name: "BankLinkView",
  components: {BaseLayout},
  data() {
    return {
      loadingScreen: false,
      activeSearchKey: 1,
    }
  },
  created() {
    // this.$router.push({ name: 'login', });
    // this.$router.push({ name: 'login', query: { redirect: '/login' } });
  },
  mounted() {

  },
  methods: {},
  watch: {}
}
</script>


<style scoped lang="less">

</style>
