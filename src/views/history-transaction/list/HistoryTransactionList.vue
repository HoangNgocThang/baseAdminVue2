<template>
  <BaseLayout crumb="Lịch sử giao dịch">
    <a-card>
      <a-form-model
          ref="ruleFormTab1"
          :model="filters"
          layout="vertical"
          class="search-container">
        <a-row :gutter="16" type="flex">
          <a-col :xs="24" :md="6" :lg="4">
            <a-form-model-item
                label="Mã giao dịch"
                prop="code2"
                style="margin-bottom: 8px"
            >
              <a-input
                  placeholder="Nhập mã giao dịch"
                  v-model="filters.contractNo"
                  :maxLength="200">
              </a-input>
            </a-form-model-item>
          </a-col>
          <a-col :xs="24" :md="6" :lg="4">
            <a-form-model-item
                label="Tài khoản nguồn"
                prop="code2"
                style="margin-bottom: 8px"
            >
              <a-input
                  placeholder="Nhập số tài khoản"
                  v-model="filters.contractNo"
                  :maxLength="200">
              </a-input>
            </a-form-model-item>
          </a-col>
          <a-col :xs="24" :md="6" :lg="4">
            <a-form-model-item
                label="Tài khoản đích"
                prop="code2"
                style="margin-bottom: 8px"
            >
              <a-input
                  placeholder="Nhập số tài khoản"
                  v-model="filters.contractNo"
                  :maxLength="200">
              </a-input>
            </a-form-model-item>
          </a-col>

        </a-row>
        <a-row :gutter="16" type="flex">
          <a-col :xs="24" :md="6" :lg="4">
            <a-form-model-item
                label="Trạng thái"
                prop="code1"
                style="margin-bottom: 8px"
            >
              <a-select
                  style="color: black"
                  :allowClear="true"
                  show-search
                  v-model="filters.provinceUnitId">
                <a-select-option :value="''" :key="'all'">-- Chọn --</a-select-option>
              </a-select>
            </a-form-model-item>
          </a-col>
          <a-col :xs="24" :md="6" :lg="4">
            <!--              :rules="[-->
            <!--              {-->
            <!--              required: true,-->
            <!--              message: 'Trường bắt buộc'-->
            <!--              },-->
            <!--              ]"-->
            <a-form-model-item
                prop="fromDate"
                label="Từ ngày"
                style="margin-bottom: 8px"
            >
              <a-date-picker
                  :allowClear="false"
                  v-model="filters.fromDate"
                  format="DD/MM/YYYY"
                  style="width: 100%"
                  placeholder="Từ ngày"
              />
            </a-form-model-item>
          </a-col>
          <a-col :xs="24" :md="6" :lg="4">
            <!--              :rules="[-->
            <!--              {-->
            <!--              required: true,-->
            <!--              message: 'Trường bắt buộc'-->
            <!--              },-->
            <!--              ]"-->
            <a-form-model-item
                prop="toDate"
                label="Đến ngày"
                style="margin-bottom: 8px"
            >
              <a-date-picker
                  :allowClear="false"
                  v-model="filters.toDate"
                  format="DD/MM/YYYY"
                  style="width: 100%"
                  placeholder="Đến ngày"
              />
            </a-form-model-item>
          </a-col>
          <a-col :xs="24" :md="6" :lg="4">
            <a-form-model-item
                label="Trạng thái"
                prop="code1"
                style="margin-bottom: 8px"
            >
              <a-select
                  style="color: black"
                  :allowClear="true"
                  show-search
                  v-model="filters.provinceUnitId">
                <a-select-option :value="''" :key="'all'">-- Chọn --</a-select-option>
              </a-select>
            </a-form-model-item>
          </a-col>
        </a-row>
        <a-row :gutter="16" type="flex">
          <div style="display: flex; gap: 10px;">
            <a-button
                type="primary"
                @click="()=> {

                      }"
                style="margin-left: 5px; width: 100px;">
              Nhập lại
            </a-button>
            <a-button
                type="primary"
                @click="()=> {

                      }"
                style="background-color: rgba(245, 154, 35, 1); width: 100px">
              Tìm kiếm
            </a-button>
            <a-button
                type="primary"
                @click="()=> {

                      }"
                style="background-color: rgba(245, 154, 35, 1); width: 100px">
              Tạo yêu cầu
            </a-button>
            <a-button
                type="primary"
                @click="()=> {

                      }"
                style="background-color: rgba(245, 154, 35, 1); width: 100px">
              Xuất file
            </a-button>
          </div>
        </a-row>
      </a-form-model>
    </a-card>

  </BaseLayout>
</template>

<script>
import BaseLayout from "@/components/BaseLayout.vue";

export default {
  name: "HistoryTransactionList",
  components: {BaseLayout},
  data() {
    return {
      filters: {},
      data: [{}, {}, {}],
      pagination: {
        current: 1,
        total: 0,
        pageSize: 15,
        showSizeChanger: true,
        showQuickJumper: true,
        pageSizeOptions: ['15', '25', '50'],
        showTotal: (total) => {
          return `Tổng số dòng ${total}`
        }
      },
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
  watch: {

  }
}
</script>

<style scoped lang="less">

</style>