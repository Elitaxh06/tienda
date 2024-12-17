import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <header className="bg-gray-100 p-4 rounded-lg">
      <ul>
        <li>
            <Link to="/cart">Home</Link>
        </li>
      </ul>
    </header>
  );
};

export { Header };