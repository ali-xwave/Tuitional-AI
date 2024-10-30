import colors from '@/config/colors';
import Image from 'next/image';
import React from 'react';
// import uaeflag from '../../../tuitional-ai/public/assets/Images/static/uae-icon.png';
import { leagueSpartan } from '@/app/fonts';
import { Box, Grid } from '@mui/material';

const styles = {
  container: {
    background: colors.backgroundMain,
    borderRadius: "8px",
    color: colors.textWhite,
    width: "100%",
    margin: "20px auto",
  },
  header: {
    fontSize: "4.5vh",
    fontWeight: "700",
    marginBottom: "20px",
  },
  infoItem: {
    display: "flex",
    flexDirection: "column",
    color: colors.textGray,
    fontWeight: "500",
  },
  label: {
    fontSize: "2vh",
    fontWeight: "400",
  },
  value: {
    color: colors.textWhite,
    fontSize: "3vh",
    fontWeight: "600",
    padding: "2vh 0"
  },
  countryInfo: {
    display: "flex",
    alignItems: "center",
    gap: "5px",
  },
  countryText: {
    fontSize: "2vh",
    fontWeight: "600",
    color: colors.textWhite,
  },
};

export default function PersonalInfo() {
  return (
    <Box sx={styles.container} className={leagueSpartan.className}>
      <h2 style={styles.header}>Personal Information</h2>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={4}>
          <Box sx={styles.infoItem}>
            <span style={styles.label}>First Name</span>
            <span style={styles.value}>Karla</span>
          </Box>
        </Grid>

        <Grid item xs={12} lg={4}>
          <Box sx={styles.infoItem}>
            <span style={styles.label}>Last Name</span>
            <span style={styles.value}>Poole</span>
          </Box>
        </Grid>

        <Grid item xs={12} lg={4}>
          <Box sx={styles.infoItem}>
            <span style={styles.label}>Country</span>
            <Box style={styles.countryInfo}>
              {/* <Image src={uaeflag} alt="UAE Flag" width={25} height={15} /> */}
              <span style={styles.countryText}>UAE</span>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} lg={4}>
          <Box sx={styles.infoItem}>
            <span style={styles.label}>Email Address</span>
            <span style={styles.value}>karlapoole@gmail.com</span>
          </Box>
        </Grid>

        <Grid item xs={12} lg={4}>
          <Box sx={styles.infoItem}>
            <span style={styles.label}>Phone</span>
            <span style={styles.value}>Fill this field</span>
          </Box>
        </Grid>

        <Grid item xs={12} lg={4}>
          <Box sx={styles.infoItem}>
            <span style={styles.label}>Gender</span>
            <span style={styles.value}>Fill this field</span>
          </Box>
        </Grid>

      </Grid>
    </Box>
  );
}
