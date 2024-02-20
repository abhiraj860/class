interface User {
    id: string;
    name: string;
    age: string;
    email: string;
    password: string; 
};

type UpdateProps = Pick<User, 'name' | 'age' | 'email' >

type UpdatePropsOptional = Partial<UpdateProps>


function updateUser(updateProps: UpdatePropsOptional) {

}

updateUser({
    email: "afdfaf"
})