import colors from "@/config/colors";
import date from "../../../public/assets/Images/static/student dashboard date img.png";
import iconimg from '../../../public/assets/Images/static/send perfomance icon dashboard.png';
import Image from "next/image";
import { leagueSpartan } from "@/app/fonts";

export default function Cards() {
  const cardData = [
    { img: date, title: "Diagnostic Test 4", date: "28th Sept, 2024", Medium: "Medium", icon: iconimg },
    { img: date, title: "Diagnostic Test 4", date: "28th Sept, 2024", Medium: "Medium", icon: iconimg },
    { img: date, title: "Diagnostic Test 4", date: "28th Sept, 2024", Medium: "Medium", icon: iconimg },
    { img: date, title: "Diagnostic Test 4", date: "28th Sept, 2024", Medium: "Medium", icon: iconimg },
    { img: date, title: "Diagnostic Test 4", date: "28th Sept, 2024", Medium: "Medium", icon: iconimg },
    { img: date, title: "Diagnostic Test 4", date: "28th Sept, 2024", Medium: "Medium", icon: iconimg },
    { img: date, title: "Diagnostic Test 4", date: "28th Sept, 2024", Medium: "Medium", icon: iconimg },
    { img: date, title: "Diagnostic Test 4", date: "28th Sept, 2024", Medium: "Medium", icon: iconimg },
    { img: date, title: "Diagnostic Test 4", date: "28th Sept, 2024", Medium: "Medium", icon: iconimg },
    { img: date, title: "Diagnostic Test 4", date: "28th Sept, 2024", Medium: "Medium", icon: iconimg },
    { img: date, title: "Diagnostic Test 4", date: "28th Sept, 2024", Medium: "Medium", icon: iconimg },
    { img: date, title: "Diagnostic Test 4", date: "28th Sept, 2024", Medium: "Medium", icon: iconimg },
  ];

  const testButtonStyles = [
    {
      background: "linear-gradient(108.41deg, rgba(226, 213, 113, 0) 0%, rgba(226, 213, 113, 0.2) 57.74%)",
      border: "1px solid transparent",
      borderImage: "linear-gradient(108.41deg, rgba(226, 213, 113, 0) 0%, rgba(226, 213, 113, 0.2) 57.74%) 1",
    },
    {
      background: "linear-gradient(108.41deg, rgba(248, 106, 106, 0) 0%, rgba(248, 106, 106, 0.2) 57.74%)",
      border: "2px solid transparent",
      borderImage: "linear-gradient(108.41deg, rgba(248, 106, 106, 0) 0%, rgba(248, 106, 106, 0.2) 57.74%) 1",
    },
    {
      background: "linear-gradient(108.41deg, rgba(140, 251, 210, 0) 0%, rgba(140, 251, 210, 0.2) 57.74%)",
      border: "1px solid transparent",
      borderImage: "linear-gradient(108.41deg, rgba(140, 251, 210, 0) 0%, rgba(140, 251, 210, 0.2) 57.74%) 1",
    },
    {
      background: "linear-gradient(108.41deg, rgba(226, 213, 113, 0) 0%, rgba(226, 213, 113, 0.2) 57.74%)",
      border: "1px solid transparent",
      borderImage: "linear-gradient(108.41deg, rgba(226, 213, 113, 0) 0%, rgba(226, 213, 113, 0.2) 57.74%) 1",
    },
  ];

  const buttonText = (index: number) => {
    const mockIndices = [0, 3, 4, 7, 8, 11];
    const testIndices = [1, 5, 9];
    const gameIndices = [2, 6, 10];
    
    if (mockIndices.includes(index)) return "Mock";
    if (testIndices.includes(index)) return "Test";
    if (gameIndices.includes(index)) return "Game";
    return "Mock";
  };

  return (
    <div className={leagueSpartan.className}>
      <div className="container">
        {cardData.map((data, index) => (
          <div key={index} className="card" style={{ background: colors.darkBackground }}>
            <h2 className="title">{data.title}</h2>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ display: "flex", gap: "10px" }}>
                <Image src={data.img} alt="date icon" style={{width: "2vh", height: "2vh"}} />
                <p className="date">{data.date}</p>
              </div>
              <div>
                <Image src={data.icon} alt="icon" style={{width: "6vh", height: "6vh"}} />
              </div>
            </div>
            <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
              <button className="medium">Medium</button>
              <button className="button" style={testButtonStyles[index % 4]}>
                {buttonText(index)}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
