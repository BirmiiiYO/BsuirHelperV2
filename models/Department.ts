export interface IDepartment {
    id: number;
    name: string;
    abbrev: string;
}

export interface GetDepartment {
    departments: Array<IDepartment>;
}