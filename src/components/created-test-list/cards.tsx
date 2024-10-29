import colors from "@/config/colors";
import { CalendarToday, ArrowForward } from '@mui/icons-material';
import { leagueSpartan } from "@/app/fonts";

export default function Cards() {
  const cardData = [
    { title: "Diagnostic Test 4", date: "28th Sept, 2024", difficultyLevel: "Easy", type: "Mock" },
    { title: "Diagnostic Test 4", date: "28th Sept, 2024", difficultyLevel: "Medium", type: "Test" },
    { title: "Diagnostic Test 4", date: "28th Sept, 2024", difficultyLevel: "Hard", type: "Game" },
    { title: "Diagnostic Test 4", date: "28th Sept, 2024", difficultyLevel: "Easy", type: "Mock" },

  ];

  const testButtonStyles = [
    {
      background: colors.MockBackground,
      border: "1px solid transparent",
      borderImage: "linear-gradient(108.41deg, rgba(226, 213, 113, 0) 0%, rgba(226, 213, 113, 0.2) 57.74%) 1",
      type: "Mock"
    },
    {
      background: colors.TestBackground,
      border: "2px solid transparent",
      borderImage: "linear-gradient(108.41deg, rgba(248, 106, 106, 0) 0%, rgba(248, 106, 106, 0.2) 57.74%) 1",
      type: "Test"
    },
    {
      background: colors.GameBackground,
      border: "1px solid transparent",
      borderImage: "linear-gradient(108.41deg, rgba(140, 251, 210, 0) 0%, rgba(140, 251, 210, 0.2) 57.74%) 1",
      type: "Game"
    },
  ];

  return (
    <div className={leagueSpartan.className}>
      <div className="container">
        {cardData.map((data, index) => (
          <div key={index} className="card" style={{ background: colors.darkBackground }}>
            <h2 className="title">{data.title}</h2>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ display: "flex", gap: "10px" }}>
                <CalendarToday style={{ fontSize: "2vh" }} /> {/* Calendar icon from MUI */}
                <p className="date">{data.date}</p>
              </div>
              <div
                style={{
                  backgroundColor: "#38B6FF",
                  borderRadius: "50%",
                  padding: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "40px",
                  height: "40px",
                }}
              >
                <ArrowForward style={{ fontSize: "24px", color: "#fff" }} /> {/* Arrow icon with white color */}
              </div>
            </div>
            <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
              <button className="medium" style={{
                background: {
                  "Easy": '#8CFBD2',
                  "Medium": "#e2d571",
                  "Hard": "#F86A6A"
                }[data.difficultyLevel]
              }}>
                {data.difficultyLevel}
              </button>
              <button className="button" style={testButtonStyles[testButtonStyles.findIndex(item => item?.type === data?.type)]}>
                {data.type}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
