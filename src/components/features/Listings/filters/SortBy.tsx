import { useState } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
const sort = require("../../../../constants/sorting.json");

type Props = {
  setSort: (val: string) => void;
  setOrder: (val: string) => void;
};

const SortBy: React.FC<Props> = ({ setSort, setOrder }) => {
  const [localSort, setLocalSort] = useState("");
  const [localOrder, setLocalOrder] = useState("");

  return (
    <>
      <DropdownButton id="pagefilter" title={`Sort By: ${localSort}`}>
        {sort.sorting.map((i: any) => {
          return (
            <Dropdown.Item
              onClick={() => {
                setSort(`${Object.values(i)}`);
                setLocalSort(`${Object.keys(i)}`);
              }}
              key={`${Object.values(i)}`}
            >
              {Object.keys(i)}
            </Dropdown.Item>
          );
        })}
      </DropdownButton>
      <DropdownButton id="pagefilter" title={`Order: ${localOrder}`}>
        <Dropdown.Item
          onClick={() => {
            setOrder("asc");
            setLocalOrder("Low to High");
          }}
          key={`asc`}
        >
          Ascending
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            setOrder("desc");
            setLocalOrder("High to Low");
          }}
          key={`desc`}
        >
          Descending
        </Dropdown.Item>
      </DropdownButton>
    </>
  );
};

export default SortBy;
