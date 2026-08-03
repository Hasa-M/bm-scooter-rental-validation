import "server-only";

import { drizzleAdapter } from "@better-auth/drizzle-adapter";
import { APIError } from "better-auth/api";
import { betterAuth } from "better-auth/minimal";
import { getAdminAuthConfig } from "@/lib/admin/config";
import { getDatabaseClient } from "@/lib/db/client";
import {
  adminAccount,
  adminSession,
  adminUser,
  adminVerification,
} from "@/lib/db/schema";

type AdminAuth = ReturnType<typeof createAdminAuth>;

const authGlobal = globalThis as typeof globalThis & {
  adminAuth?: AdminAuth;
};

function createAdminAuth() {
  const config = getAdminAuthConfig();
  const database = getDatabaseClient();

  return betterAuth({
    appName: "Bosa in Scooter Admin",
    baseURL: config.baseURL,
    secret: config.secret,
    trustedOrigins: [config.origin],
    database: drizzleAdapter(database, {
      provider: "pg",
      schema: {
        admin_user: adminUser,
        admin_session: adminSession,
        admin_account: adminAccount,
        admin_verification: adminVerification,
      },
    }),
    user: {
      modelName: "admin_user",
    },
    session: {
      modelName: "admin_session",
      expiresIn: 60 * 60 * 8,
      updateAge: 60 * 60,
    },
    account: {
      modelName: "admin_account",
      encryptOAuthTokens: true,
      accountLinking: {
        enabled: false,
      },
    },
    verification: {
      modelName: "admin_verification",
    },
    socialProviders: {
      github: {
        clientId: config.githubClientId,
        clientSecret: config.githubClientSecret,
        disableImplicitSignUp: true,
        mapProfileToUser(profile) {
          if (String(profile.id) !== config.adminGithubUserId) {
            throw new APIError("FORBIDDEN", { message: "Access denied" });
          }
          return {};
        },
      },
    },
    databaseHooks: {
      account: {
        create: {
          async before(account) {
            if (
              account.providerId !== "github" ||
              account.accountId !== config.adminGithubUserId
            ) {
              throw new APIError("FORBIDDEN", { message: "Access denied" });
            }
          },
        },
      },
    },
    advanced: {
      cookiePrefix: "bosa-admin",
      useSecureCookies: process.env.NODE_ENV === "production",
      defaultCookieAttributes: {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
      },
      database: {
        defaultFindManyLimit: 50,
      },
    },
    logger: {
      disabled: true,
    },
  });
}

export function getAdminAuth(): AdminAuth {
  authGlobal.adminAuth ??= createAdminAuth();
  return authGlobal.adminAuth;
}
