import Image from "next/image"
import logo from '../../../public/assets/images/static/logo.png'
import Mlogo from '../../../public/assets/images/static/student dashboard M icon (1).png'

const Header = () => {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
        <div>
          <Image src={logo} alt="" style={{ width: "40vh", height: "auto" }} />
        </div>
        <div>
          <Image src={Mlogo} alt="" style={{ width: "15vh", height: "15vh" }} />
        </div>
      </div>
    </div>
  )
}

export default Header