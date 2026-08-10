"use client";

import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";

type Spotlight = {
  projectId: string;
  targetId?: string;
  // Bumped on every request so re-clicking the same evidence still re-triggers the scroll.
  token: number;
};

type ProjectSpotlightContextValue = {
  spotlight: Spotlight | null;
  requestSpotlight: (projectId: string, targetId?: string) => void;
};

const ProjectSpotlightContext = createContext<ProjectSpotlightContextValue | null>(null);

export function ProjectSpotlightProvider({ children }: { children: ReactNode }) {
  const [spotlight, setSpotlight] = useState<Spotlight | null>(null);

  const requestSpotlight = useCallback((projectId: string, targetId?: string) => {
    setSpotlight((prev) => ({ projectId, targetId, token: (prev?.token ?? 0) + 1 }));
  }, []);

  const value = useMemo(() => ({ spotlight, requestSpotlight }), [spotlight, requestSpotlight]);

  return (
    <ProjectSpotlightContext.Provider value={value}>
      {children}
    </ProjectSpotlightContext.Provider>
  );
}

export function useProjectSpotlight() {
  const ctx = useContext(ProjectSpotlightContext);
  if (!ctx) {
    throw new Error("useProjectSpotlight must be used within a ProjectSpotlightProvider");
  }
  return ctx;
}
