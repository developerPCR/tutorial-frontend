import { useState } from 'react';
import { Link } from 'react-router-dom';
import { DropDownMenuProps } from '../datos/interfaces';


const DropDownMenu: React.FC<DropDownMenuProps> = ({ links, title }) => {
  const [activo, setActivo] = useState(false);

  return (
    <div>
      <button
        onClick={() => setActivo(!activo)}
        className={activo ? 'text-red-500' : 'text-blue-500'}
      >
        <p>{title}</p>
      </button>
      {activo && (
        <ul className="h-16 text-white  flex flex-col justify-center items-center">
          {links.map((link, index) => (
            <li key={index}>
              <Link to={link.path}>{link.text}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropDownMenu;
