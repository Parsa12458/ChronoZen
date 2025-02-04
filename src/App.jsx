import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import SignupPage from "./pages/SignupPage";
import AppLayout from "./ui/AppLayout";
import PageNotFound from "./ui/PageNotFound";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import TasksPage from "./pages/TasksPage";
import HabitsPage from "./pages/HabitsPage";
import EventsPage from "./pages/EventsPage";
import GoalsPage from "./pages/GoalsPage";
import NotesPage from "./pages/NotesPage";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ProtectedRoute from "./ui/ProtectedRoute";
import { ModalProvider } from "./contexts/ModalContext";

const queryClient = new QueryClient();

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ModalProvider>
          <ReactQueryDevtools initialIsOpen={false} />
          <Toaster
            position="top-center"
            reverseOrder={true}
            containerClassName="mt-2"
            toastOptions={{
              className: "!px-4 font-medium !max-w-full",
            }}
          />
          <Routes>
            <Route
              path="/signup"
              element={
                <ProtectedRoute navigateUrl="/dashboard">
                  <SignupPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/login"
              element={
                <ProtectedRoute navigateUrl="/dashboard">
                  <LoginPage />
                </ProtectedRoute>
              }
            />

            <Route
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate replace to="dashboard" />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/tasks" element={<TasksPage />} />
              <Route path="/habits" element={<HabitsPage />} />
              <Route path="/events" element={<EventsPage />} />
              <Route path="/goals" element={<GoalsPage />} />
              <Route path="/notes" element={<NotesPage />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </ModalProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
