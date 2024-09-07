import { useContext } from "react";
import { TasksContext, TasksContextProps } from "./context";

export const useTask = () => useContext(TasksContext) as TasksContextProps