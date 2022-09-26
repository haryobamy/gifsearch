import { Avatar, Card, CardHeader, CardMedia, IconButton } from "@mui/material";
import React from "react";
import { useHistory } from "react-router-dom";
import { red } from "@mui/material/colors";
import moment from "moment";

const GifyDetails = () => {
  const history = useHistory();

  const gify = history?.location?.state?.gify;
  return (
    <Card sx={{ maxWidth: 505, margin: "20px auto" }}>
      <CardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: red[500], textTransform: "capitalize" }}
            aria-label="recipe"
          >
            {gify?.title?.charAt(0)}
          </Avatar>
        }
        title={gify?.title}
        subheader={moment(gify?.import_datetime).format("ll")}
      />
      <CardMedia
        component="img"
        height="300"
        width="300"
        // image="/static/images/cards/paella.jpg"
        image={gify?.images?.preview_gif?.url}
        alt={gify?.username}
      />
    </Card>
  );
};

export default GifyDetails;
