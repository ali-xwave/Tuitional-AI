import { Grid, CircularProgress, InputBase, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { leagueSpartan } from '@/app/fonts';
import colors from '@/config/colors';

const grades = [
  { grade: 'Grade 7', value: 34 },
  { grade: 'Grade 8', value: 15 },
  { grade: 'Grade 9', value: 34 },
  { grade: 'Grade 10', value: 15 },
  { grade: 'Grade 11', value: 47 },
  { grade: 'Grade 12', value: 56 },
];

const ActiveTeachers = () => {
  return (
    <>
      <div className={leagueSpartan.className}>
        <div style={{
          backgroundColor: '#242728',
          borderRadius: '10px', margin: "7vh 0 0 0",
          height: "31.5vh"
        }}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} lg={6}>
              <h2 style={{
                color: colors.textWhite, fontSize: "3.5vh",
                fontWeight: "600", padding: "0 0 0 6vh"
              }}>Active Teachers</h2>
            </Grid>

            {/* Search Input */}
            <Grid item xs={12} lg={6}>
              <Paper
                component="form"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  backgroundColor: '#2a2d35',
                  padding: '5px 10px',
                  borderRadius: '30px',
                  width: '45vh',
                }}
              >
                <SearchIcon style={{ color: 'white' }} />
                <InputBase
                  placeholder="Search name or class"
                  inputProps={{ 'aria-label': 'search name or class' }}
                  style={{ marginLeft: '10px', color: 'white' }}
                />
              </Paper>
            </Grid>

            {/* Grades with CircularProgress */}
            {grades.map((grade, index) => (
              <Grid item xs={6} sm={2} key={index}>
                <div style={{
                  display: 'flex', flexDirection: 'column', alignItems: 'center',
                  padding: "1vh 0 0 0"
                }}>
                  {/* Relative container for progress and number */}
                  <div style={{ position: 'relative', display: 'inline-flex' }}>
                    {/* CircularProgress Component */}
                    <CircularProgress
                      variant="determinate"
                      value={grade.value}
                      size={"10vh"}
                      thickness={5}
                      style={{ color: colors.primaryBlue }}
                    />
                    {/* Number inside the progress circle */}
                    <div
                      style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        color: colors.textWhite,
                        fontSize: '2.5vh',
                        fontWeight: '600',
                      }}
                    >
                      {grade.value}
                    </div>
                  </div>
                  <p style={{
                    color: colors.primaryBlue, fontSize: '2vh', fontWeight: '600',
                    margin: '2vh 0 0 0',
                  }}>{grade.grade}</p>
                </div>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </>
  );
};

export default ActiveTeachers;
