import { Button, Checkbox } from "antd"
import styles from "./styles.module.scss"
import { CloseOutlined } from "@ant-design/icons"
import { ListItemProps } from "./types"
import { useDispatch } from "react-redux"
import { removeTodo, toggleTodo } from "../list/slice"
import { HiddenText } from "./hidden-text"

export const ListItem = ({ title, completed }: ListItemProps) => {
  const dispatch = useDispatch()
  const handleRemoveTodo = (title: string) => {
    dispatch(removeTodo({ title }))
  }

  const handleToggleTodo = () => {
    dispatch(toggleTodo({ title }))
  }

  return (
    <div className={styles["list-item-wrapper"]}>
      <Checkbox
        checked={completed}
        onClick={handleToggleTodo}
        className={styles["checkbox-style"]}
      />
      <HiddenText title={title} />
      <Button
        className={styles["button-style"]}
        icon={<CloseOutlined />}
        onClick={() => {
          handleRemoveTodo(title)
        }}
      />
    </div>
  )
}
