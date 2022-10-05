import { IconButton } from "@mui/material"
import CloseIcon from '@mui/icons-material/Close';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import { useState } from "react"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useRef } from "react";


export const UserMsg = () => {
  const [isOpen, setIsOpen] = useState(false)

  const alertData = useSelector(state => state.userModule.alertData)
  // const alertData = { type: 'success', txt: 'new reservation' }
  const timeoutIdRef = useRef()

  useEffect(() => {
    if (!alertData) return
    if (timeoutIdRef.current) {
      clearTimeout(timeoutIdRef.current)
      timeoutIdRef.current = null
    }
    setIsOpen(true)
    timeoutIdRef.current = setTimeout(closeAlert, 3000)
  }, [alertData])

  const closeAlert = () => {
    setIsOpen(false)
    if (timeoutIdRef.current) {
      clearTimeout(timeoutIdRef.current)
      timeoutIdRef.current = null
    }
  }

  const getAlertIcon = () => {
    switch (alertData.type) {
      case 'success':
        return <TaskAltIcon />
      case 'error':
        return <ErrorOutlineIcon />
      default:
        return <ModeCommentOutlinedIcon />
    }
  }

  if (isOpen)
    return (
      <div className={`user-msg ${alertData.type}`}>
        {getAlertIcon()}
        <p>{alertData.txt}</p>
          <CloseIcon className="close-btn" onClick={closeAlert} />
      </div>
    )
}