export function get<T>(url: string): Promise<T> {
  return fetch(process.env.NEXT_PUBLIC_BASE_URL! + url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json());
}
