import { IconButton } from '@mui/material';
import { ArrowIcon } from '@/ui/icons';
export default function CloseBtn({ setIsOpen }) {
    return (
        <IconButton
            sx={[{ 
                display: 'block',
                position: 'absolute',
                top: -20, left: 0,
                right: 0,
                width: '80px',
                height: '20px',
                borderRadius: '16px 16px 0 0',
                backgroundColor: '#cddae8',
                margin: '0 auto',
                
            },
            {
                ':hover': {
                    backgroundColor: '#cddae8',
                }
            },
        ]} 
            onClick={() => setIsOpen(false)}
        >
            <ArrowIcon className='inline-block absolute top-1 -translate-x-1.5  w-4 h-5'/>
        </IconButton>
    )
}