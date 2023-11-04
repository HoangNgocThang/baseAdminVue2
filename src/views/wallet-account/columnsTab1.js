export default [
    {
        title: 'STT',
        dataIndex: 'rowIndex',
        scopedSlots: { customRender: 'rowIndex' },
        align: 'center',
        width: 70
    },
    {
        title: 'Số tài khoản ví',
        dataIndex: 'phoneNub',
        scopedSlots: { customRender: 'phoneNub' },
        align: 'left',
        width: 150
    },
    {
        title: 'Tên tài khoản',
        dataIndex: 'phoneNub2',
        scopedSlots: { customRender: 'phoneNub' },
        align: 'left',
        width: 150
    },
    {
        title: 'Số dư',
        dataIndex: 'customerName',
        scopedSlots: { customRender: 'customerName' },
        width: 150,
        align: 'left'
    },
    {
        title: 'Trạng thái',
        dataIndex: 'communeCode',
        scopedSlots: { customRender: 'communeCode' },
        width: 150,
        align: 'left'
    },
    {
        title: 'Thao tác',
        slots: { title: 'actionTitle' },
        dataIndex: 'operation',
        scopedSlots: { customRender: 'operation' },
        width: 200,
        align: 'center'
    },
]
