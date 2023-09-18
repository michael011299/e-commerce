import Pagination from "react-bootstrap/Pagination";
import { useState } from "react";

interface PageProps {
  setCurrentPage: (val: string) => void;
  currentPage: any;
}

const PageNums: React.FC<PageProps> = ({ setCurrentPage }) => {
  const [page, setPage] = useState();
  const nums = [];

  for (let i = 1; i <= 6; i++) {
    nums.push(i);
  }

  return (
    <div id="pagenums">
      <Pagination id="pagination">
        {nums.map((num: any) => {
          return (
            <Pagination.Item
              id="pageitem"
              key={num}
              onClick={() => {
                setPage(num);
                setCurrentPage(num);
                window.scrollTo(0, 0);
              }}
            >
              {num}
            </Pagination.Item>
          );
        })}
      </Pagination>
    </div>
  );
};

export default PageNums;
