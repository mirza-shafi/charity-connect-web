import { BasketDrawer } from "@/components/site/basket-drawer";
import { BasketProvider } from "@/components/site/basket-context";
import { SiteFooter } from "@/components/site/footer";
import { SiteHeader } from "@/components/site/header";
import { ThemeInit } from "@/components/site/theme-init";
import { ToastProvider } from "@/components/site/toast-provider";
import { WhatsappButton } from "@/components/site/whatsapp-button";
import { getBlogPosts, getCampaigns, getEvents } from "@/lib/data";

export default async function SiteLayout({ children }: { children: React.ReactNode }) {
  const [campaigns, events, posts] = await Promise.all([
    getCampaigns(),
    getEvents(),
    getBlogPosts({}),
  ]);

  return (
    <ToastProvider>
      <BasketProvider>
        <div className="pt-root">
          <ThemeInit />
          <SiteHeader
            campaigns={campaigns.slice(0, 6)}
            events={events.slice(0, 6)}
            posts={posts.slice(0, 6)}
          />
          <main className="pt-app-content">{children}</main>
          <SiteFooter />
          <WhatsappButton />
          <BasketDrawer />
        </div>
      </BasketProvider>
    </ToastProvider>
  );
}
