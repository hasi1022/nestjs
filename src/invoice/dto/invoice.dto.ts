export class DcreateInvoice{
    billTo:string;
    invoiceDate:string;
    grandTotal:number;
    items:[Ditems];
    userId:number;
}
export class Ditems{
    productName:string;
    productQuantity:number;
    productTotalPrice:number;
    productUnitPrice:number;
    invoiceId:number;
}