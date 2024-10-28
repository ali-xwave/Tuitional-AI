import colors from "@/config/colors";
import date from "../../../public/assets/Images/static/student dashboard date img.png";
import Image from "next/image";
import { border } from "@mui/system";

export default function Cards() {
  const cardData = [
    { img: date, title: "Diagnostic Test 4", date: "28th Sept, 2024", Medium: "Medium", Test: "Test" },
    { img: date, title: "Diagnostic Test 4", date: "28th Sept, 2024", Medium: "Medium", Test: "Test" },
    { img: date, title: "Diagnostic Test 4", date: "28th Sept, 2024", Medium: "Medium", Test: "Test" },
    { img: date, title: "Diagnostic Test 4", date: "28th Sept, 2024", Medium: "Medium", Test: "Test" },
    { img: date, title: "Diagnostic Test 4", date: "28th Sept, 2024", Medium: "Medium", Test: "Test" },
    { img: date, title: "Diagnostic Test 4", date: "28th Sept, 2024", Medium: "Medium", Test: "Test" },
    { img: date, title: "Diagnostic Test 4", date: "28th Sept, 2024", Medium: "Medium", Test: "Test" },
    { img: date, title: "Diagnostic Test 4", date: "28th Sept, 2024", Medium: "Medium", Test: "Test" },
    { img: date, title: "Diagnostic Test 4", date: "28th Sept, 2024", Medium: "Medium", Test: "Test" },
    { img: date, title: "Diagnostic Test 4", date: "28th Sept, 2024", Medium: "Medium", Test: "Test" },
    { img: date, title: "Diagnostic Test 4", date: "28th Sept, 2024", Medium: "Medium", Test: "Test" },
    { img: date, title: "Diagnostic Test 4", date: "28th Sept, 2024", Medium: "Medium", Test: "Test" },
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


  return (
    <div className="container">
      {cardData.map((data, index) => (
        <div key={index} className="card" style={{ background: colors.darkBackground }}>
          <h2 className="title">{data.title}</h2>
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <Image src={data.img} alt="date icon" />
            <p className="date">{data.date}</p>
          </div>
          <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
            <button className="medium">Medium</button>
            <button className="button" style={testButtonStyles[index % 4]}>
              Test
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
