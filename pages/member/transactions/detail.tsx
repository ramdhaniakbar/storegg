import Sidebar from '../../../components/organisms/Sidebar';
import TransactionDetailContent from '../../../components/organisms/TransactionDetailContent';

const TransactionsDetail = () => {
   return (
      <>
         <section className='transactions-detail overflow-auto'>
            {/* <Sidebar /> */}
            <TransactionDetailContent />
         </section>
      </>
   );
};

export default TransactionsDetail;
