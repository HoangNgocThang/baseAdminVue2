<template>
  <BaseLayout crumb="Trang chủ">
    <div>
      <!--        <a-breadcrumb style="margin: 16px 0">-->
      <!--          <a-breadcrumb-item>User</a-breadcrumb-item>-->
      <!--          <a-breadcrumb-item>Bill</a-breadcrumb-item>-->
      <!--        </a-breadcrumb>-->
      <!--      <a-collapse-->
      <!--          v-model="activeSearchKey"-->
      <!--          class="collapse-left"-->
      <!--          style="margin-bottom: 8px">-->
      <!--        <a-collapse-panel header="Điều kiện tìm kiếm" key="1">-->
      <!--          <p>{{ 1 }}</p>-->
      <!--        </a-collapse-panel>-->
      <!--      </a-collapse>-->
      <a-card>
        <div style="display: flex;flex-direction: column">
          <p style="font-size: 28px; font-weight: bold;margin-bottom: 0">Công ty Dịch vụ số Bưu Điện</p>
          <p style="font-size: 16px; color: #0090DA; margin-bottom: 0; margin-top: 4px;cursor: pointer">Danh sách tài
            khoản ví</p>
        </div>
      </a-card>

      <a-card>
        <p>Lịch sử giao dịch</p>
        <a-row :gutter="16">
          <a-col :xs="24" :md="24" :lg="24">
            <a-table
                :columns="columns"
                :rowKey="(record, index) => index"
                :dataSource="data"
                :pagination="paginationTab1"
                :loading="loading"
                :scroll="{ x: '100%',y:400 }"
                @change="handleTableChange"
                bordered
            >
              <template slot="rowIndex" slot-scope="text, record, index">
                <span>{{ index + 1 }} </span>
              </template>
              <template slot="actionTitle">
                    <span>
                      <a-icon type="control"></a-icon>
                    </span>
              </template>
              <template slot="operation" slot-scope="text, record">
                <div style="display: flex;flex-direction: row; gap:10px">
                  <template>
                    <button @click="()=> {console.log(text, record)}">
                      <span>Khóa</span>
                    </button>
                  </template>
                  <template>
                    <button @click="()=> {console.log(text, record)}">
                      <span>Xem</span>
                    </button>
                  </template>
                  <template>
                    <button @click="()=> {console.log(text, record)}">
                      <span>Duyệt</span>
                    </button>
                  </template>
                </div>
              </template>
            </a-table>
          </a-col>
        </a-row>
      </a-card>
    </div>
  </BaseLayout>
</template>

<script>
import BaseLayout from "@/components/BaseLayout.vue";
import columns from "@/views/home/columns";

export default {
  name: "HomeView",
  components: {
    BaseLayout
    // ModalForm
  },
  data() {
    return {
      columns,
      loadingScreen: false,
      activeSearchKey: 1,
      data: [{},{},{}],

    }
  },
  created() {
    // this.$router.push({ name: 'login', });
    // this.$router.push({ name: 'login', query: { redirect: '/login' } });
  },
  mounted() {

  },
  methods: {

  },
  watch: {}
}
</script>

<style scoped>

.text-title-home {
  margin-bottom: 4px;
  margin-top: 20px;
}

.text-label {
  font-size: 15px;
  font-weight: bold;
}

</style>
