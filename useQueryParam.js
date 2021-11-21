//Este hook sirve para tomar parametros pasados por query
const useQueryParam = ( param ) => {

    let query =  (new URL(document.location)).searchParams;
    return query.get(param);
}

export default useQueryParam;