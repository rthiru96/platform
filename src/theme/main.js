import { createTheme } from '@material-ui/core/styles';

export const mainTheme = createTheme({
  palette: {
    primary: {
      main: "#5492ab",
    },
    secondary: {
      main: "#009dde",
    },
  },
  overrides: {
    MuiFormHelperText: {
      contained: {
        marginLeft: 0,
      },
    },
    MuiTableRow: {
      head: {
        height: "30px",
        backgroundColor: "var(--white)",
      },
      root: {
        height: "30px",
      },
    },
    MuiDialog: {
      paperWidthSm: {
        minHeight: "234px",
      },
      paperFullScreen: {
        background: "transparent",
      },
      paper: {
        margin: "8px",
      },
    },
    MuiDialogTitle: {
      root: {
        textTransform: "capitalize",
        background: "var(--white)",
        padding: "12px 20px",
        color: "var(--theme)",
      },
    },
    MuiPaper: {
      rounded: {
        borderRadius: "3px",
      },
      elevation1: {
        boxShadow:
          "rgb(0 0 0 / 12%) 0px 1px 2px, rgb(0 0 0 / 5%) 0px 0px 0px 1px",
      },
    },
    MuiDialogActions: {
      root: {
        display: "flex",
        justifyContent: "center",
        padding: "15px 24px",
        borderTop: "solid 1px var(--gray)",

        "@media (max-width:456px)": {
          padding: "4px",
        },
      },
    },
    MuiDialogContent: {
      root: {
        padding: "15px 24px",
        display: "flex",
        flexDirection: "column",
        minHeight: "120px",

        justifyContent: "center",
        alignItems: "center",

        "@media (max-width:456px)": {
          padding: "4px",
        },
      },
    },
    MuiIconButton: {
      root: {
        padding: "0px",
        "&:hover": {
          backgroundColor: "none",
        },
      },
      label: {
        color: "#b3aa9f",
      },
      edgeEnd: {
        marginRight: "0px",
      },
    },
    MuiAccordionSummary: {
      expandIcon: {
        padding: "3px",
        color: "white",
      },
      root: {
        padding: "0px 8px",
        minHeight: "20px",
        margin: "0px",
        background: "var(--white)",
        color: "var(--theme)",
        fontWeight: 600,

        "&.light": {
          background: "white",
          color: "black",
        },

        "&$expanded": {
          minHeight: "20px",
        },
      },
      content: {
        margin: "0px",
        "&$expanded": {
          margin: "0px",
        },
      },
    },
    MuiAccordionDetails: {
      root: {
        padding: "0px",
      },
    },
    MuiCardHeader: {
      root: {
        fontSize: "15px",
        backgroundColor: "var(--white)",
        color: "var(--theme)",
        padding: "6px",
      },
    },
    MuiCardContent: {
      root: {
        padding: "2px",
        fontWeight: "600",

        "&:last-child": {
          paddingBottom: "unset",
        },
      },
    },
    MuiTableCell: {
      root: {
        borderBottom: "1.5px solid rgba(224, 224, 224, 1)",
      },
      head: {
        position: "sticky",
        top: "0px",
        backgroundColor: "var(--white)",
        zIndex: 100,
      },
      stickyHeader: {
        backgroundColor: "#FFFFFF",
      },
    },
    MuiFab: {
      root: {
        boxShadow: "unset",
      },
      sizeSmall: {
        width: "25px",
        height: "25px",
        minHeight: "20px",
      },
    },
    MuiSelect: {
      selectMenu: {
        minWidth: "90px",
        display: "flex",
        textTransform: "capitalize",
      },
    },
    MuiNativeSelect: {
      outlined: { paddingLeft: "5px" },
    },
    MuiDialogContentText: {
      root: {
        marginBottom: "0px",
      },
    },
    //Form Labelling Themeing to avoid div wrapper usage
    //https://github.com/hopetechnik/element_ui_fleet/pull/289#discussion_r569208960
    MuiFormControl: {
      root: {
        marginTop: "30px",
        marginBottom: "10px",
      },
    },
    MuiInputLabel: {
      root: {
        fontSize: "16px",
        fontWeight: 700,
        color: "var(--pale-theme)",
      },
      shrink: {
        whiteSpace: "nowrap",
        transform: "translate(1px, -20px)",
      },
      outlined: {
        "&$shrink": {
          whiteSpace: "nowrap",
          transform: "translate(1px, -20px)",
        },
      },
    },
    MuiOutlinedInput: {
      root: {
        borderRadius: "3px",
      },
      input: {
        padding: "8px",
        backgroundColor: "#FFFFFF",
      },
      notchedOutline: {
        "& legend": {
          maxWidth: "0px",
        },
      },
      adornedStart: {
        minWidth: "330px",
      },
    },
    MuiTextField: {
      root: {
        marginTop: "30px !important",
        marginBottom: "10px !important",
      },
    },
    //End of Form Labelling Themeing
    MuiListItemText: {
      primary: {
        fontWeight: 500,
        fontSize: "0.875rem",
      },
    },
    MuiTypography: {
      body1: {
        fontWeight: "inherit",
      },
      h3: {
        fontSize: "1.4996rem",
        fontWeight: 500,
        color: "var(--dark)",
      },
      h4: {
        fontSize: "1.1rem",
        fontWeight: 500,
        color: "var(--dark)",
      },
    },
    MuiStepper: {
      root: {
        padding: "0px",
        paddingTop: "32px",
      },
    },
    MuiStepIcon: {
      root: {
        "&$active": {
          fill: "var(--light-theme)",
        },
        "&$completed": {
          fill: "var(--success)",
        },
      },
    },
    MuiStepLabel: {
      labelContainer: {
        whiteSpace: "nowrap",
      },
    },
    MuiButton: {
      root: {
        minWidth: "120px",
      },
      containedSizeSmall: {
        minWidth: "60px",
        fontSize: "12px",
      },
      outlinedSizeSmall: {
        minWidth: "60px",
        fontSize: "12px",
      },
    },
    MuiButtonBase: {
      root: {
        margin: "4px",
      },
    },
    MuiCardActions: {
      root: {
        justifyContent: "center",
        borderTop: "1px solid var(--pale-skyblue)",
        background: "var(--celago)",
        padding: "13px 0",

        borderRadius: "7px",
        boxShadow: "none",

        "& .MuiTypography-root": {
          fontSize: "16px",
          fontWeight: 500,
        },
      },
    },

    MuiFormControlLabel: {
      label: {
        "&$disabled": {
          color: "var(--theme)",
        },
      },
    },

    MuiFormLabel: {
      root: {
        "&$disabled": {
          color: "var(--pale-theme)",
        },
      },
    },

    MuiRadio: {
      root: {
        padding: "0px 5px",
      },
    },
    MuiSwitch: {
      switchBase: {
        padding: "6px",
      },
    },
    MuiAvatar: {
      colorDefault: {
        backgroundColor: "var(--cerulean-blue)",
      },
    },
    MuiInputBase: {
      input: {
        "&$disabled": {
          textTransform: "capitalize",
          color: "gray",
        },
      },
    },
    MuiMenuItem: {
      root: {
        textTransform: "capitalize",
      },
    },
    MuiAccordion: {
      root: {
        boxShadow: "unset",
        border: "1px solid rgba(0, 0, 0, 0.12)",

        "&$expanded": {
          margin: "0px",
        },
      },
    },
    MuiTab: {
      root: {
        marginLeft: "0px",
        paddingLeft: "0px",
      },
      wrapper: {
        textAlign: "start",
      },
    },
    //Appbar & Sidebar themes
    MuiToolbar: {
      root: {
        backgroundColor: "var(--light-gray)",
        color: "white",
      },
    },
    MuiDrawer: {
      paperAnchorDockedLeft: {
        top: "64px",
        zIndex: 1200,
        height: "94%",
      },
    },
    MuiTablePagination: {
      toolbar: {
        backgroundColor: "var(--white)",
        color: "var(--dark)",
        borderTop: "solid 1px var(--gray)",
        borderBottom: "solid 1px var(--gray)",
      },
    },
    MuiAppBar: {
      root: {
        zIndex: 1300,
      },
      colorPrimary: {
        backgroundColor: "var(--white)",
      },
    },
    MuiListItemIcon: {
      root: {
        minWidth: "unset",
      },
    },
    MuiBreadcrumbs: {
      li: {
        textTransform: "capitalize",
      },
      ol: {
        fontWeight: 500,
        color: "var(--dark)",
        cursor: "pointer",
      },
    },
    MuiCollapse: {
      wrapperInner: {
        padding: "6px",
      },
    },
  },
});
