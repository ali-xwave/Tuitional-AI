import GetStarted from "@/components/Student-Dashboard/get-started"
import Header from "@/components/Student-Dashboard/header"
import Perfomance from "@/components/Student-Dashboard/perfomance"
import TodoList from "@/components/Student-Dashboard/todo-list"
import { Grid } from "@mui/material"
import React from "react"
const Page = () => {
  return (
    <>
      <div className='component-background'>
        <div style={{ padding: "20px" }}>
          <Header />

          <Grid container spacing={2}>
            <Grid item xs={12} lg={6}>
              <GetStarted />
            </Grid>
            <Grid item xs={12} lg={6}>
              <Perfomance />
              <TodoList />
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  )
}

export default Page