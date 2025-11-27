export interface ITicket {
    id:number,
    object:string,
    description:string,
}

export interface IChat {
    id:number
    idTicket:number,
    idUser:number,
    message:string,
    response:string,
    idAttachment: IAttachment[]|null
}

export interface IMessage {
    idTicket:number,
    message?:string,
    response?:string,
    attachment:IAttachment[]|null
}

export interface IAttachment{
    idAttachment:number,
    idTicket:number,
    fileName:string,
    path:string,
    type:TType
}


export type TType = '.pdf' |'.jpg' |'.jpeg' |'.png' ;



export interface IStatusSection {
    buttonSection: boolean;
    emailSection: boolean;
    ticketSection: boolean;
}






