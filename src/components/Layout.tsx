"use client"
import colors from '@/config/colors';
import Image from 'next/image';
import React, { useState } from 'react';
import profile from '../../public/assets/Images/static/Profile-pic.png';
import uaeflag from '../../../tuitional-ai/public/assets/Images/static/uae-icon.png';
import Link from 'next/link';
import { leagueSpartan } from '@/app/fonts';
import stars from '../../../tuitional-ai/public/assets/Images/static/profile-stars.png';
import { Box, Grid } from '@mui/material';
import PersonalInfo from './Teacher-Profile/PersonalInfo';
const Layout = () => {
  const [selectedSection, setSelectedSection] = useState('');

  const handleSectionChange = (section: React.SetStateAction<string>) => {
    setSelectedSection(section);
  };

  return (
    <div>
      <div className={leagueSpartan.className}>
        <div style={styles.container}>

          <Grid container spacing={2}>
            {/* <Box sx={styles.profileWrapper}> */}
            <Grid item xs={12} lg={3}>
              <Box sx={styles.profileCard}>
                <div>
                  <Image src={profile} alt='' style={styles.profileImage} />
                </div>
                <div style={styles.profileName}>Karla Poole</div>
                <div style={styles.roleContainer}>
                  <div style={styles.roleButton}>Teacher</div>
                  <button style={styles.countryButton}>
                    <div>
                      <Image src={uaeflag} alt='' style={styles.flagImage} />
                    </div>
                    <div style={{ fontSize: "2.5vh" }}>UAE</div>
                  </button>
                </div>
              </Box>

              <Box sx={styles.profileCompletionCard}>
                <div style={styles.completionCircle}>40%</div>
                <Box sx={styles.completionText}>
                  Complete your <br /> profile now!
                </Box>
                <Box sx={styles.completionDescription}>
                  Complete your profile now to enjoy personalized features and a <br /> smoother experience!
                </Box>
                <div>
                  <Image src={stars} alt='' style={{
                    position: "absolute",
                    top: "5%",
                    right: "5%",
                    width: "7vh",
                    height: "7vh",
                  }} />
                </div>
              </Box>
            </Grid>

            <Grid item xs={12} lg={9}>
              <div style={styles.navBar}>
                <div>
                  <Link href="#" onClick={() => handleSectionChange('My Profile')} style={styles.navLink}>
                    My Profile
                  </Link>
                </div>
                <div>
                  <Link href="#" onClick={() => handleSectionChange('Education')} style={styles.navLink}>
                    Education
                  </Link>
                </div>
                <div>
                  <Link href="#" onClick={() => handleSectionChange('Media')} style={styles.navLink}>
                    Media
                  </Link>
                </div>
              </div>
              <div>
                {/* Render PersonalInfo component when "My Profile" is selected */}
                {selectedSection === 'My Profile' ? <PersonalInfo /> : 'Hi'}
              </div>
            </Grid>

            {/* </Box> */}
          </Grid>
        </div>
      </div>
    </div >
  );
};

export default Layout;

const styles = {
  container: {
    background: colors.backgroundMain,
    padding: "40px",
    height: "auto",
    margin: "20px",
  },
  profileWrapper: {
    // display: "flex",
    // gap: "5vh",
    // flexWrap: "wrap",
  },
  profileCard: {
    background: colors.backgroundTodo,
    width: "18vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    padding: "3vh",
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
    width: "18vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    padding: "3vh",
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
  navBar: {
    background: colors.backgroundTodo,
    display: "flex",
    gap: "5vh",
    height: "7vh",
    padding: "2vh 4vh",
    borderRadius: "5px",
  },
  navLink: {
    textDecoration: "none",
    color: colors.textWhite,
    fontSize: "2.5vh",
  },
};
