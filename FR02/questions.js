/* ============================================================
   QUESTIONS FILE
   French A2 Level Test — DELF-style
   Sections: Reading (2 passages) · Grammar & Conjugation ·
             Vocabulary · Sentence Transformation · Short Essay
   Total: 66 Points across 30 questions
   ============================================================ */

const TEST_CONFIG = {

  testCode: "FR-A2-002",

  title: "French A2 Level Test",

  intro: "This test follows a DELF A2 style: reading comprehension, grammar, vocabulary, and short written production. Read each question carefully and complete all 30 before submitting.",

  timeLimitMinutes: 60,

  // Set these before this test goes out — see the format guide.
  startDate: "2026-07-20T09:00:00",
  deadline: "2026-07-27T23:59:59",

  // Leave OFF for this test: Q1–Q5 and Q6–Q10 each depend on a
  // shared reading passage — shuffling could separate the passage
  // from its questions and confuse the taker.
  shuffleQuestions: false,
  shuffleOptions: false,

  questions: [

    // =========================
    // READING — Passage 1 (10 points)
    // =========================

    {
      type: "mc",
      prompt:
`Lisez le texte.

Paul habite à Marseille. Il est professeur dans une école primaire. Le matin, il se lève à sept heures et il prend un café avant de partir au travail. Il aime son métier parce qu'il adore les enfants. Le week-end, il fait du sport avec ses amis.

Où habite Paul ?`,
      points: 2,
      options: ["Paris", "Marseille", "Lyon", "Nice"],
      correctIndex: 1
    },

    {
      type: "mc",
      prompt: "Quelle est la profession de Paul ?",
      points: 2,
      options: ["Médecin", "Professeur", "Ingénieur", "Avocat"],
      correctIndex: 1
    },

    {
      type: "mc",
      prompt: "À quelle heure Paul se lève-t-il ?",
      points: 2,
      options: ["Six heures", "Sept heures", "Huit heures", "Neuf heures"],
      correctIndex: 1
    },

    {
      type: "mc",
      prompt: "Que fait Paul le week-end ?",
      points: 2,
      options: ["Il regarde la télévision", "Il fait du sport", "Il travaille", "Il dort toute la journée"],
      correctIndex: 1
    },

    {
      type: "short",
      prompt: "En une phrase, expliquez pourquoi Paul aime son métier.",
      points: 2,
      answer: "Parce qu'il adore les enfants."
    },

    // =========================
    // READING — Passage 2 (10 points)
    // =========================

    {
      type: "mc",
      prompt:
`Lisez le texte.

Chère Amélie, Je passe des vacances formidables en Bretagne avec ma famille. Il fait beau et nous allons souvent à la plage. Hier, nous avons visité un petit village et j'ai acheté des cartes postales. Demain, nous irons au marché. Je rentre samedi prochain. Grosses bises, Claire

Où Claire passe-t-elle ses vacances ?`,
      points: 2,
      options: ["Normandie", "Bretagne", "Provence", "Alsace"],
      correctIndex: 1
    },

    {
      type: "mc",
      prompt: "Avec qui Claire est-elle en vacances ?",
      points: 2,
      options: ["Ses amis", "Sa famille", "Ses collègues", "Elle est seule"],
      correctIndex: 1
    },

    {
      type: "mc",
      prompt: "Qu'a acheté Claire hier ?",
      points: 2,
      options: ["Des vêtements", "Des cartes postales", "Des livres", "Des bijoux"],
      correctIndex: 1
    },

    {
      type: "mc",
      prompt: "Quand Claire rentre-t-elle ?",
      points: 2,
      options: ["Vendredi", "Samedi prochain", "Dimanche", "Lundi"],
      correctIndex: 1
    },

    {
      type: "short",
      prompt: "Que va faire Claire demain ?",
      points: 2,
      answer: "Elle va aller au marché."
    },

    // =========================
    // GRAMMAR & CONJUGATION (16 points)
    // =========================

    {
      type: "mc",
      prompt: "Tu ____ français très bien.",
      points: 2,
      options: ["parle", "parles", "parlons", "parlez"],
      correctIndex: 1
    },

    {
      type: "mc",
      prompt: "Elles ____ (finir) leurs devoirs avant le dîner.",
      points: 2,
      options: ["finis", "finit", "finissent", "finissons"],
      correctIndex: 2
    },

    {
      type: "mc",
      prompt: "Hier, nous ____ au cinéma avec des amis.",
      points: 2,
      options: ["allons", "sommes allés", "irons", "allions"],
      correctIndex: 1
    },

    {
      type: "mc",
      prompt: "Quand j'étais petit, je ____ souvent à la piscine.",
      points: 2,
      options: ["vais", "suis allé", "allais", "irai"],
      correctIndex: 2
    },

    {
      type: "mc",
      prompt: "Je vais ____ Paris la semaine prochaine.",
      points: 2,
      options: ["à", "en", "au", "dans"],
      correctIndex: 0
    },

    {
      type: "short",
      prompt: "Conjuguez le verbe \"avoir\" au présent avec \"vous\".",
      points: 2,
      answer: "vous avez"
    },

    {
      type: "short",
      prompt: "Mettez cette phrase au futur simple : \"Je mange une pomme.\"",
      points: 2,
      answer: "Je mangerai une pomme."
    },

    {
      type: "short",
      prompt: "Conjuguez le verbe \"être\" à l'imparfait avec \"ils\".",
      points: 2,
      answer: "ils étaient"
    },

    // =========================
    // VOCABULARY (12 points)
    // =========================

    {
      type: "mc",
      prompt: "Quel est le synonyme de \"heureux\" ?",
      points: 2,
      options: ["Triste", "Content", "Fatigué", "En colère"],
      correctIndex: 1
    },

    {
      type: "mc",
      prompt: "Quel est le contraire de \"facile\" ?",
      points: 2,
      options: ["Difficile", "Simple", "Rapide", "Lent"],
      correctIndex: 0
    },

    {
      type: "mc",
      prompt: "Il pleut, prends ton ____.",
      points: 2,
      options: ["Chapeau", "Parapluie", "Lunettes", "Écharpe"],
      correctIndex: 1
    },

    {
      type: "mc",
      prompt: "Où achète-t-on du pain ?",
      points: 2,
      options: ["À la boulangerie", "À la pharmacie", "À la librairie", "À la bibliothèque"],
      correctIndex: 0
    },

    {
      type: "mc",
      prompt: "Trouvez l'intrus (le mot qui ne va pas avec les autres) :",
      points: 2,
      options: ["Pomme", "Banane", "Carotte", "Orange"],
      correctIndex: 2
    },

    {
      type: "mc",
      prompt: "Comment appelle-t-on une personne qui enseigne ?",
      points: 2,
      options: ["Un étudiant", "Un professeur", "Un directeur", "Un employé"],
      correctIndex: 1
    },

    // =========================
    // SENTENCE TRANSFORMATION (8 points)
    // =========================

    {
      type: "short",
      prompt: "Transformez à la forme négative : \"Il aime le café.\"",
      points: 2,
      answer: "Il n'aime pas le café."
    },

    {
      type: "short",
      prompt: "Posez la question correspondant à cette réponse : \"Je m'appelle Marc.\"",
      points: 2,
      answer: "Comment vous appelez-vous ? / Comment tu t'appelles ?"
    },

    {
      type: "short",
      prompt: "Écrivez une phrase avec le mot \"toujours\".",
      points: 2,
      answer: "Réponse libre (phrase correcte utilisant 'toujours')."
    },

    {
      type: "short",
      prompt: "Mettez au pluriel : \"Le chat noir.\"",
      points: 2,
      answer: "Les chats noirs."
    },

    // =========================
    // SHORT ESSAY / WRITTEN PRODUCTION (10 points)
    // =========================

    {
      type: "short",
      prompt: "Décrivez votre routine quotidienne en 40 à 50 mots.",
      points: 5,
      answer: "Réponse libre — vérifier l'usage du présent de l'indicatif, la cohérence du texte et une longueur proche de 40 à 50 mots."
    },

    {
      type: "short",
      prompt: "Écrivez une courte lettre (40 à 50 mots) à un ami pour l'inviter à une fête.",
      points: 5,
      answer: "Réponse libre — vérifier le format d'une lettre informelle (formule d'appel, contenu, formule de politesse), la clarté et une longueur proche de 40 à 50 mots."
    }

  ]
};
