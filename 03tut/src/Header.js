

const Header = ({request, USERS_URL}) => {

   return (
      <header className="header">
         <div onClick={() => request(USERS_URL)} className="users">
            <p>users</p>
         </div>
         <div className="posts">
            <p>posts</p>
         </div>
         <div className="comments">
            <p>comments</p>
         </div>
      </header>
  )
}

export default Header
