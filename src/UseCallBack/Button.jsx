import React from 'react'

const Button = ({handleFunction, children}) => {
  // console.log(handleFunction);
  console.log('rendered -', {children} );
  return (
    <div>
      <button onClick={handleFunction} className='border-2 p-2 rounded'>{children}</button>
    </div>
  )
}

// export default Button
export default React.memo(Button);
