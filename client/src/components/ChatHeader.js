import { useCookies } from 'react-cookie'

const ChatHeader = () => {
  const [ cookies, setCookie, removeCookie ] = useCookies(['user'])

  const logout = () => {
      removeCookie('UserId', cookies.UserId)
      removeCookie('AuthToken', cookies.AuthToken)
      window.location.reload()
  }
  return (
    <div className="chat-container-header">
      <div className="profile">
        <div className="img-container">
          <img src=""></img>
        </div>
        <h3>Username</h3>
      </div>
      <i className="logout-icon">ⓧ</i>
    </div>
  );
};

export default ChatHeader;
