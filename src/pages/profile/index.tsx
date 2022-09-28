import { useRecoilValue } from 'recoil'
import { nicknameState } from '../../store/user'

const Profile = () => {
  const nickname = useRecoilValue(nicknameState)
  return (
    <div>
      welcome, {nickname}
      <button className='ml-12px' onClick={() => history.back()}>back</button>
    </div>
  )
}

export default Profile
