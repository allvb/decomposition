import React from 'react'
import NewsItem from './NewsItem';

// возвращает блок новостей

function NewsBlock() {
  return (
    <div>
      <NewsItem />
      <NewsItem />
      <NewsItem />
      <NewsItem />
      <NewsItem />
    </div>
  )
}

export default NewsBlock