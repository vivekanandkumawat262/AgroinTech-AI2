// src/context/DashboardContext.tsx

import {
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";

import type { ReactNode } from "react";

interface DashboardStats {
  totalFarmers: number;

  activeCampaigns: number;

  generatedVariants: number;

  predictedEngagement: number;
}

interface ContextType {

  stats: DashboardStats;

  updateStats: (
    data: Partial<DashboardStats>
  ) => void;

  resetStats: () => void;
}

const initialState: DashboardStats = {
  totalFarmers: 52481,

  activeCampaigns: 124,

  generatedVariants: 12540,

  predictedEngagement: 84,
};

const DashboardContext =
  createContext<
    ContextType | null
  >(null);

interface Props {
  children: ReactNode;
}

export function DashboardProvider({
  children,
}: Props) {

  const [
    stats,
    setStats,
  ] = useState<DashboardStats>(
    initialState
  );

  function updateStats(
    data: Partial<DashboardStats>
  ) {

    setStats(
      prev => ({
        ...prev,

        ...data,
      })
    );

  }

  function resetStats() {

    setStats(
      initialState
    );

  }

  const value =
    useMemo(
      () => ({
        stats,

        updateStats,

        resetStats,
      }),

      [stats]
    );

  return (

    <DashboardContext.Provider
      value={value}
    >

      {children}

    </DashboardContext.Provider>

  );

}

export function useDashboard() {

  const context =
    useContext(
      DashboardContext
    );

  if (!context) {

    throw new Error(
      "Dashboard provider missing"
    );

  }

  return context;

}