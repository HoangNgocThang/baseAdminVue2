export default [
    {
        title: 'STT',
        dataIndex: 'rowIndex',
        scopedSlots: { customRender: 'rowIndex' },
        align: 'center',
        width: 70
    },
    {
        title: 'Mã yêu cầu',
        dataIndex: 'a1',
        scopedSlots: { customRender: 'phoneNub' },
        align: 'left',
        width: 150
    },
    {
        title: 'Mã giao dịch',
        dataIndex: 'a2',
        scopedSlots: { customRender: 'phoneNub' },
        align: 'left',
        width: 150
    },
    {
        title: 'Tài khoản nguồn',
        dataIndex: 'a3',
        scopedSlots: { customRender: 'customerName' },
        width: 150,
        align: 'left'
    },
    {
        title: 'Tài khoản đích',
        dataIndex: 'a4',
        scopedSlots: { customRender: 'communeCode' },
        width: 150,
        align: 'left'
    },
    {
        title: 'Loại GD',
        dataIndex: 'a5',
        scopedSlots: { customRender: 'communeCode' },
        width: 200,
        align: 'center'
    },
    {
        title: 'Giá trị GD (đ)',
        dataIndex: 'a6',
        scopedSlots: { customRender: 'communeCode' },
        width: 200,
        align: 'center'
    },
    {
        title: 'Phí (đ)',
        dataIndex: 'a7',
        scopedSlots: { customRender: 'communeCode' },
        width: 200,
        align: 'center'
    },
    {
        title: 'Thuế (đ)',
        dataIndex: 'a8',
        scopedSlots: { customRender: 'communeCode' },
        width: 200,
        align: 'center'
    },
    {
        title: 'Thời gian GD',
        dataIndex: 'a9',
        scopedSlots: { customRender: 'communeCode' },
        width: 200,
        align: 'center'
    },
    {
        title: 'Trạng thái GD',
        dataIndex: 'a10',
        scopedSlots: { customRender: 'communeCode' },
        width: 200,
        align: 'center'
    },
]
