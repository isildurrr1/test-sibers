import './Chat.css';

const Chat = () => {
  const data = [
    {
      author: 'Kate',
      message: 'Hello!',
      time: '16:00',
    },
    {
      author: 'Kate',
      message: 'How are you?!',
      time: '16:01',
    },
    {
      author: 'Max',
      message: 'Hello!, fine!',
      time: '16:10',
    }
  ]
  return (
    <div className='Chat'>
    </div>
  )
}

export default Chat;