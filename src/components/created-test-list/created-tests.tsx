"use client";
import { Grid, InputBase, MenuItem, Paper, Select, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { Box } from "@mui/system";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import colors from '../../config/colors';

const CreatedTests = () => {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
        <div>
          <h2 style={{ color: colors.textWhite, fontWeight: "600", fontSize: "4.5vh" }}>
            Created Tests
          </h2>
        </div>
        <div>
          <button style={{
            fontSize: "2vh", background: colors.primaryBlue, padding: "2vh 4vh",
            fontWeight: "600", border: "none", borderRadius: "10px"
          }}>Created Tests
          </button>
          <button style={{
            fontSize: "2vh", background: colors.buttonBlack, padding: "2vh 4vh",
            fontWeight: "600", border: "none", borderRadius: "10px", color: colors.textWhite
          }}>Attempted Tests</button>
        </div>
      </div>

      <Grid container spacing={2}>
        <Grid item xs={12} lg={6}>
          <Box sx={{
            display: "flex", justifyContent: "space-between",
            gap: "2vh", padding: "2vh 0 0 0"
          }}>
            <Box sx={{
              width: '100%',
              backgroundColor: colors.darkBackground,
              display: 'flex',
              alignItems: 'center',
              padding: '0 2vh',
              borderRadius: '10px',
            }}>
              <SearchIcon style={{ color: colors.textWhite, width: "4vh", height: "4vh" }} />
              <InputBase
                placeholder="Search name or class"
                inputProps={{ 'aria-label': 'search name or class' }}
                style={{
                  marginLeft: '10px', color: colors.textWhite, backgroundColor: colors.darkBackground,
                  fontSize: "2.5vh"
                }}
              />
            </Box>
            <Box sx={{
              width: '100%',
            }}>
              <Select
                value="Sep 1 - 30, 2024"
                displayEmpty
                renderValue={(selected) => (
                  <Box sx={{
                    display: 'flex', alignItems: 'center',
                    gap: '10px',
                  }}>
                    <CalendarMonthIcon sx={{
                      color: colors.primaryBlue,
                      width: "4vh", height: "3.5vh"
                    }} />
                    <Typography sx={{ fontSize: "2.5vh" }}>{selected}</Typography>
                  </Box>
                )}
                sx={{
                  backgroundColor: colors.darkBackground, color: colors.textWhite,
                  borderRadius: '10px', height: "8vh",
                  border: 'none', display: 'flex',
                  alignItems: 'center', width: '100%'
                }}
              >
                <MenuItem value="Sep 1 - 30, 2024">Sep 1 - 30, 2024</MenuItem>
                <MenuItem value="Oct 1 - 31, 2024">Oct 1 - 31, 2024</MenuItem>
              </Select>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} lg={6}>
          <Box sx={{
            display: "flex", alignItems: "center",
            justifyContent: "right", height: "8vh",
            color: colors.textGray, margin: "2vh 0 0 0"
          }}>
            <Typography>
              Total Created Tests:
            </Typography>
            <Typography sx={{
              color: colors.primaryBlue, fontWeight: "600",
              fontSize: "4vh"
            }}>
              36
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default CreatedTests;
