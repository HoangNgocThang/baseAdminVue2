import {
    SELECT_MENU_ITEM,
    SELECT_MENU_ITEM_HAVE_CHILDREN,
    SELECT_SUB_MENU_ITEM,
} from "@/store/mutation-type";
import routerPatch from "@/router/routerPatch";

const moduleMenu = {
    state: {
        menu: [
            {
                id: '1',
                title: "Trang chủ",
                link: routerPatch.home,
                selected: true,
                haveChildren: false,
                isChildren: false,
                open: false,
            },
            {
                id: '2',
                title: "Quản lý tài khoản ví",
                link: routerPatch.walletAccount,
                selected: false,
                haveChildren: false,
                isChildren: false,
                open: false,
            },
            {
                id: '3',
                title: "Quản lý liên kết ngân hàng",
                link: routerPatch.bankLink,
                selected: false,
                haveChildren: false,
                isChildren: false,
                open: false,
            },
            {
                id: '4',
                title: "Quản lý giao dịch",
                link: "/transaction",
                selected: false,
                haveChildren: true,
                isChildren: false,
                open: false,
                children: [{
                    idParent: '4',
                    id: '4.1',
                    title: "Liên kết ngân hàng",
                    link: routerPatch.transaction_BankLink,
                    selected: false,
                    isChildren: true
                }, {
                    idParent: '4',
                    id: '4.2',
                    title: "Nạp ví",
                    link: routerPatch.transaction_CashIn,
                    selected: false,
                    isChildren: true
                }, {
                    idParent: '4',
                    id: '4.3',
                    title: "Rút ví",
                    link: routerPatch.transaction_CashOut,
                    selected: false,
                    isChildren: true
                }, {
                    idParent: '4',
                    id: '4.4',
                    title: "Chuyển tiền",
                    link: routerPatch.transaction_Transfer_RequireList,
                    selected: false,
                    isChildren: true
                },]
            },
            {
                id: '5',
                title: "Dịch vụ",
                link: "#",
                selected: false,
                haveChildren: true,
                isChildren: false,
                open: false,
                children: [{
                    idParent: '5',
                    id: '5.1',
                    title: "Chi trả",
                    link: '#',
                    selected: false,
                    isChildren: true
                }, {
                    idParent: '5',
                    id: '5.2',
                    title: "Thanh toán",
                    link: '#',
                    selected: false,
                    isChildren: true
                },]
            },
            {
                id: '6',
                title: "Lịch sử giao dịch",
                link: routerPatch.historyTransaction_List,
                selected: false,
                haveChildren: false,
                isChildren: false,
                open: false,
            },
            {
                id: '7',
                title: "Ủy quyền",
                link: "#",
                selected: false,
                haveChildren: false,
                isChildren: false,
                open: false,
            },
            {
                id: '8',
                title: "Báo cáo",
                link: "#",
                selected: false,
                haveChildren: false,
                isChildren: false,
                open: false,
            }
        ],
    },
    mutations: {
        [SELECT_MENU_ITEM](state, payload) {
            console.log('payload', payload)
            const arr1 = state.menu.map((e) => {
                if (payload?.id === e?.id) {
                    return {
                        ...e,
                        selected: true,
                        open: false,
                    }
                } else {
                    return {
                        ...e,
                        selected: false
                    }
                }
            })
            console.log('arr1', arr1)
            const arr2 = arr1.map(e => {
                    if (e?.haveChildren) {
                        return {
                            ...e,
                            children: e?.children.map(ele => {
                                return {
                                    ...ele,
                                    selected: false
                                }
                            })
                        }
                    } else {
                        return {...e}
                    }
                }
            )
            console.log('arr2', arr2)
            state.menu = arr2
        },
        [SELECT_MENU_ITEM_HAVE_CHILDREN](state, payload) {
            const arr1 = state.menu.map((e) => {
                if (payload?.id === e?.id) {
                    if (e?.haveChildren) {
                        return {
                            ...e,
                            selected: false,
                            open: !e?.open,
                            children: e.children.map(ele => {
                                return {
                                    ...ele,
                                    selected: false
                                }
                            })
                        }
                    }
                } else {
                    return {
                        ...e,
                        selected: false
                    }
                }
            })
            console.log('arr1', arr1)
            const arr2 = arr1.map(e => {
                    if (e?.haveChildren) {
                        return {
                            ...e,
                            children: e?.children.map(ele => {
                                return {
                                    ...ele,
                                    selected: false
                                }
                            })
                        }
                    } else {
                        return {...e}
                    }
                }
            )
            console.log('arr2', arr2)
            state.menu = arr2
        },
        [SELECT_SUB_MENU_ITEM](state, payload) {
            const arr1 = state.menu.map((e) => {
                if (payload?.idParent === e?.id) {
                    return {
                        ...e,
                        children: e.children.map((it) => {
                            if (it.id === payload?.id) {
                                return {...it, selected: true}
                            } else {
                                return {...it, selected: false}
                            }
                        })
                    }
                } else {
                    return {...e}
                }
            })
            console.log('arr1', arr1)
            const arr2 = arr1.map(e => {
                if (e.haveChildren === false) {
                    return {
                        ...e,
                        selected: false
                    }
                } else if (e.haveChildren && payload?.idParent !== e?.id) {
                    return {
                        ...e,
                        children: e?.children.map(ele => {
                            return {
                                ...ele,
                                selected: false
                            }
                        })
                    }
                } else {
                    return {
                        ...e,
                    }
                }
            })
            console.log('arr2', arr2)
            state.menu = arr2
        },
    },
    actions: {}
}

export default moduleMenu;