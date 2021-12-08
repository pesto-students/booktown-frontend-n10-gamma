import React, { useEffect, useState } from 'react';
import { filterOptions1, filterOptions2 } from '../../DummyData/FilterOptions';
import StarRating from '../common/StarRating/StarRating';
import { Button } from '../common';
import {
  CheckBox,
  Option,
  Options,
  Sidebar,
  SidebarOptions
} from './styledComponents';
import { useHistory } from 'react-router-dom';
import { PRODUCT_LISTING } from '../../router/types';

function SideBar(props) {
  const history = useHistory();
  const [rating, setRating] = useState(0);

  const [filterState, setFilterState] = useState({
    Language: { English: false, Hindi: false, Marathi: false, Tamil: false },
    Price: {
      min: 0,
      max: 0
    },
    Format: { Audio: false, Book: false, EBook: false },
    Condition: { Old: false, New: false }
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

  useEffect(() => {
    console.log(filterState);
  });

  const handleFilter = () => {
    history.push({
      pathname: PRODUCT_LISTING,
      search:
        '?Format=[Audio]&Language=[Hindi,Tamil]&Price=[100,400]&Condition=[New,Old]',
      state: {
        // location state
        update: true
      }
    });
  };

  // const handleOnChange = (e, header, option) => {
  //   switch (header) {
  //     case 'Language':
  //       setLanguage(option);
  //   }
  // };

  return (
    <Sidebar>
      <Button text="Filter here" onClick={handleFilter} />
      <Option>
        {filterOptions1.map((options, index) => (
          <SidebarOptions key={index}>
            <div className="filter-option-title">{options.header}</div>
            {options.options.map((d, index) => (
              <CheckBox key={index}>
                <input
                  name={d.text}
                  onClick={(e) => handleOnChange(e, options.header)}
                  type="checkbox"
                />
                <span>
                  <Options>{d.text}</Options>
                </span>
              </CheckBox>
            ))}
          </SidebarOptions>
        ))}

        <SidebarOptions>
          <div className="filter-option-title">Customer Review</div>
          <StarRating rating={rating} onRating={(rate) => setRating(rate)} />
        </SidebarOptions>

        {filterOptions2.map((options, index) => (
          <SidebarOptions key={index}>
            <div className="filter-option-title">{options.header}</div>
            {options.options.map((d, index) => (
              <Options key={index}>{d.text}</Options>
            ))}
          </SidebarOptions>
        ))}
      </Option>
    </Sidebar>
  );
}

export default SideBar;
