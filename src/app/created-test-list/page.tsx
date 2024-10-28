import CreatedTests from "@/components/created-test-list/created-tests"
import Header from "@/components/created-test-list/header"
import colors from '../../config/colors';
import Cards from "@/components/created-test-list/cards";
const Page = () => {
  return (
    <div className="component-background">
      <div style={{ padding: "20px" }}>
        <Header />
        <div style={{
          padding: "3vh 5vh", background: colors.backgroundMain,
          borderRadius: "10px",
        }}>
          <CreatedTests />
          <Cards />
        </div>
      </div>
    </div>
  )
}
export default Page