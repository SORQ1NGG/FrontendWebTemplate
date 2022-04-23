export enum STATUS_COLOR {
  waitingForPayment = '#F95721',
  readyToShip = '#45B6FC',
  invoicing = '#014FCE',
  inProcessing = '#EA1F49',
  onConsent = '#00C19B',
  draft = '#969FA8',
  completed = '#027722',
  deleted = '#969FA8',
}

export enum STATUS_NAME {
  waitingForPayment = 'Ожидает оплаты',
  readyToShip = 'Готов к отгрузке',
  invoicing = 'Выставление счета',
  inProcessing = 'В обработке',
  onConsent = 'На соглас. партн.',
  draft = 'Черновик',
  completed = 'Выполнен',
  deleted = 'Удален',
}

export const tableData = [
  {
    id: 0,
    orderNumber: 'D3319563',
    status: STATUS_NAME.waitingForPayment,
    countInOrder: '123',
    createDate: '10:00 25.11.2021',
    price: '100000000',
  },
  {
    id: 1,
    orderNumber: 'D3319563',
    status: STATUS_NAME.waitingForPayment,
    countInOrder: '123',
    createDate: '10:00 25.11.2021',
    price: '100000000',
  },
  {
    id: 2,
    orderNumber: 'D3319563',
    status: STATUS_NAME.readyToShip,
    countInOrder: '123',
    createDate: '10:00 25.11.2021',
    price: '100000000',
  },
  {
    id: 3,
    orderNumber: 'D3319563',
    status: STATUS_NAME.invoicing,
    countInOrder: '123',
    createDate: '10:00 25.11.2021',
    price: '100000000',
  },
  {
    id: 4,
    orderNumber: 'D3319563',
    status: STATUS_NAME.inProcessing,
    countInOrder: '123',
    createDate: '10:00 25.11.2021',
    price: '100000000',
  },
  {
    id: 5,
    orderNumber: 'D3319563',
    status: STATUS_NAME.onConsent,
    countInOrder: '123',
    createDate: '10:00 25.11.2021',
    price: '100000000',
  },
  {
    id: 6,
    orderNumber: 'D3319563',
    status: STATUS_NAME.draft,
    countInOrder: '123',
    createDate: '10:00 25.11.2021',
    price: '100000000',
  },
  {
    id: 7,
    orderNumber: 'D3319563',
    status: STATUS_NAME.completed,
    countInOrder: '123',
    createDate: '10:00 25.11.2021',
    price: '100000000',
  },
  {
    id: 8,
    orderNumber: 'D3319563',
    status: STATUS_NAME.deleted,
    countInOrder: '123',
    createDate: '10:00 25.11.2021',
    price: '100000000',
  },
]
