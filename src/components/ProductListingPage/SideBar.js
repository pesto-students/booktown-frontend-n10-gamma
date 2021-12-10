import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { filterOptions1 } from '../../config/appConfig';
import { PRODUCT_LISTING } from '../../router/types';
import { genrateQueryString } from '../../utility/applicationUtility';
import { Button } from '../common';
import {
  CheckBox,
  Option,
  Options,
  Sidebar,
  SidebarOptions
} from './styledComponents';

function SideBar() {
  const history = useHistory();

  const [filterState, setFilterState] = useState({
    language: { English: false, Hindi: false, Marathi: false, Tamil: false },
    price: {
      min: 0,
      max: 0
    },
    format: { Audio: false, Book: false, 'E-Book': false },
    condition: { Old: false, New: false }
  });

  const handleOnChange = (e, stateProp) => {
    const { name, checked } = e.target;
    setFilterState((prevState) => ({
      ...prevState,
      [stateProp]: {
        ...prevState[stateProp],
        [name]: checked
      }
    }));
  };

  const handleFilter = () => {
    const payload = {
      condition: __getFilterValue(filterState.condition),
      language: __getFilterValue(filterState.language),
      format: __getFilterValue(filterState.format)
    };
    const query = genrateQueryString(payload);
    console.log(payload);
    history.push({
      pathname: PRODUCT_LISTING,
      search: `${query ? '?' + query : ''}`,
      state: {
        update: true
      }
    });
  };
  const __getFilterValue = (obj) => {
    let value = '';
    Object.keys(obj).forEach((key) => {
      if (obj[key]) {
        value += key + ',';
      }
    });
    return value;
  };
  return (
    <Sidebar>
      <Option>
        {filterOptions1.map((options, index) => (
          <SidebarOptions key={index}>
            <div className="filter-option-title">{options.header}</div>
            {options.options.map((d, index) => (
              <CheckBox key={index}>
                <input
                  name={d.text}
                  onClick={(e) =>
                    handleOnChange(e, options.header.toString().toLowerCase())
                  }
                  type="checkbox"
                />
                <span>
                  <Options>{d.text}</Options>
                </span>
              </CheckBox>
            ))}
          </SidebarOptions>
        ))}
      </Option>
      <Button
        title="Apply Filter"
        className="side-bar-filter__btn"
        text="Apply Filter"
        icon="filter"
        round={1}
        onClick={handleFilter}
      />
    </Sidebar>
  );
}
export default SideBar;
