import React from "react";
import "./App.scss";
import Select from "react-select";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import { dishes } from "./data/dishes";

const durationLevel = [
  { value: 0, label: "do 15 minut" },
  { value: 1, label: "do 30 minut" },
  { value: 2, label: "30 minut" },
  { value: 3, label: "ponad 30 minut" },
];

const allIngredients = dishes.reduce((acc, dish) => {
  return Array.from(new Set([...acc, ...dish.ingredients]));
}, []);

export const CookForm = ({ formik }) => {
  return (
    <div className="d-flex flex-column gap-4">
      <FormControl className="mb-1">
        <FormLabel>Czas przyrządzania</FormLabel>
        <Select
          clearable
          options={durationLevel}
          name="duration"
          id="duration"
          isMulti
          onChange={(el) =>
            formik.setFieldValue(
              "duration",
              el.map((e) => e.value)
            )
          }
        />
      </FormControl>
      <FormControl className="mb-1">
        <FormLabel>Co masz w lodówce</FormLabel>
        <Select
          isMulti
          clearable
          options={allIngredients.map((ingredient) => ({
            value: ingredient,
            label: ingredient,
          }))}
          id="ingredients"
          name="ingredients"
          onChange={(el) =>
            formik.setFieldValue(
              "ingredients",
              el.map((e) => e.value)
            )
          }
        />
      </FormControl>
    </div>
  );
};
