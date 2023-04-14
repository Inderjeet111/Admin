export class ApiRoutes {

    public static apiBaseUrl: string = "http://localhost:6400/";
    public static get usersList(): string { return this.apiBaseUrl + 'users'; };

    public static get insertUser(): string { return this.apiBaseUrl + 'addUser'; }

    public static get deleteUser(): string { return this.apiBaseUrl + 'userDeleted'; }

    public static get home(): string { return this.apiBaseUrl + 'home'; }

    // Auth 

    public static get adminLogin(): string { return this.apiBaseUrl + 'admin/login'; }

}