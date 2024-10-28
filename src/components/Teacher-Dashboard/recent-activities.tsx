import React from 'react'
import send from '../../../public/assets/images/static/send perfomance icon dashboard.png'
import Image from 'next/image'
const RecentActivities = () => {
  return (
    <>
      <div style={{
        background: "#242728",
        width: "100%",
        margin: "20px 0 0 0",
      }}>
        <div style={{ padding: "30px 20px 13px 20px" }}>
          <div style={{ fontSize: "20px", color: "white" }}>
            Recent Activities
          </div>

          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            background: "#1C1E1E",
            padding: "10px",
            borderRadius: "10px",
            margin: "25px 0 0 0"
          }}>
            <div style={{ fontSize: "20px", color: "white" }}>
              Respiration System - 3
            </div>

            <div>
              <div>
                <button style={{
                  background: "#7BEDFF",
                  padding: "2px 5px", border: "none", borderRadius: "5px"
                }}>Diagonistic Test</button>
                <button style={{
                  background: "#8CFBD2",
                  padding: "2px 5px", border: "none", margin: "0 5px", borderRadius: "5px"
                }}>Biology</button>
                <button style={{
                  background: "#BCE5FC",
                  padding: "2px 5px", border: "none", borderRadius: "5px"
                }}>IGCSE</button>
              </div>
            </div>

            <div>
              <Image src={send} alt="" />
            </div>
          </div>

          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            background: "#1C1E1E",
            padding: "10px",
            borderRadius: "10px",
            margin: "10px 0 0 0"
          }}>
            <div style={{ fontSize: "20px", color: "white" }}>
              Respiration System - 3
            </div>

            <div>
              <div>
                <button style={{
                  background: "#7BEDFF",
                  padding: "2px 5px", border: "none", borderRadius: "5px"
                }}>Diagonistic Test</button>
                <button style={{
                  background: "#8CFBD2",
                  padding: "2px 5px", border: "none", margin: "0 5px", borderRadius: "5px"
                }}>Biology</button>
                <button style={{
                  background: "#BCE5FC",
                  padding: "2px 5px", border: "none", borderRadius: "5px"
                }}>IGCSE</button>
              </div>
            </div>

            <div>
              <Image src={send} alt="" />
            </div>
          </div>

          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            background: "#1C1E1E",
            padding: "10px",
            borderRadius: "10px",
            margin: "10px 0 0 0"
          }}>
            <div style={{ fontSize: "20px", color: "white" }}>
              Respiration System - 3
            </div>

            <div>
              <div>
                <button style={{
                  background: "#7BEDFF",
                  padding: "2px 5px", border: "none", borderRadius: "5px"
                }}>Diagonistic Test</button>
                <button style={{
                  background: "#8CFBD2",
                  padding: "2px 5px", border: "none", margin: "0 5px", borderRadius: "5px"
                }}>Biology</button>
                <button style={{
                  background: "#BCE5FC",
                  padding: "2px 5px", border: "none", borderRadius: "5px"
                }}>IGCSE</button>
              </div>
            </div>

            <div>
              <Image src={send} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default RecentActivities