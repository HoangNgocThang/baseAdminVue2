<template>
  <BaseLayout crumb="Quản lý giao dịch > Chuyển tiền > Danh sách chuyển tiền">
    <p class="text-title-home">Thông tin giao dịch</p>
    <a-card>
      <div style="width: 100%; height: 550px">
        <div style="display: flex; flex-direction: row; gap: 20px">
          <div style="display: flex;flex: 1; flex-direction: row;">
            <div style="width: 200px">
              <p class="text-label">Mã yêu cầu</p>
            </div>
            <div style="display: flex;flex: 1">
              <p>00029384</p>
            </div>
          </div>
        </div>

        <div style="display: flex; flex-direction: row; gap: 20px">
          <div style="display: flex;flex: 1; flex-direction: row;">
            <div style="width: 200px">
              <p class="text-label">Số tài  khoản nguồn</p>
            </div>
            <div style="display: flex;flex: 1">
              <p>2341241241343</p>
            </div>
          </div>
        </div>

        <div style="display: flex; flex-direction: row; gap: 20px">
          <div style="display: flex;flex: 1; flex-direction: row;">
            <div style="width: 200px">
              <p class="text-label">Tên tài khoản</p>
            </div>
            <div style="display: flex;flex: 1">
              <p>Tài khoản Chi hộ</p>
            </div>
          </div>
        </div>

        <div style="display: flex; flex-direction: row; gap: 20px">
          <div style="display: flex;flex: 1; flex-direction: row;">
            <div style="width: 200px">
              <p class="text-label">Tài khoản đích</p>
            </div>
            <div style="display: flex;flex: 1">
              <p>2341241241343</p>
            </div>
          </div>
        </div>

        <div style="display: flex; flex-direction: row; gap: 20px">
          <div style="display: flex;flex: 1; flex-direction: row;">
            <div style="width: 200px">
              <p class="text-label">Tên tài khoản đích</p>
            </div>
            <div style="display: flex;flex: 1">
              <p>Tên tổ chức</p>
            </div>
          </div>
        </div>

        <div style="display: flex; flex-direction: row; gap: 20px">
          <div style="display: flex;flex: 1; flex-direction: row;">
            <div style="width: 200px">
              <p class="text-label">Giá trị GD</p>
            </div>
            <div style="display: flex;flex: 1">
              <p>2.000.000 đ</p>
            </div>
          </div>
        </div>

        <div style="display: flex; flex-direction: row; gap: 20px">
          <div style="display: flex;flex: 1; flex-direction: row;">
            <div style="width: 200px">
              <p class="text-label">Nội dung</p>
            </div>
            <div style="display: flex;flex: 1">
              <p>Chuyển tiền mục đích gì</p>
            </div>
          </div>
        </div>

        <div style="display: flex; flex-direction: row; gap: 20px">
          <div style="display: flex;flex: 1; flex-direction: row;">
            <div style="width: 200px">
              <p class="text-label">Người khởi tạo</p>
            </div>
            <div style="display: flex;flex: 1">
              <p>Hoàng Thúy Kiều</p>
            </div>
          </div>
        </div>

        <div style="display: flex; flex-direction: row; gap: 20px">
          <div style="display: flex;flex: 1; flex-direction: row;">
            <div style="width: 200px">
              <p class="text-label">Thời gian khởi tạo</p>
            </div>
            <div style="display: flex;flex: 1">
              <p>04/04/2022 15:00:00</p>
            </div>
          </div>
        </div>

        <div style="display: flex; flex-direction: row; gap: 20px">
          <div style="display: flex;flex: 1; flex-direction: row;">
            <div style="width: 200px">
              <p class="text-label">Người kiểm duyệt</p>
            </div>
            <div style="display: flex;flex: 1">
              <p>Nguyễn Thị Bình</p>
            </div>
          </div>
        </div>

        <div style="display: flex; flex-direction: row; gap: 20px">
          <div style="display: flex;flex: 1; flex-direction: row;">
            <div style="width: 200px">
              <p class="text-label">Thời gian kiểm duyệt</p>
            </div>
            <div style="display: flex;flex: 1">
              <p>04/04/2022 15:00:00</p>
            </div>
          </div>
        </div>

        <div style="display: flex; flex-direction: row; gap: 20px">
          <div style="display: flex;flex: 1; flex-direction: row;">
            <div style="width: 200px">
              <p class="text-label">Người duyệt</p>
            </div>
            <div style="display: flex;flex: 1">
              <p>Nguyễn Thị Bình</p>
            </div>
          </div>
        </div>

        <div style="display: flex; flex-direction: row; gap: 20px">
          <div style="display: flex;flex: 1; flex-direction: row;">
            <div style="width: 200px">
              <p class="text-label">Thời gian duyệt</p>
            </div>
            <div style="display: flex;flex: 1">
              <p>04/04/2022 15:05:00</p>
            </div>
          </div>
        </div>

        <div style="display: flex; flex-direction: row; gap: 20px">
          <div style="display: flex;flex: 1; flex-direction: row;">
            <div style="width: 200px">
              <p class="text-label">Trạng thái yêu cầu</p>
            </div>
            <div style="display: flex;flex: 1">
              <p style="color: blue">Đã duyệt</p>
            </div>
          </div>
        </div>

      </div>
    </a-card>
  </BaseLayout>
</template>

<script>
import BaseLayout from "@/components/BaseLayout.vue";
export default {
  name: "TransferDetailView",
  components: {
    BaseLayout
    // ModalForm
  },
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
.text-title-home {
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 4px;
}
.text-label {
  font-size: 15px;
  font-weight: bold;
}


</style>