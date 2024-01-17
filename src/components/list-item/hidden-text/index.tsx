import { useState } from "react"
import { Button, Typography } from "antd"
import { HiddenTextProps } from "./types"
import styles from "./styles.module.scss"
import cn from "classnames"
import { ELLIPSIS_SYMBOL, MAX_LENGTH } from "./constants"

export const HiddenText = ({
  title,
  maxLength = MAX_LENGTH,
}: HiddenTextProps) => {
  const { Text } = Typography
  const [isFullText, setIsFullText] = useState(false)

  const displayText = isFullText ? title : title.slice(0, maxLength)

  const toggleText = () => {
    setIsFullText(!isFullText)
  }

  return (
    <div className={styles["hidden-wrapper"]}>
      <div className={styles["hidden-inner"]}>
        <Text
          className={cn(styles["text-style"], {
            [styles["hidden-top"]]: isFullText,
          })}
        >
          {displayText}
        </Text>
        {title.length > maxLength && (
          <Button className={styles["button-style"]} onClick={toggleText}>
            {!isFullText && ELLIPSIS_SYMBOL}
          </Button>
        )}
      </div>
    </div>
  )
}

export default Text
