import { Grid } from "@mui/material";
import Image from "next/image";
import send from '../../../public/assets/images/static/send perfomance icon dashboard.png';
import { leagueSpartan } from "@/app/fonts";
import colors from '@/config/colors';

// Sample data for cards
const performanceData = [
  {
    subject: "IGCSE",
    course: "Mathematics",
    batch: "Batch # 3",
    date: "21st Sept, 2024",
    score: "45%",
    students: "08"
  },
  {
    subject: "IGCSE",
    course: "Mathematics",
    batch: "Batch # 3",
    date: "21st Sept, 2024",
    score: "45%",
    students: "08"
  },
  {
    subject: "IGCSE",
    course: "Mathematics",
    batch: "Batch # 3",
    date: "21st Sept, 2024",
    score: "45%",
    students: "08"
  },
  {
    subject: "IGCSE",
    course: "Mathematics",
    batch: "Batch # 3",
    date: "21st Sept, 2024",
    score: "45%",
    students: "08"
  }
];

export default function ClassPerformance() {
  return (
    <>
      <div className={leagueSpartan.className}>
        <div
          style={{
            padding: '20px',
            backgroundColor: colors.backgroundMain,
            color: '#fff',
            width: "100%",
            margin: "10px 0 0 0",
            borderRadius: "10px",
            height: "37.5vh"

          }}
        >
          <h2
            style={{
              fontSize: '3.5vh',
              marginBottom: '10px',
              color: colors.textWhite,
              fontWeight: "600"
            }}
          >
            Class Performance
          </h2>

          <Grid container spacing={2}>
            {performanceData.map((data, index) => (
              <Grid item xs={12} lg={6} key={index}>
                <div style={{
                  display: "flex",
                  gap: "10px", background: colors.darkBackground, padding: "10px 5px",
                  position: "relative", borderRadius: "10px",
                }}>
                  <div>
                    <h2
                      style={{
                        backgroundColor: colors.secondaryBackground,
                        padding: '0.5vh 1.5vh',
                        borderRadius: '5px',
                        fontWeight: '600',
                        fontSize: "1.7vh",
                        lineHeight: "2.8vh",
                      }}
                    >
                      {data.subject} <br /> {data.course} <br /> {data.batch}
                    </h2>
                  </div>
                  <div style={{ color: colors.textGray, fontSize: "1.7vh", whiteSpace: "nowrap" }}>
                    <p style={{ fontWeight: "600" }}>Date Attempt: <span style={{ color: colors.primaryBlue, 
                      fontSize: "2vh", fontWeight: "600" }}>{data.date}</span>
                    </p>

                    <p style={{ padding: "7px 0", fontWeight: "600" }}>Average Score: <span style={{
                      color: colors.primaryBlue, fontSize: "2vh",
                      fontWeight: "600",
                    }}>{data.score}</span>
                    </p>

                    <p style={{ fontWeight: "600" }}>No. of Students: <span style={{ color: colors.primaryBlue, fontSize: "2vh", fontWeight: "600" }}>{data.students}</span>
                    </p>
                  </div>
                  <div style={{ position: "absolute", bottom: "2%", right: "5%" }}>
                    <Image src={send} alt="send icon" style={{ width: "5vh", height: "5vh" }} />
                  </div>
                </div>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </>
  );
}
