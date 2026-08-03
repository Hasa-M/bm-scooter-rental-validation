"use client";

import { useState } from "react";
import { adminAuthClient } from "@/lib/admin/auth-client";

export function GithubSignInButton() {
  const [pending, setPending] = useState(false);
  const [failed, setFailed] = useState(false);

  async function signIn() {
    setPending(true);
    setFailed(false);
    const result = await adminAuthClient.signIn.social({
      provider: "github",
      callbackURL: "/admin",
      errorCallbackURL: "/admin/login?error=access_denied",
      requestSignUp: true,
    });
    if (result.error) {
      setFailed(true);
      setPending(false);
    }
  }

  return (
    <>
      <button className="admin-button" type="button" onClick={signIn} disabled={pending}>
        {pending ? "Reindirizzamento..." : "Accedi con GitHub"}
      </button>
      {failed ? <p className="admin-error">Accesso non riuscito.</p> : null}
    </>
  );
}

export function SignOutButton() {
  const [pending, setPending] = useState(false);

  async function signOut() {
    setPending(true);
    await adminAuthClient.signOut({
      fetchOptions: {
        onSuccess() {
          window.location.assign("/admin/login");
        },
      },
    });
    setPending(false);
  }

  return (
    <button className="admin-link-button" type="button" onClick={signOut} disabled={pending}>
      {pending ? "Uscita..." : "Esci"}
    </button>
  );
}
