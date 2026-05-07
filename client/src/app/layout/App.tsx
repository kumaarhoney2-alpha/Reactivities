import { Box, Container, CssBaseline } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
function App() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectActivity, setSelectActivity] = useState<Activity | undefined>(undefined);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    axios.get<Activity[]>('https://localhost:5001/api/activities')
      .then(response => setActivities(response.data))

    return () => { }
  }, [])

  const handleSelectActivity = (id: string) => {
    setSelectActivity(activities.find(x => x.id === id));
  }

  const handleCanceledSelectActivity = () => {
    setSelectActivity(undefined);
  }

  const handleOpenForm = (id?: string) => {
    if (id) handleSelectActivity(id);
    else handleCanceledSelectActivity();
    setEditMode(true);
  }

  const handleCloseForm = () => {
    setEditMode(false);
  }

  const handleSubmitForm = (activity: Activity) => {
    if (activity.id) {
      setActivities(activities.map(x => x.id === activity.id ? activity : x))
    } else {
      const newActivity = { ...activity,id: activities.length.toString() }
      setSelectActivity(activity);
      setActivities([...activities, newActivity])
    }
    setEditMode(false);
  }

  const handleDelete = (id : string) => {
    setActivities(activities.filter(x=>x.id!==id))
  }

  return (
    <Box sx={{ bgcolor: '#eeeeee' }}>
      <CssBaseline />
      <Navbar openForm={handleOpenForm} />
      <Container maxWidth="xl" sx={{ mt: 3 }}>
        <ActivityDashboard
          activities={activities}
          selectActivity={handleSelectActivity}
          cancelSelectActivity={handleCanceledSelectActivity}
          selectedActivity={selectActivity}
          editMode={editMode}
          openForm={handleOpenForm}
          closeForm={handleCloseForm}
          submitForm = {handleSubmitForm}
          deleteActivity={handleDelete}
        />
      </Container>
    </Box>
  )
}

export default App