// AdminCard.tsx
import React from 'react';
import colors from '@/config/colors';

interface AdminCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  subText: string;
  buttonText?: string;
  buttonStyle?: React.CSSProperties;
  hasPercentageChange: boolean;
  percentageChange?: string;
  changeColor?: string;
  percentageText?: string;
}

const AdminCard: React.FC<AdminCardProps> = ({
  icon,
  title,
  value,
  subText,
  buttonText,
  buttonStyle,
  hasPercentageChange,
  percentageChange,
  changeColor,
  percentageText,
}) => {
  return (
    <div style={{
      background: colors.backgroundMain,
      borderRadius: "20px",
      padding: "20px 20px",
    }}>
      <div>
        <div style={{
          display: "flex",
          alignItems: "center",
          color: colors.textWhite,
          gap: "15px"
        }}>
          <div>{icon}</div>
          <div style={{ fontSize: "2.2vh", fontWeight: "500" }}>
            {title}
            <div style={{
              color: colors.primaryBlue,
              fontSize: "4.5vh",
              fontWeight: "700",
              padding: "10px 0 0 0 "
            }}>
              {value}
              <span style={{
                color: colors.grayText,
                fontSize: "2vh",
                fontWeight: "400",
                padding: "0 0 0 5px",
                whiteSpace: "nowrap"
              }}>{subText}</span>
            </div>
          </div>
        </div>

        {hasPercentageChange ? (
          <div style={{
            display: "flex",
            alignItems: "center",
            margin: "2vh 0 0 0",
            gap: "20px"
          }}>
            <button style={{
              padding: "1vh",
              border: "none",
              borderRadius: "10px",
              background: changeColor,
              color: "black",
              fontSize: "1.7vh",
              fontWeight: "600",
            }}>{percentageChange}</button>
            <div style={{
              color: colors.textWhite,
              fontSize: "2.2vh",
              fontWeight: "600"
            }}>
              {percentageText}
            </div>
          </div>
        ) : (
          <div>
            <button style={{
              padding: "0.8vh 1.8vh",
              border: "none",
              borderRadius: "10px",
              ...buttonStyle,
              fontSize: "1.7vh",
              fontWeight: "600",
              margin: "2vh 0 0 0",
            }}>{buttonText}</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminCard;
