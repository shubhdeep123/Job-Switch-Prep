export type User = {
    id: number;
    name: string;
    email: string;
    username:string;
    company:{
        name:string
    };
    address: {
        city: string;
    };
    
};