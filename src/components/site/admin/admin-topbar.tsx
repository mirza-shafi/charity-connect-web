import { LogOut } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { logout } from "@/lib/auth-actions";
import type { User } from "@/lib/types";

export function AdminTopbar({ user }: { user: User }) {
  const initial = user.name.charAt(0).toUpperCase();

  return (
    <header className="flex items-center justify-between border-b bg-card px-5 py-3">
      <div className="flex items-center gap-2.5">
        <Avatar className="h-8 w-8">
          <AvatarFallback className="bg-accent text-accent-foreground text-sm font-semibold">
            {initial}
          </AvatarFallback>
        </Avatar>
        <div>
          <p className="text-sm font-semibold">Hello, {user.name}</p>
          <p className="text-xs text-muted-foreground">{user.email}</p>
        </div>
      </div>

      <form action={logout}>
        <Button variant="outline" size="sm" type="submit">
          <LogOut className="h-4 w-4" /> Sign out
        </Button>
      </form>
    </header>
  );
}
