import "./App.css";
import Home from "./pages/Home";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();
function App() {
  
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex items-center justify-center">
        <Home />
      </div>
    </QueryClientProvider>
  );
}

export default App;
