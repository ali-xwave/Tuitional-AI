import ActiveTeachers from "@/components/Admin-Dashboard/active-teachers"
import AdminCards from "@/components/Admin-Dashboard/admin-cards"
import AdminHeader from "@/components/Admin-Dashboard/admin-header"
import AnalyzeClassPerformance from "@/components/Admin-Dashboard/analyze-class-perfomance"
import ClassPerformance from "@/components/Admin-Dashboard/class-perfomance"
import { Grid } from "@mui/material"

const Page = () => {
  return (
    <>
      <div className='component-background'>
        <div style={{ padding: "20px" }} >
          <AdminHeader />
          <AdminCards />

          <Grid container spacing={2}>
            <Grid item xs={12} lg={6}>
              <ActiveTeachers />
              <ClassPerformance />
            </Grid>
            <Grid item xs={12} lg={6}>
              <AnalyzeClassPerformance />
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  )
}

export default Page