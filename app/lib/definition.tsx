export interface ITicket {
    idTicket:number,
    oggetto:string,
    description:string,
    allegati:IAttachment[]|null
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

export interface TNavigateBack {
    onNavigateBack: () => void;
}




