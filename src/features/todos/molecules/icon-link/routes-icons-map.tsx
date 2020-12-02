import React from "react";
import { ReactComponent as HomeIcon } from "shared/icons/home-icon.svg";
import { ReactComponent as SettingsIcon } from "shared/icons/settings-icon.svg";

const routesIcons = ["todos", "settings"] as const;
type RouteIcon = typeof routesIcons[number];

export const ROUTES_ICONS_MAP: Record<RouteIcon, JSX.Element> = {
  todos: <HomeIcon />,
  settings: <SettingsIcon />,
} as const;
