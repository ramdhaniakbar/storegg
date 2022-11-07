import jwtDecode from 'jwt-decode';
import React from 'react';
import Sidebar from '../../../components/organisms/Sidebar';
import TransactionContent from '../../../components/organisms/TransactionContent';
import { JWTPayloadTypes, UserTypes } from '../../../services/data-types';

const Transactions = () => {
   return (
      <>
         <section className='transactions overflow-auto'>
            <Sidebar activeMenu='transactions' />
            <TransactionContent />
         </section>
      </>
   );
};

export default Transactions;

interface GetServerSideProps {
   req: {
      cookies: {
         token: string;
      };
   };
}

export const getServerSideProps = async ({ req }: GetServerSideProps) => {
   const { token } = req.cookies;
   if (!token) {
      return {
         redirect: {
            destination: '/sign-in',
            permanent: false,
         },
      };
   }

   return {
      props: {},
   };
};
