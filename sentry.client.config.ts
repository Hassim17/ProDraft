import * as Sentry from "@sentry/nextjs";

Sentry.init({
	dsn: "https://7564fef3fb53aa893ff88b0a24b50c44@o4508905600909312.ingest.de.sentry.io/4508905606742096",

	integrations: [Sentry.replayIntegration()],
	// Session Replay
	replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
	replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});
