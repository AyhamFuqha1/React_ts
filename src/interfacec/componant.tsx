export interface op{
    email:string,
    password:string,
    userName:string,
    address:string,
}
export interface opp{
    label:string,
    type:string,
    id:string,
    name:keyof op
}