// Desc: Gardens view
// Importing React
import { useState, useEffect } from "react";

// Material-UI
import { Container } from "@mui/material";

// Components
import GettingStarted from "../components/gardens/GettingStarted";
import HeroBanner from "../components/gardens/HeroBanner";
import GardenWrapper from "../components/gardens/GardenWrapper";

//Hooks
import { AddGarden, AddGardrenGroup } from "../imports";

// UseAuth
import { useAuth, useGarden } from "../contextProviders";

// Garden Functions
import { useGardenFunctions } from "../components/gardens/utils/useGardenFunctions";

const Gardens = () => {
  const { user, token } = useAuth();
  const {
    gardens,
    setGardens,
    gardenGroups,
    setGardenGroups,
    gardenPlants,
    setGardenPlants,
  } = useGarden();
  const { getGardens, getGardenGroups, getGardenPlants } = useGardenFunctions();

  const [ShowAddGardenModal, setShowAddGardenModal] = useState(false);
  const [ShowAddGardenGroupModal, setShowAddGardenGroupModal] = useState(false);

  // Fetch the garden data from the API
  useEffect(() => {
    Promise.all([getGardens(), getGardenGroups(), getGardenPlants()])
      .then(([gardenData, gardenGroupData, gardenPlantData]) => {
        setGardens(gardenData);
        setGardenGroups(gardenGroupData);
        setGardenPlants(gardenPlantData);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [user.id, token]);

  return (
    <Container
      sx={{
        pt: 4,
        pb: 4,
      }}
    >
      {gardens && gardens.length > 0 ? (
        <GardenWrapper
          gardenData={gardens}
          gardenGroups={gardenGroups}
          gardenPlants={gardenPlants}
          handleAddGarden={setShowAddGardenModal}
          handleAddGroup={setShowAddGardenGroupModal}
          setGardens={setGardens}
          setGardenPlants={setGardenPlants}
        />
      ) : (
        <>
          {" "}
          <HeroBanner />
          <GettingStarted setDisplayModal={setShowAddGardenModal} />
        </>
      )}

      {/* Add Garden Modal */}
      <AddGarden
        show={ShowAddGardenModal}
        handleClose={setShowAddGardenModal}
      />

      {/* Add Garden Group Modal */}
      {ShowAddGardenGroupModal && (
        <AddGardrenGroup
          gardenData={gardens}
          show={ShowAddGardenGroupModal}
          handleClose={setShowAddGardenGroupModal}
        />
      )}
    </Container>
  );
};

export default Gardens;
