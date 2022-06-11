import {
  NotFoundPage,
  DashboardPage,
  DocumentPage,
  LoginPage,
  RegisterPage,
  ForgotPasswordPage,
  PublicPage,
  SettingsPage,
  UserPage,
} from "pages";
import { Routes, Route } from "react-router-dom";
import { PrivateRoutes } from "./private-routes";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<PublicPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route element={<PrivateRoutes />}>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/users" element={<UserPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/documents" element={<DocumentPage />} />
      </Route>
      <Route path="/*" element={<NotFoundPage />} />
    </Routes>
  );
}
