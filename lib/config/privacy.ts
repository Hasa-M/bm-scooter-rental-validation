export const privacyConfig = {
  controllerName: "Salvatore Fadda",
  controllerRole: {
    it: "persona fisica promotrice del progetto Bosa in Scooter",
    en: "individual promoter of the Bosa in Scooter project",
    fr: "promoteur individuel du projet Bosa in Scooter",
  },
  contactEmail: "info@bosainscooter.it",
  dataProvider: {
    name: process.env.DATA_PROVIDER_NAME?.trim() ?? "",
    role: process.env.DATA_PROVIDER_ROLE?.trim() ?? "",
    region: process.env.DATA_PROVIDER_REGION?.trim() ?? "",
    transferSafeguards: process.env.DATA_PROVIDER_TRANSFER_SAFEGUARDS?.trim() ?? "",
    privacyPolicyUrl: process.env.DATA_PROVIDER_PRIVACY_POLICY_URL?.trim() ?? "",
  },
  serviceProviders: [
    {
      name: "Vercel, Inc.",
      role: {
        it: "responsabile del trattamento per hosting, CDN, funzioni e log tecnici",
        en: "processor for hosting, CDN, functions and technical logs",
        fr: "sous-traitant pour l’hébergement, le CDN, les fonctions et les journaux techniques",
      },
      region: {
        it: "rete edge globale; funzioni server configurate a Francoforte (fra1)",
        en: "global edge network; server functions configured in Frankfurt (fra1)",
        fr: "réseau edge mondial ; fonctions serveur configurées à Francfort (fra1)",
      },
      transferSafeguards: {
        it: "Data Privacy Framework UE-USA e Clausole contrattuali standard, ove applicabili",
        en: "EU-US Data Privacy Framework and Standard Contractual Clauses, where applicable",
        fr: "cadre de protection des données UE–États-Unis et clauses contractuelles types, le cas échéant",
      },
      privacyPolicyUrl: "https://vercel.com/legal/privacy-notice",
    },
    {
      name: "GitHub, Inc.",
      role: {
        it: "fornitore OAuth e titolare autonomo per i trattamenti svolti sulla propria piattaforma",
        en: "OAuth provider and independent controller for processing on its own platform",
        fr: "fournisseur OAuth et responsable indépendant des traitements effectués sur sa propre plateforme",
      },
      region: {
        it: "Unione europea, Stati Uniti e altri Paesi indicati nell'informativa GitHub",
        en: "European Union, United States and other countries described in GitHub's notice",
        fr: "Union européenne, États-Unis et autres pays indiqués dans la politique de GitHub",
      },
      transferSafeguards: {
        it: "Data Privacy Framework UE-USA e Clausole contrattuali standard",
        en: "EU-US Data Privacy Framework and Standard Contractual Clauses",
        fr: "cadre de protection des données UE–États-Unis et clauses contractuelles types",
      },
      privacyPolicyUrl: "https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement",
    },
  ],
} as const;

export function isDataProviderConfigured(): boolean {
  const provider = privacyConfig.dataProvider;
  return Boolean(
    provider.name &&
    provider.role &&
    provider.region &&
    provider.transferSafeguards &&
    provider.privacyPolicyUrl
  );
}
