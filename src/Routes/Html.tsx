import DropDownMenu from "../organism/DropDownMenu";

const HTML = () => {
  const menuLinks = [
    { path: '/ruta/opcion1', text: 'Opción 1' },
    { path: '/ruta/opcion2', text: 'Opción 2' },
    { path: '/ruta/opcion3', text: 'Opción 3' },
  ];
  return (
    <div>
      <DropDownMenu links={menuLinks} title="Abreme 🥵"/>
    </div>
  )
}

export default HTML