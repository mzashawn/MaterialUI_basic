import React from "react";
import { Typography, Box } from "@mui/material";
import Container from "@mui/material/Container";

import PhotoAlbumOutlinedIcon from "@mui/icons-material/PhotoAlbumOutlined";
import {
  AppBar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  colors,
} from "@mui/material";

import { PhotoCamera } from "@mui/icons-material";

import { palette } from "@mui/system";
import { PhotoAlbum } from "@mui/icons-material";
import AddOne from "./AdditionalComponents/AddOne";
import { makeStyles } from "@mui/material/styles";

const App = () => {
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          {/* <PhotoCamera /> */}
          <PhotoAlbumOutlinedIcon />
          <Typography variant="h6">Photo Album</Typography>
        </Toolbar>
      </AppBar>

      <main>
        <div>
          <Container
            maxWidth="lg"
            style={{ marginTop: "100px", background: "lightblue" }}
          >
            <Typography
              align="center"
              color="paleturquoise"
              variant="h3"
              gutterBottom
              style={{ color: "red" }}
            >
              <PhotoCamera />
              <br />
              Photo album
            </Typography>
            <br />
            <Typography variant="h-6" align="center" color="black" paragraph>
              In this section, we'll create a Photo album and add some cards{" "}
            </Typography>
          </Container>
        </div>
      </main>
      <AddOne />
    </>
  );
};

export default App;
