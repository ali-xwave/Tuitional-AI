"use client";
import React, { memo, useCallback } from "react";
import { DateRangePicker } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import moment from "moment";

interface FilterProps {
  changeFn?: any;
}

const FilterByDate: React.FC<FilterProps> = ({ changeFn }) => {
  console.log("filter");
  const [open, setOpen] = React.useState<boolean>(false);

  const handleChange = (value: any) => {
    // console.log(value[0]);
    if (value === null || value.length !== 2 || value[1] === null) {
      changeFn(value);
    } else {
      const utcFormattedDates = value?.map((date: any) =>
        moment(date).utc().format("YYYY-MM-DDTHH:mm:ss.SSS[Z]")
      );
      // console.log(utcFormattedDates);
      if (changeFn) {
        changeFn(utcFormattedDates);
      }
    }
  };

  return (
    <>
      <style>
        {`
        .rs-picker-toggle-wrapper{
          border-radius: 10px;
          background: transparent;
          overflow: hidden;
          width:100% ;
          height: 100% ;
        }

        .rs-picker.rs-picker-focused, .rs-picker:not(.rs-picker-disabled):hover{
        border-color : var(--main-color) !important;

        }


        .rs-input-group {
        border: none;
        }
        
        .rs-input-group.rs-input-group-inside{
          height: 100%;
          display: flex;
          flex-direction: row-reverse;
          background: transparent;
          align-items: center;
        }

        .rs-input-group.rs-input-group-inside > input{
          background: transparent;
          font-family: var(--leagueSpartan-regular-400);
          font-size: var(--normal-text-size);
          color: var(--text-color);
          height: 100% !important;
        }

.rs-input-group-lg.rs-input-group>.rs-input, .rs-input-group-lg.rs-input-group>.rs-input-group-addon{
 height: 100%;
}

.rs-input-group-lg>.rs-input {
padding :5px 10px;
border: 1px solid red;}

        .rs-input-group.rs-input-group-lg>.rs-input-group-addon{
           padding :10px ;
           min-width:0;}

        .rs-input-group.rs-input-group-inside > span{
          height: 100%;
          background: transparent;
        }

        .rs-input-group.rs-input-group-inside > span > svg{
          color: var(--main-color);
          font-size: var(--text-size) !important;
        }
        `}
      </style>

      <DateRangePicker
        format="dd.MM.yyyy"
        showHeader={false}
        size="lg"
        placeholder="Filter By Date"
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => {
          setOpen(false);
        }}
        onChange={handleChange}
      />
    </>
  );
};

export default memo(FilterByDate);