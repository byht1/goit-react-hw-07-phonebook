import React from 'react';
import PropTypes from 'prop-types';
import { NameContacts, List, Elements, Button } from './ContactList.styled';
import {
  useDeleteContactsMutation,
  useGetContactsQuery,
} from 'redux/itemsContact';

// const useContacts = () => {
//   const filter = useSelector(state => state.filter.value);

//   const selectFilteredContacts = useMemo(() => {
//     return createSelector(
//       [response => response.data, (_, filter) => filter],
//       (contacts, filter) => {
//         return (
//           contacts?.filter(m =>
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
//         filteredMaterials: selectFilteredContacts(result, filter),
//       };
//     },
//   });
// };

const ContactList = () => {
  const { data, isLoading, error } = useGetContactsQuery();
  const [deleteMaterial, { isLoading: isLoadingDelete }] =
    useDeleteContactsMutation();

  return (
    <List>
      {error
        ? error.data
        : isLoading
        ? 'НАДА НАМАЛЮВАТИ СПІНЕР'
        : data.map(({ id, name, number }) => (
            <Elements key={`${id}${number}`}>
              <NameContacts>
                {name}: {number}
              </NameContacts>
              <Button
                type="button"
                name={id}
                onClick={() => deleteMaterial(id)}
                disabled={isLoadingDelete}
              >
                Delete
              </Button>
            </Elements>
          ))}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;
