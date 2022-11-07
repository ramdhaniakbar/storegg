import { useEffect, useState } from 'react';
import { NumericFormat } from 'react-number-format';
import CheckoutConfirmation from '../CheckoutConfirmation';

const CheckoutDetail = () => {
   const [dataTopUp, setDataTopUp] = useState({
      verifyID: '',
      nominalItem: {
         price: 0,
         coinQuantity: 0,
         coinName: '',
         _id: '',
      },
      paymentItem: {
         payment: {
            type: '',
            _id: '',
         },
         bank: {
            bankName: '',
            name: '',
            noRekening: '',
            _id: '',
         },
      },
      bankAccountName: '',
   });
   const [orderID, setOrderID] = useState('');

   useEffect(() => {
      const dataFromLocal = localStorage.getItem('data-topup');
      const dataTopUpLocal = JSON.parse(dataFromLocal);
      setDataTopUp(dataTopUpLocal);

      const char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      let result1 = '';
      let result2 = '';
      for (let i = 0; i < char.length; i++) {
         result1 = char.charAt(Math.floor(Math.random() * char.length));
         result2 = char.charAt(Math.floor(Math.random() * char.length));
      }
      const charResult = result1 + result2;
      setOrderID(
         charResult + Math.floor(Math.random() * (999 - 100 + 1) + 100)
      );
   }, []);

   const itemPrice = dataTopUp.nominalItem.price;
   const tax = (dataTopUp.nominalItem.price * 10) / 100;
   const totalPrice = itemPrice + tax;

   return (
      <>
         <div className='purchase pt-md-50 pt-30'>
            <h2 className='fw-bold text-xl color-palette-1 mb-20'>
               Purchase Details
            </h2>
            <p className='text-lg color-palette-1 mb-20'>
               Your Game ID{' '}
               <span className='purchase-details'>{dataTopUp.verifyID}</span>
            </p>
            <p className='text-lg color-palette-1 mb-20'>
               Order ID <span className='purchase-details'>#{orderID}</span>
            </p>
            <p className='text-lg color-palette-1 mb-20'>
               Item{' '}
               <span className='purchase-details'>
                  {dataTopUp.nominalItem.coinQuantity}{' '}
                  {dataTopUp.nominalItem.coinName}
               </span>
            </p>
            <p className='text-lg color-palette-1 mb-20'>
               Price{' '}
               <span className='purchase-details'>
                  <NumericFormat
                     prefix='Rp. '
                     value={itemPrice}
                     displayType='text'
                     decimalSeparator=','
                     thousandSeparator='.'
                  />
               </span>
            </p>
            <p className='text-lg color-palette-1 mb-20'>
               Tax (10%){' '}
               <span className='purchase-details'>
                  <NumericFormat
                     prefix='Rp. '
                     value={tax}
                     displayType='text'
                     decimalSeparator=','
                     thousandSeparator='.'
                  />
               </span>
            </p>
            <p className='text-lg color-palette-1 mb-20'>
               Total{' '}
               <span className='purchase-details color-palette-4'>
                  <NumericFormat
                     prefix='Rp. '
                     value={totalPrice}
                     displayType='text'
                     decimalSeparator=','
                     thousandSeparator='.'
                  />
               </span>
            </p>
         </div>
         <div className='payment pt-md-50 pb-md-50 pt-10 pb-10'>
            <h2 className='fw-bold text-xl color-palette-1 mb-20'>
               Payment Informations
            </h2>
            <p className='text-lg color-palette-1 mb-20'>
               Your Account Name{' '}
               <span className='purchase-details'>
                  {dataTopUp.bankAccountName}
               </span>
            </p>
            <p className='text-lg color-palette-1 mb-20'>
               Type{' '}
               <span className='payment-details'>
                  {dataTopUp.paymentItem.payment.type}
               </span>
            </p>
            <p className='text-lg color-palette-1 mb-20'>
               Bank Name{' '}
               <span className='payment-details'>
                  {dataTopUp.paymentItem.bank.bankName}
               </span>
            </p>
            <p className='text-lg color-palette-1 mb-20'>
               Bank Account Name{' '}
               <span className='payment-details'>
                  {dataTopUp.paymentItem.bank.name}
               </span>
            </p>
            <p className='text-lg color-palette-1 mb-20'>
               Bank Number{' '}
               <span className='payment-details'>
                  {dataTopUp.paymentItem.bank.noRekening}
               </span>
            </p>
         </div>
         <CheckoutConfirmation orderID={orderID} />
      </>
   );
};

export default CheckoutDetail;
