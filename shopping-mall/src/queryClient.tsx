import { useQuery, useMutation, useQueryClient, QueryClient, QueryClientProvider } from "react-query";

type AniOBJ = { [key: string]: any };

// Create a client
export const getClient = (() => {
  let client: QueryClient | null = null;
  return () => {
    if (!client) client = new QueryClient();
    return client;
  };
})();

const BASE_URL = "https://fakestoreapi.com";

// fetcher
export const fetcher = async ({
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
    const url = `${BASE_URL}${path}`;

    const fetchOptions: RequestInit = {
      method,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": BASE_URL,
      },
    };

    const res = await fetch(url, fetchOptions);
    const json = await res.json();
    return json;
  } catch (err) {
    console.log(err);
  }
};

// query key
export const QueryKeys = {
  PRODUCTS: "PRODUCTS",
};