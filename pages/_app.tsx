import 'bootstrap/dist/css/bootstrap.css';
import '../styles/utilities.css';
import '../styles/homepage.css';
import '../styles/detail.css';
import '../styles/checkout.css';
import '../styles/complete-checkout.css';
import '../styles/sign-in.css';
import '../styles/sign-up.css';
import '../styles/sign-up-photo.css';
import '../styles/sign-up-success.css';
import '../styles/404-not-found.css';
import '../styles/sidebar.css';
import '../styles/overview.css';
import '../styles/transactions.css';
import '../styles/transactions-detail.css';
import '../styles/edit-profile.css';
import '../styles/navbar-log-in.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }: AppProps) {
   useEffect(() => {
      typeof document !== undefined
         ? require('bootstrap/dist/js/bootstrap')
         : null;
   }, []);

   return (
      <>
         <Head>
            {/* Google Fonts */}
            <link rel='preconnect' href='https://fonts.gstatic.com' />
            <link
               href='https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
               rel='stylesheet'
            />

            {/* AOS Animation */}
            <link
               href='https://unpkg.com/aos@2.3.1/dist/aos.css'
               rel='stylesheet'
            />
         </Head>
         <Component {...pageProps} />
         <ToastContainer />
      </>
   );
}

export default MyApp;
