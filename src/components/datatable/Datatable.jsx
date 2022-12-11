import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./datatable.scss";
import { Link, useLocation } from "react-router-dom";
import { userRows, userColumns } from "../../datatablesource";
import useFetch from "../../hooks/userFetch";
import axios from "axios";

export default function Datatable({ columns }) {
  // static data
  // const [data, setData] = useState(userRows);

  // Dynamic data
  const BASE_URL = "http://localhost:8000/api/";
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  const { data, loading, error } = useFetch(`${BASE_URL}${path}`);
  const [list, setList] = useState();

  useEffect(() => {
    setList(data);
  }, [data]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${BASE_URL}${path}/${id}`);
      setList(list.filter((item) => item._id !== id));
    } catch (err) {}
  };
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row._id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="dataTableTitle">
        {path}
        <Link
          to={`/${path}/new`}
          style={{ textDecoration: "none" }}
          className="link"
        >
          Add New
        </Link>
      </div>
      {list && (
        <DataGrid
          className="datagrid"
          rows={list}
          columns={columns.concat(actionColumn)}
          pageSize={9}
          rowsPerPageOptions={[9]}
          checkboxSelection
          getRowId={(rows) => rows._id}
        />
      )}
    </div>
  );
}
