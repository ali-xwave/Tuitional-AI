import { leagueSpartan } from '@/app/fonts';
import Image from 'next/image';
import stars from '../../../public/assets/images/static/Dashboard stars.png';
import star2 from '../../../public/assets/images/static/student dashboard icon student.png';
import Micon from '../../../public/assets/images/static/student dashboard M icon.png';
import Ticon from '../../../public/assets/images/static/student dashboard T icon.png';
import Wicon from '../../../public/assets/images/static/student dashboard W icon.png';
import T1icon from '../../../public/assets/images/static/student dashboard T icon (1).png';
import Ficon from '../../../public/assets/images/static/student dashboard F icon.png';
import S1icon from '../../../public/assets/images/static/student dashboard S icon (1).png';
import S2icon from '../../../public/assets/images/static/student dashboard S icon (2).png';
import Micon1 from '../../../public/assets/images/static/student dashboard M icon (1).png';
import { Box, Grid, Typography } from '@mui/material';
import colors from '@/config/colors';

const style = {
  container: leagueSpartan.className,
  greetingSection: {
    background: colors.backgroundMain,
    width: "100%",
    height: "18vh",
    borderRadius: "20px",
    padding: "0 0 0 30px",
    position: "relative",
    display: "flex",
    alignItems: "center",
  },
  greetingText: {
    color: colors.textWhite,
    fontSize: "4vh",
    fontWeight: "600",
  },
  greetingName: {
    color: colors.primaryBlue,
  },
  streakSection: {
    background: colors.backgroundMain,
    height: "18vh",
    borderRadius: "20px",
  },
  streakWrapper: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
  },
  streakTitle: {
    fontSize: "4vh",
    fontWeight: "600",
    color: colors.textWhite,
  },
  scoreSection: {
    background: colors.backgroundMain,
    width: "100%",
    height: "18vh",
    borderRadius: "20px",
    padding: "0 0 0 20px",
    position: "relative",
    display: "flex",
    alignItems: "center",
  },
  scoreValue: {
    color: colors.primaryBlue,
    fontSize: "5vh",
    fontWeight: "700",
  },
  scoreLabel: {
    color: colors.textWhite,
    fontSize: "3vh",
    fontWeight: "700",
    lineHeight: "5vh",
  },
};

const Header = () => {
  const learningStreakIcons = [Micon, Ticon, Wicon, T1icon, Ficon, S1icon, S2icon];

  return (
    <div className={style.container}>
      <Grid container spacing={2}>
        {/* Greeting Section */}
        <Grid item lg={5} xs={12} md={6}>
          <Box sx={style.greetingSection}>
            <Typography style={style.greetingText}>
              Good Afternoon, <span style={style.greetingName}>Sarah.</span> <br />
              What do you want to learn today?
            </Typography>
            <Box>
              <Image src={stars} alt='' style={{ position: "absolute", top: "10%", right: "3%", width: "7vh", height: "7vh" }} />
            </Box>
          </Box>
        </Grid>

        {/* Learning Streak Section */}
        <Grid item lg={4} xs={12}>
          <div style={style.streakSection}>
            <Box sx={style.streakWrapper}>
              <div>
                <Image src={star2} alt='' style={{ width: "12vh", height: "18vh" }} />
              </div>
              <div>
                <Typography style={style.streakTitle}>Your Learning Streak</Typography>
                <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                  {learningStreakIcons.map((icon, index) => (
                    <div key={index}>
                      <Image src={icon} alt='' style={{ width: "5vh", height: "5vh" }} />
                    </div>
                  ))}
                </div>
              </div>
            </Box>
          </div>
        </Grid>

        {/* Overall Score Section */}
        <Grid item lg={3} xs={12}>
          <Box sx={style.scoreSection}>
            <div>
              <Typography style={style.scoreValue}>93%</Typography>
              <Typography style={style.scoreLabel}>Overall Score</Typography>
              <div>
                <Image src={Micon1} alt='' style={{ position: "absolute", top: "0%", right: "0", width: "15vh", height: "15vh" }} />
              </div>
            </div>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;
