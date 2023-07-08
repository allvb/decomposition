import React from 'react'
import InfoCard from './InfoCard';

// возвращает нижнее содержание страницы:
// информационные карточки на разные темы

function Info() {
  return (
    <div>
      <InfoCard />
      <InfoCard />
      <InfoCard />
      <InfoCard />
      <InfoCard />
      <InfoCard />
    </div>
  )
}

export default Info