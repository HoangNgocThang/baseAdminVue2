<template>
  <BaseLayout crumb="Quản lý giao dịch > Chuyển tiền > Danh sách chuyển tiền">
    <a-collapse
        v-model="activeSearchKey"
        class="collapse-left"
        style="margin-bottom: 8px">
      <a-collapse-panel header="Điều kiện tìm kiếm" key="1">
        <a-form-model
            ref="ruleFormTab1"
            :model="filters"
            layout="vertical"
            class="search-container">
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
      </a-collapse-panel>
    </a-collapse>
    <a-card>
      <div style="width: 100%; height: 500px">
        <a-row :gutter="16">
          <a-col :xs="24" :md="24" :lg="24">
            <a-table
                :columns="columns"
                :rowKey="(record, index) => index"
                :dataSource="data"
                :pagination="pagination"
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
                    <button @click="onClickButtonView(record)">
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
    </a-card>
  </BaseLayout>
</template>

<script>
import BaseLayout from "@/components/BaseLayout.vue";
import columns from './column';

export default {
  name: "TransactionView",
  components: {BaseLayout},
  data() {
    return {
      columns,
      loadingScreen: false,
      loading: false,
      activeSearchKey: 1,
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
    onClickButtonView(record) {
      console.log(record)
      this.$router.push({name: 'transaction.transfer.transfer-detail', params: {id: 121}})
    }
  },
  watch: {}
}
</script>

<style scoped lang="less">

</style>