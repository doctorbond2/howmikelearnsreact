export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
export interface TTodo {
  task?: string;
  date?: string;
  completed?: boolean | undefined;
  id?: number;
}
export interface Posts {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}
