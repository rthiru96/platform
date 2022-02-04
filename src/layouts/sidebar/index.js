import React from "react";
import {
  Drawer,
  Box,
  Hidden,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
} from "@material-ui/core";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ArrowDown from "@material-ui/icons/KeyboardArrowDown";
import Scrollbars from "react-custom-scrollbars";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles({
  expandedIcon: {
    minWidth: "58px",
  },
});

const RouteLinks = ({ routes = [], color, isCollapsed, ...props }) => {
  const classes = useStyles() ?? {};

  return (
    <Box component={List} paddingBottom="80px !important">
      {routes.map((prop, key) => {
        return (
          <React.Fragment key={key}>
            <div>
              <div className="m-1">
                <Box
                  component={NavLink}
                  to={prop.path}
                  style={{ color: "inherit", textDecoration: "inherit" }}
                >
                  <ListItem button key={prop.id}>
                    <ListItemIcon
                      classes={{ root: !isCollapsed && classes.expandedIcon }}
                    >
                      {typeof prop.icon === "string" ? (
                        <Box
                          component="img"
                          src={prop.icon}
                          alt={prop.icon}
                          color="var(--white)"
                        />
                      ) : (
                        <Box
                          component="img"
                          src={prop.icon}
                          alt={prop.icon}
                          color="var(--white)"
                        />
                      )}
                    </ListItemIcon>
                    {!isCollapsed && (
                      <>
                        <Box
                          component={ListItemText}
                          color="var(--white)"
                          fontWeight="500"
                          primary={prop.sidebarName}
                          disableTypography={true}
                        />
                        {props.state[prop.sidebarName] ? (
                          <ArrowDown htmlColor="white" />
                        ) : (
                          <ChevronRightIcon htmlColor="white" />
                        )}
                      </>
                    )}
                  </ListItem>
                </Box>
              </div>
            </div>
          </React.Fragment>
        );
      })}
    </Box>
  );
};

const Sidebar = ({
  routes,
  color,
  isCollapsed,
  handleDrawerToggle,
  open,
  handleDrawerClose,
}) => {
  const [data, setData] = React.useState({});
  const handleClick = (e) => () => {
    setData({ [e]: !data[e] });
  };
  return (
    <>
      <Hidden mdUp>
        <Drawer
          variant="temporary"
          anchor="left"
          open={open}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
        >
          {
            //Mobile Menu Button
            <Hidden mdUp>
              <Box
                component={IconButton}
                color="inherit"
                onClick={handleDrawerToggle}
                className="w-100 d-flex justify-content-end  align-items-center"
              >
                <MenuIcon htmlColor="white" />
              </Box>
            </Hidden>
          }

          {
            //Menu Button
            <Hidden smDown>
              <Box
                component={IconButton}
                color="inherit"
                onClick={handleDrawerClose}
                className="w-100 d-flex justify-content-end align-items-center"
              >
                <MenuIcon htmlColor="white" />
              </Box>
            </Hidden>
          }

          <RouteLinks
            routes={routes}
            color={color}
            isCollapsed={isCollapsed}
            handleClick={handleClick}
            state={data}
          />
        </Drawer>
      </Hidden>
      <Hidden smDown>
        <Box
          component={Scrollbars}
          autoHide={false}
          borderRight="solid 1px var(--gray)"
          height="100vh !important"
          width="unset !important"
          bgcolor="var(--cerulean-blue)"
          minWidth={isCollapsed ? "75px" : "260px"}
        >
          {
            <Hidden mdUp>
              <Box
                component={IconButton}
                onClick={handleDrawerToggle}
                className="w-100 d-flex justify-content-end align-items-center"
              >
                <MenuIcon htmlColor="white" />
              </Box>
            </Hidden>
          }

          {
            <Hidden smDown>
              <Box
                component={IconButton}
                onClick={handleDrawerClose}
                className="w-100 d-flex justify-content-end align-items-center"
              >
                <MenuIcon htmlColor="white" />
              </Box>
            </Hidden>
          }

          <RouteLinks
            routes={routes}
            color={color}
            isCollapsed={isCollapsed}
            handleClick={handleClick}
            state={data}
          />
        </Box>
      </Hidden>
    </>
  );
};

export default Sidebar;
