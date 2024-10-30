import Image from "next/image"
import logo from '../../../public/assets/Images/static/Tuitional logo.png'
import Mlogo from '../../../public/assets/Images/static/student dashboard M icon (1).png'
const Header = () => {
  return (
    <div>
      <div style={{ padding: "0 20px", }}>
        <div style={{
          display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center"
        }}>
          <div>
            <Image src={logo} alt="Logo" style={{ width: "50vh", height: "8vh" }} />
          </div>
          <div>
            <Image src={Mlogo} alt="Logo" style={{ width: "15vh", height: "15vh", margin: "5px 0 0 0" }} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header