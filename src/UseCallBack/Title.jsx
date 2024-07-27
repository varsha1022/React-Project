import React from 'react'

const Title = () => {
    console.log('Title Component');
  return (
    <div>
      <h1 className='text-4xl font-bold'>useCallback() Hook</h1>
    </div>
  )
}

// export default Title
export default React.memo(Title)
