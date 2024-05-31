import React, { useEffect, useRef, useState } from 'react';
import useQueryParams from '../hooks/useQueryParams';

export default function InputSearch() {
  const { key, updateQuery } = useQueryParams();
  const [term, setTerm] = useState(key);
  const debounceRef = useRef(null);

  useEffect(() => {
    if(term==key) return;
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }
    debounceRef.current = setTimeout(() => {
      updateQuery({ key: term });
    }, 1200);

    return () => {
      clearTimeout(debounceRef.current);
    };
  }, [term]);

  const handleInputChange = (e) => {
    setTerm(e.target.value);
  };

  const clearSearch = () => {
    setTerm('');
    updateQuery({ key: '' });
  };

  return (
    <div className='input-search-container flex m-auto justify-center items-center'>
      <input 
        type="text" 
        className='input-search min-w-15' 
        dir='rtl' 
        value={term} 
        onChange={handleInputChange} 
      />
      <span className="icon-search flex justify-center items-center">
        <img
          src={"/assets/search.png"}
          width={20}
          height={20}
          alt='icon search'
        />
      </span>
     {term? <span className="clear-search flex justify-center items-center pointer" onClick={clearSearch}>
        <img
          src={"/assets/Subtract.svg"}
          width={15}
          height={15}
          alt='clear search'
        />
      </span>:null}
    </div>
  );
}
