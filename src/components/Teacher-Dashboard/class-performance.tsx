import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import { leagueSpartan } from '@/app/fonts';

const ClassPerformance = () => {
  const performanceData = [
    { label: 'Average Score:', value: '45%', key: 'averageScore' },
    { label: 'No of Students:', value: '08', key: 'numStudents' },
    { label: 'Date Attempt:', value: '21st Sept, 2024', key: 'dateAttempt' },
  ];

  return (
    <>
      <Box sx={style.container} className={leagueSpartan.className}>
        <Box sx={style.title}>Class Performance</Box>
        <Box sx={style.performanceBox}>
          <Grid container spacing={2}>
            <Grid item xs={12} lg={6}>
              <Typography sx={style.batch}>
                IGCSE Mathematics Batch # 3
              </Typography>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Box sx={style.arrowContainer}>
                <Box sx={style.arrowCircle}>
                  <ArrowForward sx={{ fontSize: "24px", color: "#000" }} />
                </Box>
              </Box>
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            {performanceData.map(({ label, value, key }) => (
              <Grid item xs={12} lg={3} key={key}>
                <Box sx={style.scoreDetails}>
                  <Typography sx={style.scoreLabel}>{label}</Typography>
                  <Typography sx={style.scoreValue}>{value}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default ClassPerformance;
const style = {
  container: {
    background: "#242728",
    margin: "10px 0 0 0",
    padding: "10px 20px",
    width: "100%",
    borderRadius: "10px",
  },
  title: {
    fontSize: "3vh",
    color: "white",
  },
  performanceBox: {
    background: "#1E2122",
    padding: "10px",
    borderRadius: "10px",
    margin: "10px 0 0 0 ",
  },
  batch: {
    background: "#7BEDFF",
    fontSize: "1.8vh",
    width: "13vw",
    padding: "5px",
    borderRadius: "5px",
  },
  arrowContainer: {
    display: "flex",
    justifyContent: "right",
  },
  arrowCircle: {
    backgroundColor: "#38B6FF",
    borderRadius: "50%",
    padding: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "5vh",
    height: "5vh",
  },
  scoreDetails: {
    display: "flex",
    alignItems: "center",
  },
  scoreLabel: {
    whiteSpace: "nowrap",
    color: "white",
    fontSize: "12px",
  },
  scoreValue: {
    color: "#38B6FF",
    fontSize: "17px",
    padding: "0 10px",
    whiteSpace: "nowrap",
  },
};