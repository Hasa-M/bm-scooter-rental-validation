import { isDashboardEnabled } from "./policy.mjs";

export function isAdminDashboardEnabled(): boolean {
  return isDashboardEnabled(process.env.ADMIN_DASHBOARD_ENABLED);
}

function requiredEnvironmentValue(name: string): string {
  const value = process.env[name]?.trim();
  if (!value) throw new Error(`Admin authentication is not configured: ${name} is missing`);
  return value;
}

export function getAdminGithubUserId(): string {
  const id = requiredEnvironmentValue("ADMIN_GITHUB_USER_ID");
  if (!/^\d+$/.test(id)) {
    throw new Error("Admin authentication is not configured: ADMIN_GITHUB_USER_ID must be numeric");
  }
  return id;
}

export function getAdminAuthConfig() {
  const secret = requiredEnvironmentValue("BETTER_AUTH_SECRET");
  if (secret.length < 32) {
    throw new Error("Admin authentication is not configured: BETTER_AUTH_SECRET is too short");
  }

  const baseURL = requiredEnvironmentValue("BETTER_AUTH_URL");
  const origin = new URL(baseURL).origin;

  return {
    secret,
    baseURL,
    origin,
    githubClientId: requiredEnvironmentValue("GITHUB_CLIENT_ID"),
    githubClientSecret: requiredEnvironmentValue("GITHUB_CLIENT_SECRET"),
    adminGithubUserId: getAdminGithubUserId(),
  };
}
