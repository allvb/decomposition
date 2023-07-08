import React from 'react'
import Themes from './Themes';
import Date from './Date';
import NewsBlock from './NewsBlock';
import Quotes from './Quotes';
import SideBar from './SideBar';

// Возвращает верхнюю часть старницы

// темы новостей, дату и время
// блок новостей
// котировки

// боковую колонку

function Head() {
  return (
    <div>
      <div>
        <div>
          <Themes />
          <Date />
        </div>
        <NewsBlock />
        <Quotes />
      </div>
      <SideBar />
    </div>
  )
}

export default Head
