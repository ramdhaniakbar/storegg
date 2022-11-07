import jwtDecode from 'jwt-decode';
import OverviewContent from '../../components/organisms/OverviewContent';
import Sidebar from '../../components/organisms/Sidebar';
import { JWTPayloadTypes, UserTypes } from '../../services/data-types';

const Member = () => {
   return (
      <>
         <section className='overview overflow-auto'>
            <Sidebar activeMenu='overview' />
            <OverviewContent />
         </section>
      </>
   );
};

export default Member;

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

   const jwtToken = Buffer.from(token, 'base64').toString('ascii');
   const payload: JWTPayloadTypes = jwtDecode(jwtToken);
   const userFromPayload: UserTypes = payload.player;
   const IMG = process.env.NEXT_PUBLIC_IMG;
   userFromPayload.avatar = `${IMG}/${userFromPayload.avatar}`;
   return {
      props: {
         user: userFromPayload,
      },
   };
};
