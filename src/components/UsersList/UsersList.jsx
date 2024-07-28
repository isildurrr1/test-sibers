import './UsersList.css'

const UsersList = ({ data }) => {
  return (
    <div className='UsersList'>
      <ul className='UsersList-container'>
        <li className='User'>{data[0].name}</li>
        <li className='User'>{data[1].name}</li>
        <li className='User'>{data[2].name}</li>
      </ul>
    </div>
  )
}

export default UsersList;