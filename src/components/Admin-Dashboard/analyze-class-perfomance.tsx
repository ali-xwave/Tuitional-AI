import React from 'react'
import Chart from '../Admin-Dashboard/chart'
import { Grid, InputBase, Paper } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import { leagueSpartan } from '@/app/fonts';
import colors from '@/config/colors';

const AnalyzeClassPerfomance = () => {
  return (
    <div className={leagueSpartan.className}>
      <div style={{
        backgroundColor: colors.backgroundMain,
        borderRadius: '10px', margin: "7vh 0 0 0",
        height: "70.5vh"
      }}>

        <Grid container spacing={2} alignItems="center">
          {/* Active Teachers Title */}
          <Grid item xs={12} lg={6}>
            <h2 style={{
              color: colors.textWhite, whiteSpace: "nowrap", fontSize: "3.5vh", width: "100%",
              padding: "0 0 0 30px", fontWeight: "600"
            }}>Analyze Class Performance</h2>
          </Grid>

          {/* Search Input */}
          <Grid item xs={12} lg={6}>
            <Paper
              component="form"
              style={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: colors.backgroundDark,
                padding: '5px 15px',
                borderRadius: '30px',
                width: '95%',
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
        </Grid>

        <div style={{ padding: "30px 0 0 0" }}>
          <Grid container spacing={2}>
            <Grid item xs={12} lg={1}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                  color: colors.textGray,
                  fontSize: "13.5px",
                }}
              >
                {[100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 0].map((num) => (
                  <p key={num} style={{ margin: "8.8px 0" }}>
                    {num}
                  </p>
                ))}
              </div>
            </Grid>
            <Grid item xs={12} lg={11}>
              <Chart />
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  )
}

export default AnalyzeClassPerfomance