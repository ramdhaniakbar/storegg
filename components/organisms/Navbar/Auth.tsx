import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { JWTPayloadTypes, UserTypes } from '../../../services/data-types/index';

const Auth = () => {
   const [isLogin, setIsLogin] = useState(false);
   const [user, setUser] = useState({
      avatar: '',
   });
   const router = useRouter();

   useEffect(() => {
      const token = Cookies.get('token');

      if (token) {
         const jwtToken = Buffer.from(token, 'base64').toString('ascii');
         const payload: JWTPayloadTypes = jwtDecode(jwtToken);
         const userFromPayload: UserTypes = payload.player;
         const IMG = process.env.NEXT_PUBLIC_IMG;
         user.avatar = `${IMG}/${userFromPayload.avatar}`;
         setIsLogin(true);
         setUser(user);
      }
   }, []);

   const onLogout = () => {
      Cookies.remove('token');
      router.push('/');
      setIsLogin(false);
   };

   const IMG = process.env.NEXT_PUBLIC_IMG;
   const fileName = user.avatar.split('/')[user.avatar.length - 1];

   if (isLogin) {
      return (
         <li className='nav-item my-auto dropdown d-flex'>
            <div className='vertical-line d-lg-block d-none'></div>
            <div className='dropdown'>
               <a
                  className='dropdown-toggle ms-lg-40'
                  href='#'
                  role='button'
                  id='dropdownMenuLink'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
               >
                  {user.avatar === `${IMG}/${fileName}` ? (
                     <img
                        src='/img/Sign-up-photo-1.png'
                        className='rounded-circle'
                        width='40'
                        height='40'
                        alt=''
                     />
                  ) : (
                     <img
                        src={user.avatar}
                        className='rounded-circle'
                        width='40'
                        height='40'
                        alt=''
                     />
                  )}
               </a>

               <ul
                  className='dropdown-menu border-0'
                  aria-labelledby='dropdownMenuLink'
               >
                  <li>
                     <Link href='/member'>
                        <a className='dropdown-item text-lg color-palette-2'>
                           My Profile
                        </a>
                     </Link>
                  </li>
                  <li>
                     <Link href='/'>
                        <a
                           className='dropdown-item text-lg color-palette-2'
                           href='#'
                        >
                           Wallet
                        </a>
                     </Link>
                  </li>
                  <li>
                     <Link href='/member/edit-profile'>
                        <a
                           className='dropdown-item text-lg color-palette-2'
                           href='#'
                        >
                           Account Settings
                        </a>
                     </Link>
                  </li>
                  <li>
                     <a
                        onClick={onLogout}
                        className='dropdown-item text-lg color-palette-2'
                        href=''
                     >
                        Log Out
                     </a>
                  </li>
               </ul>
            </div>
         </li>
      );
   }
   return (
      <li className='nav-item my-auto'>
         <Link href='/sign-in'>
            <a
               className='btn btn-sign-in d-flex justify-content-center ms-lg-2 rounded-pill'
               role='button'
            >
               Sign In
            </a>
         </Link>
      </li>
   );
};

export default Auth;
