import React from 'react'

type Props = {}

const Topbar = (props: Props) => {
  return (
    <div className='flex flex-1 flex-col bg-red-300 min-h-22 max-h-26 '>
        <div className='bg-red-500 min-h-11'>Topbar</div>
        <div className=' flex flex-1 flex-row justify-between px-3'>
            <div>1</div>
            <div>2</div>
            <div>3</div>

        </div>
    </div>
  )
}

export default Topbar