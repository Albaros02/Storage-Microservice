export enum EnvVars {
    MS_PORT = "MS_PORT",
    DB_HOST = "DB_HOST",
    DB_PORT = "DB_PORT",
    DB_USER_NAME = "DB_USER_NAME",
    DB_PASSWORD = "DB_PASSWORD",
    FIREBASE_PROJECT_ID = "FIREBASE_PROJECT_ID",
    FIREBASE_CLIENT_EMAIL = "FIREBASE_CLIENT_EMAIL",
    FIREBASE_PRIVATE_KEY = "FIREBASE_PRIVATE_KEY",
    FIREBASE_STORAGE_BUCKET = "FIREBASE_STORAGE_BUCKET",
    MS_HOST = "MS_HOST",
}

export class EnvVarsAccessor {
    static getValue(name: string): string {
        const val = process.env[name];
        if (val) {
            return val;
        }
        throw new Error(`Missing env var with name: ${name}`); 
    }

    static get MS_PORT(): string {
        return EnvVarsAccessor.getValue(EnvVars.MS_PORT);
    }
    static get DB_HOST(): string {
        return EnvVarsAccessor.getValue(EnvVars.DB_HOST);
    }
    static get DB_PORT(): string {
        return EnvVarsAccessor.getValue(EnvVars.DB_PORT);
    }
    static get DB_USER_NAME(): string {
        return EnvVarsAccessor.getValue(EnvVars.DB_USER_NAME);
    }
    static get DB_PASSWORD(): string {
        return EnvVarsAccessor.getValue(EnvVars.DB_PASSWORD);
    }
    static get FIREBASE_PROJECT_ID(): string {
        return EnvVarsAccessor.getValue(EnvVars.FIREBASE_PROJECT_ID);
    }
    static get FIREBASE_CLIENT_EMAIL(): string {
        return EnvVarsAccessor.getValue(EnvVars.FIREBASE_CLIENT_EMAIL);
    }
    static get FIREBASE_PRIVATE_KEY(): string {
        return EnvVarsAccessor.getValue(EnvVars.FIREBASE_PRIVATE_KEY);
    }

    static get FIREBASE_STORAGE_BUCKET(): string {
        return EnvVarsAccessor.getValue(EnvVars.FIREBASE_STORAGE_BUCKET);
    }
    
    static get MS_HOST(): string {
        return EnvVarsAccessor.getValue(EnvVars.MS_HOST);
    }
}
