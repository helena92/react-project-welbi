import { createContext, useState, useEffect } from 'react';

import { gql, useQuery } from '@apollo/client';

export const ResidentsContext = createContext({
  residentsMap: {},
});

const RESIDENTS = gql`
  query {
    residents {
      name,
      id
    }
  }
`;

export const ResidentsProvider = ({ children }) => {
  const [residentsMap, setResidentsMap] = useState({});
  const { loading, error, data } = useQuery(RESIDENTS, {
    headers: {
      authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  console.log(data);

  useEffect(() => {
    if (data) {

      const { residents } = data;

      const peopleMap = residents.reduce((acc, resident) => {
        const { name, id } = resident;
        acc[id] = { name };
        return acc;
      }, {});

      setResidentsMap(peopleMap);
    }
  }, [data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <ResidentsContext.Provider value={residentsMap}>
      {children}
    </ResidentsContext.Provider>
  );
};

