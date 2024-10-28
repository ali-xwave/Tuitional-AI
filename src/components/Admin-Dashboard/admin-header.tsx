import { Grid } from '@mui/material';
import Image from 'next/image';
import Mimg from '../../../public/assets/images/static/student dashboard M icon (1).png';
import { leagueSpartan } from '@/app/fonts';
import colors from '@/config/colors';

const AdminHeader = () => {
  return (
    <div className={leagueSpartan.className}>
      <Grid container spacing={2}>

        {/* Greeting Section */}
        <Grid item xs={12} lg={4} sm={12} md={12}>
          <div
            style={{
              background: colors.backgroundMain,
              height: "12vh",
              borderRadius: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              padding: "28px",
              width: "100%"
            }}
          >
            <h2 style={{
              color: colors.textWhite, fontSize: "3.5vh",
              whiteSpace: "nowrap", fontWeight: "600"
            }}>
              Good Afternoon, <span style={{ color: colors.primaryBlue }}>Admin.</span>
            </h2>
          </div>
        </Grid>

        {/* Progress and Scores Section */}
        <Grid item xs={12} lg={8} sm={12} md={12}>
          <div
            style={{
              background: colors.backgroundMain,
              height: "12vh",
              borderRadius: "20px",
              padding: "0px 20px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >

              {/* Student Progress Label */}
              <div
                style={{
                  height: "12vh",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <h2 style={{
                  color: colors.textWhite,
                  whiteSpace: "nowrap",
                  fontSize: "3.5vh",
                  fontWeight: "600"
                }}>Students Progress</h2>
              </div>

              <div style={{
                display: 'flex', gap: "1vw", height: '10vh',
                marginTop: '1vh'
              }}>

                {/* Score Cards */}
                {[
                  { bg: colors.scoreRedBg, border: colors.scoreRed, color: colors.scoreRed },
                  { bg: colors.scoreYellowBg, border: colors.scoreYellow, color: colors.scoreYellow },
                  { bg: colors.scoreGreenBg, border: colors.scoreGreen, color: colors.scoreGreen }
                ].map((score, index) => (
                  <div
                    key={index}
                    style={{
                      background: `linear-gradient(108.41deg, rgba(0, 0, 0, 0) -50%, ${score.bg} 57.74%)`,
                      width: "10vw",
                      height: "100%",
                      border: `1px solid ${score.border}`,
                      borderRadius: "10px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <div style={{ textAlign: "center" }}>
                      <div style={{
                        color: colors.textWhite,
                        fontSize: "1.5vh",
                        paddingBottom: "10px"
                      }}>Average Score:</div>
                      <div style={{ fontSize: "4vh", color: score.color }}>45%</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Profile Image Section */}
              <div>
                <Image src={Mimg} alt="profile icon" style={{ width: "80px", height: "80px" }} />
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default AdminHeader;
