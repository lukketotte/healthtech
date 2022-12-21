import Lukas from './media/lukas.jpg';
import Jonni from './media/Bild_Jonni.jpeg';
import Johan from './media/johan.jpg';
import zakris from './media/zakris.jpg';

export interface TeamProps {
  name: string;
  position: string;
  img: string;
  email: string;
  linkedin?: string;
  github?: string;
}

export const TeamList: TeamProps[] = [
  {
    name: 'Lukas Arnroth',
    position: 'CAO',
    img: Lukas,
    email: 'lukas.arnroth@keyframestatistics.se',
    github: 'https://github.com/lukketotte',
    linkedin: 'https://www.linkedin.com/in/lukas-arnroth-b51430140/',
  },
  {
    name: 'Jonni Fidler Dennis',
    position: 'CEO',
    img: Jonni,
    email: 'jonni.fidlerdennis@keyframestatistics.se',
    linkedin: 'https://www.linkedin.com/in/jonni-fidler-dennis-0b0a7b21/',
  },
  {
    name: 'Johan Hodell',
    position: 'CFO',
    img: Johan,
    email: 'johan.hodell@keyframestatistics.se',
    linkedin: 'https://www.linkedin.com/in/johanhodell/',
  },
  {
    name: 'Zakris Strömqvist',
    position: 'CTO',
    img: zakris,
    email: 'zakris.stromqvist@keyframestatistics.se',
    github: 'https://github.com/zstromqvist',
    linkedin: 'https://www.linkedin.com/in/zakris-str%C3%B6mqvist-378926233/',
  },
];
