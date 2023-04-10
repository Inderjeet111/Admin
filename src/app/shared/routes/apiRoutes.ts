export class ApiRoutes {

    public static apiBaseUrl: string = "http://localhost:4800/";
    public static get usersList(): string { return this.apiBaseUrl + 'users'; }

}