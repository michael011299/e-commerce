import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useState } from "react";

interface PageProps {
  setPageSize: (val: string) => void;
}

const Filtering: React.FC<PageProps> = ({ setPageSize }) => {
  const [size, setSize] = useState("20");
  const nums = ["10", "20", "40", "60", "80", "100"];

  return (
    <DropdownButton id="pagefilter" title={`Results per page: ${size}`}>
      {nums.map((num) => {
        return (
          <Dropdown.Item
            onClick={() => {
              setPageSize(num);
              setSize(num);
            }}
            key={num}
          >
            {num}
          </Dropdown.Item>
        );
      })}
    </DropdownButton>
  );
};

export default Filtering;
