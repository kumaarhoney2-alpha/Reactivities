import { Box, Container, CssBaseline } from "@mui/material";
import Navbar from "./Navbar";
import { Outlet } from "react-router";

function App() {
  // local storage example
  // const [activities, setActivities] = useState<Activity[]>([]);
    
  // local storage example
  // useEffect(() => {
  //   axios.get<Activity[]>('https://localhost:5001/api/activities')
  //     .then(response => setActivities(response.data))

  //   return () => { }
  // }, [])

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
      <Navbar />
      <Container maxWidth="xl" sx={{ mt: 3 }}>
        <Outlet />
      </Container>
    </Box>
  )
}

export default App