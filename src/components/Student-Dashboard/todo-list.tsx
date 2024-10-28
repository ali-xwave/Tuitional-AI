"use client";
import React from 'react';
import { Box } from '@mui/material';
import Image from 'next/image';
import { leagueSpartan } from "@/app/fonts";
import affif from '../../../public/assets/images/static/affif circle dashboard img.png';
import due from '../../../public/assets/images/static/student dashboard date img.png';
import arrow from '../../../public/assets/images/static/student dashboard todo arrow.png';
import colors from '@/config/colors';

const todoItems = [
  {
    id: 1,
    category: "Assignment",
    status: "Overdue",
    statusColor: "#FF7B7B", // Red color for overdue status
    task: "Diagnostic Assignment",
    assignedBy: "Rao Manzar",
    dueDate: "28th Sept, 2024",
  },
  {
    id: 2,
    category: "Assignment",
    status: "Pending",
    statusColor: "#E2D571", // Yellow color for pending status
    task: "Diagnostic Assignment",
    assignedBy: "Rao Manzar",
    dueDate: "28th Sept, 2024",
  },
];

const TodoList = () => {
  return (
    <div className={leagueSpartan.className}>
      <Box sx={style.container}>
        <Box sx={style.header}>To Do List</Box>

        {todoItems.map((item) => (
          <Box key={item.id} sx={style.todoItem}>
            <Box sx={{
              display: "flex", justifyContent: "space-between", alignItems: "center"
            }}>

              <Box>
                <button style={style.categoryButton}>
                  {item.category}
                </button>
                <button style={style.statusButton(item.statusColor)}>
                  {item.status}
                </button>
                <Box sx={style.taskName}>{item.task}</Box>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", gap: "20px", }}>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Box sx={style.labelTextOne}>Assigned by:</Box>
                  <Box sx={style.assignedBy}>
                    <Image src={affif} alt="Assigner image" style={{
                      width: "3vh", height: "3vh"
                    }} />
                    <Box sx={style.assignedByName}>{item.assignedBy}</Box>
                  </Box>
                </Box>

                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Box sx={style.labelTextTwo}>Due date:</Box>
                  <Box sx={style.dueDate}>
                    <Image src={due} alt="Due date icon"
                      style={{ width: "3vh", height: "3vh" }} />
                    <Box sx={style.dueDateText}>{item.dueDate}</Box>
                  </Box>
                </Box>
              </Box>

              <Image src={arrow} alt="Arrow icon" />
            </Box>
          </Box>
        ))}
      </Box>
    </div>
  );
};

export default TodoList;

// Define styles using a style object
const style = {
  container: {
    backgroundColor: colors.backgroundMain,
    borderRadius: "20px",
    margin: "10px 0 0 0",
    padding: "20px 30px 0 30px",
    width: "100%",
    height: "30vh"
  },
  header: {
    color: colors.textWhite,
    fontSize: "3vh",
    fontWeight: "600",
  },
  todoItem: {
    backgroundColor: colors.backgroundTodo,
    padding: "10px 20px 0px 20px",
    borderRadius: "20px",
    margin: "5px 0",
  },
  categoryButton: {
    border: "1px solid white",
    background: "none",
    color: colors.textWhite,
    padding: "7px",
    borderRadius: "5px",
    fontSize: "1.4vh",
  },
  statusButton: (statusColor: any) => ({
    border: "none",
    fontSize: "1.4vh",
    background: statusColor,
    color: colors.buttonBlack,
    padding: "7px 20px",
    borderRadius: "5px",
    margin: "0 10px",
  }),
  taskName: {
    color: colors.textWhite,
    fontSize: "1.7vh",
    fontWeight: "600",
    padding: "10px 0",
  },
  labelTextOne: {
    color: colors.textGray,
    fontSize: "1.4vh",
    fontWeight: "400",
  },
  labelTextTwo: {
    color: colors.textGray,
    fontSize: "1.5vh",
    fontWeight: "400",
    paddingBottom: "10px",
  },
  assignedBy: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "1.5vh 0 0 0"
  },
  assignedByName: {
    color: colors.textWhite,
    fontSize: "1.8vh",
    fontWeight: "600",
  },
  dueDate: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  dueDateText: {
    color: colors.textWhite,
    fontSize: "1.8vh",
    fontWeight: "600",
  },
};
