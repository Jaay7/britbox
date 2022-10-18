import React from "react";
import {
  Link,
  Step,
  StepLabel,
  Stepper,
  Typography,
  StepConnector
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import PropTypes from "prop-types";
import { stepConnectorClasses } from "@mui/material/StepConnector";
import { styled } from "@mui/material/styles";
import PersonIcon from "@mui/icons-material/Person";
import CheckIcon from "@mui/icons-material/Check";
import PaymentIcon from "@mui/icons-material/Payment";
import { Outlet, useLocation } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#e2e2e"
  },
  header: {
    display: "flex",
    flexDirection: "row",
    flexGrow: 1,
    justifyContent: "space-between",
    backgroundColor: "#152a30",
    // height: 40,
    alignItems: "center",
    padding: "12px 18px",
    color: "white"
  },
  footer: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    justifyContent: "center",
    backgroundColor: "#152a30",
    alignItems: "center",
    padding: "22px 8px",
    color: "white",
    position: "fixed",
    bottom: 0,
    width: "100%"
  },
  container: {
    marginTop: 10
  }
});

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 20
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: "#00b4e5"
    }
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: "#00b4e5"
    }
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor:
      theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
    borderRadius: 1
  }
}));

const ColorlibStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
  zIndex: 1,
  color: "#fff",
  width: 40,
  height: 40,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  ...(ownerState.active && {
    backgroundColor: "#00b4e5",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)"
  }),
  ...(ownerState.completed && {
    backgroundColor: "#00b4e5"
  })
}));

function ColorlibStepIcon(props) {
  const { active, completed, className } = props;

  const icons = {
    1: <PersonIcon />,
    2: <CheckIcon />,
    3: <PaymentIcon />
  };

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    >
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node
};

const steps = ["Account", "Plan", "Payment"];

const Main = () => {
  const classes = useStyles();
  const { pathname } = useLocation();

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Typography style={{ fontSize: 24 }}>
          <span style={{ color: "#0094bb" }}>brit</span>
          <span style={{ color: "#e7123f" }}>box</span>
        </Typography>
        <Typography style={{ fontSize: 14 }}>Signup</Typography>
      </div>
      <div style={{ width: "100%" }} className={classes.container}>
        <Stepper
          alternativeLabel
          activeStep={
            pathname === "/account"
              ? 0
              : pathname === "/plan"
              ? 1
              : pathname === "/payment"
              ? 2
              : null
          }
          connector={<ColorlibConnector />}
          style={{ width: "100%", backgroundColor: "#fff" }}
        >
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel StepIconComponent={ColorlibStepIcon}>
                {label}
              </StepLabel>
            </Step>
          ))}
        </Stepper>
        <Outlet />
      </div>
      <div className={classes.footer}>
        <Typography style={{ fontWeight: 600 }}>Customer support</Typography>
        <Link
          href="#"
          color="#00b4e5"
          style={{ fontSize: 12, textDecoration: "none" }}
        >
          help.britbox.com
        </Link>
      </div>
    </div>
  );
};

export default Main;
