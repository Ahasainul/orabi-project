import React from 'react'

const List = ({className,manuName}) => {
  return (
 <li className={`list-none ${className}`}>{manuName}</li>
  )
}

export default List