import { Grid } from '@mui/material';
import Image from 'next/image';
import Simg from '../../../public/assets/images/static/S Dash.png';
import { leagueSpartan } from '@/app/fonts';

const Progress = () => {
  return (
    <div className={leagueSpartan.className}>
      <Grid container spacing={2}>

        {/* Greeting Section */}
        <Grid item xs={12} lg={4} sm={12} md={12}>
          <div
            style={{
              background: "#242728",
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
              color: "white", fontSize: "3.5vh",
              whiteSpace: "nowrap", fontWeight: "600"
            }}>
              Good Afternoon, <span style={{ color: "#38B6FF" }}>Admin.</span>
            </h2>
          </div>
        </Grid>

        {/* Progress and Scores Section */}
        <Grid item xs={12} lg={8} sm={12} md={12}>
          <div
            style={{
              background: "#242728",
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

                <h2 style={{ color: "white", whiteSpace: "nowrap", fontSize: "3.5vh", fontWeight: "600" }}>Students Progress</h2>

              </div>

              <div style={{
                display: 'flex', gap: "1vw", height: '10vh',
                marginTop: '1vh'
              }}>

                {/* Score Cards */}
                {[
                  { bg: "rgba(255, 123, 123, 0.2)", border: "#FF7B7B", color: "#FF7B7B" },
                  { bg: "rgba(226, 213, 113, 0.2)", border: "#E2D571", color: "#E2D571" },
                  { bg: "rgba(140, 251, 210, 0.2)", border: "#8CFBD2", color: "#8CFBD2" }
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
                      <div style={{ color: "white", fontSize: "1.5vh", paddingBottom: "10px" }}>Average Score:</div>
                      <div style={{ fontSize: "4vh", color: score.color }}>45%</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Profile Image Section */}
              <div>
                <Image src={Simg} alt="profile icon" style={{ width: "80px", height: "80px" }} />
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default Progress;
