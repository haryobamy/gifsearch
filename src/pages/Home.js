import React, { useState, useEffect } from "react";

import { Box, Button, Container, Grid, Stack, TextField } from "@mui/material";
import GifyCard from "../components/GifyCard";

const Home = () => {
  const [allGify, setAllGify] = useState([]);

  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState(allGify);

  const getGify = async () => {
    const options = {
      method: "GET",
      redirect: "follow",
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await fetch(
      "https://api.giphy.com/v1/gifs/search?api_key=deokzgUjxm6QHQdp3H3aca1LSZcCpucc&q=sphinx&limit=28&offset=0&rating=Y&lang=en",
      options
    );
    const response = await res.text();
    const result = JSON.parse(response);
    setAllGify(result?.data);
  };

  useEffect(() => {
    getGify();
  }, []);

  const filtering = () => {
    const filteredData = allGify.filter((gify) => {
      if (search !== "") {
        return gify.title?.toLowerCase()?.includes(search?.toLowerCase());
      }
      return gify;
    });
    setFilteredData(filteredData);
  };

  useEffect(() => {
    if (search === "") {
      setFilteredData(allGify);
    }
  }, [allGify, search]);

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        pl: 12,
        pb: 8,
      }}
    >
      <Container maxWidth={false}>
        <Stack direction={{ xs: "column", sm: "row" }} spacing={3}>
          <TextField
            variant="standard"
            placeholder="search gify by title"
            onChange={(e) => {
              setSearch(e.target.value);
              filtering();
            }}
            value={search}
          />
          <Button variant="submit">Search</Button>
        </Stack>

        <Box sx={{ pt: 3 }}>
          <Grid container spacing={3}>
            {filteredData?.map((gify, i) => {
              return (
                <Grid gify="true" lg={3} md={6} xs={12} key={i}>
                  <GifyCard gify={gify} />
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
