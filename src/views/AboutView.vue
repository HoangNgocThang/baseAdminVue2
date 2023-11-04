<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>{{ formatPrice }}</p>
    <p>{{ $store.state.moduleTest.count }}</p>
    <div>{{ count }}</div>
    <a-button type="primary" @click="increment">
      click
    </a-button>
    <a-button type="primary" @click="testAction">
      click2
    </a-button>
  </div>
</template>

<script>
import {mapState} from 'vuex';
import {INCREMENT, TEST_ACTION} from "@/store/mutation-type";

export default {
  name: "AboutView",
  components: {
    // BaseLayout
    // ModalForm
  },
  data() {
    return {
      loadingScreen: false,
      activeSearchKey: 1,
      price: 1000
    }
  },
  created() {
    // this.$router.push({ name: 'login', });
    // this.$router.push({ name: 'login', query: { redirect: '/login' } });
  },
  mounted() {

  },
  computed: {
    formatPrice() {
      return this.price + " đ"
    },
    ...mapState({
      count: state => state.moduleTest.count,
    })
  },
  methods: {
    increment() {
      this.$store.commit(INCREMENT)
      console.log(this.$store.state.moduleTest.count)
    },
    testAction() {
      this.$store.commit(TEST_ACTION, {value: 10, name: 'thang'})
    }
  },
  watch: {}
}
</script>

<style>
</style>


