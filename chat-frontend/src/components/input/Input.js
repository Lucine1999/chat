import PropTypes from "prop-types";
import MuiTextField from "@mui/material/TextField";
import { ThemeProvider } from "@mui/material/styles";
import { FormControl, InputLabel } from "@mui/material";
import { theme, globalInputStyles } from "./theme";

function Input({
  size,
  labelValue,
  borders,
  htmlFor,
  state,
  value,
  type,
  pattern,
  placeholder,
  autoComplete,
  blur,
  ...otherProps
}) {
  const inputClasses = globalInputStyles();

  return (
    <ThemeProvider theme={theme}>
      <FormControl variant="standard" className={inputClasses.w100}>
        <InputLabel className={inputClasses.inputLabelStyle} htmlFor={htmlFor}>
          {labelValue}
        </InputLabel>
        <MuiTextField
          value={value}
          id={htmlFor}
          placeholder={placeholder}
          size={size}
          borders={borders}
          autoComplete={autoComplete}
          state={state}
          type={type}
          pattern={pattern}
          inputProps={{
            onBlur: blur,
          }}
          {...otherProps}
        />
      </FormControl>
    </ThemeProvider>
  );
}

Input.defaultProps = {
  autoComplete: "on",
  blur: () => {},
};

Input.propTypes = {
  size: PropTypes.string,
  labelValue: PropTypes.string,
  htmlFor: PropTypes.string,
  borders: PropTypes.string,
  state: PropTypes.string,
  type: PropTypes.string,
  pattern: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  placeholder: PropTypes.string,
  autoComplete: PropTypes.string,
  blur: PropTypes.func,
};

export default Input;
