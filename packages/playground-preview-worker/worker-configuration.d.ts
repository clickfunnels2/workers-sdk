// Generated by Wrangler on Wed Jun 28 2023 20:56:33 GMT+0100 (British Summer Time)
type Env = {
	SENTRY_DSN: string;
	UserSession: DurableObjectNamespace;
	ACCOUNT_ID: string;
	workersDev: string;
	// Secrets
	API_TOKEN: string;
	PROMETHEUS_TOKEN: string;
	SENTRY_ACCESS_CLIENT_SECRET: string;
	SENTRY_ACCESS_CLIENT_ID: string;
};

declare module "*.template" {
	const value: string;
	export default value;
}

declare const ROOT: string;
declare const PREVIEW: string;
