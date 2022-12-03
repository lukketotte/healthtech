import Lukas from './media/lukas.jpg';
import Jonni from './media/Bild_Jonni.jpeg';

export interface TeamProps {
  name: string;
  position: string;
  img: string;
  email: string;
  linkedin?: string;
  github?: string;
}

export const TeamList: TeamProps[] = [
  { name: 'Lukas Arnroth', position: 'CEO', img: Lukas, email: 'lukas.arnroth@gmail.com' },
  { name: 'Jonni Fidler Dennis', position: 'CEO', img: Jonni, email: 'lukas.arnroth@gmail.com' },
  { name: 'Johan Odell', position: 'CEO', img: Jonni, email: 'lukas.arnroth@gmail.com' },
  { name: 'Zakris Strömqvist', position: 'CEO', img: Jonni, email: 'lukas.arnroth@gmail.com' },
];
