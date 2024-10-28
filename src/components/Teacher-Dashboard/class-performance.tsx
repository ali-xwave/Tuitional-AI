import React from 'react'
import peromanceSend from '../../../public/assets/images/static/send perfomance icon dashboard.png'
import Image from 'next/image'
import { Grid } from '@mui/material'
const ClassPerformance = () => {
  return (
    <>
      <div style={{
        background: "#242728", margin: "20px 0 0 0",
        padding: "20px", width: "100%", borderRadius: "10px"
      }}>

        <div style={{ fontSize: "22px", color: "white" }}>
          Class Performance
        </div>

        <div style={{
          background: "#1E2122",
          padding: "10px", borderRadius: "10px", margin: "10px 0 0 0 "
        }}>
          <div>
            <Grid container spacing={2}>
              <Grid item xs={12} lg={6}>
                <div style={{
                  background: "#7BEDFF", fontSize: "15px",
                  width: "15vw", padding: "5px", borderRadius: "5px"
                }}>
                  IGCSE Mathematics Batch # 3
                </div>
              </Grid>
              <Grid item xs={12} lg={6}>
                <div style={{ display: "flex", justifyContent: "right" }}>
                  <Image src={peromanceSend} alt='' />
                </div>
              </Grid>
            </Grid>



          </div>

          <Grid container spacing={2}>
            <Grid item xs={12} lg={3}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <div style={{ whiteSpace: "nowrap", color: "white", fontSize: "12px" }}>
                  Average Score:
                </div>
                <div style={{ color: "#38B6FF", fontSize: "17px", padding: "0 10px" }}>45%</div>
              </div>
            </Grid>
            <Grid item xs={12} lg={3}>
              <div style={{ display: "flex", alignItems: "center", padding: "0 0 0 10px" }}>
                <div style={{ whiteSpace: "nowrap", color: "white", fontSize: "12px" }}>
                  No of Students:              </div>
                <div style={{ color: "#38B6FF", fontSize: "17px", padding: "0 10px" }}>08</div>
              </div>
            </Grid>
            <Grid item xs={12} lg={3}>
              <div style={{ display: "flex", alignItems: "center", padding: "0 0 0 15px" }}>
                <div style={{ whiteSpace: "nowrap", color: "white", fontSize: "12px" }}>
                  Date Attempt:
                </div>
                <div style={{
                  color: "#38B6FF", fontSize: "17px",
                  padding: "0 10px", whiteSpace: "nowrap",
                }}>21st Sept, 2024</div>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  )
}

export default ClassPerformance