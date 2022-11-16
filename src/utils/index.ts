export const translateListToString =(L:string[]):string=>{
    return L.join(" ")
}

export const connectIndexWithString =(index:number,mid:string,str:string):string=>{
    return index+1+mid+str
}