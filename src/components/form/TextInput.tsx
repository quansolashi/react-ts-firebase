import {
  FormHelperText,
  InputLabel,
  InputProps,
  TextField,
  TextFieldProps,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";

type Props = {
  label?: string;
  name?: string;
  value: string;
  InputProps?: InputProps;
  error?: string;
  onEnter?: () => void;
  onBlur: () => void;
  onChange: () => void;
  readOnly?: boolean;
  helperText?: string;
} & TextFieldProps;

const TextInput: React.VFC<Props> = ({
  label,
  name,
  value,
  InputProps,
  error,
  onEnter,
  onBlur,
  onChange,
  readOnly,
  helperText,
  ...otherProps
}) => {
  return (
    <Box
      sx={{
        "& fieldset": {
          borderWidth: 2,
        },
        "& .Mui-focused": {
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#009DFF",
            borderWidth: 2,
          },
          "& .MuiSelect-select:focus": {
            backgroundColor: "unset",
          },
        },
        "& .Mui-error": {
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#D56C4A !important",
            borderWidth: 2,
            backgroundColor: "rgb(255, 0, 0, 0.05)",
          },
        },
      }}
    >
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <TextField
        onKeyPress={(e) => {
          if (!onEnter) return;
          if (e.key === "Enter") onEnter();
        }}
        value={value || ""}
        error={!!error}
        onChange={onChange}
        InputProps={{
          style: {
            height: otherProps.multiline ? undefined : 48,
            fontSize: 18,
            lineHeight: 1.4,
            borderRadius: 8,
          },
          onBlur: onBlur || (() => null),
          readOnly,
          ...InputProps,
        }}
        InputLabelProps={{
          shrink: true,
        }}
        fullWidth
        variant="outlined"
        {...otherProps}
      />
      <FormHelperText
        sx={{
          marginLeft: 0,
          fontSize: 12,
          wordBreak: "break-word",
        }}
        error={!!error}
      >
        {error || helperText || ""}
      </FormHelperText>
    </Box>
  );
};

export default TextInput;
