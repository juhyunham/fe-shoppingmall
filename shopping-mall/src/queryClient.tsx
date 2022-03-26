import { useQuery, useMutation, useQueryClient, QueryClient, QueryClientProvider } from "react-query";
import { request, RequestDocument } from "graphql-request";

type AniOBJ = { [key: string]: any };

// Create a client
export const getClient = (() => {
  let client: QueryClient | null = null;
  return () => {
    if (!client)
      client = new QueryClient({
        defaultOptions: {
          queries: {
            cacheTime: 1000 * 60 * 60 * 24,
            staleTime: 1000 * 60,
            refetchOnMount: false,
            refetchOnReconnect: false,
            refetchOnWindowFocus: false,
          },
        },
      });
    return client;
  };
})();

const BASE_URL = "/";

// fetcher
export const restFetcher = async ({
  method,
  path,
  body,
  params,
}: {
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  path: string;
  body?: AniOBJ;
  params?: AniOBJ;
}) => {
  try {
    let url = `${BASE_URL}${path}`;

    const fetchOptions: RequestInit = {
      method,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": BASE_URL,
      },
    };

    if (params) {
      const searchParams = new URLSearchParams(params);
      url += "?" + searchParams.toString();
    }
    if (body) fetchOptions.body = JSON.stringify(body);

    const res = await fetch(url, fetchOptions);
    const json = await res.json();
    return json;
  } catch (err) {
    console.log(err);
  }
};

export const graphqlFetcher = (query: RequestDocument, variables = {}) => request(BASE_URL, query, variables);

// query key
export const QueryKeys = {
  PRODUCTS: "PRODUCTS",
  CART: "CART",
};
