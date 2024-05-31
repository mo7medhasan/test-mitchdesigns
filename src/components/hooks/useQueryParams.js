import { useSearchParams } from 'react-router-dom';

const useQueryParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const getQueryParam = (param, defaultValue) => {
    return searchParams.get(param) || defaultValue;
  };

  const limit = getQueryParam('limit', 12);
  const category = getQueryParam('category', 'all');
  const sort = getQueryParam('sort', 'desc');
  const key = getQueryParam('key', '');

  const updateQuery = (newQuery) => {
    setSearchParams((prevParams) => {
      const newParams = new URLSearchParams(prevParams);
      Object.entries(newQuery).forEach(([key, value]) => {
        newParams.set(key, value);
      });
      return newParams;
    });
  };

  return {
    limit,
    category,
    sort,
    key,
    updateQuery,
  };
};

export default useQueryParams;