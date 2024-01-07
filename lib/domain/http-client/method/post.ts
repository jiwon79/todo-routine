export function post<T>(
  url: string,
  body: Record<string, unknown>,
): Promise<T> {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  }).then((res) => res.json());
}
