import { createSelector } from '@reduxjs/toolkit';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useGetContactsQuery } from 'redux/itemsContact';

// export const useContacts = () => {
//   const filter = useSelector(state => state.filter.value);

//   const selectFilteredMaterials = useMemo(() => {
//     return createSelector(
//       [response => response.data, (_, filter) => filter],
//       (materials, filter) => {
//         return (
//           materials?.filter(m =>
//             m.title.toLowerCase().includes(filter.toLowerCase())
//           ) ?? []
//         );
//       }
//     );
//   }, []);

//   return useGetContactsQuery(undefined, {
//     selectFromResult(result) {
//       return {
//         ...result,
//         filteredMaterials: selectFilteredMaterials(result, filter),
//       };
//     },
//   });
// };

export const useContacts = () => {
  const filter = useSelector(state => state.filter.value);

  const selectFilteredContacts = useMemo(() => {
    return createSelector(
      [response => response.data, (_, filter) => filter],
      (contacts, filter) => {
        return (
          contacts?.filter(x =>
            x.name.toLowerCase().includes(filter.toLowerCase())
          ) ?? []
        );
      }
    );
  }, []);

  return useGetContactsQuery(undefined, {
    selectFromResult(result) {
      return {
        ...result,
        filteredContacts: selectFilteredContacts(result, filter),
      };
    },
  });
};
