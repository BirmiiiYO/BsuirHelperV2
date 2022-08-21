export interface IDepartments {
    id: number;
    name: string;
    abbrev: string;
}

export interface GetDepartments {
    departments: Array<IDepartments>;
}

export interface ISingleDepartment {
    body?:string
}

export interface GetSingleDepartment {
    department: Array<ISingleDepartment>;
}