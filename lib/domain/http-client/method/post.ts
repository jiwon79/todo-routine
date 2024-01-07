export function post<T>(
  url: string,
  body: Record<string, unknown>,
): Promise<T> {
  return fetch(process.env.NEXT_PUBLIC_BASE_URL! + url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  }).then((res) => res.json());
}
