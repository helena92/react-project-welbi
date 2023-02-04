import { createContext, useState, useEffect } from 'react';

import { gql, useQuery } from '@apollo/client';

export const ProgramsContext = createContext({
  programsMap: {},
});

const RESIDENTS = gql`
  {
    programs {
      name,
      id,
      start,
      end,
      location
    }
  }
`;

export const ProgramsProvider = ({ children }) => {
  const [programsMap, setProgramsMap] = useState({});
  const { loading, error, data } = useQuery(RESIDENTS, {
    headers: {
      authorization: `Bearer ${localStorage.getItem("token")}`,
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
    <ProgramsContext.Provider value={programsMap}>
      {children}
    </ProgramsContext.Provider>
  );
};

