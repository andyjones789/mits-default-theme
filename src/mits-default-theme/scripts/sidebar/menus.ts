export type SidebarMenuItem = {
  title: string;
  url?: string;
  isActive?: boolean;
  [value: string]: any;
}

export type SidebarMenu = {
  title?: string,
  items: SidebarMenuItem[]
}

export type SidebarMenus = SidebarMenu[] | undefined[];