/* ============================================================
   QUESTIONS FILE
   Fun Facts About France Quiz
   Section: General Knowledge — France
   Total: 40 Points across 20 questions
   ============================================================ */

const TEST_CONFIG = {

  testCode: "FUN-FRANCE-001",

  title: "Fun Facts About France Quiz",

  intro: "A light, 20-question multiple choice quiz all about France — geography, history, food, culture, and a few surprises. Every answer comes with a quick explanation and fun fact.",

  timeLimitMinutes: 20,

  // Set these before this test goes out — see the format guide.
  startDate: "",
  deadline: "",

  // Fun trivia quiz, no reading passages or dependent questions,
  // so it's safe to shuffle if you'd like.
  shuffleQuestions: false,
  shuffleOptions: false,

  questions: [

    {
      type: "mc",
      prompt: "What is the capital of France?",
      points: 2,
      options: ["Lyon", "Marseille", "Paris", "Nice"],
      correctIndex: 2,
      explanation: "Paris has been France's capital for over a thousand years and sits on the banks of the Seine River. With around 2 million residents in the city itself, it's one of the most visited cities on Earth."
    },

    {
      type: "mc",
      prompt: "Which river flows through the heart of Paris?",
      points: 2,
      options: ["The Loire", "The Rhône", "The Seine", "The Garonne"],
      correctIndex: 2,
      explanation: "The Seine winds through Paris for about 13 kilometers, passing famous landmarks like Notre-Dame and the Louvre. Boat tours along it, called 'bateaux-mouches,' are a classic tourist activity."
    },

    {
      type: "mc",
      prompt: "What is the tallest mountain in France (and in the Alps)?",
      points: 2,
      options: ["Mont Blanc", "Mont Ventoux", "Pic du Midi", "Puy de Dôme"],
      correctIndex: 0,
      explanation: "Mont Blanc stands at 4,808 meters (15,774 feet) and straddles the border between France and Italy. It's the highest peak in Western Europe and a major draw for mountaineers."
    },

    {
      type: "mc",
      prompt: "The Mona Lisa is displayed in which Paris museum?",
      points: 2,
      options: ["Musée d'Orsay", "Centre Pompidou", "The Louvre", "Musée Rodin"],
      correctIndex: 2,
      explanation: "The Louvre is the world's most-visited museum, and the Mona Lisa is its biggest draw — even though the painting itself is a modest 77 by 53 centimeters, much smaller than most people expect."
    },

    {
      type: "mc",
      prompt: "What is France's national motto?",
      points: 2,
      options: [
        "Unité, Travail, Progrès",
        "Liberté, Égalité, Fraternité",
        "Honneur et Patrie",
        "Dieu et mon droit"
      ],
      correctIndex: 1,
      explanation: "\"Liberty, Equality, Fraternity\" dates back to the French Revolution and is still inscribed on French coins, public buildings, and official documents today."
    },

    {
      type: "mc",
      prompt: "In what year did the French Revolution begin?",
      points: 2,
      options: ["1789", "1815", "1848", "1870"],
      correctIndex: 0,
      explanation: "The Revolution began in 1789 with events like the storming of the Bastille prison on July 14 — a date still celebrated today as Bastille Day, France's national holiday."
    },

    {
      type: "mc",
      prompt: "Which flaky, crescent-shaped pastry is a French breakfast staple?",
      points: 2,
      options: ["Croissant", "Baguette", "Macaron", "Éclair"],
      correctIndex: 0,
      explanation: "Despite being a French icon, the croissant's shape actually traces back to Austria's 'kipferl.' French bakers adapted it into the buttery, laminated-dough pastry we know today."
    },

    {
      type: "mc",
      prompt: "What is the title of the French national anthem?",
      points: 2,
      options: ["Ma France", "La Marseillaise", "L'Hymne National", "Vive la République"],
      correctIndex: 1,
      explanation: "La Marseillaise was written in 1792 as a rallying march for French troops and gets its name because it was popularized by volunteer soldiers from Marseille."
    },

    {
      type: "mc",
      prompt: "Who designed the Eiffel Tower?",
      points: 2,
      options: ["Gustave Eiffel", "Le Corbusier", "Baron Haussmann", "Auguste Rodin"],
      correctIndex: 0,
      explanation: "Gustave Eiffel's engineering firm built the tower for the 1889 World's Fair. It was meant to be temporary and stand for only 20 years, but it proved too useful as a radio transmission tower to tear down."
    },

    {
      type: "mc",
      prompt: "Which ocean lies along France's western coastline?",
      points: 2,
      options: ["The Pacific", "The Indian Ocean", "The Atlantic", "The Arctic"],
      correctIndex: 2,
      explanation: "France's Atlantic coast stretches from Brittany down to the Spanish border, and it's home to famous surf spots like Biarritz as well as major ports like Bordeaux and Nantes."
    },

    {
      type: "mc",
      prompt: "How many countries share a land border with mainland France?",
      points: 2,
      options: ["4", "6", "8", "10"],
      correctIndex: 2,
      explanation: "Mainland France borders eight countries: Belgium, Luxembourg, Germany, Switzerland, Italy, Monaco, Spain, and Andorra — making it one of the most bordered countries in Western Europe."
    },

    {
      type: "mc",
      prompt: "Which French cheese is traditionally shaped like a small wheel and named after a village in Normandy?",
      points: 2,
      options: ["Roquefort", "Brie", "Camembert", "Comté"],
      correctIndex: 2,
      explanation: "Camembert originated in the Normandy village of the same name in the late 18th century. France produces hundreds of distinct cheese varieties — often said to be well over 1,000."
    },

    {
      type: "mc",
      prompt: "The Tour de France is best known as which type of sporting event?",
      points: 2,
      options: ["A marathon", "A multi-stage cycling race", "A tennis tournament", "A sailing regatta"],
      correctIndex: 1,
      explanation: "First held in 1903, the Tour de France is a multi-stage bicycle race covering roughly 3,500 kilometers over about three weeks, mostly through French territory with occasional trips into neighboring countries."
    },

    {
      type: "mc",
      prompt: "Which French region is famous as the birthplace of champagne?",
      points: 2,
      options: ["Provence", "Champagne", "Alsace", "Normandy"],
      correctIndex: 1,
      explanation: "By law, only sparkling wine produced in the Champagne region using specific methods can be called \"champagne\" — anything else, however similar, must be labeled sparkling wine."
    },

    {
      type: "mc",
      prompt: "The Notre-Dame Cathedral, famous for its 2019 fire, is located in which city?",
      points: 2,
      options: ["Reims", "Chartres", "Paris", "Rouen"],
      correctIndex: 2,
      explanation: "Notre-Dame de Paris took nearly 200 years to build, starting in 1163. After the devastating 2019 fire, it reopened to the public in December 2024 following a major restoration."
    },

    {
      type: "mc",
      prompt: "The French Open tennis tournament is held at which venue?",
      points: 2,
      options: ["Roland Garros", "Wimbledon", "Stade de France", "Parc des Princes"],
      correctIndex: 0,
      explanation: "Roland Garros is the only Grand Slam tournament played on clay courts, which slow the ball down and tend to favor players with strong baseline rallies."
    },

    {
      type: "mc",
      prompt: "What was the name of France's official currency before it adopted the euro?",
      points: 2,
      options: ["The Lira", "The Franc", "The Mark", "The Peseta"],
      correctIndex: 1,
      explanation: "The French franc was used for roughly two centuries before France switched to the euro in 2002, along with most other European Union member states."
    },

    {
      type: "mc",
      prompt: "Which French king is most closely associated with building the Palace of Versailles?",
      points: 2,
      options: ["Louis XIV", "Napoleon Bonaparte", "Charlemagne", "Louis XVI"],
      correctIndex: 0,
      explanation: "Known as the \"Sun King,\" Louis XIV expanded Versailles from a hunting lodge into an enormous palace, moving the royal court there in 1682 to help keep the nobility close and under his watch."
    },

    {
      type: "mc",
      prompt: "What historical event does Bastille Day (July 14) commemorate?",
      points: 2,
      options: [
        "The signing of the Treaty of Versailles",
        "The storming of the Bastille prison in 1789",
        "The end of World War II in Europe",
        "The coronation of Napoleon"
      ],
      correctIndex: 1,
      explanation: "The Bastille was a Paris fortress and prison that came to symbolize royal tyranny. Its storming by revolutionaries on July 14, 1789, is widely seen as the spark of the French Revolution."
    },

    {
      type: "mc",
      prompt: "Which small, sweet, colorful confection made of almond meringue is a well-known French treat?",
      points: 2,
      options: ["Macaron", "Madeleine", "Nougat", "Financier"],
      correctIndex: 0,
      explanation: "Modern macarons — with their smooth shells and ganache or buttercream filling — were popularized in Paris in the early 20th century, though similar almond meringue cookies existed centuries earlier."
    },

    {
      type: "mc",
      prompt: "Approximately how many time zones does France span, once all its overseas territories are included?",
      points: 2,
      options: ["1", "5", "8", "12"],
      correctIndex: 3,
      explanation: "Thanks to its overseas territories scattered across the globe — from French Polynesia to French Guiana — France spans 12 time zones, more than any other country in the world."
    }

  ]
};
