import { domain } from "./url";
// <T, >(x: T) => x;
export const _get = async <T,> (url: string | undefined): Promise<T> =>{
    const promise = await fetch(`${url || domain}`);
    return promise.json();
}