import { useEffect } from "react"
import { InputTask } from "../input-task"
import { ListItem } from "../list-item"
import styles from "./styles.module.scss"
import { fetchTodos } from "./slice"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../store"
import { Typography } from "antd"
import { CONTENT } from "./constants"

export const List = () => {
  const { Title } = Typography
  const dispatch = useDispatch()
  const todoList = useSelector((state: RootState) => state.todo.list)
  useEffect(() => {
    dispatch(fetchTodos())
  }, [dispatch])

  useEffect(() => {
    console.log(todoList)
  }, [todoList])
  return (
    <div className={styles["list-wrapper"]}>
      <Title level={2}>{CONTENT.TODOLIST_HEADING}</Title>
      {todoList.map((item, index) => (
        <ListItem key={index} title={item.title} completed={item.completed} />
      ))}
      <InputTask />
    </div>
  )
}
