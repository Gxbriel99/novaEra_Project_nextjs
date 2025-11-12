export interface ITicket {
    idTicket:number,
    oggetto:string,
    descrzione:string,
    allegati:IAttachment[]|null
}

export interface IAttachment{
    idAttachment:number,
    idTicket:number,
    fileName:string,
    path:string,
    type:TType
}


export type TType = '.pdf' |'.jpg' |'.jpeg' |'.png' |'.gif';