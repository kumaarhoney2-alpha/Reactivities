import { Group } from "@mui/icons-material"
import { Box, AppBar, Toolbar, Typography, Container, MenuItem, Button, MenuList } from "@mui/material";

type props = {
    openForm: () => void;
     
}

export default function Navbar({openForm}:props) {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{
                backgroundImage: 'linear-gradiant(135deg, #182a73 0%, #218aae 69%, #20a7ac 89%)'
            }}>
                <Container maxWidth='xl'>
                    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Box>
                            <MenuList>
                                <MenuItem sx={{ display: 'flex', gap: 2 }}>
                                    <Group />
                                    <Typography variant="h4">Reactivities</Typography>
                                </MenuItem>
                            </MenuList>
                        </Box>
                        <Box>
                            <MenuList sx={{ display: 'flex' }}>
                                <MenuItem sx={{ fontSize: '1.2rem', textTransform: 'uppercase', fontWeight: 'bold' }}>Activities</MenuItem>
                                <MenuItem sx={{ fontSize: '1.2rem', textTransform: 'uppercase', fontWeight: 'bold' }}>About</MenuItem>
                                <MenuItem sx={{ fontSize: '1.2rem', textTransform: 'uppercase', fontWeight: 'bold' }}>Contact</MenuItem>
                            </MenuList>
                        </Box>
                        <Button onClick={openForm} size="large" variant="contained" color="warning">Create Activity</Button>
                    </Toolbar>
                </Container>

            </AppBar>
        </Box>
    )
}
