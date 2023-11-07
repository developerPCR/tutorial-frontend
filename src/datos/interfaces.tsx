export interface NavMenu {
    title?: string;
   
  }

export  interface DropDownMenuProps {
    links: { path: string; text: string }[],
    title: string // Define la interfaz directamente aquí
  }