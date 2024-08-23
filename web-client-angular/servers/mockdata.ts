const arr = [
  {
    source: {
      id: 'wired',
      name: 'Wired',
    },
    author: 'Jessica Klein',
    title: 'Bitcoin Bros Go Wild for Donald Trump',
    description:
      'At Bitcoin 2024 conference in Nashville, Trump is finally telling crypto enthusiasts what they want to hear.',
    url: 'https://www.wired.com/story/bitcoin-bros-go-wild-for-donald-trump/',
    urlToImage:
      'https://media.wired.com/photos/66a56f21bf2909f08a634953/191:100/w_1280,c_limit/Crypto-Bros-Business-2162975355.jpg',
    publishedAt: '2024-07-28T12:43:07Z',
    content:
      'Trumps speech is an hour behind. A half hour into the wait, restless attendees start chanting Trump. The woman sitting in front of me murmurs her own chant:\r\nBitcoin, bitcointhats what they should be… [+3147 chars]',
  },
  {
    source: {
      id: 'wired',
      name: 'Wired',
    },
    author: 'Steven Levy',
    title: "Trump's Crypto Embrace Could Be a Disaster for Bitcoin",
    description:
      "At the Bitcoin 2024 conference in Nashville, Donald Trump promised the crypto community the moon. They'd better hope they don't get it.",
    url: 'https://www.wired.com/story/donald-trump-bitcoin-reserve-promises/',
    urlToImage:
      'https://media.wired.com/photos/66ab594d0c0cc4819f595db4/191:100/w_1280,c_limit/073024_Crypto%20get%20rich%20quick.jpg',
    publishedAt: '2024-08-02T13:00:00Z',
    content:
      'Donald Trump is an unlikely crypto ally. The power of bitcoin, embodied in Satoshi Nakamotos founding document, is that it frees participants from murky assessments of trust, instead relying on the b… [+4248 chars]',
  },
  {
    source: {
      id: null,
      name: 'Gizmodo.com',
    },
    author: 'Harri Weber',
    title:
      'Trump Promises to Make U.S. the ‘Crypto Capital of the Planet and the Bitcoin Superpower’',
    description:
      'The former president drew cheers at the 2024 Bitcoin Conference after saying he\'ll "fire" Biden-nominated SEC Chair Gary Gensler.',
    url: 'https://gizmodo.com/trump-promises-to-make-u-s-the-crypto-capital-of-the-planet-and-the-bitcoin-superpower-2000480037',
    urlToImage:
      'https://gizmodo.com/app/uploads/2024/07/Screenshot-2024-07-27-at-1.02.37 PM.jpg',
    publishedAt: '2024-07-27T20:59:48Z',
    content:
      'Speaking to a crowd of supporters at the Bitcoin 2024 Conference in Nashville, Tennessee, former president and Republican nominee Donald Trump said he would make the U.S. the “crypto capital of the p… [+2326 chars]',
  },
  {
    source: {
      id: null,
      name: 'Slashdot.org',
    },
    author: 'Slashdot Staff',
    title:
      "RFK Jr. Says He'd Direct the Government to Buy $615 Billion in Bitcoin or 4 Million Bitcoins",
    description:
      'US presidential candidate, Robert F. Kennedy Jr., announced during his keynote Friday at the Bitcoin Conference that he would direct the US government to buy Bitcoin until the size of its Bitcoin reserves matched its gold reserves. At current prices, that equ…',
    url: 'https://news.slashdot.org/story/24/07/26/239214/rfk-jr-says-hed-direct-the-government-to-buy-615-billion-in-bitcoin-or-4-million-bitcoins',
    urlToImage: 'https://a.fsdn.com/sd/topics/bitcoin_64.png',
    publishedAt: '2024-07-26T23:03:00Z',
    content:
      '... a position of dominance that no other country will be able to usurp.\r\nWhy and who cares? Trading money for a different kind of money give us "dominance"? What part of your brain did that worm eat… [+237 chars]',
  },
  {
    source: {
      id: null,
      name: 'Gizmodo.com',
    },
    author: 'Passant Rabie',
    title: 'Crypto Bro Charters Private SpaceX Mission to Earth’s Poles',
    description:
      "Fram2 could fly as early as this year, marking SpaceX's seventh private crew of astronauts.",
    url: 'https://gizmodo.com/crypto-bro-charters-private-spacex-mission-to-earths-poles-2000486329',
    urlToImage:
      'https://gizmodo.com/app/uploads/2024/08/SpaceX-Private-Mission.jpeg',
    publishedAt: '2024-08-13T16:05:37Z',
    content:
      'A private crew of astronauts that includes a cinematographer and an explorer, and commanded by a wealthy bitcoin entrepreneur, will be the first human spaceflight to go over Earth’s polar region.\r\nSp… [+2136 chars]',
  },
  {
    source: {
      id: null,
      name: 'ReadWrite',
    },
    author: 'Radek Zielinski',
    title:
      'Crypto asset firm Grayscale has lost $20 billion in Bitcoin and Ethereum ETFs',
    description:
      'Leading crypto-specific asset manager Grayscale Investments has lost over $20.4 billion through outflows from its Bitcoin (BTC) and Ethereum (ETH)… Continue reading Crypto asset firm Grayscale has lost $20 billion in Bitcoin and Ethereum ETFs\nThe post Crypto …',
    url: 'https://readwrite.com/grayscale-bitcoin-ethereum-etf-losses-20-billion/',
    urlToImage:
      'https://readwrite.com/wp-content/uploads/2024/07/6f232dbd-27a0-45f2-87c6-639075c6ef40.webp',
    publishedAt: '2024-07-30T20:41:13Z',
    content:
      'Leading crypto-specific asset manager Grayscale Investments has lost over $20.4 billion through outflows from its Bitcoin (BTC) and Ethereum (ETH) exchange-traded funds (ETFs).\r\nAccording to data gat… [+2456 chars]',
  },
  {
    source: {
      id: null,
      name: 'ReadWrite',
    },
    author: 'Radek Zielinski',
    title:
      'US strategic Bitcoin reserve to be financed by revaluing Fed’s gold',
    description:
      'United States’ strategic Bitcoin (BTC) reserve would be partly financed by revaluing gold certificates held by the Federal Reserve System,… Continue reading US strategic Bitcoin reserve to be financed by revaluing Fed’s gold\nThe post US strategic Bitcoin rese…',
    url: 'https://readwrite.com/us-strategic-bitcoin-reserve-to-be-financed-by-fed-gold/',
    urlToImage:
      'https://readwrite.com/wp-content/uploads/2024/07/b39a34b3-1c6a-47b1-ade2-fb55f8ae2510.webp',
    publishedAt: '2024-07-31T14:22:25Z',
    content:
      'United States’ strategic Bitcoin (BTC) reserve would be partly financed by revaluing gold certificates held by the Federal Reserve System, draft legislation shows.\r\nAccording to a July 30 Coindesk re… [+2038 chars]',
  },
  {
    source: {
      id: null,
      name: 'ReadWrite',
    },
    author: 'Radek Zielinski',
    title: 'Jersey City Pension Fund to Invest in Bitcoin ETFs',
    description:
      'Jersey City Mayor Steven Fulop announced on Thursday that the city’s municipal pension plan will soon invest in Bitcoin (BTC)… Continue reading Jersey City Pension Fund to Invest in Bitcoin ETFs\nThe post Jersey City Pension Fund to Invest in Bitcoin ETFs appe…',
    url: 'https://readwrite.com/jersey-city-pension-fund-to-invest-in-bitcoin-etfs/',
    urlToImage:
      'https://readwrite.com/wp-content/uploads/2024/07/bd71c2e9-e4c9-4897-bc5e-1ccff22dc577.webp',
    publishedAt: '2024-07-26T15:14:38Z',
    content:
      'Jersey City Mayor Steven Fulop announced on Thursday that the city’s municipal pension plan will soon invest in Bitcoin (BTC) through exchange-traded funds (ETFs).\r\nNot my normal subject matter in a … [+2136 chars]',
  },
  {
    source: {
      id: null,
      name: 'ReadWrite',
    },
    author: 'Radek Zielinski',
    title: 'Bitcoin surges past $68,000 amid continued ETF inflows',
    description:
      'Bitcoin (BTC) breached the $68,000 resistance level during Sunday night trading in Eastern Standard Time, continuing its upward trajectory. According… Continue reading Bitcoin surges past $68,000 amid continued ETF inflows\nThe post Bitcoin surges past $68,000…',
    url: 'https://readwrite.com/bitcoin-surges-past-68000-amid-continued-etf-inflows/',
    urlToImage:
      'https://readwrite.com/wp-content/uploads/2024/07/e009442e-4fcb-42c5-a9a5-d29a19a4fce0.webp',
    publishedAt: '2024-07-22T14:07:42Z',
    content:
      'Bitcoin (BTC) breached the $68,000 resistance level during Sunday night trading in Eastern Standard Time, continuing its upward trajectory.\r\nAccording to CoinMarketCap data, the leading cryptocurrenc… [+2189 chars]',
  },
  {
    source: {
      id: null,
      name: 'ReadWrite',
    },
    author: 'Radek Zielinski',
    title: 'Mt. Gox Moves Another $2.5B of Bitcoin',
    description:
      'Mt. Gox, the defunct cryptocurrency exchange, has transferred 37,477 Bitcoin (BTC), valued at approximately $2.5 billion, to an unidentified wallet… Continue reading Mt. Gox Moves Another $2.5B of Bitcoin\nThe post Mt. Gox Moves Another $2.5B of Bitcoin appear…',
    url: 'https://readwrite.com/mt-gox-bitcoin-wallet-billion/',
    urlToImage:
      'https://readwrite.com/wp-content/uploads/2024/07/2e61124b-41ff-4d14-8c83-214fbd93c644.webp',
    publishedAt: '2024-07-25T03:21:08Z',
    content:
      'Chat history ChatGPT ChatGPT Explore GPTs Today Mt. Gox Bitcoin Transfer CrowdStrike Apology Backlash SEC Approves Ethereum ETFs Previous 7 Days Xbox 360 Marketplace Discounts College Football 25 Rev… [+6118 chars]',
  },
  {
    source: {
      id: null,
      name: 'ReadWrite',
    },
    author: 'Radek Zielinski',
    title: 'Donald Trump raises $25M during Bitcoin 2024 conference',
    description:
      'Republican presidential candidate Donald Trump raised $25 million during the The Bitcoin 2024 conference. Fox Business reporter Eleanor Terrett announced that… Continue reading Donald Trump raises $25M during Bitcoin 2024 conference\nThe post Donald Trump rais…',
    url: 'https://readwrite.com/donald-trump-raises-25m-during-bitcoin-2024-conference/',
    urlToImage:
      'https://readwrite.com/wp-content/uploads/2024/07/21a7fe68-8fbd-44c2-8955-162a8d23f326.webp',
    publishedAt: '2024-07-31T11:57:00Z',
    content:
      'Republican presidential candidate Donald Trump raised $25 million during the The Bitcoin 2024 conference.\r\nFox Business reporter Eleanor Terrett announced that Trump raised an undisclosed amount of f… [+1883 chars]',
  },
  {
    source: {
      id: null,
      name: 'ReadWrite',
    },
    author: 'Radek Zielinski',
    title: 'Trump fights for the crypto vote at Bitcoin conference',
    description:
      'At the Bitcoin 2024 conference in Nashville, Tennessee, former President Donald Trump delivered a keynote speech. Trump, the Republican presidential… Continue reading Trump fights for the crypto vote at Bitcoin conference\nThe post Trump fights for the crypto …',
    url: 'https://readwrite.com/trump-crypto-bitcoin-conference/',
    urlToImage:
      'https://readwrite.com/wp-content/uploads/2024/07/8483c1b4-7ea2-47a9-a0b2-b50d58578a99.webp',
    publishedAt: '2024-07-29T16:21:50Z',
    content:
      'At the Bitcoin 2024 conference in Nashville, Tennessee, former President Donald Trump delivered a keynote speech.\r\nTrump, the Republican presidential candidate, used the platform to appeal to the tec… [+3450 chars]',
  },
  {
    source: {
      id: null,
      name: 'ReadWrite',
    },
    author: 'Radek Zielinski',
    title: 'Bitcoin and wider crypto market tumbles as global stocks falter',
    description:
      'Bitcoin (BTC) experienced a sharp 3% decline at the onset of Asian trading, mirroring a broader downturn in stock markets… Continue reading Bitcoin and wider crypto market tumbles as global stocks falter\nThe post Bitcoin and wider crypto market tumbles as glo…',
    url: 'https://readwrite.com/cryptocurrency-bitcoin-market-tumbles-as-global-stocks-falter/',
    urlToImage:
      'https://readwrite.com/wp-content/uploads/2024/07/7ef838ca-e7d5-4e5f-84b3-257b30922fcd.webp',
    publishedAt: '2024-07-25T16:24:02Z',
    content:
      'Bitcoin (BTC) experienced a sharp 3% decline at the onset of Asian trading, mirroring a broader downturn in stock markets and diminishing appetite for high-risk assets.\r\nThis follows Bitcoin surging … [+1904 chars]',
  },
  {
    source: {
      id: null,
      name: 'Gizmodo.com',
    },
    author: 'Lucas Ropek',
    title:
      'This Could Be the Beginning of the End of Trump’s Love for Crypto Cash',
    description: 'The Donald chose the wrong time to get into web3.',
    url: 'https://gizmodo.com/this-could-be-the-beginning-of-the-end-of-trumps-love-for-crypto-cash-2000483266',
    urlToImage:
      'https://gizmodo.com/app/uploads/2024/08/Trump_makes_a_-weird_face_at_a_campaign_rally-.jpg',
    publishedAt: '2024-08-05T21:35:52Z',
    content:
      'Donald Trump’s honeymoon with the cryptocurrency industry may be over. At the very least, the campaign contributions in Dogecoin he received last month are probably a lot less valuable right now than… [+3766 chars]',
  },
  {
    source: {
      id: null,
      name: 'Slashdot.org',
    },
    author: 'EditorDavid',
    title:
      'Edward Snowden Skeptical of Politicians at Bitcoin Conference - and Public Ledgers',
    description:
      "Former U.S. president Donald Trump spoke at Nashville's Bitcoin Conference on Saturday. \n\nBut he wasn't the only one there making headlines, according to a local newspaper called the Tennesseean:\n\nRepublican Sens. Cynthia Lummis and Tim Scott pledged their re…",
    url: 'https://politics.slashdot.org/story/24/07/28/0447203/edward-snowden-skeptical-of-politicians-at-bitcoin-conference---and-public-ledgers',
    urlToImage: 'https://a.fsdn.com/sd/topics/bitcoin_64.png',
    publishedAt: '2024-07-28T11:34:00Z',
    content:
      "Former U.S. president Donald Trump spoke at Nashville's Bitcoin Conference on Saturday.But he wasn't the only one there making headlines, according to a local newspaper called the Tennesseean:\r\nRepub… [+3475 chars]",
  },
  {
    source: {
      id: null,
      name: 'ReadWrite',
    },
    author: 'Radek Zielinski',
    title: 'Bitcoin approaches $70,000 in six-week high amid Trump support',
    description:
      'CoinMarketCap data shows that Bitcoin’s (BTC) price approached $70,000 on Monday, reaching a six-week high following former U.S. President Donald… Continue reading Bitcoin approaches $70,000 in six-week high amid Trump support\nThe post Bitcoin approaches $70,…',
    url: 'https://readwrite.com/bitcoin-price-trump-cryptocurrency/',
    urlToImage:
      'https://readwrite.com/wp-content/uploads/2024/07/32f89dce-300f-4e5c-af49-baf9c1219b2b.webp',
    publishedAt: '2024-07-29T18:18:27Z',
    content:
      'CoinMarketCap data shows that Bitcoin’s (BTC) price approached $70,000 on Monday, reaching a six-week high following former U.S. President Donald Trump’s renewed support for cryptocurrency over the w… [+2131 chars]',
  },
  {
    source: {
      id: null,
      name: 'ReadWrite',
    },
    author: 'Radek Zielinski',
    title: 'Kamala Harris considers Bitcoin conference: blue crypto shift?',
    description:
      'Recent developments suggest a possible realignment in political attitudes towards cryptocurrencies, with both Vice President Kamala Harris and former President… Continue reading Kamala Harris considers Bitcoin conference: blue crypto shift?\nThe post Kamala Ha…',
    url: 'https://readwrite.com/kamala-harris-considers-bitcoin-conference-blue-crypto-shift/',
    urlToImage:
      'https://readwrite.com/wp-content/uploads/2024/07/586be38c-f84f-4b21-b208-a72bef4e52aa.webp',
    publishedAt: '2024-07-25T03:27:10Z',
    content:
      'Recent developments suggest a possible realignment in political attitudes towards cryptocurrencies, with both Vice President Kamala Harris and former President Donald Trump at the center of speculati… [+2765 chars]',
  },
  {
    source: {
      id: null,
      name: 'Yahoo Entertainment',
    },
    author: 'Hope C',
    title: "BlackRock's IBIT Bitcoin ETF Sees Highest Inflows Since March",
    description:
      'BlackRock’s spot Bitcoin exchange-traded fund (ETF) has experienced its largest inflow in over four months.',
    url: 'https://finance.yahoo.com/news/blackrocks-ibit-bitcoin-etf-sees-081039300.html',
    urlToImage:
      'https://media.zenfs.com/en/coinmarketcap_783/861990b4d3f801375723f75ec322858e',
    publishedAt: '2024-07-23T08:10:39Z',
    content:
      "BlackRock's IBIT Bitcoin ETF Sees Highest Inflows Since March\r\nBlackRocks spot Bitcoin exchange-traded fund (ETF) has experienced its largest inflow in over four months. The iShares Bitcoin Trust (IB… [+1249 chars]",
  },
  {
    source: {
      id: null,
      name: 'ReadWrite',
    },
    author: 'Radek Zielinski',
    title: 'Crypto sees volatility after Joe Biden’s withdrawal',
    description:
      'The cryptocurrency market witnessed significant turbulence shortly after U.S. President Joe Biden announced his withdrawal from the 2024 presidential election.… Continue reading Crypto sees volatility after Joe Biden’s withdrawal\nThe post Crypto sees volatili…',
    url: 'https://readwrite.com/crypto-sees-volatility-after-joe-bidens-withdrawal/',
    urlToImage:
      'https://readwrite.com/wp-content/uploads/2024/07/208028c4-3f4a-4bfa-b096-e4413eba0bd5.webp',
    publishedAt: '2024-07-22T16:22:34Z',
    content:
      'The cryptocurrency market witnessed significant turbulence shortly after U.S. President Joe Biden announced his withdrawal from the 2024 presidential election.\r\nWithin a 30-minute window, nearly $67 … [+1921 chars]',
  },
  {
    source: {
      id: null,
      name: 'Gizmodo.com',
    },
    author: 'Lucas Ropek',
    title:
      'Kamala Harris Wants to Get Closer to Crypto Bros, If They’ll Let Her',
    description:
      "Cryptocurrency has become the latest flashpoint in the presidential candidates' war for the soul of Silicon Valley.",
    url: 'https://gizmodo.com/kamala-harris-wants-to-get-closer-to-crypto-bros-if-theyll-let-her-2000480701',
    urlToImage:
      'https://gizmodo.com/app/uploads/2019/05/oqakhahoqrr6i0b6qu50.jpg',
    publishedAt: '2024-07-30T13:30:20Z',
    content:
      'Over the past week, Kamala Harris has made it known that she plans on hitting the “reset” button when it comes to the cryptocurrency industry. Currently, there’s bad blood between crypto stans and th… [+6026 chars]',
  },
  {
    source: {
      id: null,
      name: 'Gizmodo.com',
    },
    author: 'Matt Novak',
    title:
      'North Korean Man Indicted for Ransomware Attacks on U.S. Health Care Companies',
    description:
      'Rim Jong Hyok allegedly targeted NASA and defense contractors as well.',
    url: 'https://gizmodo.com/north-korean-man-indicted-for-ransomware-attacks-on-u-s-health-care-companies-2000479109',
    urlToImage:
      'https://gizmodo.com/app/uploads/2024/07/Screenshot-2024-07-25-at-11.39.25 AM.jpg',
    publishedAt: '2024-07-25T19:15:49Z',
    content:
      'A man allegedly working for North Korean intelligence was indicted by U.S. prosecutors on Thursday for conspiracy to hack computers at NASA and military bases, along with serious ransomware attacks a… [+2142 chars]',
  },
  {
    source: {
      id: null,
      name: 'ReadWrite',
    },
    author: 'Alvin Hemedez',
    title:
      'Top Altcoins to Invest in Ahead of Bitcoin’s Next Bull Run – $BTC, $SOL, $ETH, $BNB, $XRP, and $99BTC',
    description:
      'With Bitcoin (BTC) surging and the market exhibiting greed according to the Fear and Greed Index, it’s an opportune time… Continue reading Top Altcoins to Invest in Ahead of Bitcoin’s Next Bull Run – $BTC, $SOL, $ETH, $BNB, $XRP, and $99BTC\nThe post Top Altco…',
    url: 'https://readwrite.com/top-altcoins-to-invest-in-ahead-of-bitcoins-next-bull-run-btc-sol-eth-bnb-xrp-and-99btc/',
    urlToImage:
      'https://readwrite.com/wp-content/uploads/2024/07/top-altcoins-to-invest-in-ahead-of-bitcoin-next-bull-run.jpg',
    publishedAt: '2024-07-31T19:36:05Z',
    content:
      'With Bitcoin (BTC) surging and the market exhibiting greed according to the Fear and Greed Index, it’s an opportune time to consider diversifying your portfolio with altcoin investments.\r\nWhile meme … [+6891 chars]',
  },
  {
    source: {
      id: null,
      name: 'Yahoo Entertainment',
    },
    author: 'CoinDesk',
    title: "Could Sen. Lummis' Bitcoin Legislation Slash National Debt?",
    description:
      "CoinDesk's Jennifer Sanasie takes a look back at what happened during the Bitcoin Conference in Nashville over the weekend, including former President Donald...",
    url: 'https://finance.yahoo.com/video/could-sen-lummis-bitcoin-legislation-192151604.html',
    urlToImage:
      'https://media.zenfs.com/en/coindesk_75/de6bfcb451c94e994d6577f46c7df4dc',
    publishedAt: '2024-07-29T19:21:51Z',
    content:
      "CoinDesk's Jennifer Sanasie takes a look back at what happened during the Bitcoin Conference in Nashville over the weekend, including former President Donald Trump's promise of a \"strategic national … [+242 chars]",
  },
  {
    source: {
      id: null,
      name: 'Slashdot.org',
    },
    author: 'EditorDavid',
    title:
      "Trump Says He'd Oppose CBDCs, Pardon Ulbricht, and Create a 'Strategic National Bitcoin Stockpile'",
    description:
      'Speaking at the Bitcoin Conference in Nashville, Republican presidential nominee Donald Trump made a number of cryptocurrency-related pledges. \n\nIn a speech which lasted for over an hour, the 78-year-old former president also criticized his political opponent…',
    url: 'https://politics.slashdot.org/story/24/07/27/2141234/trump-says-hed-oppose-cbdcs-pardon-ulbricht-and-create-a-strategic-national-bitcoin-stockpile',
    urlToImage: 'https://a.fsdn.com/sd/topics/bitcoin_64.png',
    publishedAt: '2024-07-27T21:45:00Z',
    content:
      'JD Vance\'s couch / love of dolphins / dolphin couches.\r\nObviously, supporting Trump\'s "drill, baby, drill" position\r\n...\r\n:-)\r\nMore seriously on that note, does Trump, and his followers, know the U.S… [+454 chars]',
  },
  {
    source: {
      id: null,
      name: 'Yahoo Entertainment',
    },
    author: 'Yousra Anwar Ahmed',
    title:
      'What Happened in Crypto Today: Bullish Signals Are Finally Emerging!',
    description:
      'From Bitcoin bouncing back above 56K to permanent holders quietly scooping up BTCs, here is a 3-minute breakdown of everything important that happened in...',
    url: 'https://finance.yahoo.com/news/happened-crypto-today-bullish-signals-101605599.html',
    urlToImage:
      'https://media.zenfs.com/en/coinmarketcap_783/872d2769b8fc1e2c4b485faa1bfad75c',
    publishedAt: '2024-08-07T10:16:05Z',
    content:
      "What Happened in Crypto Today: Bullish Signals Are Finally Emerging!\r\nIt's been an interesting week in crypto, to put it mildly.\r\nJust four days ago, when Bitcoin was hovering around $62K, we hinted … [+7004 chars]",
  },
  {
    source: {
      id: null,
      name: 'Yahoo Entertainment',
    },
    author: null,
    title: 'Bitcoin price crash: Why is the crypto market collapsing?',
    description: null,
    url: 'https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_5f1ff72c-257b-4ef6-bc2a-c7c85f5106e9',
    urlToImage: null,
    publishedAt: '2024-08-05T14:29:22Z',
    content:
      "If you click 'Accept all', we and our partners, including 237 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+678 chars]",
  },
  {
    source: {
      id: null,
      name: 'ReadWrite',
    },
    author: 'Alvin Hemedez',
    title:
      'Elon Musk’s Support for Donald Trump Could Boost Dogecoin Price to $0.51',
    description:
      'The cryptocurrency market is experiencing a pivotal moment, attempting to break free from a two-month consolidation phase. This movement is… Continue reading Elon Musk’s Support for Donald Trump Could Boost Dogecoin Price to $0.51\nThe post Elon Musk’s Support…',
    url: 'https://readwrite.com/elon-musks-support-for-donald-trump-could-boost-dogecoin-price-to-0-51/',
    urlToImage:
      'https://readwrite.com/wp-content/uploads/2024/07/elon-musk-support-for-donald-trump-could-boost-dogecoin-price-to-051.jpg',
    publishedAt: '2024-07-23T16:31:12Z',
    content:
      'The cryptocurrency market is experiencing a pivotal moment, attempting to break free from a two-month consolidation phase.\r\nThis movement is challenged by significant whale activity, with large holde… [+7378 chars]',
  },
  {
    source: {
      id: 'business-insider',
      name: 'Business Insider',
    },
    author: 'Brent D. Griffiths',
    title:
      "Read JD Vance's financial disclosure, which includes at least $4 million in total assets and $250,000 in bitcoin",
    description:
      "JD Vance's net worth easily totals into the millions, following a bestselling book and a stint in venture capital.",
    url: 'https://www.businessinsider.com/read-jd-vance-financial-disclosure-net-worth-bitcoin-fec-report-2024-8',
    urlToImage:
      'https://i.insider.com/66bbaae95da406397bf58292?width=1200&format=jpeg',
    publishedAt: '2024-08-13T19:14:16Z',
    content:
      'Sen. JD Vance of Ohio filed his required financial disclosure as the Republican vice presidential nominee.Anna Moneymaker/Getty\r\n<ul><li>Sen. JD Vance of Ohio filed his required annual financial disc… [+1786 chars]',
  },
  {
    source: {
      id: null,
      name: 'Xataka.com',
    },
    author: 'Enrique Pérez',
    title:
      'El Bitcoin se hunde por debajo de los 50.000 euros: un anticipo del pánico que se está extendiendo en la economía global',
    description:
      'El Bitcoin cotiza en estos momentos por debajo de los 48.000 euros. Ha caído más de un 10% solo en el día de hoy. Es el peor día para las criptomonedas desde el descalabro de FTX. Porque si el Bitcoin ha caído, otras como Ethereum todavía están sufriendo más,…',
    url: 'https://www.xataka.com/criptomonedas/bitcoin-se-hunde-debajo-50-000-euros-anticipo-panico-que-se-esta-extendiendo-economia-global',
    urlToImage:
      'https://i.blogs.es/7d848e/behnam-norouzi-criptomonedas/840_560.jpeg',
    publishedAt: '2024-08-05T10:32:57Z',
    content:
      'El Bitcoin cotiza en estos momentos por debajo de los 48.000 euros. Ha caído más de un 10% solo en el día de hoy. Es el peor día para las criptomonedas desde el descalabro de FTX. Porque si el Bitcoi… [+1952 chars]',
  },
  {
    source: {
      id: null,
      name: 'Yahoo Entertainment',
    },
    author: 'Mariella Moon',
    title:
      'North Korean who used ransomware to attack US healthcare providers has been indicted',
    description:
      "A grand jury in Kansas City has indicted Rim Jong Hyok, a North Korean intelligence operative who allegedly used ransomware to attack health providers' systems in the US, according to AP News. The State Department said Rim is part of a group called Andariel t…",
    url: 'https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_5cf6a931-8e48-4282-baa8-9d59f3270937',
    urlToImage: null,
    publishedAt: '2024-07-26T14:00:08Z',
    content:
      "If you click 'Accept all', we and our partners, including 237 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+678 chars]",
  },
  {
    source: {
      id: null,
      name: 'ReadWrite',
    },
    author: 'Alvin Hemedez',
    title:
      'High-Potential Meme Coin Presales That Could Offer Explosive Returns – $MGMES, $SHIBASHOOT, and $PEPU',
    description:
      'As the current bull run progresses, it is imperative to examine three promising meme coins. Bitcoin is back, and its… Continue reading High-Potential Meme Coin Presales That Could Offer Explosive Returns – $MGMES, $SHIBASHOOT, and $PEPU\nThe post High-Potentia…',
    url: 'https://readwrite.com/high-potential-meme-coin-presales-that-could-offer-explosive-returns-mgmes-shibashoot-and-pepu/',
    urlToImage:
      'https://readwrite.com/wp-content/uploads/2024/07/high-potential-meme-coin-presales-that-could-offer-explosive-returns.jpg',
    publishedAt: '2024-07-30T19:39:36Z',
    content:
      'As the current bull run progresses, it is imperative to examine three promising meme coins. Bitcoin is back, and its resurgence is pumping the entire market.\r\nRetail investors are returning, and inte… [+6494 chars]',
  },
  {
    source: {
      id: null,
      name: 'Bitcoinhaber.net',
    },
    author: null,
    title: 'Bitcoin Investors Buy Puts Aggressively',
    description:
      "Recent movements in the cryptocurrency market have drawn significant attention, particularly Bitcoin's volatility. After Bitcoin's price fell below $50,000, a",
    url: 'https://en.bitcoinhaber.net/bitcoin-investors-buy-puts-aggressively',
    urlToImage:
      'https://en.bitcoinhaber.net/wp-content/uploads/2024/08/bitcoin-news-277.jpg',
    publishedAt: '2024-08-07T08:28:23Z',
    content:
      'Recent movements in the cryptocurrency market have drawn significant attention, particularly Bitcoins volatility. After Bitcoins price fell below $50,000, a key volatility indicator for the cryptocur… [+2403 chars]',
  },
  {
    source: {
      id: null,
      name: 'ReadWrite',
    },
    author: 'Alvin Hemedez',
    title: 'Top 4 Meme Coins to Watch in the Upcoming Bull Market',
    description:
      'As the cryptocurrency market gears up for an anticipated bull run, Bitcoin will likely lead with significant gains, followed by… Continue reading Top 4 Meme Coins to Watch in the Upcoming Bull Market\nThe post Top 4 Meme Coins to Watch in the Upcoming Bull Mar…',
    url: 'https://readwrite.com/top-4-meme-coins-to-watch-in-the-upcoming-bull-market/',
    urlToImage:
      'https://readwrite.com/wp-content/uploads/2024/07/top-four-meme-coins-to-watch-in-the-upcoming-bull-market.jpg',
    publishedAt: '2024-07-30T10:19:38Z',
    content:
      'As the cryptocurrency market gears up for an anticipated bull run, Bitcoin will likely lead with significant gains, followed by major altcoins like Ethereum and Solana.\r\nFollowing that, popular meme … [+6435 chars]',
  },
  {
    source: {
      id: null,
      name: 'ReadWrite',
    },
    author: 'Radek Zielinski',
    title: 'US Ethereum ETFs see net outflows on second trading day',
    description:
      'On their second day of trading, United States-based spot Ethereum exchange-traded funds (ETFs) recorded net outflows of $113.3 million, according… Continue reading US Ethereum ETFs see net outflows on second trading day\nThe post US Ethereum ETFs see net outfl…',
    url: 'https://readwrite.com/us-ethereum-etfs-see-net-outflows-on-second-trading-day/',
    urlToImage:
      'https://readwrite.com/wp-content/uploads/2024/07/7ef838ca-e7d5-4e5f-84b3-257b30922fcd-1.webp',
    publishedAt: '2024-07-25T16:37:37Z',
    content:
      'On their second day of trading, United States-based spot Ethereum exchange-traded funds (ETFs) recorded net outflows of $113.3 million, according to data reported by Farside Investors. This negative … [+1879 chars]',
  },
  {
    source: {
      id: null,
      name: 'Gizmodo.com',
    },
    author: 'Matt Novak',
    title:
      'The Crypto Lobby Is Spending Big Money on Democrats, and Republicans Aren’t Happy',
    description:
      'Support for Democrats Rep. Ruben Gallego in Arizona and Rep. Elissa Slotkin in Michigan has raised eyebrows.',
    url: 'https://gizmodo.com/the-crypto-lobby-is-spending-big-money-on-democrats-and-republicans-arent-happy-2000487283',
    urlToImage:
      'https://gizmodo.com/app/uploads/2024/08/Ruben-Gallego-and-Kamala-Harris-getty-crypto.jpg',
    publishedAt: '2024-08-15T14:50:34Z',
    content:
      'The cryptocurrency industry has raised hundreds of millions of dollars to spend in the 2024 election on various races House and Senate throughout the U.S. And while crypto is generally associated wit… [+3275 chars]',
  },
  {
    source: {
      id: null,
      name: 'Xataka.com',
    },
    author: 'Enrique Pérez',
    title:
      'Los ETF de Ethereum han arrasado en su primer día. Es señal que se abre una nueva etapa en el mundo cripto',
    description:
      'Tras la aprobación de los ETF de Bitcoin a principios de año, ahora llegan los ETF de Ethereum. Y los primeros datos de estos fondos indexados han supuesto una alegría para los inversores interesados en el mundo cripto. En su primer día los ETF de ETH han cap…',
    url: 'https://www.xataka.com/criptomonedas/etf-ethereum-han-arrasado-su-primer-dia-senal-que-se-abre-nueva-etapa-mundo-cripto',
    urlToImage: 'https://i.blogs.es/787709/traxer-ethereum/840_560.jpeg',
    publishedAt: '2024-07-24T10:49:04Z',
    content:
      'Tras la aprobación de los ETF de Bitcoin a principios de año, ahora llegan los ETF de Ethereum. Y los primeros datos de estos fondos indexados han supuesto una alegría para los inversores interesados… [+3005 chars]',
  },
  {
    source: {
      id: null,
      name: 'Xataka.com',
    },
    author: 'Enrique Pérez',
    title:
      'Trump promete convertir Estados Unidos en la cuna de las criptomonedas: "nunca vendáis vuestros bitcoins"',
    description:
      'La conferencia Bitcoin 2024 ha estado marcada por el discurso de Donald Trump. El candidato republicano ha aprovechado su intervención para posicionarse como un claro defensor de las criptomonedas. Y ha ido más allá. Si resulta elegido, ha prometido que conve…',
    url: 'https://www.xataka.com/criptomonedas/trump-promete-convertir-estados-unidos-cuna-criptomonedas-nunca-vendais-vuestros-bitcoins',
    urlToImage: 'https://i.blogs.es/488af4/bitcoin2024-trump/840_560.jpeg',
    publishedAt: '2024-07-29T07:55:14Z',
    content:
      'La conferencia Bitcoin 2024 ha estado marcada por el discurso de Donald Trump. El candidato republicano ha aprovechado su intervención para posicionarse como un claro defensor de las criptomonedas. Y… [+2523 chars]',
  },
  {
    source: {
      id: null,
      name: 'ReadWrite',
    },
    author: 'Alvin Hemedez',
    title:
      'The U.S. Election Could Potentially Fuel the Next Crypto Bull Run – Could This Layer 2 Meme Coin Take the Lead?',
    description:
      'The cryptocurrency market, including Bitcoin and Shiba Inu, is recovering strongly, which is a positive sign for new cryptocurrencies like… Continue reading The U.S. Election Could Potentially Fuel the Next Crypto Bull Run – Could This Layer 2 Meme Coin Take …',
    url: 'https://readwrite.com/the-u-s-election-could-potentially-fuel-the-next-crypto-bull-run-could-this-layer-2-meme-coin-take-the-lead/',
    urlToImage:
      'https://readwrite.com/wp-content/uploads/2024/07/the-us-election-could-potentially-fuel-the-next-crypto-bull-run.jpg',
    publishedAt: '2024-07-24T10:31:21Z',
    content:
      'The cryptocurrency market, including Bitcoin and Shiba Inu, is recovering strongly, which is a positive sign for new cryptocurrencies like Pepe Unchained.\r\nAs investor confidence grows and the market… [+4454 chars]',
  },
  {
    source: {
      id: null,
      name: 'ReadWrite',
    },
    author: 'Alvin Hemedez',
    title:
      'New Learn-to-Earn Crypto ICO Ending in 10 Days – Invest in 99BTC Before It Sells Out',
    description:
      'Investors have only a few days left to join the hottest crypto presale today, with predictions that the next token… Continue reading New Learn-to-Earn Crypto ICO Ending in 10 Days – Invest in 99BTC Before It Sells Out\nThe post New Learn-to-Earn Crypto ICO End…',
    url: 'https://readwrite.com/new-learn-to-earn-crypto-ico-ending-in-10-days-invest-in-99btc-before-it-sells-out/',
    urlToImage:
      'https://readwrite.com/wp-content/uploads/2024/07/new-learn-to-earn-crypto-ico-ending-in-ten-days.jpg',
    publishedAt: '2024-07-28T12:14:23Z',
    content:
      'Investors have only a few days left to join the hottest crypto presale today, with predictions that the next token will explode upon its IEO.\r\nWith more than $2.5 million already raised in the 99Bitc… [+4148 chars]',
  },
  {
    source: {
      id: 'business-insider',
      name: 'Business Insider',
    },
    author: 'jsor@businessinsider.com (Jennifer Sor)',
    title:
      'Stock market today: Dow jumps 285 points as traders try to extend comeback from big sell-off',
    description:
      'The Bank of Japan suggested on Wednesday it would pause rate hikes in the near-term, bolstering investor sentiment.',
    url: 'https://markets.businessinsider.com/news/stocks/stock-market-today-rally-interest-rates-fed-boj-carry-trade-2024-8',
    urlToImage:
      'https://i.insider.com/66b378f5a5247369a3ea253d?width=1200&format=jpeg',
    publishedAt: '2024-08-07T13:45:50Z',
    content:
      'US stocks jumped on Wednesday after the Bank of Japan issued guidance on interest rates and traders attempted to extend the rebound in stocks. All three benchmark indexes ticked higher, with the Dow … [+1689 chars]',
  },
  {
    source: {
      id: 'business-insider',
      name: 'Business Insider',
    },
    author: 'fdemott@insider.com (Filip De Mott)',
    title:
      'Stock market today: Indexes trade mixed after the S&P 500 hits longest winning streak of the year',
    description:
      "The stock rally lost momentum Tuesday morning as investors gear up for the Fed's symposium in Jackson Hole, Wyoming.",
    url: 'https://markets.businessinsider.com/news/stocks/stock-market-today-trades-mixed-sp500-win-streak-fed-rally-2024-8',
    urlToImage:
      'https://i.insider.com/66c49e051aa2ac29ee32739b?width=1200&format=jpeg',
    publishedAt: '2024-08-20T13:46:13Z',
    content:
      "The stock market inched higher on Tuesday, though momentum stalled out as investors took a breather following the S&amp;P 500's longest winning streak of the year. \r\nIn the past week, improving senti… [+1485 chars]",
  },
  {
    source: {
      id: null,
      name: 'Proton.me',
    },
    author: 'Andy Yen',
    title: 'Proton Wallet – a safer way to hold Bitcoin',
    description:
      'Proton Wallet is an easy-to-use self-custodial wallet that makes financial freedom attainable for everyone.',
    url: 'https://proton.me/blog/proton-wallet-launch',
    urlToImage:
      'https://res.cloudinary.com/dbulfrlrz/images/f_auto,q_auto/v1721750778/wp-pme/proton-wallet-blog-cover2x/proton-wallet-blog-cover2x.?_i=AA',
    publishedAt: '2024-07-24T11:13:31Z',
    content:
      'Published on July 24, 2024\r\nOur long-term vision is for Proton Wallet to be a digital wallet that gives you full control of your digital assets. While the type of assets that you can hold in Proton W… [+8566 chars]',
  },
  {
    source: {
      id: null,
      name: 'Xataka.com',
    },
    author: 'Javier Pastor',
    title:
      'Irán está ofreciendo recompensas a quienes delaten a los mineros de bitcoin',
    description:
      'Irán se ha convertido en un país especialmente popular entre los mineros de criptodivisas por el bajo coste de la energía. Sin embargo, el gobierno iraní, preocupado por el crecimiento del consumo energético, ha tomado una decisión singular.\n<!-- BREAK 1 -->\n…',
    url: 'https://www.xataka.com/criptomonedas/iran-esta-ofreciendo-recompensas-a-quienes-delaten-a-mineros-bitcoin',
    urlToImage: 'https://i.blogs.es/f8f908/mining-iran/840_560.jpeg',
    publishedAt: '2024-08-20T12:30:58Z',
    content:
      'Irán se ha convertido en un país especialmente popular entre los mineros de criptodivisas por el bajo coste de la energía. Sin embargo, el gobierno iraní, preocupado por el crecimiento del consumo en… [+1285 chars]',
  },
  {
    source: {
      id: null,
      name: 'ReadWrite',
    },
    author: 'Alvin Hemedez',
    title:
      'The 99Bitcoins ICO Ends on August 6th – Top Crypto to Watch in 2024?',
    description:
      'New high-potential crypto 99Bitcoins (99BTC) has announced its presale closing date on August 6th at 2PM UTC, signaling to investors… Continue reading The 99Bitcoins ICO Ends on August 6th – Top Crypto to Watch in 2024?\nThe post The 99Bitcoins ICO Ends on Aug…',
    url: 'https://readwrite.com/the-99bitcoins-ico-ends-on-august-6th-top-crypto-to-watch-in-2024/',
    urlToImage:
      'https://readwrite.com/wp-content/uploads/2024/07/crypto-boy-99btc-presale-update.jpg',
    publishedAt: '2024-07-25T14:59:40Z',
    content:
      'New high-potential crypto 99Bitcoins (99BTC) has announced its presale closing date on August 6th at 2PM UTC, signaling to investors seeking potential high returns.\r\nThis trending crypto continues to… [+4394 chars]',
  },
  {
    source: {
      id: null,
      name: 'ReadWrite',
    },
    author: 'Alvin Hemedez',
    title:
      'How Learning Crypto with 99Bitcoins Can Be Rewarding – Last Chance to Buy',
    description:
      'Having raised $2.5 million in its token presale, 99Bitcoins is poised to revolutionize cryptocurrency investing. Designed as a user-friendly platform… Continue reading How Learning Crypto with 99Bitcoins Can Be Rewarding – Last Chance to Buy\nThe post How Lear…',
    url: 'https://readwrite.com/how-learning-crypto-with-99bitcoins-can-be-rewarding-last-chance-to-buy/',
    urlToImage:
      'https://readwrite.com/wp-content/uploads/2024/07/how-learning-crypto-can-be-rewarding-with-the-99bitcoins-learn-to-earn-model.jpg',
    publishedAt: '2024-07-30T17:03:31Z',
    content:
      'Having raised $2.5 million in its token presale, 99Bitcoins is poised to revolutionize cryptocurrency investing.\r\nDesigned as a user-friendly platform to simplify complex market dynamics, 99Bitcoins … [+4784 chars]',
  },
  {
    source: {
      id: null,
      name: 'ReadWrite',
    },
    author: 'Alvin Hemedez',
    title: 'Learn-to-Earn Token Presale Ends Soon – Invest Now Before the IEO',
    description:
      'It is predicted by some experts that many new investors will enter the market in the coming months, and they… Continue reading Learn-to-Earn Token Presale Ends Soon – Invest Now Before the IEO\nThe post Learn-to-Earn Token Presale Ends Soon – Invest Now Before…',
    url: 'https://readwrite.com/learn-to-earn-token-presale-ends-soon-invest-now-before-the-ieo/',
    urlToImage:
      'https://readwrite.com/wp-content/uploads/2024/07/learn-to-earn-token-presale-ends-soon-invest-now-before-the-ieo.jpeg',
    publishedAt: '2024-07-29T16:14:44Z',
    content:
      'It is predicted by some experts that many new investors will enter the market in the coming months, and they will definitely seek education or knowledge about Bitcoin and cryptocurrencies.\r\nOne of th… [+4504 chars]',
  },
  {
    source: {
      id: null,
      name: 'ReadWrite',
    },
    author: 'Alvin Hemedez',
    title:
      'Few Days Left for This AI Meme Coin Presale – Invest in WAI Before It Sells Out',
    description:
      'WienerAI (WAI), a meme coin with AI integration, nears the end of its presale with only 9 days remaining, so… Continue reading Few Days Left for This AI Meme Coin Presale – Invest in WAI Before It Sells Out\nThe post Few Days Left for This AI Meme Coin Presale…',
    url: 'https://readwrite.com/few-days-left-for-this-ai-meme-coin-presale-invest-in-wai-before-it-sells-out/',
    urlToImage:
      'https://readwrite.com/wp-content/uploads/2024/07/few-days-left-for-thi-ai-meme-coin-presale-invest-in-wai-before-it-sells-out.jpg',
    publishedAt: '2024-07-22T10:51:08Z',
    content:
      'WienerAI (WAI), a meme coin with AI integration, nears the end of its presale with only 9 days remaining, so investors should act quickly for potential high returns.\r\nThis timing is opportune, as the… [+5173 chars]',
  },
  {
    source: {
      id: null,
      name: 'ReadWrite',
    },
    author: 'Alvin Hemedez',
    title:
      'The Hottest Learn-to-Earn Crypto Presale Raises $2.5 Million – Next 100x Crypto Gem?',
    description:
      'The 99Bitcoins presale offers a great investment chance, driven by its Learn-to-Earn model and big staking rewards for early investors.… Continue reading The Hottest Learn-to-Earn Crypto Presale Raises $2.5 Million – Next 100x Crypto Gem?\nThe post The Hottest…',
    url: 'https://readwrite.com/the-hottest-learn-to-earn-crypto-presale-raises-2-5-million-next-100x-crypto-gem/',
    urlToImage:
      'https://readwrite.com/wp-content/uploads/2024/07/next-100x-crypto-gem-1.jpg',
    publishedAt: '2024-07-22T16:04:07Z',
    content:
      'The 99Bitcoins presale offers a great investment chance, driven by its Learn-to-Earn model and big staking rewards for early investors.\r\nThe growing interest in the project has pushed the $99BTC pres… [+4884 chars]',
  },
  {
    source: {
      id: null,
      name: 'heise online',
    },
    author: 'Dirk Knop',
    title: 'Warnung vor Betrugsmasche: Opfersuche mit Bitcoin-Paper-Wallets',
    description:
      'Ein Klarsichtbeutel auf dem Weg enthält eine Quittung und Bitcoin-Paper-Wallet. Wer die URL im QR-Code darauf besucht, kann Betrugsopfer werden.',
    url: 'https://www.heise.de/news/Warnung-vor-Betrugsmasche-Opfersuche-mit-Bitcoin-Paper-Wallets-9838899.html',
    urlToImage:
      'https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/6/5/3/7/2/3/2024-03-12-Bing_Designer-Phishing-3-3840px-13692f75f2fcb4d0.png',
    publishedAt: '2024-08-19T07:27:00Z',
    content:
      'Das Landeskriminalamt Bayern warnt vor einer Betrugsmasche, bei der die Täter Klarsichtbeutel mit vermeintlichen, sogenannten Bitcoin-Paper-Wallets und einem angeblichen Einzahlungsbeleg auf Gehwegen… [+2095 chars]',
  },
  {
    source: {
      id: null,
      name: 'ReadWrite',
    },
    author: 'Alvin Hemedez',
    title:
      'Goat-Themed Crypto Set for Explosive Growth This August – Could This Be the Next 100x Meme Coin to Watch?',
    description:
      'Launched just last month, RealGOAT has rapidly gained traction within the cryptocurrency community, surging by an impressive 95% since its… Continue reading Goat-Themed Crypto Set for Explosive Growth This August – Could This Be the Next 100x Meme Coin to Wat…',
    url: 'https://readwrite.com/goat-themed-crypto-set-for-explosive-growth-this-august-could-this-be-the-next-100x-meme-coin-to-watch/',
    urlToImage:
      'https://readwrite.com/wp-content/uploads/2024/07/goat-themed-crypto-set-for-explosive-growth-this-august.jpg',
    publishedAt: '2024-07-28T08:52:36Z',
    content:
      'Launched just last month, RealGOAT has rapidly gained traction within the cryptocurrency community, surging by an impressive 95% since its introduction to the market.\r\nThe token, positioned as a play… [+3546 chars]',
  },
  {
    source: {
      id: null,
      name: 'Golem.de',
    },
    author: 'Achim Sawall',
    title: 'BaFin: Finanzaufsicht beschlagnahmt Bitcoin-Automaten',
    description:
      'Die Bundesanstalt für Finanzdienstleistungsaufsicht (Bafin) hat illegal betriebene Bitcoin-Automaten eingezogen - und auch rund 250.000 Euro beschlagnahmt. (Bitcoin, Security)',
    url: 'https://www.golem.de/sonstiges/zustimmung/auswahl.html?from=https%3A%2F%2Fwww.golem.de%2Fnews%2Fbafin-finanzaufsicht-beschlagnahmt-bitcoin-automaten-2408-188237.html&referer=https%3A%2F%2Ft.co%2F4b2cd0889a',
    urlToImage: null,
    publishedAt: '2024-08-21T11:06:01Z',
    content:
      'Besuchen Sie Golem.de wie gewohnt mit Werbung und Tracking,\r\n indem Sie der Nutzung aller Cookies zustimmen.\r\n Details zum Tracking finden Sie im Privacy Center.\r\nSkript wurde nicht geladen. Informat… [+607 chars]',
  },
  {
    source: {
      id: null,
      name: 'BBC News',
    },
    author: null,
    title: 'Trump courts crypto industry votes and campaign donations',
    description:
      "Donald Trump tells cryptocurrency leaders he will fire the head of the US Securities and Exchange Commission if he's re-elected president.",
    url: 'https://www.bbc.com/news/articles/cne4n2xdylvo',
    urlToImage:
      'https://ichef.bbci.co.uk/news/1024/branded_news/2bf5/live/2c3c05f0-4c5f-11ef-8f0f-0577398c3339.jpg',
    publishedAt: '2024-07-27T22:25:15Z',
    content:
      'Donald Trump has told one of the largest cryptocurrency events of the year that if he is re-elected president he will fire the chairperson of the US Securities and Exchange Commission (SEC) on the fi… [+2944 chars]',
  },
  {
    source: {
      id: null,
      name: 'Hipertextual',
    },
    author: 'Gabriel Erard',
    title: 'Ferrari comienza a aceptar pagos con criptomonedas en Europa',
    description:
      'Si estás en Europa y quieres —o puedes— comprarte un Ferrari, ahora tienes la opción de pagarlo con criptomonedas. La automotriz de Maranello anunció este miércoles la expansión de su sistema de pagos con criptoactivos a toda su red de concesionarios europeos…',
    url: 'http://hipertextual.com/2024/07/ferrari-comienza-a-aceptar-pagos-con-criptomonedas-en-europa',
    urlToImage:
      'https://imgs.hipertextual.com/wp-content/uploads/2024/07/brandon-atchison-_DzW3MT-iIY-unsplash-scaled.jpg',
    publishedAt: '2024-07-24T13:05:15Z',
    content:
      'Si estás en Europa y quieres o puedes comprarte un Ferrari, ahora tienes la opción de pagarlo con criptomonedas. La automotriz de Maranello anunció este miércoles la expansión de su sistema de pagos … [+3126 chars]',
  },
  {
    source: {
      id: null,
      name: 'Golem.de',
    },
    author: 'Tobias Költzsch',
    title: 'Kryptowährung: Bitcoin verliert in kurzer Zeit über 20 Prozent',
    description:
      'Der Aktienmarkt reagiert aktuell nervös - die Stimmung hat sich auch auf Kryptowährungen ausgeweitet: Bitcoin und Ethereum sind deutlich gesunken. (Bitcoin, Börse)',
    url: 'https://www.golem.de/sonstiges/zustimmung/auswahl.html?from=https%3A%2F%2Fwww.golem.de%2Fnews%2Fkryptowaehrung-bitcoin-verliert-in-kurzer-zeit-ueber-20-prozent-2408-187718.html&referer=https%3A%2F%2Ft.co%2F78d167def9',
    urlToImage: null,
    publishedAt: '2024-08-05T07:44:01Z',
    content:
      'Besuchen Sie Golem.de wie gewohnt mit Werbung und Tracking,\r\n indem Sie der Nutzung aller Cookies zustimmen.\r\n Details zum Tracking finden Sie im Privacy Center.\r\nSkript wurde nicht geladen. Informat… [+607 chars]',
  },
  {
    source: {
      id: null,
      name: 'Genbeta.com',
    },
    author: 'Antonio Vallejo',
    title:
      "Webs que regalaban hasta cinco bitcoins por resolver captchas: los 'faucets' en 2010 no tenían nada que ver con los de ahora",
    description:
      'El mundo de las criptomonedas ha cambiado drásticamente en los últimos 15 años. Y es que tras la adopción del bitcoin y otras criptodivisas por múltiples plataformas y usuarios, eventos recurrentes como el ‘halving’ y otros factores externos del mercado, el v…',
    url: 'https://www.genbeta.com/web/webs-que-regalaban-cinco-bitcoins-resolver-captchas-faucets-2010-no-tenian-nada-que-ver-ahora',
    urlToImage:
      'https://i.blogs.es/0123b2/erling-loken-andersen-7fiieouobtu-unsplash/840_560.jpeg',
    publishedAt: '2024-07-27T14:01:56Z',
    content:
      'El mundo de las criptomonedas ha cambiado drásticamente en los últimos 15 años. Y es que tras la adopción del bitcoin y otras criptodivisas por múltiples plataformas y usuarios, eventos recurrentes c… [+2703 chars]',
  },
  {
    source: {
      id: null,
      name: 'Yahoo Entertainment',
    },
    author: 'CoinDesk',
    title: 'Nvidia Becoming More Volatile Than Bitcoin and Ether',
    description:
      "Nvidia is expected to see more significant price swings than bitcoin and ether. The stock's 30-day options implied volatility, a gauge of anticipated price...",
    url: 'https://finance.yahoo.com/video/nvidia-becoming-more-volatile-bitcoin-160019799.html',
    urlToImage:
      'https://media.zenfs.com/en/coindesk_75/ba4c53629f204a13b105c92151481211',
    publishedAt: '2024-07-31T16:00:19Z',
    content:
      "Nvidia is expected to see more significant price swings than bitcoin and ether. The stock's 30-day options implied volatility, a gauge of anticipated price swings over four weeks, has recently surged… [+124 chars]",
  },
  {
    source: {
      id: null,
      name: 'ReadWrite',
    },
    author: 'Radek Zielinski',
    title: 'Base crypto donation platform launches for U.S. politicians',
    description:
      'A novel blockchain-based donation platform has emerged, enabling United States politicians to receive cryptocurrency contributions via the Coinbase-developed Base network.… Continue reading Base crypto donation platform launches for U.S. politicians\nThe post …',
    url: 'https://readwrite.com/base-crypto-donation-platform-launches-for-u-s-politicians/',
    urlToImage:
      'https://readwrite.com/wp-content/uploads/2024/07/bb52f118-8233-4c54-a2db-0cccc6518b7d.webp',
    publishedAt: '2024-07-23T14:15:24Z',
    content:
      'A novel blockchain-based donation platform has emerged, enabling United States politicians to receive cryptocurrency contributions via the Coinbase-developed Base network.\r\nThe platform, created by E… [+2050 chars]',
  },
  {
    source: {
      id: null,
      name: 'ReadWrite',
    },
    author: 'Radek Zielinski',
    title: 'Spot Ethereum ETFs Set to Launch in US on July 23',
    description:
      'The Securities and Exchange Commission (SEC) has approved spot Ethereum exchange-traded funds (ETFs) to begin trading in the United States… Continue reading Spot Ethereum ETFs Set to Launch in US on July 23\nThe post Spot Ethereum ETFs Set to Launch in US on J…',
    url: 'https://readwrite.com/spot-ethereum-etfs-set-to-launch-in-us-on-july-23/',
    urlToImage:
      'https://readwrite.com/wp-content/uploads/2024/07/3fcb3228-6cde-4ae5-9797-9a38dd278d78.webp',
    publishedAt: '2024-07-23T17:32:29Z',
    content:
      'The Securities and Exchange Commission (SEC)has approved spot Ethereum exchange-traded funds (ETFs) to begin trading in the United States on July 23, 2024.\r\nThis decision comes after the SEC approved… [+1779 chars]',
  },
  {
    source: {
      id: null,
      name: 'ReadWrite',
    },
    author: 'Alvin Hemedez',
    title:
      'Gala Technical Analysis and Price Prediction – Will GALA Surge 40x in 2024?',
    description:
      'The GALA token had a strong bounce back last Monday after a big drop, making it a top altcoin to… Continue reading Gala Technical Analysis and Price Prediction – Will GALA Surge 40x in 2024?\nThe post Gala Technical Analysis and Price Prediction – Will GALA Su…',
    url: 'https://readwrite.com/gala-technical-analysis-and-price-prediction-will-gala-surge-40x-in-2024/',
    urlToImage:
      'https://readwrite.com/wp-content/uploads/2024/07/gala-technical-analysis-and-price-prediction.jpg',
    publishedAt: '2024-07-31T14:54:57Z',
    content:
      'The GALA token had a strong bounce back last Monday after a big drop, making it a top altcoin to buy. The question is, what caused this recovery?\r\nIn this article, we’ll examine Gala Games from both … [+6692 chars]',
  },
  {
    source: {
      id: null,
      name: 'Xataka.com',
    },
    author: 'Javier Pastor',
    title:
      'Unos criptomineros usaron su estancia en Airbnb para ganar 100.000 dólares. Se descubrió cuando llegó la factura de la luz',
    description:
      'Una de las anfitrionas que tienen un piso en alquiler en esta plataforma se llevó un buen disgusto recientemente. Unos chicos alquilaron su piso durante tres semanas y todo pareció ir perfecto, pero unos días más tarde se encontró con una factura de la luz de…',
    url: 'https://www.xataka.com/criptomonedas/unos-criptomineros-usaron-su-estancia-airbnb-para-ganar-100-000-dolares-se-descubrio-cuando-llego-factura-luz',
    urlToImage: 'https://i.blogs.es/1b5bdc/cripto/840_560.jpeg',
    publishedAt: '2024-08-16T14:31:49Z',
    content:
      'Una de las anfitrionas que tienen un piso en alquiler en esta plataforma se llevó un buen disgusto recientemente. Unos chicos alquilaron su piso durante tres semanas y todo pareció ir perfecto, pero … [+2457 chars]',
  },
  {
    source: {
      id: null,
      name: 'Golem.de',
    },
    author: 'Peter Steinlechner',
    title: 'Wahlkampf USA: Trump umgarnt Bitcoin-Community',
    description:
      'In den USA besitzen rund 16 Prozent aller Erwachsenen Kryptowährungen. Das macht sie als Zielgruppe für Wahlkampfversprechen interessant. (Bitcoin, Marc Andreessen)',
    url: 'https://www.golem.de/sonstiges/zustimmung/auswahl.html?from=https%3A%2F%2Fwww.golem.de%2Fnews%2Fwahlkampf-usa-trump-umgarnt-bitcoin-community-2407-187505.html&referer=https%3A%2F%2Ft.co%2F9fced73e20',
    urlToImage: null,
    publishedAt: '2024-07-28T10:36:02Z',
    content:
      'Besuchen Sie Golem.de wie gewohnt mit Werbung und Tracking,\r\n indem Sie der Nutzung aller Cookies zustimmen.\r\n Details zum Tracking finden Sie im Privacy Center.\r\nSkript wurde nicht geladen. Informat… [+607 chars]',
  },
  {
    source: {
      id: 'die-zeit',
      name: 'Die Zeit',
    },
    author: 'ZEIT ONLINE: News -',
    title: 'Kryptowährungen: Trump umgarnt Bitcoin-Community',
    description:
      'Hier finden Sie Informationen zu dem Thema „Kryptowährungen“. Lesen Sie jetzt „Trump umgarnt Bitcoin-Community“.',
    url: 'https://www.zeit.de/news/2024-07/28/trump-umgarnt-bitcoin-community',
    urlToImage:
      'https://img.zeit.de/news/2024-07/28/trump-umgarnt-bitcoin-community-image-group/wide__1300x731',
    publishedAt: '2024-07-28T06:46:02Z',
    content:
      'Der republikanische Präsidentschaftskandidat Donald Trump hat sich auf der Bitcoin-Konferenz in Nashville für eine kryptofreundliche Politik ausgesprochen. Er kündigte an, im Falle seiner Wiederwahl … [+3469 chars]',
  },
  {
    source: {
      id: null,
      name: 'ReadWrite',
    },
    author: 'Alvin Hemedez',
    title:
      'Experts Predict Pepe Will Surge 10x in the Coming Months – Should You Buy PEPE or Consider This Layer 2 Meme Coin?',
    description:
      'Experts predict a big surge for Pepe (PEPE), leading many investors to believe now is the best time to buy… Continue reading Experts Predict Pepe Will Surge 10x in the Coming Months – Should You Buy PEPE or Consider This Layer 2 Meme Coin?\nThe post Experts Pr…',
    url: 'https://readwrite.com/experts-predict-pepe-will-surge-10x-in-the-coming-months-should-you-buy-pepe-or-consider-this-layer-2-meme-coin/',
    urlToImage:
      'https://readwrite.com/wp-content/uploads/2024/07/pepe-price-prediction-1.jpg',
    publishedAt: '2024-07-31T12:32:20Z',
    content:
      'Experts predict a big surge for Pepe (PEPE), leading many investors to believe now is the best time to buy in.\r\nThe cryptocurrency market is on the rise. Market volume has jumped by 62%, and the Fear… [+5122 chars]',
  },
  {
    source: {
      id: null,
      name: 'ReadWrite',
    },
    author: 'Radek Zielinski',
    title: 'Coinbase expands board with former OpenAI exec, clinton aide',
    description:
      'Leading US cryptocurrency exchange Coinbase has appointed three new members to its board of directors, expanding the board from seven… Continue reading Coinbase expands board with former OpenAI exec, clinton aide\nThe post Coinbase expands board with former Op…',
    url: 'https://readwrite.com/coinbase-expands-board-with-former-openai-exec-clinton-aide/',
    urlToImage:
      'https://readwrite.com/wp-content/uploads/2024/07/aeee0023-52cc-4e00-824b-c8cb7d04eef3.webp',
    publishedAt: '2024-07-26T14:30:42Z',
    content:
      'Leading US cryptocurrency exchange Coinbase has appointed three new members to its board of directors, expanding the board from seven to ten members.\r\nAccording to Reuters, the new board members incl… [+2145 chars]',
  },
  {
    source: {
      id: null,
      name: 'Threadreaderapp.com',
    },
    author: null,
    title: 'Google Strategy Doc from Antitrust Proceedings',
    description:
      "@jason_kint: wow. an amazing 325 page google strategy document quietly unsealed buried in google antitrust docket. It's gonna take a long thread but I have pulled out the gems. It's from 2017 planning, no doubt Goog...…",
    url: 'https://threadreaderapp.com/thread/1821554841786683554.html',
    urlToImage:
      'https://threadreaderapp.com/images/screenshots/thread/1821554841786683554.jpg',
    publishedAt: '2024-08-10T04:28:35Z',
    content:
      'Support us! We are indie developers!\r\nThis site is made by just two indie developers on a laptop doing marketing, support and development! Read more about the story.\r\nBecome a Premium Member ($3/mont… [+395 chars]',
  },
  {
    source: {
      id: null,
      name: 'Threadreaderapp.com',
    },
    author: null,
    title: '"Does astrology work? We tested the ability of 152 astrologers"',
    description:
      '@SpencrGreenberg: Does astrology work? We tested the ability of 152 astrologers to see if they could demonstrate genuine astrological skill. Here is how the study was designed and what we found (including a result t...…',
    url: 'https://threadreaderapp.com/thread/1822663687145972105.html',
    urlToImage:
      'https://threadreaderapp.com/images/screenshots/thread/1822663687145972105.jpg',
    publishedAt: '2024-08-12T13:32:12Z',
    content:
      'Support us! We are indie developers!\r\nThis site is made by just two indie developers on a laptop doing marketing, support and development! Read more about the story.\r\nBecome a Premium Member ($3/mont… [+395 chars]',
  },
  {
    source: {
      id: null,
      name: 'MarketWatch',
    },
    author: 'Frances Yue',
    title:
      'Bitcoin prices climb as crypto recovers. Here’s how they could keep rebounding.',
    description:
      'Major cryptocurrencies continued to rebound on Thursday as global risk markets stabilized.',
    url: 'https://www.marketwatch.com/story/bitcoin-prices-climb-as-crypto-recovers-heres-how-they-could-keep-rebounding-63af7e44',
    urlToImage: 'https://images.mktw.net/im-278331/social',
    publishedAt: '2024-08-08T21:27:00Z',
    content:
      'Major cryptocurrencies continued to rebound on Thursday as global risk markets stabilized. \r\nBitcoin \r\nBTCUSD was up 8.6% to around $59,465 on Thursday afternoon, according to Dow Jones Market Data. … [+212 chars]',
  },
  {
    source: {
      id: 'business-insider',
      name: 'Business Insider',
    },
    author: 'madams@businessinsider.com (Max Adams)',
    title:
      'Stock market today: Indexes climb as producer inflation comes in cool',
    description:
      'Stocks jumped after a cool PPI reading for July, setting the stage for consumer price inflation to show improvement when CPI is released Wednesday.',
    url: 'https://markets.businessinsider.com/news/stocks/stock-market-today-ppi-inflation-economy-interest-rates-earnings-djt-2024-8',
    urlToImage:
      'https://i.insider.com/631f874489d2b3001894b2e3?width=1200&format=jpeg',
    publishedAt: '2024-08-13T13:36:10Z',
    content:
      'US stocks were up on Tuesday after the producer price index for July showed wholesale inflation rose less than expected.\r\nData from the Bureau of Labor Statistics showed that producer prices increase… [+2502 chars]',
  },
  {
    source: {
      id: null,
      name: 'Presse-citron',
    },
    author: 'Romain Pomian-Bonnemaison',
    title:
      'Bitcoin : pourquoi sa valeur s’effondre à des niveaux abyssaux ce lundi',
    description:
      "Le cours du Bitcoin a connu sa pire journée ce lundi 6 août depuis la faillite de la bourse d'échange FTX.",
    url: 'https://www.presse-citron.net/bitcoin-pourquoi-sa-valeur-seffondre-a-des-niveaux-abyssaux-ce-lundi/',
    urlToImage:
      'https://www.presse-citron.net/app/uploads/2024/03/Bitcoin-ETF.jpg',
    publishedAt: '2024-08-06T18:03:19Z',
    content:
      'C’était plutôt inattendu, même si les signaux macroéconomiques commençaient à s’accumuler : le cours du Bitcoin vient de s’effondrer jusqu’à -17% ce lundi – une volatilité devenue assez rare ces dern… [+3113 chars]',
  },
  {
    source: {
      id: null,
      name: 'Mmapped.blog',
    },
    author: 'Roman Kashitsyn',
    title: 'Transaction models are programming paradigms',
    description: 'Functional programming vs OOP, now on a blockchain.',
    url: 'https://mmapped.blog/posts/30-transaction-models.html',
    urlToImage: null,
    publishedAt: '2024-08-16T14:45:53Z',
    content:
      'Many articles\r\nSee, for example, utxo vs. Account Models from Alchemy.\r\n explain the differences between the transaction models from the end users point of view.\r\nIn contrast, this section explores t… [+9465 chars]',
  },
  {
    source: {
      id: null,
      name: 'Quartz India',
    },
    author: 'Rocio Fabbro',
    title: "Bitcoin nears $70,000, boosted by Trump's Bitcoin promises",
    description:
      'Bitcoin hit its highest level since early June after presumptive Republican nominee Donald Trump made sweeping promises about the cryptocurrency at a conference over the weekend.Read more...',
    url: 'https://qz.com/bitcoin-price-donald-trump-conference-crypto-1851607449',
    urlToImage:
      'https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/24974ed28ac502f8b0761a599b1628e4.jpg',
    publishedAt: '2024-07-29T13:20:00Z',
    content:
      'Bitcoin hit its highest level since early June after presumptive Republican nominee Donald Trump made sweeping promises about the cryptocurrency at a conference over the weekend.\r\nThe price of the po… [+1829 chars]',
  },
  {
    source: {
      id: 'die-zeit',
      name: 'Die Zeit',
    },
    author: 'ZEIT ONLINE: News -',
    title:
      'Kryptowährungen: Bitcoin beschleunigt Talfahrt - Kurs unter 52.000 Dollar',
    description:
      'Hier finden Sie Informationen zu dem Thema „Kryptowährungen“. Lesen Sie jetzt „Bitcoin beschleunigt Talfahrt - Kurs unter 52.000 Dollar“.',
    url: 'https://www.zeit.de/news/2024-08/05/bitcoin-beschleunigt-talfahrt-kurs-unter-52-000-dollar',
    urlToImage:
      'https://img.zeit.de/news/2024-08/05/bitcoin-beschleunigt-talfahrt-kurs-unter-52-000-dollar-image-group/wide__1300x731',
    publishedAt: '2024-08-05T06:48:07Z',
    content:
      'Der Bitcoin verliert mit einer allgemein trüben Stimmung an den Finanzmärkten weiter kräftig an Boden. Der Kurs der ältesten und bekanntesten Kryptowährung sackte am Montagmorgen auf der Handelsplatt… [+3297 chars]',
  },
  {
    source: {
      id: 'die-zeit',
      name: 'Die Zeit',
    },
    author: 'ZEIT ONLINE: News -',
    title: 'Kryptowährungen: Bitcoin nach «schwarzem Montag» wieder im Aufwind',
    description:
      'Hier finden Sie Informationen zu dem Thema „Kryptowährungen“. Lesen Sie jetzt „Bitcoin nach "schwarzem Montag" wieder im Aufwind“.',
    url: 'https://www.zeit.de/news/2024-08/09/bitcoin-nach-schwarzem-montag-wieder-im-aufwind',
    urlToImage:
      'https://img.zeit.de/news/2024-08/09/bitcoin-nach-schwarzem-montag-wieder-im-aufwind-image-group/wide__1300x731',
    publishedAt: '2024-08-09T09:14:04Z',
    content:
      'Der Bitcoin und andere Kryptowährungen sind nach dem schwersten Kurseinbruch seit mehr als zwei Jahren am vergangenen Montag wieder auf dem Vormarsch. In der Nacht zum Freitag stieg der Bitcoin-Kurs … [+3117 chars]',
  },
  {
    source: {
      id: 'die-zeit',
      name: 'Die Zeit',
    },
    author: 'ZEIT ONLINE: News -',
    title: 'Börse: Bitcoin sackt deutlich ab - Kurs zuletzt bei 53.000 Dollar',
    description:
      'Hier finden Sie Informationen zu dem Thema „Börse“. Lesen Sie jetzt „Bitcoin sackt deutlich ab - Kurs zuletzt bei 53.000 Dollar“.',
    url: 'https://www.zeit.de/news/2024-08/05/bitcoin-sackt-deutlich-ab-kurs-zuletzt-bei-53-000-dollar',
    urlToImage:
      'https://img.zeit.de/news/2024-08/05/bitcoin-sackt-deutlich-ab-kurs-zuletzt-bei-53-000-dollar-image-group/wide__1300x731',
    publishedAt: '2024-08-05T05:31:28Z',
    content:
      'Der Bitcoin verliert wegen der zunehmenden Risikoscheu an den Finanzmärkten kräftig an Boden. Der Kurs der ältesten und bekanntesten Kryptowährung sackte am Montag im frühen Handel bis auf 53.000 Dol… [+379 chars]',
  },
  {
    source: {
      id: 'die-zeit',
      name: 'Die Zeit',
    },
    author: 'ZEIT ONLINE: News -',
    title: 'Kryptowährung: Nach Biden-Rückzug: Bitcoin steigt auf Monatshoch',
    description:
      'Hier finden Sie Informationen zu dem Thema „Kryptowährung“. Lesen Sie jetzt „Nach Biden-Rückzug: Bitcoin steigt auf Monatshoch“.',
    url: 'https://www.zeit.de/news/2024-07/22/nach-biden-rueckzug-bitcoin-steigt-auf-monatshoch',
    urlToImage:
      'https://img.zeit.de/news/2024-07/22/nach-biden-rueckzug-bitcoin-steigt-auf-monatshoch-image-group/wide__1300x731',
    publishedAt: '2024-07-22T07:28:50Z',
    content:
      'Der Kurs des Bitcoin hat mit über 68.000 US-Dollar den höchsten Stand seit mehr als einem Monat erreicht. In der vergangenen Nacht wurde die älteste und bekannteste Kryptowährung auf der Handelsplatt… [+1352 chars]',
  },
  {
    source: {
      id: 'die-zeit',
      name: 'Die Zeit',
    },
    author: 'ZEIT ONLINE: News -',
    title: 'Kryptowährung: Handel mit Ethereum-ETFs startet in den USA',
    description:
      'Hier finden Sie Informationen zu dem Thema „Kryptowährung“. Lesen Sie jetzt „Handel mit Ethereum-ETFs startet in den USA“.',
    url: 'https://www.zeit.de/news/2024-07/23/handel-mit-ethereum-etfs-startet-in-den-usa',
    urlToImage:
      'https://img.zeit.de/news/2024-07/23/handel-mit-ethereum-etfs-startet-in-den-usa-image-group/wide__1300x731',
    publishedAt: '2024-07-23T09:56:26Z',
    content:
      'Nachdem die US-Börsenaufsicht SEC den Weg für börsengehandelte Fonds (ETF) in der Kryptowährung Ether freigemacht hat, wird der Handel der Ethereum-ETFs ohne weitere Verzögerung beginnen. Fünf ETFs w… [+3230 chars]',
  },
  {
    source: {
      id: null,
      name: 'ReadWrite',
    },
    author: 'Alvin Hemedez',
    title:
      '5 Best Meme Coins to Buy and Hold – TodayTrader’s Top Picks for the Upcoming Bull Run',
    description:
      'As we enter August, we might see a positive trend in the crypto market, which could be a good sign… Continue reading 5 Best Meme Coins to Buy and Hold – TodayTrader’s Top Picks for the Upcoming Bull Run\nThe post 5 Best Meme Coins to Buy and Hold – TodayTrader…',
    url: 'https://readwrite.com/5-best-meme-coins-to-buy-and-hold-todaytraders-top-picks-for-the-upcoming-bull-run/',
    urlToImage:
      'https://readwrite.com/wp-content/uploads/2024/07/best-five-meme-coins-to-buy-and-hold.jpg',
    publishedAt: '2024-07-31T09:16:56Z',
    content:
      'As we enter August, we might see a positive trend in the crypto market, which could be a good sign for meme coins and their potential for significant growth.\r\nWe’re analyzing the Bitcoin chart, focus… [+6229 chars]',
  },
  {
    source: {
      id: null,
      name: 'heise online',
    },
    author: 'Dr. Christopher Kunz',
    title: 'Tumult am Finanzmarkt: Tech-Werte fallen, Neobroker mit Störungen',
    description:
      'Zu Wochenbeginn sind alle Finanzmarktplätze nervös, die großen Tech-Konzerne verlieren teilweise stark. Probleme mit Trading-Apps kommen da zur Unzeit.',
    url: 'https://www.heise.de/news/Tumult-am-Finanzmarkt-Tech-Werte-fallen-Neobroker-mit-Stoerungen-9823860.html',
    urlToImage:
      'https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/6/4/5/6/8/5/shutterstock_421955908-7a8e8d63ffd67f4d.jpg',
    publishedAt: '2024-08-05T09:27:00Z',
    content:
      'Nachdem Anleger bereits Ende vergangener Woche starke Kursverluste in vielen Bereichen hinnehmen mussten, geht der Kursrutsch nun weiter. Große Technologiewerte wie Nvidia, Google und Meta stehen wei… [+2521 chars]',
  },
  {
    source: {
      id: null,
      name: 'ReadWrite',
    },
    author: 'Alvin Hemedez',
    title: 'dogwifhat Price Prediction – Will WIF Hit $10 by Year’s End?',
    description:
      'With dogwifhat (WIF) price battling bearish pressure, experts are predicting whether WIF will reach $10 by the end of the… Continue reading dogwifhat Price Prediction – Will WIF Hit $10 by Year’s End?\nThe post dogwifhat Price Prediction – Will WIF Hit $10 by …',
    url: 'https://readwrite.com/dogwifhat-price-prediction-will-wif-hit-10-by-years-end/',
    urlToImage:
      'https://readwrite.com/wp-content/uploads/2024/07/dogwifhat-price-prediction.jpg',
    publishedAt: '2024-07-25T18:25:00Z',
    content:
      'With dogwifhat (WIF) price battling bearish pressure, experts are predicting whether WIF will reach $10 by the end of the year or merely sustain its current price of $2.51.\r\nCurrently ranked as the 1… [+3768 chars]',
  },
  {
    source: {
      id: null,
      name: 'ReadWrite',
    },
    author: 'Alvin Hemedez',
    title:
      '$99BTC Presale Enters Final Stage – Last Chance to Invest in a Platform Combining Education with Earnings',
    description:
      'The 99Bitcoins presale is in its final stages, concluding on August 6th at 2 PM UTC. This Learn-to-Earn project incentivizes… Continue reading $99BTC Presale Enters Final Stage – Last Chance to Invest in a Platform Combining Education with Earnings\nThe post $…',
    url: 'https://readwrite.com/99btc-presale-enters-final-stage-last-chance-to-invest-in-a-platform-combining-education-with-earnings/',
    urlToImage:
      'https://readwrite.com/wp-content/uploads/2024/07/99btc-presale-enters-final-stage-last-chance-to-invest-in-a-platform-combining-education-with-earnings.jpg',
    publishedAt: '2024-07-31T17:52:39Z',
    content:
      'The 99Bitcoins presale is in its final stages, concluding on August 6th at 2 PM UTC. This Learn-to-Earn project incentivizes users to gain cryptocurrency knowledge by rewarding them.\r\nThis innovative… [+4198 chars]',
  },
  {
    source: {
      id: null,
      name: 'Quartz India',
    },
    author: 'Vinamrata Chaturvedi',
    title:
      'Bitcoin miners are scooping up their rivals to survive the Bitcoin halving',
    description:
      'Bitcoin mining companies have been acquiring their competitors for quite some time, and this trend has intensified following the Bitcoin halving—a technical event that occurs every four years to ensure scarcity and protect against inflation. This year, the ha…',
    url: 'https://qz.com/bitcoin-miners-acquiring-rivals-after-bitcoin-halving-1851628402',
    urlToImage:
      'https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/4ec9f5077d0bc9700130631aab39fecb.jpg',
    publishedAt: '2024-08-21T20:40:00Z',
    content:
      'In This Story\r\nBitcoin mining companies have been acquiring their competitors for quite some time, and this trend has intensified following the Bitcoin halvinga technical event that occurs every four… [+1129 chars]',
  },
  {
    source: {
      id: 'business-insider',
      name: 'Business Insider',
    },
    author: 'Haven Orecchio-Egresitz',
    title:
      "As Ryan Salame stares down years in prison for his role in FTX, he's spending his time doing what he loves: posting",
    description:
      "As the FTX insider recovers from a dog attack that delayed his prison sentence, he's posting on X about Sam Bankman-Fried's trial and Donald Trump.",
    url: 'https://www.businessinsider.com/ryan-salame-posting-ftx-crypto-trump-sbf-awaiting-prison-2024-8',
    urlToImage:
      'https://i.insider.com/66aba1ca1a227600e633758c?width=1200&format=jpeg',
    publishedAt: '2024-08-02T11:20:02Z',
    content:
      'Ryan Salame is returned to X ahead of his prison sentence.REUTERS/Brendan McDermid\r\n<ul><li>Ryan Salame was sentenced to 7½ years in prison for his role in the collapse of FTX.</li><li>Awaiting priso… [+11057 chars]',
  },
  {
    source: {
      id: null,
      name: 'Faz.net',
    },
    author: 'Franz Nestler',
    title: 'Bitcoin stürzt auf weniger als 50.000 Dollar ab',
    description:
      'Die Sorgen um die Weltwirtschaft belasten auch die Digitalwährungen. Die Angst ist groß, ein Ende ist nicht in Sicht.',
    url: 'https://www.faz.net/aktuell/finanzen/bitcoin-stuerzt-auf-weniger-als-50-000-dollar-ab-hoffnungen-und-unsicherheiten-19901110.html',
    urlToImage:
      'https://media0.faz.net/ppmedia/aktuell/finanzen/675558337/1.9901134/facebook_teaser_fplus/gibt-es-heute-wieder-billiger.jpg',
    publishedAt: '2024-08-05T14:00:37Z',
    content:
      'Eigentlich ist es bislang ein gutes Jahr für Digitalwährungen gewesen: Die ersten börsennotierten Indexfonds wurden auf den Markt gebracht, infolge derer die Kurse der Digitalwährungen neue Rekorde f… [+357 chars]',
  },
  {
    source: {
      id: 'cbs-news',
      name: 'CBS News',
    },
    author: 'Robbie Owens',
    title:
      'North Texas community says crypto-mining facility brings never-ending noise',
    description:
      'A rural Hood County community claims a crypto-mining facility replaced the peaceful quiet with constant noise.',
    url: 'https://www.cbsnews.com/texas/news/north-texas-community-says-crypto-mining-facility-never-ending-noise-declining-health/',
    urlToImage:
      'https://assets1.cbsnewsstatic.com/hub/i/r/2024/07/18/327767dd-5f56-48f6-8cff-76ceeb55ddc5/thumbnail/1200x630/34f09101da669e3795389c24d97e5d53/snapshot-2024-07-17t164718-317.jpg?v=e2b758f558b9b19612f3e16bc7fd9fcc',
    publishedAt: '2024-07-24T04:20:30Z',
    content:
      "GRANBURY — A rural Hood County community claims a crypto-mining facility replaced the peaceful quiet of the area with constant noise, and it's affecting their health.\r\nCrypto-mining uses computers an… [+4283 chars]",
  },
  {
    source: {
      id: null,
      name: 'Quartz India',
    },
    author: 'Vinamrata Chaturvedi',
    title:
      'A Bitcoin mining company plans to buy more Bitcoin by raising $250 million',
    description:
      'Marathon Digital Holdings (MARA), one of the world’s largest Bitcoin mining companies, is looking to increase its Bitcoin holdings by raising $250 million through a private offering of convertible senior notes.Read more...',
    url: 'https://qz.com/bitcoin-mining-company-raising-250-million-1851619462',
    urlToImage:
      'https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/fc690d4b49e90b5d08573d576ca544d8.jpg',
    publishedAt: '2024-08-12T14:41:43Z',
    content:
      'In This Story\r\nMarathon Digital Holdings (MARA), one of the worlds largest Bitcoin mining companies, is looking to increase its Bitcoin holdings by raising $250 million through a private offering of … [+1315 chars]',
  },
  {
    source: {
      id: null,
      name: 'Quartz India',
    },
    author: 'Vinamrata Chaturvedi',
    title:
      'Bitcoin, Bitcoin Cash, Ether, and more: Top crypto to watch this week',
    description:
      'This week will be interesting for the crypto market, as former President and Republican nominee Donald Trump has promised to establish a strategic national Bitcoin reserve if he is elected president in November. In addition, the Fed’s meeting is due on Wednes…',
    url: 'https://qz.com/top-cryptocurrency-to-watch-this-week-1851607462',
    urlToImage:
      'https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/1d04a1df983e25ecdb95418dc60abab5.jpg',
    publishedAt: '2024-07-29T14:00:00Z',
    content:
      'Bitcoin Cash (BCH) was created in 2017 after the Bitcoin hard fork. A hard fork is a phenomenon in the blockchain world that happens when the community makes major changes to the blockchain network a… [+526 chars]',
  },
  {
    source: {
      id: null,
      name: 'Wwwhatsnew.com',
    },
    author: 'Juan Diego Polo',
    title: 'Proton Wallet: La nueva cartera de Bitcoin',
    description:
      'Proton ha lanzado Proton Wallet, una nueva cartera de Bitcoin que promete revolucionar el acceso a las criptomonedas. Este desarrollo se centra en ofrecer una solución de autocustodia más segura y fácil de usar, permitiendo a los usuarios tener control total …',
    url: 'https://wwwhatsnew.com/2024/07/30/proton-wallet-la-nueva-cartera-de-bitcoin/',
    urlToImage:
      'https://wwwhatsnew.com/wp-content/uploads/2024/07/proton-wallet.jpg',
    publishedAt: '2024-07-30T02:00:22Z',
    content:
      'Proton ha lanzado Proton Wallet, una nueva cartera de Bitcoin que promete revolucionar el acceso a las criptomonedas. Este desarrollo se centra en ofrecer una solución de autocustodia más segura y fá… [+3541 chars]',
  },
  {
    source: {
      id: 't3n',
      name: 'T3n',
    },
    author: 'Jörn Brien',
    title:
      'Bitcoin crasht: Minus 20 Prozent in wenigen Stunden – das ist der Grund',
    description:
      'Ende Juli trieb Donald Trump mit seiner Ansage, die USA zur „Kryptohauptstadt des Planeten und zur Bitcoin-Supermacht“ zu machen, den Bitcoin-Kurs auf knapp 70.000 US-Dollar. Umso schmerzhafter jetzt der massive Einbruch. Woran liegt das? Noch vor etwas mehr …',
    url: 'https://t3n.de/news/bitcoin-crash-grund-1639138/',
    urlToImage:
      'https://t3n.de/news/wp-content/uploads/2023/10/shutterstock_1897558246.jpg',
    publishedAt: '2024-08-05T11:00:08Z',
    content:
      'Noch vor etwas mehr als einer Woche sah es so aus, als könnte der Bitcoin nach einer kurzen Schwächephase wieder zu alten Höhen zurückkehren. US-Präsidentschaftskandidat Donald Trump hatte erklärt, d… [+3497 chars]',
  },
  {
    source: {
      id: null,
      name: 'Xataka.com',
    },
    author: 'Javier Marquez',
    title:
      'El directo de Elon Musk con Donald Trump en X no arranca: la prueba de fuego de la red social deja a millones esperando',
    description:
      'Se suponía que Elon Musk y Donald Trump iban a hacer un directo desde X (Twitter) este martes a las 2 de la madrugada hora española (8 p.m. hora el este). La transmisión prometía ser una prueba de fuego para la capacidad de red social adquirida por el empresa…',
    url: 'https://www.xataka.com/aplicaciones/directo-elon-musk-donald-trump-x-no-arranca-prueba-fuego-red-social-deja-a-millones-esperando',
    urlToImage:
      'https://i.blogs.es/6ebc3d/elon-muks-trump-portada/840_560.jpeg',
    publishedAt: '2024-08-13T00:16:34Z',
    content:
      'Se suponía que Elon Musk y Donald Trump iban a hacer un directo desde X (Twitter) este martes a las 2 de la madrugada hora española (8 p.m. hora el este). La transmisión prometía ser una prueba de fu… [+2265 chars]',
  },
  {
    source: {
      id: null,
      name: 'Les Numériques',
    },
    author: 'Florent Lanne',
    title:
      'Actualité : Proton dévoile Wallet : un portefeuille de bitcoin chiffré',
    description:
      "Proton Wallet permet de stocker des bitcoins sur un portefeuille sécurisé et auto-hébergé. Il est possible d'envoyer des BTC par e-mail, comme on le ferait avec le service PayPal.",
    url: 'https://www.lesnumeriques.com/banque-en-ligne/proton-devoile-wallet-un-portefeuille-de-bitcoin-chiffre-n224654.html',
    urlToImage:
      'https://cdn.lesnumeriques.com/optim/news/22/224654/1838d3cc-proton-devoile-wallet-un-portefeuille-de-bitcoin-chiffre__1200_678__overflow.jpg',
    publishedAt: '2024-07-24T14:17:00Z',
    content:
      "Proton ne s'arrête plus sur sa lancée. Après avoir mis à disposition du grand public Proton Docs une alternative sécurisée à Google Doc suivi de Proton Scribe et Link Secure, l'entreprise spécialisée… [+2330 chars]",
  },
  {
    source: {
      id: null,
      name: 'Genbeta.com',
    },
    author: 'Marcos Merino',
    title:
      'Bitcoin ha perdido en unos días el 25% de su valor. Y ahora también se han desplomado las acciones de las grandes tecnológicas',
    description:
      'Bitcoin, la criptomoneda más popular del mundo, ha sufrido hoy un abrupto desplome, que la ha llevado a situarse por debajo de los 50.000 dólares, lo cual ha desatado el pánico no sólo en el mundo de las criptomonedas, sino en los mercados financieros globale…',
    url: 'https://www.genbeta.com/actualidad/bitcoin-ha-perdido-unos-dias-25-su-valor-ahora-tambien-se-han-desplomado-acciones-grandes-tecnologicas',
    urlToImage: 'https://i.blogs.es/98e167/bitcoin_acciones/840_560.jpeg',
    publishedAt: '2024-08-05T16:11:51Z',
    content:
      'Bitcoin, la criptomoneda más popular del mundo, ha sufrido hoy un abrupto desplome, que la ha llevado a situarse por debajo de los 50.000 dólares, lo cual ha desatado el pánico no sólo en el mundo de… [+3034 chars]',
  },
  {
    source: {
      id: null,
      name: 'Quartz India',
    },
    author: 'Rocio Fabbro and Andy Mills',
    title:
      "Donald Trump's Bitcoin promises send the cryptocurrency's price higher",
    description:
      'Trump vowed to establish a strategic national Bitcoin reserve and oust SEC Chair Gary Gensler',
    url: 'https://qz.com/donald-trump-bitcoin-promises-send-price-to-70-000-1851607727',
    urlToImage:
      'https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/25d97b6d50e10b52bacb05220d2d5b9a.webp',
    publishedAt: '2024-07-29T15:36:00Z',
    content:
      'Our free, fast, and fun briefing on the global economy, delivered every weekday morning.',
  },
  {
    source: {
      id: null,
      name: 'Caschys Blog',
    },
    author: 'Felix Frank',
    title: 'Proton Wallet: Einfach zu bediendendes Bitcoin-Wallet vorgestellt',
    description:
      'Proton, das Unternehmen aus der Schweiz, das hinter Diensten wie Proton Mail, Proton VPN, Proton Drive und Proton Pass steht, hat mit Proton Wallet jetzt ein Bitcoin-Wallet vorgestellt. Proton Wallet sei einfach zu bedienen und dient zur Selbstverwahrung von …',
    url: 'https://stadt-bremerhaven.de/proton-wallet-einfach-zu-bediendendes-bitcoin-wallet-vorgestellt/',
    urlToImage:
      'https://stadt-bremerhaven.de/wp-content/uploads/2024/07/proton-logo.jpg',
    publishedAt: '2024-07-24T10:59:51Z',
    content:
      'Proton, das Unternehmen aus der Schweiz, das hinter Diensten wie Proton Mail, Proton VPN, Proton Drive und Proton Pass steht, hat mit Proton Wallet jetzt ein Bitcoin-Wallet vorgestellt. \r\nProton Wall… [+2372 chars]',
  },
  {
    source: {
      id: null,
      name: 'Quartz India',
    },
    author: 'Vinamrata Chaturvedi',
    title: "Trump says he'll make a national Bitcoin reserve",
    description:
      'Former President and Republican nominee Donald Trump has promised to establish a strategic national Bitcoin reserve if he gets elected president in November, telling listeners to “never sell your Bitcoin.” Moreover, he announced that he would fire U.S. Securi…',
    url: 'https://qz.com/trump-promises-bitcoin-reserve-at-the-bitcoin-conferenc-1851607192',
    urlToImage:
      'https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/aaebc0c6b7e80fab7f315a8659b8d14f.png',
    publishedAt: '2024-07-28T17:42:00Z',
    content:
      'Former President and Republican nominee Donald Trump has promised to establish a strategic national Bitcoin reserve if he gets elected president in November, telling listeners to never sell your Bitc… [+1876 chars]',
  },
  {
    source: {
      id: null,
      name: 'Quartz India',
    },
    author: 'Vinamrata Chaturvedi',
    title: "RFK Jr. says he stores 'most' of his millions in Bitcoin",
    description:
      'The Bitcoin 2024 conference has become a political arena, and on its second day, independent presidential candidate Robert F. Kennedy Jr. said that he holds most of his wealth in Bitcoin.Read more...',
    url: 'https://qz.com/rfk-jr-s-claims-most-of-his-wealth-in-bitcoin-1851606602',
    urlToImage:
      'https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/6a0799617d588a6cad9c830077eb7be1.jpg',
    publishedAt: '2024-07-26T18:31:00Z',
    content:
      'The Bitcoin 2024 conference has become a political arena, and on its second day, independent presidential candidate Robert F. Kennedy Jr. said that he holds most of his wealth in Bitcoin.\r\nThe crypto… [+1108 chars]',
  },
  {
    source: {
      id: null,
      name: 'Rolling Stone',
    },
    author: 'Miles Klee',
    title:
      'Crypto Giants Want to Buy Washington. They’re Bankrolling Trump to Make It Happen',
    description:
      'Crypto billionaires are funding Trump. At Bitcoin 2024, he pledged to make America "the crypto capital" and appoint industry-friendly regulators.',
    url: 'http://www.rollingstone.com/politics/politics-features/trump-crypto-billionaires-buying-washington-1235068940/',
    urlToImage:
      'https://www.rollingstone.com/wp-content/uploads/2024/07/trump-bitcoin.jpg?w=1600&h=900&crop=1',
    publishedAt: '2024-07-27T20:51:42Z',
    content:
      'Just before the three-day Bitcoin 2024 conference got underway in Nashville this week, Tyler Winklevoss, the bitcoin billionaire who founded the cryptocurrency exchange Gemini with his twin brother C… [+8780 chars]',
  },
  {
    source: {
      id: null,
      name: 'Autoblog',
    },
    author: 'Insider',
    title:
      "Trump says he has 'no choice' but to support EVs after Elon Musk's endorsement",
    description:
      "Filed under:\n Government/Legal,Green\n Continue reading Trump says he has 'no choice' but to support EVs after Elon Musk's endorsement\nTrump says he has 'no choice' but to support EVs after Elon Musk's endorsement originally appeared on Autoblog on Sun, 4 Aug …",
    url: 'https://www.autoblog.com/2024/08/04/trump-no-choice-support-electric-vehicles-elon-musk-endorsed/',
    urlToImage:
      'https://edgecast-img.yahoo.net/mysterio/api/00E97AE9658A4570647847018502C89D5884E92071AE6E8815B61AE917095B6D/autoblog/resizefill_w1200_h675;quality_85;format_webp;cc_31536000;/https://s.aolcdn.com/images/dims3/GLOB/crop/803x452 0 0/resize/1200x675/format/jpg/quality/100/https://media.zenfs.com/en/business_insider_articles_888/daf6709f14220278d394e05b8a61b103',
    publishedAt: '2024-08-04T18:35:00Z',
    content:
      'Elon Musk, center, meets Donald Trump in the White House in 2017.BRENDAN SMIALOWSKI/Getty Images\r\nFormer President Donald Trump said he had "no choice" but to support electric vehicles after Tesla CE… [+2782 chars]',
  },
  {
    source: {
      id: null,
      name: 'tagesschau.de',
    },
    author: 'tagesschau.de',
    title: 'Aktien, Bitcoin, Gold: Der Weg durch den ETF-Dschungel',
    description:
      'Anleger haben die Qual der Wahl: Weltweit gibt es mittlerweile mehr als 10.000 Indexfonds. Wo fängt man da mit der Suche an? Von Aktien-, Anleihen-, Bitcoin- und Gold-ETF. Von Antonia Mannweiler.',
    url: 'https://www.tagesschau.de/wirtschaft/verbraucher/etf-gold-und-asche-podcast-anleihen-bitcoin-dax-100.html',
    urlToImage:
      'https://images.tagesschau.de/image/926fc1d2-3a8f-40d3-b920-ff32bb898b02/AAABkSYDg4o/AAABkUqnCZ0/16x9-1280/nyse-340.jpg',
    publishedAt: '2024-08-21T06:14:30Z',
    content:
      'Stand: 21.08.2024 08:14 Uhr\r\nAnleger haben die Qual der Wahl - weltweit gibt es mittlerweile mehr als 10.000 Indexfonds. Wo fängt man da mit der Suche an? Von Aktien-, Anleihen-, Bitcoin- und Gold-ET… [+7302 chars]',
  },
  {
    source: {
      id: null,
      name: 'Quartz India',
    },
    author: 'Vinamrata Chaturvedi',
    title:
      'AI-powered Bitcoin mining would be a game changer — but not without challenges',
    description:
      'Artificial intelligence is rapidly making its way into nearly every industry, and Bitcoin mining is no exception. The process of generating new Bitcoin by solving complex mathematical problems has grown increasingly competitive and intriguing, prompting miner…',
    url: 'https://qz.com/ai-bitcoin-mining-1851623128',
    urlToImage:
      'https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/3f8846c172fc06962509557fdd1c8aef.jpg',
    publishedAt: '2024-08-19T09:00:00Z',
    content:
      'Artificial intelligence is rapidly making its way into nearly every industry, and Bitcoin mining is no exception. The process of generating new Bitcoin by solving complex mathematical problems has gr… [+4760 chars]',
  },
  {
    source: {
      id: null,
      name: 'Wwwhatsnew.com',
    },
    author: 'Juan Diego Polo',
    title:
      'Bitcoin supera los 61.000 dólares: ¿Un signo de recuperación en el mercado cripto?',
    description:
      'El mundo de las criptomonedas es conocido por su volatilidad, y la última semana no ha sido la excepción. Bitcoin, la criptomoneda más grande por capitalización de mercado, ha experimentado un aumento notable, superando la marca de los $61,000. Este movimient…',
    url: 'https://wwwhatsnew.com/2024/08/09/bitcoin-supera-los-61000-un-signo-de-recuperacion-en-el-mercado-cripto/',
    urlToImage:
      'https://wwwhatsnew.com/wp-content/uploads/2024/08/tec-1510.jpg',
    publishedAt: '2024-08-09T07:00:43Z',
    content:
      'El mundo de las criptomonedas es conocido por su volatilidad, y la última semana no ha sido la excepción. Bitcoin, la criptomoneda más grande por capitalización de mercado, ha experimentado un aument… [+4218 chars]',
  },
].map((item, ii) => ({ ...item, source: { ...item.source, id: ii } }));

export { arr as mockDataArray };
