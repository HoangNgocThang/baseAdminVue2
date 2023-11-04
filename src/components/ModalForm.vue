<template>
  <div>
    <a-drawer
        style="overflow: scroll; padding-bottom: 30px"
        :visible="visibleModalForm"
        width="25%"
        @close="closeModal"
        :destroy-on-close="true"
        :maskClosable="false"
        :title="'Tài khoản cá nhân'">
      <a-spin :spinning="loading">
        <div style="padding: 0 0 60px 0; margin: 0">
          <a-card style="width: 100%;border: none">
            <a-form-model :model="form" ref="ruleForm" layout="vertical" class="search-container">
              <a-row :gutter="16" type="flex">
                <a-col :xs="24" :md="24" :lg="24" class="filter-item-container">
                  <a-form-model-item
                      label="Tài khoản"
                      prop="p1"
                      style="margin-bottom: 8px"
                  >
                    <a-input
                        style="color: black"
                        value="thanghn_tct"
                        disabled="true"
                        placeholder="Tài khoản"
                        :maxLength="200">
                    </a-input>
                  </a-form-model-item>
                </a-col>
              </a-row>
              <a-row :gutter="16" type="flex">
                <a-col :xs="24" :md="24" :lg="24" class="filter-item-container">
                  <a-form-model-item
                      label="Họ và tên"
                      prop="p2"
                      style="margin-bottom: 8px"
                  >
                    <a-input
                        style="color: black"
                        value="Hoàng Ngọc Thắng"
                        disabled="true"
                        placeholder="Họ và tên"
                        :maxLength="200">
                    </a-input>
                  </a-form-model-item>
                </a-col>
              </a-row>
              <a-row :gutter="16" type="flex">
                <a-col :xs="24" :md="24" :lg="24" class="filter-item-container">
                  <a-form-model-item
                      label="Điện thoại di động"
                      prop="p3"
                      style="margin-bottom: 8px"
                  >
                    <a-input
                        style="color: black"
                        value="0123123123"
                        disabled="true"
                        placeholder="Điện thoại di động"
                        :maxLength="200">
                    </a-input>
                  </a-form-model-item>
                </a-col>
              </a-row>
              <a-row :gutter="16" type="flex">
                <a-col :xs="24" :md="24" :lg="24" class="filter-item-container">
                  <a-form-model-item
                      label="Email"
                      prop="p4"
                      style="margin-bottom: 8px"
                  >
                    <a-input
                        style="color: black"
                        value="thanghntct@vnpost.vn"
                        disabled="true"
                        placeholder="Email"
                        :maxLength="200">
                    </a-input>
                  </a-form-model-item>
                </a-col>
              </a-row>
            </a-form-model>
          </a-card>
        </div>
      </a-spin>
      <!--      <div-->
      <!--        :style="{-->
      <!--          position: 'absolute',-->
      <!--          right: 0,-->
      <!--          bottom: 0,-->
      <!--          width: '100%',-->
      <!--          borderTop: '1px solid #e9e9e9',-->
      <!--          padding: '10px 16px',-->
      <!--          background: '#fff',-->
      <!--          textAlign: 'right',-->
      <!--          zIndex: 1,-->
      <!--        }"-->
      <!--      >-->
      <!--        <a-button :style="{ marginLeft: '8px' }" @click="closeModal">-->
      <!--          Bỏ qua-->
      <!--        </a-button>-->
      <!--        <a-button :style="{ marginLeft: '8px' }" type="primary" @click="onSave">-->
      <!--          Đồng ý-->
      <!--        </a-button>-->
      <!--      </div>-->
    </a-drawer>
  </div>
</template>

<script>

// import {checkStringEn, checkNumber2} from '@/utils/helpers'
// import {
//   getListProvinceByStaff,
//   getListDistrictByStaff,
//   getListCommuneByStaff,
//   getStaffOrgUnit,
// } from '@/api/crm/servicePoint/transaction-api'
// import {findByCode} from '@/api/sys/global-list';
// import {GLOBAL_LIST} from '@/constant/global-list/global-list';
// import {VALID_PROVINCE_UNIT_ID} from '@/constant/app-prop';
// import {findByOrgUnitCode, assignment} from '@/api/upu/divide-lines';

export default {
  props: {
    visibleModalForm: {
      type: Boolean,
      default: false,
      required: true
    },
    // providerData: {
    //   type: Array,
    //   default: null,
    //   required: true
    // },
  },
  data() {
    return {
      pagination: {
        current: 1,
        total: 0,
        pageSize: 15,
        showSizeChanger: true,
        showQuickJumper: true,
        pageSizeOptions: ['15', '25', '50', '100'],
        showTotal: (total) => {
          return `Tổng số dòng ${total}`
        }
      },
      listProvinceByStaff: [],
      listDistrictByStaff: [],
      listCommuneByStaff: [],
      listNV: [],
      form: {
        provinceUnitId: '', // Mã Tỉnh
        districtUnitId: '', // Mã Huyện
        communeUnitId: '', // Mã Bưu cục
        personPhoneNub: null // Số điện thoại Nhân viên tư vấn
      },
      provinceUnitId: '',
      districtUnitId: '',
      communeUnitId: '',
      loading: false,
      disabledProvince: true,
      disabledDistrict: true,
      disabledCommune: true,
      disabledNV: true
    }
  },
  created() {

  },
  mounted() {
  },
  methods: {
    // checkStringEn,
    // checkNumber2,
    // changeProvince(value) {
    //   if (value) {
    //     this.getListDistrict(value)
    //     this.disabledDistrict = false
    //     this.form.districtUnitId = ''
    //     this.form.communeUnitId = ''
    //     this.listCommuneByStaff = []
    //     this.disabledCommune = true
    //   } else {
    //     this.disabledDistrict = true
    //     this.disabledCommune = true
    //     this.form.districtUnitId = ''
    //     this.form.communeUnitId = ''
    //   }
    // },
    // getListDistrict(value) {
    //   getListDistrictByStaff({parentId: value}).then(res => {
    //     this.listDistrictByStaff = res.body
    //   }).catch(err => {
    //     this.handleApiError(err)
    //   })
    // },
    // changeDistrict(value) {
    //   if (value) {
    //     this.getListCommune(value)
    //     this.disabledCommune = false
    //     this.form.communeUnitId = ''
    //   } else {
    //     this.disabledCommune = true
    //     this.form.communeUnitId = ''
    //   }
    // },
    // getListCommune(value) {
    //   getListCommuneByStaff({parentId: value}).then(res => {
    //     this.listCommuneByStaff = res.body
    //   }).catch(err => {
    //     this.handleApiError(err)
    //   })
    // },
    // async onFindByOrgUnitCode(params) {
    //   try {
    //     console.log('thangvao1onFindByOrgUnitCode')
    //     const res = await findByOrgUnitCode(params);
    //     if (res?.code === 'API000') {
    //       this.listNV = res?.body || []
    //     }
    //   } catch (err) {
    //     this.handleApiError(err)
    //   }
    // },
    // async onAssignment() {
    //   if (this.$props.providerData === null || this.$props.providerData.length <= 0) {
    //     alert('Chưa chọn dòng nào từ bảng')
    //     return;
    //   }
    //   try {
    //     const params = {
    //       ids: this.$props.providerData.map(e => e.id),
    //       provinceCode: this.listProvinceByStaff.find(e => e?.orgUnitId === this.form.provinceUnitId)?.orgUnitCode || null,
    //       districtCode: this.listDistrictByStaff.find(e => e?.orgUnitId === this.form.districtUnitId)?.orgUnitCode || null,
    //       communeCode: this.listCommuneByStaff.find(e => e?.orgUnitId === this.form.communeUnitId)?.orgUnitCode || null,
    //       personPhoneNub: this.form.personPhoneNub
    //     }
    //     const res = await assignment(params)
    //     console.log('assignment: ', res)
    //     if (res?.code === 'API000') {
    //       alert('Phân tuyến thành công')
    //       this.$emit('closeModal', true)
    //       // const _this = this
    //       // this.$success({
    //       //     title: 'Phân tuyến',
    //       //     content: 'Phân tuyến thành công',
    //       //     onOK() {
    //       //       // this.$router.push({name: 'menu.tt-and-lc.records-management.main'})
    //       //       // _this.$router.back()
    //       //       _this.closeModal()
    //       //     }
    //       //   },
    //       // )
    //     }
    //   } catch (e) {
    //     this.handleApiError(e)
    //   }
    // },
    // getInfoStaffOrgUnit() {
    //   getStaffOrgUnit().then(res => {
    //     if (res.body.provinceUnitId && !res.body.districtUnitId && !res.body.communeUnitId) {
    //       this.form.provinceUnitId = res.body.provinceUnitId
    //       this.provinceUnitId = res.body.provinceUnitId
    //       if (this.provinceUnitId === VALID_PROVINCE_UNIT_ID) {
    //         this.form.provinceUnitId = ''
    //         this.disabledProvince = false
    //       } else {
    //         this.disabledDistrict = false
    //       }
    //       this.getListDistrict(this.provinceUnitId)
    //     }
    //     if (res.body.provinceUnitId && res.body.districtUnitId && !res.body.communeUnitId) {
    //       this.form.provinceUnitId = res.body.provinceUnitId
    //       this.provinceUnitId = res.body.provinceUnitId
    //       this.form.districtUnitId = res.body.districtUnitId
    //       this.districtUnitId = res.body.districtUnitId
    //       if (this.provinceUnitId === VALID_PROVINCE_UNIT_ID) {
    //         this.form.communeUnitId = ''
    //         this.disabledProvince = false
    //       } else  {
    //         this.disabledCommune = false
    //       }
    //       this.getListDistrict(this.provinceUnitId)
    //       this.getListCommune(this.districtUnitId)
    //     }
    //     if (res.body.provinceUnitId && res.body.districtUnitId && res.body.communeUnitId) {
    //       this.form.provinceUnitId = res.body.provinceUnitId
    //       this.provinceUnitId = res.body.provinceUnitId
    //       this.form.districtUnitId = res.body.districtUnitId
    //       this.districtUnitId = res.body.districtUnitId
    //       this.form.communeUnitId = res.body.communeUnitId
    //       this.communeUnitId = res.body.communeUnitId
    //       if (this.provinceUnitId === VALID_PROVINCE_UNIT_ID) {
    //         this.form.communeUnitId = ''
    //         this.disabledProvince = false
    //       }
    //       this.getListDistrict(this.provinceUnitId)
    //       this.getListCommune(this.districtUnitId)
    //     }
    //
    //     // this.getData()
    //     this.checkEnableSearch = true
    //   }).catch(err => {
    //     this.handleApiError(err)
    //   }).finally(() => {
    //
    //   })
    // },
    // getListTransState() {
    //   findByCode({code: GLOBAL_LIST.TRANS_STATE}).then(res => {
    //     this.listTransState = res.body
    //     this.listTransStateChange = res.body
    //   })
    // },
    // changeListTransState(value) {
    //   this.form.transState = ''
    //   if (value) {
    //     this.listTransStateChange = this.listTransState.filter(item => {
    //       return item.code.indexOf(value) !== -1
    //     })
    //   } else {
    //     this.listTransStateChange = [...this.listTransState]
    //   }
    // },
    // // getListStatus() {
    // //   findByCode({code: GLOBAL_LIST.TRANS_STATUS}).then(res => {
    // //     this.listStatus = res.body
    // //   })
    // // },
    // getListProvince() {
    //   getListProvinceByStaff().then(res => {
    //     this.listProvinceByStaff = res.body
    //   }).catch(err => {
    //     this.handleApiError(err)
    //   })
    // },
    closeModal(_, reload = false) {
      this.$emit('closeModal', reload)
    },
    onSave() {
      // const _this = this
      // this.$refs.ruleForm.validate(valid => {
      //   if (valid) {
      //     this.$confirm({
      //       title: `Phân tuyến`,
      //       content: `Bạn có chắc chắn muốn thực hiện thao tác`,
      //       onOk() {
      //         _this.onAssignment()
      //       }
      //     })
      //   }
      // })
    },
    resetForm() {
      this.$refs.ruleForm.resetFields()
    }
  },
  watch: {
    'form.communeUnitId': function () {
      console.log('vao111444')
      this.disabledNV = false
      this.form.personPhoneNub = null
      this.listNV = []
      const params =
          {
            orgUnitCode: this.listCommuneByStaff.find(e => e?.orgUnitId === this.form.communeUnitId)?.orgUnitCode || ''
          }
      this.onFindByOrgUnitCode(params)
    },
    'form.provinceUnitId': function () {
      this.form.personPhoneNub = null
      this.listNV = []
    },
    'form.districtUnitId': function () {
      this.form.personPhoneNub = null
      this.listNV = []
    }
  }
}
</script>
