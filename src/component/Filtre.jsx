import React from 'react';

const Filter = ({ filter, setFilter }) => {
  return (
    <div className="flex space-x-3">
      <input
        type="text"
        placeholder=" Filter par Titre"
        value={filter.titre}
        onChange={(e) => setFilter({ ...filter, titre: e.target.value })}
        className="p-2 border border-gray-300 rounded-lg"
      />
      <input
        type="number"
        placeholder="filter par Note"
        value={filter.note}
        onChange={(e) => setFilter({ ...filter, note: Number(e.target.value) })}
        className="p-2 border border-gray-300 rounded-lg"
      />
    </div>
  );
};

export default Filter;
