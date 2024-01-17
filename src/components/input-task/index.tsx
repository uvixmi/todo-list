import { Button, Input } from "antd"
import { PlusCircleOutlined } from "@ant-design/icons"
import styles from "./styles.module.scss"
import { useDispatch } from "react-redux"
import { useState } from "react"
import { addTodo } from "../list/slice"
import { CONTENT } from "./constants"

export const InputTask = () => {
  const dispatch = useDispatch()
  const [newTodo, setNewTodo] = useState<string>("")

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      dispatch(addTodo({ title: newTodo }))
      setNewTodo("")
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value)
  }

  return (
    <div className={styles["input-task-wrapper"]}>
      <Input
        value={newTodo}
        onChange={handleInputChange}
        placeholder={CONTENT.INPUT_PLACEHOLDER}
      />
      <Button
        className={styles["button-style"]}
        icon={<PlusCircleOutlined />}
        onClick={handleAddTodo}
      />
    </div>
  )
}
