import cx from 'classnames';
import Link from 'next/link';

interface MenuItemProps {
   title: string;
   icon:
      | 'ic-menu-overview'
      | 'ic-menu-transactions'
      | 'ic-menu-messages'
      | 'ic-menu-cards'
      | 'ic-menu-rewards'
      | 'ic-menu-settings'
      | 'ic-menu-logout';
   active?: boolean;
   href?: string;
   onClick?: () => void;
}

const MenuItem = (props: MenuItemProps) => {
   const { title, icon, active, href, onClick } = props;
   const classItem = cx({
      item: true,
      'mb-30': true,
      active: active,
   });
   return (
      <div className={classItem} onClick={onClick}>
         <img
            className='menu-icon me-3'
            src={`/icon/${icon}.svg`}
            width='25'
            height='25'
         />
         <p className='item-title m-0'>
            {onClick ? (
               <a className='text-lg text-decoration-none' href=''>
                  {title}
               </a>
            ) : (
               <Link href={href}>
                  <a className='text-lg text-decoration-none'>{title}</a>
               </Link>
            )}
         </p>
      </div>
   );
};

export default MenuItem;
