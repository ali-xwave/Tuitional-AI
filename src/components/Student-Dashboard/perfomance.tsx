import { leagueSpartan } from "@/app/fonts";
import Image from "next/image";
import icon1 from '../../../public/assets/images/static/student dashboard perfomace img1.png';
import icon2 from '../../../public/assets/images/static/student dashboard perfomace img2.png';
import icon3 from '../../../public/assets/images/static/student dashboard perfomace img3.png';
import BarChart from "../Student-Dashboard/chart";
import colors from '@/config/colors';

const styles = {
  container: {
    color: colors.textWhite,
    fontSize: "5vh",
    fontWeight: "600",
    padding: "4.8vh 0",
  },
  performanceCard: {
    background: colors.backgroundMain,
    borderRadius: "20px",
    padding: "3vh 4vh 0 4vh",
    width: "100%",
    height: "30vh",
  },
  title: {
    color: colors.textWhite,
    fontSize: "2.8vh",
    fontWeight: "600",
    lineHeight: "25px",
  },
  metricContainer: {
    display: "flex",
    alignItems: "center",
    gap: "5px",
    padding: "10px 0 0 0",
  },
  metricLabel: {
    color: colors.textWhite,
    fontSize: "1.7vh",
    fontWeight: "400",
    whiteSpace: "nowrap",
  },
  metricsWrapper: {
    display: "flex",
    gap: "60px",
  },
};

const Perfomance = () => {
  // Array to hold performance metrics
  const performanceMetrics = [
    {
      icon: icon1,
      label: "Tests Performed",
    },
    {
      icon: icon2,
      label: "Assignments",
    },
    {
      icon: icon3,
      label: "Games Completed",
    },
  ];

  return (
    <div className={leagueSpartan.className}>
      <div style={styles.container}>
        Performance
      </div>

      <div style={styles.performanceCard}>
        <div style={styles.metricsWrapper}>
          <div>
            <div style={styles.title}>
              Test <br /> Performed
            </div>

            {performanceMetrics.map((metric, index) => (
              <div key={index} style={styles.metricContainer}>
                <div>
                  <Image src={metric.icon} alt="icons" />
                </div>
                <div style={styles.metricLabel}>
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
          <BarChart />
        </div>
      </div>
    </div>
  );
}

export default Perfomance;
