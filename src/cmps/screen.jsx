import { useDispatch, useSelector } from 'react-redux';
import { modalType } from "../store/stay.action"

export const Screen = () => {
  const dispatch = useDispatch()
  const currModalType = useSelector(state => state.stayModule.currModalType)

  const onSelectModalType = (type) => {
    dispatch(modalType(type))
  }


  return <div className={`main-screen ${currModalType !== '' ? 'on' : ''}`} onClick={() => onSelectModalType('')}></div>
}