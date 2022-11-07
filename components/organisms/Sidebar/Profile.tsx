import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';
import { useEffect, useState } from 'react';
import { JWTPayloadTypes, UserTypes } from '../../../services/data-types';

const Profile = () => {
   const [user, setUser] = useState({
      avatar: '',
      name: '',
      email: '',
   });
   useEffect(() => {
      const token = Cookies.get('token');

      if (token) {
         const jwtToken = Buffer.from(token, 'base64').toString('ascii');
         const payload: JWTPayloadTypes = jwtDecode(jwtToken);
         const userFromPayload: UserTypes = payload.player;
         const IMG = process.env.NEXT_PUBLIC_IMG;
         userFromPayload.avatar = `${IMG}/${userFromPayload.avatar}`;
         setUser(userFromPayload);
      }
   }, []);

   const IMG = process.env.NEXT_PUBLIC_IMG;
   const fileName = user.avatar.split('/')[user.avatar.length - 1];

   return (
      <div className='user text-center pb-50 pe-30'>
         {user.avatar === `${IMG}/${fileName}` ? (
            <img
               src='/img/Sign-up-photo-1.png'
               width='90'
               height='90'
               className='img-fluid mb-20 rounded-circle'
            />
         ) : (
            <img
               src={user.avatar}
               width='90'
               height='90'
               className='img-fluid mb-20 rounded-circle'
            />
         )}
         <h2 className='fw-bold text-xl color-palette-1 m-0'>{user.name}</h2>
         <p className='color-palette-2 m-0'>{user.email}</p>
      </div>
   );
};

export default Profile;
