interface User {
    id: string;
    name: string;
    age: string;
    email: string;
    password: string; 
};

type UpdatedProps = Pick<User, 'name' | 'age' | 'email' >

function updateUser(updatedProps: UpdatedProps) {

}