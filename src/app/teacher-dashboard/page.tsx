import { Grid } from '@mui/material'
import React from 'react'
import Progress from '@/components/Teacher-Dashboard/progress';
import AnalyzeGroup from '@/components/Teacher-Dashboard/Analyze-Group';
import CreateTestForStudent from '@/components/Teacher-Dashboard/create-test-for-student';
import ClassPerformance from '@/components/Teacher-Dashboard/class-performance';
import ProgressChart from '@/components/Teacher-Dashboard/progress-chart';
import RecentActivities from '@/components/Teacher-Dashboard/recent-activities';
const Page = () => {
  return (
    <>
      <div className='component-background'>
        <div style={{ margin: "20px" }}>
          <Progress />
          <Grid container spacing={2}>
            <Grid item xs={12} lg={6}>
              <AnalyzeGroup />
              <CreateTestForStudent />
              <ClassPerformance />
            </Grid>
            <Grid item xs={12} lg={6}>
              <ProgressChart />
              <RecentActivities />
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  )
}

export default Page