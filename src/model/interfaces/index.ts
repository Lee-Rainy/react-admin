export interface GlobalState {
    token: string;
    userInfo: string;
    assemblySize: string;
    language: string;
    themeConfig: {
        primary: string;
        isDark: boolean;
        weakOrGray: string;
        breadcrumb: boolean;
        tabs: boolean;
        footer: boolean;
    };
}