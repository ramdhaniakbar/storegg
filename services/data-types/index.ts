export interface CategoryTypes {
   _id: string;
   name: string;
   __v: number;
}

export interface GameItemTypes {
   _id: string;
   status: string;
   name: string;
   category: CategoryTypes;
   thumbnail: string;
}

export interface BanksTypes {
   _id: string;
   name: string;
   bankName: string;
   noRekening: string;
}

export interface PaymentTypes {
   _id: string;
   type: string;
   status: string;
   banks: BanksTypes[];
}

export interface NominalsTypes {
   _id: string;
   coinQuantity: number;
   coinName: string;
   price: number;
}

export interface LoginTypes {
   email: string;
   password: string;
}

export interface UserTypes {
   _id: string;
   email: string;
   username: string;
   name: string;
   avatar: string;
}

export interface JWTPayloadTypes {
   player: UserTypes;
   iat: number;
}

export interface CheckoutTypes {
   voucher: string;
   nominal: string;
   payment: string;
   bank: string;
   name: string;
   accountUser: string;
}

export interface HistoryVoucherTopupTypes {
   category: string;
   coinName: string;
   coinQuantity: string;
   gameName: string;
   price: number;
   thumbnail: string;
}

export interface HistroyPaymentTypes {
   bankName: string;
   name: string;
   noRekening: string;
   type: string;
}

export interface HistoryTransactionTypes {
   _id: string;
   historyVoucherTopup: HistoryVoucherTopupTypes;
   value: number;
   status: string;
   orderId: string;
   accountUser: string;
   tax: number;
   name: string;
   historyPayment: HistroyPaymentTypes;
}

export interface TopUpCategoriesTypes {
   _id: string;
   value: number;
   name: string;
}
