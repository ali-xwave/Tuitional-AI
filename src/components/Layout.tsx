"use client";
import colors from '@/config/colors';
import Image from 'next/image';
import { useState } from 'react';
import profile from '../../public/assets/Images/static/Profile-pic.png';
import uaeflag from '../../../tuitional-ai/public/assets/Images/static/uae-icon.png';
import Link from 'next/link';
import { leagueSpartan } from '@/app/fonts';
import stars from '../../../tuitional-ai/public/assets/Images/static/profile-stars.png';
import { Box, Grid, Typography } from '@mui/material';
import PersonalInfo from './Teacher-Profile/PersonalInfo';
import Education from './Teacher-Profile/Education';
import UploadMedia from './Teacher-Profile/Media';

const Layout = () => {
  const [selectedSection, setSelectedSection] = useState('My Profile');
  const [completionPercentage, setCompletionPercentage] = useState(40);

  const handleSectionChange = (section: React.SetStateAction<string>) => {
    setSelectedSection(section);

    setCompletionPercentage(
      section === 'Education' ? 50 : section === 'Media' ? 65 : 40
    );
  };

  return (
    <>
      <Box sx={styles.container} className={leagueSpartan.className}>
        <Grid container spacing={2}>
          <Grid item xs={12} lg={3}>
            <Box sx={styles.profileCard}>
              <Box>
                <Image src={profile} alt='Profile picture' style={styles.profileImage} />
              </Box>
              <Typography sx={styles.profileName} className={leagueSpartan.className}>Karla Poole</Typography>
              <Box sx={styles.roleContainer}>
                <Typography sx={styles.roleButton} className={leagueSpartan.className}>Teacher</Typography>
                <Box sx={styles.countryButton}>
                  <Image src={uaeflag} alt='UAE flag' style={styles.flagImage} />
                  <Typography sx={{ fontSize: "2.5vh" }} className={leagueSpartan.className}>UAE</Typography>
                </Box>
              </Box>
            </Box>

            <Box sx={styles.profileCompletionCard}>
              <Typography sx={styles.completionCircle} className={leagueSpartan.className}>{completionPercentage}%</Typography>
              <Box sx={styles.completionText}>
                Complete your <br /> profile now!
              </Box>
              <Typography sx={styles.completionDescription} className={leagueSpartan.className}>
                Complete your profile to enjoy personalized features and a smoother experience!
              </Typography>
              <Box>
                <Image src={stars} alt='Stars icon' style={{
                  position: "absolute",
                  top: "5%",
                  right: "5%",
                  width: "7vh",
                  height: "7vh",
                }} />
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} lg={9}>
            <Box sx={styles.navBar} >
              <Link href="#" onClick={() => handleSectionChange('My Profile')} style={{
                ...styles.navLink,
                background: selectedSection === 'My Profile' ? styles.activeLink.background : 'none',
              }}>
                My Profile
              </Link>
              <Link href="#" onClick={() => handleSectionChange('Education')} style={{
                ...styles.navLink,
                background: selectedSection === 'Education' ? styles.activeLink.background : 'none',
              }}>
                Education
              </Link>
              <Link href="#" onClick={() => handleSectionChange('Media')} style={{
                ...styles.navLink,
                background: selectedSection === 'Media' ? styles.activeLink.background : 'none',
              }}>
                Media
              </Link>
            </Box>
            <Box sx={styles.sectionContent}>
              {selectedSection === 'My Profile' && <PersonalInfo />}
              {selectedSection === 'Education' && <Education />}
              {selectedSection === 'Media' && <UploadMedia />}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Layout;
const styles = {
  container: {
    background: colors.backgroundMain,
    padding: "3vh 5vh",
    height: "auto",
    margin: "0 20px",
  },
  profileCard: {
    background: colors.backgroundTodo,
    width: "20vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    padding: "3.5vh 3vh",
    borderRadius: "5px",
  },
  profileImage: {
    width: "15vh",
    height: "15vh",
  },
  profileName: {
    color: colors.textWhite,
    fontSize: "3vh",
    fontWeight: "600",
  },
  roleContainer: {
    display: "flex",
    gap: "10px",
    marginTop: "15px",
  },
  roleButton: {
    background: "none",
    padding: "6px 15px",
    color: colors.primaryBlue,
    borderRadius: "20px",
    border: ".5px solid white",
    fontSize: "2.5vh",
  },
  countryButton: {
    background: "none",
    padding: "4px 15px",
    color: colors.primaryBlue,
    borderRadius: "20px",
    border: ".5px solid white",
    display: "flex",
    alignItems: "center",
    gap: "6px",
  },
  flagImage: {
    width: "4vh",
    height: "2.5vh",
  },
  profileCompletionCard: {
    background: colors.backgroundTodo,
    width: "20vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    padding: "3.5vh 3vh",
    borderRadius: "5px",
    marginTop: "10px",
    position: "relative",
  },
  completionCircle: {
    border: "3px solid #38B6FF",
    borderRadius: "50%",
    padding: "5vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "40px",
    height: "40px",
    fontSize: "4vh",
    color: colors.textWhite,
  },
  completionText: {
    color: colors.textWhite,
    fontSize: "3vh",
    fontWeight: "600",
    textAlign: "center",
    padding: "2vh 0",
  },
  completionDescription: {
    color: colors.textGray,
    fontSize: "2vh",
    fontWeight: "600",
    textAlign: "center",
  },
  starsIcon: {
    position: "absolute",
    top: "5%",
    right: "5%",
    width: "7vh",
    height: "7vh",
  },
  navBar: {
    background: colors.backgroundTodo,
    display: "flex",
    gap: "5vh",
    height: "auto",
    padding: "1vh 4vh",
    borderRadius: "5px",
  },
  navLink: {
    textDecoration: "none",
    color: colors.textWhite,
    fontSize: "2.5vh",
    padding: "2vh 2vh",
    borderRadius: "5px",
  },
  activeLink: {
    background: 'linear-gradient(0deg, #38B6FF -86.54%, rgba(56, 182, 255, 0) 100%)',
  },
  sectionContent: {
    paddingTop: "2vh",
  },
};
