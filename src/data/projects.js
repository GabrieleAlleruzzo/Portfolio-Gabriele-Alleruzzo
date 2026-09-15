import startfoundCover from "../assets/projects/startfound/cover.png";
import startfound01 from "../assets/projects/startfound/01.jpg";
import startfound02 from "../assets/projects/startfound/02.png";
import startfound03 from "../assets/projects/startfound/03.jpg";

import storicaCover from "../assets/projects/storica/cover.png";
import storica01 from "../assets/projects/storica/01-mood.png";
import storica02 from "../assets/projects/storica/03.png";

import zankleCover from "../assets/projects/zankle/cover.png";
import zankle01 from "../assets/projects/zankle/01.png";
import zankle02 from "../assets/projects/zankle/02.png";
import zankle03 from "../assets/projects/zankle/03.png";

export const projects = [
  {
    slug: "startfound",
    nomeProgetto: "Startfound",
    anno: "2021",
    presso: "Mind Lab Srl",
    cover: startfoundCover,
    images: [startfound01, startfound02, startfound03],
    cardServizi: {
      it: ["Logo design", "Merchandise", "Contenuti social"],
      en: ["Logo design", "Merchandise", "Social contents"],
      de: ["Logodesign", "Merchandise", "Social-Media-Inhalte"],
    },
    servizi: {
      it: ["Logo design", "Merchandise", "Contenuti social"],
      en: ["Logo design", "Merchandise", "Social contents"],
    },
    descrizioneProgetto: {
      it: "Progetto di brand identity — Startfound\n\nStartfound è un'agenzia di consulenza finanziaria specializzata nel settore dell'ecosostenibilità con sede a Messina, essa aiuta privati e aziende a fare la scelta giusta per un futuro più verde offrendo servizi d'installazione di pannelli solari, noleggio auto elettriche, consulenza energetica, formazione e informazione.",
      en: "Brand identity project — Startfound\n\nStartfound is a financial consulting agency specialising in environmental sustainability, based in Messina. It helps individuals and companies make the right choice for a greener future, offering solar panel installation, electric car rental, energy consulting, training and information services.",
    },
    social: {
      facebook: "https://www.facebook.com/startfoundsrl",
      instagram: "https://www.instagram.com/startfoundsrl/",
      linkedin: "https://www.linkedin.com/company/startfound-srl/",
    },
  },
  {
    slug: "storica",
    nomeProgetto: "Storica Assicurazioni 1832",
    anno: "2021",
    presso: "Mind Lab Srl",
    cover: storicaCover,
    images: [storica01, storica02],
    cardServizi: {
      it: ["Logo design", "Brand identity", "Contenuti social"],
      en: ["Logo design", "Brand identity", "Social contents"],
      de: ["Logodesign", "Markenidentität", "Social-Media-Inhalte"],
    },
    servizi: {
      it: ["Logo design", "Brand identity", "Contenuti social"],
      en: ["Logo design", "Brand identity", "Social contents"],
      de: ["Logodesign", "Markenidentität", "Social-Media-Inhalte"],
    },
    descrizioneProgetto: {
      it: "Progetto di brand identity — Storica\n\nStorica è un'agenzia assicurativa di Messina attiva dal 1832. L'identità recupera i simboli della città — la Madonnina del porto e la pigna della fontana — e li porta in un marchio essenziale, accompagnato da una palette rosso e grigio antracite e dal carattere Aleo.",
      en: "Brand identity project — Storica\n\nStorica is an insurance agency in Messina, active since 1832. The identity draws on the city's own symbols — the harbour Madonnina and the fountain's pine cone — and turns them into an essential mark, paired with a red and charcoal palette and the Aleo typeface.",
      de: "Markenidentitätsprojekt — Storica\n\nStorica ist eine Versicherungsagentur in Messina, tätig seit 1832. Die Identität greift die Symbole der Stadt auf — die Madonnina des Hafens und den Pinienzapfen des Brunnens — und überträgt sie in ein wesentliches Markenzeichen, begleitet von einer rot-anthrazitfarbenen Palette und der Schriftart Aleo.",
    },
    social: {
      facebook: "",
      instagram: "",
      linkedin: "",
    },
  },
  {
    slug: "zankle",
    nomeProgetto: "Zankle Birrificio Artiginale",
    anno: "2020",
    presso: "Messina",
    cover: zankleCover,
    images: [zankle01, zankle02, zankle03],
    cardServizi: {
      it: ["Logo design", "Brand identity", "Packaging"],
      en: ["Logo design", "Brand identity", "Packaging"],
      de: ["Logodesign", "Markenidentität", "Packaging"],
    },
    servizi: {
      it: ["Logo design", "Brand identity", "Packaging"],
      en: ["Logo design", "Brand identity", "Packaging"],
    },
    descrizioneProgetto: {
      it: "Progetto di brand identity — Zankle Birrificio Artigianale\n\nZankle è l'unico birrificio artigianale della città di Messina, produttore delle birre Scilla e Cariddi. Il mood, cosi come il marchio e le birre, sono fortemente ispirati alle leggende dello Stretto di Messina con l'obiettivo di raccontare e valorizzare i miti e la cultura del territorio.\n\nDi particolare rilevanza è stata la Statua del Nettuno sita a Messina in Via Garibaldi, è stata il punto di partenza per lo sviluppo dell'identità visiva del birrificio, poiché, ritrae Nettuno, Scilla e Cariddi nelle loro iconiche pose.",
      en: "Brand identity project — Zankle Birrificio Artigianale\n\nZankle is the only craft brewery in the city of Messina, producer of the Scilla and Cariddi beers. The mood, like the mark and the beers themselves, is strongly inspired by the legends of the Strait of Messina, with the aim of telling and giving value to the myths and the culture of the territory.\n\nOf particular relevance was the Statue of Neptune in Via Garibaldi, Messina: it was the starting point for the development of the brewery's visual identity, as it portrays Neptune, Scilla and Cariddi in their iconic poses.",
    },
    social: {
      facebook: "https://www.facebook.com/BirrificioZankle",
      instagram: "https://www.instagram.com/birrificiozankle/",
      linkedin: "",
    },
  },
];

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug);
}

export function pickLocalized(value, lang) {
  if (!value || typeof value !== "object") return value;
  return value[lang] || value.it || value.en || "";
}
