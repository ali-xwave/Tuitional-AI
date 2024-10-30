"use client";
import { ArrowDropDown } from "@mui/icons-material";
import { Box, Grid, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import performance from "../../../public/assets/images/static/Perfomance dashboard img.png";
import { leagueSpartan } from "@/app/fonts";
import colors from "@/config/colors";

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
      <div className={leagueSpartan.className}>
        <div style={styles.container}>
          <div style={styles.innerContainer}>
            <div style={styles.header}>
              <h2 style={styles.title}>Analyze Group Performance</h2>

              {/* Dropdown Buttons */}
              {dropdownLabels.map((label, index) => (
                <div key={index} style={styles.dropdownButton}>
                  <IconButton onClick={handleClick} style={styles.dropdownIcon}>
                    <Typography variant="body1" style={{ fontSize: "2vh" }}>
                      {label}
                    </Typography>
                    <ArrowDropDown style={{ padding: "0 0 0 5px", height: "2vh", width: "5vh" }} />
                  </IconButton>
                  <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      style: styles.dropdownMenu
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
                <Box sx={styles.chartLabels}>
                  {chartValues.map((value) => (
                    <p key={value} style={{ margin: ".9vh 0", fontSize: "2vh" }}>
                      {value}
                    </p>
                  ))}
                </Box>
              </Grid>

              <Grid item xs={12} lg={11}>
                <Image
                  src={performance}
                  alt="Performance Chart"
                  style={styles.chartImage}
                />
                <Grid container>
                  <Grid item xs={12}>
                    <div style={styles.testLabelsContainer}>
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
      </div>
    </>
  );
};

export default AnalyzeGroup;

const styles = {
  container: {
    backgroundColor: colors.backgroundMain,
    margin: "20px 0 0 0",
    backdropFilter: "blur(112.5px)",
    width: "100%",
    borderRadius: "10px"
  },
  innerContainer: { padding: "2vh" },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "10px"
  },
  title: {
    color: colors.textWhite,
    fontSize: "3vh",
    whiteSpace: "nowrap",
    fontWeight: "600"
  },
  dropdownButton: {
    backgroundColor: colors.backgroundTodo,
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    padding: "0 5px 0 10px",
    height: "6vh",
    fontSize: "2vh",
    width: "100%",
  },
  dropdownIcon: { color: colors.textWhite },
  dropdownMenu: {
    backgroundColor: "#333",
    color: "white"
  },
  chartLabels: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    color: "#AAAAAA",
  },
  chartImage: { width: "100%", height: "39.5vh", paddingTop: "6px" },
  testLabelsContainer: {
    display: "flex",
    justifyContent: "space-between",
    color: "#AAAAAA"
  }
};
