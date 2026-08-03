export const DEFAULT_PAGE_SIZE = 25;
export const MAX_PAGE_SIZE = 50;

function positiveInteger(value, fallback) {
  const parsed = Number.parseInt(String(value ?? ""), 10);
  return Number.isSafeInteger(parsed) && parsed > 0 ? parsed : fallback;
}

export function isDashboardEnabled(value) {
  return value === "true";
}

export function normalizePagination(pageValue, pageSizeValue) {
  return {
    page: positiveInteger(pageValue, 1),
    pageSize: Math.min(positiveInteger(pageSizeValue, DEFAULT_PAGE_SIZE), MAX_PAGE_SIZE),
  };
}

export function isAuthorizedGithubAccount(account, adminGithubUserId) {
  return Boolean(
    account &&
    account.providerId === "github" &&
    account.accountId === adminGithubUserId,
  );
}

export function evaluateAdminAccess({
  enabled,
  sessionUserId,
  account,
  adminGithubUserId,
}) {
  if (!enabled) return "disabled";
  if (!sessionUserId) return "unauthenticated";
  return isAuthorizedGithubAccount(account, adminGithubUserId) ? "allowed" : "denied";
}
