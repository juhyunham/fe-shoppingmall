import { QueryClientProvider } from "react-query";
import { useRoutes } from "react-router-dom";
import { getClient } from "./queryClient";
import { routes } from "./routes";
import { ReactQueryDevtools } from "react-query/devtools";
import { GlobalStyles } from "./styles/GlobalStyles";
import Gnb from "./components/gnb";

const App = () => {
  const elem = useRoutes(routes);
  const queryClient = getClient();

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <Gnb />
      {elem}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
