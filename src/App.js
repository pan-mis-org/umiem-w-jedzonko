import React, { useState } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import "./App.scss";
import { ReactComponent as Order } from "./icons/order.svg";
import { useFormik } from "formik";
import { css, cx } from "@emotion/css";
import bowl1 from "./food-icons/bowl1.png";
import bowl2 from "./food-icons/bowl2.png";
import bowl3 from "./food-icons/bowl3.png";
import bowl4 from "./food-icons/bowl4.png";
import food from "./food-icons/food.png";
import food1 from "./food-icons/food1.png";
import { restaurants } from "./data/restaurants";
import { isEmpty } from "lodash";
import { dishes } from "./data/dishes";
import { Loading } from "./Loading";
import { CookForm } from "./CookForm";
import { OrderForm } from "./OrderForm";

function App() {
  const [winningOption, setWinningOption] = useState();
  const [stage, setStage] = useState("choose");
  const [foodSource, setFoodSource] = useState(1);
  const order = foodSource === 1;
  const getVariantByKey = (key) =>
    foodSource === key ? "contained" : "outlined";
  const variantSwitcherButtons = [
    {
      key: 1,
      label: "Zamów",
      icon: <Order height={40} fill={foodSource === 1 ? "#fff" : "inherit"} />,
    },
    {
      key: 2,
      label: "Ugotuj",
    },
  ];

  const orderInitialValues = {
    priceLevel: [],
    fatLevel: [],
    walkingDistance: [],
    optionToOrder: [],
  };

  const cookInitialValues = {
    duration: [],
    ingredients: [],
  };

  const formik = useFormik({
    initialValues: order ? orderInitialValues : cookInitialValues,
    onSubmit: (values) => {
      let data;
      if (order) {
        data = restaurants;
      } else {
        data = dishes;
      }
      const optionsToChooseFrom = Object.entries(values).reduce(
        (acc, [property, value]) => {
          if (!isEmpty(value)) {
            const filteredRestaurants = acc.filter((el) => {
              const correspondingValue = el[property];
              if (typeof correspondingValue !== "object") {
                return value.includes(el[property]);
              } else {
                return value.some((val) => correspondingValue.includes(val));
              }
            });
            return filteredRestaurants;
          }
          return acc;
        },
        data
      );
      const randomIndex = Math.floor(
        Math.random() * optionsToChooseFrom.length
      );
      const winingOption = optionsToChooseFrom[randomIndex];
      setStage("loading");
      setWinningOption(winingOption.name);
    },
  });
  const choiceStage = stage === "choose";
  const loadingStage = stage === "loading";
  return (
    <>
      {choiceStage && (
        <div className="App">
          <div className="wrap">
            <img
              src={food}
              alt="food"
              className={cx(
                "food-icon",
                css`
                  // rotate: 180deg;
                `
              )}
            />
            <>
              <img src={food1} alt="food1" className="food-icon" />
              <img src={bowl1} alt="food" className="food-icon" />
              <img src={bowl2} alt="food" className="food-icon" />
              <img src={bowl3} alt="food" className="food-icon" />
              <img src={bowl4} alt="food" className="food-icon" />
              <div className="wrapper">
                <ButtonGroup
                  variant="contained"
                  aria-label="Basic button group"
                  className={css`
                    margin-bottom: 20px;
                  `}
                >
                  {variantSwitcherButtons.map((button) => (
                    <Button
                      variant={getVariantByKey(button.key)}
                      key={button.key}
                      onClick={() => setFoodSource(button.key)}
                    >
                      {button.label}
                    </Button>
                  ))}
                </ButtonGroup>
                <form onSubmit={formik.handleSubmit} className="form-wrapper">
                  {order ? (
                    <OrderForm formik={formik} />
                  ) : (
                    <CookForm formik={formik} />
                  )}
                  <Button
                    type="submit"
                    variant="contained"
                    className="draw-btn"
                  >
                    <div className="circle one"></div>
                    <div className="circle two"></div>
                    <div className="circle three"></div>
                    <span>Losuj</span>
                  </Button>
                </form>
              </div>
              <img
                src={require("./food-icons/hungry-mis.gif")}
                className="mis-gif"
              />
            </>
          </div>
        </div>
      )}
      {loadingStage && (
        <Loading
          winningOption={winningOption}
          moveBack={() => {
            setStage("choose");
            setWinningOption(null);
          }}
        />
      )}
    </>
  );
}

export default App;
