import "./dist/output.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Music from "./routes/Music";
import About from "./routes/About";
import AlleyezOnMe from "./movies/AlleyezOnMe";
import Movies from "./routes/Movies";
import TheCityOfGod from "./movies/TheCityOfGod";
import FiftyShadesOfGrey from "./movies/FiftyShadesOfGrey";
import HomeMovies from "./routes/HomeMovies";
import TooHotToHandle from "./movies/TooHotToHandle";
import DayBreak from "./movies/DayBreak";
import Elite from "./movies/Elite";
import You from "./movies/You";
import Euphoria from "./movies/Euphoria";
import HowToSellDrugsOnline from "./movies/HowToSellDrugs";
import BehindHerEyes from "./movies/BehindHerEyes";
import SexEducation from "./movies/SexEducation";
import TheWitcher from "./movies/TheWitcher";
import LaNonne from "./movies/LaNonne";
import TruthOrDare from "./movies/TruthorDare";
import TheSilence from "./movies/TheSilence";
import Lucifer from "./movies/Lucifer";
import TheHundred from "./movies/TheHundred";
import LaMalediction from "./movies/LaMalediction";
import HannahGrace from "./movies/HannahGrace";
import Jennifer from "./movies/JenniferBody";
import LaChapelle from "./movies/LaChapelle";
import Annabelle from "./movies/Annabelle";
import TheHuman from "./movies/TheHuman";
import Malignant from "./movies/Malignant";
import Naruto from "./anim/Naruto";
import FullMetal from "./anim/FullMetal";
import Neverland from "./anim/Neverland";
import Bebop from "./anim/Bebop";
import Note from "./anim/DeathNote";
import Geass from "./anim/CodeGeass";
import FoodWars from "./anim/FoodWars";
import AttackOfTitan from "./anim/AttackOfTitan";
import OnePiece from "./anim/OnePiece";
import BlackClover from "./anim/BlackClover";
import SAO from "./anim/SAO";
import Noragami from "./anim/Noragami";
import DemonSlayaer from "./anim/DemonSlayer";
import MHA from "./anim/MHA";
import SevenSins from "./anim/SevenSins";
import FairyTail from "./anim/FairyTail";
import Larson from "./anim/Larson";
import April from "./home/April";
import YourName from "./home/YourName";
import Totoro from "./home/Totoro";
import LesEnfantsDuTemps from "./home/Temps";
import VioletEvergarden from "./home/Violet";
import SilentVoice from "./home/SlientVoice";
import WonderEggsPriority from "./home/Wonder";
import Seconde from "./home/Seconde";
import Chichiro from "./home/Chichiro";
import Kaguya from "./home/Kaguya";
import Castel from "./home/Castel";
import Brent from "./music/Brent";
import SummerWalker from "./music/Summer";
import TrippaGninin from "./music/Trippa";
import Tala from "./music/Tala";
import JosmanIntro from "./music/Josman";
import BurnaBoy from "./music/Burna";
import Tiakola from "./music/Tiakola";
import Gazo from "./music/Gazo";
import Nekfeu from "./music/Nekfeu";
import DojaCat from "./music/Doja";
import IceSpice from "./music/IceSpice";
import Tecca from "./music/Tecca";
import Savage from "./music/Savage";
import Carti from "./music/Carti";
import Oxalde from "./music/Oxalde";
import EnHaut from "./music/Didi";
import Soweto from "./music/Soweto";
import SteveLacy from "./music/Steve";
import Skaiwater from "./music/Skaiwaiter";
import Shiloh from "./music/Shiloh";
import Rosalia from "./music/Rosalia";
import Damso from "./music/Damso";
import Rema from "./music/Rema";
import Melly from "./music/Melly";
import Elown from "./music/Elown";
import Holy from "./music/Holy";
import PinkPantheress from "./music/Pink";
import CentralCee from "./music/Central";
import Bianca from "./music/Bianca";
import Angele from "./music/Angele";
import MusicHome from "./routes/MusicHome";
import Bendo from "./music/Bendo";
import Dinos from "./music/Dinos";
import Donda from "./music/Donda";
import Babi from "./music/Babi";
import Drake from "./music/Drake";
import Travis from "./music/Travis";
import BigSeann from "./music/Seann";
import Nav from "./music/Nav";
import Anitta from "./music/Anitta";
import Coffee from "./music/Coffee";
import Kodes from "./music/Kodes";
import Leto from "./music/Leto";
import Cle from "./music/Cle";
import Dora from "./music/Dora";
import Gnapka from "./music/Gnapka";
import Ziak from "./music/Ziak";
import RubiRose from "./music/Rubi";
import Joey from "./music/Joey";
import CardiB from "./music/Cardi";
import Kodak from "./music/Kodak";
import Trippie from "./music/Trippie";
import Tjay from "./music/Tjay";
import Roddy from "./music/Roddy";
import Pour from "./music/Pour";
import Obsessed from "./music/Obsessed";
import Thot from "./music/Thot";
import Plenty from "./music/Plenty";
import Emiliana from "./music/Emiliana";
import ScrollToTop from "./api/ScrollToTop";
import DjoLean from "./music/DjoLean";
import Freeze from "./music/Freeze";
import VnrTwo from "./music/VnrTwo";
import Mama from "./music/Mama";
import VnrOne from "./music/VnrOne";

function App() {
  return (
    <div className="App p-0 m-0 h-[100vh] bg-black">
      <ScrollToTop />
      <Routes>
        {/*Navigation */}
        <Route path="/" element={<Home />} />
        {/*MoviesHomes */}
        <Route path="/moviesHome" element={<HomeMovies />} />
        {/*movies nested Routes for Movies */}
        <Route path="/movies" element={<Movies />}>
          <Route path="/movies/allEyezOnMe" element={<AlleyezOnMe />} />
          <Route path="/movies/theCityOfGod" element={<TheCityOfGod />} />
          <Route
            path="/movies/fiftyShadesOfGrey"
            element={<FiftyShadesOfGrey />}
          />
          <Route path="/movies/toHotToHandle" element={<TooHotToHandle />} />
          <Route path="/movies/daybreak" element={<DayBreak />} />
          <Route path="/movies/elite" element={<Elite />} />
          <Route path="/movies/you" element={<You />} />
          <Route path="/movies/euphoria" element={<Euphoria />} />
          <Route
            path="/movies/howToSellDrugsOnline"
            element={<HowToSellDrugsOnline />}
          />
          <Route path="/movies/behindHerEyes" element={<BehindHerEyes />} />
          <Route path="/movies/sexEducation" element={<SexEducation />} />
          <Route path="/movies/theWitcher" element={<TheWitcher />} />
          <Route path="/movies/laNonne" element={<LaNonne />} />
          <Route path="/movies/truthOrDare" element={<TruthOrDare />} />
          <Route path="/movies/theSilence" element={<TheSilence />} />
          <Route path="/movies/lucifer" element={<Lucifer />} />
          <Route path="/movies/theHundred" element={<TheHundred />} />
          <Route path="/movies/laDameBlanche" element={<LaMalediction />} />
          <Route path="/movies/hannahGrace" element={<HannahGrace />} />
          <Route path="/movies/jenniFer" element={<Jennifer />} />
          <Route path="/movies/laChapelle" element={<LaChapelle />} />
          <Route path="/movies/annabelle" element={<Annabelle />} />
          <Route path="/movies/theHuman" element={<TheHuman />} />
          <Route path="/movies/malignant" element={<Malignant />} />
          {/*movies nested Routes for japanese animation */}
          <Route path="/movies/anime/naruto" element={<Naruto />} />
          <Route path="/movies/anime/metal" element={<FullMetal />} />
          <Route path="/movies/anime/neverland" element={<Neverland />} />
          <Route path="/movies/anime/bebop" element={<Bebop />} />
          <Route path="/movies/anime/note" element={<Note />} />
          <Route path="/movies/anime/geass" element={<Geass />} />
          <Route path="/movies/anime/soma" element={<FoodWars />} />
          <Route path="/movies/anime/titan" element={<AttackOfTitan />} />
          <Route path="/movies/anime/luffy" element={<OnePiece />} />
          <Route path="/movies/anime/asta" element={<BlackClover />} />
          <Route path="/movies/anime/sao" element={<SAO />} />
          <Route path="/movies/anime/yato" element={<Noragami />} />
          <Route path="/movies/anime/slayer" element={<DemonSlayaer />} />
          <Route path="/movies/anime/mha" element={<MHA />} />
          <Route path="/movies/anime/sins" element={<SevenSins />} />
          <Route path="/movies/anime/lucy" element={<FairyTail />} />
          <Route path="/movies/anime/larson" element={<Larson />} />
          {/*ghibil : Animated Movies */}
          <Route path="/movies/home/april" element={<April />} />
          <Route path="/movies/home/your" element={<YourName />} />
          <Route path="/movies/home/totoro" element={<Totoro />} />
          <Route path="/movies/home/temps" element={<LesEnfantsDuTemps />} />
          <Route path="/movies/home/violet" element={<VioletEvergarden />} />
          <Route path="/movies/home/silent" element={<SilentVoice />} />
          <Route path="/movies/home/wonder" element={<WonderEggsPriority />} />
          <Route path="/movies/home/second" element={<Seconde />} />
          <Route path="/movies/home/chichiro" element={<Chichiro />} />
          <Route path="/movies/home/kaguya" element={<Kaguya />} />
          <Route path="/movies/home/castel" element={<Castel />} />
        </Route>
        {/*routes For music */}
        <Route path="/musicsHome" element={<MusicHome />} />
        {/* Nested Routes for Music  */}
        <Route path="/musics" element={<Music />}>
          <Route path="/musics/brent" element={<Brent />} />
          <Route path="/musics/summer" element={<SummerWalker />} />
          <Route path="/musics/trippa" element={<TrippaGninin />} />
          <Route path="/musics/tala" element={<Tala />} />
          <Route path="/musics/intro" element={<JosmanIntro />} />
          <Route path="/musics/burna" element={<BurnaBoy />} />
          <Route path="/musics/tiakola" element={<Tiakola />} />
          <Route path="/musics/gazo" element={<Gazo />} />
          <Route path="/musics/nekfeu" element={<Nekfeu />} />
          <Route path="/musics/streets" element={<DojaCat />} />
          <Route path="/musics/munch" element={<IceSpice />} />
          <Route path="/musics/tecca" element={<Tecca />} />
          <Route path="/musics/savage" element={<Savage />} />
          <Route path="/musics/carti" element={<Carti />} />
          <Route path="/musics/oxlade" element={<Oxalde />} />
          <Route path="/musics/haut" element={<EnHaut />} />
          <Route path="/musics/soweto" element={<Soweto />} />
          <Route path="/musics/habit" element={<SteveLacy />} />
          <Route path="/musics/miles" element={<Skaiwater />} />
          <Route path="/musics/shiloh" element={<Shiloh />} />
          <Route path="/musics/rosalia" element={<Rosalia />} />
          <Route path="/musics/damso" element={<Damso />} />
          <Route path="/musics/rema" element={<Rema />} />
          <Route path="/musics/girls" element={<Melly />} />
          <Route path="/musics/elown" element={<Elown />} />
          <Route path="/musics/holy" element={<Holy />} />
          <Route path="/musics/picture" element={<PinkPantheress />} />
          <Route path="/musics/central" element={<CentralCee />} />
          <Route path="/musics/bianca" element={<Bianca />} />
          <Route path="/musics/reine" element={<Angele />} />
          <Route path="/musics/bendo" element={<Bendo />} />
          <Route path="/musics/dinos" element={<Dinos />} />
          <Route path="/musics/donda" element={<Donda />} />
          <Route path="/musics/baby" element={<Babi />} />
          <Route path="/musics/drake" element={<Drake />} />
          <Route path="/musics/travis" element={<Travis />} />
          <Route path="/musics/seann" element={<BigSeann />} />
          <Route path="/musics/nav" element={<Nav />} />
          <Route path="/musics/anitta" element={<Anitta />} />
          <Route path="/musics/coffee" element={<Coffee />} />
          <Route path="/musics/kodes" element={<Kodes />} />
          <Route path="/musics/leto" element={<Leto />} />
          <Route path="/musics/cle" element={<Cle />} />
          <Route path="/musics/dora" element={<Dora />} />
          <Route path="/musics/luck" element={<Gnapka />} />
          <Route path="/musics/ziak" element={<Ziak />} />
          <Route path="/musics/rubi" element={<RubiRose />} />
          <Route path="/musics/joey" element={<Joey />} />
          <Route path="/musics/cardi" element={<CardiB />} />
          <Route path="/musics/kodak" element={<Kodak />} />
          <Route path="/musics/trippie" element={<Trippie />} />
          <Route path="/musics/tjay" element={<Tjay />} />
          <Route path="/musics/roddy" element={<Roddy />} />
          <Route path="/musics/pour" element={<Pour />} />
          <Route path="/musics/obsessed" element={<Obsessed />} />
          <Route path="/musics/thot" element={<Thot />} />
          <Route path="/musics/plenty" element={<Plenty />} />
          <Route path="/musics/emiliana" element={<Emiliana />} />
          <Route path="/musics/djoLean" element={<DjoLean/>} />
          <Route path="/musics/freeze" element={<Freeze/>} />
          <Route path="/musics/vnrtwo" element={<VnrTwo/>} />
          <Route path="/musics/mama" element={<Mama/>} />
          <Route path="/musics/vnrone" element={<VnrOne/>} />
        </Route>
        <Route path="/abouts" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
