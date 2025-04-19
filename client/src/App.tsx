import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { AuthProvider } from "@/context/AuthContext";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import account from "@/pages/account"; 
import GameList from "@/pages/GameList";
import Rewards from "@/pages/Rewards";
import Community from "@/pages/Community";
import ContactUs from "@/pages/ContactUs";
import Terms from "@/pages/Terms";
import Privacy from "@/pages/Privacy";
import Cookies from "@/pages/Cookies";
import Signup from "@/pages/Signup";
import learnMorePage from "@/pages/learnmore";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/account" component={account} /> 
      <Route path="/games" component={GameList} />
      <Route path="/rewards" component={Rewards} />
      <Route path="/community" component={Community} />
      <Route path="/contact" component={ContactUs} />
      <Route path="/terms" component={Terms} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/cookies" component={Cookies} />
      <Route path="/signup" component={Signup} />
      <Route path="/learnmore" component={learnMorePage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Router />
        <Toaster />
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;