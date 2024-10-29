"use client";
import { useState } from "react";
import { Grid, InputBase, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { Box } from "@mui/system";
import colors from '../../config/colors';
import { leagueSpartan } from "@/app/fonts";
import FilterByDate from "./FilterByDate";
import Cards from "@/components/created-test-list/cards"; 

const CreatedTests = (handleCalendar: any) => {
  const [activeTab, setActiveTab] = useState("My Tests"); 

  const buttonStyle = (tabName: string) => ({
    fontSize: "2vh",
    background: activeTab === tabName ? colors.primaryBlue : "none",
    padding: "2vh 8vh",
    fontWeight: "600",
    border: "none",
    borderRadius: "10px",
    color: colors.textWhite,
  });

  return (
    <>
      <div className={leagueSpartan.className}>
        <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
          <div>
            <h2 style={{ color: colors.textWhite, fontWeight: "600", fontSize: "4.5vh" }}>
              {activeTab}
            </h2>
          </div>
          <div style={{ background: colors.buttonBlack, padding: "2px", borderRadius: "5px" }}>
            <button onClick={() => setActiveTab("My Tests")} style={buttonStyle("My Tests")}>
              My Tests
            </button>
            <button onClick={() => setActiveTab("Available Tests")} style={buttonStyle("Available Tests")}>
              Available Tests
            </button>
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
              <Box sx={{ width: '100%' }}>
                <FilterByDate changeFn={handleCalendar} />
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

        <div style={{ marginTop: "20px" }}>
          {/* Conditional rendering based on the active tab */}
          {activeTab === "Available Tests" && <Cards />}
        </div>
      </div>
    </>
  );
};

export default CreatedTests;
