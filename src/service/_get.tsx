import { domain } from "./url";

export const _get = async (url: string | null) =>{
    const promise = await fetch(`${url || domain}`);
    return promise.json();
}