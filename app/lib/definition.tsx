export interface ITicket {
    id:string,
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
    assistence_request_id:number,
    message?:string,
    response?:string,
    attachments:[IAttachment][]|null
    
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






