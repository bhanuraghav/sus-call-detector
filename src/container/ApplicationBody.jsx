import React, {
  useState,
  useRef,
  useEffect,
  useMemo,
  useCallback,
} from "react";
import { AgGridReact } from "ag-grid-react"; // the AG Grid React Component
import { Button, TextField } from "@mui/material";
import "ag-grid-community/styles/ag-grid.css"; // Core grid CSS, always needed
import "ag-grid-community/styles/ag-theme-alpine.css"; // Optional theme CSS
import "./ApplicationBody.scss";

export default function ApplicationBody(props) {
  const [searchText, setSearchText] = useState("");
  const [rowData, setRowData] = useState([]);
  const [showGrid, setShowGrid] = useState(false);

  // Each Column Definition results in one Column.
  const [columnDefs, setColumnDefs] = useState([
    { field: "make", filter: true },
    { field: "model", filter: true },
    { field: "price" },
  ]);

  // DefaultColDef sets props common to all Columns
  const defaultColDef = useMemo(() => ({
    sortable: true,
  }));
  const handleOnChangeTextField = (e) => {
    setSearchText(e.target.value);
  };

  const onSearchButtonClick = () => {
    fetch("http://localhost:9001/sus/body")
      .then((res) => res.json())
      .then((data) => setRowData(data));

    setShowGrid(true);
  };

  const renderGrid = () => {
    if (showGrid) {
    } else {
      return null;
    }
  };

  return (
    <div className="applicationBody-container flex-fill">
      <div>
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          onChange={handleOnChangeTextField}
        />
        <Button variant="contained" onClick={onSearchButtonClick}>
          Search
        </Button>
      </div>
      {showGrid ? (
        <div className="ag-theme-alpine" style={{ height: 500 }}>
          <AgGridReact
            rowData={rowData} // Row Data for Rows
            columnDefs={columnDefs} // Column Defs for Columns
            defaultColDef={defaultColDef} // Default Column Properties
            animateRows={true} // Optional - set to 'true' to have rows animate when sorted
          />
        </div>
      ) : null}
    </div>
  );
}
