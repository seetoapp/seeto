const ROBOTS_TAG =
  "noindex, nofollow, noarchive, nosnippet, noimageindex, nocache";

export default async function robotsHeaderMiddleware(
  _event: unknown,
  next: () => unknown | Promise<unknown>,
): Promise<unknown> {
  const result = await next();
  if (!(result instanceof Response)) return result;
  const headers = new Headers(result.headers);
  headers.set("X-Robots-Tag", ROBOTS_TAG);
  return new Response(result.body, {
    status: result.status,
    statusText: result.statusText,
    headers,
  });
}
