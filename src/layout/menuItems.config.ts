// assets
import DashboardIcon from "@mui/icons-material/Dashboard";
import FontDownloadIcon from "@mui/icons-material/FontDownload";
import PaletteIcon from "@mui/icons-material/Palette";
import DeblurIcon from "@mui/icons-material/Deblur";
import WindPowerIcon from "@mui/icons-material/WindPower";
import { IMenuItem, IMenuItemsGroup } from "./menu-items.interface";

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard: IMenuItem = {
  id: "dashboard",
  // title: 'Dashboard',
  type: "group",
  children: [
    {
      id: "default",
      title: "Dashboard",
      type: "item",
      url: "/",
      icon: DashboardIcon,
      breadcrumbs: false,
    },
  ],
};

const utilities: IMenuItem = {
  id: "utilities",
  title: "Utilities",
  caption: "Cosas de utilidad",
  type: "group",
  children: [
    {
      id: "util-typography",
      title: "Typography",
      type: "item",
      url: "/utils/util-typography",
      icon: FontDownloadIcon,
      breadcrumbs: false,
    },
    {
      id: "util-color",
      title: "Color",
      type: "item",
      url: "/utils/util-color",
      icon: PaletteIcon,
      breadcrumbs: false,
    },
    {
      id: "util-shadow",
      title: "Shadow",
      type: "item",
      url: "/utils/util-shadow",
      icon: DeblurIcon,
      breadcrumbs: false,
    },
    {
      id: "icons",
      title: "Icons",
      type: "collapse",
      icon: WindPowerIcon,
      children: [
        {
          id: "material-icons",
          title: "Material Icons",
          type: "item",
          url: "/icons/material-icons",
          breadcrumbs: false,
        },
      ],
    },
  ],
};

const menuItems: IMenuItemsGroup = {
  items: [dashboard, utilities],
};

export default menuItems;
