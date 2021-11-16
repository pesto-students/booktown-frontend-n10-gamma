const filterOptions1 = [
  {
    header: "Language",
    options: [
      { text: "English ", id: 1 },
      { text: " Hindi", id: 2 },
      { text: "Marathi", id: 3 },
      { text: "Tamil", id: 4 },
    ],
  },
  {
    header: "Condition",
    options: [
      { text: "New ", id: 5 },
      { text: " Old", id: 6 },
    ],
  },
  {
    header: "Format",
    options: [
      { text: "Audio ", id: 7 },
      { text: " Hard Copy", id: 8 },
      { text: "E-Book", id: 9 },
    ],
  },
];

const filterOptions2 = [
  {
    header: "Price - Range",
    options: [
      { text: "Under $200", id: 10 },
      { text: "$200-$400", id: 11 },
      { text: "$400-$600", id: 12 },
      { text: "Above $600", id: 13 },
    ],
  },
];

export { filterOptions1, filterOptions2 };
