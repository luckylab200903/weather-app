import { useState } from "react";
import { options, url } from "../../api";
import { AsyncPaginate } from "react-select-async-paginate";

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  const loadOptions = (inputValue) => {
    console.log(url);
    return fetch(
      `${url}?minPopulation=1000000&namePrefix=${inputValue}`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);

        return {
          options: response.data.map((city) => {
            console.log(city.latitude, city.longitude);
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}, ${city.countryCode}`,
            };
          }),
        };
      });
  };

  const handleOnChange = (searchData) => {
    //console.log("Search Data:", searchData);
    setSearch(searchData);
    onSearchChange(searchData);
  };

  return (
    <AsyncPaginate
      placeholder="Search for city"
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  );
};

export default Search;
