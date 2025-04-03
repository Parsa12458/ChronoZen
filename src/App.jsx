import { lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ProtectedRoute from "./ui/ProtectedRoute";
import { ModalProvider } from "./contexts/ModalContext";
import FullSpinner from "./ui/FullSpinner";
const SignupPage = lazy(() => import("./pages/SignupPage"));
const AppLayout = lazy(() => import("./ui/AppLayout"));
const PageNotFound = lazy(() => import("./ui/PageNotFound"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const DashboardPage = lazy(() => import("./pages/DashboardPage"));
const TasksPage = lazy(() => import("./pages/TasksPage"));
const HabitsPage = lazy(() => import("./pages/HabitsPage"));
const EventsPage = lazy(() => import("./pages/EventsPage"));
const GoalsPage = lazy(() => import("./pages/GoalsPage"));
const NotesPage = lazy(() => import("./pages/NotesPage"));

export const queryClient = new QueryClient();

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
          <Suspense fallback={<FullSpinner />}>
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
          </Suspense>
        </ModalProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
