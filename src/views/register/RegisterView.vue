<template>
  <BlankRegisterLayout>
    <div class="container">
      <div class="limiter">
        <div class="container-login">
          <div class="wrap-login">
            <div style="min-height: 1200px; width: 100%">
              <div style="display: flex; flex-direction: row; width: 100%; justify-content: center">
                <img src="../../assets/vnpost_logo.svg" style="width: 180px; height:135px">
              </div>
              <div style="display: flex; flex-direction: row; width: 100%; justify-content: center">
                <div class="item-step">
                  <p class="text-item-step">1</p>
                </div>
                <div
                    style="display: flex; width: 100px;height: 1px; background-color: black;align-self: center; margin:0 2px"></div>
                <div class="item-step">
                  <p class="text-item-step">2</p>
                </div>
                <div
                    style="display: flex; width: 100px;height: 1px; background-color: black;align-self: center; margin:0 2px"></div>
                <div class="item-step">
                  <p class="text-item-step">3</p>
                </div>
                <div
                    style="display: flex; width: 100px;height: 1px; background-color: black;align-self: center;margin:0 2px"></div>
                <div class="item-step">
                  <p class="text-item-step">4</p>
                </div>
              </div>

              <!-- STEP 1 start-->
              <div v-if="step===1" style="display: flex; flex-direction: column">
                <a-form-model
                    ref="ruleForm"
                    :model="filters"
                    layout="vertical"
                    class="search-container">
                  <a-card style="width: 100%;border: none">
                    <span class="title-register">Thông tin doanh nghiệp</span>
                    <a-row :gutter="16" type="flex" style="margin-top: 20px">
                      <a-col :xs="24" :md="24" :lg="24">
                        <a-form-model-item
                            label="Đơn vị trực thuộc"
                            prop="code"
                            style="margin-bottom: 8px"
                        >
                          <a-input-search
                              @search="onSearch"
                              placeholder="Nhập mã số thuế"
                              v-model="filters.contractNo"
                              :maxLength="200">
                          </a-input-search>
                        </a-form-model-item>
                      </a-col>
                    </a-row>
                    <a-row :gutter="16" type="flex">
                      <a-col :xs="24" :md="24" :lg="24">
                        <a-form-model-item
                            label="Tên tổ chức"
                            prop="code"
                            :rules="[
                                  {
                                    required: true,
                                    message: 'Trường bắt buộc'
                                  },
                            ]"
                            style="margin-bottom: 8px"
                        >
                          <a-input
                              placeholder="Tên tổ chức"
                              v-model="filters.contractNo"
                              :maxLength="200">
                          </a-input>
                        </a-form-model-item>
                      </a-col>
                    </a-row>
                    <a-row :gutter="16" type="flex">
                      <a-col :xs="24" :md="24" :lg="24">
                        <a-form-model-item
                            label="Tên viết tắt"
                            prop="code"
                            style="margin-bottom: 8px"
                        >
                          <a-input
                              placeholder="Tên viết tắt"
                              v-model="filters.contractNo"
                              :maxLength="200">
                          </a-input>
                        </a-form-model-item>
                      </a-col>
                    </a-row>
                    <a-row :gutter="16" type="flex">
                      <a-col :xs="12" :md="12" :lg="12">
                        <a-form-model-item
                            label="Loại hình tổ chức"
                            prop="code"
                            :rules="[
                                  {
                                    required: true,
                                    message: 'Trường bắt buộc'
                                  },
                            ]"
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
                      <a-col :xs="12" :md="12" :lg="12">
                        <a-form-model-item
                            label="Ngành kinh doanh"
                            prop="code"
                            :rules="[
                                  {
                                    required: true,
                                    message: 'Trường bắt buộc'
                                  },
                            ]"
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
                      <a-col :xs="24" :md="24" :lg="24">
                        <a-form-model-item
                            label="Mô tả"
                            prop="code"
                            style="margin-bottom: 8px"
                        >
                          <a-input
                              placeholder="Mô tả ngành kinh doanh"
                              v-model="filters.contractNo"
                              :maxLength="200">
                          </a-input>
                        </a-form-model-item>
                      </a-col>
                    </a-row>
                    <a-row :gutter="16" type="flex">
                      <a-col :xs="24" :md="24" :lg="24">
                        <a-form-model-item
                            label="Mã số thuế"
                            prop="code"
                            style="margin-bottom: 8px"
                            :rules="[
                                  {
                                    required: true,
                                    message: 'Trường bắt buộc'
                                  },
                            ]"
                        >
                          <a-input
                              placeholder="Mã số thuế của tổ chức"
                              v-model="filters.contractNo"
                              :maxLength="200">
                          </a-input>
                        </a-form-model-item>
                      </a-col>
                    </a-row>
                    <a-row :gutter="16" type="flex">
                      <a-col :xs="12" :md="12" :lg="12">
                        <a-form-model-item
                            prop="fromDate"
                            label="Ngày cấp"
                            style="margin-bottom: 8px"
                            :rules="[
                                  {
                                    required: true,
                                    message: 'Trường bắt buộc'
                                  },
                            ]"
                        >
                          <a-date-picker
                              :allowClear="false"
                              v-model="filters.fromDate"
                              format="DD/MM/YYYY"
                              style="width: 100%"
                              placeholder="Ngày cấp"
                          />
                        </a-form-model-item>
                      </a-col>
                      <a-col :xs="12" :md="12" :lg="12">
                        <a-form-model-item
                            label="Nơi cấp"
                            prop="code"
                            style="margin-bottom: 8px"
                            :rules="[
                                  {
                                    required: true,
                                    message: 'Trường bắt buộc'
                                  },
                            ]"
                        >
                          <a-input
                              placeholder="Nơi cấp"
                              v-model="filters.contractNo"
                              :maxLength="200">
                          </a-input>
                        </a-form-model-item>
                      </a-col>
                    </a-row>
                    <a-row :gutter="16" type="flex">
                      <a-col :xs="12" :md="12" :lg="12">
                        <a-form-model-item
                            label="Quốc gia"
                            prop="code"
                            :rules="[
                                  {
                                    required: true,
                                    message: 'Trường bắt buộc'
                                  },
                            ]"
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
                      <a-col :xs="12" :md="12" :lg="12">
                        <a-form-model-item
                            label="Tỉnh/ Thành phố"
                            prop="code"
                            :rules="[
                                  {
                                    required: true,
                                    message: 'Trường bắt buộc'
                                  },
                            ]"
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
                      <a-col :xs="12" :md="12" :lg="12">
                        <a-form-model-item
                            label="Quận/ Huyện"
                            prop="code"
                            :rules="[
                                  {
                                    required: true,
                                    message: 'Trường bắt buộc'
                                  },
                            ]"
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
                      <a-col :xs="12" :md="12" :lg="12">
                        <a-form-model-item
                            label="Phường/ Xã"
                            prop="code"
                            :rules="[
                                  {
                                    required: true,
                                    message: 'Trường bắt buộc'
                                  },
                            ]"
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
                      <a-col :xs="24" :md="24" :lg="24">
                        <a-form-model-item
                            label="Địa chỉ"
                            prop="code"
                            style="margin-bottom: 8px"
                        >
                          <a-input
                              placeholder="Số nhà, tên đường"
                              v-model="filters.contractNo"
                              :maxLength="200">
                          </a-input>
                        </a-form-model-item>
                      </a-col>
                    </a-row>
                    <a-row :gutter="16" type="flex">
                      <a-col :xs="12" :md="12" :lg="12">
                        <a-form-model-item
                            label="Điện thoại cố định"
                            prop="code"
                            style="margin-bottom: 8px"
                            :rules="[
                                  {
                                    required: true,
                                    message: 'Trường bắt buộc'
                                  },
                            ]"
                        >
                          <a-input
                              placeholder="Điện thoại cố định"
                              v-model="filters.contractNo"
                              :maxLength="200">
                          </a-input>
                        </a-form-model-item>
                      </a-col>
                      <a-col :xs="12" :md="12" :lg="12">
                        <a-form-model-item
                            label="Fax"
                            prop="code"
                            style="margin-bottom: 8px"
                            :rules="[
                                  {
                                    required: true,
                                    message: 'Trường bắt buộc'
                                  },
                            ]"
                        >
                          <a-input
                              placeholder="Fax"
                              v-model="filters.contractNo"
                              :maxLength="200">
                          </a-input>
                        </a-form-model-item>
                      </a-col>
                    </a-row>
                    <a-row :gutter="16" type="flex">
                      <a-col :xs="12" :md="12" :lg="12">
                        <a-form-model-item
                            label="Điện thoại di động"
                            prop="code"
                            style="margin-bottom: 8px"
                            :rules="[
                                  {
                                    required: true,
                                    message: 'Trường bắt buộc'
                                  },
                            ]"
                        >
                          <a-input
                              placeholder="Điện thoại di dộng"
                              v-model="filters.contractNo"
                              :maxLength="200">
                          </a-input>
                        </a-form-model-item>
                      </a-col>
                      <a-col :xs="12" :md="12" :lg="12">
                        <a-form-model-item
                            label="Email"
                            prop="code"
                            style="margin-bottom: 8px"
                            :rules="[
                                  {
                                    required: true,
                                    message: 'Trường bắt buộc'
                                  },
                            ]"
                        >
                          <a-input
                              placeholder="Địa chỉ Email tổ chức"
                              v-model="filters.contractNo"
                              :maxLength="200">
                          </a-input>
                        </a-form-model-item>
                      </a-col>
                    </a-row>
                    <a-row :gutter="16" type="flex">
                      <a-col :xs="12" :md="12" :lg="12">
                        <a-form-model-item
                            label="Số lượng nhân viên"
                            prop="code"
                            style="margin-bottom: 8px"
                        >
                          <a-input
                              placeholder="Số lượng nhân viên"
                              v-model="filters.contractNo"
                              :maxLength="200">
                          </a-input>
                        </a-form-model-item>
                      </a-col>
                      <a-col :xs="12" :md="12" :lg="12">
                        <a-form-model-item
                            label="Vốn điều lệ"
                            prop="code"
                            style="margin-bottom: 8px"
                        >
                          <a-input
                              placeholder="Vốn điều lệ"
                              v-model="filters.contractNo"
                              :maxLength="200">
                          </a-input>
                        </a-form-model-item>
                      </a-col>
                    </a-row>
                    <a-row :gutter="16" type="flex">
                      <a-col :xs="12" :md="12" :lg="12">
                        <div style="display: flex;flex-direction: row;gap: 4px;margin-bottom: 8px"><span
                            style="color:red">*</span>
                          <p>Giấy ĐKKD</p></div>
                        <input type="file" id="avatar" ref="uploadFile"/>
                        <!--                        <p style="color: #f5222d;font-size: 14px;margin-top: 2px; margin-bottom: -5px;">Trường bắt buộc</p>-->
                      </a-col>
                    </a-row>
                  </a-card>
                </a-form-model>
                <div style="display: flex;justify-content: center">
                  <a-button
                      type="primary"
                      @click="()=> {
                        this.scrollToTop()
                        this.step =2
                      }"
                      style="background-color: rgba(245, 154, 35, 1); width: 80px">
                    Tiếp tục
                  </a-button>
                </div>
              </div>
              <!-- STEP 1 end-->

              <!-- STEP 2 start-->
              <div v-else-if="step===2" style="display: flex; flex-direction: column">
                <a-form-model
                    ref="ruleForm"
                    :model="filters"
                    layout="vertical"
                    class="search-container">
                  <a-card style="width: 100%;border: none">
                    <span class="title-register">Thông tin người phụ trách</span>
                    <p class="sub-title-register" style="margin-top: 20px">Người đại diện 1</p>
                    <a-row :gutter="16" type="flex">
                      <a-col :xs="24" :md="24" :lg="24">
                        <a-form-model-item
                            label="Họ và tên"
                            prop="code"
                            style="margin-bottom: 8px"
                            :rules="[
                                  {
                                    required: true,
                                    message: 'Trường bắt buộc'
                                  },
                            ]"
                        >
                          <a-input-search
                              @search="onSearch"
                              placeholder="Họ và tên"
                              v-model="filters.contractNo"
                              :maxLength="200">
                          </a-input-search>
                        </a-form-model-item>
                      </a-col>
                    </a-row>
                    <a-row :gutter="16" type="flex">
                      <a-col :xs="24" :md="24" :lg="24">
                        <a-form-model-item
                            label="Chức vụ"
                            prop="code"
                            :rules="[
                                  {
                                    required: true,
                                    message: 'Trường bắt buộc'
                                  },
                            ]"
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
                      <a-col :xs="12" :md="12" :lg="12">
                        <a-form-model-item
                            prop="fromDate"
                            label="Ngày sinh"
                            style="margin-bottom: 8px"
                            :rules="[
                                  {
                                    required: true,
                                    message: 'Trường bắt buộc'
                                  },
                            ]"
                        >
                          <a-date-picker
                              :allowClear="false"
                              v-model="filters.fromDate"
                              format="DD/MM/YYYY"
                              style="width: 100%"
                              placeholder="Ngày sinh"
                          />
                        </a-form-model-item>
                      </a-col>
                      <a-col :xs="12" :md="12" :lg="12">
                        <a-form-model-item
                            label="Quốc tịch"
                            prop="code"
                            style="margin-bottom: 8px"
                            :rules="[
                                  {
                                    required: true,
                                    message: 'Trường bắt buộc'
                                  },
                            ]"
                        >
                          <a-input
                              placeholder="Nơi cấp"
                              v-model="filters.contractNo"
                              :maxLength="200">
                          </a-input>
                        </a-form-model-item>
                      </a-col>
                    </a-row>
                    <a-row :gutter="16" type="flex">
                      <a-col :xs="24" :md="24" :lg="24">
                        <a-form-model-item
                            label="Tên viết tắt"
                            prop="code"
                            style="margin-bottom: 8px"
                        >
                          <a-input
                              placeholder="Tên viết tắt"
                              v-model="filters.contractNo"
                              :maxLength="200">
                          </a-input>
                        </a-form-model-item>
                      </a-col>
                    </a-row>
                    <a-row :gutter="16" type="flex">
                      <a-col :xs="12" :md="12" :lg="12">
                        <a-form-model-item
                            label="Loại GTTT "
                            prop="code"
                            style="margin-bottom: 8px"
                            :rules="[
                                  {
                                    required: true,
                                    message: 'Trường bắt buộc'
                                  },
                            ]"
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
                      <a-col :xs="12" :md="12" :lg="12">
                        <a-form-model-item
                            label="Số GTTT"
                            prop="code"
                            style="margin-bottom: 8px"
                            :rules="[
                                  {
                                    required: true,
                                    message: 'Trường bắt buộc'
                                  },
                            ]"
                        >
                          <a-input
                              placeholder="Số GTTT"
                              v-model="filters.contractNo"
                              :maxLength="200">
                          </a-input>
                        </a-form-model-item>
                      </a-col>
                    </a-row>
                    <a-row :gutter="16" type="flex">
                      <a-col :xs="12" :md="12" :lg="12">
                        <a-form-model-item
                            label="Điện thoại di động"
                            prop="code"
                            style="margin-bottom: 8px"
                            :rules="[
                                  {
                                    required: true,
                                    message: 'Trường bắt buộc'
                                  },
                            ]"
                        >
                          <a-input
                              placeholder="Điện thoại di dộng"
                              v-model="filters.contractNo"
                              :maxLength="200">
                          </a-input>
                        </a-form-model-item>
                      </a-col>
                      <a-col :xs="12" :md="12" :lg="12">
                        <a-form-model-item
                            label="Email"
                            prop="code"
                            style="margin-bottom: 8px"
                            :rules="[
                                  {
                                    required: true,
                                    message: 'Trường bắt buộc'
                                  },
                            ]"
                        >
                          <a-input
                              placeholder="Địa chỉ Email"
                              v-model="filters.contractNo"
                              :maxLength="200">
                          </a-input>
                        </a-form-model-item>
                      </a-col>
                    </a-row>
                    <a-row :gutter="16" type="flex">
                      <a-col :xs="12" :md="12" :lg="12">
                        <a-form-model-item
                            label="Quốc gia"
                            prop="code"
                            :rules="[
                                  {
                                    required: true,
                                    message: 'Trường bắt buộc'
                                  },
                            ]"
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
                      <a-col :xs="12" :md="12" :lg="12">
                        <a-form-model-item
                            label="Tỉnh/ Thành phố"
                            prop="code"
                            :rules="[
                                  {
                                    required: true,
                                    message: 'Trường bắt buộc'
                                  },
                            ]"
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
                      <a-col :xs="12" :md="12" :lg="12">
                        <a-form-model-item
                            label="Quận/ Huyện"
                            prop="code"
                            :rules="[
                                  {
                                    required: true,
                                    message: 'Trường bắt buộc'
                                  },
                            ]"
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
                      <a-col :xs="12" :md="12" :lg="12">
                        <a-form-model-item
                            label="Phường/ Xã"
                            prop="code"
                            :rules="[
                                  {
                                    required: true,
                                    message: 'Trường bắt buộc'
                                  },
                            ]"
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
                      <a-col :xs="24" :md="24" :lg="24">
                        <a-form-model-item
                            label="Địa chỉ"
                            prop="code"
                            style="margin-bottom: 8px"
                        >
                          <a-input
                              placeholder="Số nhà, tên đường"
                              v-model="filters.contractNo"
                              :maxLength="200">
                          </a-input>
                        </a-form-model-item>
                      </a-col>
                    </a-row>

                    <div style="display: flex;flex-direction: column; gap: 8px">
                      <a-button
                          type="primary"
                          @click="()=> {}"
                          style="background-color: rgba(245, 154, 35, 1);width: 185px">
                        <a-icon type="plus"/>
                        Thêm người đại diện
                      </a-button>

                      <a-button
                          type="primary"
                          @click="()=> {}"
                          style="background-color: rgba(245, 154, 35, 1); width: 185px">
                        <a-icon type="plus"/>
                        Thêm người ủy quyền
                      </a-button>
                    </div>

                  </a-card>
                </a-form-model>
                <div style="display: flex;justify-content: center;gap: 20px">
                  <button
                      @click="()=> {
                       this.scrollToTop()
                        this.step =1
                      }"
                      style="width: 80px; border-radius: 2px">
                    Quay lại
                  </button>
                  <a-button
                      type="primary"
                      @click="()=> {
                       this.scrollToTop()
                        this.step =3
                      }"
                      style="background-color: rgba(245, 154, 35, 1); width: 80px">
                    Tiếp tục
                  </a-button>
                </div>
              </div>
              <!-- STEP 2 end-->

              <!-- STEP 3 start-->
              <div v-else-if="step===3" style="display: flex; flex-direction: column">
                <a-form-model
                    ref="ruleForm"
                    :model="filters"
                    layout="vertical"
                    class="search-container">
                  <a-card style="width: 100%;border: none">
                    <span class="sub-title-register">Thông tin tài khoản</span>
                    <a-row :gutter="16" type="flex" style="margin-top: 20px">
                      <a-col :xs="24" :md="24" :lg="24">
                        <a-form-model-item
                            label="Cấp phê duyệt"
                            prop="code"
                            style="margin-bottom: 8px"
                        >
                          <a-radio-group v-model="value" @change="onChange">
                            <a-radio :value="1">
                              2 cấp phê duyệt
                            </a-radio>
                            <a-radio :value="2">
                              3 cấp phê duyệt
                            </a-radio>
                          </a-radio-group>
                        </a-form-model-item>
                      </a-col>
                    </a-row>
                    <span class="sub-title-register" style="margin-top: 20px">Cấp kế toán trưởng</span>
                    <a-row :gutter="16" type="flex">
                      <a-col :xs="24" :md="24" :lg="24">
                        <a-form-model-item
                            label="Họ và tên"
                            prop="code"
                            style="margin-bottom: 8px"
                            :rules="[
                                  {
                                    required: true,
                                    message: 'Trường bắt buộc'
                                  },
                            ]"
                        >
                          <a-input
                              @search="onSearch"
                              placeholder="Họ và tên"
                              v-model="filters.contractNo"
                              :maxLength="200">
                          </a-input>
                        </a-form-model-item>
                      </a-col>
                    </a-row>
                    <a-row :gutter="16" type="flex">
                      <a-col :xs="12" :md="12" :lg="12">
                        <a-form-model-item
                            label="Điện thoại di động"
                            prop="code"
                            style="margin-bottom: 8px"
                            :rules="[
                                  {
                                    required: true,
                                    message: 'Trường bắt buộc'
                                  },
                            ]"
                        >
                          <a-input
                              @search="onSearch"
                              placeholder="Điện thoại di động"
                              v-model="filters.contractNo"
                              :maxLength="200">
                          </a-input>
                        </a-form-model-item>
                      </a-col>
                      <a-col :xs="12" :md="12" :lg="12">
                        <a-form-model-item
                            label="Email"
                            prop="code"
                            style="margin-bottom: 8px"
                            :rules="[
                                  {
                                    required: true,
                                    message: 'Trường bắt buộc'
                                  },
                            ]"
                        >
                          <a-input
                              @search="onSearch"
                              placeholder="Địa chỉ Email"
                              v-model="filters.contractNo"
                              :maxLength="200">
                          </a-input>
                        </a-form-model-item>
                      </a-col>
                    </a-row>
                    <span class="sub-title-register" style="margin-top: 20px">Cấp giám đốc</span>
                    <a-row :gutter="16" type="flex">
                      <a-col :xs="24" :md="24" :lg="24">
                        <a-form-model-item
                            label="Họ và tên"
                            prop="code"
                            style="margin-bottom: 8px"
                            :rules="[
                                  {
                                    required: true,
                                    message: 'Trường bắt buộc'
                                  },
                            ]"
                        >
                          <a-input
                              @search="onSearch"
                              placeholder="Họ và tên"
                              v-model="filters.contractNo"
                              :maxLength="200">
                          </a-input>
                        </a-form-model-item>
                      </a-col>
                    </a-row>
                    <a-row :gutter="16" type="flex">
                      <a-col :xs="12" :md="12" :lg="12">
                        <a-form-model-item
                            label="Điện thoại di động"
                            prop="code"
                            style="margin-bottom: 8px"
                            :rules="[
                                  {
                                    required: true,
                                    message: 'Trường bắt buộc'
                                  },
                            ]"
                        >
                          <a-input
                              @search="onSearch"
                              placeholder="Điện thoại di động"
                              v-model="filters.contractNo"
                              :maxLength="200">
                          </a-input>
                        </a-form-model-item>
                      </a-col>
                      <a-col :xs="12" :md="12" :lg="12">
                        <a-form-model-item
                            label="Email"
                            prop="code"
                            style="margin-bottom: 8px"
                            :rules="[
                                  {
                                    required: true,
                                    message: 'Trường bắt buộc'
                                  },
                            ]"
                        >
                          <a-input
                              @search="onSearch"
                              placeholder="Địa chỉ Email"
                              v-model="filters.contractNo"
                              :maxLength="200">
                          </a-input>
                        </a-form-model-item>
                      </a-col>
                    </a-row>
                  </a-card>
                </a-form-model>
                <div style="display: flex;justify-content: center;gap: 20px">
                  <button
                      @click="()=> {
                        this.scrollToTop()
                        this.step = 2
                      }"
                      style="width: 80px; border-radius: 2px">
                    Quay lại
                  </button>
                  <a-button
                      type="primary"
                      @click="()=> {
                       this.scrollToTop()
                        this.step = 4
                      }"
                      style="background-color: rgba(245, 154, 35, 1); width: 80px">
                    Tiếp tục
                  </a-button>
                </div>
              </div>
              <!-- STEP 3 start-->

              <!-- STEP 4 start-->
              <div v-else-if="step===4" style="display: flex; flex-direction: column">
                <div style="display: flex;justify-content: center;align-items: center; flex-direction: column">
                  <p style="font-size: 18px;font-weight: bold ;margin-top: 20px;margin-bottom: 20px">Vui lòng kiểm tra lại thông tin đăng ký của bạn.</p>
                  <a-button
                      type="primary"
                      @click="()=> {
                       this.scrollToTop()
                        this.step = 4
                      }"
                      style="background-color: rgba(245, 154, 35, 1); ">
                    Hoàn tất đăng ký
                  </a-button>
                </div>

              </div>
              <!-- STEP 4 end-->
            </div>
          </div>
        </div>
      </div>
    </div>
  </BlankRegisterLayout>
</template>

<script>
import BlankRegisterLayout from "@/components/BlankRegisterLayout.vue";

export default {
  name: "RegisterView",
  components: {BlankRegisterLayout},
  data() {
    return {
      loadingScreen: false,
      activeSearchKey: 1,
      step: 1,
      filters: {},
      value: 1,
    }
  },
  created() {
    // this.$router.push({ name: 'login', });
    // this.$router.push({ name: 'login', query: { redirect: '/login' } });
  },
  mounted() {

  },
  methods: {
    onSearch() {

    },
    scrollToTop() {
      window.scrollTo(0,0);
    },
    onChange(e) {
      console.log('radio checked', e.target.value);
    },
  },
  watch: {}
}
</script>


<style lang='less'>
@import "register";

.item-step {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 34px;
  height: 34px;
  background-color: orange;
  border-radius: 17px
}

.text-item-step {
  font-size: 14px;
  font-weight: bold;
}

p {
  margin-bottom: 0;
}

.title-register {
  font-size: 24px;
  font-weight: bold;
}

.sub-title-register {
  font-size: 20px;
  font-weight: bold;
}

</style>
