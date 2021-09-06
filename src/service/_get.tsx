import { domain } from './url';

export interface SwapiGetResponse {
  people: string;
  planets: string;
  films: string;
  species: string;
  vehicles: string;
  starships: string;
}
type GetApi = <T>(url: string | null) => Promise<T>;

export const _get: GetApi = async <T extends {}>(url: string | null): Promise<T> => {
  const promise = await fetch(`${url || domain}`);
  return promise.json() as Promise<T>;
};
