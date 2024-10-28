import Image from "next/image";
import getimg1 from '../../../public/assets/images/static/student dashboard get started icon1.png';
import getimg2 from '../../../public/assets/images/static/student dashboard get started icon2.png';
import getimg3 from '../../../public/assets/images/static/student dashboard get started icon3.png';
import getimg4 from '../../../public/assets/images/static/student dashboard get started icon4.png';
import exploreicon from '../../../public/assets/images/static/Exploar dashboard img.png';
import { leagueSpartan } from "@/app/fonts";
import { Box } from "@mui/material";
import colors from '@/config/colors';

const styles = {
  container: {
    color: colors.textWhite,
    fontSize: "5vh",
    fontWeight: "600",
    padding: "4.8vh 0",
  },
  cardContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
  },
  card: {
    background: colors.backgroundMain,
    width: "100%",
    height: "30vh",
    padding: "3vh",
    borderRadius: "15px",
    flex: "1 1 45%", // Flex to ensure two cards per row
  },
  cardImage: {
    width: "8vh",
    height: "8vh",
  },
  cardTitle: {
    fontSize: "2.7vh",
    color: colors.textWhite,
    fontWeight: "600",
    padding: "1vh 0",
    lineHeight: "4vh",
  },
  cardStatusContainer: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  cardStatus: {
    fontSize: "2vh",
    color: colors.textWhite,
    fontWeight: "600",
  }
};

const GetStarted = () => {
  // Array of card data
  const cardData = [
    {
      img: getimg1,
      title: "Start Your Diagnostic",
      subtitle: "Test Today",
      status: "Explore",
      statusText: "Explore",
    },
    {
      img: getimg2,
      title: "Enhance Your Learning",
      subtitle: "with Tutor AI",
      status: "Coming soon",
      statusText: "",
    },
    {
      img: getimg3,
      title: "Practice gamified topic",
      subtitle: "wise tests",
      status: "Explore",
      statusText: "Explore",
    },
    {
      img: getimg4,
      title: "Analyze Your Test Results",
      subtitle: "for Insights",
      status: "Explore",
      statusText: "Explore",
    },
  ];

  return (
    <div className={leagueSpartan.className}>
      <div style={styles.container}>
        Get Started
      </div>

      <Box sx={styles.cardContainer}>
        {cardData.map((card, index) => (
          <div key={index} style={styles.card}>
            <div>
              <Image src={card.img} alt="" style={styles.cardImage} />
            </div>
            <div style={styles.cardTitle}>
              {card.title} <br /> {card.subtitle}
            </div>

            <div style={styles.cardStatusContainer}>
              <div>
                <div style={styles.cardStatus}>
                  {card.status}
                </div>
              </div>
              {card.statusText && (
                <div>
                  <Image src={exploreicon} alt="" />
                </div>
              )}
            </div>
          </div>
        ))}
      </Box>
    </div>
  );
}

export default GetStarted;
