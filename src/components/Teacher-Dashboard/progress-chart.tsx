"use client";
import { ArrowDropDown } from "@mui/icons-material";
import { Grid, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import test from "../../../public/assets/images/static/Test Ellipse dashboard img.png";
import pending from "../../../public/assets/images/static/Pending Ellipse dashboard img.png";
import chart from "../../../public/assets/images/static/progress chart dashboard img.png";
import send from "../../../public/assets/images/static/send dashboard icon.png";
import affif from "../../../public/assets/images/static/affif circle dashboard img.png";
import { leagueSpartan } from "@/app/fonts";
import colors from "@/config/colors";

const ProgressChart = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // Arrays for Dropdown labels, Status, and Student data
  const dropdownLabels = ["Select Test", "Select User", "Select Group"];
  const statusData = [
    { label: "Submitted", count: 89, color: colors.scoreGreen, border: colors.scoreGreen },
    { label: "Pending", count: 89, color: colors.scoreYellow, border: colors.scoreYellow },
    { label: "Deadline", count: 89, color: colors.scoreRed, border: colors.scoreRed }
  ];
  const studentData = [
    { name: "Affif", progress: "+78.5%", color: colors.scoreGreen },
    { name: "Affif", progress: "-21.2%", color: "#F86A6A" },
    { name: "Affif", progress: "+78.5%", color: colors.scoreGreen }
  ];

  return (
    <div className={leagueSpartan.className}>
      <div style={styles.mainContainer}>
        <div style={styles.padding}>
          <div style={styles.dropdownContainer}>
            {dropdownLabels.map((label, index) => (
              <div key={index} style={styles.dropdownButton}>
                <IconButton onClick={handleClick} style={styles.dropdownIcon}>
                  <Typography variant="body1" style={{ fontSize: "2vh" }}>{label}</Typography>
                  <ArrowDropDown style={{ padding: "0 0 0 10px" }} />
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{ style: styles.dropdownMenu }}
                >
                  <MenuItem onClick={handleClose}>My Account</MenuItem>
                  <MenuItem onClick={handleClose}>Settings</MenuItem>
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
              </div>
            ))}
          </div>

          <div style={styles.statusContainer}>
            {statusData.map((item, index) => (
              <div key={index} style={styles.statusBox(item.color, item.border)}>
                <div style={{ display: "flex", alignItems: "center", whiteSpace: "nowrap" }}>
                  <span style={{ color: colors.textWhite, fontSize: "2.5vh" }}>{item.label}</span>
                  <span style={{ paddingLeft: "20px", fontSize: "4vh", color: item.color }}>{item.count}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ margin: "20px 0 0 0" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={styles.progressChartContainer}>
            <h3 style={styles.progressChartText}>Progress Chart</h3>
            <div style={{ display: "flex" }}>
              <div>
                <div style={{ display: "flex", alignItems: "Center", gap: "10px", padding: "5px 0", whiteSpace: "nowrap" }}>
                  <Image src={test} alt="" />
                  <div style={{ color: "#AAAAAA", fontSize: "1.5vh" }}>Tests Completed</div>
                </div>
                <div style={styles.chartDetails}>
                  <Image src={pending} alt="" />
                  <div style={{ color: "#AAAAAA", fontSize: "1.5vh" }}>Tests Pending</div>
                </div>
              </div>
              <Image src={chart} alt="" style={styles.progressChartImage} />
            </div>
          </div>

          <div style={styles.studentProgressContainer}>
            <div style={styles.studentProgressHeader}>
              <div style={styles.StudentText}>Student Progress</div>
              <Image src={send} alt="send icon" style={{ width: "6vh", height: "6vh" }} />
            </div>

            <Grid container spacing={2}>
              {studentData.map((student, index) => (
                <Grid item xs={12} lg={4} key={index}>
                  <div style={styles.studentItem}>
                    <div style={styles.studentItemInner}>
                      <Image src={affif} alt="" style={{ width: "5vh", height: "5vh" }} />
                      {student.name}
                    </div>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <button style={styles.progressButton(student.color)}>{student.progress}</button>
                    </div>
                  </div>
                </Grid>
              ))}
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressChart;

// Styles object
const styles = {
  mainContainer: { backgroundColor: colors.backgroundMain, height: "auto", margin: "20px 0 0 0", borderRadius: "10px", width: "100%" },
  padding: { padding: "20px" },
  dropdownContainer: { display: "flex", alignItems: "center", justifyContent: "space-between", width: "60vh" },
  dropdownButton: { backgroundColor: colors.backgroundTodo, width: "auto", height: "6vh", borderRadius: "10px", display: "flex", alignItems: "center", padding: "0 5px 0 10px" },
  dropdownIcon: { color: colors.textWhite },
  dropdownMenu: { backgroundColor: "#333", color: colors.textWhite },
  statusContainer: { display: "flex", justifyContent: "space-between", marginTop: "20px" },
  statusBox: (color: any, border: any) => ({
    background: `linear-gradient(108.41deg, ${color}00 -50%, ${color}33 57.74%)`,
    width: "30vh",
    height: "8vh",
    border: `1px solid ${border}`,
    borderRadius: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

  }),
  progressChartContainer: { padding: "2vh", background: colors.backgroundTodo, borderRadius: "10px", width: "22vw", height: "26vh", margin: "0 15px 0 0" },
  progressChartText: { color: colors.textWhite, fontSize: "3vh" },
  chartDetails: { display: "flex", alignItem: "center", gap: "10px", whiteSpace: "nowrap" },
  progressChartImage: { height: "17vh", width: "8vw" },
  studentProgressContainer: { background: colors.backgroundMain, padding: "2.5vh 2vh 0 2vh", height: "26vh", width: "100%", borderRadius: "10px" },
  StudentText: { fontSize: "4vh" },
  studentProgressHeader: { display: "flex", justifyContent: "space-between", padding: "0 0 15px 0", fontSize: "25px", color: colors.textWhite },
  studentItem: { background: colors.backgroundTodo, borderRadius: "10px", padding: "10px 0" },
  studentItemInner: {
    display: "flex", justifyContent: "center", alignItems: "center", color: colors.textWhite,
    fontSize: "2vh", gap: "1.5vh"
  },
  progressButton: (color: any) => ({
    background: color, border: "none", margin: "1.5vh 0",
    padding: "1vh", borderRadius: "5px", fontSize: "2vh"
  })
};