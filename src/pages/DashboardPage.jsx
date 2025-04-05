import { AppSidebar } from "@/components/app-sidebar.jsx";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage } from "@/components/ui/breadcrumb.jsx";
import { Separator } from "@/components/ui/separator.jsx";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar.jsx";

import { DataTableProducts } from "@/components/data-table-products";

import { useState } from "react";
import {DataTableOrders} from "@/components/data-table-orders.jsx";

export function DashboardPage() {
    const [currentPage, setCurrentPage] = useState("products");

    return (
        <SidebarProvider>
            <AppSidebar onSelectPage={setCurrentPage} currentPage={currentPage}/>

            <SidebarInset>
                <header className="flex h-14 shrink-0 items-center gap-2">
                    <div className="flex flex-1 items-center gap-2 px-3">
                        <SidebarTrigger />
                        <Separator orientation="vertical" className="mr-2 h-4" />
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbPage className="line-clamp-1">
                                        {currentPage === "products" ? "Products" : "My Orders"}
                                    </BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                </header>

                <div className="flex flex-1 flex-col gap-4 px-4 py-10">
                    {currentPage === "products" ? (
                        <DataTableProducts />
                    ) : (
                        <DataTableOrders />
                    )}
                </div>
            </SidebarInset>
        </SidebarProvider>
    );
}
