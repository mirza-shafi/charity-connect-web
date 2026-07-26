import { AdminMobileNav } from "@/components/site/admin/admin-mobile-nav";
import { AdminSidebar } from "@/components/site/admin/admin-sidebar";
import { AdminTopbar } from "@/components/site/admin/admin-topbar";
import { Toaster } from "@/components/ui/sonner";
import { requireAdmin } from "@/lib/auth";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const user = await requireAdmin();

  return (
    <div className="flex min-h-screen bg-background">
      <AdminSidebar />
      <div className="flex min-w-0 flex-1 flex-col">
        <AdminTopbar user={user} />
        <AdminMobileNav />
        <main className="flex-1 p-6">{children}</main>
      </div>
      <Toaster />
    </div>
  );
}
