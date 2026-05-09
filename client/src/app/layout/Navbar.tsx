import { Group } from "@mui/icons-material"
import { Box, AppBar, Toolbar, Typography, Container, MenuItem, MenuList } from "@mui/material";
import { NavLink } from "react-router";
import MenuItemLink from "../shared/component/MenuItemLink";

export default function Navbar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{
                backgroundImage: 'linear-gradiant(135deg, #182a73 0%, #218aae 69%, #20a7ac 89%)'
            }}>
                <Container maxWidth='xl'>
                    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Box>
                            <MenuList>
                                <MenuItem component={NavLink} to='/' sx={{ display: 'flex', gap: 2 }}>
                                    <Group />
                                    <Typography variant="h4">Reactivities</Typography>
                                </MenuItem>
                            </MenuList>
                        </Box>
                        <Box>
                            <MenuList sx={{ display: 'flex' }}>
                                <MenuItemLink to='/activities'>Activities</MenuItemLink>
                                <MenuItemLink to='/createActivity'>Create Activity</MenuItemLink>
                            </MenuList>
                        </Box>
                        <MenuList>
                            <MenuItem>
                                User Menu
                            </MenuItem>
                        </MenuList>
                    </Toolbar>
                </Container>

            </AppBar>
        </Box>
    )
}
