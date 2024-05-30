import React, { useEffect, useRef, useState } from 'react'

export default function InputSearch() {
    // const [result, setResult] = useState([]);
    // const termUseRef = useRef(); 
  
    // useEffect(() => {
    //   termUseRef.current = term
   
    // })
  
    // const prevTerm = termUseRef.current;
  
  
    // useEffect(() => {
    //   const search = async () => {
    //     const respond = await fetch('https://en.wikipedia.org/w/api.php', {
    //       params: {
    //         action: 'query',
    //         list: 'search',
    //         origin: '*',
    //         format: 'json',
    //         srsearch: term,
    //       },
    //     });
    //     setResult(respond.data.query.search);
    //   };
  
    //   if (!result.length) {
    //     if (term) {
    //       search();
    //     }
  
    //   } else if(term !== prevTerm) {
    //     const debounceSearch = setTimeout(() => {
    //       if (term) {
    //         search();
    //       }
    //     }, 1200);
  
    //     return () => {
    //       clearTimeout(debounceSearch);
    //     };
    //   }
    // }, [term, result.length, prevTerm]);
  return (
    <div className='input-search-container  flex m-auto justify-center items-center'>
      <input type="text" className='input-search min-w-15 ' dir='rtl' />
      <span className="icon-search  flex  justify-center items-center">
              <img
                src={"/assets/search.png"}
                width={20}
                height={20}
                alt='icon search'
              />
            </span>
            <span className="clear-search  flex  justify-center items-center">
              <img
                src={"/assets/Subtract.svg"}
                width={15}
                height={15}
                alt='clear search'
              />
            </span>
    </div>
  )
}
