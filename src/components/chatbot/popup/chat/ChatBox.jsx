import { TextField } from "@mui/material";
import { styled } from '@mui/material/styles';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import {ClearIcon, SendIcon} from '../../../ui/icons'
import {useState} from 'react'

export default function Chatbox() {

    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const handleClear = () => {
        setValue('');
    };

    return (
        <div className="absolute bottom-0 left-0 w-full bg-white border border-[#cddae8] z-1">
            <div className="relative max-w-full px-2 py-4">
                <div className="flex">
                    <CustomTextField
                        placeholder="메트라이프 챗봇에게 믈어보자!"
                        value={value}
                        onChange={handleChange}
                        InputProps={{
                            endAdornment: (
                                value && (
                                    <InputAdornment position="end">
                                        <IconButton onClick={handleClear} variant="body1">
                                            <ClearIcon />
                                        </IconButton>
                                    </InputAdornment>
                                )
                            ),
                        }}
                    />
                    <IconButton >
                        <SendIcon backgroundColor="#A2CD4C"/>
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

const CustomTextField = styled(TextField)({
    width: '100%',
    '& .MuiInputBase-root': {
      border: '1px solid #ddd',
      padding: '0 0 0 10px',
      borderRadius: '36px',
      backgroundColor: '#fafafa',
      fontWeight: 300,
      fontSize: 'inherit',
      lineHeight: '36px',
      height: '36px',
    },
    '& .MuiInputBase-input': {
      height: '36px',
      padding: '0 35px 0 15px', 
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        border: 'none',
      },
      '&:hover fieldset': {
        border: 'none',
      },
      '&.Mui-focused fieldset': {
        border: 'none',
      },
    },
    flex: '1',
  });