<template>
  <a-layout id="components-layout-demo-side" style="min-height: 100vh">
    <!--        v-model="collapsed"-->
    <!--        collapsible-->
    <a-layout-sider style="background: rgba(22, 73, 135, 1)" width="250">
      <div style="display: flex;justify-content: center;flex-direction: row">
        <img src="../../public/images/logo.png" style="width: 70px;height: 45px;margin-top: 15px; margin-bottom: 15px"/>
      </div>
      <div style="margin-top: 10px">
        <div v-for="item in menu" :key="item.id">
          <div
              @click="onClickMenu2(item)"
              class="item-zmenu"
              :style="{backgroundColor: item?.selected ?'orange' :'#164987'}"
          >
            <span class="text-item-zmenu">{{ item?.title }}</span>
            <div v-if="item?.haveChildren">
              <a-icon v-show="item?.open" type="up" style="color:white; font-size: 12px"/>
              <a-icon v-show="!item?.open" type="down" style="color:white; font-size: 12px"/>
            </div>
          </div>
          <div :class="[ item?.open? 'tran': 'notran']">
            <div v-show="item?.open" v-for="it in item?.children" :key="it.id">
              <div
                  @click="onClickSubMenu(it)"
                  class="item-zmenu"
                  :style="{backgroundColor: it?.selected ?'orange' :'#164987'}">
                <span class="text-item-zmenu">{{ it?.title }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <div style="display: flex;flex-direction: row; justify-content: space-between; align-items: center">
          <div style="padding-left: 40px">
            <p style="margin-bottom: 0; font-size: 20px; font-weight: bold">{{ this.$props.crumb }}</p>
          </div>
          <a-dropdown style="margin-right: 40px">
            <a class="ant-dropdown-link" @click="e => e.preventDefault()">
              Thang Hoang Ngoc
              <a-icon type="down"/>
            </a>
            <a-menu slot="overlay">
              <a-menu-item key="0" @click="()=> { this.visible = true }">Tài khoản cá nhân</a-menu-item>
              <a-menu-divider/>
              <a-menu-item key="1">
                <router-link to="/account-info">Thông tin tài khoản</router-link>
              </a-menu-item>
              <a-menu-divider/>
              <a-menu-item key="2">Đổi mật khẩu</a-menu-item>
              <a-menu-divider/>
              <a-menu-item key="3">Đăng xuất</a-menu-item>
            </a-menu>
          </a-dropdown>
        </div>
      </a-layout-header>
      <a-layout-content style="margin: 0 16px">
        <div :style="{ padding: '24px', minHeight: '360px', backgroundColor:'#F0F2F5' }">
          <slot></slot>
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Created by VNPD Design ©2023
      </a-layout-footer>
    </a-layout>
    <ModalForm
        ref="modalFormComponent"
        @closeModal="closeModal"
        :visible-modal-form="visible"/>
  </a-layout>
</template>

<script>

import {mapState} from "vuex";
import {SELECT_MENU_ITEM, SELECT_MENU_ITEM_HAVE_CHILDREN, SELECT_SUB_MENU_ITEM} from "@/store/mutation-type";
import ModalForm from "@/components/ModalForm.vue";

export default {
  name: "BaseLayout",
  components: {ModalForm},
  props: ['crumb'],
  data: () => {
    return {
      // collapsed: false,
      visible: false
    }
  },
  mounted() {
    console.log('aa', this.$props.crumb)
  },
  computed: {
    ...mapState({
      menu: state => state.moduleMenu.menu,
    })
  },
  methods: {
    closeModal(reload = false) {
      console.log('r', reload)
      this.visible = false
    },
    async onClickMenu2(item) {
      console.log('onClickMenu2', item,)
      // if (window.location.pathname !== item?.link) {}

      if (item?.haveChildren === false && item?.isChildren === false) {
        this.$store.commit(SELECT_MENU_ITEM, item)
        await this.$router.push(item?.link)
        return
      }
      if (item?.haveChildren && item?.isChildren === false) {
        this.$store.commit(SELECT_MENU_ITEM_HAVE_CHILDREN, item)
        // await this.$router.push(item?.link)
        return
      }
      if (item?.haveChildren && item?.isChildren === false) {
        return
      }
    },
    async onClickSubMenu(item) {
      // if (window.location.pathname !== item?.link) {}
      this.$store.commit(SELECT_SUB_MENU_ITEM, item)
      await this.$router.push(item?.link)
    },
    onClickMenu(key, haveChild) {
      console.log(haveChild)
      if (key === 0) {
        this.$router.push({name: 'home'}).catch(() => {
        });
      } else if (key === 1) {
        this.$router.push({name: 'wallet-account'}).catch(() => {
        });
      } else if (key === 2) {
        this.$router.push({name: 'bank-link'}).catch(() => {
        });
      } else if (key === 3) {
        this.$router.push({name: 'transaction'}).catch(() => {
        });
      }
    },
  }
}
</script>

<style scoped>
#components-layout-demo-side .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}

.item-zmenu {
  display: flex;
  align-items: center;
  padding: 10px 10px;
  cursor: pointer;
  font-size: 14px;
  justify-content: space-between;
}

.item-zmenu:hover {
//background-color: #E6F7FF; color: #1890ff; background-color: orange;
}

.text-item-zmenu {
  color: white;
  margin-left: 10px;
  font-weight: bold;
}

.text-item-zmenu:hover {
//color: #1890ff; //text-decoration: underline;
}

.tran {
  padding-left: 10px;
  //transform: rotate3d(30deg, 1, 1, 1);
  //transform: matrix(1, -0.3, 0, 1, 0, 0);
  //transition: transform 2s ease-in-out;
  //transform:rotate(360deg);
  //transition: transform 0.5s ease-out;
  //animation: fadeInOut 2s linear 1 forwards;
}
@keyframes fadeInOut {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
}

.noTran {
  padding-left: 10px;
}

</style>
