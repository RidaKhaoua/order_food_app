import { useAppSelectore } from '@store/hooks';
import { Navigate } from 'react-router-dom';


type TPageProtected = {
    children: React.ReactNode
}

function PageProtected({children}: TPageProtected) {
    const accessToken = useAppSelectore(state => state.auth.accessToken);
  return (
    <>
        {accessToken ? children : <Navigate to={`${import.meta.env.BASE_URL}/?message=Login_required`}/>}
    </>
  )
}

export default PageProtected