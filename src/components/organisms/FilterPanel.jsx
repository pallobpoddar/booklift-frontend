import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PrimaryButton from "../atoms/Button";
// import CheckboxInput from "../atoms/inputs/CheckboxInput";
// import Header3 from "../atoms/labels/Header3";
import { changeBookList } from "../../redux/slices/bookSlice";
import { StyledFilterPanel, StyledFilterSection } from "./Filter.styles";
import { StyledHeader3 } from "../../App.styles";

const FilterPanel = () => {
  const dispatch = useDispatch();
  const bookCards = useSelector((state) => state.filteredBooks.bookList);
  const filterBookList = (event) => {
    let text = event.target.innerText;
    let filteredBooks;
    if (text === "Fantasy" || text === "Fiction") {
      filteredBooks = bookCards.filter((book) => book.category === text);
    } else if (text === "English" || text === "French") {
      filteredBooks = bookCards.filter((book) => book.language === text);
    }
    dispatch(changeBookList(filteredBooks));
  };

  return (
    <StyledFilterPanel>
      <StyledFilterSection>
        {/* <Header3 StyledHeader3={StyledHeader3} text="Category" /> */}
        <div>
          <PrimaryButton
            buttonStyle="filterButton"
            text="Fantasy"
            onClick={filterBookList}
          />
        </div>
        <div>
          <PrimaryButton
            buttonStyle="filterButton"
            text="Fiction"
            onClick={filterBookList}
          />
        </div>
      </StyledFilterSection>

      <StyledFilterSection>
        {/* <Header3 StyledHeader3={StyledHeader3} text="Language" /> */}
        <div>
          <PrimaryButton
            buttonStyle="filterButton"
            text="English"
            onClick={filterBookList}
          />
        </div>
        <div>
          <PrimaryButton
            buttonStyle="filterButton"
            text="French"
            onClick={filterBookList}
          />
        </div>
      </StyledFilterSection>
    </StyledFilterPanel>
  );
};

export default FilterPanel;
