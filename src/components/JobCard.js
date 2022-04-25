import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import data from "../data.json";
import { Divider, Paper } from "@mui/material";

export default function JobCard({ job }) {
  return (
    <Card
      sx={{
        maxWidth: 345,
        height: 300,
        bgcolor: "white",
        color: "black",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {job.title}
        </Typography>
        <Divider />
        <Stack direction="row" spacing={1}>
          {/* {job.skills.map((skill) => {
            <Chip label={job.skill} color="primary" />;
          })} */}
          <Chip label={job.skills.slice(0, 4).join(" ")} color="primary" />
        </Stack>

        <Typography variant="body2" color="text.secondary">
          {job.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
