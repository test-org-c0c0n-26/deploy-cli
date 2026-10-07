import { afterEach, expect, test, vi } from "vitest";
import { ApiClient } from "../src/client.js";

afterEach(() => {
  vi.restoreAllMocks();
});

test("whoami calls /v1/account with the bearer token", async () => {
  const fetchMock = vi
    .spyOn(globalThis, "fetch")
    .mockResolvedValue(
      new Response(JSON.stringify({ login: "priya", org: "platform" }), {
        status: 200,
      }),
    );

  const account = await new ApiClient("token-123").whoami();

  expect(account).toEqual({ login: "priya", org: "platform" });
  const [url, init] = fetchMock.mock.calls[0];
  expect(String(url)).toContain("/v1/account");
  expect((init?.headers as Record<string, string>).authorization).toBe(
    "Bearer token-123",
  );
});
