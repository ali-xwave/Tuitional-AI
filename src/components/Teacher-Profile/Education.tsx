import colors from '@/config/colors';
import { leagueSpartan } from '@/app/fonts';
import { Box, Grid, Typography } from '@mui/material';
import ActionsButtons from './actions-buttons';
export default function Education() {
  return (
    <>
      <Box>
        <Box sx={styles.container}>
          <Typography sx={styles.header} className={leagueSpartan.className}>Education</Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} lg={4}>
              <Box sx={styles.infoItem}>
                <Typography sx={styles.label} className={leagueSpartan.className}>University</Typography>
                <Typography sx={styles.fieldText} className={leagueSpartan.className}>fill this field</Typography>
              </Box>
            </Grid>

            <Grid item xs={12} lg={4}>
              <Box sx={styles.infoItem}>
                <Typography sx={styles.label} className={leagueSpartan.className}>Degree</Typography>
                <Typography sx={styles.fieldText} className={leagueSpartan.className}>fill this field</Typography>
              </Box>
            </Grid>

            <Grid item xs={12} lg={4}>
              <Box sx={styles.infoItem}>
                <Typography sx={styles.label} className={leagueSpartan.className}>Degree Type</Typography>
                <Typography sx={styles.fieldText} className={leagueSpartan.className}>fill this field</Typography>
              </Box>
            </Grid>

            <Grid item xs={12} lg={4}>
              <Box sx={styles.infoItem}>
                <Typography sx={styles.label} className={leagueSpartan.className}>Years</Typography>
                <Typography sx={styles.fieldText} className={leagueSpartan.className}>fill this field</Typography>
              </Box>
            </Grid>

            <Grid item xs={12} lg={4}>
              <Box sx={styles.infoItem}>
                <Typography sx={styles.label} className={leagueSpartan.className}>Group Years</Typography>
                <Typography sx={styles.value} className={leagueSpartan.className}>Year 7</Typography>
              </Box>
            </Grid>

            <Grid item xs={12} lg={4}>
              <Box sx={styles.infoItem}>
                <Typography sx={styles.label} className={leagueSpartan.className}>Exam</Typography>
                <Typography sx={styles.value} className={leagueSpartan.className}>A level & AP</Typography>
              </Box>
            </Grid>

            <Grid item xs={12} lg={4}>
              <Box sx={styles.infoItem}>
                <Typography sx={styles.label} className={leagueSpartan.className}>Subjects</Typography>
                <Typography sx={styles.value} className={leagueSpartan.className}>Physics & Mathematics</Typography>
              </Box>
            </Grid>
          </Grid>

          <Box sx={styles.actionButtons}>
            <ActionsButtons />
          </Box>
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
    margin: "20px auto",
    padding: "3vh 0 3vh 5vh",
    height: "60vh"
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
    padding: ".5vh 0"
  },
  value: {
    color: colors.textWhite,
    fontSize: "2.5vh",
    fontWeight: "600",
  },
  fieldText: {
    fontSize: "2vh",
    color: colors.textGray
  },
  actionButtons: {
    display: 'flex',
    gap: '10px',
    marginTop: '3.7vh',
    alignItem: "center",
    justifyContent: "center"
  },
};