import {
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography
} from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import { styled } from "@mui/material/styles";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    width: "100%",
    alignItems: "center",
    marginTop: 20,
    backgroundColor: "#e2e2e",
    marginBottom: 100
  },
  formBox: {
    padding: 10,
    marginTop: 20,
    display: "flex",
    flexDirection: "column",
    boxShadow: "0px 0px 6px #e2e2e2"
  },
  inputBox: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 16
  }
});

const StyledTextField = styled((props) => <TextField {...props} />)(
  ({ theme }) => ({
    marginTop: 8,
    "& label.Mui-focused": {
      color: "#00b4e5"
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#00b4e5"
    },
    "& .MuiOutlinedInput-root": {
      height: "42px",
      borderRadius: 4,
      width: "360px",
      fontWeight: 500,
      "&.Mui-focused fieldset": {
        borderColor: "#00b4e5"
      }
    },
    [theme.breakpoints.down("sm")]: {
      "& .MuiOutlinedInput-root": {
        width: "280px"
      }
    }
  })
);

const ContainedButton = styled((props) => <Button {...props} />)(
  ({ theme }) => ({
    marginTop: "10px",
    padding: "6px 30px",
    fontSize: 14,
    display: "flex",
    alignItems: "center",
    outline: "none",
    border: "none",
    borderRadius: "4px",
    backgroundColor: "#152a30",
    textTransform: "Capitalize",
    color: "#f2f2f2",
    fontWeight: 500,
    "&:hover": {
      color: "#fff",
      backgroundColor: "#152a30"
    }
  })
);

const SignupForm = (props) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [email, setEmail] = React.useState("");
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false
  });
  // const [password, setPassword] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [nextForm, setNextForm] = React.useState(false);

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className={classes.root}>
      <div style={{ width: "70%", textAlign: "center" }}>
        <Typography variant="h6" style={{ fontWeight: 700 }}>
          Create Your Account
        </Typography>
        {!nextForm && (
          <Typography>
            Start by entering the email you want to use for your BritBox account
          </Typography>
        )}
      </div>
      <div className={classes.formBox}>
        {nextForm ? (
          <>
            <div className={classes.inputBox}>
              <span style={{ fontSize: 12, fontWeight: 600 }}>
                Choose Password
              </span>
              <span style={{ fontSize: 11, width: "280px", marginTop: 6 }}>
                Your password needs to be at least 6 characters long and include
                a number or special character
              </span>
              <StyledTextField
                size={"small"}
                value={values.password}
                type={values.showPassword ? "text" : "password"}
                onChange={(e) =>
                  setValues({ ...values, password: e.target.value })
                }
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {values.showPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
            </div>
            <div className={classes.inputBox}>
              <span style={{ fontSize: 12, fontWeight: 600 }}>First Name</span>
              <StyledTextField
                size={"small"}
                value={firstName}
                placeholder="Your first name"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className={classes.inputBox}>
              <span style={{ fontSize: 12, fontWeight: 600 }}>Last Name</span>
              <StyledTextField
                size={"small"}
                value={lastName}
                placeholder="Your last name"
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <span
              style={{
                fontSize: 11,
                width: "280px",
                marginTop: 6,
                lineHeight: 1.4
              }}
            >
              By clicking Create Account below you agree to the BritBox{" "}
              <a
                href="#"
                style={{
                  textDecoration: "none",
                  color: "#00b4e5",
                  fontWeight: 600
                }}
              >
                Terms & Conditions
              </a>{" "}
              and{" "}
              <a
                href="#"
                style={{
                  textDecoration: "none",
                  color: "#00b4e5",
                  fontWeight: 600
                }}
              >
                Privacy Policy
              </a>
              . We'll send you regular BritBox newsletters, along with other
              special offers and promotions. You can opt out at any time by
              clicking on the unsubscribe link in our emails.
            </span>
            <ContainedButton
              variant="contained"
              style={{ marginTop: 16 }}
              onClick={() => navigate("/plan")}
            >
              Create Account
            </ContainedButton>
          </>
        ) : (
          <>
            <span style={{ fontSize: 12, fontWeight: 600 }}>Email address</span>
            <StyledTextField
              size={"small"}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <ContainedButton
              disabled={email === ""}
              variant="contained"
              style={{ marginTop: 16 }}
              onClick={() => setNextForm(true)}
            >
              Continue
            </ContainedButton>
          </>
        )}
      </div>
    </div>
  );
};

export default SignupForm;
