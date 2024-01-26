export default function Values<T extends any>({name, country, arr}: Info<T>) {
    function getLength(arr: T[]): number {
        return arr.length;
    }

    return (
        <div>
            <p>Name: {name}</p>
            <p>Country: {country}</p>
            <p>Array Length: {getLength(arr)}</p>
        </div>
    )
}