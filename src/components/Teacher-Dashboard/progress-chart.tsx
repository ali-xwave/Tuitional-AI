"use client";
import { ArrowDropDown } from '@mui/icons-material'
import { Grid, IconButton, Menu, MenuItem, Typography } from '@mui/material'
import Image from 'next/image';
import React, { useState } from 'react'
import test from '../../../public/assets/images/static/Test Ellipse dashboard img.png'
import pending from '../../../public/assets/images/static/Pending Ellipse dashboard img.png'
import chart from '../../../public/assets/images/static/progress chart dashboard img.png'
import send from '../../../public/assets/images/static/send dashboard icon.png'
import affif from '../../../public/assets/images/static/affif circle dashboard img.png'
const ProgressChart = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <div style={{
        backgroundColor: '#242728',
        height: "auto",
        margin: "20px 0 0 0",
        borderRadius: "10px",
        width: "100%"
      }}>
        <div style={{ padding: "20px" }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: "420px",
            }}
          >

            {["Select Test", "Select User", "Select Group"].map((label, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "#1C1E1E",
                  width: "auto",
                  height: "40px",
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  padding: "0 5px 0 10px",
                }}
              >
                <IconButton onClick={handleClick} style={{ color: "white" }}>
                  <Typography variant="body1" style={{ fontSize: "13px" }}>
                    {label}
                  </Typography>
                  <ArrowDropDown style={{ padding: "0 0 0 10px" }} />
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    style: { backgroundColor: "#333", color: "white" }, // Custom background color for the dropdown
                  }}
                >
                  <MenuItem onClick={handleClose}>My Account</MenuItem>
                  <MenuItem onClick={handleClose}>Settings</MenuItem>
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
              </div>
            ))}
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "20px",
            }}
          >
            {[
              { label: "Submitted", count: 89, color: "#8CFBD2", border: "#8CFBD2" },
              { label: "Pending", count: 89, color: "#E2D571", border: "#E2D571" },
              { label: "Deadline", count: 89, color: "#FF7B7B", border: "#FF7B7B" },
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  background: `linear-gradient(108.41deg, ${item.color}00 -50%, ${item.color}33 57.74%)`,
                  width: "190px",
                  height: "65px",
                  border: `1px solid ${item.border}`,
                  borderRadius: "10px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", whiteSpace: "nowrap" }}>
                  <span style={{ color: "white", fontSize: "20px" }}>{item.label}</span>
                  <span style={{ paddingLeft: "20px", fontSize: "35px", color: item.color }}>
                    {item.count}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ margin: "30px 0 0 0", }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{
            padding: "10px", background: "#1C1E1E",
            borderRadius: "10px", width: "22vw", height: "27vh", margin: "0 15px 0 0"
          }}>
            <h3 style={{ color: "white" }}>Progress Chart</h3>

            <div style={{ display: "flex" }}>
              <div>
                <div style={{ display: "flex" }}>
                  <div>
                    <Image src={test} alt='' />
                  </div>
                  <div style={{ padding: "3px 0 0 10px", color: "#AAAAAA", fontSize: "9px", }}>Tests Completed</div>
                </div>
                <div style={{ display: "flex", padding: "5px 0" }}>
                  <div><Image src={pending} alt='' /></div>
                  <div style={{ padding: "3px 0 0 10px", color: "#AAAAAA", fontSize: "10px" }}>Tests Pending</div>
                </div>
              </div>
              <div>
                <Image src={chart} alt='' style={{ height: "15vh", width: "7vw" }} />
              </div>
            </div>
          </div>

          <div style={{
            background: "#242728",
            padding: "20px 10px 20px 10px", width: "100%", borderRadius: "10px",
          }}>
            <div style={{
              display: "flex", justifyContent: "space-between",
              padding: "0 0 15px 0"
            }}>
              <div style={{ fontSize: "25px", color: "white" }}>
                Student Progress
              </div>
              <div>
                <Image src={send} alt='send icon' />
              </div>
            </div>

            <Grid container spacing={2}>
              <Grid item xs={12} lg={4}>
                <div style={{ background: "#1C1E1E", borderRadius: "10px", padding: "10px 0" }}>
                  <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <div>
                      <Image src={affif} alt='' />
                    </div>
                    <div style={{ color: "white", fontSize: "13px", padding: "0 5px" }}>
                      Affif
                    </div>
                  </div>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <button style={{ background: "#8CFBD2", border: "none", margin: "5px 0" }}>+78.5%</button>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} lg={4}>
                <div style={{ background: "#1C1E1E", borderRadius: "10px", padding: "10px 0" }}>
                  <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <div>
                      <Image src={affif} alt='' />
                    </div>
                    <div style={{ color: "white", fontSize: "13px", padding: "0 5px" }}>
                      Affif
                    </div>
                  </div>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <button style={{ background: "#F86A6A", border: "none", margin: "5px 0" }}>-21.2%</button>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} lg={4}>
                <div style={{ background: "#1C1E1E", borderRadius: "10px", padding: "10px 0" }}>
                  <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <div>
                      <Image src={affif} alt='' />
                    </div>
                    <div style={{ color: "white", fontSize: "13px", padding: "0 5px" }}>
                      Affif
                    </div>
                  </div>
                  <div style={{ display: "flex", justifyContent: "center", }}>
                    <button style={{ background: "#8CFBD2", border: "none", margin: "5px 0" }}>+78.5%</button>
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProgressChart