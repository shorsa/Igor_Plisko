
import { Dispatch, SetStateAction, useState } from "react";

export const usePagination = <T>(
  data: T[],
  initialSize = 10,
  initialPage = 1
): [
    T[],
    number,
    Dispatch<SetStateAction<number>>,
    number,
    Dispatch<SetStateAction<number>>
  ] => {
  const [pageSize, setPageSize] = useState(initialSize);
  const [currentPage, setCurrentPage] = useState(initialPage);

  const paginatedData = data.slice(
    (currentPage - 1) * pageSize,
    (currentPage - 1) * pageSize + pageSize
  ) as T[];

  return [paginatedData, currentPage, setCurrentPage, pageSize, setPageSize];
};
