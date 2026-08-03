export const privacyConfig = {
  controllerName: "Salvatore Fadda",
  controllerRole: {
    it: "persona fisica promotrice del progetto Bosa in Scooter",
    en: "individual promoter of the Bosa in Scooter project",
  },
  contactEmail: "info@bosainscooter.it",
  dataProvider: {
    name: process.env.DATA_PROVIDER_NAME?.trim() ?? "",
    role: process.env.DATA_PROVIDER_ROLE?.trim() ?? "",
    region: process.env.DATA_PROVIDER_REGION?.trim() ?? "",
    transferSafeguards: process.env.DATA_PROVIDER_TRANSFER_SAFEGUARDS?.trim() ?? "",
    privacyPolicyUrl: process.env.DATA_PROVIDER_PRIVACY_POLICY_URL?.trim() ?? "",
  },
} as const;

export function isDataProviderConfigured(): boolean {
  const provider = privacyConfig.dataProvider;
  return Boolean(
    provider.name &&
    provider.role &&
    provider.region
  );
}
