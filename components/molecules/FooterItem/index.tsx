interface FooterItemProps {
   titlesub: string;
}

const FooterItem = (props: FooterItemProps) => {
   const { titlesub } = props;
   return (
      <li className='mb-6'>
         <a href='' className='text-lg color-palette-1 text-decoration-none'>
            {titlesub}
         </a>
      </li>
   );
};

export default FooterItem;
