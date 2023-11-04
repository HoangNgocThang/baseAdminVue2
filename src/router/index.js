import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginView from "@/views/login/LoginView.vue";
import routerPatch from "@/router/routerPatch";

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    base: import.meta.env.BASE_URL,
    routes: [
        {
            path: routerPatch.login,
            name: 'login',
            component: LoginView,
            // meta: { requiresAuth: false },
        },
        {
            path: routerPatch.register,
            name: 'register',
            component: () => import('../views/register/RegisterView.vue')
        },
        {
            path: routerPatch.home,
            name: 'home',
            component: () => import('../views/home/HomeView.vue'),
            // meta: { requiresAuth: true },
        },
        {
            path: routerPatch.walletAccount,
            name: 'wallet-account',
            component: () => import('../views/wallet-account/WalletAccountView.vue'),
            // meta: { requiresAuth: true },
        },
        {
            path: routerPatch.bankLink,
            name: 'bank-link',
            component: () => import('../views/bank-link/BankLinkView.vue'),
            // meta: { requiresAuth: true },
        },
        {
            path: routerPatch.accountInfo,
            name: 'account-info',
            component: () => import('../views/account-info/AccountInfoView.vue'),
        },
        {
            path: routerPatch.transaction_Transfer_RequireList,
            name: 'transaction.transfer.require-list',
            component: () => import('../views/transaction/transfer/require-list/RequireListView.vue'),
        },
        {
            path: routerPatch.transaction_BankLink,
            name: 'transaction.bank-link',
            component: () => import('../views/transaction/bank-link/BankLinkView.vue'),
        },
        {
            path: routerPatch.transaction_CashIn,
            name: 'transaction.cash-in',
            component: () => import('../views/transaction/cash-in/CashInView.vue'),
        },
        {
            path: routerPatch.transaction_CashOut,
            name: 'transaction.cash-out',
            component: () => import('../views/transaction/cash-out/CashOutView.vue'),
        },
        {
            path: routerPatch.transaction_Transfer_TransferDetail,
            name: 'transaction.transfer.transfer-detail',
            component: () => import('../views/transaction/transfer/transfer-detail/TransferDetailView.vue')
        },
        {
            path: routerPatch.historyTransaction_Detail,
            name: 'history-transaction.detail',
            component: () => import('../views/history-transaction/detail/HistoryTransactionDetail.vue')
        },
        {
            path: routerPatch.historyTransaction_List,
            name: 'history-transaction.list',
            component: () => import('../views/history-transaction/list/HistoryTransactionList.vue')
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/AboutView.vue')
        }
    ]
})

export default router
