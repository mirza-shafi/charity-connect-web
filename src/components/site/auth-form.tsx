"use client";

import { useActionState, useState } from "react";

import { login, register } from "@/lib/auth-actions";
import { initialActionState } from "@/lib/action-state";

export function AuthForm({ initialTab = "login" }: { initialTab?: "login" | "register" }) {
  const [tab, setTab] = useState<"login" | "register">(initialTab);

  const [loginState, loginAction, loginPending] = useActionState(login, initialActionState);
  const [registerState, registerAction, registerPending] = useActionState(
    register,
    initialActionState
  );

  return (
    <div>
      <div className="pt-tabs" style={{ marginBottom: 20 }}>
        <button
          type="button"
          className={`pt-tab-btn${tab === "login" ? " active" : ""}`}
          onClick={() => setTab("login")}
        >
          Sign In
        </button>
        <button
          type="button"
          className={`pt-tab-btn${tab === "register" ? " active" : ""}`}
          onClick={() => setTab("register")}
        >
          Register
        </button>
      </div>

      {tab === "login" ? (
        <form action={loginAction}>
          <div className="pt-form-group">
            <label className="pt-form-label" htmlFor="login-email">Email Address</label>
            <input id="login-email" name="email" type="email" required className="pt-form-input" placeholder="e.g. donor@example.com" />
          </div>
          <div className="pt-form-group">
            <label className="pt-form-label" htmlFor="login-password">Password</label>
            <input id="login-password" name="password" type="password" required className="pt-form-input" placeholder="••••••••" />
          </div>
          {loginState.status === "error" && (
            <p style={{ color: "var(--pt-danger)", fontSize: "0.85rem", marginBottom: 16 }}>{loginState.message}</p>
          )}
          <button type="submit" disabled={loginPending} className="pt-btn pt-btn-primary pt-btn-full">
            {loginPending ? "Signing in…" : "Sign In"}
          </button>
        </form>
      ) : (
        <form action={registerAction}>
          <div className="pt-form-group">
            <label className="pt-form-label" htmlFor="reg-name">Full Name</label>
            <input id="reg-name" name="name" required className="pt-form-input" placeholder="e.g. Alex Johnson" />
          </div>
          <div className="pt-form-group">
            <label className="pt-form-label" htmlFor="reg-email">Email Address</label>
            <input id="reg-email" name="email" type="email" required className="pt-form-input" placeholder="e.g. alex@example.com" />
          </div>
          <div className="pt-form-group">
            <label className="pt-form-label" htmlFor="reg-password">Create Password</label>
            <input id="reg-password" name="password" type="password" required className="pt-form-input" placeholder="At least 8 characters" />
          </div>
          {registerState.status === "error" && (
            <p style={{ color: "var(--pt-danger)", fontSize: "0.85rem", marginBottom: 16 }}>{registerState.message}</p>
          )}
          <button type="submit" disabled={registerPending} className="pt-btn pt-btn-accent pt-btn-full">
            {registerPending ? "Creating account…" : "Create Account"}
          </button>
        </form>
      )}
    </div>
  );
}
