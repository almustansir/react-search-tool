import "./App.css";
import {
  AddComp,
  FilterComp,
  ListComp,
  SearchSortComp,
  TotalAmountComp,
} from "./compnents";

function App() {
  return (
    <div>
      <h3>Personal Expense Tracker</h3>
      <hr />
      <div className="main">
        <TotalAmountComp />
        <FilterComp />
        <SearchSortComp />
        <AddComp />
        <ListComp />
      </div>
    </div>
  );
}

export default App;
