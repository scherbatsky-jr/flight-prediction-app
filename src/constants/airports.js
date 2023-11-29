const airports = [
    {"code":"ABQ","airport":"Albuquerque International","city":"Albuquerque"},
{"code":"ANC","airport":"Ted Stevens Anchorage International","city":"Anchorage"},
{"code":"ATL","airport":"William B Hartsfield-Atlanta Intl","city":"Atlanta"},
{"code":"AUS","airport":"Austin-Bergstrom International","city":"Austin"},
{"code":"BDL","airport":"Bradley International","city":"Windsor Locks"},
{"code":"BHM","airport":"Birmingham International","city":"Birmingham"},
{"code":"BNA","airport":"Nashville International","city":"Nashville"},
{"code":"BOS","airport":"Gen Edw L Logan Intl","city":"Boston"},
{"code":"BUF","airport":"Buffalo Niagara Intl","city":"Buffalo"},
{"code":"BUR","airport":"Burbank-Glendale-Pasadena","city":"Burbank"},
{"code":"BWI","airport":"Baltimore-Washington International","city":"Baltimore"},
{"code":"CHS","airport":"Charleston AFB International","city":"Charleston"},
{"code":"CLE","airport":"Cleveland-Hopkins Intl","city":"Cleveland"},
{"code":"CLT","airport":"Charlotte Douglas International","city":"Charlotte"},
{"code":"CMH","airport":"Port Columbus Intl","city":"Columbus"},
{"code":"CVG","airport":"Cincinnati Northern Kentucky Intl","city":"Covington"},
{"code":"DAL","airport":"Dallas Love ","city":"Dallas"},
{"code":"DCA","airport":"Ronald Reagan Washington National","city":"Arlington"},
{"code":"DEN","airport":"Denver Intl","city":"Denver"},
{"code":"DFW","airport":"Dallas-Fort Worth International","city":"Dallas-Fort Worth"},
{"code":"DTW","airport":"Detroit Metropolitan-Wayne County","city":"Detroit"},
{"code":"ELP","airport":"El Paso International","city":"El Paso"},
{"code":"EWR","airport":"Newark Intl","city":"Newark"},
{"code":"FLL","airport":"Fort Lauderdale-Hollywood Int'l","city":"Ft. Lauderdale"},
{"code":"HNL","airport":"Honolulu International","city":"Honolulu"},
{"code":"HOU","airport":"William P X","city":"Houston"},
{"code":"IAD","airport":"Washington Dulles International","city":"Chantilly"},
{"code":"IAH","airport":"George Bush Intercontinental","city":"Houston"},
{"code":"IND","airport":"Indianapolis International","city":"Indianapolis"},
{"code":"JAX","airport":"Jacksonville International","city":"Jacksonville"},
{"code":"JFK","airport":"John F Kennedy Intl","city":"New York"},
{"code":"LAS","airport":"McCarran International","city":"Las Vegas"},
{"code":"LAX","airport":"Los Angeles International","city":"Los Angeles"},
{"code":"LGA","airport":"LaGuardia","city":"New York"},
{"code":"LIT","airport":"Adams ","city":"Little Rock"},
{"code":"MCI","airport":"Kansas City International","city":"Kansas City"},
{"code":"MCO","airport":"Orlando International","city":"Orlando"},
{"code":"MDW","airport":"Chicago Midway","city":"Chicago"},
{"code":"MEM","airport":"Memphis International","city":"Memphis"},
{"code":"MIA","airport":"Miami International","city":"Miami"},
{"code":"MKE","airport":"General Mitchell International","city":"Milwaukee"},
{"code":"MSP","airport":"Minneapolis-St Paul Intl","city":"Minneapolis"},
{"code":"MSY","airport":"New Orleans International ","city":"New Orleans"},
{"code":"OAK","airport":"Metropolitan Oakland International","city":"Oakland"},
{"code":"OGG","airport":"Kahului","city":"Kahului"},
{"code":"OKC","airport":"Will Rogers World","city":"Oklahoma City"},
{"code":"OMA","airport":"Eppley Airfield","city":"Omaha"},
{"code":"ONT","airport":"Ontario International","city":"Ontario"},
{"code":"ORD","airport":"Chicago O'Hare International","city":"Chicago"},
{"code":"ORF","airport":"Norfolk International","city":"Norfolk"},
{"code":"PBI","airport":"Palm Beach International","city":"West Palm Beach"},
{"code":"PDX","airport":"Portland Intl","city":"Portland"},
{"code":"PHL","airport":"Philadelphia Intl","city":"Philadelphia"},
{"code":"PHX","airport":"Phoenix Sky Harbor International","city":"Phoenix"},
{"code":"PIT","airport":"Pittsburgh International","city":"Pittsburgh"},
{"code":"PVD","airport":"Theodore F Green State","city":"Providence"},
{"code":"RDU","airport":"Raleigh-Durham International","city":"Raleigh"},
{"code":"RIC","airport":"Richmond International","city":"Richmond"},
{"code":"RNO","airport":"Reno Tahoe International","city":"Reno"},
{"code":"RSW","airport":"Southwest Florida International","city":"Ft. Myers"},
{"code":"SAN","airport":"San Diego International-Lindbergh ","city":"San Diego"},
{"code":"SAT","airport":"San Antonio International","city":"San Antonio"},
{"code":"SDF","airport":"Louisville International-Standiford ","city":"Louisville"},
{"code":"SEA","airport":"Seattle-Tacoma Intl","city":"Seattle"},
{"code":"SFO","airport":"San Francisco International","city":"San Francisco"},
{"code":"SJC","airport":"San Jose International","city":"San Jose"},
{"code":"SJU","airport":"Luis Munoz Marin International","city":"San Juan"},
{"code":"SLC","airport":"Salt Lake City Intl","city":"Salt Lake City"},
{"code":"SMF","airport":"Sacramento International","city":"Sacramento"},
{"code":"SNA","airport":"John Wayne  Orange Co","city":"Santa Ana"},
{"code":"STL","airport":"Lambert-St Louis International","city":"St Louis"},
{"code":"TPA","airport":"Tampa International ","city":"Tampa"},
{"code":"TUL","airport":"Tulsa International","city":"Tulsa"},
{"code":"TUS","airport":"Tucson International","city":"Tucson"},
{"code":"ABE","airport":"Lehigh Valley International","city":"Allentown"},
{"code":"ABI","airport":"Abilene Regional","city":"Abilene"},
{"code":"ABR","airport":"Aberdeen Regional","city":"Aberdeen"},
{"code":"ABY","airport":"Southwest Georgia Regional","city":"Albany"},
{"code":"ACK","airport":"Nantucket Memorial","city":"Nantucket"},
{"code":"ACT","airport":"Waco Regional","city":"Waco"},
{"code":"ACV","airport":"Arcata","city":"Arcata Eureka"},
{"code":"ACY","airport":"Atlantic City International","city":"Atlantic City"},
{"code":"ADK","airport":"Adak","city":"Adak"},
{"code":"ADQ","airport":"Kodiak ","city":"Kodiak"},
{"code":"AEX","airport":"Alexandria International","city":"Alexandria"},
{"code":"AGS","airport":"Bush ","city":"Augusta"},
{"code":"AKN","airport":"King Salmon","city":"King Salmon"},
{"code":"ALB","airport":"Albany Cty","city":"Albany"},
{"code":"ALO","airport":"Waterloo Municipal","city":"Waterloo"},
{"code":"AMA","airport":"Amarillo International","city":"Amarillo"},
{"code":"APN","airport":"Alpena County Regional ","city":"Alpena"},
{"code":"ART","airport":"Watertown Intl","city":"Watertown"},
{"code":"ASE","airport":"Aspen-Pitkin Co Sardy ","city":"Aspen"},
{"code":"ATW","airport":"Outagamie County Regional","city":"Appleton"},
{"code":"AVL","airport":"Asheville Regional","city":"Asheville"},
{"code":"AVP","airport":"Wilkes-Barre Scranton Intl","city":"Wilkes-Barre Scranton"},
{"code":"AZO","airport":"Kalamazoo County","city":"Kalamazoo"},
{"code":"BET","airport":"Bethel","city":"Bethel"},
{"code":"BFL","airport":"Meadows ","city":"Bakersfield"},
{"code":"BGM","airport":"Binghamton Regional","city":"Binghamton"},
{"code":"BGR","airport":"Bangor International","city":"Bangor"},
{"code":"BIL","airport":"Billings Logan Intl","city":"Billings"},
{"code":"BIS","airport":"Bismarck Municipal","city":"Bismarck"},
{"code":"BJI","airport":"Bemidji-Beltrami County","city":"Bemidji"},
{"code":"BLI","airport":"Bellingham Intl","city":"Bellingham"},
{"code":"BMI","airport":"Central Illinois Regional","city":"Bloomington"},
{"code":"BOI","airport":"Boise Air Terminal","city":"Boise"},
{"code":"BPT","airport":"Southeast Texas Regional","city":"Beaumont Port Arthur"},
{"code":"BQK","airport":"Glynco Jetport","city":"Brunswick"},
{"code":"BQN","airport":"Rafael Hernandez","city":"Aguadilla"},
{"code":"BRD","airport":"Brainerd-Crow Wing County Regional","city":"Brainerd"},
{"code":"BRO","airport":"Brownsville S.Padre Island International","city":"Brownsville"},
{"code":"BRW","airport":"Wiley Post Will Rogers Memorial","city":"Barrow"},
{"code":"BTM","airport":"Bert Mooney","city":"Butte"},
{"code":"BTR","airport":"Baton Rouge Metropolitan","city":"Baton Rouge"},
{"code":"BTV","airport":"Burlington International","city":"Burlington"},
{"code":"BZN","airport":"Gallatin ","city":"Bozeman"},
{"code":"CAE","airport":"Columbia Metropolitan","city":"Columbia"},
{"code":"CAK","airport":"Akron-Canton Regional","city":"Akron"},
{"code":"CDC","airport":"Cedar City Muni","city":"Cedar City"},
{"code":"CDV","airport":"Merle K (Mudhole) Smith","city":"Cordova"},
{"code":"CEC","airport":"Jack McNamara ","city":"Crescent City"},
{"code":"CHA","airport":"Lovell ","city":"Chattanooga"},
{"code":"CHO","airport":"Charlottesville-Albermarle","city":"Charlottesville"},
{"code":"CIC","airport":"Chico Municipal","city":"Chico"},
{"code":"CID","airport":"Eastern Iowa ","city":"Cedar Rapids"},
{"code":"CIU","airport":"Chippewa County International","city":"Sault Ste. Marie"},
{"code":"CLD","airport":"MC Clellan-Palomar Airport","city":null},
{"code":"CLL","airport":"Easterwood ","city":"College Station"},
{"code":"CMI","airport":"University of Illinois-Willard","city":"Champaign Urbana"},
{"code":"CMX","airport":"Houghton County Memorial","city":"Hancock"},
{"code":"CNY","airport":"Canyonlands ","city":"Moab"},
{"code":"COD","airport":"Yellowstone Regional","city":"Cody"},
{"code":"COS","airport":"City of Colorado Springs Muni","city":"Colorado Springs"},
{"code":"COU","airport":"Columbia Regional","city":"Columbia"},
{"code":"CPR","airport":"Natrona County Intl","city":"Casper"},
{"code":"CRP","airport":"Corpus Christi International","city":"Corpus Christi"},
{"code":"CRW","airport":"Yeager","city":"Charleston"},
{"code":"CSG","airport":"Columbus Metropolitan","city":"Columbus"},
{"code":"CWA","airport":"Central Wisconsin","city":"Mosinee"},
{"code":"CYS","airport":"Cheyenne","city":"Cheyenne"},
{"code":"DAB","airport":"Daytona Beach International","city":"Daytona Beach"},
{"code":"DAY","airport":"James M Cox Dayton Intl","city":"Dayton"},
{"code":"DBQ","airport":"Dubuque Municipal","city":"Dubuque"},
{"code":"DHN","airport":"Dothan ","city":"Dothan"},
{"code":"DIK","airport":"Dickinson Municipal","city":"Dickinson"},
{"code":"DLG","airport":"Dillingham","city":"Dillingham"},
{"code":"DLH","airport":"Duluth International","city":"Duluth"},
{"code":"DRO","airport":"Durango-La Plata County","city":"Durango"},
{"code":"DRT","airport":"Del Rio International","city":"Del Rio"},
{"code":"DSM","airport":"Des Moines International","city":"Des Moines"},
{"code":"DVL","airport":"Devils Lake Municipal-Knoke ","city":"Devils Lake"},
{"code":"EAU","airport":"Chippewa Valley Regional","city":"Eau Claire"},
{"code":"EGE","airport":"Eagle County Regional","city":"Eagle"},
{"code":"EKO","airport":"Elko Regional","city":"Elko"},
{"code":"ELM","airport":"Elmira Corning Regional","city":"Elmira"},
{"code":"ERI","airport":"Erie Intl","city":"Erie"},
{"code":"ESC","airport":"Delta County","city":"Escanaba"},
{"code":"EUG","airport":"Mahlon Sweet ","city":"Eugene"},
{"code":"EVV","airport":"Evansville Regional","city":"Evansville"},
{"code":"EWN","airport":"Craven County Regional","city":"New Bern"},
{"code":"EYW","airport":"Key West International","city":"Key West"},
{"code":"FAI","airport":"Fairbanks International","city":"Fairbanks"},
{"code":"FAR","airport":"Hector International","city":"Fargo"},
{"code":"FAT","airport":"Fresno Yosemite International","city":"Fresno"},
{"code":"FAY","airport":"Fayetteville Municipal","city":"Fayetteville"},
{"code":"FCA","airport":"Glacier Park Intl","city":"Kalispell"},
{"code":"FLG","airport":"Flagstaff Pulliam","city":"Flagstaff"},
{"code":"FLO","airport":"Florence Regional","city":"Florence"},
{"code":"FNT","airport":"Bishop","city":"Flint"},
{"code":"FOE","airport":"Forbes ","city":"Topeka"},
{"code":"FSD","airport":"Joe Foss ","city":"Sioux Falls"},
{"code":"FSM","airport":"Fort Smith Regional","city":"Fort Smith"},
{"code":"FWA","airport":"Fort Wayne International","city":"Fort Wayne"},
{"code":"GCC","airport":"Gillette-Campbell County","city":"Gillette"},
{"code":"GCK","airport":"Garden City Regional","city":"Garden City"},
{"code":"GEG","airport":"Spokane Intl","city":"Spokane"},
{"code":"GFK","airport":"Grand Forks International","city":"Grand Forks"},
{"code":"GGG","airport":"Gregg County","city":"Longview"},
{"code":"GJT","airport":"Walker ","city":"Grand Junction"},
{"code":"GNV","airport":"Gainesville Regional","city":"Gainesville"},
{"code":"GPT","airport":"Gulfport-Biloxi Regional","city":"Gulfport-Biloxi"},
{"code":"GRB","airport":"Austin Straubel International","city":"Green Bay"},
{"code":"GRI","airport":"Central Nebraska Regional ","city":"Grand Island"},
{"code":"GRK","airport":"Robert Gray AAF","city":"Killeen"},
{"code":"GRR","airport":"Kent County International","city":"Grand Rapids"},
{"code":"GSO","airport":"Piedmont Triad International","city":"Greensboro"},
{"code":"GSP","airport":"Greenville-Spartanburg","city":"Greer"},
{"code":"GST","airport":"Gustavus","city":"Gustavus"},
{"code":"GTF","airport":"Great Falls Intl","city":"Great Falls"},
{"code":"GTR","airport":"Golden Triangle Regional","city":"Columbus-Starkville-West Point"},
{"code":"GUC","airport":"Gunnison County","city":"Gunnison"},
{"code":"GUM","airport":"Guam International","city":"Agana"},
{"code":"HDN","airport":"Yampa Valley","city":"Hayden"},
{"code":"HIB","airport":"Chisholm-Hibbing","city":"Hibbing"},
{"code":"HLN","airport":"Helena Regional","city":"Helena"},
{"code":"HOB","airport":"Lea County Regional","city":"Hobbs"},
{"code":"HPN","airport":"Westchester Cty","city":"White Plains"},
{"code":"HRL","airport":"Valley International","city":"Harlingen"},
{"code":"HSV","airport":"Huntsville International ","city":"Huntsville"},
{"code":"HTS","airport":"Tri-State Walker-Long ","city":"Huntington"},
{"code":"HYA","airport":"Barnstable Mun Boardman Polando ","city":"Hyannis"},
{"code":"HYS","airport":"Hays Municipal","city":"Hays"},
{"code":"ICT","airport":"Wichita Mid-Continent","city":"Wichita"},
{"code":"IDA","airport":"Idaho Falls Regional","city":"Idaho Falls"},
{"code":"ILG","airport":"New Castle County ","city":"Wilmington"},
{"code":"ILM","airport":"Wilmington International","city":"Wilmington"},
{"code":"IMT","airport":"Ford","city":"Iron Mountain Kingsford"},
{"code":"INL","airport":"Falls International","city":"International Falls"},
{"code":"IPL","airport":"Imperial County","city":"Imperial"},
{"code":"ISN","airport":"Sloulin Field International","city":"Williston"},
{"code":"ISP","airport":"Long Island - MacArthur","city":"Islip"},
{"code":"ITH","airport":"Tompkins Cty ","city":"Ithaca"},
{"code":"ITO","airport":"Hilo International","city":"Hilo"},
{"code":"IYK","airport":"Inyokern","city":"Inyokern"},
{"code":"JAC","airport":"Jackson Hole","city":"Jackson"},
{"code":"JAN","airport":"Jackson International","city":"Jackson"},
{"code":"JLN","airport":"Joplin Regional","city":"Joplin"},
{"code":"JMS","airport":"Jamestown Municipal","city":"Jamestown"},
{"code":"JNU","airport":"Juneau International","city":"Juneau"},
{"code":"KOA","airport":"Kona International At Keahole","city":"Kailua Kona"},
{"code":"KTN","airport":"Ketchikan International","city":"Ketchikan"},
{"code":"LAN","airport":"Capital City","city":"Lansing"},
{"code":"LAR","airport":"Laramie Regional","city":"Laramie"},
{"code":"LAW","airport":"Lawton-Ft Sill Regional","city":"Lawton"},
{"code":"LBB","airport":"Lubbock International","city":"Lubbock"},
{"code":"LCH","airport":"Lake Charles Regional","city":"Lake Charles"},
{"code":"LEX","airport":"Blue Grass ","city":"Lexington"},
{"code":"LFT","airport":"Lafayette Regional","city":"Lafayette"},
{"code":"LGB","airport":"Long Beach (Daugherty )","city":"Long Beach"},
{"code":"LIH","airport":"Lihue","city":"Lihue"},
{"code":"LMT","airport":"Klamath Falls International","city":"Klamath Falls"},
{"code":"LNK","airport":"Lincoln Municipal","city":"Lincoln"},
{"code":"LRD","airport":"Laredo International","city":"Laredo"},
{"code":"LSE","airport":"La Crosse Municipal","city":"La Crosse"},
{"code":"LWB","airport":"Greenbrier Valley","city":"Lewisburg"},
{"code":"LWS","airport":"Lewiston-Nez Perce County","city":"Lewiston"},
{"code":"LYH","airport":"Lynchburg Municipal-Preston Glenn ","city":"Lynchburg"},
{"code":"MAF","airport":"Midland International","city":"Midland"},
{"code":"MBS","airport":"Mbs International","city":"Saginaw"},
{"code":"MCN","airport":"Middle Georgia Regional","city":"Macon"},
{"code":"MDT","airport":"Harrisburg Intl","city":"Harrisburg"},
{"code":"MEI","airport":"Key ","city":"Meridian"},
{"code":"MFE","airport":"McAllen Miller International","city":"McAllen"},
{"code":"MFR","airport":"Rogue Valley International","city":"Medford"},
{"code":"MGM","airport":"Montgomery Regional Apt","city":"Montgomery"},
{"code":"MHK","airport":"Manhattan Regional","city":"Manhattan"},
{"code":"MHT","airport":"Manchester","city":"Manchester"},
{"code":"MKG","airport":"Muskegon County","city":"Muskegon"},
{"code":"MLB","airport":"Melbourne International ","city":"Melbourne"},
{"code":"MLI","airport":"Quad City","city":"Moline"},
{"code":"MLU","airport":"Monroe Regional","city":"Monroe"},
{"code":"MMH","airport":"Mammoth Yosemite","city":"Mammoth Lakes"},
{"code":"MOB","airport":"Mobile Regional","city":"Mobile"},
{"code":"MOD","airport":"Modesto City-County-Harry Sham ","city":"Modesto"},
{"code":"MOT","airport":"Minot International","city":"Minot"},
{"code":"MQT","airport":"Marquette County Airport","city":null},
{"code":"MRY","airport":"Monterey Peninsula","city":"Monterey"},
{"code":"MSN","airport":"Dane County Regional","city":"Madison"},
{"code":"MSO","airport":"Missoula International","city":"Missoula"},
{"code":"MTJ","airport":"Montrose Regional","city":"Montrose"},
{"code":"MVY","airport":"Marthas Vineyard","city":"Marthas Vineyard"},
{"code":"MWH","airport":"Grant County","city":"Moses Lake"},
{"code":"MYR","airport":"Myrtle Beach International","city":"Myrtle Beach"},
{"code":"OAJ","airport":"Albert J Ellis","city":"Jacksonville"},
{"code":"OME","airport":"Nome","city":"Nome"},
{"code":"ORH","airport":"Worcester Regional","city":"Worcester"},
{"code":"OTH","airport":"North Bend Muni","city":"North Bend"},
{"code":"OTZ","airport":"Ralph Wien Memorial","city":"Kotzebue"},
{"code":"OXR","airport":"Oxnard","city":"Oxnard"},
{"code":"PAH","airport":"Barkley Regional","city":"Paducah"},
{"code":"PFN","airport":"Panama City-Bay County International","city":"Panama City"},
{"code":"PHF","airport":"Newport News Williamsburg International","city":"Newport News"},
{"code":"PIA","airport":"Greater Peoria Regional","city":"Peoria"},
{"code":"PIB","airport":"Hattiesburg-Laurel Regional","city":"Hattiesburg-Laurel"},
{"code":"PIE","airport":"St. Petersburg-Clearwater International","city":"St. Petersburg"},
{"code":"PIH","airport":"Pocatello Regional","city":"Pocatello"},
{"code":"PIR","airport":"Pierre Regional","city":"Pierre"},
{"code":"PLN","airport":"Pellston Regional  of Emmet County","city":"Pellston"},
{"code":"PNS","airport":"Pensacola Regional","city":"Pensacola"},
{"code":"PPG","airport":"Pago Pago International","city":"Pago Pago"},
{"code":"PSC","airport":"Tri-Cities","city":"Pasco"},
{"code":"PSE","airport":"Mercedita","city":"Ponce"},
{"code":"PSG","airport":"James C. Johnson Petersburg","city":"Petersburg"},
{"code":"PSP","airport":"Palm Springs International","city":"Palm Springs"},
{"code":"PUB","airport":"Pueblo Memorial","city":"Pueblo"},
{"code":"PWM","airport":"Portland International Jetport","city":"Portland"},
{"code":"RAP","airport":"Rapid City Regional","city":"Rapid City"},
{"code":"RDD","airport":"Redding Municipal","city":"Redding"},
{"code":"RDM","airport":"Roberts ","city":"Redmond"},
{"code":"RFD","airport":"Greater Rockford","city":"Rockford"},
{"code":"RHI","airport":"Rhinelander-Oneida County","city":"Rhinelander"},
{"code":"RKS","airport":"Rock Springs-Sweetwater County","city":"Rock Springs"},
{"code":"ROA","airport":"Roanoke Regional  Woodrum ","city":"Roanoke"},
{"code":"ROC","airport":"Greater Rochester Int'l","city":"Rochester"},
{"code":"ROW","airport":"Roswell Industrial Air Center","city":"Roswell"},
{"code":"RST","airport":"Rochester International","city":"Rochester"},
{"code":"SAF","airport":"Santa Fe Municipal","city":"Santa Fe"},
{"code":"SAV","airport":"Savannah International","city":"Savannah"},
{"code":"SBA","airport":"Santa Barbara Municipal","city":"Santa Barbara"},
{"code":"SBN","airport":"South Bend Regional","city":"South Bend"},
{"code":"SBP","airport":"San Luis Obispo Co-McChesney ","city":"San Luis Obispo"},
{"code":"SCC","airport":"Deadhorse","city":"Deadhorse"},
{"code":"SCE","airport":"University Park","city":null},
{"code":"SGF","airport":"Springfield-Branson Regional","city":"Springfield"},
{"code":"SGU","airport":"St George Muni","city":"St George"},
{"code":"SHD","airport":"Shenandoah Valley Regional","city":"Staunton Harrisonburg"},
{"code":"SHV","airport":"Shreveport Regional","city":"Shreveport"},
{"code":"SIT","airport":"Sitka","city":"Sitka"},
{"code":"SJT","airport":"San Angelo Regional  Mathis ","city":"San Angelo"},
{"code":"SMX","airport":"Santa Maria Pub Capt G Allan Hancock ","city":"Santa Maria"},
{"code":"SPI","airport":"Capital","city":"Springfield"},
{"code":"SPN","airport":"Tinian International Airport","city":null},
{"code":"SPS","airport":"Sheppard AFB Wichita Falls Municipal","city":"Wichita Falls"},
{"code":"SRQ","airport":"Sarasota Bradenton International","city":"Sarasota"},
{"code":"STC","airport":"St Cloud Regional","city":"St Cloud"},
{"code":"STT","airport":"Cyril E. King","city":"Charlotte Amalie"},
{"code":"STX","airport":"Henry E. Rohlsen ","city":"Christiansted"},
{"code":"SUN","airport":"Friedman Memorial","city":"Hailey"},
{"code":"SUX","airport":"Sioux Gateway ","city":"Sioux City"},
{"code":"SWF","airport":"Stewart","city":"Newburgh"},
{"code":"SYR","airport":"Syracuse-Hancock Intl","city":"Syracuse"},
{"code":"TEX","airport":"Telluride Regional","city":"Telluride"},
{"code":"TLH","airport":"Tallahassee Regional","city":"Tallahassee"},
{"code":"TOL","airport":"Toledo Express","city":"Toledo"},
{"code":"TRI","airport":"Tri-Cities Regional","city":"Bristol"},
{"code":"TTN","airport":"Trenton-Mercer County ","city":"Trenton"},
{"code":"TUP","airport":"Tupelo Municipal ","city":"Tupelo"},
{"code":"TVC","airport":"Cherry Capital","city":"Traverse City"},
{"code":"TWF","airport":"Joslin Field - Magic Valley","city":"Twin Falls"},
{"code":"TXK","airport":"Texarkana Regional-Webb ","city":"Texarkana"},
{"code":"TYR","airport":"Tyler Pounds ","city":"Tyler"},
{"code":"TYS","airport":"McGhee-Tyson","city":"Knoxville"},
{"code":"VEL","airport":"Vernal","city":"Vernal"},
{"code":"VLD","airport":"Valdosta Regional","city":"Valdosta"},
{"code":"VPS","airport":"Eglin Air Force Base","city":"Valparaiso"},
{"code":"WRG","airport":"Wrangell","city":"Wrangell"},
{"code":"WYS","airport":"Yellowstone","city":"West Yellowstone"},
{"code":"XNA","airport":"Northwest Arkansas Regional","city":"Fayetteville Springdale Rogers"},
{"code":"YAK","airport":"Yakutat","city":"Yakutat"},
{"code":"YUM","airport":"Yuma MCAS-Yuma International","city":"Yuma"},
]

export default airports