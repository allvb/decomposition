import React from 'react'
import SearchTheme from './SearchTheme';
import SearchBlock from './SearchBlock';
import SearchExample from './SearchExample';

// возвращает блок поиска:
// список тем для поиска
// строку поиска
// пример запроса

function Search() {
  return (
    <div>
      <SearchTheme />
      <SearchBlock />
      <SearchExample />
    </div>
  )
}

export default Search