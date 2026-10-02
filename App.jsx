import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
import { PhoneFrame } from "./components/PhoneFrame";
import { ToastContainer } from "./components/Toast";

// 16 Screens
import { SplashScreen } from "./screens/SplashScreen";
import { OnboardingScreen } from "./screens/OnboardingScreen";
import { LoginScreen } from "./screens/LoginScreen";
import { RegisterScreen } from "./screens/RegisterScreen";
import { HomeScreen } from "./screens/HomeScreen";
import { FindBloodScreen } from "./screens/FindBloodScreen";
import { BloodDetailsScreen } from "./screens/BloodDetailsScreen";
import { RequestBloodScreen } from "./screens/RequestBloodScreen";
import { MyRequestsScreen } from "./screens/MyRequestsScreen";
import { DonorDashboardScreen } from "./screens/DonorDashboardScreen";
import { DonationAppointmentScreen } from "./screens/DonationAppointmentScreen";
import { DonationHistoryScreen } from "./screens/DonationHistoryScreen";
import { AIForecastScreen } from "./screens/AIForecastScreen";
import { NotificationsScreen } from "./screens/NotificationsScreen";
import { ProfileScreen } from "./screens/ProfileScreen";
import { SettingsScreen } from "./screens/SettingsScreen";

export default function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <ToastContainer />
        <PhoneFrame>
          <Routes>
            {/* 1. Splash Screen */}
            <Route path="/" element={<SplashScreen />} />

            {/* 2. Onboarding */}
            <Route path="/onboarding" element={<OnboardingScreen />} />

            {/* 3. Login */}
            <Route path="/login" element={<LoginScreen />} />

            {/* 4. Register */}
            <Route path="/register" element={<RegisterScreen />} />

            {/* 5. Home Dashboard */}
            <Route path="/home" element={<HomeScreen />} />

            {/* 6. Find Blood */}
            <Route path="/find-blood" element={<FindBloodScreen />} />

            {/* 7. Blood Details */}
            <Route path="/blood-details/:bloodGroup" element={<BloodDetailsScreen />} />

            {/* 8. Request Blood */}
            <Route path="/request-blood" element={<RequestBloodScreen />} />

            {/* 9. My Requests */}
            <Route path="/requests" element={<MyRequestsScreen />} />

            {/* 10. Donor Dashboard */}
            <Route path="/donor-dashboard" element={<DonorDashboardScreen />} />

            {/* 11. Donation Appointment */}
            <Route path="/appointments" element={<DonationAppointmentScreen />} />

            {/* 12. Donation History */}
            <Route path="/history" element={<DonationHistoryScreen />} />

            {/* 13. AI Forecast */}
            <Route path="/ai-forecast" element={<AIForecastScreen />} />

            {/* 14. Notifications */}
            <Route path="/notifications" element={<NotificationsScreen />} />

            {/* 15. Profile */}
            <Route path="/profile" element={<ProfileScreen />} />

            {/* 16. Settings */}
            <Route path="/settings" element={<SettingsScreen />} />

            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </PhoneFrame>
      </BrowserRouter>
    </AppProvider>
  );
}
