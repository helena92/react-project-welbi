import React, { createContext, useState, useEffect } from 'react';
import { gql, useQuery } from '@apollo/client';

interface Program {
  name: string;
  id: string;
  start: string;
  end: string;
  location: string;
}

export interface ProgramsContextProps {
  programs: Array<Program>;
}

export const ProgramsContext = createContext<ProgramsContextProps>({
  programs: [],
});

const PROGRAMS = gql`
  {
    programs {
      name
      id
      start
      end
      location
    }
  }
`;

interface ProgramsProviderProps {
  children: React.ReactNode;
}

export const ProgramsProvider: React.FC<ProgramsProviderProps> = ({ children }) => {
  const [programs, setProgramsMap] = useState<Array<Program>>([]);
  const { loading, error, data } = useQuery(PROGRAMS, {
    context: {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    },
  });

  useEffect(() => {
    if (data) {
      const { programs } = data;
      setProgramsMap(programs);
    }
  }, [data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <ProgramsContext.Provider value={{ programs }}>
      {children}
    </ProgramsContext.Provider>
  );
};
