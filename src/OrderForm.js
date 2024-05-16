import React, { useState } from "react";
import "./App.scss";
import Select from "react-select";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";

const priceLevels = [
  { value: 1, label: "tanioszka" },
  { value: 2, label: "OK" },
  { value: 3, label: "dość drogo" },
  { value: 4, label: "burżuazja" },
];

const fatLevels = [
  { value: 1, label: "Pani-ośmiorniczka-level" },
  { value: 2, label: "Pani-ośmiorniczka-level ++" },
  { value: 3, label: "Pan-miś-level --" },
  { value: 4, label: "Pan-miś-level" },
];

const walkingDistances = [
  { value: 1, label: "Tak" },
  { value: 0, label: "Nie" },
  { value: 2, label: "Kind of" },
];

const orderOptions = [
  { value: 1, label: "Tak" },
  { value: 0, label: "Nie" },
];

export const OrderForm = ({ formik }) => {
  return (
    <div className="d-flex flex-column gap-4">
      <FormControl className="mb-1">
        <FormLabel>Poziom cenowy</FormLabel>
        <Select
          placeholder=""
          clearable
          options={priceLevels}
          name="priceLevel"
          id="priceLevel"
          isMulti
          onChange={(el) =>
            formik.setFieldValue(
              "priceLevel",
              el.map((e) => e.value)
            )
          }
        />
      </FormControl>
      <FormControl className="mb-1">
        <FormLabel>Kaloryczność</FormLabel>
        <Select
          placeholder=""
          isMulti
          clearable
          options={fatLevels}
          id="fatLevel"
          name="fatLevel"
          onChange={(el) =>
            formik.setFieldValue(
              "fatLevel",
              el.map((e) => e.value)
            )
          }
        />
      </FormControl>

      <FormControl className="mb-1">
        <FormLabel>Dostępność pieszo</FormLabel>
        <Select
          placeholder=""
          isMulti
          clearable
          options={walkingDistances}
          id="walkingDistance"
          name="walkingDistance"
          onChange={(el) =>
            formik.setFieldValue(
              "walkingDistance",
              el.map((e) => e.value)
            )
          }
        />
      </FormControl>
      <FormControl className="mb-1">
        <FormLabel>Opcja zamówienia</FormLabel>
        <Select
          placeholder=""
          isMulti
          clearable
          options={orderOptions}
          id="optionToOrder"
          name="optionToOrder"
          onChange={(el) =>
            formik.setFieldValue(
              "optionToOrder",
              el.map((e) => e.value)
            )
          }
        />
      </FormControl>
    </div>
  );
};
