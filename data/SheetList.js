import Blind75Questions, { BlindTopics } from "./SheetsData/Blind75";
import FrazSheetQuestions, { FrazTopics } from "./SheetsData/FrazSheet";
import Neetcode150Questions, {
  NeetcodeTopics,
} from "./SheetsData/Neetcode150questions";
import StriverSdeSheetQuestions, {
  SSSTopics,
} from "./SheetsData/StriverSdeSheetQuestions";
import LoveBabbarSheetQuestions, {
  LoveBabbarSheetTopics,
} from "./SheetsData/LoveBabbarSheet";
import AmanDsaQuestions, { AmanDsaTopics } from "./SheetsData/AmanDsaSheet";

const SheetList = [
  {
    id: 1,
    name: "Aman DSA Sheet",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRV9NRlI79mSrQGTFEVcX_3_7m_T1-SprpuL-QRwtfonyU5ibAqBS9eTb8T5DGd3XtpOw&usqp=CAU",
    problems: [...AmanDsaQuestions],
    length: 375,
    topics: [...AmanDsaTopics],
  },
  {
    id: 2,
    name: "Blind 75",
    img: "https://i.ytimg.com/vi/te0n2HX_1q4/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDZlodmhglVYwLffLrtJT9-gumQmQ",
    problems: [...Blind75Questions],
    length: 72,
    topics: [...BlindTopics],
  },
  {
    id: 3,
    name: "Neetcode 150",
    img: "https://i.ytimg.com/an/DmWirHqCq1s/10656977316200473306_mq.jpg?v=62c49873",
    problems: [...Neetcode150Questions],
    length: 150,
    topics: [...NeetcodeTopics],
  },
  {
    id: 4,
    name: "Love Babbar Sheet",
    img: "https://tenowl.com/wp-content/uploads/2021/09/Love-Babbar-DSA-Cracker-Sheet-450-Questions-1024x671.webp",
    problems: [...LoveBabbarSheetQuestions],
    length: 448,
    topics: [...LoveBabbarSheetTopics],
  },
  {
    id: 5,
    name: "Striver SDE Sheet",
    img: "https://www.striver.careers/Striver%20Orange%20Stack.png",
    problems: [...StriverSdeSheetQuestions],
    length: 191,
    topics: [...SSSTopics],
  },
  {
    id: 6,
    name: "Fraz Sheet",
    img: "https://i.ytimg.com/vi/NXQi_g1pVqI/mqdefault.jpg",
    problems: [...FrazSheetQuestions],
    length: 313,
    topics: [...FrazTopics],
  },
];

export default SheetList;
