import { useContext } from 'react'
import AlertContext from '../../context/alert/AlertContext'
import cricleImage from '../../components/layout/assets/cross2.png'

function Alert() {
    const { alert } = useContext(AlertContext)

    return alert !== null && (
        <p className='error'>
            {alert.type === 'error' && (
                <img src={cricleImage} alt="" />
            )}

            <strong className='error-msg'>{alert.msg}</strong>
        </p>
    )
}

export default Alert
