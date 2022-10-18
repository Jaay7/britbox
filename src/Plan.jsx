import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import { styled } from "@mui/material/styles";
import CircleIcon from "@mui/icons-material/Circle";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import KeyboardBackspaceRoundedIcon from "@mui/icons-material/KeyboardBackspaceRounded";
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
  planBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  trial: {
    alignSelf: "center",
    fontSize: 11,
    fontWeight: 600,
    backgroundColor: "#e2e2e2",
    color: "#464646",
    padding: "4px 10px",
    borderRadius: 20,
    margin: "10px 0px"
  }
});

const StyledDiv = styled((props) => <div {...props} />)(({ theme }) => ({
  padding: 10,
  borderRadius: 4,
  margin: 6,
  width: 400,
  display: "flex",
  flexDirection: "column",
  boxShadow: "0px 0px 6px #e2e2e2aa",
  cursor: "pointer",
  [theme.breakpoints.down("sm")]: {
    width: 280
  }
}));

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
    width: 400,
    "&:hover": {
      color: "#fff",
      backgroundColor: "#152a30"
    },
    [theme.breakpoints.down("sm")]: {
      width: 280
    }
  })
);

const Plan = (props) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [myPlan, setMyPlan] = React.useState("Annual");

  const plans = [
    {
      name: "Monthly",
      price: "$6.99",
      priceCap: "BILLED MONTHLY",
      trial: "7-DAY FREE TRIAL",
      description:
        "Not ready to commit? Our monthly plan lets you cancel anytime."
    },
    {
      name: "Annual",
      price: "$69.99",
      priceCap: "$5.83 /MONTH",
      trial: "7-DAY FREE TRIAL",
      description: "Save with our annual plan - 12 months for the price of 10"
    },
    {
      name: "The Biennial",
      price: "$119.99",
      priceCap: "$5.00 /MONTH",
      trial: "7-DAY FREE TRIAL",
      description: "Our best value - 2 years of BritBox for"
    }
  ];

  return (
    <div className={classes.root}>
      <Typography variant="h6" style={{ fontWeight: 700 }}>
        Choose Your Plan
      </Typography>
      <div className={classes.planBox}>
        {plans.map((plan) => (
          <StyledDiv
            key={plan.name}
            onClick={() => setMyPlan(plan.name)}
            style={{
              border:
                plan.name === myPlan ? "2px solid #00b4e5" : "2px solid #e2e2e2"
            }}
          >
            <Stack
              sx={{ mb: 1 }}
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Stack direction="row" alignItems="center">
                {plan.name === myPlan ? (
                  <CheckCircleIcon style={{ color: "#00b4e5" }} />
                ) : (
                  <CircleIcon style={{ color: "#d1d1d1" }} />
                )}
                <Typography
                  style={{ fontWeight: 600, marginLeft: 6, fontSize: 16 }}
                >
                  {plan.name}
                </Typography>
              </Stack>
              <Stack direction="column" alignItems="flex-end">
                <Typography
                  style={{ fontWeight: 600, fontSize: 15, lineHeight: 1 }}
                >
                  {plan.price}
                </Typography>
                <Typography
                  style={{
                    fontWeight: 600,
                    fontSize: 12,
                    color: "#727272",
                    lineHeight: 1
                  }}
                >
                  {plan.priceCap}
                </Typography>
              </Stack>
            </Stack>
            <div className={classes.trial}>{plan.trial}</div>
            <Typography
              style={{ fontSize: 13, fontWeight: 600, color: "#565656" }}
            >
              {plan.description}
            </Typography>
          </StyledDiv>
        ))}
        <ContainedButton
          variant="contained"
          style={{ marginTop: 16 }}
          onClick={() =>
            navigate("/payment", {
              state: { plan: plans.find((e) => e.name === myPlan), gift: false }
            })
          }
        >
          Continue With {myPlan} Plan
        </ContainedButton>
      </div>
      <Stack
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ mt: 3, mb: 3 }}
      >
        <CardGiftcardIcon />
        <Typography style={{ fontWeight: 600 }}>
          Did you receive a BritBox Gift Subscription?
        </Typography>
        <Stack
          direction="row"
          alignItems="center"
          style={{ cursor: "pointer" }}
          onClick={() =>
            navigate("/payment", { state: { plan: null, gift: true } })
          }
        >
          <Typography style={{ color: "#00b4e5" }}>Redeem it here</Typography>
          <KeyboardBackspaceRoundedIcon style={{ color: "#00b4e5" }} />
        </Stack>
      </Stack>
    </div>
  );
};

export default Plan;
