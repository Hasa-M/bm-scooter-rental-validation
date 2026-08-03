export const DEFAULT_PAGE_SIZE: number;
export const MAX_PAGE_SIZE: number;
export function isDashboardEnabled(value: unknown): boolean;
export function normalizePagination(
  pageValue: unknown,
  pageSizeValue: unknown,
): { page: number; pageSize: number };
export function isAuthorizedGithubAccount(
  account: { providerId: string; accountId: string } | null | undefined,
  adminGithubUserId: string,
): boolean;
export function evaluateAdminAccess(input: {
  enabled: boolean;
  sessionUserId?: string | null;
  account?: { providerId: string; accountId: string } | null;
  adminGithubUserId: string;
}): "disabled" | "unauthenticated" | "allowed" | "denied";
