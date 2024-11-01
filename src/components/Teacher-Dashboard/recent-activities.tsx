import React from 'react';
import { leagueSpartan } from '@/app/fonts';
import colors from "@/config/colors";
import { ArrowForward } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';

const RecentActivities = () => {
  const activities = [
    {
      title: "Respiration System - 3",
      buttons: [
        { label: "Diagnostic Test", color: colors.DiagnosticBg },
        { label: "Biology", color: colors.BiologyBg, margin: "0 5px" },
        { label: "IGCSE", color: colors.IGCSEBg },
      ],
    },
    {
      title: "Respiration System - 3",
      buttons: [
        { label: "Diagnostic Test", color: colors.DiagnosticBg },
        { label: "Biology", color: colors.BiologyBg, margin: "0 5px" },
        { label: "IGCSE", color: colors.IGCSEBg },
      ],
    },
    {
      title: "Respiration System - 3",
      buttons: [
        { label: "Diagnostic Test", color: colors.DiagnosticBg },
        { label: "Biology", color: colors.BiologyBg, margin: "0 5px" },
        { label: "IGCSE", color: colors.IGCSEBg },
      ],
    },
  ];

  return (
    <Box className={leagueSpartan.className}>
      <Box style={style.container}>
        <Box style={style.paddingContainer}>
          <Typography style={style.title}>Recent Activities</Typography>

          {/* Render activity items using map */}
          {activities.map((activity, index) => (
            <Box key={index} style={style.activityItem}>
              <Typography style={style.activityTitle}>{activity.title}</Typography>
              <Box>
                {activity.buttons.map((button, btnIndex) => (
                  <button
                    key={btnIndex}
                    style={style.button(button.color, button.margin)}
                  >
                    {button.label}
                  </button>
                ))}
              </Box>
              <Box style={style.arrowContainer}>
                <ArrowForward style={{ fontSize: "24px", color: "#000" }} />
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default RecentActivities;

const style = {
  container: {
    background: colors.backgroundMain,
    width: "100%",
    margin: "10px 0 0 0",
    borderRadius: "10px",
  },
  paddingContainer: {
    padding: "20px",
  },
  title: {
    fontSize: "3vh",
    color: colors.textWhite,
  },
  activityItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: colors.backgroundTodo,
    padding: "10px",
    borderRadius: "10px",
    margin: "10px 0 0 0",
  },
  activityTitle: {
    fontSize: "3vh",
    color: colors.textWhite,
  },
  button: (backgroundColor: any, margin = "0") => ({
    background: backgroundColor,
    padding: "2px 5px",
    border: "none",
    borderRadius: "5px",
    margin: margin,
    fontSize: "2vh",
  }),
  arrowContainer: {
    backgroundColor: "#38B6FF",
    borderRadius: "50%",
    padding: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "6vh",
    height: "6vh",
  },
};