let Env: Record<string, unknown> = {};

try {
  Env = {
    VITE_BUILDED: (import.meta.env.VITE_BUILDED ?? 'false') === 'true',

    VITE_RENDERER_ENV_EXAMPLE: import.meta.env.VITE_RENDERER_ENV_EXAMPLE ?? '',
    VITE_ENV_EXAMPLE: import.meta.env.VITE_ENV_EXAMPLE ?? '',
    VITE_RENDERER_BACKEND_PORT: parseInt(
      import.meta.env.VITE_RENDERER_BACKEND_PORT ?? '8020',
    ),

    VITE_DATABASE_MAIN_URL: import.meta.env.VITE_DATABASE_MAIN_URL ?? '',

    VITE_DATABASE_MAIN_HOST: import.meta.env.VITE_DATABASE_MAIN_HOST ?? '',
    VITE_DATABASE_MAIN_PORT: Number(
      import.meta.env.VITE_DATABASE_MAIN_PORT ?? '5432',
    ),
    VITE_DATABASE_MAIN_USER: import.meta.env.VITE_DATABASE_MAIN_USER ?? '',
    VITE_DATABASE_MAIN_PASSWORD:
      import.meta.env.VITE_DATABASE_MAIN_PASSWORD ?? '',
    VITE_DATABASE_MAIN_NAME: import.meta.env.VITE_DATABASE_MAIN_NAME ?? '',
  };
} catch {}

export { Env };
