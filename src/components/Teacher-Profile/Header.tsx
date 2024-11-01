import Image from "next/image";
import logo from '../../../public/assets/Images/static/Tuitional logo.png';
import Mlogo from '../../../public/assets/Images/static/student dashboard M icon (1).png';
import { Box } from "@mui/material";

const Header = () => {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.innerContainer}>
        <Box sx={styles.logoContainer}>
          <Image src={logo} alt="Logo" style={styles.logo} />
        </Box>
        <Box sx={styles.iconContainer}>
          <Image src={Mlogo} alt="M Icon" style={styles.icon} />
        </Box>
      </Box>
    </Box>
  );
};

export default Header;

const styles = {
  container: {
    padding: "0 20px",
  },
  innerContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logoContainer: {},
  logo: {
    width: "50vh",
    height: "8vh",
  },
  iconContainer: {},
  icon: {
    width: "15vh",
    height: "15vh",
    margin: "5px 0 0 0",
  },
};
