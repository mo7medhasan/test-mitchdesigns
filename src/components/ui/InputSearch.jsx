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
    <div className=''>
      <input type="text" className='' />
    </div>
  )
}
