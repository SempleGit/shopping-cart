import uniqid from 'uniqid';
import wool from '../images/wool.jpg';
import dust from '../images/dust.jpg';
import sand from '../images/sand.jpg';
import shift from '../images/shift.jpg';
import beacon23 from '../images/beacon23.jpg';
import plagiarist from '../images/plagiarist.jpg';

const audiobooks = [
  {
  title: "Wool",
  author: "Hugh Howey",
  img: wool,
  id: uniqid(),
  },
  {
  title: "Shift",
  author: "Hugh Howey",
  img: shift,
  id: uniqid(),
  },
  {
  title: "Dust",
  author: "Hugh Howey",
  img: dust,
  id: uniqid(),
  },
  {
  title: "Sand",
  author: "Hugh Howey",
  img: sand,
  id: uniqid(),
  },
  {
  title: "Beacon 23",
  author: "Hugh Howey",
  img: beacon23,
  id: uniqid(),
  },
  {
  title: "The Plagiarist",
  author: "Hugh Howey",
  img: plagiarist,
  id: uniqid(),
  },
];

export {audiobooks};