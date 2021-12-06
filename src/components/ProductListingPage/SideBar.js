import React, { useState } from 'react';
import { filterOptions1, filterOptions2 } from '../../DummyData/FilterOptions';
import StarRating from '../common/StarRating/StarRating';
import {
  CheckBox,
  Option,
  Options,
  Sidebar,
  SidebarOptions
} from './styledComponents';

function SideBar(props) {
  const [rating, setRating] = useState(0);

  return (
    <Sidebar>
      <Option>
        {filterOptions1.map((options) => (
          <SidebarOptions>
            <div className="filter-option-title">{options.header}</div>
            {options.options.map((d) => (
              <CheckBox>
                <input type="checkbox"></input>
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

        {filterOptions2.map((options) => (
          <SidebarOptions>
            <div className="filter-option-title">{options.header}</div>
            {options.options.map((d) => (
              <Options>{d.text}</Options>
            ))}
          </SidebarOptions>
        ))}
      </Option>
    </Sidebar>
  );
}

export default SideBar;
