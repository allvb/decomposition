import React from 'react'
import QuotesItem from './QuotesItem';

// возвращает блок котировок

function Quotes() {
  return (
    <div>
      <QuotesItem />
      <QuotesItem />
      <QuotesItem />
    </div>
  )
}

export default Quotes