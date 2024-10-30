import React from 'react';
import { leagueSpartan } from '@/app/fonts';
import colors from "@/config/colors";
import { ArrowForward } from '@mui/icons-material';

const RecentActivities = () => {

  const activities = [
    {
      title: "Respiration System - 3",
      buttons: [
        { label: "Diagonistic Test", color: colors.DiagnosticBg },
        { label: "Biology", color: colors.BiologyBg, margin: "0 5px" },
        { label: "IGCSE", color: colors.IGCSEBg },
      ],
    },
    {
      title: "Respiration System - 3",
      buttons: [
        { label: "Diagonistic Test", color: colors.DiagnosticBg },
        { label: "Biology", color: colors.BiologyBg, margin: "0 5px" },
        { label: "IGCSE", color: colors.IGCSEBg },
      ],
    },
    {
      title: "Respiration System - 3",
      buttons: [
        { label: "Diagonistic Test", color: colors.DiagnosticBg },
        { label: "Biology", color: colors.BiologyBg, margin: "0 5px" },
        { label: "IGCSE", color: colors.IGCSEBg },
      ],
      background: colors.backgroundTodo,
    },
  ];

  return (
    <div className={leagueSpartan.className}>
      <div style={styles.container}>
        <div style={styles.paddingContainer}>
          <div style={styles.title}>Recent Activities</div>

          {/* Render activity items using map */}
          {activities.map((activity, index) => (
            <div
              key={index}
              style={{
                ...styles.activityItem,

              }}
            >
              <div style={styles.activityTitle}>{activity.title}</div>
              <div>
                {activity.buttons.map((button, btnIndex) => (
                  <button
                    key={btnIndex}
                    style={styles.button(button.color, button.margin)}
                  >
                    {button.label}
                  </button>
                ))}
              </div>
              <div
                style={{
                  backgroundColor: "#38B6FF",
                  borderRadius: "50%",
                  padding: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "6vh",
                  height: "6vh",
                }}
              >
                <ArrowForward style={{ fontSize: "24px", color: "#000" }} /> {/* Arrow icon with white color */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentActivities;

// Define styles object
const styles = {
  container: {
    background: colors.backgroundMain,
    width: "100%",
    margin: "10px 0 0 0",
    borderRadius: "10px"
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
  button: (backgroundColor: string, margin = "0") => ({
    background: backgroundColor,
    padding: "2px 5px",
    border: "none",
    borderRadius: "5px",
    margin: margin,
    fontSize: "2vh"
  }),
};