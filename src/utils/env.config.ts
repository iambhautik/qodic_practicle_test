export interface EnvSetting {
    apiURL: string;
}

// const { VITE_API_BASE_URL } = import.meta;

const envSettings: EnvSetting = {
    apiURL: import.meta.env.VITE_APP_API_URL,
};

export { envSettings };
