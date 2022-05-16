export function validSearchResponse(data: any){
    return data && Array.isArray(data.items);
}
  