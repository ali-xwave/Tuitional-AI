import Image from 'next/image';
import React from 'react';
import createimg from '../../../public/assets/images/static/create test dashboard img.png';
import exploreicon from '../../../public/assets/images/static/Exploar dashboard img.png';
import { Box, Typography } from '@mui/material';
import { leagueSpartan } from '@/app/fonts';

const cardData = [
  {
    id: 1,
    title: 'Create Test For Your Student',
    imgSrc: createimg
  },
  {
    id: 2,
    title: 'Create New Group/Batch Class',
    imgSrc: createimg
  },
];

const CreateTestForStudent = () => {
  return (
    <>
      <Box className={leagueSpartan.className}>
        {cardData.map((card) => (
          <Box key={card.id} sx={styles.card}>
            <Box sx={styles.cardContent}>
              <Box sx={styles.imageContainer}>
                <Image src={card.imgSrc} alt={`${card.title} Icon`} />
              </Box>
              <Typography sx={styles.title}>{card.title}</Typography>
              <Box sx={styles.exploreContainer}>
                <Typography sx={styles.exploreText}>Explore</Typography>
                <Box>
                  <Image
                    src={exploreicon}
                    alt='Explore Icon'
                    width={32}
                    height={18}
                    style={styles.exploreIcon}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default CreateTestForStudent;

const styles = {
  card: {
    background: '#242728',
    margin: '10px 0 0 0',
    width: '100%',
    borderRadius: '10px',
    padding: '5px 0',
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imageContainer: {
    margin: '0 0 0 10px',
  },
  title: {
    fontSize: '3vh',
    color: 'white',
  },
  exploreContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '2vh',
  },
  exploreText: {
    fontSize: '2vh',
    color: 'white',
  },
  exploreIcon: {
    padding: '0 2vh 0 0',
  },
};
