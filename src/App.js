import { Grid, ThemeProvider, createTheme } from "@mui/material";
import React from "react";
import JobCard from "./components/JobCard";
import SearchAppBar from "./components/SearchAppBar";
import data from "./data.json";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });
function MyApp() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "background.default",
        color: "text.primary",
        borderRadius: 1,
        p: 3,
      }}
    >
      {theme.palette.mode} mode
      <IconButton
        sx={{ ml: 1 }}
        onClick={colorMode.toggleColorMode}
        color="inherit"
      >
        {theme.palette.mode === "dark" ? (
          <Brightness7Icon />
        ) : (
          <Brightness4Icon />
        )}
      </IconButton>
    </Box>
  );
}

function App() {
  const [mode, setMode] = React.useState("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );
  return (
    <div>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <MyApp />
          <SearchAppBar />
          <Grid
            container
            spacing={2}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "10px",
              padding: "5px",
            }}
          >
            {data.slice(0, 5).map((job) => (
              <Grid item xs={12} md={4} key={job.id}>
                <JobCard job={job} />
              </Grid>
            ))}
          </Grid>
          <Pagination
            count={3}
            variant="outlined"
            color="primary"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "10px",
              padding: "5px",
            }}
          />
        </ThemeProvider>
      </ColorModeContext.Provider>
    </div>
  );
}

export default App;
