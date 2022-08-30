import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  return (
    <Paper
      component="form"
      sx={{
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        pl: 2,

        boxShadow: "none",
        mr: { sm: 5 },
      }}
      onSubmit={() => {}}
    >
      <input
        className="search-bar"
        placeholder="Search.."
        value=""
        onChange={() => {}}
      ></input>
      <IconButton type="submit" sx={{padding:"7px" ,color:'pink'}}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
