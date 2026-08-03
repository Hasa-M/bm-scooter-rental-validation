"use client";

import { createAuthClient } from "better-auth/client";

export const adminAuthClient = createAuthClient({
  basePath: "/api/auth",
});
