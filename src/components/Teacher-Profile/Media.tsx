import { Box, Button, Grid, Typography } from '@mui/material';
import colors from '@/config/colors';
import { useState } from 'react';
import ActionsButtons from './actions-buttons';
import { leagueSpartan } from '@/app/fonts';

const UploadMedia = () => {
  const [resume, setResume] = useState(null);
  const [video, setVideo] = useState(null);

  const handleResumeUpload = (event: { target: { files: React.SetStateAction<null>[]; }; }) => {
    setResume(event.target.files[0]);
  };

  const handleVideoUpload = (event: { target: { files: React.SetStateAction<null>[]; }; }) => {
    setVideo(event.target.files[0]);
  };

  return (
    <>
      <Box sx={styles.container}>
        <Typography variant="h5" sx={styles.header} className={leagueSpartan.className}>
          Media
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" sx={styles.uploadheader} className={leagueSpartan.className}>
              Resume/CV
            </Typography>
            <Box sx={styles.uploadBox}>
              <Typography sx={styles.uploadStatus} className={leagueSpartan.className}>
                {resume ? resume : 'Not added yet'}</Typography>
              {/* <input
              accept=".pdf,.doc,.docx"
              style={{ display: 'none' }}
              id="upload-resume"
              type="file"
              onChange={handleResumeUpload}
            />
            <label htmlFor="upload-resume">
              <Button variant="outlined" component="span" sx={styles.uploadButton}>
                Upload Resume
              </Button>
            </label> */}
            </Box>
          </Grid>

          {/* Video Upload */}
          <Grid item xs={12} md={6}>
            <Typography variant="h5" sx={styles.uploadheader} className={leagueSpartan.className}>
              Video
            </Typography>
            <Box sx={styles.uploadBox}>
              <Typography sx={styles.uploadStatus} className={leagueSpartan.className}>
                {video ? video : 'Not uploaded yet'}</Typography>
              {/* <input
              accept="video/*"
              style={{ display: 'none' }}
              id="upload-video"
              type="file"
              onChange={handleVideoUpload}
            />
            <label htmlFor="upload-video">
              <Button variant="outlined" component="span" sx={styles.uploadButton}>
                Upload Video
              </Button>
            </label> */}
            </Box>
          </Grid>
        </Grid>
        <Box sx={styles.actionButtons}>
          <ActionsButtons />
        </Box>
      </Box>
    </>
  );
};

const styles = {
  container: {
    background: 'linear-gradient(180deg, #1D1F21 0%, #111213 100%)',
    padding: "3vh 0 3vh 5vh",
    borderRadius: '8px',
    color: '#FFFFFF',
    height: "60.5vh",
    margin: "15px auto"
  },
  header: {
    fontSize: '4.5vh',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: colors.textWhite,
  },
  uploadheader: {
    fontSize: '2vh',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: colors.textWhite,
  },
  uploadBox: {
    background: colors.backgroundTodo,
    borderRadius: '8px',
    color: colors.textWhite,
    position: 'relative',
    height: "30vh",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: "31vw"
  },
  uploadLabel: {
    fontSize: '18px',
    fontWeight: 'bold',
  },
  uploadStatus: {
    fontSize: '2.5vh',
    color: colors.textGray,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  uploadButton: {
    marginTop: '15px',
    color: '#38B6FF',
    borderColor: '#38B6FF',
  },
  actionButtons: {
    display: 'flex',
    gap: '10px',
    alignItem: "center",
    justifyContent: "center"
  },
};

export default UploadMedia;
