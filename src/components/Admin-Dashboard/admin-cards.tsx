import { Grid } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import DescriptionIcon from '@mui/icons-material/Description';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import SearchIcon from '@mui/icons-material/Search';
import { leagueSpartan } from '@/app/fonts';
import colors from '@/config/colors';
const cardData = [
  {
    icon: <SchoolIcon style={{ color: colors.textGray, fontSize: '7vh' }} />,
    title: 'Student',
    value: '130%',
    subText: 'Enrolled',
    buttonText: 'View all students',
    buttonStyle: {
      background: colors.buttonGradient,
      color: colors.textWhite,
    },
    hasPercentageChange: false,
  },
  {
    icon: <DescriptionIcon style={{ color: colors.textGray, fontSize: '7vh' }} />,
    title: 'DSAT Mock Test',
    value: '89',
    subText: 'Mocks this week',
    percentageChange: '-12.5%',
    changeColor: colors.scoreRed,
    percentageText: 'Than Last Week',
    hasPercentageChange: true,
  },
  {
    icon: <SportsEsportsIcon style={{ color: colors.textGray, fontSize: '7vh' }} />,
    title: 'Play Games',
    value: '216',
    subText: 'Game Played this week',
    percentageChange: '+24.6%',
    changeColor: colors.scoreGreen,
    percentageText: 'Than Last Week',
    hasPercentageChange: true,
  },
  {
    icon: <SearchIcon style={{ color: colors.textGray, fontSize: '7vh' }} />,
    title: 'DSAT Diagnostic Test',
    value: '34',
    subText: 'Diagnostic this week',
    percentageChange: '+13.5%',
    changeColor: colors.scoreGreen,
    percentageText: 'Than Last Week',
    hasPercentageChange: true,
  }
];

const AdminCards = () => {
  return (
    <div className={leagueSpartan.className}>
      <div style={{ margin: "20px 0 0 0" }}>
        <Grid container spacing={2}>
          {cardData.map((card, index) => (
            <Grid item xs={12} lg={3} key={index}>
              <div style={{
                background: colors.backgroundMain,
                borderRadius: "20px",
                padding: "20px 20px",
              }}>
                <div>
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    color: colors.textWhite,
                    gap: "15px"
                  }}>
                    <div>
                      {card.icon}
                    </div>
                    <div style={{ fontSize: "2.2vh", fontWeight: "500" }}>
                      {card.title}
                      <div style={{
                        color: colors.primaryBlue,
                        fontSize: "4.5vh",
                        fontWeight: "700",
                        padding: "10px 0 0 0 "
                      }}>
                        {card.value}
                        <span style={{
                          color: colors.grayText,
                          fontSize: "2vh",
                          fontWeight: "400",
                          padding: "0 0 0 5px",
                          whiteSpace: "nowrap"
                        }}>{card.subText}</span>
                      </div>
                    </div>
                  </div>

                  {card.hasPercentageChange ? (
                    <div style={{
                      display: "flex",
                      alignItems: "center",
                      margin: "2vh 0 0 0",
                      gap: "20px"
                    }}>
                      <button style={{
                        padding: "1vh",
                        border: "none",
                        borderRadius: "10px",
                        background: card.changeColor,
                        color: "black",
                        fontSize: "1.7vh",
                        fontWeight: "600",
                      }}>{card.percentageChange}</button>
                      <div style={{
                        color: colors.textWhite,
                        fontSize: "2.2vh",
                        fontWeight: "600"
                      }}>
                        {card.percentageText}
                      </div>
                    </div>
                  ) : (
                    <div>
                      <button style={{
                        padding: "0.8vh 1.8vh",
                        border: "none",
                        borderRadius: "10px",
                        ...card.buttonStyle,
                        fontSize: "1.7vh",
                        fontWeight: "600",
                        margin: "2vh 0 0 0",
                      }}>{card.buttonText}</button>
                    </div>
                  )}
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}
export default AdminCards;