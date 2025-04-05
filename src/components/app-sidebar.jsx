import * as React from "react"
import {
  Home,
  ShoppingCart,
  LogOut,
} from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem,
  SidebarRail,
} from "./ui/sidebar.jsx"
import {useAuth} from "@/contexts/AuthContext.jsx";

export function AppSidebar({ onSelectPage, currentPage, ...props }) {
  const { logout } = useAuth();

  function handleLogout() {
    logout();
  }

  return (
      <Sidebar className="border-r-0" {...props}>
        <SidebarHeader>
          <div className="p-4 text-lg font-bold">Product Dashboard</div>
        </SidebarHeader>

        <SidebarContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                  isActive={currentPage === "products"}
                  onClick={() => onSelectPage("products")}
              >
                <Home />
                <span>Products List</span>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton
                  isActive={currentPage === "orders"}
                  onClick={() => onSelectPage("orders")}
              >
                <ShoppingCart />
                <span>My Orders</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton
                  onClick={handleLogout}
              >
                <LogOut />
                <span>Logout</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>

        <SidebarRail />
      </Sidebar>
  );
}