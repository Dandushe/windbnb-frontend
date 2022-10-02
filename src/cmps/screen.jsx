import { modalType } from "../store/stay.action"
import { useDispatch, useSelector } from 'react-redux';

export const Screen = () => {
    const dispatch = useDispatch()
    const currModalType = useSelector(state => state.stayModule.currModalType)

    const onSelectModalType = (type) => {
        dispatch(modalType(type))
      }

    if (currModalType !== '')
        return <div className='main-screen' onClick={() => onSelectModalType('')}></div>
}