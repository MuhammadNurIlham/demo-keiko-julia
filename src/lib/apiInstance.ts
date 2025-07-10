/* eslint-disable @typescript-eslint/no-explicit-any */
// src/lib/apiFetch.ts

import {
  BadRequestError,
  ConflictError,
  NotFoundError,
  TooManyRequestsError,
  UnauthorizedError,
} from "@/lib/httpErrors";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

if (!BASE_URL) {
  throw new Error(
    "❌ NEXT_PUBLIC_API_URL is not defined in environment variables"
  );
}

type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

interface RequestOptions {
  method?: HttpMethod;
  headers?: HeadersInit;
  body?: any;
  secure?: boolean;
  params?: Record<string, unknown>;
}

/**
 * Safely normalize headers to a Record<string, string>
 */
function normalizeHeaders(headers?: HeadersInit): Record<string, string> {
  const result: Record<string, string> = {};

  if (!headers) return result;

  if (headers instanceof Headers) {
    headers.forEach((value, key) => {
      result[key] = value;
    });
  } else if (Array.isArray(headers)) {
    headers.forEach(([key, value]) => {
      result[key] = value;
    });
  } else {
    for (const [key, value] of Object.entries(headers)) {
      if (typeof value === "string" || typeof value === "number") {
        result[key] = value.toString();
      }
    }
  }

  return result;
}

/**
 * Build full URL with optional query params
 */
function buildUrl(path: string, params?: Record<string, unknown>): string {
  const url = new URL(`${BASE_URL}${path}`);

  if (params) {
    for (const [key, value] of Object.entries(params)) {
      if (
        typeof value === "string" ||
        typeof value === "number" ||
        typeof value === "boolean"
      ) {
        url.searchParams.append(key, value.toString());
      }
    }
  }

  return url.toString();
}

/**
 * Generic API fetch wrapper (supports JSON & FormData)
 */
export async function apiFetch<T>(
  path: string,
  options: RequestOptions = {}
): Promise<T> {
  const method: HttpMethod = options.method || "GET";

  const headers = normalizeHeaders(options.headers);
  const isFormData = options.body instanceof FormData;

  // Token logic (optional)
  if (options.secure) {
    const token = ""; // TODO: Replace with token logic (cookies, localStorage, session, etc.)
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }
  }

  let body: BodyInit | undefined;

  if (isFormData) {
    body = options.body;
    delete headers["Content-Type"]; // Let browser set boundary for multipart/form-data
  } else if (options.body) {
    headers["Content-Type"] = "application/json";
    body = JSON.stringify(options.body);
  }

  const url = buildUrl(path, options.params);

  const response = await fetch(url, {
    method,
    headers,
    body,
    next: { revalidate: 0 }, // for App Router: disables ISR (optional)
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    const message = errorData?.message || response.statusText;

    switch (response.status) {
      case 400:
        throw new BadRequestError(message);
      case 401:
        throw new UnauthorizedError(message);
      case 404:
        throw new NotFoundError(message);
      case 409:
        throw new ConflictError(message);
      case 429:
        throw new TooManyRequestsError(message);
      default:
        throw new Error(message);
    }
  }

  return response.json() as Promise<T>;
}
