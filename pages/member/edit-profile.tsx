import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';
import { useEffect, useState } from 'react';
import Input from '../../components/atoms/Input';
import Sidebar from '../../components/organisms/Sidebar';
import { JWTPayloadTypes, UserTypes } from '../../services/data-types';
import { updateProfile } from '../../services/member';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

const EditProfile = () => {
   const [user, setUser] = useState({
      _id: '',
      name: '',
      email: '',
      avatar: '',
   });
   const [imagePreview, setImagePreview] = useState(null);
   const router = useRouter();

   useEffect(() => {
      const token = Cookies.get('token');
      if (token) {
         const jwtToken = Buffer.from(token, 'base64').toString('ascii');
         const payload: JWTPayloadTypes = jwtDecode(jwtToken);
         const userFromPayload: UserTypes = payload.player;
         setUser(userFromPayload);
      }
   }, []);

   const onSubmit = async () => {
      console.log('data: ', user);
      const data = new FormData();
      data.append('image', user.avatar);
      data.append('name', user.name);
      const response = await updateProfile(data, user._id);
      if (response?.error) {
         toast.error(response.message);
      } else {
         toast.success('Berhasil edit profile');
         console.log('data: ', response);
         Cookies.remove('token');
         router.push('/sign-in');
      }
   };

   const IMG = process.env.NEXT_PUBLIC_IMG;

   return (
      <>
         <section className='edit-profile overflow-auto'>
            <Sidebar activeMenu='settings' />
            <main className='main-wrapper'>
               <div className='ps-lg-0'>
                  <h2 className='text-4xl fw-bold color-palette-1 mb-30'>
                     Settings
                  </h2>
                  <div className='bg-card pt-30 ps-30 pe-30 pb-30'>
                     <form action=''>
                        <div className='photo d-flex'>
                           <div className='image-upload'>
                              <label htmlFor='avatar'>
                                 {imagePreview ? (
                                    <img
                                       src={imagePreview}
                                       alt='icon upload'
                                       className='rounded-circle'
                                       width={90}
                                       height={90}
                                    />
                                 ) : (
                                    <img
                                       src={`${IMG}/${user.avatar}`}
                                       alt='icon upload'
                                       className='rounded-circle'
                                       width={90}
                                       height={90}
                                    />
                                 )}
                              </label>
                              <input
                                 id='avatar'
                                 type='file'
                                 name='avatar'
                                 accept='image/png, image/jpeg'
                                 onChange={(event) => {
                                    const img = event.target.files[0];
                                    setImagePreview(URL.createObjectURL(img));
                                    return setUser({
                                       ...user,
                                       avatar: img,
                                    });
                                 }}
                              />
                           </div>
                        </div>
                        <div className='pt-30'>
                           <Input
                              label='Full Name'
                              value={user.name}
                              onChange={(event) =>
                                 setUser({
                                    ...user,
                                    name: event.target.value,
                                 })
                              }
                           />
                        </div>
                        <div className='pt-30'>
                           <Input
                              label='Email Address'
                              value={user.email}
                              disabled
                           />
                        </div>
                        {/* <div className='pt-30'>
                           <Input label='Phone' />
                        </div> */}
                        <div className='button-group d-flex flex-column pt-50'>
                           <button
                              type='button'
                              className='btn btn-save fw-medium text-lg text-white rounded-pill'
                              onClick={onSubmit}
                           >
                              Save My Profile
                           </button>
                        </div>
                     </form>
                  </div>
               </div>
            </main>
         </section>
      </>
   );
};

export default EditProfile;
