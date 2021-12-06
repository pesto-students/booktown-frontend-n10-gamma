import React, { useState } from 'react';
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

function SideBar(props) {
  const [rating, setRating] = useState(0);

  const onChangeCheckBox = (e, d) => {
    console.log(e.target.value);
    console.log(d);
  };

  return (
    <Sidebar>
      <Button text="Filter here" />
      <Option>
        {filterOptions1.map((options, index) => (
          <SidebarOptions key={index}>
            <div className="filter-option-title">{options.header}</div>
            {options.options.map((d, index) => (
              <CheckBox key={index}>
                <input
                  onClick={(e) => onChangeCheckBox(e, d.text)}
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
