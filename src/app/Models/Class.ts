export interface Class{
    Name:string;
    Confidentiality:string
    Integrity:string
    Availability:string
    classId:Number
}

export interface LoginResult {
    success: boolean;
    message: string;
    token?: string;
    }