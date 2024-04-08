import { useParams, Link, useLocation } from "react-router-dom";
import {
  Container,
  Typography,
  Box,
  Breadcrumbs,
  useTheme,
} from "@mui/material";

// Import Icons
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import HomeIcon from "@mui/icons-material/Home";
import SensorsIcon from "@mui/icons-material/Sensors";

import { getIcon } from "../components/sensorData/util/getIcon";

const SensorData = () => {
  const theme = useTheme();
  const location = useLocation();
  const { sensor } = useParams();

  //Get sensor From Location data
  // const sensorData = location.state.sensorData;
  const SensorIcon = getIcon(location.state.sensor);

  return (
    <Container maxWidth={"none"}>
      {/* BreadCrumb Navigation Section*/}
      <Box
        pt={4}
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        {/* BreadCrumbs*/}
        <div
          style={{
            backgroundColor: theme.palette.background.lightGrey,
            padding: "8px",
            width: "fit-content",
          }}
        >
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Link
              color="inherit"
              to="/"
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <HomeIcon fontSize="inherit" sx={{ mr: 1 }} />
              <Typography
                color="text.cardTitle"
                sx={{
                  fontSize: { xs: "0.8rem", sm: "1rem" },
                }}
              >
                Home
              </Typography>
            </Link>

            <Link
              color="inherit"
              to="/sensors"
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <SensorsIcon fontSize="inherit" sx={{ mr: 1 }} />
              <Typography
                color="text.cardTitle"
                sx={{
                  fontSize: { xs: "0.8rem", sm: "1rem" },
                }}
              >
                Sensor Dashboard
              </Typography>
            </Link>

            <Typography
              color="primary.secondary"
              sx={{
                display: "flex",
                alignItems: "center",
                fontWeight: "bold",
                fontSize: { xs: "0.8rem", sm: "1rem" },
              }}
            >
              <SensorIcon fontSize="inherit" sx={{ mr: 1 }} />
              {sensor}
            </Typography>
          </Breadcrumbs>
        </div>

        {/* Arrow For BreadCrumbs*/}
        <div
          style={{
            width: "0",
            height: "0",
            borderTop: "20px solid transparent",
            borderBottom: "20px solid transparent",
            borderLeft: "20px solid " + theme.palette.background.lightGrey,
          }}
        />
      </Box>
    </Container>
  );
};

export default SensorData;
