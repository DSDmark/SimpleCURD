import React, { useState, useEffect } from 'react'
import { IconButton, Input, InputAdornment } from '@mui/material'
import SearchIcon from '@mui/icons-material/SearchRounded'
import { styled } from '@mui/material/styles'
import { useDispatch } from "react-redux"
import { findByTitle } from "../../slices/todo"
import { useCallback } from 'react'

const Seacrh = styled(Input)(() => ({
  width: '100%',
}))

const SearchBar = () => {
  const [searchTitle, setSearch] = useState("");
  const dispatch = useDispatch()

  const hendleSearch = useCallback(() => {
    dispatch(findByTitle({ title: searchTitle.toString() }));
  }, [dispatch, searchTitle])

  useEffect(() => {
    if (searchTitle === "") {
      setTimeout(() => {
        hendleSearch()
      }, 500)
    }
  }, [hendleSearch, searchTitle])

  return (
    <>
      <Seacrh type="text" onChange={(e) => setSearch(e.target.value)} value={searchTitle} placeholder="Seacrh Your Todo... 🔎"
        endAdornment={
          <InputAdornment position="end">
            <IconButton onClick={hendleSearch}>
              <SearchIcon color="primary" />
            </IconButton>
          </InputAdornment>
        }
      />
    </>
  )
}

export default SearchBar
