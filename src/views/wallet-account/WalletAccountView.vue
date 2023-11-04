<template>
  <BaseLayout crumb="Quản lý tài khoản ví">
    <div>
      <a-card>
        <a-tabs default-active-key="1" @change="callback">
          <a-tab-pane key="1" tab="Thông tin tài khoản ví">
            <div style="min-height: 500px">
              <a-form-model
                  ref="ruleFormTab1"
                  :model="filtersTab1"
                  layout="vertical"
                  class="search-container">
                <a-row :gutter="16" type="flex">
                  <a-col :xs="6" :md="6" :lg="6">
                    <a-form-model-item
                        label="Trạng thái"
                        prop="code1"
                        style="margin-bottom: 8px"
                    >
                      <a-select
                          style="color: black"
                          :allowClear="true"
                          show-search
                          v-model="filtersTab1.provinceUnitId">
                        <a-select-option :value="''" :key="'all'">-- Chọn --</a-select-option>
                      </a-select>
                    </a-form-model-item>
                  </a-col>
                  <a-col :xs="6" :md="6" :lg="6">
                    <a-form-model-item
                        label="Tài khoản con"
                        prop="code2"
                        style="margin-bottom: 8px"
                    >
                      <a-input
                          placeholder="Nhập tài khoản con"
                          v-model="filtersTab1.contractNo"
                          :maxLength="200">
                      </a-input>
                    </a-form-model-item>
                  </a-col>
                  <div style="display: flex; gap: 10px;">
                    <a-button
                        type="primary"
                        @click="()=> {

                      }"
                        style="background-color: rgba(245, 154, 35, 1);margin-top: 28px; width: 100px">
                      Tìm kiếm
                    </a-button>

                    <a-button
                        type="primary"
                        @click="()=> {

                      }"
                        style="background-color: rgba(245, 154, 35, 1); margin-top: 28px;width: 100px">
                      Thêm mới
                    </a-button>
                  </div>
                </a-row>
              </a-form-model>

              <a-row :gutter="16" >
                <a-col :xs="24" :md="24" :lg="24" >
                  <a-table
                      :columns="columnsTab1"
                      :rowKey="(record, index) => index"
                      :dataSource="dataTab1"
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
            </div>
          </a-tab-pane>

          <a-tab-pane key="2" tab="Hạn mức giao dịch" force-render>
            <div style="min-height: 500px">
              <a-form-model
                  ref="ruleFormTab2"
                  :model="filtersTab2"
                  layout="vertical"
                  class="search-container">
                <a-row :gutter="16" type="flex">
                  <a-col :xs="6" :md="6" :lg="6">
                    <a-form-model-item
                        label="Tài khoản ví"
                        prop="code2"
                        style="margin-bottom: 8px"
                    >
                      <a-input
                          placeholder="Nhập tài khoản ví cần tìm kiếm"
                          v-model="filtersTab2.contractNo"
                          :maxLength="200">
                      </a-input>
                    </a-form-model-item>
                  </a-col>

                  <div style="display: flex; gap: 10px;">
                    <a-button
                        type="primary"
                        @click="()=> {

                      }"
                        style="background-color: rgba(245, 154, 35, 1);margin-top: 28px; width: 100px">
                      Tìm kiếm
                    </a-button>

                    <a-button
                        type="primary"
                        @click="()=> {

                      }"
                        style="background-color: rgba(245, 154, 35, 1); margin-top: 28px;width: 100px">
                      Thêm mới
                    </a-button>
                  </div>
                </a-row>
              </a-form-model>

              <a-row :gutter="16" >
                <a-col :xs="24" :md="24" :lg="24" >
                  <a-table
                      :columns="columnsTab2"
                      :rowKey="(record, index) => index"
                      :dataSource="dataTab2"
                      :pagination="paginationTab2"
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
                            <span>Sửa</span>
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
            </div>
          </a-tab-pane>

        </a-tabs>
      </a-card>
    </div>
  </BaseLayout>
</template>

<script>
import BaseLayout from "@/components/BaseLayout.vue";
import columnsTab1 from './columnsTab1';
import columnsTab2 from './columnsTab2';

export default {
  name: "WalletAccountView",
  components: {BaseLayout},
  data() {
    return {
      columnsTab1,
      columnsTab2,
      loadingScreen: false,
      activeSearchKey: 1,
      loading: false,

      filtersTab1: {},
      dataTab1: [{}, {}, {}],
      paginationTab1: {
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

      filtersTab2: {},
      dataTab2: [{}, {}, {}],
      paginationTab2: {
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
    callback(key) {
      console.log(key);
    },
    handleTableChange(pagination, filters, sorter) {
      console.log(pagination, filters, sorter)
      // this.pagination = {...pagination}
      // const params = {
      //   insContractWLSdi: {
      //     phoneNub: this.filters.phoneNub,
      //     status: this.filters.status,
      //     fromDate: this.filters.fromDate ? moment(this.filters.fromDate, 'DD/MM/YYYY').format('DD/MM/YYYY') : null,
      //     toDate: this.filters.toDate ? moment(this.filters.toDate, 'DD/MM/YYYY').format('DD/MM/YYYY') : null,
      //     provinceCode: this.listProvinceByStaff.find(e => e?.orgUnitId === this.filters.provinceUnitId)?.orgUnitCode || null,
      //     districtCode: this.listDistrictByStaff.find(e => e?.orgUnitId === this.filters.districtUnitId)?.orgUnitCode || null,
      //   },
      //   pageInfo: {
      //     currentPage: this.pagination.current,
      //     pageSize: this.pagination.pageSize
      //   }
      // }
      // this.onWlFindByCondition(params)
    },
  },
  watch: {}
}
</script>

<style scoped lang="less">

</style>