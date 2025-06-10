import { createContext, useContext, useState } from "react";

type WorkingHours = {
  start: string;
  end: string;
};

type UserPreferences = {
  working_hours: WorkingHours;
  preferred_categories: string[];
};

type UserPreferencesContextType = {
  preferences: UserPreferences;
  updatePreferences: (prefs: Partial<UserPreferences>) => void;
};

const defaultValues: UserPreferences = {
  working_hours: { start: "09:00", end: "18:00" },
  preferred_categories: ["work", "personal"],
};

const UserPreferencesContext = createContext<UserPreferencesContextType | null>(
  null
);

export const UserPreferencesProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [preferences, setPreferences] =
    useState<UserPreferences>(defaultValues);

  const updatePreferences = (prefs: Partial<UserPreferences>) => {
    setPreferences((prev) => ({
      ...prev,
      ...prefs,
      working_hours: {
        ...prev.working_hours,
        ...prefs.working_hours,
      },
    }));
  };

  return (
    <UserPreferencesContext.Provider value={{ preferences, updatePreferences }}>
      {children}
    </UserPreferencesContext.Provider>
  );
};

export const useUserPreferences = () => {
  const context = useContext(UserPreferencesContext);
  if (!context) {
    throw new Error(
      "useUserPreferences deve ser usado dentro do UserPreferencesProvider"
    );
  }
  return context;
};
