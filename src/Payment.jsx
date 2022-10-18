import {
  Button,
  Grid,
  IconButton,
  Stack,
  TextField,
  Tooltip,
  Typography
} from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import { styled } from "@mui/material/styles";
import KeyboardBackspaceRoundedIcon from "@mui/icons-material/KeyboardBackspaceRounded";
import LockIcon from "@mui/icons-material/Lock";
import { useLocation, useNavigate } from "react-router-dom";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";

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
  inputBox: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 16
  },
  secure: {
    alignSelf: "center",
    alignItems: "center",
    display: "flex",
    fontSize: 11,
    fontWeight: 600,
    backgroundColor: "#e2e2e2",
    color: "#464646",
    padding: "4px 10px",
    borderRadius: 20,
    margin: "10px 0px"
  },
  planBox: {
    backgroundColor: "#00b4e510",
    padding: 10,
    borderRadius: 6
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
      fontWeight: 500,
      "&.Mui-focused fieldset": {
        borderColor: "#00b4e5"
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

const StyledForm = styled((props) => <div {...props} />)(({ theme }) => ({
  padding: 10,
  marginTop: 20,
  display: "flex",
  flexDirection: "column",
  boxShadow: "0px 0px 6px #e2e2e2",
  borderRadius: 4,
  width: 400,
  cursor: "pointer",
  [theme.breakpoints.down("sm")]: {
    width: 280
  }
}));

const Payment = (props) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [giftCode, setGiftCode] = React.useState("");
  const [cardHolderName, setCardHolderName] = React.useState("");
  const [cardNumber, setCardNumber] = React.useState("");
  const [expiryDate, setExpiryDate] = React.useState("");
  const [zipCode, setZipCode] = React.useState("");
  const [securityCode, setSecurityCode] = React.useState("");
  const { state } = useLocation();
  const { plan, gift } = state;
  return (
    <div className={classes.root}>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="flex-start"
        style={{ width: 360 }}
      >
        <KeyboardBackspaceRoundedIcon
          style={{ color: "#00b4e5", cursor: "pointer" }}
          onClick={() => navigate(-1)}
        />
        <Typography variant="h6" style={{ fontWeight: 700, margin: "auto" }}>
          {gift ? "Redeem Now" : "Enter Your Card Details"}
        </Typography>
      </Stack>
      {gift ? (
        <StyledForm>
          <IconButton
            disableFocusRipple
            disableRipple
            style={{
              backgroundColor: "#e2e2e2",
              width: "max-content",
              alignSelf: "center",
              margin: "10px 0px",
              padding: 10
            }}
          >
            <CardGiftcardIcon fontSize={"large"} />
          </IconButton>
          <div className={classes.inputBox}>
            <span style={{ fontSize: 13, fontWeight: 600, lineHeight: 2 }}>
              Enter your gift code
            </span>
            <span style={{ fontSize: 12 }}>
              Once you submit your Gift Code it will be applied to your account.
              Gift Codes can only be applied once.
            </span>
            <StyledTextField
              size={"small"}
              value={giftCode}
              placeholder="Gift Code"
              onChange={(e) => setGiftCode(e.target.value)}
            />
          </div>
        </StyledForm>
      ) : (
        ""
      )}
      <StyledForm>
        <div className={classes.secure}>
          <LockIcon fontSize={"12"} />
          <span>SECURE PAYMENT</span>
        </div>
        <div className={classes.inputBox}>
          <span style={{ fontSize: 12, fontWeight: 600 }}>Cardholder Name</span>
          <StyledTextField
            size={"small"}
            value={cardHolderName}
            placeholder="Cardholder Name"
            onChange={(e) => setCardHolderName(e.target.value)}
          />
        </div>
        <div className={classes.inputBox}>
          <span style={{ fontSize: 12, fontWeight: 600 }}>Card Number</span>
          <StyledTextField
            size={"small"}
            value={cardNumber}
            placeholder="0000 0000 0000 0000"
            onChange={(e) => setCardNumber(e.target.value)}
          />
        </div>
        <Stack direction="row" alignItems="center">
          <div className={classes.inputBox}>
            <span style={{ fontSize: 12, fontWeight: 600 }}>Expiry date</span>
            <StyledTextField
              size={"small"}
              value={expiryDate}
              placeholder="01/11"
              onChange={(e) => setExpiryDate(e.target.value)}
            />
          </div>
          <div className={classes.inputBox} style={{ marginLeft: 10 }}>
            <span style={{ fontSize: 12, fontWeight: 600 }}>
              Zip/Postal code
            </span>
            <StyledTextField
              size={"small"}
              value={zipCode}
              placeholder="000000"
              onChange={(e) => setZipCode(e.target.value)}
            />
          </div>
        </Stack>
        <div className={classes.inputBox}>
          <span style={{ fontSize: 12, fontWeight: 600 }}>Security code</span>
          <Grid item>
            <Tooltip
              open={true}
              title="3 digits on back of card. For Armex, 4 digits on the front."
              arrow
              placement="right"
            >
              <StyledTextField
                size={"small"}
                value={securityCode}
                placeholder="000"
                onChange={(e) => setSecurityCode(e.target.value)}
              />
            </Tooltip>
          </Grid>
        </div>
        {plan == null ? (
          ""
        ) : (
          <div className={classes.planBox}>
            <Stack direction="row" alignItems="center">
              <CheckCircleIcon style={{ color: "#00b4e5" }} />

              <Typography
                style={{ fontWeight: 600, marginLeft: 6, fontSize: 16 }}
              >
                {plan.name}
              </Typography>
            </Stack>
            <Stack
              sx={{ color: "#727272" }}
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography
                style={{ fontWeight: 600, marginLeft: 6, fontSize: 13 }}
              >
                To pay on 2/3/2022:
              </Typography>
              <Stack direction="column" alignItems="flex-end">
                <Typography
                  style={{ fontWeight: 600, fontSize: 13, lineHeight: 1 }}
                >
                  {plan.price}
                </Typography>
              </Stack>
            </Stack>
          </div>
        )}
        <ContainedButton variant="contained" style={{ marginTop: 16 }}>
          {gift ? "Start Subscription" : "Start Free Trial"}
        </ContainedButton>
      </StyledForm>
    </div>
  );
};

export default Payment;
