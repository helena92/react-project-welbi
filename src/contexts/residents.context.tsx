import React, { createContext, useState, useEffect } from 'react';
import { gql, useQuery } from '@apollo/client';

interface Resident {
  name: string;
  id: string;
}

interface ResidentsMap {
  [key: string]: Resident;
}

interface ResidentsContextProps {
  residentsMap: ResidentsMap;
}

export const ResidentsContext = createContext<ResidentsContextProps>({
  residentsMap: {},
});

const RESIDENTS = gql`
  query {
    residents {
      name
      id
    }
  }
`;

interface ResidentsProviderProps {
  children: React.ReactNode;
}

export const ResidentsProvider: React.FC<ResidentsProviderProps> = ({
  children,
}) => {
  const [residentsMap, setResidentsMap] = useState<ResidentsMap>({});
  const { loading, error, data } = useQuery(RESIDENTS, {
    context: {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    },
  });

  useEffect(() => {
    if (data) {
      const { residents } = data;
      const peopleMap = residents.reduce(
        (acc: ResidentsMap, resident: Resident) => {
          const { name, id } = resident;
          acc[id] = { name, id }
          return acc;
        },
        {}
      );

      setResidentsMap(peopleMap);
    }
  }, [data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <ResidentsContext.Provider value={{ residentsMap }}>
      {children}
    </ResidentsContext.Provider>
  );
};
