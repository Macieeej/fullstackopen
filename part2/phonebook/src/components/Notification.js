const Notification = ({ message }) => {
  if (message === null) {
    return null
  }

  return (
    <div className='conf'>
      {message}
    </div>
  )
}

export default Notification