import { TextField } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import { styled } from "@mui/material/styles";
import { ClearIcon, SendIcon } from "../../../ui/icons";

export default function Chatbox({ value, onChange, onSubmit }) {
  // const [value, setValue] = useState("");

  const handleChange = (event) => {
    onChange(event.target.value);
  };

  const handleClear = () => {
    handleChange("");
  };

  return (
    <div className="absolute bottom-0 left-0 w-full bg-white border border-[#cddae8] z-1">
      <div className="relative max-w-full px-2 py-4">
        <div className="flex">
          <CustomTextField
            placeholder="메트라이프 보험 설계사에게 무엇이든 물어보세요."
            value={value}
            onChange={handleChange}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                e.stopPropagation();
                onSubmit?.();
              }
            }}
            InputProps={{
              endAdornment: value && (
                <InputAdornment position="end">
                  <IconButton onClick={handleClear} variant="body1">
                    <ClearIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <IconButton onClick={onSubmit}>
            <SendIcon backgroundColor="#A2CD4C" />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

const CustomTextField = styled(TextField)({
  width: "100%",
  "& .MuiInputBase-root": {
    border: "1px solid #ddd",
    padding: "0 0 0 10px",
    borderRadius: "36px",
    backgroundColor: "#fafafa",
    fontWeight: 300,
    fontSize: "inherit",
    lineHeight: "36px",
    height: "36px",
  },
  "& .MuiInputBase-input": {
    height: "36px",
    padding: "0 35px 0 15px",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      border: "none",
    },
    "&:hover fieldset": {
      border: "none",
    },
    "&.Mui-focused fieldset": {
      border: "none",
    },
  },
  flex: "1",
});
