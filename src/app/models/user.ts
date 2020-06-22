export class User {
    constructor(
        public name: string,
        public isAdmin: boolean
    ) {

    }

    

    toggleAdmin() {
        this.isAdmin = !this.isAdmin;
    }
}
