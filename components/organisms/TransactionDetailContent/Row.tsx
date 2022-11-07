import { NumericFormat } from 'react-number-format';

interface RowProps {
   label: string;
   value: string | number;
   className?: string;
}

const Row = (props: RowProps) => {
   const { label, value, className } = props;
   return (
      <p className='text-lg color-palette-1 mb-20'>
         {label}{' '}
         <span className={`purchase-details ${className}`}>
            {typeof value === 'number' ? (
               <NumericFormat
                  prefix='Rp. '
                  value={value}
                  displayType='text'
                  decimalSeparator=','
                  thousandSeparator='.'
               />
            ) : (
               value
            )}
         </span>
      </p>
   );
};

export default Row;
