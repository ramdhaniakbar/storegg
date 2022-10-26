interface ReachedItemProps {
   title: string;
   desc: string;
   className?: string;
}

const ReachedItem = (props: ReachedItemProps) => {
   const { title, desc, className } = props;
   return (
      <div className={`me-lg-35 ${className}`}>
         <p className='text-4xl text-lg-start text-center color-palette-1 fw-bold m-0'>
            {title}
         </p>
         <p className='text-lg text-lg-start text-center color-palette-2 m-0'>
            {desc}
         </p>
      </div>
   );
};

export default ReachedItem;
