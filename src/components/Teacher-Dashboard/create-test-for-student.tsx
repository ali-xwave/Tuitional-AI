import Image from 'next/image'
import React from 'react'
import createimg from '../../../public/assets/images/static/create test dashboard img.png'
import exploreicon from '../../../public/assets/images/static/Exploar dashboard img.png'
const CreateTestForStudent = () => {
  return (
    <>
      <div style={{
        background: "#242728", margin: "20px 0 0 0", width: "100%",
        borderRadius: "10px", padding: "5px 0"
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ margin: "0 0 0 10px" }}>
            <Image src={createimg} alt='' />
          </div>
          <div style={{ fontSize: "24px", color: "white" }}>
            Create Test For Your Student
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ fontSize: "18px", color: "white", }}>
              Explore
            </div>
            <div>
              <Image src={exploreicon} alt='' style={{
                width: "10px", height: "9px",
                padding: "0 20px 0 10px"
              }} />
            </div>
          </div>
        </div>
      </div>

      <div style={{
        background: "#242728", margin: "20px 0 0 0", width: "100%",
        borderRadius: "10px", padding: "5px 0"
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ margin: "0 0 0 10px" }}>
            <Image src={createimg} alt='' />
          </div>
          <div style={{ fontSize: "24px", color: "white" }}>
            Create New Group/ Batch Class          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ fontSize: "18px", color: "white", }}>
              Explore
            </div>
            <div>
              <Image src={exploreicon} alt='' style={{
                width: "10px", height: "9px",
                padding: "0 20px 0 10px"
              }} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CreateTestForStudent