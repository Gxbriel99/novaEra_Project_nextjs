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


export type TType = '.pdf' |'.jpg' |'.jpeg' |'.png' ;



export interface IStatusSection {
    buttonSection: boolean;
    emailSection: boolean;
    ticketSection: boolean;
}

export interface TNavigateBack {
    onNavigateBack: () => void;
}

//MODAL HomepageForm

export interface IModalForm {
    name:string,
    surname:string,
    object:string,
    email:string,
    message:string,
    attachment:IAttachment[]|null
}