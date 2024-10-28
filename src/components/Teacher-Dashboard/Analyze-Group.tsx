"use client";
import { ArrowDropDown } from "@mui/icons-material";
import { Grid, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import performance from "../../../public/assets/images/static/Perfomance dashboard img.png";
import { leagueSpartan } from "@/app/fonts";

const AnalyzeGroup = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const dropdownItems = ["My Account", "Settings", "Logout"];
  const dropdownLabels = ["Select Test", "Select User", "Select Group"];
  const chartValues = [100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 0];
  const testNames = Array(9).fill("Test Name");

  return (
    <>
      <div
        style={{
          backgroundColor: "#242728",
          margin: "20px 0 0 0",
          backdropFilter: "blur(112.5px)",
          width: "100%",
          borderRadius: "10px"
        }}
      >
        <div style={{ padding: "2vh" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "10px",
            }}
          >
            <h2
              style={{ color: "white", fontSize: "3vh", whiteSpace: "nowrap", fontWeight: "600" }}
            >
              Analyze Group Performance
            </h2>

            {/* Dropdown Buttons */}
            {dropdownLabels.map((label, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "#1C1E1E",
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  padding: "0 5px 0 10px",
                  height: "40px",
                }}
              >
                <IconButton onClick={handleClick} style={{ color: "white" }}>
                  <Typography variant="body1" style={{ fontSize: "13px" }}>
                    {label}
                  </Typography>
                  <ArrowDropDown style={{ padding: "0 0 0 10px" }} />
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    style: { backgroundColor: "#333", color: "white" }, // Custom background for dropdown
                  }}
                >
                  {dropdownItems.map((item, idx) => (
                    <MenuItem key={idx} onClick={handleClose}>
                      {item}
                    </MenuItem>
                  ))}
                </Menu>
              </div>
            ))}
          </div>

          {/* Performance Chart and Labels */}
          <Grid container spacing={2}>
            <Grid item xs={12} lg={1}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                  color: "#AAAAAA",
                  fontSize: "13.5px",
                }}
              >
                {chartValues.map((value) => (
                  <p key={value} style={{ margin: ".6vh 0" }}>
                    {value}
                  </p>
                ))}
              </div>
            </Grid>

            <Grid item xs={12} lg={11}>
              <Image
                src={performance}
                alt="Performance Chart"
                style={{ width: "100%", height: "39.5vh", paddingTop: "6px" }}
              />
              <Grid container>
                <Grid item xs={12}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      color: "#AAAAAA",
                    }}
                  >
                    {testNames.map((name, index) => (
                      <p key={index} className="test-paragraph">
                        {name}
                      </p>
                    ))}
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
};

export default AnalyzeGroup;
