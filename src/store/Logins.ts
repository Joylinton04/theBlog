interface user {
    name: string,
    email: string,
    password: string,
    isAdmin?: boolean,
}


export const Users:user[] = [
    {
       name: 'Linton2.0',
       email: 'linton2.0@gmail.com',
       password: '123',
       isAdmin: true,
    }
]