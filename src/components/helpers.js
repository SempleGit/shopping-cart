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
  summary: `In a ruined and toxic landscape, a community exists in a giant silo underground, hundreds of stories deep. There, men and women live in a society full of regulations they believe are meant to protect them. Sheriff Holston, who has unwaveringly upheld the silo’s rules for years, unexpectedly breaks the greatest taboo of all: He asks to go outside.

  His fateful decision unleashes a drastic series of events. An unlikely candidate is appointed to replace him: Juliette, a mechanic with no training in law, whose special knack is fixing machines. Now Juliette is about to be entrusted with fixing her silo, and she will soon learn just how badly her world is broken. The silo is about to confront what its history has only hinted about and its inhabitants have never dared to whisper. Uprising.`,
  img: wool,
  id: uniqid(),
  },
  {
  title: "Shift",
  author: "Hugh Howey",
  summary: `In 2007, the Center for Automation in Nanobiotech (CAN) outlined the hardware and software platform that would one day allow robots smaller than human cells to make medical diagnoses, conduct repairs, and even self-propagate.

  In the same year, the CBS network re-aired a program about the effects of propranolol on sufferers of extreme trauma. A simple pill, it had been discovered, could wipe out the memory of any traumatic event.
  
  At almost the same moment in humanity's broad history, mankind had discovered the means for bringing about its utter downfall - and the ability to forget it ever happened.`,
  img: shift,
  id: uniqid(),
  },
  {
  title: "Dust",
  author: "Hugh Howey",
  summary: "Wool introduced the silo and its inhabitants. Shift told the story of their making. Dust will chronicle their undoing. Welcome to the underground.",
  img: dust,
  id: uniqid(),
  },
  {
  title: "Sand",
  author: "Hugh Howey",
  summary: "We live across the thousand dunes with grit in our teeth and sand in our homes. No one will come for us. No one will save us. This is our life, diving for remnants of the old world so that we may build what the wind destroys. No one is looking down on us. Those constellations in the night sky? Those are the backs of gods we see.",
  img: sand,
  id: uniqid(),
  },
  {
  title: "Beacon 23",
  author: "Hugh Howey",
  summary: `For centuries, men and women have manned lighthouses to ensure the safe passage of ships. It's a lonely job, and a thankless one for the most part - until something goes wrong, until a ship is in distress.

  In the 23rd century, this job has moved into outer space. A network of beacons allows ships to travel across the Milky Way at many times the speed of light. These beacons are built to be robust. They never break down. They never fail.
  
  At least, they aren't supposed to.`,
  img: beacon23,
  id: uniqid(),
  },
  {
  title: "The Plagiarist",
  author: "Hugh Howey",
  summary: `Adam Griffey is living two lives. By day, he teaches literature. At night, he steals it. Adam is a plagiarist, an expert reader with an eye for great works. He prowls simulated worlds perusing virtual texts, looking for the next big thing. And when he finds it, he memorizes it page by page, line by line, word for word. And then he brings it back to his world, the real world, and he sells it. But what happens when these virtual worlds begin to seem more real than his own? What happens when the people within them mean more to him than flesh and blood? What happens when a living thing falls in love with someone who does not actually exist?`,
  img: plagiarist,
  id: uniqid(),
  },
];

export {audiobooks};