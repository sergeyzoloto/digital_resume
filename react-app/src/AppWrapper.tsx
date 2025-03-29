import { BrowserRouter as Router } from "react-router-dom";

/**
 * This component wraps our App with the providers
 * that we do not want to have in our tests
 */
import { ReactNode } from "react";

function AppWrapper({ children }: Readonly<{ children: ReactNode }>) {
  return <Router>{children}</Router>;
}

export default AppWrapper;
