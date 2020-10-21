import Head from "next/head";
import { useState } from "react";
const ReactTinyLink =
  typeof window !== "undefined" && require("react-tiny-link").ReactTinyLink;

const services = {
  "500px": "https://500px.com/{}",
  "9GAG": "https://9gag.com/u/{}",
  "About.me": "https://about.me/{}",
  "Academia.edu": "https://independent.academia.edu/{}",
  AngelList: "https://angel.co/{}",
  Anobii: "https://www.anobii.com/{}/profile",
  Aptoide: "https://{}.en.aptoide.com/",
  "Archive.org": "https://archive.org/details/@{}",
  AskFM: "https://ask.fm/{}",
  "BLIP.fm": "https://blip.fm/{}",
  Badoo: "https://badoo.com/profile/{}",
  Bandcamp: "https://www.bandcamp.com/{}",
  Basecamp: "https://{}.basecamphq.com",
  Behance: "https://www.behance.net/{}",
  BitBucket: "https://bitbucket.org/{}/",
  BitCoinForum: "https://bitcoinforum.com/profile/{}",
  Blogger: "https://{}.blogspot.com",
  Brew: "https://www.brew.com/{}",
  BuyMeACoffee: "https://buymeacoff.ee/{}",
  BuzzFeed: "https://buzzfeed.com/{}",
  Canva: "https://www.canva.com/{}",
  Carbonmade: "https://{}.carbonmade.com",
  CashMe: "https://cash.me/{}",
  Cent: "https://beta.cent.co/@{}",
  Cloob: "https://www.cloob.com/name/{}",
  Codecademy: "https://www.codecademy.com/{}",
  Codechef: "https://www.codechef.com/users/{}",
  Codementor: "https://www.codementor.io/{}",
  Codepen: "https://codepen.io/{}",
  Coderwall: "https://coderwall.com/{}",
  Codewars: "https://www.codewars.com/users/{}",
  ColourLovers: "https://www.colourlovers.com/lover/{}",
  Contently: "https://{}.contently.com/",
  Coroflot: "https://www.coroflot.com/{}",
  CreativeMarket: "https://creativemarket.com/{}",
  Crevado: "https://{}.crevado.com",
  Crunchyroll: "https://www.crunchyroll.com/user/{}",
  "DEV Community": "https://dev.to/{}",
  DailyMotion: "https://www.dailymotion.com/{}",
  Designspiration: "https://www.designspiration.net/{}/",
  DeviantART: "https://{}.deviantart.com",
  Discogs: "https://www.discogs.com/user/{}",
  Disqus: "https://disqus.com/{}",
  "Docker Hub": "https://hub.docker.com/u/{}/",
  Dribbble: "https://dribbble.com/{}",
  Duolingo: "https://www.duolingo.com/{}",
  "EVE Online": "https://evewho.com/pilot/{}/",
  Ebay: "https://www.ebay.com/usr/{}",
  Ello: "https://ello.co/{}",
  Etsy: "https://www.etsy.com/shop/{}",
  EyeEm: "https://www.eyeem.com/u/{}",
  Facebook: "https://www.facebook.com/{}",
  Fandom: "https://www.fandom.com/u/{}",
  Filmogs: "https://www.filmo.gs/users/{}",
  Flickr: "https://www.flickr.com/people/{}",
  Flightradar24: "https://my.flightradar24.com/{}",
  Flipboard: "https://flipboard.com/@{}",
  Foursquare: "https://foursquare.com/{}",
  Furaffinity: "https://www.furaffinity.net/user/{}",
  Giphy: "https://giphy.com/{}",
  GitHub: "https://www.github.com/{}",
  GitLab: "https://gitlab.com/{}",
  Gitee: "https://gitee.com/{}",
  GoodReads: "https://www.goodreads.com/{}",
  Gravatar: "http://en.gravatar.com/{}",
  Gumroad: "https://www.gumroad.com/{}",
  HackerNews: "https://news.ycombinator.com/user?id={}",
  HackerOne: "https://hackerone.com/{}",
  HackerRank: "https://hackerrank.com/{}",
  "House-Mixes.com": "https://www.house-mixes.com/profile/{}",
  Houzz: "https://houzz.com/user/{}",
  HubPages: "https://hubpages.com/@{}",
  IFTTT: "https://www.ifttt.com/p/{}",
  ImageShack: "https://imageshack.us/user/{}",
  Imgur: "https://imgur.com/user/{}",
  Instagram: "https://www.instagram.com/{}",
  Instructables: "https://www.instructables.com/member/{}",
  "Investing.com": "https://www.investing.com/traders/{}",
  Issuu: "https://issuu.com/{}",
  "Itch.io": "https://{}.itch.io/",
  Jimdo: "https://{}.jimdosite.com",
  Kaggle: "https://www.kaggle.com/{}",
  KanoWorld: "https://api.kano.me/progress/user/{}",
  Keybase: "https://keybase.io/{}",
  Kik: "https://ws2.kik.com/user/{}",
  Kongregate: "https://www.kongregate.com/accounts/{}",
  Launchpad: "https://launchpad.net/~{}",
  LeetCode: "https://leetcode.com/{}",
  Letterboxd: "https://letterboxd.com/{}",
  LiveJournal: "https://{}.livejournal.com",
  Mastodon: "https://mstdn.io/@{}",
  Medium: "https://medium.com/@{}",
  MeetMe: "https://www.meetme.com/{}",
  MixCloud: "https://www.mixcloud.com/{}/",
  MyAnimeList: "https://myanimelist.net/profile/{}",
  Myspace: "https://myspace.com/{}",
  NPM: "https://www.npmjs.com/~{}",
  "NPM-Package": "https://www.npmjs.com/package/{}",
  "NameMC (Minecraft.net skins)": "https://namemc.com/profile/{}",
  "NationStates Nation": "https://nationstates.net/nation={}",
  "NationStates Region": "https://nationstates.net/region={}",
  Newgrounds: "https://{}.newgrounds.com",
  OK: "https://ok.ru/{}",
  OpenCollective: "https://opencollective.com/{}",
  Packagist: "https://packagist.org/packages/{}/",
  Pastebin: "https://pastebin.com/u/{}",
  Patreon: "https://www.patreon.com/{}",
  PayPal: "https://www.paypal.me/{}",
  Pexels: "https://www.pexels.com/@{}",
  Photobucket: "https://photobucket.com/user/{}/library",
  Pinterest: "https://www.pinterest.com/{}/",
  Pixabay: "https://pixabay.com/en/users/{}",
  PlayStore: "https://play.google.com/store/apps/developer?id={}",
  "Plug.DJ": "https://plug.dj/@/{}",
  "Pokemon Showdown": "https://pokemonshowdown.com/users/{}",
  ProductHunt: "https://www.producthunt.com/@{}",
  Quora: "https://www.quora.com/profile/{}",
  "Rajce.net": "https://{}.rajce.idnes.cz/",
  "Rate Your Music": "https://rateyourmusic.com/~{}",
  Reddit: "https://www.reddit.com/user/{}",
  "Repl.it": "https://repl.it/@{}",
  ResearchGate: "https://www.researchgate.net/profile/{}",
  ReverbNation: "https://www.reverbnation.com/{}",
  Roblox: "https://www.roblox.com/user.aspx?username={}",
  Scratch: "https://scratch.mit.edu/users/{}",
  Scribd: "https://www.scribd.com/{}",
  Signal: "https://community.signalusers.org/u/{}",
  Slack: "https://{}.slack.com",
  SlideShare: "https://slideshare.net/{}",
  Smashcast: "https://www.smashcast.tv/api/media/live/{}",
  SoundCloud: "https://soundcloud.com/{}",
  SourceForge: "https://sourceforge.net/u/{}",
  "Speedrun.com": "https://speedrun.com/user/{}",
  "Splits.io": "https://splits.io/users/{}",
  Spotify: "https://open.spotify.com/user/{}",
  "Star Citizen": "https://robertsspaceindustries.com/citizens/{}",
  Steam: "https://steamcommunity.com/id/{}",
  SteamGroup: "https://steamcommunity.com/groups/{}",
  Taringa: "https://www.taringa.net/{}",
  Telegram: "https://t.me/{}",
  "Tellonym.me": "https://tellonym.me/{}",
  TikTok: "https://www.tiktok.com/@{}",
  Tinder: "https://www.gotinder.com/@{}",
  TradingView: "https://www.tradingview.com/u/{}/",
  Trakt: "https://www.trakt.tv/users/{}",
  Trello: "https://trello.com/{}",
  Trip: "https://www.trip.skyscanner.com/user/{}",
  TripAdvisor: "https://tripadvisor.com/members/{}",
  Twitch: "https://m.twitch.tv/{}",
  Twitter: "https://www.twitter.com/{}",
  Unsplash: "https://unsplash.com/@{}",
  VK: "https://vk.com/{}",
  VSCO: "https://vsco.co/{}",
  Venmo: "https://venmo.com/{}",
  Vimeo: "https://vimeo.com/{}",
  Virgool: "https://virgool.io/@{}",
  VirusTotal: "https://www.virustotal.com/ui/users/{}/trusted_users",
  Wattpad: "https://www.wattpad.com/user/{}",
  "We Heart It": "https://weheartit.com/{}",
  WebNode: "https://{}.webnode.cz/",
  Wikipedia: "https://www.wikipedia.org/wiki/User:{}",
  Wix: "https://{}.wix.com",
  WordPress: "https://{}.wordpress.com/",
  WordPressOrg: "https://profiles.wordpress.org/{}/",
  YouNow: "https://www.younow.com/{}/",
  YouPic: "https://youpic.com/photographer/{}/",
  YouTube: "https://www.youtube.com/{}",
  Zhihu: "https://www.zhihu.com/people/{}",
  authorSTREAM: "http://www.authorstream.com/{}/",
  "boingboing.net": "https://bbs.boingboing.net/u/{}",
  devRant: "https://devrant.com/users/{}",
  gfycat: "https://gfycat.com/@{}",
  "iMGSRC.RU": "https://imgsrc.ru/main/user.php?user={}",
  "last.fm": "https://last.fm/user/{}",
  "mixer.com": "https://mixer.com/{}",
  "osu!": "https://osu.ppy.sh/users/{}",
  segmentfault: "https://segmentfault.com/u/{}",
};

export default function Home() {
  const [state, setState] = useState([]);
  const [userName, setUserName] = useState<string | undefined>(undefined);

  const search = async () => {
    if (!userName) return;
    setState([]);
    Object.keys(services).forEach(async (k) => {
      try {
        const res = await fetch(
          `/api?url=${services[k].replace("{}", userName)}`
        );
        const is200 = res.status === 200;
        const { msg } = await res.json();
        if (is200) setState((s) => [...s, msg]);
      } catch (error) {
        console.log(error);
      }
    });
  };
  return typeof window !== undefined ? (
    <>
      <Head>
        <title>Stalking.io</title>
        <link rel="icon" href="/favicon.ico" />
        <script data-ad-client="ca-pub-3337605713038685" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>

      </Head>
      <header className="text-gray-700 shadow  body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center  text-gray-900 mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            <span className="ml-3 text-xl">Sherlock.io</span>
          </a>
        </div>
      </header>

      <main className="flex">
        <div className="container mx-auto">
          <div className="flex mt-5">
            <input
              className="w-full  border rounded-lg rounded-r-none px-5 py-2"
              onChange={(evt) => setUserName(evt.currentTarget.value)}
              id="outlined-basic"
              placeholder="enter username to search through social networks"
            />
            <button
              className="border px-3  rounded-r-lg border-l-0"
              onClick={search}
              color="primary"
            >
              Search
            </button>
          </div>
          <br />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {state.map((v) => (
              <ReactTinyLink
                key={v}
                cardSize="small"
                showGraphic={true}
                maxLine={2}
                minLine={1}
                url={v}
              />
            ))}
          </div>
          {state.length === 0 && (
            <div className="w-full flex justify-center">
              <img className="mt-20 " src={"/search.svg"} />
            </div>
          )}
        </div>
      </main>
    </>
  ) : (
      <div />
    );
}
