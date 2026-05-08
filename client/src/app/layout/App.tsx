import { Box, Container, CssBaseline, Typography } from "@mui/material";
import { useState } from "react";
import Navbar from "./Navbar";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import { useActivities } from "../../lib/hooks/useActivities";


function App() {
  // local storage example
  // const [activities, setActivities] = useState<Activity[]>([]);
  const [selectActivity, setSelectActivity] = useState<Activity | undefined>(undefined);
  const [editMode, setEditMode] = useState(false);
  const {activities, isPending } = useActivities();

  
  // local storage example
  // useEffect(() => {
  //   axios.get<Activity[]>('https://localhost:5001/api/activities')
  //     .then(response => setActivities(response.data))

  //   return () => { }
  // }, [])

  const handleSelectActivity = (id: string) => {
    setSelectActivity(activities!.find(x => x.id === id));
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

  // const handleSubmitForm = (activity: Activity) => {
  //   // if (activity.id) {
  //   //   setActivities(activities.map(x => x.id === activity.id ? activity : x))
  //   // } else {
  //   //   const newActivity = { ...activity,id: activities.length.toString() }
  //   //   setSelectActivity(activity);
  //   //   setActivities([...activities, newActivity])
  //   // }
  //   console.log(activity)
  //   setEditMode(false);
  // }

  // const handleDelete = (id: string) => {
  //   // setActivities(activities.filter(x=>x.id!==id))
  //   console.log(id)
  // }

  return (
    <Box sx={{ bgcolor: '#eeeeee', minHeight: '100vh' }}>
      <CssBaseline />
      <Navbar openForm={handleOpenForm} />
      <Container maxWidth="xl" sx={{ mt: 3 }}>
        {!activities || isPending ? (
          <Typography>Loading...</Typography>
        ) : (
          <ActivityDashboard
            activities={activities}
            selectActivity={handleSelectActivity}
            cancelSelectActivity={handleCanceledSelectActivity}
            selectedActivity={selectActivity}
            editMode={editMode}
            openForm={handleOpenForm}
            closeForm={handleCloseForm}
            // submitForm={handleSubmitForm}
            // deleteActivity={handleDelete}
          />
        )}

      </Container>
    </Box>
  )
}

export default App