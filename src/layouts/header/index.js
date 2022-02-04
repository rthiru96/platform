import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import Badge from "@material-ui/core/Badge";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { Box, IconButton, Avatar, Tooltip } from "@material-ui/core";
import logoImg from "../../asserts/Group.png";
import ProfileImg from "../../asserts/Picture.png";
import Popover from "@material-ui/core/Popover";
import { Card, Grid } from "@material-ui/core";
import { notification } from "./utils";
import ListCard from "../../global/list-card/list-card";


function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(null);

  const handleClick = (event) => {
    setOpen(!open);
    setAnchorEl(event.currentTarget);
  };

  const id = open ? 'simple-popover' : undefined;

  return (
    <AppBar elevation={0} position="fixed">
      <Box component={Toolbar} bgcolor="var(--toolbar)">
        {
          //Logo
          <Box padding="10px" width="500px">
            <a href="#/">
              <Box component="img" width="200px" src={logoImg} alt="PLATFORM" />
            </a>
          </Box>
        }
        {
          <Box
            component="div"
            display="flex"
            flexDirection="row"
            bgcolor="var(--body)"
            width="640px"
            padding="6px"
            borderRadius="13px"
          >
            <InputBase placeholder="Search…" />
            <div className="w-100 d-flex justify-content-end">
              <SearchIcon htmlColor="var(--white)" />
            </div>
          </Box>
        }

        {
          //Avatar
          <div className="w-100 d-flex justify-content-end">

<Tooltip title="Notification">
            <Box component={IconButton} bgcolor="var(--cerulean-blue)" onClick={handleClick}>
              <Badge color="secondary">
                <NotificationsIcon />
              </Badge>
              <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClick}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
              >
                <Grid container>
                  <Grid item xs={12} lg={12}>
                    {notification?.map((data) => {
                      return (
                        <Card key={data.id} className="p-3 m-2">
                          <ListCard item={data} />
                        </Card>
                      );
                    })}
                  </Grid>
                </Grid>

              </Popover>
            </Box>
        </Tooltip>


            {
              <Tooltip title="Mail">
                <Box component={IconButton} bgcolor="var(--cerulean-blue)">
                <Badge badgeContent={0} color="secondary">
                  <MailIcon />
                </Badge>
              </Box>
              </Tooltip>
              
            }

            {
              <IconButton
                aria-owns="menu-appbar"
                aria-haspopup="true"
                color="inherit"
              >
                <Avatar src={ProfileImg} />
              </IconButton>
            }
          </div>
        }
      </Box>
    </AppBar>
  );
}

export default Header;
