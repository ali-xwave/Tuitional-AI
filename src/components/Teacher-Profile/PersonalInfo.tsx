import colors from '@/config/colors';
import Image from 'next/image';
import uaeflag from "../../../public/assets/Images/static/uae-icon.png";
import { Box, Grid, Typography } from '@mui/material';
import ActionsButtons from './actions-buttons';
import { leagueSpartan } from '@/app/fonts';

export default function PersonalInfo() {
  return (
    <>
      <Box sx={styles.container}>
        <Typography sx={styles.header} className={leagueSpartan.className}>Personal Information</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} lg={4}>
            <Box sx={styles.infoItem}>
              <Typography sx={styles.label} className={leagueSpartan.className}>First Name</Typography>
              <Typography sx={styles.value} className={leagueSpartan.className}>Karla</Typography>
            </Box>
          </Grid>

          <Grid item xs={12} lg={4}>
            <Box sx={styles.infoItem}>
              <Typography sx={styles.label} className={leagueSpartan.className}>Last Name</Typography>
              <Typography sx={styles.value} className={leagueSpartan.className}>Poole</Typography>
            </Box>
          </Grid>

          <Grid item xs={12} lg={4}>
            <Box sx={styles.infoItem}>
              <Typography sx={styles.label} className={leagueSpartan.className}>Country</Typography>
              <Box sx={styles.countryInfo}>
                <Image src={uaeflag} alt="UAE Flag" width={22} height={12} />
                <Typography sx={styles.countryText} className={leagueSpartan.className}>UAE</Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} lg={4}>
            <Box sx={styles.infoItem}>
              <Typography sx={styles.label} className={leagueSpartan.className}>Email Address</Typography>
              <Typography sx={styles.value} className={leagueSpartan.className}>karlapoole@gmail.com</Typography>
            </Box>
          </Grid>

          <Grid item xs={12} lg={4}>
            <Box sx={styles.infoItem}>
              <Typography sx={styles.label} className={leagueSpartan.className}>Phone</Typography>
              <Typography sx={styles.fieldText} className={leagueSpartan.className}>fill this field</Typography>
            </Box>
          </Grid>

          <Grid item xs={12} lg={4}>
            <Box sx={styles.infoItem}>
              <Typography sx={styles.label} className={leagueSpartan.className}>Gender</Typography>
              <Typography sx={styles.fieldText} className={leagueSpartan.className}>fill this field</Typography>
            </Box>
          </Grid>

        </Grid>
        <Box sx={styles.actionButtons}>
          <ActionsButtons />
        </Box>
      </Box>
    </>
  );
}

const styles = {
  container: {
    background: 'linear-gradient(180deg, #1D1F21 0%, #111213 100%)',
    borderRadius: "8px",
    color: colors.textWhite,
    width: "100%",
    padding: "3vh 0 3vh 5vh",
    margin: "20px auto",
    height: "60vh",
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
    fontSize: "2.5vh",
    fontWeight: "600",
    padding: ".5vh 0"
  },
  fieldText: {
    fontSize: "2vh",
    color: colors.textGray
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
    padding: "2vh 0"
  },
  actionButtons: {
    display: 'flex',
    gap: '10px',
    marginTop: '10.9vh',
    alignItem: "center",
    justifyContent: "center"
  },
};