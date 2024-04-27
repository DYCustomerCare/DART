
//----------------------------------------------------------------------------------------------------
//
//  Variables
//
//----------------------------------------------------------------------------------------------------

// Time Frames & Policies
// Listed First For ease of access

var policy_return_US_refund_days = "30";
var policy_return_US_exchange_days = "30";
var policy_return_US_merch_credit_days = "30";
var policy_return_US_outlet_days = "30";

var policy_return_US_holiday_start = "on or after Sunday, October 29, 2023";
var policy_return_US_holiday_end = "through Saturday, January 20, 2024";

var policy_shiping_cutoff_weekday = "3PM EST";
var policy_shiping_cutoff_weekend = "12PM EST";

var policy_LGC_expiration = "December 31st, 2023";

// General
var lite_mode = true;

var countryList = ["United States", "Canada", "France", "United Kingdon", "China"]
const weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const weekdaysShort = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

const daysAheadHolidays = 28;

var holidayToday = [];
var holidayUpcoming = [];

// User Settings
var firstName = "";
var lastName = "";
var phone = "";
var position = "";

// Color Scheme
var schemeStyle = 0;
var rainbow = 0;

const searchRemoval = [
    "who", "whose", "who's",
    "what", "what's", "what'll",
    "where", "where's", "where'll",
    "when", "when's", "when'll",
    "why", "why's", "why'll",
    "how", "how's", "how'll",
    "can", "if", "do", "does", "will",
    "i", "i'm", "i'll", "my", "mine",
    "we", "we're", "we'll", "we'd", "our", "us",
    "they", "them", "their",
    "you", "you'll", "you'd", "you're",
    "a", "an",
    "are", "will", "might", "may", "maybe",
    "soon",
    "the", "any", "this", "these", "those", "that", "some",
    "it", "thing", "item", "items", "object", "objects",
    "there", "here", "anywhere", "somehwere", "nowhere",
    "anyone", "someone", "noone",
    "anybody", "somebody", "nobody",
    "from", "to",
    "are", "aren't",
    "is", "isn't",
    "was", "wasn't",
    "not", "cannot",
    "process", "prepare",
    "like", "think", "prefer",
    "could", "couldn't",
    "would", "wouldn't",
    "should", "shouldn't",
    "get", "send",
    "make", "generate", "check", "review",
    "in", "out", "at",
    "many",
    "with", "without",
    "find", "locate", "contact", "call", "email", "mail", "connect", "reach", "determine", "know", "figure",
    "customer", "customers", "customer's", "customers'", "customers's",
    "client", "clients", "client's", "clients'", "clients's",
    "guest", "guests", "guest's", "guests'", "guests's",
    "caller", "callers", "caller's", "callers'", "callers's",
]

// Favorites
var favoritesMax = 30;

// Notification Settings
var greetings = [
    "Hello", "Greetings", "Salutations"
]

// Icons
var iconClipboardOff = `clipboard`;
var iconClipboardOn = `clipboard-check-fill`;

var iconFavoriteOff = `star`;
var iconFavoriteOn = `star-fill`;

var iconBoutiqueFull = `shop`;
var iconBoutiqueOutlet = `shop-window`;
var iconBoutiqueAuthorizedRetailer = `building`;

var iconAssignments = ["person-fill", "stack", "stack"]

// Weather
// Weather Codes in this list will trigger an alert.
// Code list for API: https://openweathermap.org/weather-conditionsboutiqueTypes
var weather_warning = [
    // Thunder Storms
    201, 202, 232,
    // Drizzle
    314,
    // Rain
    502, 503, 504,
    // Snow
    601, 602, 611, 622,
    // Misc
    771, 781
]

var iconWeatherWarningToday = "exclamation-triangle-fill";
var iconWeatherWarningOther = "exclamation-triangle";

// Shipping Times
const deliveryTwoDay = [3,3,4,5,1,2,3] //Wed, Wed, Thu, Fri, Mon, Tue, Wed
const deliveryOneDay = [2,2,3,4,5,1,2] //Tue, Tue, Wed, Thu, Fri, Mon, Tue

const deliveryTwoDayCutOff = [3,4,5,1,2,3,3]; //Wed, Thu, Fri, Mon, Tue, Wed, Thu 
const deliveryOneDayCutOff = [2,3,4,5,1,2,2]; //Tue, Wed, Thu, Fri, Mon, Tue, Tue

// Boutique
const boutiqueTypes = ["Boutique", "Outlet", "Warehouse", "Webstore", "Concession", "Authorized Retailer", "Corporate Office", "Authorized Customer Service Center", "Authorized Corporate Service Center"]
const boutiqueIcons = ["shop", "shop-window", "box-seam", "globe", "building", "building-add", "buildings", "wrench-adjustable-circle", "wrench-adjustable-circle"]

// Warehouse
var warehouseState = 0

const warehouseStates = [
    {
        name: "OPEN",
        description: "The distribution center has opened",
        notice: "New orders will ship<br>later today",
        icon: "box-seam"
    },
    {
        name: "PICKUP",
        description: "The distribution center is preparing for an upcoming pickup",
        notice: "New orders will ship<br>next business day",
        icon: "truck"
    },
    {
        name: "CLOSED",
        description: "The distribution center has closed",
        notice: "New orders will ship<br>next business day",
        icon: "x-circle"
    }
]

// Assignments
var AssignmentsName = ["Person", "Group", "Queue"]

// Templates
var templateTypes = ["Task", "Salesforce Case", "Email", "Teams Chat", "IT Support Portal"];
var templateIcons = ["list-check", "cloud-fill", "envelope-paper", "microsoft-teams", "pc-display"];
var templateDesc = ["Please create a new task and follow the recommended assignments below.",
                    "Please create a new case or clone an existing Salesforce Case, and follow the recommended assignments below.",
                    "Please create a new email and email the recommend team member(s) below.",
                    "Create a new message in the department's chat in teams, and follow the recommend @ mention below.",
                    "While in the IT portal, use the recommend template(s) below."];

var contactTypes = ["Task Contact", "Task Group", "Task Queue", "Case Contact", "Case Queue", "@", "email"];
var contactIcons = ["person-fill", "stack", "stack", "person-fill", "stack", "microsoft-teams", "envelope-paper"];
var contactDesc = ["Assign this task to the designated user",
                    "Assign this task to the designated group in Salesforce.",
                    "Assign this task to the designated queue in Salesforce.",
                    "Assign this case to the designated user",
                    "Assign this case to the designated queue in Salesforce.",
                    "@ mention the following group in Teams.",
                    "Email the following user."];

const product_descriptions = [
    // Descriptions should always include a or an, followed by the word. Keep in alphabetical order to avoid redundancies.
    // 0: Neutral
    ["an attractive", "an amazing", "an appealing", "a charming", "a divine", "an engaging", "an excellent", "a magnificent", "a terrific", "a wonderful"],
    // 1: Feminine
    ["an alluring", "a beautiful", "a delightful", "an elegant", "a graceful", "a gorgeous", "a heavenly", "a lovely", "a stunning", "a ravishing"],
    // 2: Masculine
    ["a bold", "a daring", "a dignified", "an exquisite", "an intrepid", "a noble", "a refined", "a powerful", "a strong", "a stylish"]
]

const occasion_descriptions = {
    //Avoid usage of apostrophes (') and quotes (")! Descriptions should also be neutral.
    "gift_generic":     ["We know your gift will be well loved for many years to come.", "This is one of our favorites and we know it will be yours too!", "This beautiful piece will surely make an impression.", "Your loved one is sure to be bespelled by its beauty!"],
    "gift_holiday":     ["This will be a great gift this holiday season!", "This delightful piece captures the magic of the holiday season."],
    "gift_birthday":    ["This will be a great surprise!", "We just know they will love this for years to come!", "This lovely piece will make the perfect birthday gift."],
    "gift_graduation":  ["What an excellent way to capstone such a monumental ceremony.",
                        "We cannot think of a more perfect way to compliment their graduation!", "This stunning piece is a wonderful choice to celebrate their accomplishments."],
    "gift_date":        ["Your date is sure to love this heartfelt gift.", "This lovely piece is sure to wow your date!"],
    "engagement":       ["This is such a sweet expression of love.", "This grand symbol of love will leave the love of your life breathless!", "What a stunning choice to celebrate your engagement!"],
    "wedding":          ["This will add a special touch to your upcoming wedding.", "This stunning piece is the perfect choice to commemorate your special day."],
    "gift_wedding":     ["This couple will cherish this gift for a lifetime.", "This beautiful piece is sure to delight the happy couple on their wedding day."],
    "gift_bride":       ["She will remember this gift for a lifetime.", "This gorgeous piece will make an unforgettable wedding gift."],
    "gift_groom":       ["He will cherish this gift for a lifetime.", "This handsome piece will make an unforgettable wedding gift."],
    "anniversary":      ["This will be the perfect gift for your upcoming anniversary.", "This lovely piece will make your anniversary even more special."],
    "gift_anniversary": ["This will be the perfect gift for their upcoming anniversary.", "What a beautiful selection to celebrate their anniversary!"],
    "event":            ["This is the perfect piece for your upcoming event!", "This selection will really make your special night that much more memorable."],
    "event_casual":     ["You will be the center of attention at your upcoming party!", "You are sure to turn heads at your upcoming dinner."],
    "event_formal":     ["We know you will turn heads at your upcoming soiree!", "This beautiful piece is sure to dazzle at your upcoming banquet."],
    "collector":        ["This piece will be the perfect addition to your David Yurman collection!"],
    "gift_collector":   ["Your loved one will surely be delighted to add this piece to their David Yurman collection!"]
}

const design_descriptions = {
    //Avoid usage of apostrophes (') and quotes (")! Descriptions should also be neutral.
    
}

const quality_descriptions = {
    //Avoid usage of apostrophes (') and quotes (")! Descriptions should also be neutral.
    "design_petite":                    ["delicately crafted for casual wear"],
    "design_personalized":              ["adding a personal touch to any ensemble", "designed to accent everyone's personality", "with signature elements to make each piece personal"],
    "style_bold":                       ["and the perfect statement piece", "being both eye catching and striking", "and the perfect showstopper"],
    "style_classic":                    ["and is a staple in the David Yurman collection", "both timeless and captivating", "blending the contemporary and the past"],
    "style_modern":                     ["with bold lines and contemporary motifs", "inspired by an array of architectural elements", "with a blend of strong geometric shapes and crisp lines"],
    "style_eccentric":                  ["with sweeping artistic inspiration", "with unusual lines and asymetric curves", "with a play of exotic shapes and colors"],
    "style_elegant":                    ["understated and timeless", "and the perfect accent for any ensemble", "with exemplary sophistication"],
    "collection_wedding":               ["featuring a captivating center stone", "set with a brilliant center stone", "graced with an enchanting center stone"],
    "collection_eys":                   ["one of many one-of-a-kind or limited edition pieces in the EY Signature Collection"],
    "collection_artistSeries":          ["one of many one-of-a-kind or limited edition pieces in the Artist Series"],
    "collection_highJewelry":           ["one of many one-of-a-kind or limited edition pieces of High Jewelry"],
    "contains_diamonds":                ["with diamonds that sparkle day and night", "adorned in pavé diamonds", "accented with an assortment of pavé diamonds", "encursed in pavé diamonds"],
    "contains_color_light":             ["highlighting a variety of soft, light hues", "showcasing a variety of soft, light hues", "featuring a variety of soft, light hues"],
    "contains_color_vibrant":           ["highlighting a variety of vibrant, playful hues", "showcasing a variety of vibrant, playful hues", "featuring a variety of vibrant, playful hues"],
    "contains_color_dark":              ["highlighting a variety of rich, bold hues", "showcasing a variety of rich, bold hues", "featuring a variety of rich, bold hues"],
    "contains_color_mixed":             ["highlighting a whimsical play of colors", "adorned in an assortment colorful gems", "adorned with a mix of colorful games"],
    "contains_color_patterned":         ["with capivating waves of color", "with a whimsical play of lines and textures", "accented with striking patterns"]
}

var selection_synonyms = [
    "choice", "selection"
]

var gift_synonyms = [
    "gift", "present"
]

var plural_jewelry = [
    "earrings",
    "glasses",
    "sunglasses", "sun glasses",
    "eye glasses", "eyeglasses",
    "shades",
    "cufflinks", "cuff links",
    "studs", "stud set", "studset",
    "rings",
    "bangles", "bracelets", "cuffs",
    "timepieces", "watches",
    "chains", "necklaces", "chokers",
    "enhancers", "pendants", "amulets", "charms",
    "accessories", "anklets", "belts", "pins",
    "set", "pair", "group", "pieces",
]

var rainbowLight = ["pink", "orange", "yellow", "lightgreen", "lightblue", "Lavender"];
var rainbowDark = ["#400", "#420", "#440", "#040", "#004", "#404"];
var rainbowGem = ["DarkRed", "darkOrange", "DarkGoldenRod", "darkGreen", "MidnightBlue", "Purple "];
var rainbowIndependence = ["red", "DodgerBlue"];
var rainbowFreedom = ["DarkRed", "darkGreen"];

// notices

var noticesMax = 50;
var noticesNew = "bell-fill";
var noticesClear = "bell"

//bingo
var bingoBoard = "";
var bingoTiles = [
    //Sales
    "Complete An Online Order",
    "Complete A Personal Shop",
    "Placed $1,500+ Order",
    "Placed $2,500+ Order",
    "Placed $5,000+ Order",
    "Placed $10,000+ Order",
    "Complete 1 Sale",
    "Complete 5 Sales",
    "Complete 10 Sales",
    "$1,000 Daily Sales",
    "$5,000 Daily Sales",
    "$10,000 Daily Sales",
    "Sell A Bracelet",
    "Sell A Necklace",
    "Sell A Ring",
    "Sell An Earring or Earrings",
    "Turn Return Into A Sale",
    "Turn A Refund Into An Exchange",
    "Turn Repair Into A Sale",
    "Turn Escalation Into A Sale",

    // Service
    "Deescalate a Customer",
    "Follow Up With A Customer",
    "Take A Repair Call",
    "Take A Sales Call",
    "Take A Product Inquiry Call",
    "Take A Returns Call",

    // Quality
    "Compliment A Product",
    "Upsell A Piece Of Jewelry",
    "Repeated Caller's Name 3 Times",

    // Retail
    "Provided Store Address or Phone Number",
    "Book Cleaning Appointment",
    "Book Wedding Appointment",

    // Work
    "Send 20 Emails Today",
    "Take 20 Phone Calls Today",
    "Close 20 Cases Today",
    "Return A Missed Call",
    "Create 5 Tasks Today",
    "Referenced The Knowledge Base",
    
    // Personal
    "Receive A Wow",
    "Gave Someone A Wow",
    "Made A Customer Laugh",
    "Arrived On Time",
    "Reviewed Time Sheet",
    "Assisted A Team Member"
]

//----------------------------------------------------------------------------------------------------
//
//  DATA: Banners
//
//----------------------------------------------------------------------------------------------------

class banner {
    constructor (title="", subtitle="", description="", action="", image="") {
        this.title = title;
        this.subtitle = subtitle;
        this.description = description;
        this.action = action;
        this.image = image;
    }
}

const banners = [
    //limited To 4
    //Removed Steps Temporarily
    /*new banner (
        title = "Steps", subtitle = "Never Miss<br>Your Mark", description="", action="addSteps",
        image="https://media.istockphoto.com/id/1074983828/photo/sharing-ideas-concepts-with-papernote-writing-strategy-on-wall-glass-office-business-marketing.jpg?s=612x612&w=0&k=20&c=q47Ot4HKOFzfSy5K03o_CuJtezZ_1RMjEID5DGVN2gw="
    ),*/
    new banner (
        title = "Favorites", subtitle = "Target Your Perfect<br>Workflow", description="", action="addFavorites",
        image="https://burst.shopifycdn.com/photos/business-team-meeting-boardroom.jpg?width=1200&format=pjpg&exif=1&iptc=1"
    ),
    new banner (
        title = "QuickTask", subtitle = "Fly Though Tasks With Efficiency", description="", action="addQuickTask",
        image="https://media.istockphoto.com/id/1224089927/photo/close-up-ux-developer-and-ui-designer-brainstorming-about-mobile-app-interface-wireframe.jpg?s=612x612&w=0&k=20&c=cy_ya_R9xPfxR4dqsX7Bhr6oYSJMXHcExo6KXCzMtHs="
    ),
    new banner (
        title = "Internal Document", subtitle = "Ship With Speed", description="", action="addInternalDocument",
        image="https://media.istockphoto.com/id/845314264/photo/businessman-accepting-business-partners-offer.jpg?s=612x612&w=0&k=20&c=kRPw7z-C0ZYfTUvTDYXWDvHLwmrXoxQKogX_C253Qf4="
    ),
    new banner (
        title = "Changelog", subtitle = "Keep Up To Date", description="", action="addChangelogs",
        image="https://media.istockphoto.com/id/1224500457/photo/programming-code-abstract-technology-background-of-software-developer-and-computer-script.jpg?s=612x612&w=0&k=20&c=nHMypkMTU1HUUW85Zt0Ff7MDbq17n0eVeXaoM9Knt4Q="
    )
]

//----------------------------------------------------------------------------------------------------
//
//  DATA: Holidays
//
//----------------------------------------------------------------------------------------------------

// Months range from 0 (January) to 11 (December)
// Days range from 1-31.
// If a day is 0, it will refer to the years, which pulls the date based on the year.

class holiday {
    constructor (title="", monthLong = false, month=0, day=0, years={}, ending="Here", colorScheme=0, image="https://www.davidyurman.com/on/demandware.static/-/Sites/default/dwf3baebf9/images/storeImages/StoreLocator_DYLogo_Thumbnail.jpg") {
        this.title = title;
        this.monthLong = monthLong;
        this.month = month;
        this.day = day;
        this.years = years;
        this.ending = ending;
        this.colorScheme = colorScheme;
        this.description = description;
        this.image = image;
    }
}

const holidays = [
    new holiday (
        title = "New Year's Day", monthLong = false, month = 0, day = 1, years={}, ending="here", colorScheme=38,
        image="https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg?cs=srgb&dl=pexels-cottonbro-studio-3171837.jpg&fm=jpg"
    ),
    new holiday (
        title = "Martin Luther King Jr. Day", monthLong = false, month = 0, day = 0,
        years = {2023: 16, 2024: 15, 2025: 20, 2026: 19, 2027: 18, 2028: 17, 2029: 15, 2030: 21, 2031: 20, 2032: 19, 2033: 17},
        ending="Here", colorScheme=42, image="https://cdn.cnn.com/cnn/interactive/2018/04/us/martin-luther-king-jr-cnnphotos/media/01.jpg"
    ),
    new holiday (
        title = "Lunar New Year - Rabbit", monthLong = false, month = 0, day = 0, years={2023: 22},
        ending="Here", colorScheme=39, image="https://media.istockphoto.com/id/1180969159/photo/happy-family-celebrating-new-year-with-sparklers.jpg?s=612x612&w=0&k=20&c=pTd-OPk0UV99KpxdiXFy3T7YGua4ZxpKleOTub-pBPE="
    ),
    new holiday (
        title = "Black History Month", monthLong = true, month = 1, day = 1, years={}, ending="All Month Long", colorScheme=42,
        image="https://media.istockphoto.com/id/1156466210/photo/outdoor-portrait-of-multi-generation-family-in-garden-at-home-against-flaring-sun.jpg?s=612x612&w=0&k=20&c=CetgGEkjnh-PPwQ2p4xz7Ge6sPk5bku3x9QSqBhY-L8="
    ),
    new holiday (
        title = "Lunar New Year (Year Of The Dragon)", monthLong = false, month = 1, day = 0, years={2024: 10},
        ending="Here", colorScheme=39, image="https://media.istockphoto.com/id/1180969159/photo/happy-family-celebrating-new-year-with-sparklers.jpg?s=612x612&w=0&k=20&c=pTd-OPk0UV99KpxdiXFy3T7YGua4ZxpKleOTub-pBPE="
    ),
    new holiday (
        title = "Lunar New Year (Year of The Snake)", monthLong = false, month = 0, day = 0, years={2025: 29},
        ending="Here", colorScheme=39, image="https://media.istockphoto.com/id/1180969159/photo/happy-family-celebrating-new-year-with-sparklers.jpg?s=612x612&w=0&k=20&c=pTd-OPk0UV99KpxdiXFy3T7YGua4ZxpKleOTub-pBPE="
    ),
    new holiday (
        title = "Lunar New Year (Year Of The Horse)", monthLong = false, month = 1, day = 0, years={2026: 17},
        ending="Here", colorScheme=39, image="https://media.istockphoto.com/id/1180969159/photo/happy-family-celebrating-new-year-with-sparklers.jpg?s=612x612&w=0&k=20&c=pTd-OPk0UV99KpxdiXFy3T7YGua4ZxpKleOTub-pBPE="
    ),
    new holiday (
        title = "Lunar New Year (Year Of The Sheep)", monthLong = false, month = 1, day = 0, years={2027: 6},
        ending="Here", colorScheme=39, image="https://media.istockphoto.com/id/1180969159/photo/happy-family-celebrating-new-year-with-sparklers.jpg?s=612x612&w=0&k=20&c=pTd-OPk0UV99KpxdiXFy3T7YGua4ZxpKleOTub-pBPE="
    ),
    new holiday (
        title = "Lunar New Year (Year Of The Monkey)", monthLong = false, month = 0, day = 0, years={2028: 26},
        ending="Here", colorScheme=39, image="https://media.istockphoto.com/id/1180969159/photo/happy-family-celebrating-new-year-with-sparklers.jpg?s=612x612&w=0&k=20&c=pTd-OPk0UV99KpxdiXFy3T7YGua4ZxpKleOTub-pBPE="
    ),
    new holiday (
        title = "Lunar New Year (Year Of The Rooster)", monthLong = false, month = 1, day = 0, years={2029: 13},
        ending="Here", colorScheme=39, image="https://media.istockphoto.com/id/1180969159/photo/happy-family-celebrating-new-year-with-sparklers.jpg?s=612x612&w=0&k=20&c=pTd-OPk0UV99KpxdiXFy3T7YGua4ZxpKleOTub-pBPE="
    ),
    new holiday (
        title = "Lunar New Year (Year Of The Dog)", monthLong = false, month = 1, day = 0, years={2030: 3},
        ending="Here", colorScheme=39, image="https://media.istockphoto.com/id/1180969159/photo/happy-family-celebrating-new-year-with-sparklers.jpg?s=612x612&w=0&k=20&c=pTd-OPk0UV99KpxdiXFy3T7YGua4ZxpKleOTub-pBPE="
    ),
    new holiday (
        title = "Valentine's Day", monthLong = false, month = 1, day = 14, years={}, ending="Here", colorScheme=40,
        image="https://media.istockphoto.com/id/1074671644/photo/romantic-candlelight-dinner.jpg?s=612x612&w=0&k=20&c=_ojxLGzvT7jLDotY71EO7-IVWAup4BbqsxQK-fg2iuQ="
    ),
    new holiday (
        title = "Women's History Month", monthLong = true, month = 2, day = 1, years={}, ending="All Month Long", colorScheme=8,
        image="https://img.freepik.com/premium-photo/multiethnic-group-female-activist-protesting-women-s-rights-city-streets-while-men-are-standing-background_637285-7316.jpg"
    ),
    new holiday (
        title = "The First Day Of Spring", monthLong = false, month = 2, day = 20, years={}, ending="Here", colorScheme=45,
        image="https://media.istockphoto.com/photos/mother-and-daughter-planting-flowers-in-garden-picture-id1310289685?b=1&k=20&m=1310289685&s=612x612&w=0&h=z40yYiBg-N1lchXXC1gYW5b5bYEZu0px-lyGJR6ObqI="
    ),
    new holiday (
        title = "April Fool's Day", monthLong = false, month = 3, day = 1, years={},
        ending="Tomorrow", colorScheme=14, image="https://st2.depositphotos.com/1000975/5254/i/450/depositphotos_52549403-stock-photo-clown-businessman-in-funny-concept.jpg"
    ),
    new holiday (
        title = "President's Day", monthLong = false, month = 1, day = 0,
        years = {2023: 20, 2024: 19, 2025: 17, 2026: 16, 2027: 15, 2028: 21, 2029: 19, 2030: 18, 2031: 17, 2032: 16, 2033: 17}, ending="Here", colorScheme=41, 
        image="https://c.tadst.com/gfx/750w/istock-659526568.jpg"
    ),
    new holiday (
        title = "Cindo De Mayo", monthLong = false, month = 4, day = 5,
        years = {2023: 29, 2024: 27, 2025: 26, 2026: 25, 2027: 31, 2028: 29, 2029: 28, 2030: 27, 2031: 30, 2032: 28, 2033: 27}, ending="Here", colorScheme=43, 
        image="https://blog.way.com/wp-content/uploads/2022/04/Cinco-de-mayo-2022.jpg"
    ),
    new holiday (
        title = "Memorial Day", monthLong = false, month = 4, day = 0,
        years = {2023: 29, 2024: 27, 2025: 26, 2026: 25, 2027: 31, 2028: 29, 2029: 28, 2030: 27, 2031: 30, 2032: 28, 2033: 27}, ending="Here", colorScheme=41, 
        image="https://media.istockphoto.com/id/464975488/photo/in-their-honor-for-service-to-our-country.jpg?s=612x612&w=0&k=20&c=ug1MAYQ9zD1NKRIAU3TEvIc1aaOqkYXoySopwAIy2mI="
    ),
    new holiday (
        title = "Mother's Day", monthLong = false, month = 4, day = 0,
        years = {2023: 14, 2024: 12, 2025: 11, 2026: 10, 2027: 9, 2028: 14, 2029: 13, 2030: 12, 2031: 11, 2032: 9, 2033: 8}, ending="Here", colorScheme=8,
        image="https://media.istockphoto.com/id/1301171036/photo/three-generations-of-femininity.jpg?s=612x612&w=0&k=20&c=y40WNwyp7cEfxVViaPYUTJmfy_-TkgdRJmBEUiFaYME="
    ),
    new holiday (
        title = "Pride Month", monthLong = true, month = 5, day = 1, years={}, ending="All Month Long", colorScheme=14,
        image="https://i0.wp.com/newjerseyisntboring.com/wp-content/uploads/2021/06/pride-parade-person-flag-jfusco-for-vp-2200x1237px1.jpg?ssl=1"
    ),
    new holiday (
        title = "Father's Day", monthLong = false, month = 5, day = 0,
        years = {2023: 16, 2024: 15, 2025: 20, 2026: 19, 2027: 18, 2028: 17, 2029: 15, 2030: 21, 2031: 20, 2032: 19, 2033: 17}, ending="Here", colorScheme=6,
        image="https://media.istockphoto.com/id/1336672601/photo/smiling-multi-generation-male-family-at-home-in-garden-together.jpg?s=612x612&w=0&k=20&c=MrW330dpasCCds0iZ0LUnVxUrObWg3XoxK1-Kq8BEaA="
    ),
    new holiday (
        title = "Juneteenth", monthLong = false, month = 5, day = 19, years={}, ending="Here", colorScheme=42, 
        image="https://media.istockphoto.com/id/1045348096/photo/multi-generation-black-family-barbecue-grandad-grilling.jpg?s=612x612&w=0&k=20&c=t_5XmaYuEmsE9eB-_toXMT20EJne6uLScFhX9dE-JRA="
    ),
    new holiday (
        title = "The First Day Of Summer", monthLong = false, month = 5, day = 20, years={}, ending="Here", colorScheme=46,
        image="https://media.istockphoto.com/id/1140063009/photo/small-retro-car-with-baggage-luggage-and-beach-equipment-on-the-roof-fully-packed-ready-for.jpg?s=612x612&w=0&k=20&c=JxUeXl5GyA6v0f5yjZAGMZAkFoPERR9hZA1zk_iJMc8="
    ),
    new holiday (
        title = "Independence Day", monthLong = false, month = 6, day = 4, years={}, ending="Here", colorScheme=41,
        image="https://i0.wp.com/picjumbo.com/wp-content/uploads/sparklers-and-usa-flag-free-photo.jpg?w=1024&quality=50"
    ),
    new holiday (
        title = "Hispanic Heritage Month", monthLong = true, month = 9, day = 1, years={}, ending="All Month Long", colorScheme=43,
        image="https://media.istockphoto.com/id/1094440264/photo/three-generation-hispanic-family-standing-in-the-park-smiling-to-camera-selective-focus.jpg?s=612x612&w=0&k=20&c=mvWUYOrNzBtASbr4huFYJHWjkiHxUy1KyFmTGbmkV1A="
    ),
    new holiday (
        title = "Labor Day", monthLong = false, month = 8, day = 0,
        years = {2023: 4, 2024: 4, 2025: 1, 2026: 7, 2027: 6, 2028: 4, 2029: 3, 2030: 2, 2031: 1, 2032: 6, 2033: 5}, ending="Here", colorScheme=41,
        image="https://media.istockphoto.com/id/1253934109/vector/usa-labor-day-greeting-card-with-brush-wood-background-in-united-states-national-flag-colors.jpg?s=612x612&w=0&k=20&c=xzWAfo1xIAPKeCATOwJUo0q82ZsHcLdQCn1q8ce-OPI="
    ),
    new holiday (
        title = "The First Day Of Fall", monthLong = false, month = 8, day = 22, years={}, ending="Here", colorScheme=47,
        image="https://media.istockphoto.com/id/1289303735/photo/crazy-as-always.jpg?s=612x612&w=0&k=20&c=Zl8g8zFgnInXymHPrij_0Wlto8sX6CJvLmjFT3gjnhw="
    ),
    new holiday (
        title = "Breast Cancer Awareness Month", monthLong = true, month = 9, day = 1, years={}, ending="All Month Long", colorScheme=8,
        image="https://st2.depositphotos.com/2848797/5415/v/450/depositphotos_54159633-stock-illustration-breast-cancer-awareness-ribbon-background.jpg"
    ),
    new holiday (
        title = "Halloween", monthLong = false, month = 9, day = 31, years={}, ending="Here", colorScheme=29,
        image="https://media.istockphoto.com/id/1279635259/photo/happy-multi-ethnic-family-preparing-for-halloween-celebration.jpg?s=612x612&w=0&k=20&c=wQ2hPZuF5mRQ0rlUPbOZHYiwPd3ncK-7K_hwkFGZZdI="
    ),
    new holiday (
        title = "Dias De Los Muertos (Day 1)", monthLong = false, month = 10, day = 1, years={}, ending="Starting", colorScheme=27,
        image="https://media.istockphoto.com/id/1279717325/photo/mom-celebrating-day-of-the-dead-with-her-daughter-at-home.jpg?s=612x612&w=0&k=20&c=o-cocra5XLj54x-DhUCeC8iki9WL66NBaPUDJGnMmK0="
    ),
    new holiday (
        title = "Dias De Los Muertos (Day 2)", monthLong = false, month = 10, day = 2, years={}, ending="Ending", colorScheme=27,
        image="https://media.istockphoto.com/id/1081788796/photo/day-of-the-dead.jpg?s=612x612&w=0&k=20&c=qqed-nKClfIO6RvC7W6URgY8gm77QKKmsijOp-qfEoI="
    ),
    // Thanksgiving
    new holiday (
        title = "Thanksgiving", monthLong = false, month = 10, day = 0,
        years = {2023: 23, 2024: 28, 2025: 27, 2026: 26, 2027: 25, 2028: 23, 2029: 22, 2030: 28, 2031: 27, 2032: 25, 2033: 24}, ending="Here", colorScheme=3,
        image="https://media.istockphoto.com/id/1282434661/photo/happy-thanksgiving-day.jpg?s=612x612&w=0&k=20&c=oHgR5d6wRauzWKZHR2_yri70jIdOzyKQG0hIQ0QXVlc="
    ),
    new holiday (
        title = "Black Friday", monthLong = false, month = 10, day = 0,
        years = {2023: 24, 2024: 27, 2025: 28, 2026: 27, 2027: 26, 2028: 24, 2029: 23, 2030: 29, 2031: 28, 2032: 26, 2033: 25}, ending="Here", colorScheme=5,
        image="https://media.istockphoto.com/id/1178219324/photo/rear-view-of-unrecognizable-woman-with-hair-bun-carrying-black-friday-paperbags-on-shoulders.jpg?s=612x612&w=0&k=20&c=ZfBETwvo6MOJ1U91lX6aAYaoyDOL6Yk3C032NLjsV4c="
    ),
    new holiday (
        title = "Cyber Monday", monthLong = false, month = 10, day = 0,
        years = {2023: 27, 2026: 30, 2027: 29, 2028: 27, 2029: 26, 2032: 29, 2033: 28}, ending="Here", colorScheme=25,
        image="https://media.istockphoto.com/id/1057630078/vector/cyber-monday-background-neon-sign.jpg?s=612x612&w=0&k=20&c=yn2hY9OZu_RZNbSv5yVhUX6lgJ768MFLyCRtuYh8pKE="
    ),
    new holiday (
        title = "Cyber Monday", monthLong = false, month = 11, day = 0, years = {2024: 2, 2025: 1, 2030: 2, 2031: 1}, ending="Here", colorScheme=25,
        image="https://media.istockphoto.com/id/1057630078/vector/cyber-monday-background-neon-sign.jpg?s=612x612&w=0&k=20&c=yn2hY9OZu_RZNbSv5yVhUX6lgJ768MFLyCRtuYh8pKE="
    ),
    new holiday (
        title = "Veteran's Day", monthLong = false, month = 10, day = 11, years={}, ending="Here",  colorScheme=41,
        image="https://st4.depositphotos.com/3001967/30890/i/600/depositphotos_308906976-stock-photo-cheerful-daughter-hugging-father-soldier.jpg"
    ),
    // Hanukkah
    new holiday (
        title = "Hanukkah (Day 1)", monthLong = false, month = 11, day = 0,
        years = {2023: 7, 2024: 1, 2025: 1, 2026: 1, 2027: 1, 2028: 1, 2029: 1, 2030: 1, 2031: 1, 2032: 1, 2033: 1}, ending="Starting At Sundown", colorScheme=44, 
        image="https://media.istockphoto.com/id/1343861889/photo/happy-father-and-daughter-reading-tanakh-while-relaxing-on-hanukkah-at-home.jpg?s=612x612&w=0&k=20&c=-mWSqAW89Y2Bvzt5j2qMQFEshq0DCWUgIqRkIjfuaDk="
    ),
    new holiday (
        title = "Hanukkah (Day 2)", monthLong = false, month = 11, day = 0,
        years = {2023: 8, 2024: 1, 2025: 1, 2026: 1, 2027: 1, 2028: 1, 2029: 1, 2030: 1, 2031: 1, 2032: 1, 2033: 1}, ending="Continuing", colorScheme=44, 
        image="https://t3.ftcdn.net/jpg/05/39/32/30/360_F_539323081_kDdRRikXQ4zWUl83yZSzVrWfRhCLB7PX.jpg"
    ),
    new holiday (
        title = "Hanukkah (Day 3)", monthLong = false, month = 11, day = 0,
        years = {2023: 9, 2024: 1, 2025: 1, 2026: 1, 2027: 1, 2028: 1, 2029: 1, 2030: 1, 2031: 1, 2032: 1, 2033: 1}, ending="Continuing", colorScheme=44, 
        image="https://img.freepik.com/free-photo/front-view-hanukkah-concept_23-2148704585.jpg"
    ),
    new holiday (
        title = "Hanukkah (Day 4)", monthLong = false, month = 11, day = 0,
        years = {2023: 10, 2024: 1, 2025: 1, 2026: 1, 2027: 1, 2028: 1, 2029: 1, 2030: 1, 2031: 1, 2032: 1, 2033: 1}, ending="Continuing", colorScheme=44, 
        image="https://media.istockphoto.com/id/1337099562/photo/close-up-of-jewish-couple-passing-food-at-dining-table-on-hanukkah.jpg?s=612x612&w=0&k=20&c=HckmTd2A92kOFDfzU-j5S0EWajgsHWTX2thDGsufc_4="
    ),
    new holiday (
        title = "Hanukkah (Day 5)", monthLong = false, month = 11, day = 0,
        years = {2023: 11, 2024: 1, 2025: 1, 2026: 1, 2027: 1, 2028: 1, 2029: 1, 2030: 1, 2031: 1, 2032: 1, 2033: 1}, ending="Continuing", colorScheme=44, 
        image="https://media.istockphoto.com/id/1434820327/photo/cute-girl-looking-at-menorah-candle.jpg?s=612x612&w=0&k=20&c=6dflZFgusv7hOFuGgDhDWsj5U87sW4Hq8P5kwqYf1Lk="
    ),
    new holiday (
        title = "Hanukkah (Day 6)", monthLong = false, month = 11, day = 0,
        years = {2023: 12, 2024: 1, 2025: 1, 2026: 1, 2027: 1, 2028: 1, 2029: 1, 2030: 1, 2031: 1, 2032: 1, 2033: 1}, ending="Continuing", colorScheme=44, 
        image="https://media.istockphoto.com/id/1343863451/photo/happy-jewish-extended-family-having-lunch-at-dining-table-on-hanukkah.jpg?s=612x612&w=0&k=20&c=X7Rx_huWxzvvw4KFGGOScXJJ5Ow24jQ72WG_FrMpjg0="
    ),
    new holiday (
        title = "Hanukkah (Day 7)", monthLong = false, month = 11, day = 0,
        years = {2023: 13, 2024: 1, 2025: 1, 2026: 1, 2027: 1, 2028: 1, 2029: 1, 2030: 1, 2031: 1, 2032: 1, 2033: 1}, ending="Continuing", colorScheme=44, 
        image="https://media.istockphoto.com/id/157502603/photo/child-watching-father-lighting-the-menorah.jpg?s=612x612&w=0&k=20&c=K3NM8xd5jvJnUR1Eqwf6E4REieObkWAq73VHUEi7hmI="
    ),
    new holiday (
        title = "Hanukkah (Day 8)", monthLong = false, month = 11, day = 0,
        years = {2023: 14, 2024: 1, 2025: 1, 2026: 1, 2027: 1, 2028: 1, 2029: 1, 2030: 1, 2031: 1, 2032: 1, 2033: 1}, ending="Continuing", colorScheme=44, 
        image="https://media.istockphoto.com/id/1436772744/photo/close-up-of-jewish-girl-receiving-present-from-her-father-on-hanukkah.jpg?s=612x612&w=0&k=20&c=8Txj-U7F4bsYKxQPXqP_unUnVYX8Z3qSF7ZmVWaUZuk="
    ),
    new holiday (
        title = "Hanukkah (Day 9)", monthLong = false, month = 11, day = 0,
        years = {2023: 15, 2024: 1, 2025: 1, 2026: 1, 2027: 1, 2028: 1, 2029: 1, 2030: 1, 2031: 1, 2032: 1, 2033: 1}, ending="Ending At Sundown", colorScheme=44, 
        image="https://media.istockphoto.com/id/1434551840/photo/close-up-of-senior-man-lighting-menorah-during-family-dinner-on-hanukkah.jpg?s=612x612&w=0&k=20&c=PHCcz2a2rJsUCRWKaNzm0BQAatGl9Bpfb_eVifTRnrE="
    ),
    new holiday (
        title = "The First Day Of Winter", monthLong = false, month = 11, day = 21, years={}, ending="Here", colorScheme=48,
        image="https://media.istockphoto.com/id/185325220/photo/winter-branch-covered-with-snow.jpg?s=612x612&w=0&k=20&c=_yIUpphCyShalCl-SKUN__pIGUj51Xkoe5Klfo-l0H4="
    ),
    // Christmas
    new holiday (
        title = "Christmas Eve", monthLong = false, month = 11, day = 24, years={}, ending="Here", colorScheme=2,
        image="https://st2.depositphotos.com/3243153/8213/i/600/depositphotos_82132672-stock-photo-mother-and-children-at-home.jpg"
    ),
    new holiday (
        title = "Christmas", monthLong = false, month = 11, day = 25, years={}, ending="Here", colorScheme=4,
        image="https://st3.depositphotos.com/2760050/31999/i/600/depositphotos_319991886-stock-photo-family-time-family-tradition-concept.jpg"
    ),
    // Kwanzaa
    new holiday (
        title = "Kwanzaa (Umoja)", monthLong = false, month = 11, day = 26, years={}, ending="Starting", colorScheme=42,
        image="https://s2982.pcdn.co/wp-content/uploads/2021/12/a-family-celebrating-Kwanzaa.jpg.optimal.jpg"
    ),
    new holiday (
        title = "Kwanzaa (Kujichagulia)", monthLong = false, month = 11, day = 27, years={}, ending="Continuing", colorScheme=42,
        image="https://media.istockphoto.com/id/1425283843/photo/little-child-burning-candles-for-holiday.jpg?s=612x612&w=0&k=20&c=CgYWwMRFWGVZDh8kQsfyzecrO0-zIOfeksG4g8U64TI="
    ),
    new holiday (
        title = "Kwanzaa (Ujima)", monthLong = false, month = 11, day = 28, years={}, ending="Continuing", colorScheme=42,
        image="https://media.istockphoto.com/id/1364312514/photo/kwanzaa-celebration-african-american-family-lighting-the-kinara-candle-together-at-home-in.jpg?s=612x612&w=0&k=20&c=-llKGJY-nmVSL9QabzC6kE1nW4t4cg_E0oq4Q-VF87g="
    ),
    new holiday (
        title = "Kwanzaa (Ujamaa)", monthLong = false, month = 11, day = 29, years={}, ending="Continuing", colorScheme=42,
        image="https://t3.ftcdn.net/jpg/01/11/00/12/360_F_111001233_eOWFfZpSji8HkJK1D6AHobtcmFbF8Wpd.jpg"
    ),
    new holiday (
        title = "Kwanzaa (Nia)", monthLong = false, month = 11, day = 30, years={}, ending="Continuing", colorScheme=42,
        image="https://hips.hearstapps.com/hmg-prod/images/multi-generation-family-lighting-kwanzaa-candles-royalty-free-image-1608226053.?resize=980:*"
    ),
    new holiday (
        title = "Kwanzaa (Kuumba)", monthLong = false, month = 11, day = 31, years={}, ending="Continuing", colorScheme=42,
        image="https://media.istockphoto.com/id/1425283876/photo/dining-table-with-meal-for-kwanzaa-holiday.jpg?s=612x612&w=0&k=20&c=5ZROIPZhYDa6yt3Y9B1O49a6iy1RX5QAiTSi2mROsg4="
    ),
    new holiday (
        title = "Kwanzaa (Imani)", monthLong = false, month = 0, day = 1, years={}, ending="Continuing", colorScheme=42,
        image="https://media.cnn.com/api/v1/images/stellar/prod/171212202916-01-kwanzaa-restricted.jpg?q=x_3,y_150,h_1684,w_2993,c_crop/w_800"
    ),
    new holiday (
        title = "New Year's Eve", monthLong = false, month = 11, day = 31, years={},  ending="Here", colorScheme=38,
        image="https://media.istockphoto.com/id/886949708/photo/celebrating-with-closest-people.jpg?s=612x612&w=0&k=20&c=vrcMNUktizUyX6Y9DYYbP3ZRLs6x_HTZv9N85BLWqW0="
    )
    ]

//----------------------------------------------------------------------------------------------------
//
//  DATA: Tabs
//
//----------------------------------------------------------------------------------------------------

class tab {
    constructor (title, icon, id, lite=true) {
        this.title = title;
        this.icon = icon;
        this.id = id;
        this.lite = lite;
    }
}

const tabs = [
    new tab (
        title = "QuickTask",
        icon = "clock-history",
        id = "quickTask",
        lite = true
    ),
    new tab (
        title = "General",
        icon = "question-lg",
        id = "general",
        lite = true
    ),
    new tab (
        title = "Escalations",
        icon = "emoji-angry",
        id = "escalations",
        lite = true
    ),
    new tab (
        title = "Product Inquiry",
        icon = "gem",
        id = "product",
        lite = true
    ),
    new tab (
        title = "Styling & Sizing",
        icon = "person-circle",
        id = "styling",
        lite = true
    ),
    new tab (
        title = "Wedding",
        icon = "heart",
        id = "wedding",
        lite = true
    ),
    new tab (
        title = "Boutique",
        icon = "shop",
        id = "boutique",
        lite = true
    ),
    new tab (
        title = "Wholesale",
        icon = "diagram-3",
        id = "wholesale",
        lite = true
    ),
    new tab (
        title = "Orders",
        icon = "bag",
        id = "orders",
        lite = true
    ),
    new tab (
        title = "Finance",
        icon = "currency-dollar",
        id = "finance",
        lite = true
    ),
    new tab (
        title = "Shipping",
        icon = "box-seam",
        id = "shipping",
        lite = true
    ),
    new tab (
        title = "Fedex & Claims",
        icon = "truck",
        id = "fedex",
        lite = true
    ),
    new tab (
        title = "Returns",
        icon = "reply",
        id = "returns",
        lite = true
    ),
    new tab (
        title = "Security",
        icon = "shield-exclamation",
        id = "security",
        lite = true
    ),
    new tab (
        title = "Repairs",
        icon = "wrench",
        id = "repairs",
        lite = true
    ),
    new tab (
        title = "Chat",
        icon = "chat-dots",
        id = "chat",
        lite = true
    ),
    new tab (
        title = "Social Media",
        icon = "twitter",
        id = "social",
        lite = true
    ),
    new tab (
        title = "Marketing",
        icon = "globe",
        id = "marketing",
        lite = true
    ),
    new tab (
        title = "Coddling Gifts",
        icon = "gift",
        id = "gifts",
        lite = true
    ),
    new tab (
        title = "IT Support",
        icon = "pc-display",
        id = "support",
        lite = true
    ),
    new tab (
        title = "Customer Care",
        icon = "person-heart",
        id = "customercare",
        lite = true
    ),
    new tab (
        title = "Holiday",
        icon = "snow",
        id = "holiday",
        lite = true
    )
]

//----------------------------------------------------------------------------------------------------
//
//  DATA: Tips
//
//----------------------------------------------------------------------------------------------------

class tip {
    constructor (text="") {
        this.text = text;
    }
}

const tips = [
    // General
    new tip (text = "Don't forget to check your time card at the end of the week."),
    new tip (text = "E-Comm is short for E(electronic)-Commerce, or buying/selling online."),
    new tip (text = "Google is a great resource for measurements, photos, and store information."),

    // Salesforce
    new tip (text = "Detailed cases and short but clear case comments helps team member help you!"),
    new tip (text = "Contacts should have a salutation, full name, phone number, and email address."),
    new tip (text = "Please review emails for spelling, grammar, and punctuation before sending."),
    new tip (text = "Taking multiple unassigned cases from the same customer avoids confusion."),
    new tip (text = "Shipping changes on orders $2,000 or more require finance approval."),
    new tip (text = "The knowledge base is a great resource and hub of all important information!"),

    // Policy0
    new tip (text = "Don't forget to review our policies online at DavidYurman.com."),
    
    // Orders
    new tip (text = "Please contact merchant services for fraud review and fraud cancellations."),
    new tip (text = "Recent DY.com orders can be found in KWI, as well as receipts."),

    // Shipping
    new tip (text = "Our standard shipping times are one or two business days."),
    new tip (text = "Our shipping cut off time is 3PM EST Monday - Friday & 12 PM EST on Saturday."),

    // Shipping Issues
    new tip (text = "Rubber Bracelets can be replaced without filing a claim with FedEx."),

    // Returns
    new tip (text = "All returns must be returned unworn and in resale condition."),
    new tip (text = "Purchases may returned within &repl:policyUsReturnRefundDays days, or through &repl:policyUsReturnHolidayEnd during the holidays."),
    new tip (text = "Estimated returns processing time is between between 7-10 business days."),

    // Product Info
    // Metals
    new tip (text = "Metal code <b>SS</b> is for Sterling Silver."),
    new tip (text = "Metal code <b>S4</b> is for Sterling Silver with 14k Yellow Gold."),
    new tip (text = "Metal code <b>S8</b> is for Sterling Silver with 18k Yellow Gold."),
    new tip (text = "Metal code <b>TT</b> is for Titanium."),
    new tip (text = "Metal code <b>BB</b> is for Black Titanium."),
    new tip (text = "Metal code <b>88</b> is for 18k Yellow Gold."),
    new tip (text = "Metal code <b>8R</b> is for 18k Rose Gold."),
    new tip (text = "Metal code <b>8W</b> is for 18k White Gold."),
    new tip (text = "Metal code <b>PL</b> is for Platinum."),
    // Precious Stones
    new tip (text = "Stone code <b>DI</b> is for Diamond."),
    new tip (text = "Stone code <b>BD</b> is for Black Diamond."),
    new tip (text = "Stone code <b>RU</b> is for Ruby."),
    new tip (text = "Stone code <b>EM</b> is for Emerald."),
    new tip (text = "Stone code <b>SA</b> is for Sapphire."),
    // Semi-Precious Common Stones
    new tip (text = "Stone code <b>PE</b> is for Pearl."),
    new tip (text = "Stone code <b>BO</b> is for Black Onyx."),
    new tip (text = "Stone code <b>GA</b> is for Garnet."),
    new tip (text = "Stone code <b>CI</b> is for Citrine."),
    new tip (text = "Stone code <b>PL</b> is for Prasiolite."),
    new tip (text = "Stone code <b>BT</b> is for Blue Topaz."),
    new tip (text = "Stone code <b>AM</b> is for Amethyst."),

    // Styling
    new tip (text = "A 2.7mm Box Chain is the perfect size for almost all pendants."),

    // DART
    new tip (text = "You can change your settings and color scheme in the settings menu."),
    new tip (text = "You can hover over many fields in DART for tutorials and general information."),
    ]

//----------------------------------------------------------------------------------------------------
//
//  DATA: Tabs
//
//----------------------------------------------------------------------------------------------------

class template {
    constructor (title="", type=0, text="", warning="", filter="", assign=0, assignType="", orderNumber="", department="", task="", contact="", tags="", id="") {
        this.title = title;
        this.type = type;
        this.text = text;
        this.warning = warning;
        this.filter = filter;
        this.assign = assign;
        this.assignType = assignType;
        this.orderNumber = orderNumber;
        this.department = department;
        this.task = task;
        this.contact = contact;
        this.tags = tags;
        this.id = id;
    }

    hasKeyword (keyword) {
        const splitTags = this.tags.toLowerCase().split(" ");

        if (this.tags.toLowerCase().includes(keyword)) {
            return true;
        } else {
            for (const tag of splitTags) {
                for (const tg of tagGroups) {
                    if (tg.hasKeyword(keyword)) {
                        if (tg.filter.toLowerCase() == tag) {
                            return true;
                        }
                    }
                }
            }
        }

        return false;
    }
}

const templates = [
    new template (
        title = "Teams Help Chat",
        type = 3,
        text = "Customer Name:<br>Customer Phone:<br>Customer Email:<br>Salesforce Case:<br>Order Number:<br>Style Name:<br>Style Number:<br>Assistance Required:",
        warning = "",
        filter = "quickTask general",
        assign = "",
        assignType = 0,
        orderNumber = "",
        department = "",
        task = "",
        contact = "@DY CC Help",
        tags = "teams help chat",
        id = "tmpTemGen"
    ),
    new template (
        title = "Teams Product Inquiry",
        type = 3,
        text = "Salesforce Case:<br>Style Name:<br>Style Number:<br>Inquiry:",
        warning = "",
        filter = "product",
        assign = "",
        assignType = 0,
        orderNumber = "",
        department = "",
        task = "",
        contact = "@DY CC Help",
        tags = "teams help chat products jewelry",
        id = "tmpTemPrd"
    ),
    new template (
        title = "General Escalation",
        type = 0,
        text = "Customer Name:<br>Customer Phone:<br>Customer Email:<br>Order Number(s):<br>Customer Issue(s):<br>Assistance Required:<br>Solution(s) Offered:",
        warning = "",
        filter = "escalations",
        assign = "Escalations",
        assignType = 2,
        orderNumber = "(If Applicable)",
        department = "Escalations",
        task = "(Required Task)",
        contact = "Associated Customer Care Supervisor or Manager",
        tags = "escalation manager help",
        id = "tmpEscGen"
    ),
    new template (
        title = "Repair Escalation Template",
        type = 0,
        text = "Customer Name:<br>Customer Phone:<br>Customer Email:<br>Order Number(s):<br><br><b>For Each Style:</b><br>Style:<br>Repair Issue(s):<br>Known Style Issue?:<br>Previous Repair(s):<br>Repair Cost:<br>Date Of Purchase:<br>Location Of Purchase:",
        warning = "Please submit your task with any available receipts of purchase and any previous repair forms or associated documentation.",
        filter = "escalations repairs",
        assign = "Escalations",
        assignType = 2,
        orderNumber = "(If Applicable)",
        department = "Escalations",
        task = "Repair",
        contact = "Jane Kuhne, Diana Medina",
        tags = "escalations repairs help manager",
        id = "tmpEscRpr"
    ),
    new template (
        title = "Order Replacement",
        type = 0,
        text = "Order Number:<br>Style Number:<br>Reason For Replacement:<br>Tracking Number:<br>Original Shipping Address:<br>New/Alternate Address:",
        warning = "If this is a replacement for a lost/missing FedEx package (excluding FedEx Smart Post),<br>please file a claim with YDI Logistics.",
        filter = "escalations orders",
        assign = "Cc Ops",
        assignType = 2,
        orderNumber = "C... (Required)",
        department = "CC Ops",
        task = "FedEx...",
        contact = "Keyana Askew, Asmaa Yasin, Michael Clancy, Leteefah Barbee, Jasmine Bouier-McGhee",
        tags = "orders replacement missing damaged jewelry",
        id = "tmpEscRep"
    ),
    new template (
        title = "BOSS Order Inquiry",
        type = 0,
        text = "Recipient Name:<br>Salesforce Case(s):<br>BOSS Order:<br>Style Number(s):<br>Request:",
        warning = "",
        filter = "boutique orders",
        assign = "(Required Boutique)",
        assignType = 2,
        orderNumber = "C... (Required)",
        department = "Shipping",
        task = "BOSS...",
        contact = "Required Boutique Ops Manager",
        tags = "BOSS orders retail online jewelry",
        id = "tmpRtlBSS"
    ),
    new template (
        title = "General Retail Inquiry",
        type = 0,
        text = "Customer Name:<br>Customer Phone:<br>Customer Email:<br>Customer Shipping Address:<br>Salesforce Case(s):<br>Order:<br>Style Number(s):<br>Price/Total:<br>Request:",
        warning = "",
        filter = "quickTask general boutique",
        assign = "(Required Boutique)",
        assignType = 2,
        orderNumber = "(If Applicable)",
        department = "Retail...",
        task = "(Required Task)",
        contact = "Required Boutique Ops Manager",
        tags = "general retail ROPIS reservation online jewelry cleaning",
        id = "tmpRtlGen"
    ),
    new template (
        title = "Retail Product Availability",
        type = 0,
        text = "Style Number(s):<br>Price/Total:",
        warning = "",
        filter = "product boutique",
        assign = "(Required Boutique)",
        assignType = 2,
        orderNumber = "(Optional)",
        department = "Retail Sales",
        task = "Product Availability",
        contact = "Required Boutique Ops Manager",
        tags = "retail products availability jewelry",
        id = "tmpRtlPrd"
    ),
    new template (
        title = "Potential Retail Sale",
        type = 0,
        text = "Customer Name:<br>Customer Phone:<br>Customer Email:<br>Style Number(s):<br>Price/Total:<br>Preferred Contact Date:",
        warning = "",
        filter = "boutique",
        assign = "(Required Boutique)",
        assignType = 2,
        orderNumber = "(Optional)",
        department = "Retail Sales",
        task = "Potential Sale",
        contact = "Required Boutique Ops Manager or Assigned Retail Brand Ambassador",
        tags = "boutiques omnichannel retail orders availability jewelry",
        id = "tmpRtlSal"
    ),
    new template (
        title = "Wedding Inquiry",
        type = 0,
        text = "Customer Name:<br>Customer Phone:<br>Customer Email:<br>Style Number(s):<br>Preferred Cut:<br>Preferred Clatify:<br>Preferred Color:<br>Preferred Carat Weight:<br>Budget:<br>Request:<br>",
        warning = "",
        filter = "boutique wedding",
        assign = "(Nearest Boutique)",
        assignType = 2,
        orderNumber = "(If Applicable)",
        department = "Retail Bridal",
        task = "(Required Task)",
        contact = "Store Bridal Specialist or Manager",
        tags = "wedding boutique jewelry",
        id = "tmpWedGen"
    ),
    new template (
        title = "Special Order",
        type = 0,
        text = "Request:<br>Style Number:<br>Billing Address:<br>Shipping Address:",
        warning = "Eligible on most active styles.<br>Excludes special items such as One-Of-A-Kind pieces, Limited Edition pieces, etc..<br>Estimated 14-18 weeks completion time.<br>Can be refunded or exchanged.",
        filter = "orders",
        assign = "Special Order Escalations",
        assignType = 2,
        orderNumber = "(If Applicable)",
        department = "CC Creations",
        task = "Special Order Cancellation",
        contact = "Michael Monteforte, Tiffany Cunningham, Thea Jemas",
        tags = "special orders jewelry",
        id = "tmpOrdSpc"
    ),
    new template (
        title = "Creation Request",
        type = 0,
        text = "Request:<br>Style Number:<br>Budget:<br>Billing Address:<br>Shipping Address:",
        warning = "Eligible on select active styles priced $2,500 or more, 6 months or older.<br>Estimated 3-5 weeks approval time, 14-18 weeks completion time.<br><b>Final sale</b>.",
        filter = "orders",
        assign = "Creations Escalations",
        assignType = 2,
        orderNumber = "(If Applicable)",
        department = "CC Creations",
        task = "Creation Order Cancellation",
        contact = "Michael Monteforte, Tiffany Cunningham, Thea Jemas",
        tags = "creations orders jewelry",
        id = "tmpOrdCtn"
    ),
    new template (
        title = "General Finance Inquiry",
        type = 0,
        text = "Request:<br>Last 4 Of Card:<br>Order Number:<br>Billing Address:<br>Shipping Address:<br>Subtotal:<br>Refund Amount:<br>Request ID/Gateway Reference Number:",
        warning = "",
        filter = "quickTask finance",
        assign = "Merchant Services",
        assignType = 2,
        orderNumber = "(If Applicable)",
        department = "Finance",
        task = "(Required Task)",
        contact = "Carolina Otiniano",
        tags = "finance",
        id = "tmpFinGen"
    ),
    new template (
        title = "General Shipping Request",
        type = 0,
        text = "Order Number:<br>Inquiry/Request:<br>Tracking Number:<br>Current Address:<br>New/FedEx Address:",
        warning = "",
        filter = "quickTask shipping",
        assign = "Shipping",
        assignType = 2,
        orderNumber = "(If Applicable)",
        department = "Shipping",
        task = "Ecomm...",
        contact = "Javier Hernandez, Nuria Suazo, Carlos Palacios",
        tags = "shipping update status",
        id = "tmpShpGen"
    ),
    new template (
        title = "General FedEx Request",
        type = 0,
        text = "Request:<br>Affirm:<br>Tracking Number:<br>Subtotal:<br>Shipping Recipient:<br>Phone Number:<br>Shipping Address:<br>New/FedEx Address:<br>Residential or Business?:<br>",
        warning = "For holds or reroutes, orders <b>$2,000</b> and over require finance approval.<br>Orders using Affirm require at least 24 hours for approval and are advised against.",
        filter = "quickTask fedex",
        assign = "DYCC",
        assignType = 2,
        orderNumber = "(If Applicable)",
        department = "Shipping",
        task = "Fedex...",
        contact = "Samantha DeForge, Michael Clancy",
        tags = "FedEx update status",
        id = "tmpFdxGen"
    ),
    new template (
        title = "Lost Order - File Claim",
        type = 0,
        text = "Request:<br>Tracking Number:<br>Shipping Address:",
        warning = "All claims must be submitted with <b>Order Confirmation</b>.<br><b>Tracking Confirmation</b> should be sent if present.<br><br>If <b>$500 Or Less</b>, please allow <b>48 Hours</b> for the package to appear<br>before requesting a replacement from management.",
        filter = "fedex",
        assign = "Logistics",
        assignType = 2,
        orderNumber = "(If Applicabble)",
        department = "Shipping",
        task = "Fedex - Lost Order - File Claim",
        contact = "Sean O'Shea",
        tags = "YDI logistics FedEx missing orders",
        id = "tmpFdxLfc"
    ),
    new template (
        title = "General Returns Request",
        type = 0,
        text = "Request:<br>Tracking Number:<br>Order Number:",
        warning = "",
        filter = "quickTask returns",
        assign = "Returns",
        assignType = 2,
        orderNumber = "(If Applicable)",
        department = "Returns",
        task = "Return Received",
        contact = "Xiomara Garcia, Christiel Toribio", 
        tags = "returns refunds exchanges orders",
        id = "tmpRtnGen"
    ),
    new template (
        title = "General CC Ops Returns Request",
        type = 0,
        text = "Request:<br>Tracking Number:<br>Style Name:<br>Style Number:<br>Assistance Required:<br>RMA Status:<br>Notes:<br>BOSS/BOPIS?:",
        warning = "Please ensure any and all associated documentation is included with your task submission.",
        filter = "quickTask returns fedex",
        assign = "CC Ops",
        assignType = 2,
        orderNumber = "(Required)",
        department = "CC OPS",
        task = "...",
        contact = "Keyana Askew, Asmaa Yasin, Michael Clancy, Lateefah Barbee, Jasmine Bouier-McGhee",
        tags = "returns refunds exchanges orders replacement",
        id = "tmpRtnCCO"
    ),
    new template (
        title = "DRS Repair Inquiry",
        type = 2,
        text = "Request:<br>Style Number:<br>Repair ID:<br>Claim Number:<br>Tracking Number:<br>Shipping Address:",
        warning = "",
        filter = "repairs",
        assign = "",
        assignType = 0,
        orderNumber = "",
        department = "",
        task = "",
        contact = "Haidee Jacome, drsny@domanionline.com",
        tags = "jewelry DRS repairs services",
        id = "tmpRepDRSGen"
    ),
    new template (
        title = "DRS Jewelry Resizing Inquiry",
        type = 2,
        text = "Request:<br>Style Number:<br>Preferred Size/Adjustment:",
        warning = "",
        filter = "repairs",
        assign = "",
        assignType = 0,
        orderNumber = "",
        department = "",
        task = "",
        contact = "Haidee Jacome, drsny@domanionline.com, qtc@domanionline.com",
        tags = "jewelry DRS repairs services cleaning",
        id = "tmpRepDRSRsz"
    ),
    new template (
        title = "DRS Jewelry Engraving Inquiry",
        type = 2,
        text = "Request:<br>Style Number:<br>Engraving:",
        warning = "",
        filter = "repairs",
        assign = "",
        assignType = 0,
        orderNumber = "",
        department = "",
        task = "",
        contact = "Haidee Jacome, drsny@domanionline.com, qtc@domanionline.com",
        tags = "jewelry DRS services",
        id = "tmpRepDRSEng"
    ),
    new template (
        title = "DRS Timepiece Repair Inquiry",
        type = 2,
        text = "Request:<br>Style Number:<br>Repair ID:<br>Claim Number:<br>Tracking Number:<br>Shipping Address:",
        warning = "",
        filter = "repairs",
        assign = "",
        assignType = 0,
        orderNumber = "",
        department = "",
        task = "",
        contact = "customerservice@domanionline.com",
        tags = "timepieces DRS repairs services",
        id = "tmpRepDRSTmp"
    ),
    new template (
        title = "IT Support Portal",
        type = 4,
        text = "Urgency (Low, Medium, High):<br>Home or Office:<br>Issue:",
        warning = "",
        filter = "support",
        assign = "",
        assignType = 0,
        orderNumber = "",
        department = "",
        task = "",
        contact = "Calvin Best, Patrick Robinson, Tony Tso",
        tags = "support repairs help",
        id = "tmpSupGen"
    ),
    new template (
        title = "Missing/Wrong Jewelry Item In Order",
        type = 0,
        text = "Order Number:<br>Item(s) Missing:<br>Item(s) Received:<br>Request:<br>Tracking:",
        warning = "Before Submitting: Security footage may be unable to determine if an incorrect length/size was sent to a customer and will be unable to differentiate between similar colors.",
        filter = "security",
        assign = "Security",
        assignType = 2,
        orderNumber = "(Required)",
        department = "Shipping",
        task = "FedEx - Missing/Wrong Item In Order",
        contact = "Julio Bryam, Christopher Valiante, Richard Roman",
        tags = "security orders",
        id = "tmpSecGen"
    ),
    new template (
        title = "Gift Request",
        type = 0,
        text = "Request(s) & Quantity:<br>Reason:<br>Shipping Address:",
        warning = "Quantities exceeding <b>3 units</b> per request subject to approval.<br>Please submit an <b>accomodation</b> before submitting your task.",
        filter = "gifts",
        assign = "Samantha DeForge",
        assignType = 0,
        orderNumber = "(If Applicable)",
        department = "Shipping",
        task = "Coddling...",
        contact = "Samantha DeForge, Marlene Delgado",
        tags = "gifts escalations",
        id = "tmpGftGen"
    ),
    new template (
        title = "Marketing Collaboration Email",
        type = 2,
        text = "Contact Name:<br>Contact Email:<br>Contact Phone Number:<br>Social Media Links:<br>Request:",
        warning = "",
        filter = "marketing",
        assign = "",
        assignType = 0,
        orderNumber = "",
        department = "",
        task = "",
        contact = "Marketing Dept",
        tags = "marketing social",
        id = "tmpMktGen"
    )
]

//----------------------------------------------------------------------------------------------------
//
//  DATA: Tag Groups
//
//----------------------------------------------------------------------------------------------------

class tagGroup {
    constructor (title="", filter="", keywords=[""]) {
        this.title = title;
        this.filter = filter;
        this.keywords = keywords;
    }

    hasKeyword (tag) {
        if (keywords) {
            for (const keyword of this.keywords) {
                if (keyword == tag) {
                    return true;
                }
            }

            return false;
        }
    }
}

const tagGroups = [
    new tagGroup (
        title = "Returns",
        filter = "returns",
        keywords = ["return", "returns", "returned", "returning", "returnable"]
    ),
    new tagGroup (
        title = "Refunds",
        filter = "returns",
        keywords = ["refund", "refunds", "refunded", "refunds", "refundable"]
    ),
    new tagGroup (
        title = "Exchanges",
        filter = "returns",
        keywords = ["exchange", "exchanges", "exchanged", "exchanging", "exchangable",
                    "merchandise", "merch", "gift",
                    "credit", "credits", "card", "balance", "amount",
                    "advance", "advanced"]
    ),
    new tagGroup (
        title = "Repairs",
        filter = "repairs",
        keywords = ["repair", "repairs", "repaired", "repairing", "repairable",
                    "fix", "fixes", "fixed", "fixing", "fixable",
                    "broke", "broken", "breaking", "breaks", "break",
                    "hinge", "hinged",
                    "clasp", "clasps",
                    "link", "links",
                    "kink", "kinks", "kinking", "kinked",
                    "post", "posts",
                    "bent", "bending", "bend",
                    "scratch", "scratches", "scratched",
                    "dent", "dents", "dented",
                    "chip", "chips", "chipping", "chipped",
                    "scrape", "scrapes", "scraping", "scraped",
                    "add", "additional", "increase",
                    "remove", "removal", "decrease", "cut", "solder",
                    "shape", "shaped", "shaping", "reshape", "align", "alignment", "realign", "realignment",
                    "snap", "snaps", "snapping", "snapped",
                    "multiple", "several", "frequent", "frequently", "repeated", "repeatedly", "often",
                    "inch", "inches"]
    ),
    new tagGroup (
        title = "DRS",
        filter = "DRS",
        keywords = ["DRS", "service", "center", "repair", "Domani"]
    ),
    new tagGroup (
        title = "Services",
        filter = "services",
        keywords = ["service", "services", "serviced", "servicing", "servicable",
                    "engrave", "engraves", "engraving", "engraved", "engravable",
                    "resize", "resizing", "resized",
                    "refurbish", "refurbising", "refurbishment"]
    ),
    new tagGroup (
        title = "Cleaning",
        filter = "cleaning",
        keywords = ["clean", "cleans", "cleaning", "cleaned",
                    "polish", "polishes", "polishing", "polished",
                    "tarnish", "tarnishes", "tarnished", "tarnishing",
                    "black", "brown",
                    "dirty", "faded"]
    ),
    new tagGroup (
        title = "Chat",
        filter = "chat",
        keywords = ["chat", "chats", "chatted", "chatting",
                    "talk", "talks", "talking",
                    "speak", "speaks", "spoke", "speaking",
                    "live"]
    ),
    new tagGroup (
        title = "Help",
        filter = "help",
        keywords = ["help", "helps", "helped", "helping",
                    "difficulty", "difficult"]
    ),
    new tagGroup (
        title = "Teams",
        filter = "Teams",
        keywords = ["team", "teams", "teamed", "teaming", "microsoft",
                    "group", "groups", "grouped", "grouping"]
    ),
    new tagGroup (
        title = "Retail",
        filter = "retail",
        keywords = ["retail",
                    "boutique", "boutiques",
                    "store", "stores",
                    "shop", "shops"]
    ),
    new tagGroup (
        title = "Reservations",
        filter = "reservations",
        keywords = ["reserve", "reserves", "reserved", "reserving", "reservation", "reservation",
                    "pickup", "pick", "up"]
    ),
    new tagGroup (
        title = "Manager",
        filter = "manager",
        keywords = ["manager", "managers", "management", "manage", "manages",
                    "corporate",
                    "supervisor", "supervisors", "supervision", "supervise", "supervises",
                    "lead", "leader", "leaders",
                    "director", "superior", "senior"]
    ),
    new tagGroup (
        title = "General",
        filter = "general",
        keywords = ["general", "standard", "common", "normal"]
    ),
    new tagGroup (
        title = "Escalation",
        filter = "escalation",
        keywords = ["escalate", "escalates", "escalated", "escalating", "escalation",
                    "anger", "angry", "upset", "unacceptable",
                    "disappointing", "disappointment", "disappointed",
                    "frustrated", "frustration", "disappointed",
                    "sad",
                    "disgusted", "disgusting", "disgusting",
                    "offend", "offended", "offending",
                    "bother", "bothers", "bothered", "bothering"]
    ),
    new tagGroup (
        title = "Damaged",
        filter = "damaged",
        keywords = ["damage", "damages", "damaged", "damaging",
                    "broke", "broken"]
    ),
    new tagGroup (
        title = "Missing",
        filter = "missing",
        keywords = ["miss", "missing",
                    "lost", "stolen", "theft", "gone", "taken"]
    ),
    new tagGroup (
        title = "Replacement",
        filter = "replacement",
        keywords = ["replace", "replaces", "replaced", "replacing", "replacement", "replacements"]
    ),
    new tagGroup (
        title = "Orders",
        filter = "orders",
        keywords = ["order", "orders", "ordered", "ordering",
                    "purchase", "purchases", "purchased", "purchasing",
                    "sale", "sales", "sold",
                    "buy", "buys", "bought",
                    "package", "packages",
                    "ship", "ships", "shipped", "shipping", "shipment",
                    "deliver", "delivers", "delivering", "delivered", "delivery", "deliveries",
                    "arrive", "arrival", "arrives", "arriving", "arrived"]
    ),
    new tagGroup (
        title = "Products",
        filter = "products",
        keywords = ["product", "products", "merchandise", "merch", "piece", "pieces",
                    "item", "items",
                    "active", "retired", "pre-active", "pre", "heritage", "old", "new", "upcoming", "current"]
    ),
    new tagGroup (
        title = "Jewelry",
        filter = "jewelry",
        keywords = ["jewelry",
                    "bracelet", "bracelets", "cuff", "cuffs", "bangle", "bangles",
                    "earring", "earrings", "stud", "studs",
                    "necklace", "necklaces", "chain", "chains",
                    "ring", "rings",
                    "pendant", "pendants", "amulet", "amulets", "charm", "charms"]
    ),
    new tagGroup (
        title = "Timepieces",
        filter = "timepieces",
        keywords = ["timepiece", "timepieces", "watch", "watches",
                    "quartz", "automatic", "swiss", "atm",
                    "battery",
                    "time", "face", "dial", 
                    "strap", "straps"]
    ),
    new tagGroup (
        title = "Availability",
        filter = "availability",
        keywords = ["availabile", "availability",
                    "stock", "inventory",
                    "find", "locate", "search"]
    ),
    new tagGroup (
        title = "Wedding",
        filter = "wedding",
        keywords = ["wedding", "bridal",
                    "engage", "engagement", "engaged",
                    "marry", "marriage", "married", "anniversary",
                    "bride", "groom",
                    "love", "heart"]
    ),
    new tagGroup (
        title = "Online",
        filter = "online",  
        keywords = ["online", "net",
                    "web", "website", "webstore",
                    "DavidYurman.com", "DY.com"]
    ),
    new tagGroup (
        title = "Creations",
        filter = "creations",
        keywords = ["create", "creation",
                    "new", "request", "design", "designs",
                    "custom", "customize", "customized", "customization",
                    "personal", "personalized",
                    "special", "unique"]
    ),
    new tagGroup (
        title = "Finance",
        filter = "finance",
        keywords = ["merchant", "merchants",
                    "service", "services",
                    "fraud", "fraudulent", "review", "reviews",
                    "reverse", "reversal",
                    "authorize", "authorization", "pre", "preauthorize", "preauthorization", "preauth", "unauthorized", "unauth",
                    "charge", "charges",  "charged", "charging",
                    "approve", "approves", "approved", "approving", "approval",
                    "refund", "refunds", "refunding", "refunded",
                    "hold", "holds", "held", "holding",
                    "pending", "manual",]
    ),
    new tagGroup (
        title = "Shipping",
        filter = "shipping",
        keywords = ["ship", "ships", "shipped", "shipping", "shipment", "shipper",
                    "warehouse", "warehouses", "warehousing", "warehousedd",
                    "distribution", "distribute", "distributes", "distributed",
                    "center", "centers",
                    
                    "ecommerce", "electronic", "commerce", "e-comm", "comm",
                    "address"]
    ),
    new tagGroup (
        title = "Status",
        filter = "status",
        keywords = ["status",
                    "eta", "estimite", "estimites", "estimated", "estimating",
                    "complete", "completion", "completing",
                    "finish", "finishes", "finiished", "finishing",
                    "update"]
    ),
    new tagGroup (
        title = "Update",
        filter = "update",
        keywords = ["update", "updates", "updating", "updated",
                    "change", "changes", "changed", "changing",
                    "modify", "modifies",  "modifying", "modified",
                    "correct", "corrects", "correcting", "corrected", "correction", "corrections",]
    ),
    new tagGroup (
        title = "FedEx",
        filter = "FedEx",
        keywords = ["reroute", "route", "routes", "address", "addresses",
                    "signature", "sign", "indirect", "direct",
                    "waive", "waiver", "release",
                    "hold", "pickup", "pick",
                    "rts", "return", "returning", "returned", "sender", "recall", "recalled",
                    "hub", "office", "print", "ship", "center", "center"]
    ),
    new tagGroup (
        title = "Logistics",
        filter = "logistics",
        keywords = ["logistics", "ydi", "international", "border", "customs", "commercial", "invoice", "file", "claim"]
    ),
    new tagGroup (
        title = "Support",
        filter = "support",
        keywords = ["support",
                    "computer", "laptop", "monitor", "screen", "keyboard", "mouse", "headset", "mic", "microphone",
                    "computers", "laptops", "monitors", "screens", "keyboards", "mouses", "headsets", "mics", "microphones",
                    "audio", "sound", "mute", "silent", "mono", "stero",
                    "internet", "wifi", "disconnect", "disconnected", "connected", "connect", "connects", "connecting",
                    "replace", "swap", "new",
                    "locked", "account", "profile",
                    "system", "systems",
                    "glitch", "glitching", "glitched", "glitches",
                    "bug", "bugs", "bugged",
                    "freeze", "froze", "freezes", "freezing",
                    "flicker", "flickering", "flickers", "flickered",
                    "error", "errors",
                    "break", "breaks", "broken", "breaking"]
    ),
    new tagGroup (
        title = "Security",
        filter = "security",
        keywords = ["security",
                    "check", "checks", "checking", "checked",
                    "review", "reviews", "reviewing", "reviewed",
                    "incorrect", "wrong",
                    "missing", "missed", "miss", "missed",
                    "swap", "swaps", "swapping", "swapped",
                    "search", "searches", "searched", "searching"]
    ),
    new tagGroup (
        title = "Gifts",
        filter = "gifts",
        keywords = ["coddling", "coddle",
                    "gift", "gifts",
                    "deescalation", "deescalate",
                    "token", "appreciate", "appreciation",
                    "generous", "generosity",
                    "thanks", "thank",
                    "polishing", "polish", "cleaning", "clean", "care", "kit",
                    "jewelry", "ring", "sizing", "kit", "cord", "bracelet", "pouch", "pouches", "cloth", "cloths", "earring", "back", "quatrefoil"]
    ),
    new tagGroup (
        title = "Marketing",
        filter = "marketing",
        keyword = [
        "ad", "article", "image", "picture", "pic", "photo", "press", "release",
        "magazine", "journal", "digest", "newspaper", "show", "brand",
        "influencer", "influence", "celeb", "celebrity", "model", "actor", "actress", "singer", "entertainer", "comedian", "comedienne",
        "marketing", "campaign", "collaboration", "collab", "brand"]
    ),
    new tagGroup (
        title = "Social",
        filter = "social",
        keyword = ["social", "media",
        "facebook", "book", "fb",
        "instagram", "insta", "gram",
        "tiktok", "tik", "tok",
        "twitter", "tweet", "tweets",
        "youtube", "yt",
        "post", "story", "blog"]
    )
]


//----------------------------------------------------------------------------------------------------
//
//  DATA: Links
//
//----------------------------------------------------------------------------------------------------

class link {
    constructor (title="", subtitle="", subtitleIcon="", subtitleDesc="", filter="", html="", id="") {
        this.title = title;
        this.subtitle = subtitle;
        this.subtitleIcon = subtitleIcon;
        this.subtitleDesc = subtitleDesc;
        this.filter = filter;
        this.html = html;
        this.id = id;
    }
}

const links = [
    new link (
        title="DRS Resources",
        subtitle = "Links to the various DRS websites. Recommend for use in firefox.",
        subtitleIcon = "browser-firefox",
        subtitleDesc = "Firefox",
        filter="repairs",
        html=`<ul>
            <li><a target="_blank" href="https://drsnyrepairs.com/#start-jewelry-repair">DRS - Shipping Labels</a></li>
            <li><a target="_blank" href="https://domanionline.com/jrepair/dysupport.aspx">DRS - Jewelry</a></li>
            <li><a target="_blank" href="https://domanionline.com/repairs/dysupport.aspx">DRS - Watches</a></li>
        <ul>`,
        id="lnkRprDRSRsrs"
    ),
    new link (
        title="Major Authorized Retailers",
        subtitle = "Links to our 4 major authorized retailers.",
        subtitleIcon = "",
        subtitleDesc = "",
        filter="wholesale",
        html=`<ul>
            <li><a target="_blank" href="https://www.nordstrom.com/">Nordstrom</a></li>
            <li><a target="_blank" href="https://neimanmarcus.com/">Neiman Marcus</a></li>
            <li><a target="_blank" href="https://www.bloomingdales.com/">Bloomingdales</a></li>
            <li><a target="_blank" href="https://www.saksfifthavenue.com/">Saks Fifth Avenue</a></li>
        <ul>`,
        id="lnkWslAuthRtlr"
    ),
    new link (
        title="IT Support Resources",
        subtitle = "Resources for technical support.",
        subtitleIcon = "",
        subtitleDesc = "",
        filter="support",
        html=`<ul>
        <li><a target="_blank" href="https://helpdesk.davidyurman.com/support/home">DY IT Support Portal</a></li>
        <ul>`,
        id="lnkSupRsrs"
    ) 
]

//----------------------------------------------------------------------------------------------------
//
//  DATA: Steps
//
//----------------------------------------------------------------------------------------------------

class step {
    constructor (title="", question="", checklist="", key="start", options={}) {
        this.title = title;
        this.checklist = checklist;
        this.question = question;
        this.key = key;
        this.options = options;
    }
}

const steps = [
    new step (
        title="",
        question="",
        checklist="",
        key="",
        options = {}
    ),
    new step (
        title="",
        question="What kind of assistance do you need today?",
        checklist="",
        key="start",
        options = {
            //"Orders & Sales": "orders_start",
            //"Refunds & Exchanges": "returns_start",
            //"Repairs & Services": "services_start",
            "Tech Support": "support_start",
        }
    ),
    //------------------------------
    //  Orders
    //------------------------------
    new step (
        title="Orders & Sales",
        question="Are you checking availability, trying to place a new order, or do you need help with an existing order?",
        checklist="",
        key="orders_start",
        options = {
            "Product Availability": "orders_availability_start",
            //"Placing An Order": "orders_new_start",
            "Existing Order": "orders_existing_start",
        }
    ),
    //------------------------------
    //  Orders - Product Availability
    //------------------------------
    new step (
        title="",
        question="What country is this order shipping to?",
        checklist="",
        key="orders_availability_start",
        options = {
            "United States": "orders_availability_us"
        }
    ),
    new step (
        title="",
        question="",
        checklist="orders_availability_us",
        key="orders_availability_us",
        options = {
            "Start Again": "start"
        }
    ),
    
    //------------------------------
    //  Orders - New
    //------------------------------
    new step (
        title="",
        question="What kind of order do you need assistance with?",
        checklist="",
        key="orders_new_start",
        options = {
            "DavidYurman.com": "orders_new_online_country",
            "Personal Shop": "orders_new_personalShop",
            "Charge Send": "orders_new_chargeSend",
            "International": "orders_new_international"
        }
    ),
    //------------------------------
    //  Orders - New - Online
    //------------------------------
    new step (
        title="Online Orders",
        question="What country is this online order shipping to?",
        checklist="",
        key="orders_new_online_country",
        options = {
            "United States": "orders_new_online_us",
            "Canada": "orders_new_online_ca",
            "France": "orders_new_online_fr",
            "United Kingdom": "orders_new_online_uk"
        }
    ),
    new step (
        title="Online Orders - United States",
        question="",
        checklist="",
        key="orders_new_online_us",
        options = {
            "Start Again": "start"
        }
    ),
    new step (
        title="Online Orders - Canada",
        question="",
        checklist="",
        key="orders_new_online_ca",
        options = {
            "Start Again": "start"
        }
    ),
    new step (
        title="Online Orders - France",
        question="",
        checklist="",
        key="orders_new_online_fr",
        options = {
            "Start Again": "start"
        }
    ),
    new step (
        title="Online Orders - Canada",
        question="",
        checklist="",
        key="orders_new_online_uk",
        options = {
            "Start Again": "start"
        }
    ),
    //------------------------------
    //  Orders - New - Personal Shop
    //------------------------------
    new step (
        title="Personal Shop",
        question="",
        checklist="",
        key="orders_new_personalShop",
        options = {
            
        }
    ),
    //------------------------------
    //  Orders - New - Charge Send
    //------------------------------
    new step (
        title="Charge Send",
        question="",
        checklist="",
        key="orders_new_chargeSend",
        options = {
            
        }
    ),
    //------------------------------
    //  Orders - New - International
    //------------------------------
    new step (
        title="International Orders",
        question="What country is this order shipping to?",
        checklist="",
        key="orders_new_international",
        options = {
            "Canada": "orders_new_online_ca",
            "France": "orders_new_online_fr",
            "United Kingdom": "orders_new_online_uk",
            "Other": "orders_new_international_other",
        }
    ),
    new step (
        title="International Orders",
        question="",
        checklist="",
        key="orders_new_international_other",
        options = {
            "Start Again": "start"
        }
    ),
    //------------------------------
    //  Orders - Existing
    //------------------------------
    new step (
        title="",
        question="What assistance do you require for this existing order?",
        checklist="",
        key="orders_existing_start",
        options = {
            //"Cancellation": "orders_existing_cancellation_start",
            //"Delivered Damaged": "orders_existing_damaged",
            //"Package Lost/Missing": "orders_existing_lost",
            //"Missing Item(s) In Order": "orders_existing_missing",
            "Return or Exchange": "returns_start",
            //"Repairs & Services": "services_start"
        }
    ),
    //------------------------------
    //  Orders - Existing - Cancellation
    //------------------------------
    new step (
        title="Order Cancellation",
        question="What kind of order is this?",
        checklist="",
        key="orders_existing_cancellation_start",
        options = {
            "DavidYurman.com": "",
            "David Yurman Boutique": "",
            "David Yurman Outlet": "",
            "Authorized Retailer": "",
        }
    ),
    //------------------------------
    //  Returns
    //------------------------------
    new step (
        title="Refunds & Exchanges",
        question = "Where was the purchase made?",
        checklist="",
        key = "returns_start",
        options = {
            "DavidYurman.com": "returns_online_policy",
            //"David Yurman Boutique": "returns_retail_policy",
            //"David Yurman Outlet": "returns_outlet_policy",
            //"Authorized Retailer": "returns_authorizedRetailer_policy",
            //"Unknown": "returns_authorizedRetailer_policy",
            //"Other": "returns_other"
        }
    ),
    //------------------------------
    //  Returns - Online
    //------------------------------
    new step (
        title="Online Refunds & Exchanges",
        question = "Is this return within policy?",
        checklist="",
        key = "returns_online_policy",
        options = {
            "Within Policy": "returns_online_policyIn_country",
            "Out Of Policy": "returns_online_policyOut_approval"
        }
    ),
    //------------------------------
    //  Returns - Online - In Policy
    //------------------------------
    new step (
        title="",
        question = "What country was the online order sent to?",
        checklist="",
        key = "returns_online_policyIn_country",
        options = {
            "United States": "returns_online_policyIn_us",
            "Puerto Rico": "returns_online_policyIn_pr",
            "Canada": "returns_online_policyIn_ca",
            //"France": "returns_online_policyIn_fr",
            //"United Kingdom": "returns_online_policyIn_uk",
        }
    ),
    new step (
        title="Online Returns & Exchanges - United States",
        question="",
        checklist="returns_online_us",
        key="returns_online_policyIn_us",
        options = {
            "Start Again": "start"
        }
    ),
    new step (
        title="Online Returns & Exchanges - Puerto Rico",
        question="",
        checklist="returns_online_pr",
        key="returns_online_policyIn_pr",
        options = {
            "Start Again": "start"
        }
    ),
    new step (
        title="Online Returns & Exchanges - Canada",
        question="",
        checklist="returns_online_ca",
        key="returns_online_policyIn_ca",
        options = {
            "Start Again": "start"
        }
    ),
    //------------------------------
    //  Returns - Online - Out Of Policy
    //------------------------------
    new step (
        title="",
        question = "Did a Customer Care manager approve of this out of policy return?",
        checklist="",
        key = "returns_online_policyOut_approval",
        options = {
            "Approved": "returns_online_policyout_approved_country",
            "Denied": "returns_online_policyOut_denied"
        }
    ),
    new step (
        title="Out Of Policy Online Returns & Exchanges",
        question = "What country was the online order sent to?",
        checklist="",
        key = "returns_online_policyout_approved_country",
        options = {
            "United States": "returns_online_policyOut_us",
            "Puerto Rico": "returns_online_policyOut_pr",
            "Canada": "returns_online_policyOut_ca",
            //"France": "returns_online_policyOut_fr",
            //"United Kingdom": "returns_online_policyOut_uk",
        }
    ),
    new step (
        title="Out Of Policy Online Returns & Exchanges - United States",
        question="",
        checklist="returns_online_policyOut_us",
        key="returns_online_policyOut_us",
        options = {
            "Start Again": "start"
        }
    ),
    new step (
        title="Out Of Policy Online Returns & Exchanges - Puerto Rico",
        question="",
        checklist="returns_online_policyOut_pr",
        key="returns_online_policyOut_pr",
        options = {
            "Start Again": "start"
        }
    ),
    new step (
        title="Out Of Policy Online Returns & Exchanges - Canada",
        question="",
        checklist="returns_online_policyOut_ca",
        key="returns_online_policyOut_ca",
        options = {
            "Start Again": "start"
        }
    ),
    new step (
        title="",
        question = "Regretfully, this order cannot be refunded or exchanged. Please gently advise the customer we are unable to complete the return.",
        checklist="",
        key = "returns_online_policyOut_denied",
        options = {
            "Start Again": "start"
        }
    ),
    //------------------------------
    //  Services
    //------------------------------
    new step (
        title="Repairs & Services",
        question = "What kind of service do you need?",
        checklist="",
        key = "services_start",
        options = {
            "Repairs": "services_repair_start",
            "Resizing": "services_resizing_start",
            "Components": "services_components_start",
            "Coddling Gifts": "services_gifts_start"
        }
    ),
    new step (
        title="IT Support Portal",
        question = "",
        checklist="it_support_portal",
        key = "support_start",
        options = {
            "Start Again": "start",
        }
    )
]

//----------------------------------------------------------------------------------------------------
//
//  DATA: Checklists
//
//----------------------------------------------------------------------------------------------------

class stepCheck {
    constructor (title="", text=``, extraTitle=``, extra=``, filter="") {
        this.title = title;
        this.text = text;
        this.extraTitle = extraTitle;
        this.extra = extra;
        this.filter = filter;
    }
}

const stepChecks = [
    new stepCheck (
        title=``,
        text=`Start by checking availability online at <a href="davidyurman.com" target="_blank">DavidYurman.com</a>. If available online, you may make your purchase directly from our webstore.<br><br>`,
        extraTitle = ``,
        extra=``,
        filter="orders_availability_us",
    ),
    new stepCheck (
        title=``,
        text=`If not in stock online, you may check availability from David Yurman boutiques with OmniChannel, SICX, or by calling the boutique. If available in store, you may assist the customer with a Personal Shop.`,
        extraTitle = ``,
        extra=``,
        filter="orders_availability_us",
    ),
    new stepCheck (
        title=``,
        text=``,
        extraTitle = `Optional`,
        extra=`If the customer wishes to make their purchase with the boutique, it's best to have to the boutique call the customer back directly. Alternatively, you may provide the customer with the boutique's phone number if they request it.`,
        filter="orders_availability_us",
    ),
    new stepCheck (
        title=``,
        text=`If not immediately available, it would be safe to suggest a similar, alternative style around the same price (e.g. Rose instead of Yellow Gold, Amethyst instead of Blue Topaz, 7mm instead of 5mm).<br><br>`,
        extraTitle = ``,
        extra=``,
        filter="orders_availability_us",
    ),
    new stepCheck (
        title=``,
        text=`If not in stock online or in store, if eligible for a preorder online, you may offer a preorder and place it directly from our webstore.<br><br>`,
        extraTitle = ``,
        extra=``,
        filter="orders_availability_us",
    ),
    new stepCheck (
        title=``,
        text=`If not in stock online or in store, you may suggest special ordering the jewelry in order to ensure the customer will get their piece at a later date.<br><br>`,
        extraTitle = ``,
        extra=``,
        filter="orders_availability_us",
    ),
    new stepCheck (
        title=``,
        text=``,
        extraTitle = `Suggestion`,
        extra=`If the customer does not wish to commit to a purchase immediately, you may suggest Notify Me.`,
        filter="orders_availability_us",
    ),
    new stepCheck (
        title=``,
        text=`Start your ticket at the <a href="https://helpdesk.davidyurman.com/support/home" target="_blank">IT Service Desk</a>.<br><br>`,
        extraTitle = ``,
        extra=``,
        filter="it_support_portal",
    ),
    new stepCheck (
        title=``,
        text=`Click <i>Report An Issue</i> on the navigation screen.<br><br>`,
        extraTitle = ``,
        extra=``,
        filter="it_support_portal",
    ),
    new stepCheck (
        title=``,
        text=`Enter your work email as the <i>Requester</i> if blank.`,
        extraTitle = ``,
        extra=``,
        filter="it_support_portal",
    ),
    new stepCheck (
        title=``,
        text=``,
        extraTitle = `Optional`,
        extra=`Note if your request affects multiple people.`,
        filter="it_support_portal",
    ),
    new stepCheck (
        title=``,
        text=`Enter the title or subject of your request (For Example: Laptop screen flickering).<br><br>`,
        extraTitle = ``,
        extra=``,
        filter="it_support_portal",
    ),
    new stepCheck (
        title=``,
        text=`Advise of your work location (Lyndhurst Distribution Center or Remote Location) and what's wrong in the Category drop down menu.<br><br>`,
        extraTitle = ``,
        extra=``,
        filter="it_support_portal",
    ),
    new stepCheck (
        title=``,
        text=`Enter the description of your issue. A template for details our IT department will find useful can be found in the IT section of DART if needed.`,
        extraTitle = ``,
        extra=``,
        filter="it_support_portal",
    ),
    new stepCheck (
        title=``,
        text=``,
        extraTitle = `Optional`,
        extra=`If needed, please attach any images or documents in the <i>Attachments</i> section.`,
        filter="it_support_portal",
    ),
    new stepCheck (
        title=``,
        text=`Press the <i>Submit</i> button to submit your request. An IT Support Specialist will address your issue at their earliest convenience.`,
        extraTitle = ``,
        extra=``,
        filter="it_support_portal",
    ),
    new stepCheck (
        title=``,
        text=``,
        extraTitle = `Note`,
        extra=`If a customer is near a <a href="https://www.davidyurman.com/stores?showMap=true&horizontalView=true&isForm=true&boutiques=true&retailers=true" target="_blank">David Yurman Store</a> and their return is within policy, a customer may complete their exchange or return of an online purchase at a full priced David Yurman store. Returns may not be made at authorized retailers.<br><br>Purchases made using Affirm are inelligible for a refund in store.`,
        filter="returns_online_us",
    ),
    new stepCheck (
        title=``,
        text=`Start your return at <a href="https://returns.narvar.com/davidyurman/returns" target="_blank">Narvar - United States</a>.<br><br>`,
        extraTitle = ``,
        extra=``,
        filter="returns_online_us",
    ),
    new stepCheck (
        title=``,
        text=`Input the Order Number and the Billing Address' Zip Code. Alternatively, you may input the Order Number and Shipping Address' Zip Code by selecting <i>Start A Gift Return</i> below.<br><br>`,
        extraTitle = ``,
        extra=``,
        filter="returns_online_us",
    ),
    new stepCheck (
        title=``,
        text=`Select the desired item. Select the reason for the return (Change Mind, Wrong Color, etc.), and whether the customer would like an exchange, merchandise credit, or a refund.<br><br>Do this for each item being returned.<br><br>`,
        extraTitle = ``,
        extra=``,
        filter="returns_online_us",
    ),
    new stepCheck (
        title=``,
        text=`Review your request and proceed with confirmations to generate your return label.`,
        extraTitle = ``,
        extra=``,
        filter="returns_online_us",
    ),
    new stepCheck (
        title=``,
        text=``,
        extraTitle = `Optional`,
        extra=`Return labels are automatically sent to the email address associated with the order. If needed, you may send a return label to another address, or save the label as a PDF to email manually.`,
        filter="returns_online_us",
    ),
    new stepCheck (
        title=``,
        text=``,
        extraTitle = `Note`,
        extra=`If a customer is near a <a href="https://www.davidyurman.com/stores?showMap=true&horizontalView=true&isForm=true&boutiques=true&retailers=true" target="_blank">David Yurman Store</a> and their return is within policy, a customer may complete their return for an online purchase at a full priced David Yurman store. Returns may not be made at authorized retailers.`,
        filter="returns_online_pr",
    ),
    new stepCheck (
        title=``,
        text=`Start your return by downloading and filling out the associated commercial invoice for Puerto Rico. When filling out the commercial invoice, please note the customer will be considered the shipper.<br><br>`,
        extraTitle = ``,
        extra=``,
        filter="returns_online_pr",
    ),
    new stepCheck (
        title=``,
        text=`Once completed, email your request to YDI Logistics with the commercial invoice attached, so they may review and provide you with the approved commercial invoice and a shipping label.`,
        extraTitle = ``,
        extra=``,
        filter="returns_online_pr",
    ),
    new stepCheck (
        title=``,
        text=``,
        extraTitle = `Warning`,
        extra=`Please review to ensure your invoice is free of errors before submitting. If errors are included in your invoice, please review, make the appropriate corrections, then repeat <b>Step 2</b>.`,
        filter="returns_online_pr",
    ),
    new stepCheck (
        title=``,
        text=`Email the customer the appropriate documents from Salesforce and make note of the tracking number.`,
        extraTitle = ``,
        extra=``,
        filter="returns_online_pr",
    ),
    new stepCheck (
        title=``,
        text=``,
        extraTitle = `Suggestion`,
        extra=`If the customer is unsure of how to properly ship their return, a commercial invoice must be included inside the package as well as out.`,
        filter="returns_online_pr",
    ),
    new stepCheck (
        title=``,
        text=``,
        extraTitle = `Note`,
        extra=`If a customer is near a <a href="https://www.davidyurman.com/stores?showMap=true&horizontalView=true&isForm=true&boutiques=true&retailers=true" target="_blank">David Yurman Store</a> and their return is within policy, a customer may exchange their purchase for equal or greater value at a full priced David Yurman store. Returns may not be made at authorized retailers.`,
        filter="returns_online_ca",
    ),
    new stepCheck (
        title=``,
        text=`Start your return at <a href="https://returns.narvar.com/davidyurman/returns?locale=en_CA" target="_blank">Narvar - Canada</a>.<br><br>`,
        extraTitle = ``,
        extra=``,
        filter="returns_online_ca",
    ),
    new stepCheck (
        title=``,
        text=`Input the Order Number and the Billing Address' Postal Code. Alternatively, you may input the Order Number and Shipping Address's Postal Code by selecting <i>Start A Gift Return</i> below.<br><br>`,
        extraTitle = ``,
        extra=``,
        filter="returns_online_ca",
    ),
    new stepCheck (
        title=``,
        text=`Select the desired item. Select the reason for the return (Change Mind, Wrong Color, etc.), and whether the customer would like merchandise credit, or a refund.<br><br>Do this for each item being returned.<br><br>`,
        extraTitle = ``,
        extra=``,
        filter="returns_online_ca",
    ),
    new stepCheck (
        title=``,
        text=`Review your request and proceed with confirmations to generate your return label.`,
        extraTitle = ``,
        extra=``,
        filter="returns_online_ca",
    ),
    new stepCheck (
        title=``,
        text=``,
        extraTitle = `Optional`,
        extra=`Return labels are automatically sent to the email address associated with the order. If needed, you may send a return label to another address, or save the label as a PDF to email manually.`,
        filter="returns_online_ca",
    ),
    new stepCheck (
        title=``,
        text=``,
        extraTitle = `Note`,
        extra=`If a customer is near a <a href="https://www.davidyurman.com/stores?showMap=true&horizontalView=true&isForm=true&boutiques=true&retailers=true" target="_blank">David Yurman Store</a>, we are unable to guarantee that the store will accept their return. If a customer would like to make a return in store, we should contact the store first to see if they able to process the out of policy return. Returns may not be made at authorized retailers.<br><br>Out of policy returns are inelligible for a refund.`,
        filter="returns_online_policyOut_us",
    ),
    new stepCheck (
        title=``,
        text=`Start your return at <a href="https://returns.narvar.com/davidyurman/returns?userType=20100420DY&locale=en_us" target="_blank">Narvar - United States</a> to process an out of policy return.<br><br>`,
        extraTitle = ``,
        extra=``,
        filter="returns_online_policyOut_us",
    ),
    new stepCheck (
        title=``,
        text=`Input the Order Number and the Billing Address' Zip Code. Alternatively, you may input the Order Number and Shipping Address' Zip Code by selecting <i>Start A Gift Return</i> below.<br><br>`,
        extraTitle = ``,
        extra=``,
        filter="returns_online_policyOut_us",
    ),
    new stepCheck (
        title=``,
        text=`Select the desired item. Select the reason for the return (Change Mind, Wrong Color, etc.), and whether the customer would like an exchange or merchandise credit.<br><br>Do this for each item being returned.<br><br>`,
        extraTitle = ``,
        extra=``,
        filter="returns_online_policyOut_us",
    ),
    new stepCheck (
        title=``,
        text=`Review your request and proceed with confirmations to generate your return label.`,
        extraTitle = ``,
        extra=``,
        filter="returns_online_policyOut_us",
    ),
    new stepCheck (
        title=``,
        text=``,
        extraTitle = `Optional`,
        extra=`Return labels are automatically sent to the email address associated with the order. If needed, you may send a return label to another address, or save the label as a PDF to email manually.`,
        filter="returns_online_policyOut_us",
    ),
    new stepCheck (
        title=``,
        text=``,
        extraTitle = `Note`,
        extra=`If a customer is near a <a href="https://www.davidyurman.com/stores?showMap=true&horizontalView=true&isForm=true&boutiques=true&retailers=true" target="_blank">David Yurman Store</a>, we are unable to guarantee that the store will accept their return. If a customer would like to make a return in store, we should contact the store first to see if they able to process the out of policy return. Returns from Puerto Rico may not be made at local authorized retailers.<br><br>Out of policy returns are inelligible for a refund.`,
        filter="returns_online_policyOut_pr",
    ),
    new stepCheck (
        title=``,
        text=`Start your return by downloading and filling out the associated commercial invoice for Puerto Rico.<br><br>`,
        extraTitle = ``,
        extra=``,
        filter="returns_online_policyOut_pr",
    ),
    new stepCheck (
        title=``,
        text=`Once completed, email your request to YDI Logistics with the commercial invoice attached, so they may review and provide you with the approved commercial invoice and a shipping label.`,
        extraTitle = ``,
        extra=``,
        filter="returns_online_policyOut_pr",
    ),
    new stepCheck (
        title=``,
        text=``,
        extraTitle = `Warning`,
        extra=`Please review to ensure your invoice is free of errors before submitting. If errors are included in your invoice, please review, make the appropriate corrections, then repeat <b>Step 2</b>.`,
        filter="returns_online_policyOut_pr",
    ),
    new stepCheck (
        title=``,
        text=`Email the customer the appropriate documents from Salesforce and make note of the tracking number.`,
        extraTitle = ``,
        extra=``,
        filter="returns_online_policyOut_pr",
    ),
    new stepCheck (
        title=``,
        text=``,
        extraTitle = `Suggestion`,
        extra=`If the customer is unsure of how to properly ship their return, a commercial invoice must be included inside the package as well as out.`,
        filter="returns_online_policyOut_pr",
    ),
    new stepCheck (
        title=``,
        text=``,
        extraTitle = `Note`,
        extra=`If a customer is near a <a href="https://www.davidyurman.com/stores?showMap=true&horizontalView=true&isForm=true&boutiques=true&retailers=true" target="_blank">David Yurman Store</a>, we are unable to guarantee that the store will accept their return. If a customer would like to make a return in store, we should contact the store first to see if they able to process the out of policy return. Returns may not be made at authorized retailers.<br><br>A customer may exchange their purchase for equal or greater value.<br><br>Out of policy returns are inelligible for a refund.`,
        filter="returns_online_policyOut_ca",
    ),
    new stepCheck (
        title=``,
        text=`Start your return at <a href="https://returns.narvar.com/davidyurman/returns?userType=20100420DY&locale=en_ca" target="_blank">Narvar - Canada</a> to process an out of policy return.<br><br>`,
        extraTitle = ``,
        extra=``,
        filter="returns_online_policyOut_ca",
    ),
    new stepCheck (
        title=``,
        text=`Input the Order Number and the Billing Address' Postal Code. Alternatively, you may input the Order Number and Shipping Address' Postal Code by selecting <i>Start A Gift Return</i> below.<br><br>`,
        extraTitle = ``,
        extra=``,
        filter="returns_online_policyOut_ca",
    ),
    new stepCheck (
        title=``,
        text=`Select the desired item. Select the reason for the return (Change Mind, Wrong Color, etc.), and select merchandise credit.<br><br>Do this for each item being returned.<br><br>`,
        extraTitle = ``,
        extra=``,
        filter="returns_online_policyOut_ca",
    ),
    new stepCheck (
        title=``,
        text=`Review your request and proceed with confirmations to generate your return label.`,
        extraTitle = ``,
        extra=``,
        filter="returns_online_policyOut_ca",
    ),
    new stepCheck (
        title=``,
        text=``,
        extraTitle = `Optional`,
        extra=`Return labels are automatically sent to the email address associated with the order. If needed, you may send a return label to another address, or save the label as a PDF to email manually.`,
        filter="returns_online_policyOut_ca",
    ),
    new stepCheck (
        title=``,
        text=``,
        extraTitle = ``,
        extra=``,
        filter="",
    ),
]

//----------------------------------------------------------------------------------------------------
//
//  DATA: Notices
//
//----------------------------------------------------------------------------------------------------

class notice {
    constructor (title = "", body = "") {
        this.title = title;
        this.body = body;
    }
}

var notices = [];

//----------------------------------------------------------------------------------------------------
//
//  DATA: Blurbs
//
//----------------------------------------------------------------------------------------------------

class blurb {
    constructor (title="", filter="", text=``, tags="", id="") {
        this.title = title;
        this.filter = filter;
        this.text = text;
        this.tags = tags;
        this.id = id;
    }

    hasKeyword (keyword) {
        const splitTags = this.tags.toLowerCase().split(" ");

        if (this.tags.toLowerCase().includes(keyword)) {
            return true;
        } else {
            for (const tag of splitTags) {
                for (const tg of tagGroups) {
                    if (tg.hasKeyword(keyword)) {
                        if (tg.filter.toLowerCase() == tag) {
                            return true;
                        }
                    }
                }
            }
        }

        return false;
    }
}

const blurbs = [
    new blurb (
        title="Blank Email Response",
        filter="general",
        text="Regretfully, it appears as though your email has come in blank. Would you mind rewriting your message to us? We would be happy to assist you.",
        tags="blank empty",
        id="blbGenBlnkEmal"
    ),
    new blurb (
        title="Please Contact Customer Care",
        filter="general",
        text="We are sorry to hear about the trouble you are experiencing. In order to ensure the highest level of service for your inquiry, we recommend contacting our Customer Care team for further assistance.",
        tags="calls email contact us",
        id="blbGenContCustCare"
    ),
    new blurb (
        title="Contact Your Insurance Provider",
        filter="general",
        text="We are sorry to hear about the trouble you are having with your jewelry. Although David Yurman does not have a formal policy for replacing lost merchandise, we highly recommend contacting your insurance provider to review their policies and options, or to file a claim. Please feel free to contact us should you have any questions.",
        tags="insurance lost stolen missing replacement",
        id="blbGenContInsr"
    ),
    new blurb (
        title="Do Not Wear In Water/Avoid Chemicals",
        filter="product",
        text="Although most metals and alloys are water resistant, David Yurman advises against exposing all jewelry to water to prevent damage, loss, or tarnish on applicable metals when the jewelry is not being cleaned. Additionally, we advise against exposing the jewelry to sweat without cleaning the jewelry after wearing, or harsh chemicals or jewelry cleaners as these may change the finish of the jewelry.",
        tags="jewelry care cleaning chemicals water shower pool beach ocean gym workout",
        id="blbPrdDontWearWatr"
    ),
    new blurb (
        title="No GIA Certificate",
        filter="product",
        text="Although our fashion pieces do not include a formal GIA certificate, we stand behind our diamonds being certified and ethically sourced, while ensuring the highest quality gemstones are provided with each and every purchase.",
        tags="gemstones diamonds GIA certificates authenticate authentication appraisal appraise",
        id="blbPrdNoGIACert"
    ),
    new blurb (
        title="Missing Bead Inquiries",
        filter="product repairs",
        text="We are sorry to hear about the trouble you are having with your beaded bracelet. Please note your bracelet is not missing a bead, but has an opening to allow space for the existing beads to move freely without the risk of the bracelet snapping - this ensures durability and longevity.",
        tags="beaded bracelets missing stretched gaps",
        id="blbPrdMissBead"
    ),
    new blurb (
        title="Lab Grown Diamonds and Stones",
        filter="product wedding",
        text="David Yurman appreciates your interest! Although we do not sell lab grown diamonds and stones, you will be happy to know our stones are both natural and ethically sourced.",
        tags="artificial lab grown created natural gemstones diamonds",
        id="blbPrdNatrDiam"
    ),
    new blurb (
        title="Customer Care To Boutique",
        filter="boutique",
        text="We are more than happy to send your request to our LOCATION boutique for further assistance, and you will be contacted at their earliest convenience. We thank you for your patience.",
        tags="boutiques retail stores",
        id="blbRtlCustCareToRtl"
    ),
    new blurb (
        title="Best Handled By Original Location Of Purchase",
        filter="boutique wholesale",
        text="We are sorry to hear about the trouble you are having with your purchase. We recommend contacting the original location of the purchase so they may continue to provide with assistance with your SITUATION. We know they will be able to provide you with the assistance you deserve. Feel free to contact us should you have any additional questions.",
        tags="boutiques retail stores",
        id="blbRtlCustCareToWlsl"
    ),
    new blurb (
        title="Social: General Inquiry",
        filter="social",
        text="Thank you for contacting David Yurman.<br><br><br><br>If you have any additional questions, you may contact our Customer Care Team at (888) 398-7626.<br><br>Best Regards,<br><br>&repl:firstName &repl:lastName",
        tags="social general Twitter tweets Facebook messages",
        id="blbSocGen"
    ),
    new blurb (
        title="Social: Product Inquiry",
        filter="social",
        text="Thank you for contacting David Yurman.<br><br>We appreciate your interest in our PRODUCT.<br><br>If you would like to make a purchase or have any additional questions, you may contact our Customer Care Team at (888) 398-7626.<br><br>Best Regards,<br><br>&repl:firstName &repl:lastName",
        tags="social product inquiry Twitter tweets Facebook messages",
        id="blbSocPrd"
    ),
    new blurb (
        title="Social: Reply",
        filter="social",
        text="Thank you for your reply.<br><br><br><br>If you have any additional questions, you may contact our Customer Care Team at (888) 398-7626.<br><br>Best Regards,<br><br>&repl:firstName &repl:lastName",
        tags="social reply replies Twitter tweets Facebook messages",
        id="blbSocRply"
    ),
    new blurb (
        title="Social: Move To Email",
        filter="social",
        text="I am sorry to hear about the trouble you are having. I would love to further assist you by email. Would you mind proving me with your email address please?<br><br>If you have any additional questions, you may contact our Customer Care Team at (888) 398-7626.<br><br>Best Regards,<br><br>&repl:firstName &repl:lastName",
        tags="social emails Twitter tweets Facebook messages",
        id="blbSocToEmal"
    ),
    new blurb (
        title="Escalation Status - Reported",
        filter="escalations",
        text="We are sorry to hear about the trouble you have had with SITUATION. We re happy to report your case has been escalated to management for further review. Please allow us time to review your case and we will contact you with our resolution soon. We thank you for your patience.",
        tags="escalation supervisor manager reported",
        id="blbEscSttsRptd"
    ),
    new blurb (
        title="Congratulations!",
        filter="wedding",
        text="Congratulations on your upcoming engagement! We are delighted that you have chosen David Yurman to celebrate this exceptional moment with you.",
        tags="wedding bridal engagement congratulations",
        id="blbWedCgts"
    ),
    new blurb (
        title="Kid's Cuff Sizing Recommendations",
        filter="product styling",
        text="It would be my pleasure to help you locate a bracelet size that would work best for you based on your child's wrist. The area to measure the wrist is above the bone, below the hand.<br><br>&emsp;Kid's Bracelet:<br>&emsp;A 4.5 to 5 inch wrist would need a Small<br>&emsp;A 5 to 5.5 inch wrist would need a Large",
        tags="kid's children cuff bracelet sizing sizes",
        id="blbPrdSzngKidsCuff"
    ),
    new blurb (
        title="Women's Cuff Sizing Recommendations",
        filter="product styling",
        text="It would be my pleasure to help you locate a bracelet size that would work best for you based on your wrist measurement. The area to measure the wrist is above the bone, below the hand.<br><br>&emsp;Women's Bracelet:<br>&emsp;A 5 to 5.5 inch wrist would need an Extra Small<br>&emsp;A 5.5 to 6 inch wrist would need a Small<br>&emsp;A 6 to 6.5 inch wrist would need a Medium<br>&emsp;A 6.5 to 7 inch wrist would need a Large<br>&emsp;A 7 to 7.5 inch wrist would need an Extra Large",
        tags="cuff bracelet sizing sizes",
        id="blbPrdSzngWmnsCuff"
    ),
    new blurb (
        title="Women's Bangle Sizing Recommendations",
        filter="product styling",
        text="It would be my pleasure to help you locate a bracelet size that would work best for you based on your fist measurement.<br><br>&emsp;Women's Bangle:<br>&emsp;A 2 1/4 inch fist width would need a small<br>&emsp;A 2 1/2 inch fist width would need a medium<br>&emsp;A 2 3/4 inch fist width would need a large",
        tags="cuff bracelet sizing sizes",
        id="blbPrdSzngWmnsBngl"
    ),
    new blurb (
        title="Men's Cuff Sizing Recommendations",
        filter="product styling",
        text="It would be my pleasure to help you locate a bracelet size that would work best for you based on your wrist. The area to measure the wrist is above the bone, below the hand.<br><br>&emsp;Men's Bracelet:<br>&emsp;A 6 to 6.5 inch wrist would need an Extra Small<br>&emsp;A 6.5 to 7 inch wrist would need a Small<br>&emsp;A 7 to 7.5 inch wrist would need a Medium<br>&emsp;A 7.5 to 8 inch wrist would need a Large<br>&emsp;An 8 to 8.5 inch wrist would need an Extra Large",
        tags="cuff bracelet sizing sizes",
        id="blbPrdSzngMensCuff"
    ),
    new blurb (
        title="Recommended Chain - 1.7mm Baby Box Chain (Women's, Silver & 14k Gold)",
        filter="product styling",
        text="Our PENDANT is a wonderful selection, and a 1.7mm Box Chain Necklace with an Accent of 14K Gold would be a great option to pair with this pendant.<br><br>Price: $175 - $185<br>Style Number: CH0251 S4<br><br>https://www.davidyurman.com/womens/necklaces/box-chain-necklace-with-14k-yellow-gold-accent-CH0251+S4.html",
        tags="necklaces box chains pendants amulets tags enhancers 1.7mm baby",
        id="blbPrdStylWmnsBChnS4"
    ),
    new blurb (
        title="Recommended Chain - 1.7mm Baby Box Chain (Men's, Silver)",
        filter="product styling",
        text="Our PENDANT is a wonderful selection, and a 1.7mm Box Chain would be a great option to pair with this pendant.<br><br>Price: $180 - $190<br>Style Number: CH0126MSS<br><br>https://www.davidyurman.com/mens/necklaces-and-chains/box-chain-necklace-CH0126MSS.html",
        tags="necklaces box chains pendants amulets tags enhancers 1.7mm baby",
        id="blbPrdStylMensBChnSS"
    ),
    new blurb (
        title="Recommended Chain - 2.7mm Small Box Chain (Women's, Silver & 14k Gold)",
        filter="product styling",
        text="Our PENDANT is a wonderful selection, and a 2.7mm Box Chain Necklace with an Accent of 14K Gold would be a great option to pair with this pendant.<br><br>Price: $260 - $625<br>Style Number: CH0104 S4<br><br>https://www.davidyurman.com/womens/necklaces/box-chain-necklace-with-14k-yellow-gold-accent-CH0104+S4.html",
        tags="necklaces box chains pendants amulets tags enhancers 2.7mm small",
        id="blbPrdStylWmnsSChnS4"
    ),
    new blurb (
        title="Recommended Chain - 2.7mm Small Box Chain (Men's, Silver)",
        filter="product styling",
        text="Our PENDANT is a wonderful selection, and a 2.7mm Box Chain would be a great option to pair with this pendant.<br><br>Price: $245 - $315<br>Style Number: CH0104MSS<br><br>https://www.davidyurman.com/mens/necklaces-and-chains/box-chain-necklace-CH0104MSS.html",
        tags="necklaces box chains pendants amulets tags enhancers 2.7mm small",
        id="blbPrdStylMensSsChnSS"
    ),
    new blurb (
        title="Recommended Chain - 3.6mm Medium Box Chain (Men's, Silver)",
        filter="product styling",
        text="Our PENDANT is a wonderful selection, and a 3.6mm Box Chain would be a great option to pair with this pendant.<br><br>Price: $315 - $420<br>Style Number: CH0100MSS<br><br>https://www.davidyurman.com/mens/necklaces-and-chains/box-chain-necklace-CH0100MSS.html",
        tags="necklaces box chains pendants amulets tags enhancers 3.6mm medium",
        id="blbPrdStylWmnsMChnSS"
    ),
    new blurb (
        title="No Sales History",
        filter="orders",
        text="Regretfully, with the information provided, I am unable to see any sales history for you in our database. Are you able to provide me with an alternative name, phone number, or email address the purchase(s) may have been made under?",
        tags="retail boutiques sales orders online sales history previous purchases",
        id="blbOrdNoSalsHist"
    ),
    new blurb (
        title="Cannot Cancel Order - Please RTS or Return",
        filter="orders",
        text="We are sorry to hear about the trouble you are having with your order. Although we are unable to cancel your order at this time, we are happy to submit a request for your order to be returned back to us via FedEx while in transit. Please note that due to express shipping times, this request cannot be guaranteed. However, upon delivery, you may return your order back to us if you are still not satisfied with your purchase.",
        tags="cancellations RTS FedEx return sender orders purchases",
        id="blbOrdCantCancRTS"
    ),
    new blurb (
        title="DY.com Order Status - In Process (Warehouse)",
        filter="orders",
        text="Our distribution center is currently processing your order. Please allow us some time to process your order and we will contact you at our earliest convenience with tracking. We thank you for your patience.",
        tags="online status orders purchases processes pick pack",
        id="blbOrdSttsStrt"
    ),
    new blurb (
        title="Boutique Order Status - In Process (Boutique)",
        filter="boutique",
        text="Our David Yurman boutique is currently processing your order. Please allow us some time to process your order and we will contact at our earliest convenience with tracking. We thank you for your patience.",
        tags="retail boutiques stores status orders purchases processes pick pack",
        id="blbRtlSttsStrt"
    ),
    new blurb (
        title="Shipping Status - Shipped (No Signature Required)",
        filter="shipping",
        text="Your order has shipped! If you would like to monitor the status of your FedEx shipment, you may do so here: FedEx. Please note your order does not require a signature.",
        tags="shipping status shipped transit",
        id="blbShpSttsShpdNSig"
    ),
    new blurb (
        title="Shipping Status - Shipped (Signature Required)",
        filter="shipping",
        text="Your order has shipped! If you would like to monitor the status of your FedEx shipment, you may do so here: FedEx. Please note your order requires a signature.",
        tags="shipping status shipped transit signature required",
        id="blbShpSttsShpdRSig"
    ),
    new blurb (
        title="Shipping Status - Delivered",
        filter="shipping",
        text="We see that your order has been successfully delivered. We hope your purchase is well loved for many years to come! If you have any questions regarding your order, future personal shopping assistance, or require any further assistance, please feel free to contact us and we will be more than happy to assist you.",
        tags="shipping status delivered",
        id="blbShpSttsDlvd"
    ),
    new blurb (
        title="FedEx Claim - Denied",
        filter="escalations fedex",
        text="We are reaching out to you with an update regarding your recent shipment. Your FedEx claim has been reported as denied and we sincerely apologize for any inconvenience. If the package has not been found or received, we highly recommend reaching out to your local police station to file a police report or reporting the missing package to your home insurance agency. Please contact us should you have any further questions.",
        tags="FedEx claims lost missing claim denied",
        id="blbFdxLfcd"
    ),
    new blurb (
        title="Return Status - Customer Dropped Off Package For Return",
        filter="returns",
        text="Excellent! We look forward to receiving your return. Please feel free to contact us should you have any further questions.",
        tags="returns status transit",
        id="blbRtnSttsStrt"
    ),
    new blurb (
        title="Return Status - In Transit",
        filter="returns",
        text="Your return has not yet been delivered. Once delivered, allow us 7-10 business days from the date of delivery to process your request. We thank you for your patience.",
        tags="return status transit",
        id="blbRtnSttsTnst"
    ),
    new blurb (
        title="Return Status - Lost In Transit",
        filter="returns",
        text="We are sorry to hear about the trouble you are having with your return. Although your return has not arrived back to us, we will escalate the shipping issue to management so they may review the issue and make a decision moving forward.<br><br>If necessary, we may contact FedEx and file a claim. Although FedEx claims may take up to 6 weeks to be resolved, we will review alternative options and solutions for you in the mean time.<br><br>We thank you for your patience.",
        tags="return status lost transit missing FedEx claims",
        id="blbRtnSttsLost"
    ),
    new blurb (
        title="Return Status - Delivered To DYE",
        filter="returns",
        text="Your return has been received, and is currently undergoing review by our returns team. Please allow us 7-10 business days from the date of delivery to process your request. We thank you for your patience.",
        tags="returns status delivered",
        id="blbRtnSttsDlvd"
    ),
    new blurb (
        title="Return Status - Delayed",
        filter="escalations returns",
        text="Although your return has been received, your return has not been processed at this time. We will escalate your request in order to ensure our returns team can process your request in a timely manner. We thank you for your patience.",
        tags="returns status delayed",
        id="blbRtnSttsDlyd"
    ),
    new blurb (
        title="Return Status - Customer Accidentally Requested A Refund",
        filter="returns",
        text="We have reviewed the status of your return. Per our records,  we see a refund was requested instead of an exchange. Please note your order was refunded on DATE for the value of VALUE. We welcome you to repurchase!",
        tags="returns status refunds exchanges",
        id="blbRtnSttsRfndAcnt"
    ),
    new blurb (
        title="Engraving",
        filter="product repairs",
        text="Typically, any flat, smooth surface that is not made of titanium can be engraved. We highly recommend viewing the ITEM before having the ITEM engraved to ensure your absolute satisfaction, as engravings make the purchase final sale.<br><br>Service time for engravings is typically 3 weeks.",
        tags="repairs servicing service center engrave engraving rings bracelets",
        id="blbRprEng"
    ),
    new blurb (
        title="No Warranty On Jewelry",
        filter="product repairs",
        text="While we do not warranty our jewelry, we do stand behind our products in the event of a manufacturing defect, which will typically show itself within 30 days of purchase.",
        tags="warranty guarantee defect manufacturing manufacturer",
        id="blbRprNoWnty"
    ),
    new blurb (
        title="Service Time",
        filter="repairs",
        text="The estimated service time is typically 4-5 weeks.",
        tags="repairs status review servicing service center estimates evaluation",
        id="blbRprTime"
    ),
    new blurb (
        title="Repair Pricing (Cannot Provide Estimates)",
        filter="repairs",
        text="All service costs are given once a piece has been evaluated by our service center. We take time owned as well as condition received into consideration when evaluating a piece.",
        tags="repairs review servicing service center estimates evaluation",
        id="blbRprCost"
    ),
    new blurb (
        title="DRS Repair Status - Waiting For Estimates",
        filter="repairs",
        text="Your repair has been reported as Waiting For Estimates and is currently under review by our service center. If you would like a detailed report of your repair, you may contact our service center at (212) 382-0654. Alternatively, you may contact our Customer Care Team at (888) 398-7626.",
        tags="repairs status review servicing service center estimates evaluation",
        id="blbRprDRSSttsWaitEsts"
    ),
    new blurb (
        title="DRS Repair Status - Waiting For Approval",
        filter="repairs",
        text="Your repair has been reported as Waiting For Approval by our service center. If you would like to pay for your repair, you may contact our service center at (212) 382-0654. Alternatively, you may contact our Customer Care Team at (888) 398-7626.",
        tags="repairs status waiting approval pay servicing service center",
        id="blbRprDRSSttsWaitApvl"
    ),
    new blurb (
        title="DRS Repair Status - Work In Progress",
        filter="repairs",
        text="Your repair has been reported as In Progress by our service center. If you would like a detailed report of your repair, you may contact our service center at (212) 382-0654. Alternatively, you may contact our Customer Care Team at (888) 398-7626.",
        tags="repairs status WIP work progress incomplete servicing service center",
        id="blbRprDRSSttsWkPgGen"
    ),
    new blurb (
        title="DRS Repair Status - Work In Progress (Boutique)",
        filter="repairs",
        text="Your repair has been reported as In Progress by our service center. If you would like a detailed report of your repair, you may contact the original location where the repair was submitted, or our service center at (212) 382-0654.",
        tags="retail stores boutiques repairs status WIP work progress incomplete servicing service center",
        id="blbRprDRSSttsWkPgRtl"
    ),
    new blurb (
        title="DRS Repair Status - Completed (Boutique)",
        filter="repairs",
        text="Your repair has been reported as Completed by our service center. If you would like to pickup your repair or have your repair mailed to you, you may contact the original location where the repair was submitted.",
        tags="retail stores boutiques repairs status completed finished done servicing service center",
        id="blbRprDRSSttsDoneRtl"
    ),
    new blurb (
        title="Earring Half Pair Replacement",
        filter = "repairs",
        text=`We are sorry to hear about your lost earring. Although we do not sell single earrings, we are happy to see if one can be created for you!<br><br>We recommend that you bring your piece to the nearest David Yurman boutique so they may send your item to our service center. Alternatively, if it is most convenient for you, you are welcome to send your piece directly to our service center.<br>Please view our repairs webpage here for complete instructions:<br>https://www.davidyurman.com/assistance/customer-care/product-care-repairs.html<br><br>We also recommend insuring the jewelry against any further trouble you may have with your piece.<br>https://www.davidyurman.com/assistance/customer-care/jewelry-insurance.html`,
        tags="earrings half pair replacement lost missing insurance",
        id="blbRprHfPr"
    ),
    new blurb (
        title="Missing Cufflink(s) In Set Replacement",
        filter = "repairs",
        text=`We are sorry to hear about your lost cufflink. Although we do not sell single cufflinks, we are happy to see if one can be created for you!<br><br>We recommend that you bring your cufflinks to the nearest David Yurman boutique so they may send your cufflinks to our service center. Alternatively, if it is most convenient for you, you are welcome to send your pieces directly to our service center.<br>Please view our repairs webpage here for complete instructions:<br>https://www.davidyurman.com/assistance/customer-care/product-care-repairs.html<br><br>We also recommend insuring the jewelry against any further trouble you may have with your piece.<br>https://www.davidyurman.com/assistance/customer-care/jewelry-insurance.html`,
        tags="earrings half pair replacement lost missing insurance",
        id="blbRprCflkStRplc"
    ),
    new blurb (
        title="Missing Shirt Stud(s) In Set Replacement",
        filter = "repairs",
        text=`We are sorry to hear about your lost stud. Although we do not sell single studs, we are happy to see if one can be created for you!<br><br>We recommend that you bring your studs to the nearest David Yurman boutique so they may send your studs to our service center. Alternatively, if it is most convenient for you, you are welcome to send your pieces directly to our service center.<br>Please view our repairs webpage here for complete instructions:<br>https://www.davidyurman.com/assistance/customer-care/product-care-repairs.html<br><br>We also recommend insuring the jewelry against any further trouble you may have with your piece.<br>https://www.davidyurman.com/assistance/customer-care/jewelry-insurance.html`,
        tags="shirt stud set replacement lost missing insurance",
        id="blbRprStudStRplc"
    ),
    new blurb (
        title="Request Submitted",
        filter="gifts",
        text="We are happy to ship your GIFT to the address provided and have submitted your request for fulfillment. Please allow us some time to fulfill the request. Once shipped, please allow 7-10 business days for delivery. We thank you for your patience.",
        tags="coddling gifts submitted",
        id="blbGftSbmt"
    ),
    new blurb (
        title="Gift Shipped",
        filter="gifts",
        text="Your GIFT has shipped! Please allow 7-10 business days for delivery. We welcome you to contact us should you have any further questions.",
        tags="coddling gifts shipped",
        id="blbGftShpd"
    ),
    new blurb (
        title="Gift Returned",
        filter="gifts",
        text="Regretfully, your gift has been returned to us, and we are happy to have your gift reshipped to you. Please provide us with an alternative address to have your gift reshipped.<br><br>Once shipped, please allow us 7-10 business days for delivery. We thank you for your patience.",
        tags="coddling gifts returned reship",
        id="blbGftRtnd"
    ),
    new blurb (
        title = "Gift Message (Neutral)",
        filter = "gifts",
        text = "David Yurman is pleased to provide you with a complimentary gift.<br><br>Should you have any questions or concerns, we welcome you to contact us directly at CustomerCare@DavidYurman.com, or by phone at 888-DYurman (1-888-398-7626).<br><br>We look forward to assisting you in the future.",
        tags = "coddling gifts message card positive escalation",
        id="blbGftPMsL"
    ),
    new blurb (
        title = "Gift Message (Neutral, Shortened)",
        filter = "gifts",
        text = "Thank you for being a valued David Yurman customer.<br>Please enjoy the enclosed GIFT and contact us for any further questions.",
        tags = "coddling gifts message card positive escalation",
        id="blbGftPMsS"
    ),
    new blurb (
        title = "Gift Message (Apologetic)",
        filter = "gifts",
        text = "Thank you for being a valued David Yurman customer.<br>We're sorry to hear about the trouble you've experienced with your most recent order.<br><br>Please know that your experience is not to our standards.<br><br>We hope you see the enclosed GIFT as a token of our appreciation.<br><br>Should you have any questions or concerns, we welcome you to contact us directly at CustomerCare@DavidYurman.com, or by phone at 888-DYurman (1-888-398-7626).",
        tags = "coddling gifts message card negative escalation apology",
        id="blbGftNMsL"
    ),
    new blurb (
        title = "Gift Message (Apologetic, Shorted)",
        filter = "gifts",
        text = "Thank you for being a valued David Yurman customer.<br>We're sorry to hear about the trouble you have experienced.<br>We hope you see the enclosed gift as a token of our appreciation.<br>Should you have any questions, we welcome you to contact us directly at 888-DYurman (1-888-398-7626).",
        tags = "coddling gifts message card negative escalation apology",
        id="blbGftNMsS"
    ),
    new blurb (
        title = "Earring Backs Gift Message (Correct)",
        filter = "gifts",
        text = "David Yurman is pleased to provide you with complimentary earring backs.<br><br>Should you have any questions or concerns, we welcome you to contact us directly at CustomerCare@DavidYurman.com, or by phone at 888-DYurman (1-888-398-7626).<br><br>We look forward to assisting you in the future.",
        tags = "coddling gifts earrings backs",
        id="blbGftEBkP"
    ),
    new blurb (
        title = "Earring Backs Gift Message (New Style)",
        filter = "gifts",
        text = "David Yurman is pleased to provide you with complimentary earring backs.<br><br>Our replacement earring backs are currently the newest style and may slightly differ from what you’ve previously had. However, they are designed to work with your David Yurman earrings.<br><br>Should you have any questions or concerns, we welcome you to contact us directly at CustomerCare@DavidYurman.com, or by phone at 888-DYurman (1-888-398-7626).<br><br>We look forward to assisting you in the future.",
        tags = "coddling gifts earrings backs",
        id="blbGftEBkN"
    ),
    new blurb (
        title = "Live Chat Ending",
        filter = "chat",
        text = "Thank you for chatting with us today at David Yurman. If there is anything else we can further assist you with, please contact us at 1-888-398-7626. Or you can send us an email at customercare@davidyuman.com.",
        tags = "live chat ending",
        id="blbChtEnd"
    ),
    new blurb (
        title = "Live Chat Repair Inquiry",
        filter = "chat",
        text = "We're sorry to hear about the trouble you're having with your piece. If you'd like to have your piece repaired, please view our repairs webpage here for complete instructions:<br>https://www.davidyurman.com/assistance/customer-care/product-care-repairs.html<br><br>We also recommend insuring the jewelry against any further trouble you may have with your piece.<br>https://www.davidyurman.com/assistance/customer-care/jewelry-insurance.html",
        tags = "live chat repairs fix",
        id="blbChtRprGen"
    ),
    new blurb (
        title = "Live Chat Engraving Inquiry",
        filter = "chat",
        text = "Most of our rings can be engraved. Engraving time is usually about 3 weeks. The cost of the engraving will vary, but estimates are as follows:<br><br>Initials: $50<br>Name: $60<br>2 lines: $100<br><br>If you'd like to have your ring engraved, please view our repairs webpage here for complete instructions:<br>https://www.davidyurman.com/assistance/customer-care/product-care-repairs.html<br><br>If you'd like to know if your ring can be engraved, please provide me with the style number.",
        tags = "live chat repairs engraving rings bracelets",
        id="blbChtRprEng"
    ),
    new blurb (
        title = "Live Chat Return Inquiry",
        filter = "chat",
        text = "We're sorry to hear about the trouble you're having with your order. We want you to be completely satisfied with your order. If you'd like to make a return or exchange, please view our returns webpage here for complete instructions:<br>https://www.davidyurman.com/assistance/customer-care/returns-exchanges.html",
        tags = "live chat returns",
        id="blbChtRtnGen"
    ),
    new blurb (
        title = "Ornaments",
        filter = "orders gifts holiday",
        text = "We are currently offering a complimentary ornament with all DavidYurman.com orders, while supplies last. Please note that charitable donation items, such as our Cable Pink, Orange, and Blue Rubber Bracelets, and items shipped using FedEx SmartPost are excluded.",
        tags = "ornament free gift purchase necklace",
        id="blbGftOrn"
    ),
    new blurb (
        title = "Did Not Receive Loyalty Gift Card This Year",
        filter = "holiday",
        text = "The loyalty gift card program is issued based on a variety of factors including your combined total spend between our boutiques and DavidYurman.com over the past year. We recommend making sure that all purchases are under the same email address for that reason.",
        tags = "LGC",
        id="blbLGCNotRcv"
    ),
    new blurb (
        title = "Style Number Incorrect",
        filter = "wholesale product orders",
        text = "David yurman is happy to assist you with your inquiry. Regretfully, your style number appears to be incorrect. Please provide us with an updated style number and your request will be handled at our earliest convenience. We look forward to hearing from you.",
        tags = "orders product wholesale",
        id="blbWslStlNumWng"
    )
]

//----------------------------------------------------------------------------------------------------
//
//  DATA: Notes
//
//----------------------------------------------------------------------------------------------------

class note {
    constructor (title="", subtitle="", filter="", html=``, id="") {
        this.title = title;
        this.subtitle = subtitle;
        this.filter = filter;
        this.html = html;
        this.id = id;
    }
}

const notes = [
    new note (
        title="Estimated Repair Times & Charges",
        subtitle="",
        filter = "repairs",
        html = `
        <table class="hoverTable">
            <tr>
                <th colspan="2">Service Times</th>
            </tr>
            <tr><td style="width: 200px;">Standard</td><td style="width: 100px;"> 4-5 Weeks</td></tr>
            <tr><td>Engraving/Ring Resizing</td><td>2-3 Weeks</td></tr>
        </table>
        <br>
        <h3>Quotable Repair Charges</h3>
        <b>Ring Resizing:</b><br>Complimentary within 90 days<br><br>
        <table class="hoverTable">
            <tr>
                <th colspan="2">Engravings</th>
            </tr>
            <tr><td style="width: 100px;">Initials</td><td style="width: 50px;">$50</td></tr>
            <tr><td style="width: 100px;">Name</td><td style="width: 50px;">$60</td></tr>
            <tr><td style="width: 100px;">Two lines</td><td style="width: 50px;">$100</td></tr>
        </table>`,
        id="notRprPlcy"
    ),
    new note (
        title="International Repair Locations",
        subtitle="",
        filter = "repairs",
        html = `<p>We often get inquiries on where to send international repairs. Please see the list below for where to send the client inquiry.</p><br>
        <i>Note: Clients are responsible for all shipping, taxes, and customs fees for repairs.</i><br><br>
        <ul>
            <li><b>Canada:</b> Refer client to <a href="https://www.davidyurman.com/stores?showMap=true&horizontalView=true&isForm=true&boutiques=true&retailers=true&postalCode=Yorkdale&radius=15" target="_blank">DY Yorkdale and Holt boutiques</a>.</li>
            <li><b>Puerto Rico:</b> Send to DRS.</li>
            <li><b>Caribbean:</b> Send to DRS.</li>
            <li><b>Europe:</b> Refer to <a href="https://www.davidyurman.com/stores?showMap=true&horizontalView=true&isForm=true&boutiques=true&retailers=true&postalCode=Paris&radius=15" target="_blank">Paris Boutiques</a>.</li>
            <li><b>Middle East:</b> Refer to Ounass.</li>
            <li><b>Asia:</b> Refer to <a href="https://www.davidyurman.com/stores?showMap=true&horizontalView=true&isForm=true&boutiques=true&retailers=true&postalCode=Sydney&radius=300" target="_blank">Lane Crawford</a> or contact Cleopatra Chan.</li>
            <li><b>Australia:</b> Refer to <a href="https://www.davidyurman.com/stores/fairfax--roberts.html" target="_blank">Fairfax and Roberts</a>.</li>
            <li>All other countries are on a case by case basis.</li>
        </ul>`,
        id="notRprIntlLctn"
    ),
    new note (
        title="Repair & Service Cheat Sheet",
        subtitle="",
        filter = "repairs",
        html = `<b>Resizing - Materials</b><br>
        <p><i class="bi bi-info-circle-fill"></i> = Hover over for more details.</p>
        <i>*Details pending overall product design</i><br><br>
        <table class="hoverTable">
            <tr><th style="width: 100px;">Material</th> <th style="width: 100px;">Resize</th> <th style="width: 100px;">Refurbish</th> <th style="width: 200px;"></th></tr>
            <tr><td title="Information provided is for rubber jewelry & not related to Cable Rubber Bracelets, which should never be sent to DRS.">Rubber <i class="bi bi-info-circle-fill"></i></td>     <td>No</td>     <td>Yes</td>     <td></td></tr>
            <tr><td>Leather</td>    <td>Yes</td>    <td>Yes</td>     <td></td></tr>
            <tr><td>Nylon</td>      <td>Yes</td>    <td>Yes</td>     <td></td></tr>
        </table><br>
        <table class="hoverTable">
            <tr><th style="width: 100px;">Metal</th> <th style="width: 100px;">Resize</th> <th style="width: 100px;">Refurbish</th> <th style="width: 100px;">Engrave</th> <th style="width: 200px;">Rhodium Plating</th></tr>
            <tr><td title="Aluminum bracelets should not be sent out for repairs as they cannot be serviced.">Aluminum <i class="bi bi-info-circle-fill"></i></td>   <td>No</td>     <td>No</td>     <td>No</td>     <td>No</td></tr>
            <tr><td>Steel</i></td>   <td title="Necklaces and bracelets are replaced, not lengthened. Alterations may be costly.">Yes <i class="bi bi-info-circle-fill"></td>     <td title="Necklaces and bracelets coated PVD or acrylic cannot be restored. Chain will need to be replaced. Refurbishment will be costly.">No <i class="bi bi-info-circle-fill"></td>     <td>No</td>     <td>No</td></tr>
            <tr><td>Copper</td>     <td>No</td>     <td>Yes</td>     <td>Yes</td>     <td>No</td></tr>
            <tr><td>Titanium</td>   <td>No</td>     <td title="Due to the durability of Titanium, refurbishment is superficial. Not recommended.">No <i class="bi bi-info-circle-fill"></i></td>     <td title="Due to the durability of Titanium, engraving are possible, but not recommended due to being shallow. As engravings are darkened, this will make them hard to see on Black Titanium.">Yes <i class="bi bi-info-circle-fill"></i></td>     <td>No</td></tr>
            <tr><td>Silver</td>     <td>Yes</td>    <td>Yes</td>     <td>Yes</td>     <td title="Silver should not be oxidized or tarnished.">Yes <i class="bi bi-info-circle-fill"></i></td></tr>
            <tr><td>Gold</td>       <td>Yes</td>    <td>Yes</td>     <td>Yes</td>     <td title="Will turn the gold white.">Yes <i class="bi bi-info-circle-fill"></i></td></tr>
            <tr><td>Platinum</td>   <td>Yes</td>     <td>Yes</td>     <td>Yes</td>     <td>Yes</td></tr>
        </table><br>
        
        <b>Resizable Products</b><br>
        <i>*Details pending overall product design</i><br>
        <ul>
            <li>Chain Necklaces & Bracelets (Box Chains, Oval Link, Madison, etc.)</li>
            <li>Beaded Necklaces & Bracelets (Bijoux, Spiritual Beads, etc.)</li>
            <li>Most Albion Rings</li>
            <li>Most Chatelaine Rings</li>
            <li>Most Crossover Rings</li>
            <li>Most Wheaton Rings</li>
        </ul>`,
        id="notRprSvGd"
    ),
    new note (
        title="Birthstones",
        subtitle="Click any of the birthstones to view styles with these stones online.",
        filter="product",
        html=`
        <table class="hoverTableBirthstones">
            <tr>
                <th style="width: 100px;">Month</th>
                <th colspan="6">Birthstones</th>
            </tr>
            <tr>
                <td style="width: 100px;">
                    January
                </td>
                <td>
                    <div style="height: 30px; width: 30px; border-radius: 100%; background-image: url(https://www.davidyurman.com/dw/image/v2/BGCL_PRD/on/demandware.static/-/Sites-dy-master-catalog/default/dw87b895f3/images/swatch/Stone-GA.jpg?cx=23&cy=23&cw=54&ch=54?cx=23&cy=23&cw=54&ch=54); background-size: cover;">
                </td>
                <td>
                    &emsp;<a href="https://www.davidyurman.com/search?prefn1=gemstone%20type&prefv1=Garnet&q=Garnet&start=0&sz=32" target="_blank" style="color: darkred;">Garnet</a>
                </td>
                <td></td><td></td><td></td><td></td>
            </tr>
            <tr>
                <td>
                    February
                </td>
                <td>
                    <div style="height: 30px; width: 30px; border-radius: 100%; background-image: url(https://www.davidyurman.com/dw/image/v2/BGCL_PRD/on/demandware.static/-/Sites-dy-master-catalog/default/dw87b895f3/images/swatch/Stone-AM.jpg?cx=23&cy=23&cw=54&ch=54); background-size: cover;">
                </td>
                <td>
                    &emsp;<a href="https://www.davidyurman.com/search?prefn1=gemstone%20type&prefv1=Amethyst&q=Amethyst&start=0&sz=32" target="_blank" style="color: purple;">Amethyst</a>
                </td>
                <td></td><td></td><td></td><td></td>
            </tr>
            <tr>
                <td>
                    March
                </td>
                <td>
                    <div style="height: 30px; width: 30px; border-radius: 100%; background-image: url(https://www.davidyurman.com/dw/image/v2/BGCL_PRD/on/demandware.static/-/Sites-dy-master-catalog/default/dw87b895f3/images/swatch/Stone-AQ.jpg?cx=23&cy=23&cw=54&ch=54); background-size: cover;">
                </td>
                <td>
                    &emsp;<a href="https://www.davidyurman.com/search?prefn1=gemstone%20type&prefv1=Aquamarine&q=Aquamarine&start=0&sz=32" target="_blank" style="color: darkcyan;">Aquamarine</a>
                </td>
                <td></td><td></td><td></td><td></td>
            </tr>
            <tr>
                <td>
                    April
                </td>
                <td>
                    <div style="height: 30px; width: 30px; border-radius: 100%; background-image: url(https://www.davidyurman.com/dw/image/v2/BGCL_PRD/on/demandware.static/-/Sites-dy-master-catalog/default/dw87b895f3/images/swatch/Stone-DI.jpg?cx=23&cy=23&cw=54&ch=54); background-size: cover;">
                </td>
                <td>
                    &emsp;<a href="https://www.davidyurman.com/search?prefn1=gemstone%20type&prefv1=Diamond&q=Diamond&start=0&sz=32" target="_blank" style="color: grey;">Diamond</a>
                </td>
                <td></td><td></td><td></td><td></td>
            </tr>
            <tr>
                <td>
                    May
                </td>
                <td>
                    <div style="height: 30px; width: 30px; border-radius: 100%; background-image: url(https://www.davidyurman.com/dw/image/v2/BGCL_PRD/on/demandware.static/-/Sites-dy-master-catalog/default/dw87b895f3/images/swatch/Stone-EM.jpg?cx=23&cy=23&cw=54&ch=54); background-size: cover;">
                </td>
                <td>
                    &emsp;<a href="https://www.davidyurman.com/search?prefn1=gemstone%20type&prefv1=Emerald&q=Emerald&start=0&sz=32" target="_blank" style="color: darkgreen;">Emerald</a>
                </td>
                <td></td><td></td><td></td><td></td>
            </tr>
            <tr>
                <td>
                    June
                </td>
                <td>
                    <div style="height: 30px; width: 30px; border-radius: 100%; background-image: url(https://www.davidyurman.com/dw/image/v2/BGCL_PRD/on/demandware.static/-/Sites-dy-master-catalog/default/dw87b895f3/images/swatch/Stone-PE.jpg?cx=23&cy=23&cw=54&ch=54); background-size: cover;">
                </td>
                <td>
                    &emsp;<a href="https://www.davidyurman.com/search?prefn1=gemstone%20type&prefv1=Pearl&q=Pearl&start=0&sz=32" target="_blank" style="color: grey;">Pearl</a>
                </td>
                <td>
                    <div style="height: 30px; width: 30px; border-radius: 100%; background-image: url(https://www.davidyurman.com/dw/image/v2/BGCL_PRD/on/demandware.static/-/Sites-dy-master-catalog/default/dw87b895f3/images/swatch/Stone-IO.jpg?cx=23&cy=23&cw=54&ch=54); background-size: cover;">
                </td>
                <td>
                    &emsp;<a href="https://www.davidyurman.com/search?prefn1=gemstone%20type&prefv1=Alexandrite&q=Alexandrite&start=0&sz=32" target="_blank" style="color: indigo;">Alexandrite</a>
                </td>
                <td></td><td></td>
            </tr>
            <tr>
                <td>
                    July
                </td>
                <td>
                    <div style="height: 30px; width: 30px; border-radius: 100%; background-image: url(https://www.davidyurman.com/dw/image/v2/BGCL_PRD/on/demandware.static/-/Sites-dy-master-catalog/default/dw87b895f3/images/swatch/Stone-RU.jpg?cx=23&cy=23&cw=54&ch=54); background-size: cover;">
                </td>
                <td>
                    &emsp;<a href="https://www.davidyurman.com/search?prefn1=gemstone%20type&prefv1=Ruby&q=Ruby&start=0&sz=32" target="_blank" style="color: darkred;">Ruby</a>
                </td>
                <td></td><td></td><td></td><td></td>
            </tr>
            <tr>
                <td>
                    August
                </td>
                <td>
                    <div style="height: 30px; width: 30px; border-radius: 100%; background-image: url(https://www.davidyurman.com/dw/image/v2/BGCL_PRD/on/demandware.static/-/Sites-dy-master-catalog/default/dw87b895f3/images/swatch/Stone-PR.jpg?cx=23&cy=23&cw=54&ch=54); background-size: cover;">
                </td>
                <td>
                    &emsp;<a href="https://www.davidyurman.com/search?prefn1=gemstone%20type&prefv1=Peridot&q=Peridot&start=0&sz=32" target="_blank"style="color: darkgreen;">Peridot</a>
                </td>
                <td></td><td></td><td></td><td></td>
            </tr>
            <tr>
                <td style="width: 100px;">
                    September
                </td>
                <td>
                    <div style="height: 30px; width: 30px; border-radius: 100%; background-image: url(https://www.davidyurman.com/dw/image/v2/BGCL_PRD/on/demandware.static/-/Sites-dy-master-catalog/default/dw87b895f3/images/swatch/Stone-SA.jpg?cx=23&cy=23&cw=54&ch=54); background-size: cover;">
                </td>
                <td>
                    &emsp;<a href="https://www.davidyurman.com/search?prefn1=gemstone%20type&prefv1=Sapphire&q=Sapphire&start=0&sz=32" target="_blank" style="color: darkblue;">Sapphire</a>
                </td>
                <td></td><td></td><td></td><td></td>
            </tr>
            <tr>
                <td>
                    October
                </td>
                <td>
                    <div style="height: 30px; width: 30px; border-radius: 100%; background-image: url(https://www.davidyurman.com/dw/image/v2/BGCL_PRD/on/demandware.static/-/Sites-dy-master-catalog/default/dw87b895f3/images/swatch/Stone-PT.jpg?cx=23&cy=23&cw=54&ch=54); background-size: cover;">
                </td>
                <td>
                    &emsp;<a href="https://www.davidyurman.com/search?prefn1=gemstone%20type&prefv1=Tourmaline&q=Tourmaline&start=0&sz=32" target="_blank" style="color: hotpink;">Tourmaline</a>
                </td>
                <td>
                    <div style="height: 30px; width: 30px; border-radius: 100%; background-image: url(https://www.davidyurman.com/dw/image/v2/BGCL_PRD/on/demandware.static/-/Sites-dy-master-catalog/default/dw87b895f3/images/swatch/Stone-OP.jpg?cx=23&cy=23&cw=54&ch=54); background-size: cover;">
                </td>
                <td>
                    &emsp;<a href="https://www.davidyurman.com/search?prefn1=gemstone%20type&prefv1=Opal&q=Opal&start=0&sz=32" target="_blank" style="color: darkcyan;">Opal</a>
                </td>
                <td></td><td></td>
            </tr>
            <tr>
                <td>
                    November
                </td>
                <td>
                    <div style="height: 30px; width: 30px; border-radius: 100%; background-image: url(https://www.davidyurman.com/dw/image/v2/BGCL_PRD/on/demandware.static/-/Sites-dy-master-catalog/default/dw87b895f3/images/swatch/Stone-BT.jpg?cx=23&cy=23&cw=54&ch=54); background-size: cover;">
                </td>
                <td>
                    &emsp;<a href="https://www.davidyurman.com/search?prefn1=gemstone%20type&prefv1=Topaz&q=Topaz&start=0&sz=32" target="_blank" style="color: darkblue;">Topaz</a>
                </td>
                <td>
                    <div style="height: 30px; width: 30px; border-radius: 100%; background-image: url(https://www.davidyurman.com/dw/image/v2/BGCL_PRD/on/demandware.static/-/Sites-dy-master-catalog/default/dw87b895f3/images/swatch/Stone-CI.jpg?cx=23&cy=23&cw=54&ch=54); background-size: cover;">
                </td>
                <td>
                    &emsp;<a href="https://www.davidyurman.com/search?prefn1=gemstone%20type&prefv1=Citrine&q=Citrine&start=0&sz=32" target="_blank" style="color: darkorange;">Citrine</a>
                </td>
                <td></td><td></td>
            </tr>
            <tr>
                <td>
                    December
                </td>
                <td>
                    <div style="height: 30px; width: 30px; border-radius: 100%; background-image: url(https://www.davidyurman.com/dw/image/v2/BGCL_PRD/on/demandware.static/-/Sites-dy-master-catalog/default/dw87b895f3/images/swatch/Stone-TZ.jpg?cx=23&cy=23&cw=54&ch=54); background-size: cover;">
                </td>
                <td>
                    &emsp;<a href="https://www.davidyurman.com/search?prefn1=gemstone%20type&prefv1=Tanzanite&q=Tanzanite&start=0&sz=32" target="_blank" style="color: darkblue;">Tanzanite</a>
                </td>
                <td>
                <div style="height: 30px; width: 30px; border-radius: 100%; background-image: url(https://www.davidyurman.com/dw/image/v2/BGCL_PRD/on/demandware.static/-/Sites-dy-master-catalog/default/dw87b895f3/images/swatch/Stone-TO.jpg?cx=23&cy=23&cw=54&ch=54); background-size: cover;">
                </td>
                <td>
                    &emsp;<a href="https://www.davidyurman.com/search?prefn1=gemstone%20type&prefv1=Zircon&q=Zircon&start=0&sz=32" target="_blank" style="color: darkcyan;">Zircon</a>
                </td>
                <td>
                <div style="height: 30px; width: 30px; border-radius: 100%; background-image: url(https://www.davidyurman.com/dw/image/v2/BGCL_PRD/on/demandware.static/-/Sites-dy-master-catalog/default/dw87b895f3/images/swatch/Stone-TQ.jpg?cx=23&cy=23&cw=54&ch=54); background-size: cover;">
                </td>
                <td>
                    &emsp;<a href="https://www.davidyurman.com/search?prefn1=gemstone%20type&prefv1=Turquoise&q=Turquoise&start=0&sz=32" target="_blank" style="color: darkcyan;">Turquoise</a>
                </td>
            </tr>
        </table>`,
        id="notPrdStnsBrth"
    ),
    new note (
        title="Wholesale Account Phone Numbers",
        subtitle="Phone numbers dedicated to wholesale phonecalls.",
        filter = "wholesale",
        html = `<p><b>National (Nordstrom, Neiman Marcus, etc.):</b><br>
        (888) 919-4159<br><br>
        <b>Independent:</b><br>
        (844) 395-7481<p>`,
        id="notWslAcnt"
    ),
    new note (
        title="Shipping Methods & Delivery Times",
        subtitle="",
        filter = "shipping",
        html = `<p>Please see the shipping times, costs, and their estimated delivery times below.<br>Note: some delivery methods are limited to select areas.</p><br>
        <table class="hoverTable">
            <tr>
                <th style="width: 250px;">Shipping Method</th> <th style="width: 200px;">Time Frame</th> <th style="width: 100px;">Cost</th> <th style="width: 200px;">Availability</th>
            </tr>
            <tr>
                <td>FedEx 2-Day</td> <td>2-3 Business Days</td> <td>$0</td> <td>United States</td>
            </tr>
            <tr>
                <td>FedEx Overnight</td> <td>1-2 Business Days</td> <td>$17</td> <td>United States</td>
            </tr>
            <tr>
                <td>FedEx International Priority</td> <td>3-5 Business Days</td> <td>$0</td> <td>Canada</td>
            </tr>
            <tr>
                <td>FedEx Smart Post</td> <td>7-10 Business Days</td> <td>$0</td> <td>United States</td>
            </tr>
            <tr>
                <td>Same Day Delivery</td> <td>Same Day</td> <td>$35</td> <td>New York City</td>
            </tr>
            <tr>
                <td>USPS Ground (Coddling Gifts)</td> <td>1-2 Weeks</td> <td>$0</td> <td>United States, Canada</td>
            </tr>
        </table>`,
        id="notShpDvry"
    ),
    new note (
        title="Return Policies & Times",
        subtitle="",
        filter = "returns",
        html = `<p><b>Normal:</b> &repl:policyUsReturnRefundDays Days from date of receipt through date of return<br>
        <b>Holiday:</b> Purchases made after &repl:policyUsReturnHolidayStart can be returned through &repl:policyUsReturnHolidayEnd<br><br>
        <h3>Estimated Return Processing Times</h3>
        <p>Extended holiday return processing times begin the first business day after Christmas<p><br>
        <table class="hoverTable">
            <tr>
                <th style="width: 150px;">Reason</th>
                <th style="width: 150px;">Normal Returns</th>
                <th style="width: 150px;">Holiday Returns</th>
            </tr>
            <tr>
                <td>Refund</td>
                <td>7-10 Business Days</td>
                <td>2-3 Weeks</td>
            </tr>
            <tr>
                <td>Exchange</td>
                <td>1-2 Weeks</td>
                <td>2-3 Weeks</td>
            </tr>
            <tr>
                <td>Merchandise Credit</td>
                <td>1-2 Weeks</td>
                <td>2-3 Weeks</td>
            </tr>
        </table>`,
        id="notRtnPlcy"
    ),
    new note (
        title="Universal Cuff Bracelet Size Comparison Chart",
        subtitle="",
        filter = "styling",
        html = `<p>See recommend cuff sizes and how bracelet's compare across ages & genders.<br>Kid's bracelets are for ages 8 and up.<br>*<i>Sizes listed in inches. Most common size is a medium and will be a special color when hovered over.</i></p><br>
        <table class="hoverTable">
            <tr><th style="width: 150px;" colspan="2">Wrist Size Range</th> <th style="width: 100px;">Kid's</th> <th style="width: 100px;">Women's</th> <th style="width: 100px;">Men's</th> <th style="width: 100px;">Cuff Size</th></tr>
            <tr><td>4.5"</td>    <td>5"</td>      <td>S</td>          <td>2XS</td>        <td></td>         <td>6"</td></tr>
            <tr><td>5"</td>      <td>5.5"</td>    <td>L</td>          <td>XS</td>         <td></td>         <td>6.5"</td></tr>
            <tr><td>5.5"</td>    <td>6"</td>      <td></td>           <td>S</td>          <td>2XS</td>      <td>7"</td></tr>
            <tr><td>6"</td>      <td>6.5"</td>    <td></td>           <td class="common" title="Common Women's Size"><b>M</b></td>          <td>XS</td>       <td>7.5"</td></tr>
            <tr><td>6.5"</td>    <td>7"</td>      <td> </td>          <td>L</td>          <td>S</td>        <td>8"</td></tr>
            <tr><td>7"</td>      <td>7.5"</td>    <td></td>           <td>XL</td>         <td class="common" title="Common Men's Size"><b>M</b></td>        <td>8.5"</td></tr>
            <tr><td>7.5"</td>    <td>8</td>       <td></td>           <td>2XL</td>        <td>L</td>        <td>9"</td></tr>
            <tr><td>8"</td>      <td>8.5"</td>    <td></td>           <td>3XL</td>        <td>XL</td>       <td>9.5"</td></tr>
            <tr><td>8.5"</td>    <td>9"</td>      <td></td>           <td>4XL</td>        <td>2XL</td>      <td>10"</td></tr>
            <tr><td>9"</td>      <td>9.5"</td>    <td></td>           <td></td>           <td>3XL</td>      <td>10.5"</td></tr>
            <tr><td>9.5"</td>    <td>10"</td>     <td></td>           <td></td>           <td>4XL</td>      <td>11"</td></tr>
        </table>`,
        id="notPrdSzngCuffAll"
    ),
    new note (
        title="Virtual Cuff Bracelet Size Comparisons (Womens - 5mm)",
        subtitle="",
        filter = "styling",
        html = `<i>*Sizes relative to the Credit Card Scale Tool.</i><br><br>
        <div class="display-size-example" style="width: 2.06in; height: 1.56in; border-width: 5mm; font-size: medium;">Small - 7"<br>2.06" x 1.56"</div>
        <div class="display-size-example" style="width: 2.25in; height: 1.75in; border-width: 5mm; font-size: medium;">Medium - 7.5"<br>2.25" x 1.75"</div>
        <div class="display-size-example" style="width: 2.37in; height: 1.87in; border-width: 5mm; font-size: medium;">Large - 8"<br>2.37" x 1.87"</div>`,
        id="notPrdSzngCuffDgrmFeml"
    ),
    new note (
        title="Virtual Cuff Bracelet Size Comparisons (Men's - 6mm)",
        subtitle="",
        filter = "styling",
        html = `<i>*Sizes relative to the Credit Card Scale Tool.</i><br><br>
        <div class="display-size-example" style="width: 2.5in; height: 1.75in; border-width: 6mm; font-size: medium;">Small - 7"<br>2.5" x 1.75"</div>
        <div class="display-size-example" style="width: 2.63in; height: 2in; border-width: 6mm; font-size: medium;">Medium - 7.5"<br>2.63" x 2"</div>
        <div class="display-size-example" style="width: 2.81in; height: 2.13in; border-width: 6mm; font-size: medium;">Large - 8"<br>2.81" x 2.13"</div>`,
        id="notPrdSzngCuffDgrmMale"
    ),
    new note (
        title="Virtual Cable Bracelet Thickness",
        subtitle="",
        filter = "styling",
        html = `<i>*Sizes listed are in millimeters, and relative to the Credit Card Scale Tool.</i><br><br>
        <div class="display-thickness-example" style="border-bottom-width: 2.6mm"><a target="_blank" href="https://www.davidyurman.com/search?prefn1=multiple_collection&prefv1=womens%2Fwomens-shop%2Fwomens-bracelets%25Bracelets&q=2.6mm&start=0&sz=32">2.6mm Cable Bracelet</a></div>
        <div class="display-thickness-example" style="border-bottom-width: 3mm"><a target="_blank" href="https://www.davidyurman.com/search?prefn1=multiple_collection&prefv1=womens%2Fwomens-shop%2Fwomens-bracelets%25Bracelets&q=3mm&start=0&sz=32">3mm Cable Bracelet<a></div>
        <div class="display-thickness-example" style="border-bottom-width: 3.5mm"><a target="_blank" href="https://www.davidyurman.com/search?prefn1=multiple_collection&prefv1=womens%2Fwomens-shop%2Fwomens-bracelets%25Bracelets&q=3.5mm&start=0&sz=32">3.5mm Cable Bracelet<a></div>
        <div class="display-thickness-example" style="border-bottom-width: 4mm"><a target="_blank" href="https://www.davidyurman.com/search?prefn1=multiple_collection&prefv1=womens%2Fwomens-shop%2Fwomens-bracelets%25Bracelets&q=4mm&start=0&sz=32">4mm Cable Bracelet<a></div>
        <div class="display-thickness-example" style="border-bottom-width: 5mm"><a target="_blank" href="https://www.davidyurman.com/search?prefn1=multiple_collection&prefv1=womens%2Fwomens-shop%2Fwomens-bracelets%25Bracelets&q=5mm&start=0&sz=32">5mm Cable Bracelet<a></div>
        <div class="display-thickness-example" style="border-bottom-width: 6mm"><a target="_blank" href="https://www.davidyurman.com/search?prefn1=multiple_collection&prefv1=mens%2Fmens-shop%2Fmens-bracelets%25Bracelets&q=6mm&start=0&sz=32">6mm Cable Bracelet (Men's)<a></div>
        <div class="display-thickness-example" style="border-bottom-width: 7mm"><a target="_blank" href="https://www.davidyurman.com/search?prefn1=multiple_collection&prefv1=womens%2Fwomens-shop%2Fwomens-bracelets%25Bracelets&q=7mm&start=0&sz=32">7mm Cable Bracelet<a></div>
        <div class="display-thickness-example" style="border-bottom-width: 9mm"><a target="_blank" href="https://www.davidyurman.com/search?prefn1=multiple_collection&prefv1=womens%2Fwomens-shop%2Fwomens-bracelets%25Bracelets&q=9mm&start=0&sz=32">9mm Cable Bracelet<a></div>
        <div class="display-thickness-example" style="border-bottom-width: 10mm"><a target="_blank" href="https://www.davidyurman.com/search?prefn1=multiple_collection&prefv1=womens%2Fwomens-shop%2Fwomens-bracelets%25Bracelets&q=10mm&start=0&sz=32">10mm Cable Bracelet<a></div>
        <div class="display-thickness-example" style="border-bottom-width: 10.5mm"><a target="_blank" href="https://www.davidyurman.com/search?prefn1=multiple_collection&prefv1=womens%2Fwomens-shop%2Fwomens-bracelets%25Bracelets&q=10.5mm&start=0&sz=32">10.5mm Cable Bracelet<a></div>`,
        id="notPrdSzngCuffTkns"
    ),
    new note (
        title="Universal Ring Size Chart",
        subtitle="",
        filter = "styling",
        html = `<p>See recommend cuff sizes and how bracelet's compare across genders<br><i class="bi bi-check2"></i> = Standard Size | <i class="bi bi-check2-circle"></i> = Most Common Size</i></p><br>
        <table class="hoverTable">
            <tr><th style="width: 150px;">Finger Size</th> <th style="width: 100px;">US</th> <th style="width: 100px;">FR</th> <th style="width: 100px;">UK</th> <th style="width: 100px;">Kid's</th> <th style="width: 100px;">Women's</th> <th style="width: 100px;">Men's</th></tr>
            <tr><td>4.14 cm</td>    <td>2</td>      <td>41.5</td>          <td>D</td>          <td><i class="bi bi-check2"></i></td>           <td></td>            <td></td></tr>
            <tr><td>4.29 cm</td>    <td>2.5</td>      <td>42.75</td>          <td>E</td>          <td><i class="bi bi-check2"></i></td>           <td></td>            <td></td></tr>
            <tr><td>4.41 cm</td>    <td>3</td>      <td>44</td>          <td>F</td>          <td><i class="bi bi-check2"></i></td>           <td></td>            <td></td></tr>
            <tr><td>4.54 cm</td>    <td>3.5</td>      <td>45.5</td>          <td>G 1/2</td>          <td><i class="bi bi-check2"></i></td>           <td></td>            <td></td></tr>
            <tr><td>4.07 cm</td>    <td>4</td>      <td>47</td>          <td>H 1/2</td>          <td><i class="bi bi-check2"></i></td>           <td><i class="bi bi-check2"></i></td>            <td></td></tr>
            <tr><td>4.80 cm</td>    <td>4.5</td>      <td>48</td>          <td>I 1/2</td>          <td></td>           <td><i class="bi bi-check2"></i></td>            <td></td></tr>
            <tr><td>4.90 cm</td>    <td>5</td>      <td>49.5</td>          <td>J 1/2</td>          <td></td>           <td><i class="bi bi-check2"></i></td>            <td></td></tr>
            <tr><td>5.05 cm</td>    <td>5.5</td>      <td>50.5</td>          <td>L</td>          <td></td>           <td><i class="bi bi-check2"></i></td>            <td></td></tr>
            <tr><td>5.18 cm</td>    <td>6</td>      <td>52</td>          <td>M</td>          <td></td>           <td class="common" title="Common Women's Size"><i class="bi bi-check2-circle"></i></td>            <td></td></tr>
            <tr><td>5.30 cm</td>    <td>6.5</td>      <td>53</td>          <td>N</td>          <td></td>           <td class="common" title="Common Women's Size"><i class="bi bi-check2-circle"></i></td>            <td></td></tr>
            <tr><td>5.43 cm</td>    <td>7</td>      <td>54.5</td>          <td>O</td>          <td></td>           <td class="common" title="Common Women's Size"><i class="bi bi-check2-circle"></i></td>            <td><i class="bi bi-check2"></i></td></tr>
            <tr><td>5.56 cm</td>    <td>7.5</td>      <td>56</td>          <td>P</td>          <td></td>           <td><i class="bi bi-check2"></i></td>            <td><i class="bi bi-check2"></i></td></tr>
            <tr><td>5.68 cm</td>    <td>8</td>      <td>57</td>          <td>Q</td>          <td></td>           <td><i class="bi bi-check2"></i></td>            <td><i class="bi bi-check2"></i></td></tr>
            <tr><td>5.81 cm</td>    <td>8.5</td>      <td>58.5</td>          <td>R</td>          <td></td>           <td><i class="bi bi-check2"></i></td>            <td><i class="bi bi-check2"></i></td></tr>
            <tr><td>5.94 cm</td>    <td>9</td>      <td>59.5</td>          <td>S</td>          <td></td>           <td><i class="bi bi-check2"></i></td>            <td class="common" title="Common Men's Size"><i class="bi bi-check2-circle"></i></td></tr>
            <tr><td>6.07 cm</td>    <td>9.5</td>      <td>61</td>          <td>T</td>          <td></td>           <td></td>            <td class="common" title="Common Men's Size"><i class="bi bi-check2-circle"></i></td></tr>
            <tr><td>6.19 cm</td>    <td>10</td>      <td>62.5</td>          <td>T 1/2</td>          <td></td>           <td></td>            <td class="common" title="Common Men's Size"><i class="bi bi-check2-circle"></i></td></tr>
            <tr><td>6.32 cm</td>    <td>10.5</td>      <td>63.5</td>          <td>U 1/2</td>          <td></td>           <td></td>            <td><i class="bi bi-check2"></i></td></tr>
            <tr><td>6.45 cm</td>    <td>11</td>      <td>65</td>          <td>V 1/2</td>          <td></td>           <td></td>            <td><i class="bi bi-check2"></i></td></tr>
            <tr><td>6.57 cm</td>    <td>11.5</td>      <td>66</td>          <td>W 3/4</td>          <td></td>           <td></td>            <td><i class="bi bi-check2"></i></td></tr>
            <tr><td>6.73 cm</td>    <td>12</td>      <td>67.5</td>          <td>Y</td>          <td></td>           <td></td>            <td><i class="bi bi-check2"></i></td></tr>
            <tr><td>6.85 cm</td>    <td>12.5</td>      <td>69</td>          <td>Z</td>          <td></td>           <td></td>            <td><i class="bi bi-check2"></i></td></tr>
            <tr><td>6.98 cm</td>    <td>13</td>      <td>70</td>          <td>Z + 1</td>          <td></td>           <td></td>            <td><i class="bi bi-check2"></i></td></tr>
        </table>`,
        id="notPrdSzngRingAllA"
    ),
    new note (
        title="Visual Ring Size Chart",
        subtitle="",
        filter = "styling",
        html = `K = Kid's | W = Women's | M = Men's<br><i>*Sizes listed are relative to the Credit Card Scale Tool.</i><br><br>
        <div class="display-size-example" title="4.14cm" style="width: 1.32cm; height: 1.32cm;">2<br>K</div>
        <div class="display-size-example" title="4.29cm" style="width: 1.36cm; height: 1.36cm;">2.5<br>K</div>
        <div class="display-size-example" title="4.41cm" style="width: 1.40cm; height: 1.40cm;">3<br>K</div>
        <div class="display-size-example" title="4.54cm" style="width: 1.45cm; height: 1.45cm;">3.5<br>K</div>
        <div class="display-size-example" title="4.70cm" style="width: 1.50cm; height: 1.50cm;">4<br>KW</div>
        <div class="display-size-example" title="4.80cm" style="width: 1.53cm; height: 1.53cm;">4.5<br>W</div>
        <div class="display-size-example" title="4.90cm" style="width: 1.56cm; height: 1.56cm;">5<br>W</div>
        <div class="display-size-example" title="5.05cm" style="width: 1.61cm; height: 1.61cm;">5.5<br>W</div>
        <div class="display-size-example" title="5.18cm" style="width: 1.65cm; height: 1.65cm;">6<br>W</div>
        <div class="display-size-example" title="5.30cm" style="width: 1.69cm; height: 1.69cm;">6.5<br>W</div>
        <div class="display-size-example" title="5.43cm" style="width: 1.73cm; height: 1.73cm;">7<br>WM</div>
        <div class="display-size-example" title="5.56cm" style="width: 1.77cm; height: 1.77cm;">7.5<br>WM</div>
        <div class="display-size-example" title="5.68cm" style="width: 1.81cm; height: 1.81cm;">8<br>WM</div>
        <div class="display-size-example" title="5.81cm" style="width: 1.85cm; height: 1.85cm;">8.5<br>WM</div>
        <div class="display-size-example" title="5.94cm" style="width: 1.89cm; height: 1.89cm;">9<br>WM</div>
        <div class="display-size-example" title="6.07cm" style="width: 1.93cm; height: 1.93cm;">9.5<br>M</div>
        <div class="display-size-example" title="6.19cm" style="width: 1.97cm; height: 1.97cm;">10<br>M</div>
        <div class="display-size-example" title="6.32cm" style="width: 2.01cm; height: 2.01cm;">10.5<br>M</div>
        <div class="display-size-example" title="6.45cm" style="width: 2.05cm; height: 2.05cm;">11<br>M</div>
        <div class="display-size-example" title="6.57cm" style="width: 2.09cm; height: 2.09cm;">11.5<br>M</div>
        <div class="display-size-example" title="6.73cm" style="width: 2.14cm; height: 2.14cm;">12<br>M</div>
        <div class="display-size-example" title="6.85cm" style="width: 2.18cm; height: 2.18cm;">12.5<br>M</div>
        <div class="display-size-example" title="6.98cm" style="width: 2.22cm; height: 2.22cm;">13<br>M</div>`,
        id="notPrdSzngRingAllB"
    ),
    new note (
        title="Pendant & Coin Size Comparisons",
        subtitle="",
        filter = "styling",
        html = `<i>*Sizes listed are in millimeters, and relative to the Credit Card Scale Tool.</i><br><br>
        <div class="display-size-example" style="width: 17.9mm; height: 17.9mm;">Dime<br>17.9mm</div>
        <div class="display-size-example" style="width: 19mm; height: 19mm;">Penny<br>19mm</div>
        <div class="display-size-example" style="width: 21.2mm; height: 21.2mm;">Nickel<br>21.2mm</div>
        <div class="display-size-example" style="width: 24.26mm; height: 24.26mm;">Quarter<br>24.26</div>`,
        id="notPrdSzngPndtCoin"
    ),
    new note (
        title="Cable Collectibles Size Comparison",
        subtitle="",
        filter = "styling",
        html = `<i>*Sizes listed are in millimeters, and relative to the Credit Card Scale Tool.</i><br><br>
        <div><div class="display-size-example" style="width: 10mm; height: 10mm;">10mm</div> Initial Charm Necklace in 18K Yellow or White Gold</div>
        <div><div class="display-size-example" style="width: 11mm; height: 11mm;">11mm</div> Cable Collectibles in 18K Yellow or White Gold</div>
        <div><div class="display-size-example" style="width: 18mm; height: 18mm;">18mm</div> Initial Charm Necklace in Sterling Silver</div>`,
        id="notPrdSzngPndtCablColl"
    ),
    new note (
        title="Albion Stone Size Comparison",
        subtitle="",
        filter = "styling",
        html = `<i>*Sizes listed are in millimeters, and relative to the Credit Card Scale Tool.</i><br><br>
        <div class="display-size-example" style="width: 7mm; height: 7mm; border-radius: 2mm;">7</div>
        <div class="display-size-example" style="width: 11mm; height: 11mm; border-radius: 3mm;">11</div>
        <div class="display-size-example" style="width: 14mm; height: 14mm; border-radius: 4mm;">14</div>
        <div class="display-size-example" style="width: 17mm; height: 17mm; border-radius: 4mm;">17</div>
        <div class="display-size-example" style="width: 12mm; height: 12mm;">12</div>
        <div class="display-size-example" style="width: 4mm; height: 4mm; border-radius: 1mm;">4</div>
        `,
        id="notPrdSzngCltnAlbn"
    ),
    new note (
        title="Chatelaine Stone Size Comparison",
        subtitle="",
        filter = "styling",
        html = `<i>*Sizes listed are in millimeters, and relative to the Credit Card Scale Tool.</i><br><br>
        <div class="display-size-example" style="width: 8mm; height: 8mm; border-radius: 2mm;">8</div>
        <div class="display-size-example" style="width: 11mm; height: 11mm; border-radius: 3mm;">11</div>
        <div class="display-size-example" style="width: 14mm; height: 14mm; border-radius: 4mm;">14</div>
        <div class="display-size-example" style="width: 8mm; height: 8mm;">8</div>
        <div class="display-size-example" style="width: 4mm; height: 4mm; border-radius: 1mm;">4</div>
        `,
        id="notPrdSzngCltnCtln"
    ),
    new note (
        title="Wheaton Stone Size Comparison",
        subtitle="",
        filter = "styling",
        html = `<i>*Sizes listed are in millimeters, and relative to the Credit Card Scale Tool.</i><br><br>
        <div class="display-size-example" style="width: 8mm; height: 10mm;  border-top-left-radius: 50% 25%; border-top-right-radius: 50% 25%; border-bottom-left-radius: 50% 25%; border-bottom-right-radius: 50% 25%;">10</div>
        <div class="display-size-example" style="width: 12mm; height: 16mm;  border-top-left-radius: 50% 25%; border-top-right-radius: 50% 25%; border-bottom-left-radius: 50% 25%; border-bottom-right-radius: 50% 25%;">16</div>
        `,
        id="notPrdSzngCltnWhtn"
    ),
    new note (
        title="Streamline Tag Size Comparison",
        subtitle="",
        filter = "styling",
        html = `<i>*Sizes listed are in millimeters, and relative to the Credit Card Scale Tool.</i><br><br>
        <div class="display-size-example" style="width: 14.3mm; height: 27mm; border-top-left-radius: 50% 15%; border-top-right-radius: 50% 15%; border-bottom-left-radius: 50% 15%; border-bottom-right-radius: 50% 15%;">D25442<br>14.3 x 27</div>
        <div class="display-size-example" style="width: 18.5mm; height: 35mm; border-top-left-radius: 50% 15%; border-top-right-radius: 50% 15%; border-bottom-left-radius: 50% 15%; border-bottom-right-radius: 50% 15%;">D25078<br>18.5 x 35</div>
        <div class="display-size-example" style="width: 23mm; height: 42mm; border-top-left-radius: 50% 15%; border-top-right-radius: 50% 15%; border-bottom-left-radius: 50% 15%; border-bottom-right-radius: 50% 15%;">D25319<br>23 x 42</div>
        `,
        id="notPrdSzngCltnStml"
    ),
    new note (
        title="Spiritual Bead Size Comparison",
        subtitle="",
        filter = "styling",
        html = `<i>*Sizes listed are in millimeters, and relative to the Credit Card Scale Tool.</i><br><br>
        <p>4mm Spiritual Beads</p><br>
        <div>
            <div class="display-size-example" style="width: 4mm; height: 4mm; margin-right: 0"></div>
        </div>

        <p>6mm Spiritual Beads</p><br>
        <div>
            <div class="display-size-example" style="width: 6mm; height: 6mm; margin-right: 0"></div>
        </div>

        <p>8mm Spiritual Beads</p><br>
        <div>
            <div class="display-size-example" style="width: 8mm; height: 8mm; margin-right: 0"></div>
        </div>
        `,
        id="notPrdSzngCltnSptlBeds"
    ),
    new note (
        title="Virtual Box Chain Thickness",
        subtitle="",
        filter = "styling",
        html = `<i>*Sizes listed are in millimeters, and relative to the Credit Card Scale Tool.</i><br><br>
        <div class="display-thickness-example" style="border-bottom-width: 1.7mm"><a target="_blank" href="https://www.davidyurman.com/search?prefn1=multiple_collection&prefv1=mens%2Fmens-shop%2Fmens-necklaces-and-chains%25Necklaces%20%26%20Chains%7Cwomens%2Fwomens-shop%2Fwomens-necklaces%25Necklaces&q=1.7mm&start=0&sz=64">Baby Box Chain - 1.7mm</a></div>
        <div class="display-thickness-example" style="border-bottom-width: 2.6mm"><a target="_blank" href="https://www.davidyurman.com/search?prefn1=multiple_collection&prefv1=mens%2Fmens-shop%2Fmens-necklaces-and-chains%25Necklaces%20%26%20Chains&q=Double%20Box%20Chain&start=0&sz=32">Double Box Chain - 2.6mm</a></div>
        <div class="display-thickness-example" style="border-bottom-width: 2.7mm"><a target="_blank" href="https://www.davidyurman.com/search?prefn1=multiple_collection&prefv1=mens%2Fmens-shop%2Fmens-necklaces-and-chains%25Necklaces%20%26%20Chains%7Cwomens%2Fwomens-shop%2Fwomens-necklaces%25Necklaces&q=2.7mm&start=0&sz=32">Small Box Chain - 2.7mm</a></div>
        <div class="display-thickness-example" style="border-bottom-width: 3.6mm"><a target="_blank" href="https://www.davidyurman.com/search?prefn1=multiple_collection&prefv1=mens%2Fmens-shop%2Fmens-necklaces-and-chains%25Necklaces%20%26%20Chains%7Cwomens%2Fwomens-shop%2Fwomens-necklaces%25Necklaces&q=3.6mm&start=0&sz=32">Medium Box Chain - 3.6mm</a></div>
        <div class="display-thickness-example" style="border-bottom-width: 4.8mm"><a target="_blank" href="https://www.davidyurman.com/search?prefn1=multiple_collection&prefv1=mens%2Fmens-shop%2Fmens-necklaces-and-chains%25Necklaces%20%26%20Chains%7Cwomens%2Fwomens-shop%2Fwomens-necklaces%25Necklaces&q=4.8mm&start=0&sz=32">Large Box Chain - 4.8mm</a></div>
        <div class="display-thickness-example" style="border-bottom-width: 5.2mm"><a target="_blank" href="https://www.davidyurman.com/search?prefn1=multiple_collection&prefv1=mens%2Fmens-shop%2Fmens-necklaces-and-chains%25Necklaces%20%26%20Chains%7Cwomens%2Fwomens-shop%2Fwomens-necklaces%25Necklaces&q=5.2mm&start=0&sz=32">Box Chain - 5.2mm</a></div>
        <div class="display-thickness-example" style="border-bottom-width: 6mm"><a target="_blank" href="https://www.davidyurman.com/search?prefn1=multiple_collection&prefv1=mens%2Fmens-shop%2Fmens-necklaces-and-chains%25Necklaces%20%26%20Chains&q=Elongated%20Box%20Chain&start=0&sz=32">Elongated Box Chain - 6mm</a></div>
        <div class="display-thickness-example" style="border-bottom-width: 7.2mm"><a target="_blank" href="https://www.davidyurman.com/search?prefn1=multiple_collection&prefv1=mens%2Fmens-shop%2Fmens-necklaces-and-chains%25Necklaces%20%26%20Chains%7Cwomens%2Fwomens-shop%2Fwomens-necklaces%25Necklaces&q=7.2mm&start=0&sz=32">Box Chain - 7.2mm</a></div>`,
        id="notPrdSzngCltnBxCh"
    ),
    new note (
        title="Narvar Return Reason Codes",
        subtitle="",
        filter = "returns",
        html = `<table class="hoverTable">
            <tr>
                <th style="width: 200px">Return Reason</th>
                <th style="width: 100px">Exchange</th>
                <th style="width: 100px">Refund</th>
                <th style="width: 200px">Merchandise Credit</th>
            </tr>
            <tr>
                <td>Change Mind</td>
                <td>1A</td>
                <td>1B</td>
                <td>1C</td>
            </tr>
            <tr>
                <td>Wrong size/color</td>
                <td>2A</td>
                <td>2B</td>
                <td>2C</td>
            </tr>
            <tr>
                <td>Not What I ordered</td>
                <td>3A</td>
                <td>3B</td>
                <td>3C</td>
            </tr>
            <tr>
                <td>Gift</td>
                <td>4A</td>
                <td>4B</td>
                <td>4C</td>
            </tr>
            <tr>
                <td>Defective/Damage</td>
                <td>5A</td>
                <td>5B</td>
                <td>5C</td>
            </tr>
            <tr>
                <td>Missing Item</td>
                <td>6A</td>
                <td>6B</td>
                <td>6C</td>
            </tr>
            <tr>
                <td>Did Not Arrive in Time</td>
                <td>7A</td>
                <td>7B</td>
                <td>7C</td>
            </tr>
            <tr>
                <td>Not as Pictured</td>
                <td>8A</td>
                <td>8B</td>
                <td>8C</td>
            </tr>
        </table>
        <br>
        <p><i>All refunds issued back to their original form of payment.</i></p>`,
        id="notRtnNrvrResnCode"
    ),
    new note (
        title="2023 Loyalty Gift Card",
        subtitle="",
        filter = "holiday",
        html = `
        <p><b>Launch Dates:</b> 10/15 (Web), 10/18 (Physical)</p>
        <p><b>Expiration Date:</b> &repl:policyLGCExpiration<p>
        <br>
        <table class="hoverTable">
            <tr>
                <th style="width: 100px">Tier</th><th style="width: 100px">Digital</th><th style="width: 100px">Physical</th><th style="width: 100px">Value</th>
            <tr>
            <tr>
                <td>Tier 1</td><td>Yes</td><td>Yes</td><td>$750</td>
            </tr>
            <tr>
                <td>Tier 2</td><td>Yes</td><td>Select</td><td>$500</td>
            </tr>
            <tr>
                <td>Tier 3</td><td>Yes</td><td>Select</td><td>$300</td>
            </tr>
            <tr>
                <td>Tier 4</td><td>Yes</td><td>Select</td><td>$200</td>
            </tr>
        </table>`,
        id="notHolLGC"
    ),
    new note (
        title="Holiday Return Policies & Times",
        subtitle="",
        filter = "holiday",
        html = `<p>Purchases made &repl:policyUsReturnHolidayStart can be returned &repl:policyUsReturnHolidayEnd<br><br>
        <h3>Estimated Holiday Return Processing Times</h3>
        <p>Extended holiday processing times begin the first business day after Christmas<p><br>
        <table class="hoverTable">
            <tr>
                <th style="width: 150px;">Reason</th>
                <th style="width: 150px;">Estimated Time</th>
            </tr>
            <tr>
                <td>Refund</td>
                <td>2-3 Weeks</td>
            </tr>
            <tr>
                <td>Exchange</td>
                <td>2-3 Weeks</td>
            </tr>
            <tr>
                <td>Merchandise Credit</td>
                <td>2-3 Weeks</td>
            </tr>
        </table>`,
        id="notRtnPlcyHldy"
    )
]

//----------------------------------------------------------------------------------------------------
//
//  DATA: Tools
//
//----------------------------------------------------------------------------------------------------

class tool {
    constructor (title="", subtitle="", warning="", filter="", html=``, id="", functions=[], hidden=false) {
        this.title = title;
        this.subtitle = subtitle;
        this.warning = warning;
        this.filter = filter;
        this.html = html;
        this.id = id;
        this.functions = functions;
        this.hidden = hidden;
    }
}

const tools = [
    new tool (
        title = "Generate FedEx Tracking URL",
        subtitle = "Generate your FedEx tracking URL below.",
        warning = "",
        filter ="fedex",
        html = `<p>Tracking Number:</p>
        <input type="text" id="trackingNumber" placeholder="Tracking Number"><br><br>
        <button class="textButton" onclick="generateTrackingUrl()" title="Generate FedEx URL"><i class="bi bi-gear"></i> Generate FedEx URL</button><br><br>
        <p id="generatedTracking"></p>`,
        id="tolFdxTrkgUrl",
        functions = [],
    ),
    new tool (
        title = "NarvarForMe (Out Of Policy Returns)",
        subtitle = "Use NarvarForMe to easily access Narvar, now with the ability to generate out of policy return labels for the US and Canada.",
        warning = "Not intended for use with Puerto Rico orders. Please work with YDI to create a commercial invoice.",
        filter ="",
        html = `<p>Order Number:</p>
        <input type="text" id="narvarOrder" placeholder="Order Number"><br><br>
        <p>Zip/Postal Code:</p>
        <input type="text" id="narvarZip" placeholder="Zip/Postal"><br><br>
        <p>Country:</p>
        <select class="element" id="narvarCountry">
            <option value="null" disabled selected>Country...</option>
            <option value="null" disabled></option>
            <option value="en_us">United States (Non-Puerto Rico)</option>
            <option value="en_ca">Canada</option>
        </select><br><br>
        <button class="textButton" onclick="go_to_narvar()" title="Generate Out Of Policy URL"><i class="bi bi-gear"></i> Generate Out Of Policy URL</button><br><br>
        <p id="narvarURL"></p>`,
        id="tolRtnNrvrOOPR",
        functions = [],
        hidden = true
    ),
    new tool (
        title = "Randomized Product Description",
        subtitle = "Having trouble thinking of the perfect product description? Let us help you!",
        warning = "",
        filter ="styling",
        html = `<p>Product Name:</p>
        <input type="text" id="styleNameForRandomizedPieceDescriptionInput" placeholder="Product Name"><br><br>
        <p>Product Qualities:</p>
        <select class="element" id="qualityForRandomizedPieceDescriptionInput">
            <option value="null">No Special Qualities</option>
            <option value="collection_wedding">Collection: Wedding</option>
            <option value="collection_eys">Collection: EYS</option>
            <option value="collection_artistSeries">Collection: Artist Series</option>
            <option value="collection_highJewelry">Collection: High Jewelry</option>
            <option value="contains_diamonds" title="Light colored Diamonds.\n\n&quot;White Diamonds, Cognac Diamonds, etc.&quot;">Contains: White Diamonds</option>
            <option value="contains_color_light" title="A gift for someone else's birthday.\n\n&quot;Prasiolite, Crystal, etc.&quot;">Contains: Light Gemstones</option>
            <option value="contains_color_vibrant" title="Pieces with strong colors.\n\n&quot;Citrine, Carnelian, etc.&quot;">Contains: Vibrant Gemstones</option>
            <option value="contains_color_dark" title="Pieces with dark stones.\n\n&quot;Black Onyx, Hampton Blue Topaz, etc.&quot;">Contains: Dark Gemstones</option>
            <option value="contains_color_mixed" title="Pieces with a variety of colors.\n\n&quot;Mixed Stones, Opal, etc.&quot;">Contains: Assorted Gemstones</option>
            <option value="contains_color_patterned" title="Stones with intricate patterns or designs.\n\n&quot;Pietersite, Agate...&quot;">Contains: Patterned Gemstones</option>
            <option value="design_petite">Design: Petite</option>
            <option value="design_personalized">Design: Personalized</option>
            <option value="style_bold">Style: Bold</option>
            <option value="style_classic">Style: Classic</option>
            <option value="style_eccentric">Style: Eccentric</option>
            <option value="style_elegant">Style: Elegant</option>
            <option value="style_modern">Style: Modern</option>
        </select><br><br>
        <p>Purchase Occassion:</p>
        <select class="element" id="occasionForRandomizedPieceDescriptionInput">
            <option value="null">No Occasion</option>
            <option value="gift_generic" title="A gift with an unspecified purpose.\n\n&quot;I want to buy a gift...&quot;">General: Gift</option>
            <option value="gift_holiday" title="A gift for the holiday season">Holidays: Gift</option>
            <option value="gift_birthday" title="A gift for someone else's birthday.\n\n&quot;I want to buy my son a birthday present...&quot;">Birthday: Gift</option>
            <option value="gift_graduation" title="A gift for someone else's graduation.\n\n&quot;My daughter is graduating...&quot;">Graduation: Gift</option>
            <option value="gift_date" title="A gift for someone else's date.\n\n&quot;I want to buy my date a gift...&quot;">Date: Gift</option>
            <option value="engagement" title="Someone is planning an engagement.\n\n&quot;I would like to know more about this engagement ring.&quot;">Engagement: General</option>
            <option value="wedding" title="Someone is getting married.\n\n&quot;I would like to buy my fiancé this ring...&quot;">Wedding: General</option>
            <option value="gift_wedding" title="A wedding gift for the couple.\n\n&quot;My friends are getting married...&quot;">Wedding: Gift (Couple)</option>
            <option value="gift_bride" title="A wedding gift for the bride.\n\n&quot;My friend is getting married...&quot;">Wedding: Gift (Bride)</option>
            <option value="gift_groom" title="A wedding gift for the groom.\n\n&quot;My friend is getting married...&quot;">Wedding: Gift (Groom)</option>
            <option value="anniversary" title="A purchase for someone's upcoming anniversary.\n\n&quot;Our anniversary is coming up...&quot;">Anniversary: General</option>
            <option value="gift_anniversary" title="A purchase for someone else's anniversary.\n\n&quot;My parents are celebrating their anniversary...&quot;">Anniversary: Gift</option>
            <option value="event" title="A purchase for an unspecified.\n\n&quot;I have an upcoming event...&quot;">Event: General</option>
            <option value="event_casual" title="A purchase for a casual event.\n\n&quot;I have an upcoming party...&quot;">Event: Casual</option>
            <option value="event_formal" title="A purchase for a formal event.\n\n&quot;I have an upcoming gala...&quot;">Event: Formal</option>
            <option value="collector" title="A purchase someone is adding to their collection.\n\n&quot;I'm a long time David Yurman customer...&quot;">Collector: General</option>
            <option value="gift_collector" title="A purchase to give to a collector.\n\n&quot;My mom is a huge David Yurman fan...&quot;">Collector: Gift</option>
        </select><br><br>
        <button class="textButton" onclick="randomizedPieceDescription(0)" title="Generate Neutral Description"><i class="bi bi-gender-ambiguous"></i> Neutral Description</button> <button class="textButton" onclick="randomizedPieceDescription(1)" title="Generate Feminine Description"><i class="bi bi-gender-female"></i> Feminine Description</button> <button class="textButton" onclick="randomizedPieceDescription(2)" title="Generate Masculine Description"><i class="bi bi-gender-male"></i> Masculine Description</button><br><br>
        <p id="styleNameForRandomizedPieceDescriptionOutput"></p>`,
        id="tolPrdRndmDescGntr",
        functions = [],
    ),
    new tool (
        title = "Locations",
        subtitle = "Learn more about David Yurman stores and key locations around the world.<br><i></i>",
        warning = "",
        filter ="general",
        html = `<select class="element" onchange="showBoutique()" id="boutiques">
        <option value="null" disabled selected>Select Your Location...</option>
        <option value="null" disabled></option>
        </select><br><br>
        <div id="boutique"></div>`,
        id="tolBtqLctnList",
        functions = ["addBoutiques"],
    ),
    new tool (
        title = "What's For Lunch?",
        subtitle = "Struggling to decide what to eat? Let us decide for you!<br><br>Add or remove preferences below and DART will randomly pick something for you.",
        warning = "",
        filter ="customercare",
        html = `<div>
            <button class="lunch-choice-off" title="We prefer something spicy with intense flavor." id="spicy" value="0" onclick="toggle('spicy')"><i class="bi bi-fire"></i> Spicy</button>
            <button class="lunch-choice-off" title="One of us is selective and prefers comfort food." id="familiar" value="0" onclick="toggle('familiar')"><i class="bi bi-heart-fill"></i> Familiar</button>
            <button class="lunch-choice-off" title="We would like something that's not US based." id="nonAmerican" value="0" onclick="toggle('nonAmerican')"><i class="bi bi-globe2"></i> International</button>
            <button class="lunch-choice-off" title="We don't want to spend a lot of money." id="cheap" value="0" onclick="toggle('cheap')"><i class="bi bi-piggy-bank"></i> Affordable</button>
            <button class="lunch-choice-off" title="We have limited time and want a fast option." id="quick" value="0" onclick="toggle('quick')"><i class="bi bi-fast-forward-fill"></i> Fast</button>
            <button class="lunch-choice-off" title="One of us prefers plant based options." id="nonAnimal" value="0" onclick="toggle('nonAnimal')"><i class="bi bi-flower1"></i> Plant Based</button>
            <button class="lunch-choice-off" title="We would like larger or filling portion sizes." id="filling" value="0" onclick="toggle('filling')"><i class="bi bi-cup-hot"></i> Filling</button>
        </div>
        <hr>
        <div>
            <button class="lunch-button" title="Generate an option based on your preferences." onclick="filterLunch ()">Pick For Me</button>
            <button class="lunch-button" id="output" onclick="find()" style="display: none;"></button>
        <div>`,
        id="tolCCrRndmLnchGntr",
        functions = [],
    ),
    new tool (
        title = "Credit Card Scale Tool",
        subtitle = "For all sizing charts, please reference a credit card with this tool to ensure all sizing is as accurate as possible.",
        warning = "",
        filter = "styling",
        html = `<p>Scale your monitor appropriately to match the card as best as possible.<br><br>To zoom your monitor in and out, hold the <b>Ctrl</b> key and press <b>+</b> or <b>-</b> on the keyboard,<br>or scroll the mouse wheel forward or backwards.</p><br>
        <div class="display-size-example" style="width: 3.375in; height: 2.125in; border-radius: 3mm; font-size: medium;">Place Your Credit Card Here</div>`,
        id="tolStyCredCardScal",
        functions = [],
    ),
    new tool (
        title = "Stone Codes",
        subtitle = "A list of stone codes.",
        warning = "",
        filter ="product",
        html = `<select class="element" id="stones" onchange="showStone()"></select><br><br>
        <img id="stone" class="elementSwatch">`,
        id="tolPrdStns",
        functions = ["addStones"],
    ),
    new tool (
        title = "Metal Codes",
        subtitle = "A list of metal codes.",
        warning = "",
        filter ="product",
        html = `<select class="element" id="metals" onchange="showMetal()"></select><br><br>
        <img id="metal" class="elementSwatch">
        `,
        id="tolPrdMtls",
        functions = ["addMetals"],
    ),
    new tool (
        title = "Chain Codes",
        subtitle = "A list of chain codes.",
        warning = "",
        filter ="product",
        html = `<select class="element" id="chains"></select>`,
        id="tolPrdChns",
        functions = ["addChains"],
    ),
    new tool (
        title = "Wholesale Phrases",
        subtitle = "A list of commonly used phrases to copy into emails and cases.",
        warning = "",
        filter ="wholesale",
        html = `<h3>Availability</h3>
        <div class="elementClickableContainer">
            <button class="element" onclick="copyToClipboard('Available')">Available</button>
            <button class="element" onclick="copyToClipboard('Limited Availability')">Limited Availability</button>
        </div>
        <br><br>
        <div class="elementClickableContainer">
            <button class="element" onclick="copyToClipboard('Not Available')">Not Available</button>
            <button class="element" onclick="copyToClipboard('Retired')">Retired</button>
        </div>
        <br><br>
        <div class="elementClickableContainer">
        <button class="element" onclick="copyToClipboard('DY Exclusive')">DY Exclusive</button>
        <button class="element" onclick="copyToClipboard('Not Produced')">Not Produced</button>
        </div><br><br>
        <h3>Closing Comments</h3>
        <div class="elementClickableContainer">
            <button class="element" onclick="copyToClipboard('Provided Availability')">Provided Availability</button>
            <button class="element" onclick="copyToClipboard('Booked & Confirmed')">Booked & Confirmed</button>
        </div><br><br>
        <div class="elementClickableContainer">
            <button class="element" onclick="copyToClipboard('Asked To Ship 2 Day')">Asked To Ship 2 Day</button>
            <button class="element" onclick="copyToClipboard('Asked To Ship Overnight')">Asked To Ship Overnight</button>
        </div><br><br>
        <div class="elementClickableContainer">
            <button class="element" onclick="copyToClipboard('Style Number Invalid')">Style Number Invalid</button>
        </div><br><br>
        <h3>Shipping Methods</h3>
        <div class="elementClickableContainer">
            <button class="element" onclick="copyToClipboard('FEDO')">FEDO</button>
            <button class="element" onclick="copyToClipboard('FED2')">FED2</button>
        </div><br><br>
        <h3>Misc</h3>
        <div class="elementClickableContainer">
            <button class="element" onclick="copyToClipboard('US RETAIL')">US RETAIL</button>
            <button class="element" onclick="copyToClipboard('US WS SP')">US WS SP</button>
        </div><br><br>
        <div class="elementClickableContainer">
            <button class="element" onclick="copyToClipboard('mmoore@davidyurman.com')">mmoore@davidyurman.com</button>
            <button class="element" onclick="copyToClipboard('ordermanagement@davidyurman.com')">ordermanagement@davidyurman.com</button>
        </div>`,
        id="tolWslPhrsShet",
        functions = [],
    ),
    new tool (
        title = "Bingo!",
        subtitle = "Achieve goals while having a bit of fun!",
        warning = "",
        filter ="customercare",
        html = `<div id="bingo">
        <div style="display: flex; align-items: center; justify-content: space-between;">
            <button class="lunch-choice-off" style="width: 150px; height: 150px;" id="bingo0" value="0" onclick="toggle('bingo0')">dawdwadaww</button>
            <button class="lunch-choice-off" style="width: 150px; height: 150px;" id="bingo1" value="0" onclick="toggle('bingo1')">dawdwadaww</button>
            <button class="lunch-choice-off" style="width: 150px; height: 150px;" id="bingo2" value="0" onclick="toggle('bingo2')">dawdwadaww</button>
            <button class="lunch-choice-off" style="width: 150px; height: 150px;" id="bingo3" value="0" onclick="toggle('bingo3')">dawdwadaww</button>
            <button class="lunch-choice-off" style="width: 150px; height: 150px;" id="bingo4" value="0" onclick="toggle('bingo4')">dawdwadaww</button>
        </div>
        <div style="display: flex; align-items: center; justify-content: space-between;">
            <button class="lunch-choice-off" style="width: 150px; height: 150px;" id="bingo5" value="0" onclick="toggle('bingo5')">dawdwadaww</button>
            <button class="lunch-choice-off" style="width: 150px; height: 150px;" id="bingo6" value="0" onclick="toggle('bingo6')">dawdwadaww</button>
            <button class="lunch-choice-off" style="width: 150px; height: 150px;" id="bingo7" value="0" onclick="toggle('bingo7')">dawdwadaww</button>
            <button class="lunch-choice-off" style="width: 150px; height: 150px;" id="bingo8" value="0" onclick="toggle('bingo8')">dawdwadaww</button>
            <button class="lunch-choice-off" style="width: 150px; height: 150px;" id="bingo9" value="0" onclick="toggle('bingo9')">dawdwadaww</button>
        </div>
        <div style="display: flex; align-items: center; justify-content: space-between;">
            <button class="lunch-choice-off" style="width: 150px; height: 150px;" id="bingo10" value="0" onclick="toggle('bingo10')">dawdwadaww</button>
            <button class="lunch-choice-off" style="width: 150px; height: 150px;" id="bingo11" value="0" onclick="toggle('bingo11')">dawdwadaww</button>
            <button class="lunch-choice-on" style="width: 150px; height: 150px;" id="bingoFree" value="0">Free</button>
            <button class="lunch-choice-off" style="width: 150px; height: 150px;" id="bingo12" value="0" onclick="toggle('bingo12')">dawdwadaww</button>
            <button class="lunch-choice-off" style="width: 150px; height: 150px;" id="bingo13" value="0" onclick="toggle('bingo13')">dawdwadaww</button>
        </div>
        <div style="display: flex; align-items: center; justify-content: space-between;">
            <button class="lunch-choice-off" style="width: 150px; height: 150px;" id="bingo14" value="0" onclick="toggle('bingo14')">dawdwadaww</button>
            <button class="lunch-choice-off" style="width: 150px; height: 150px;" id="bingo15" value="0" onclick="toggle('bingo15')">dawdwadaww</button>
            <button class="lunch-choice-off" style="width: 150px; height: 150px;" id="bingo16" value="0" onclick="toggle('bingo16')">dawdwadaww</button>
            <button class="lunch-choice-off" style="width: 150px; height: 150px;" id="bingo17" value="0" onclick="toggle('bingo17')">dawdwadaww</button>
            <button class="lunch-choice-off" style="width: 150px; height: 150px;" id="bingo18" value="0" onclick="toggle('bingo18')">dawdwadaww</button>
        </div>
        <div style="display: flex; align-items: center; justify-content: space-between;">
            <button class="lunch-choice-off" style="width: 150px; height: 150px;" id="bingo19" value="0" onclick="toggle('bingo19')">dawdwadaww</button>
            <button class="lunch-choice-off" style="width: 150px; height: 150px;" id="bingo20" value="0" onclick="toggle('bingo20')">dawdwadaww</button>
            <button class="lunch-choice-off" style="width: 150px; height: 150px;" id="bingo21" value="0" onclick="toggle('bingo21')">dawdwadaww</button>
            <button class="lunch-choice-off" style="width: 150px; height: 150px;" id="bingo22" value="0" onclick="toggle('bingo22')">dawdwadaww</button>
            <button class="lunch-choice-off" style="width: 150px; height: 150px;" id="bingo23" value="0" onclick="toggle('bingo23')">dawdwadaww</button>
        </div></div><br>
        <button class="textButton" onclick="generateBingoBoard()">Generate A New Bingo Board</button>`,
        id="tolCCrBngo",
        functions = ["addBingo"],
    ),
]

//----------------------------------------------------------------------------------------------------
//
//  DATA: Color Scheme
//
//----------------------------------------------------------------------------------------------------

class scheme {
    constructor (title="Light Mode", icon="circle-fill", color="lightgrey", background="white", primary="white", secondary="black", accentLight="lightgrey", accentMedium="darkgrey", accentDark="grey", accentWarning="red", filter="", rainbow=0, effect=0, description="", blur=false, font="'Segoe UI', Tahoma, Geneva, Verdana, sans-serif") {
        this.title = title;
        this.icon = icon,
        this.color = color;
        this.background = background;
        this.primary = primary;
        this.secondary = secondary;
        this.accentLight = accentLight;
        this.accentMedium = accentMedium;
        this.accentDark = accentDark;
        this.accentWarning = accentWarning;
        this.filter = filter;
        this.rainbow = rainbow;
        this.effect = effect;
        this.description = description;
        this.blur = blur;
        this.font = font;
    }
}

const schemes = [
    new scheme (
        title = "Classic - Light",
        icon = "circle-half",
        color = "#ddd",
        background = "white",
        primary = "white",
        secondary = "black",
        accentLight = "lightgrey",
        accentMedium = "darkgrey",
        accentDark = "grey",
        accentWarning = "red",
        filter = "light",
        rainbow = 0,
        effect = 0,
        description = "The classic DART theme. Clean, light, and professional.",
        blur = false,
        font = "'Kaisei Decol', serif"
    ),
    new scheme (
        title = "Classic - Dark",
        icon = "circle-fill",
        color = "#444",
        background = "#222",
        primary = "#222",
        secondary = "lightgrey",
        accentLight = "grey",
        accentMedium = "darkgrey",
        accentDark = "white",
        accentWarning = "red",
        filter = "dark",
        rainbow = 0,
        effect = 0,
        description = "The darker classic DART theme with muted greys.",
        blur = false,
        font = "'Kaisei Decol', serif"
    ),
    new scheme (
        title = "Classic - Light Red",
        icon = "circle-half",
        color = "red",
        background = "white",
        primary = "white",
        secondary = "black",
        accentLight = "IndianRed",
        accentMedium = "darkgrey",
        accentDark = "red",
        accentWarning = "darkred",
        filter = "light",
        rainbow = 0,
        effect = 0,
        description = "The classic light DART theme with red accents.",
        blur = false,
        font = "'Kaisei Decol', serif"
    ),
    new scheme (
        title = "Classic - Dark Red",
        icon = "circle-fill",
        color = "darkred",
        background = "#222",
        primary = "#222",
        secondary = "lightgrey",
        accentLight = "darkred",
        accentMedium = "darkgrey",
        accentDark = "indianred",
        accentWarning = "gold",
        filter = "dark",
        rainbow = 0,
        effect = 0,
        description = "The classic dark DART theme with red accents.",
        blur = false,
        font = "'Kaisei Decol', serif"
    ),
    new scheme (
        title = "Classic - Light Green",
        icon = "circle-half",
        color = "green",
        background = "white",
        primary = "white",
        secondary = "black",
        accentLight = "lightgreen",
        accentMedium = "darkgrey",
        accentDark = "green",
        accentWarning = "red",
        filter = "light",
        rainbow = 0,
        effect = 0,
        description = "The classic light DART theme with green accents.",
        blur = false,
        font = "'Kaisei Decol', serif"
    ),
    new scheme (
        title = "Classic - Dark Green",
        icon = "circle-fill",
        color = "darkgreen",
        background = "#222",
        primary = "#222",
        secondary = "lightgrey",
        accentLight = "darkgreen",
        accentMedium = "darkgrey",
        accentDark = "lightgreen",
        accentWarning = "red",
        filter = "dark",
        rainbow = 0,
        effect = 0,
        description = "The classic dark DART theme with green accents.",
        blur = false,
        font = "'Kaisei Decol', serif"
    ),
    new scheme (
        title = "Classic - Light Blue",
        icon = "circle-half",
        color = "blue",
        background = "white",
        primary = "white",
        secondary = "black",
        accentLight = "lightblue",
        accentMedium = "darkgrey",
        accentDark = "blue",
        accentWarning = "darkorange",
        filter = "light",
        rainbow = 0,
        effect = 0,
        description = "The classic light DART theme with blue accents.",
        blur = false,
        font = "'Kaisei Decol', serif"
    ),
    new scheme (
        title = "Classic - Dark Blue",
        icon = "circle-fill",
        color = "darkblue",
        background = "#222",
        primary = "#222",
        secondary = "lightgrey",
        accentLight = "darkblue",
        accentMedium = "darkgrey",
        accentDark = "lightblue",
        accentWarning = "orange",
        filter = "dark",
        rainbow = 0,
        effect = 0,
        description = "The classic dark DART theme with blue accents.",
        blur = false,
        font = "'Kaisei Decol', serif"
    ),
    new scheme (
        title = "Classic - Light Pink",
        icon = "circle-half",
        color = "pink",
        background = "white",
        primary = "white",
        secondary = "black",
        accentLight = "pink",
        accentMedium = "darkgrey",
        accentDark = "PaleVioletRed",
        accentWarning = "darkgreen",
        filter = "light",
        rainbow = 0,
        effect = 0,
        description = "The classic light DART theme with pink accents.",
        blur = false,
        font = "'Kaisei Decol', serif"
    ),
    new scheme (
        title = "Classic - Dark Pink",
        icon = "circle-fill",
        color = "PaleVioletRed",
        background = "#222",
        primary = "#222",
        secondary = "lightgrey",
        accentLight = "MediumVioletRed",
        accentMedium = "darkgrey",
        accentDark = "PaleVioletRed",
        accentWarning = "darkgreen",
        filter = "dark",
        rainbow = 0,
        effect = 0,
        description = "The classic dark DART theme with pink accents.",
        blur = false,
        font = "'Kaisei Decol', serif"
    ),
    new scheme (
        title = "Ruby",
        icon = "gem",
        color = "darkred",
        background = "linear-gradient(to bottom, #1d0305 400px, #140203 800px, #140203)",
        primary = "#1d0305",
        secondary = "#f9cfd3",
        accentLight = "#8b0f1b",
        accentMedium = "#b71423",
        accentDark = "#b71423",
        accentWarning = "darkred",
        filter = "gemstones",
        rainbow = 0,
        effect = 0,
        description = "A bold red theme with deep hues inspired by rubies.",
        blur = true,
        font = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    ),
    new scheme (
        title = "Emerald",
        icon = "gem",
        color = "darkgreen",
        background = "linear-gradient(to bottom, #001805 400px, #001404 800px, #001404)",
        primary = "#001805",
        secondary = "#c2fece",
        accentLight = "#016815",
        accentMedium = "#015812",
        accentDark = "#92fda7",
        accentWarning = "lightgreen",
        filter = "gemstones",
        rainbow = 0,
        effect = 0,
        description = "A bold green theme with deep hues inspired by emeralds.",
        blur = true,
        font = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    ),
    new scheme (
        title = "Sapphire",
        icon = "gem",
        color = "darkblue",
        background = "linear-gradient(to bottom, #031025 400px, #000b1c 800px, #000b1c)",
        primary = "#031025",
        secondary = "#b1b1fe",
        accentLight = "#082e69",
        accentMedium = "#8080ff",
        accentDark = "#88f",
        accentWarning = "green",
        filter = "gemstones",
        rainbow = 0,
        effect = 0,
        description = "A bold blue theme with deep hues inspired by rubies.",
        blur = true,
        font = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    ),
    new scheme (
        title = "Morganite",
        icon = "gem",
        color = "pink",
        background = "linear-gradient(to bottom, #ffeaee 400px, #f2dfe3 800px, #f2dfe3)",
        primary = "#ffeaee",
        secondary = "#AA336A",
        accentLight = "lightpink",
        accentMedium = "#AA336A",
        accentDark = "#AA336A",
        accentWarning = "darkred",
        filter = "gemstones",
        rainbow = 0,
        effect = 0,
        description = "A soft pink theme with pleasant hues colors inspired by rubies.",
        blur = true,
        font = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    ),
    new scheme (
        title = "Confetti - Light",
        icon = "balloon-fill",
        color = "blue",
        background = "white",
        primary = "white",
        secondary = "black",
        accentLight = "lightgrey",
        accentMedium = "darkgrey",
        accentDark = "grey",
        accentWarning = "red",
        filter = "themed",
        rainbow = 1,
        effect = 3,
        description = "The classic light DART theme with soft rainbow accents.",
        blur = true,
        font = "'Kaisei Decol', serif"
    ),
    new scheme (
        title = "Confetti - Dark",
        icon = "balloon-fill",
        color = "darkblue",
        background = "#222",
        primary = "#222",
        secondary = "lightgrey",
        accentLight = "grey",
        accentMedium = "darkgrey",
        accentDark = "white",
        accentWarning = "darkred",
        filter = "themed",
        rainbow = 2,
        effect = 3,
        description = "The classic dark DART theme with rich rainbow accents.",
        blur = true,
        font = "'Kaisei Decol', serif"
    ),
    new scheme (
        title = "Holiday 2021",
        icon = "snow2",
        color = "#444",
        background = "#111",
        primary = "#111",
        secondary = "grey",
        accentLight = "#333",
        accentMedium = "grey",
        accentDark = "lightgrey",
        accentWarning = "cornsilk",
        filter = "seasonal",
        rainbow = 0,
        effect = 1,
        description = "A winter theme inspired by a snow covered Central Park at night.",
        blur = false,
        font = "'Kaisei Decol', serif"
    ),
    new scheme (
        title = "Holiday 2022",
        icon = "snow2",
        color = "lightgrey",
        background = "#cebca4",
        primary = "#cebca4",
        secondary = "black",
        accentLight = "white",
        accentMedium = "#444",
        accentDark = "white",
        accentWarning = "brown",
        filter = "seasonal",
        rainbow = 0,
        effect = 1,
        description = "The winter theme inspired by a paper crafts and drawings with warm tones.",
        blur = false,
        font = "'Kaisei Decol', serif"
    ),
    new scheme (
        title = "Sunset",
        icon = "brightness-alt-high-fill",
        color = "orange",
        background = "linear-gradient(to bottom, #080040 400px, #040024 800px, #040024)",
        primary = "#080040",
        secondary = "magenta",
        accentLight = "#600",
        accentMedium = "OrangeRed",
        accentDark = "tomato",
        accentWarning = "tomato",
        filter = "themed",
        rainbow = 0,
        effect = 0,
        description = "A vintage 80's inspired theme, with bold, electric colors.",
        blur = true,
        font = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    ),
    new scheme (
        title = "Novella",
        icon = "stars",
        color = "hotpink",
        background = "white",
        primary = "white",
        secondary = "#433",
        accentLight = "pink",
        accentMedium = "#C19A6B",
        accentDark = "hotpink",
        accentWarning = "DarkOrange",
        filter = "collections",
        rainbow = 0,
        effect = 0,
        description = "The light DART adorned in gold, with accents of pink and orange",
        blur = false,
        font = "'Kaisei Decol', serif"
    ),
    new scheme (
        title = "Renaissance",
        icon = "diamond-half",
        color = "darkblue",
        background = "linear-gradient(to bottom, #C19A6B 400px, #9C7D57 800px, #9C7D57)",
        primary = "#9C7D57",
        secondary = "white",
        accentLight = "darkred",
        accentMedium = "#665D1E",
        accentDark = "gold",
        accentWarning = "darkblue",
        filter = "collections",
        rainbow = 3,
        effect = 0,
        description = "A gold theme with gem-like accent colors.",
        blur = false,
        font = "'Kaisei Decol', serif"
    ),
    new scheme (
        title = "Cairo",
        icon = "triangle-fill",
        color = "#C19A6B",
        background = "linear-gradient(to bottom, #101010 400px, #202020 800px, #202020)",
        primary = "#202020",
        secondary = "lightblue",
        accentLight = "#665D1E",
        accentMedium = "#C19A6B",
        accentDark = "tan",
        accentWarning = "gold",
        filter = "collections",
        rainbow = 0,
        effect = 0,
        description = "An Egyptian inspired theme with soft blues and rich gold tones.",
        blur = false,
        font = "Copperplate, Papyrus, fantasy"
    ),
    new scheme (
        title = "Waves",
        icon = "grid-3x3-gap-fill",
        color = "darkred",
        background = "linear-gradient(to bottom, #0B0B0B 400px, #111111 800px, #111111)",
        primary = "#111111",
        secondary = "lightgrey",
        accentLight = "darkred",
        accentMedium = "darkred",
        accentDark = "gold",
        accentWarning = "gold",
        filter = "collections",
        rainbow = 0,
        effect = 0,
        description = "A Japanese inspired theme with soft whites and bold reds, and accents of yellow.",
        blur = false,
        font = "'Kaisei Decol', serif"
    ),
    new scheme (
        title = "Shipwreck",
        icon = "coin",
        color = "gold",
        background = "linear-gradient(to bottom, #222228 400px, #111114 800px, #111114)",
        primary = "#111114",
        secondary = "lightgrey",
        accentLight = "#444",
        accentMedium = "#666",
        accentDark = "#C19A6B",
        accentWarning = "#C19A6B",
        filter = "collections",
        rainbow = 0,
        effect = 0,
        description = "A nautical theme with darkened silver hues and accents of gold.",
        blur = true,
        font = "'Kaisei Decol', serif"
    ),
    new scheme (
        title = "Pietersite",
        icon = "gem",
        color = "#333368",
        background = "linear-gradient(to bottom, #222228 400px, #111114 800px, #111114)",
        primary = "#111114",
        secondary = "lightgrey",
        accentLight = "#333368",
        accentMedium = "lightblue",
        accentDark = "grey",
        accentWarning = "brown",
        filter = "gemstones",
        rainbow = 0,
        effect = 0,
        description = "A bold theme with striking blues and subtle brown accents.",
        blur = false,
        font = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    ),
    new scheme (
        title = "Player 1",
        icon = "joystick",
        color = "#66C0F4",
        background = "linear-gradient(to bottom, #171A21 400px, #1B2838 800px,#1B2838)",
        primary = "#171A21",
        secondary = "#66C0F4",
        accentLight = "	#2A475E",
        accentMedium = "#646c76",
        accentDark = "#C7D5E0",
        accentWarning = "gold",
        filter = "themed",
        rainbow = 0,
        effect = 0,
        description = "A calming blue color scheme inspired by the popular digital content platform, Steam.",
        blur = false,
        font = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    ),
    new scheme (
        title = "Classic - Light, Purple",
        icon = "circle-half",
        color = "MediumOrchid",
        background = "white",
        primary = "white",
        secondary = "black",
        accentLight = "Lavender",
        accentMedium = "darkgrey",
        accentDark = "MediumOrchid",
        accentWarning = "Purple",
        filter = "light",
        rainbow = 0,
        effect = 0,
        description = "The classic light DART theme with purple accents.",
        blur = false,
        font = "'Kaisei Decol', serif"
    ),
    new scheme (
        title = "Classic - Dark, Purple",
        icon = "circle-fill",
        color = "Purple",
        background = "#222",
        primary = "#222",
        secondary = "lightgrey",
        accentLight = "Purple",
        accentMedium = "darkgrey",
        accentDark = "Lavender",
        accentWarning = "gold",
        filter = "dark",
        rainbow = 0,
        effect = 0,
        description = "The classic dark DART theme with purple accents.",
        blur = false,
        font = "'Kaisei Decol', serif"
    ),
    new scheme (
        title = "Classic - Light, Orange",
        icon = "circle-half",
        color = "orange",
        background = "white",
        primary = "white",
        secondary = "black",
        accentLight = "PeachPuff",
        accentMedium = "darkgrey",
        accentDark = "darkOrange",
        accentWarning = "darkOrange",
        filter = "light",
        rainbow = 0,
        effect = 0,
        description = "The classic light DART theme with orange accents.",
        blur = false,
        font = "'Kaisei Decol', serif"
    ),
    new scheme (
        title = "Classic - Dark, Orange",
        icon = "circle-fill",
        color = "darkOrange",
        background = "#222",
        primary = "#222",
        secondary = "lightgrey",
        accentLight = "#b33000",
        accentMedium = "darkgrey",
        accentDark = "#FF4500",
        accentWarning = "orange",
        filter = "dark",
        rainbow = 0,
        effect = 0,
        description = "The classic dark DART theme with orange accents.",
        blur = false,
        font = "'Kaisei Decol', serif"
    ),
    new scheme (
        title = "Classic - Light, Cyan",
        icon = "circle-half",
        color = "cyan",
        background = "white",
        primary = "white",
        secondary = "black",
        accentLight = "cyan",
        accentMedium = "darkgrey",
        accentDark = "DarkTurquoise",
        accentWarning = "darkgreen",
        filter = "light",
        rainbow = 0,
        effect = 0,
        description = "The classic light DART theme with cyan accents.",
        blur = false,
        font = "'Kaisei Decol', serif"
    ),
    new scheme (
        title = "Classic - Dark, Cyan",
        icon = "circle-fill",
        color = "CadetBlue",
        background = "#222",
        primary = "#222",
        secondary = "lightgrey",
        accentLight = "CadetBlue",
        accentMedium = "darkgrey",
        accentDark = "DarkTurquoise",
        accentWarning = "cyan",
        filter = "dark",
        rainbow = 0,
        effect = 0,
        description = "The classic dark DART theme with cyan accents.",
        blur = false,
        font = "'Kaisei Decol', serif"
    ),
    new scheme (
        title = "Classic - Light, Yellow",
        icon = "circle-half",
        color = "Goldenrod",
        background = "white",
        primary = "white",
        secondary = "black",
        accentLight = "Gold",
        accentMedium = "darkgrey",
        accentDark = "Goldenrod",
        accentWarning = "DarkGoldenrod",
        filter = "light",
        rainbow = 0,
        effect = 0,
        description = "The classic light DART theme with golden accents.",
        blur = false,
        font = "'Kaisei Decol', serif"
    ),
    new scheme (
        title = "Classic - Dark, Yellow",
        icon = "circle-fill",
        color = "DarkGoldenrod",
        background = "#222",
        primary = "#222",
        secondary = "lightgrey",
        accentLight = "DarkGoldenrod",
        accentMedium = "darkgrey",
        accentDark = "Goldenrod",
        accentWarning = "Violet",
        filter = "dark",
        rainbow = 0,
        effect = 0,
        description = "The classic dark DART theme with golden accents.",
        blur = false,
        font = "'Kaisei Decol', serif"
    ),
    new scheme (
        title = "Amethyst",
        icon = "gem",
        color = "DarkOrchid",
        background = "linear-gradient(to bottom, #480048 400px, #680068 800px, #680068)",
        primary = "#680068",
        secondary = "Thistle",
        accentLight = "DarkOrchid",
        accentMedium = "Violet",
        accentDark = "Lavender",
        accentWarning = "GhostWhite",
        filter = "gemstones",
        rainbow = 0,
        effect = 0,
        description = "A bold purple theme with deep hues inspired by amethysts.",
        blur = true,
        font = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    ),
    new scheme (
        title = "Citrine",
        icon = "gem",
        color = "DarkOrange",
        background = "linear-gradient(to bottom, OrangeRed 400px, DarkOrange 800px, DarkOrange)",
        primary = "DarkOrange",
        secondary = "white",
        accentLight = "#CC6600",
        accentMedium = "brown",
        accentDark = "Yellow",
        accentWarning = "Yellow",
        filter = "gemstones",
        rainbow = 0,
        effect = 0,
        description = "A bold orange theme with deep hues inspired by citrines.",
        blur = true,
        font = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    ),
    new scheme (
        title = "Turquoise",
        icon = "gem",
        color = "DarkTurquoise",
        background = "LightCyan",
        primary = "LightCyan",
        secondary = "#283848",
        accentLight = "MediumAquamarine",
        accentMedium = "DarkTurquoise",
        accentDark = "#DarkCyan",
        accentWarning = "DarkGreen",
        filter = "gemstones",
        rainbow = 0,
        effect = 0,
        description = "A soft turquoise theme with green accents inspired by turquoise.",
        blur = false,
        font = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    ),
    new scheme (
        title = "Amber",
        icon = "gem",
        color = "SaddleBrown",
        background = "linear-gradient(to bottom, DarkGoldenrod 400px, Goldenrod 800px, Goldenrod)",
        primary = "Goldenrod",
        secondary = "Maroon",
        accentLight = "Cornsilk",
        accentMedium = "SaddleBrown",
        accentDark = "yellow",
        accentWarning = "Cornsilk",
        filter = "gemstones",
        rainbow = 0,
        effect = 0,
        description = "A bold yellow theme with deep hues inspired by amber.",
        blur = true,
        font = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    ),
    new scheme (
        title = "New Year",
        icon = "globe",
        color = "blue",
        background = "linear-gradient(to bottom, #03172f 400px, #062844 800px, #062844)",
        primary = "#093657",
        secondary = "lightyellow",
        accentLight = "SteelBlue",
        accentMedium = "#9a6d4e",
        accentDark = "#C19A6B",
        accentWarning = "white",
        filter = "seasonal",
        rainbow = 0,
        effect = 0,
        description = "Embrace the New Year with bold blues and gold accents.",
        blur = false,
        font = "'Kaisei Decol', serif"
    ),
    new scheme (
        title = "Lunar New Year",
        icon = "globe",
        color = "#f9898f",
        background = "#4f1414",
        primary = "#260201",
        secondary = "white",
        accentLight = "#b23232",
        accentMedium = "#9a6d4e",
        accentDark = "#C19A6B",
        accentWarning = "#f9898f",
        filter = "seasonal",
        rainbow = 0,
        effect = 0,
        description = "Embrace the Lunar New Year with soft pinks, deep reds and gold accents.",
        blur = false,
        font = "'Kaisei Decol', serif"
    ),
    new scheme (
        title = "Valentine's Day",
        icon = "heart-fill",
        color = "darkred",
        background = "whitesmoke",
        primary = "white",
        secondary = "black",
        accentLight = "IndianRed",
        accentMedium = "darkgrey",
        accentDark = "FireBrick",
        accentWarning = "darkred",
        filter = "seasonal",
        rainbow = 0,
        effect = 2,
        description = "A delicate blend of romance and luxury.",
        blur = false,
        font = "'Kaisei Decol', serif"
    ),
    new scheme (
        title = "Independence",
        icon = "flag-fill",
        color = "red",
        background = "white",
        primary = "white",
        secondary = "black",
        accentLight = "lightgrey",
        accentMedium = "darkgrey",
        accentDark = "red",
        accentWarning = "DodgerBlue",
        filter = "themed",
        rainbow = 4,
        effect = 0,
        description = "Honor American independence and veterans with tradition colors.",
        blur = false,
        font = "'Kaisei Decol', serif"
    ),
    new scheme (
        title = "Freedom",
        icon = "flag-fill",
        color = "green",
        background = "#111",
        primary = "#111",
        secondary = "lightgrey",
        accentLight = "darkgrey",
        accentMedium = "grey",
        accentDark = "lightyellow",
        accentWarning = "yellow",
        filter = "themed",
        rainbow = 5,
        effect = 0,
        description = "Celebrate freedom in honor of Pan-African holidays with traditional colors.",
        blur = false,
        font = "'Kaisei Decol', serif"
    ),
    new scheme (
        title = "Victory",
        icon = "flag-fill",
        color = "Purple",
        background = "#fff8f8",
        primary = "#ffeedd",
        secondary = "DarkMagenta",
        accentLight = "lightgrey",
        accentMedium = "Indigo",
        accentDark = "OrangeRed",
        accentWarning = "DodgerBlue",
        filter = "themed",
        rainbow = 1,
        effect = 3,
        description = "Revel in the colors of victory with confetti in celebration of Hispanic Heritage.",
        blur = false,
        font = "'Kaisei Decol', serif"
    ),
    new scheme (
        title = "Perseverence",
        icon = "flag-fill",
        color = "#C19A6B",
        background = "white",
        primary = "whitesmoke",
        secondary = "#155980",
        accentLight = "lightblue",
        accentMedium = "#C19A6B",
        accentDark = "#c6ab68",
        accentWarning = "#C19A6B",
        filter = "themed",
        rainbow = 0,
        effect = 0,
        description = "Commemorate perseverence in honor of Jewish traditions with warm blue and gold colors.",
        blur = false,
        font = "'Kaisei Decol', serif"
    ),
    new scheme (
        title = "Spring",
        icon = "flower1",
        color = "DarkGreen",
        background = "Snow",
        primary = "LavenderBlush",
        secondary = "#040",
        accentLight = "pink",
        accentMedium = "MediumSeaGreen",
        accentDark = "#844",
        accentWarning = "DarkGreen",
        filter = "seasonal",
        rainbow = 1,
        effect = 4,
        description = "Bloom and take in the sum with spring colors and florals.",
        blur = false,
        font = "'Kaisei Decol', serif"
    ),
    new scheme (
        title = "Summer",
        icon = "sun-fill",
        color = "yellow",
        background = "Turquoise",
        primary = "SandyBrown",
        secondary = "white",
        accentLight = "Orchid",
        accentMedium = "lightyellow",
        accentDark = "purple",
        accentWarning = "yellow",
        filter = "seasonal",
        rainbow = 3,
        effect = 0,
        description = "Take a staycation with coastal and tropical colors.",
        blur = false,
        font = "'Kaisei Decol', serif"
    ),
    new scheme (
        title = "Fall",
        icon = "circle-fill",
        color = "orange",
        background = "Sienna",
        primary = "brown",
        secondary = "AntiqueWhite",
        accentLight = "Peru",
        accentMedium = "Maroon",
        accentDark = "yellow",
        accentWarning = "orange",
        filter = "seasonal",
        rainbow = 0,
        effect = 5,
        description = "Ground yourself in warm fall colors.",
        blur = false,
        font = "'Kaisei Decol', serif"
    ),
    new scheme (
        title = "Winter",
        icon = "tree-fill",
        color = "#9b887d",
        background = "whitesmoke",
        primary = "#2c3646",
        secondary = "grey",
        accentLight = "#d7e1e5",
        accentMedium = "#7c8491",
        accentDark = "SteelBlue",
        accentWarning = "#9b887d",
        filter = "seasonal",
        rainbow = 0,
        effect = 1,
        description = "Look cool with muted winter tones.",
        blur = false,
        font = "'Kaisei Decol', serif"
    ),
    new scheme (
        title = "Classic - Quiet Luxury",
        icon = "circle-half",
        color = "brown",
        background = "white",
        primary = "whitesmoke",
        secondary = "black",
        accentLight = "tan",
        accentMedium = "darkgrey",
        accentDark = "brown",
        accentWarning = "red",
        filter = "light",
        rainbow = 0,
        effect = 0,
        description = "The classic DART theme with a touch of modern charm. Clean, modern, and professional.",
        blur = false,
        font = "'Kaisei Decol', serif"
    ),
    new scheme (
        title = "Microsoft Teams",
        icon = "microsoft-teams",
        color = "#444791",
        background = "#f5f5f5",
        primary = "#ebebeb",
        secondary = "#242424",
        accentLight = "#8183b5",
        accentMedium = "#444791",
        accentDark = "#8183b5",
        accentWarning = "#cc4a31",
        filter = "themed",
        rainbow = 0,
        effect = 0,
        description = "For the user that likes seemless design between systems.",
        blur = false,
        font = "'Kaisei Decol', serif"
    )
]

//----------------------------------------------------------------------------------------------------
//
//  DATA: Boutiques
//
//----------------------------------------------------------------------------------------------------

class boutique {
    constructor (title="", number="", address1="", address2="", address3="",
                country = 0, // 0 - United States, 1 = Canada, 2 = France, 3 = China
                phone="", extension="", email="", type=0, BOSS=false, closed=false,
                image="https://www.davidyurman.com/on/demandware.static/-/Sites/default/dwf3baebf9/images/storeImages/StoreLocator_DYLogo_Thumbnail.jpg") {
                    this.title = title;
                    this.number = number,
                    this.address1 = address1;
                    this.address2 = address2;
                    this.address3 = address3;
                    this.country = country;
                    this.phone = phone;
                    this.extension = extension;
                    this.email = email;
                    this.type = type;
                    this.BOSS = BOSS;
                    this.closed = closed;
                    this.image = image;
                }

    copyable () {
        var text = "";

        if (this.title) text += this.title + `<br>` + boutiqueTypes[this.type] +`<br><br>`;
        if (this.address1) text += this.address1 + `<br>`;
        if (this.address2) text += this.address2 + `<br>`;
        if (this.address3) text += this.address3 + `<br>`;
        text += countryList[this.country];
        if (this.phone) text += `<br><br>` + this.phone;
        
        return removeHTML(text);
    }
}

const boutiques = [
    new boutique (
        title = "Vestry | New York, NY",
        number = -1,
        address1 = "<b>David Yurman</b><br>24 Vestry St",
        address2 = "",
        address3 = "New York, NY 10013",
        country = 0,
        phone = `(212) 896-1550`,
        extension = 0,
        email = "",
        type = 6,
        BOSS = false,
        closed = false,
        image = "https://images.squarespace-cdn.com/content/v1/526d63fce4b0b725bab03166/1384482856818-T0TA1WDZN6FYQPUWUP1J/02_david+yurman+1-004237.jpg?format=1500w"
    ),
    new boutique (
        title = "57th Street | New York, NY",
        number = 1,
        address1 = "<b>David Yurman</b><br>5 East 57th Street",
        address2 = "",
        address3 = "New York, New York 10022",
        country = 0,
        phone = `(212) 752-4255`,
        extension = 1054,
        email = "store1ops@davidyurman.com",
        type = 0,
        BOSS = false,
        closed = false,
        image = "https://www.davidyurman.com/on/demandware.static/-/Sites/default/dwd930b4ed/images/storeImages/StoreLocator_57thSt_Thumbnail_1.jpg"
    ),
    new boutique (
        title = "South Coast Plaza | Coast Mesa, CA",
        number = 2,
        address1 = "<b>David Yurman</b><br>3333 Bristol Street",
        address2 = "Suite 2418",
        address3 = "Costa Mesa, California 92626",
        country = 0,
        phone = "(714) 444-1080",
        extension = 1200,
        email = "store2ops@davidyurman.com",
        type = 0,
        BOSS = false,
        closed = false,
        image = "https://www.davidyurman.com/on/demandware.static/-/Sites/default/dwbb751f27/images/storeImages/StoreLocator_SouthCoastPlaza_Thumbnail.jpg"
    ),
    new boutique (
        title = "Bal Harbour Shops | Bal Harbour, FL",
        number = 3,
        address1 = "<b>David Yurman</b><br>9700 Collins Avenue",
        address2 = "Suite 161",
        address3 = "Bal Harbour, Florida 33154",
        country = 0,
        phone = "(305) 867-1772",
        extension = 1300,
        email = "store3ops@davidyurman.com",
        type = 0,
        BOSS = false,
        closed = false,
        image = "https://www.davidyurman.com/on/demandware.static/-/Sites/default/dwbb751f27/images/storeImages/StoreLocator_BalHarbour_Thumbnail.jpg"
    ),
    new boutique (
        title = "Lenox Square | Atlanta, GA",
        number = 4,
        address1 = "<b>David Yurman</b><br>3393 Peachtree Road North East",
        address2 = "Space 3010",
        address3 = "Atlanta, Georgia 30326",
        country = 0,
        phone = "(404) 812-9225",
        extension = 1400,
        email = "store4ops@davidyurman.com",
        type = 0,
        BOSS = false,
        closed = false,
        image = "https://www.davidyurman.com/on/demandware.static/-/Sites/default/dw5d0a2171/images/storeImages/Atlanta.jpg"
    ),
    new boutique (
        title = "The Houston Galleria | Houston, TX",
        number = 5,
        address1 = "<b>David Yurman</b><br>5085 Westheimer Road",
        address2 = "Space B2770",
        address3 = "Houston, Texas 77056",
        country = 0,
        phone = "(713) 622-5799",
        extension = 1500,
        email = "store5ops@davidyurman.com",
        type = 0,
        BOSS = false,
        closed = false,
        image = "https://www.davidyurman.com/on/demandware.static/-/Sites/default/dwf6aeb1c4/images/storeImages/StoreLocator_Houston_Thumbnail.jpg"
    ),
    new boutique (
        title = "Forum Shops at Caesar's Palace | Las Vegas, NV",
        number = 6,
        address1 = "<b>David Yurman</b><br>3500 South Las Vegas Boulevard",
        address2 = "Suite #D05A",
        address3 = "Las Vegas, Nevada 89109",
        country = 0,
        phone = "(702) 794-4545",
        extension = 1600,
        email = "store6ops@davidyurman.com",
        type = 0,
        BOSS = false,
        closed = false,
        
    ),
    new boutique (
        title = "Mall at Millenia | Orlando, FL",
        number = 7,
        address1 = "<b>David Yurman</b><br>4200 Conroy Road",
        address2 = "Suite J266",
        address3 = "Orlando, Florida 32839",
        country = 0,
        phone = "(407) 226-2920",
        extension = 1700,
        email = "store7ops@davidyurman.com",
        type = 0,
        BOSS = false,
        closed = false,
        image = "https://www.davidyurman.com/on/demandware.static/-/Sites/default/dw7a4fca29/images/storeImages/StoreLocator_Orlando_Thumbnail.jpg"
    ),
    new boutique (
        title = "Northpark Center | Dallas, TX",
        number = 8,
        address1 = "<b>David Yurman</b><br>325 Northpark Center",
        address2 = "",
        address3 = "Dallas, Texas 75225",
        country = 0,
        phone = "(469) 232-4500",
        extension = 1800,
        email = "store8ops@davidyurman.com",
        type = 0,
        BOSS = false,
        closed = false,
        image = "https://www.davidyurman.com/on/demandware.static/-/Sites/default/dw4dd5f680/images/storeImages/StoreLocator_Dallas_Thumbnail.jpg"
    ),
    new boutique (
        title = "King of Prussia Plaza | King Of Prussia, PA",
        number = 9,
        address1 = "<b>David Yurman</b><br>350 Mall Boulevard",
        address2 = "Suite C230",
        address3 = "King of Prussia, Pennsylvania 19406",
        country = 0,
        phone = "(610) 265-6370",
        extension = 1900,
        email = "store9ops@davidyurman.com",
        type = 0,
        BOSS = false,
        closed = false,
        image = "https://www.davidyurman.com/on/demandware.static/-/Sites/default/dwf8857ac6/images/storeImages/StoreLocator_KingofPrussia_Thumbnail.jpg"
    ),
    new boutique (
        title = "Rodeo Drive | Beverly Hills, CA",
        number = 10,
        address1 = "<b>David Yurman</b><br>371 North Rodeo Drive",
        address2 = "",
        address3 = "Beverly Hills, California 90210",
        country = 0,
        phone = "(310) 888-8618",
        extension = 2000,
        email = "store10ops@davidyurman.com",
        type = 0,
        BOSS = false,
        closed = false,
        image = "https://www.davidyurman.com/on/demandware.static/-/Sites/default/dwd8aec28b/images/storeImages/StoreLocator_BeverlyHills_Thumbnail.jpg"
    ),
    new boutique (
        title = "The Domain | Austin, TX",
        number = 11,
        address1 = "<b>David Yurman</b><br>11600 Century Oaks Terrace",
        address2 = "Space 120",
        address3 = "Austin, Texas 78758",
        country = 0,
        phone = "(512) 834-8700",
        extension = 2100,
        email = "store11ops@davidyurman.com",
        type = 0,
        BOSS = false,
        closed = false,
        image = "https://www.davidyurman.com/on/demandware.static/-/Sites/default/dw860581b9/images/storeImages/StoreLocator_Austin_Thumbnail.jpg"
    ),
    new boutique (
        title = "Copley Place | Boston, MA",
        number = 12,
        address1 = "<b>David Yurman</b><br>100 Huntington Avenue",
        address2 = "Space A017",
        address3 = "Boston, Massachusetts 02116",
        country = 0,
        phone = "(617) 236-8777",
        extension = 2200,
        email = "store12ops@davidyurman.com",
        type = 0,
        BOSS = false,
        closed = false,
        image = "https://www.davidyurman.com/on/demandware.static/-/Sites/default/dwc6e0c578/images/storeImages/StoreLocator_Boston_Thumbnail.jpg"
    ),
    new boutique (
        title = "Michigan Avenue | Chicago, IL",
        number = 13,
        address1 = "<b>David Yurman</b><br>919 N Michigan Avenue",
        address2 = "",
        address3 = "Chicago, Illinois 60611",
        country = 0,
        phone = "(312) 787-7779",
        extension = 2300,
        email = "store13ops@davidyurman.com",
        type = 0,
        BOSS = false,
        closed = false,
        image = "https://www.davidyurman.com/on/demandware.static/-/Sites/default/dw44179da0/images/storeImages/StoreLocator_Chicago_Thumbnail.jpg"
    ),
    new boutique (
        title = "The Westchester | White Plains, NY",
        number = 14,
        address1 = "<b>David Yurman</b><br>125 Westchester Avenue",
        address2 = "Suite 1060",
        address3 = "White Plains, New York 10601",
        country = 0,
        phone = "(914) 539-4444",
        extension = 2400,
        email = "store14ops@davidyurman.com",
        type = 0,
        BOSS = false,
        closed = false,
        image = "https://www.davidyurman.com/on/demandware.static/-/Sites/default/dw6f8118ea/images/storeImages/StoreLocator_Westchester_Thumbnail.jpg"
    ),
    new boutique (
        title = "Tysons Galleria | Tysons, VA",
        number = 15,
        address1 = "<b>David Yurman</b><br>1763M Galleria at Tysons II",
        address2 = "",
        address3 = "McLean, Viginia 22102",
        country = 0,
        phone = "(703) 245-3515",
        extension = 2500,
        email = "store15ops@davidyurman.com",
        type = 0,
        BOSS = false,
        closed = false,
        image = "https://www.davidyurman.com/on/demandware.static/-/Sites/default/dwbb751f27/images/storeImages/StoreLocator_Tysons_Thumbnail.jpg"
    ),
    new boutique (
        title = "Scottsdale Fashion Square | Scottsdale, AZ",
        number = 16,
        address1 = "<b>David Yurman</b><br>7014 East Camelback Road",
        address2 = "Space 1109",
        address3 = "Scottsdale, Arizona 85251",
        country = 0,
        phone = "(480) 444-2920",
        extension = 2600,
        email = "store16ops@davidyurman.com",
        type = 0,
        BOSS = false,
        closed = false,
        image = "https://www.davidyurman.com/on/demandware.static/-/Sites/default/dw31f85fa7/images/storeImages/StoreLocator_Scottsdale_Thumbnail.jpg"
    ),
    new boutique (
        title = "The Mall at Green Hills | Nashville, TN",
        number = 17,
        address1 = "<b>David Yurman</b><br>2126 Abbott Martin Road",
        address2 = "Suite #261",
        address3 = "Nashville, Tennessee 37215",
        country = 0,
        phone = "(615) 298-1190",
        extension = 2700,
        email = "store17ops@davidyurman.com",
        type = 0,
        BOSS = false,
        closed = false,
        image = "https://www.davidyurman.com/on/demandware.static/-/Sites/default/dw592201ca/images/storeImages/StoreLocator_Nashville_Thumbnail.jpg"
    ),
    new boutique (
        title = "Palm Beach Gardens | Palm Beach, FL",
        number = 18,
        address1 = "<b>David Yurman</b><br>3101 PGA Boulevard",
        address2 = "Suite J-213",
        address3 = "Palm Beach Gardens, Florida 33410",
        country = 0,
        phone = "(561) 624-5332",
        extension = 2800,
        email = "store18ops@davidyurman.com",
        type = 0,
        BOSS = false,
        closed = false,
        image = "https://www.davidyurman.com/on/demandware.static/-/Sites/default/dw65d92b73/images/storeImages/StoreLocator_PalmBeach_Thumbnail.jpg"
    ),
    new boutique (
        title = "Westfield Valley Fair | San Jose, CA",
        number = 19,
        address1 = "<b>David Yurman</b><br>2855 Stevens Creek Boulevard",
        address2 = "Space #1361",
        address3 = "Santa Clara, California 95050",
        country = 0,
        phone = "(408) 296-6198",
        extension = 2900,
        email = "store19ops@davidyurman.com",
        type = 0,
        BOSS = false,
        closed = false,
        image = "https://www.davidyurman.com/on/demandware.static/-/Sites/default/dw427590bb/images/storeImages/StoreLocator_SantaClara_Thumbnail.jpg"
    ),
    new boutique (
        title = "Town Center at Boca Raton | Boca Raton, FL",
        number = 20,
        address1 = "<b>David Yurman</b><br>6000 Glades Road",
        address2 = "Space #1147A",
        address3 = "Boca Raton, Florida 33431",
        country = 0,
        phone = "(561) 955-1848",
        extension = 3000,
        email = "store20ops@davidyurman.com",
        type = 0,
        BOSS = false,
        closed = false,
        image = "https://www.davidyurman.com/on/demandware.static/-/Sites/default/dw0fce6b3d/images/storeImages/StoreLocator_BocaRaton_Thumbnail.jpg"
    ),
    new boutique (
        title = "Somerset Collection | Troy, MI",
        number = 21,
        address1 = "<b>David Yurman</b><br>2801 West Big Beaver Road",
        address2 = "Suite #114",
        address3 = "Troy, Michigan 48084",
        country = 0,
        phone = "(248) 649-6054",
        extension = 3100,
        email = "store21ops@davidyurman.com",
        type = 0,
        BOSS = false,
        closed = false,
        image = "https://www.davidyurman.com/on/demandware.static/-/Sites/default/dw576d892b/images/storeImages/StoreLocator_Troy_Thumbnail.jpg"
    ),
    new boutique (
        title = "Southpark Mall | Charlotte, NC",
        number = 22,
        address1 = "<b>David Yurman</b><br>4400 Sharon Road",
        address2 = "Suite M14",
        address3 = "Charlotte, North Carolina 28211",
        country = 0,
        phone = "(704) 366-7259",
        extension = 3200,
        email = "store22ops@davidyurman.com",
        type = 0,
        BOSS = false,
        closed = false,
        image = "https://www.davidyurman.com/on/demandware.static/-/Sites/default/dw86b822e0/images/storeImages/StoreLocator_Charlotte_Thumbnail.jpg"
    ),
    new boutique (
        title = "Yorkdale | Toronto, ON",
        number = 23,
        address1 = "<b>David Yurman</b><br>3401 Dufferin Street",
        address2 = "Unit 217",
        address3 = "Toronto, Ontario M6A 2T9",
        country = 1,
        phone = "(416) 780-9598",
        extension = 3300,
        email = "store23ops@davidyurman.com",
        type = 0,
        BOSS = false,
        closed = false,
        image = "https://www.davidyurman.com/on/demandware.static/-/Sites/default/dw1da29cd8/images/storeImages/StoreLocator_Yorkdale_Thumbnail.jpg"
    ),
    new boutique (
        title = "Topanga | Topanga, CA",
        number = 24,
        address1 = "<b>David Yurman</b><br>6600 CA-27",
        address2 = "Suite 185",
        address3 = "Canoga Park, California 91303",
        country = 0,
        phone = "(818) 887-1530",
        extension = 3400,
        email = "store24ops@davidyurman.com",
        type = 0,
        BOSS = false,
        closed = true
    ),
    new boutique (
        title = "Edina | Edina, MN",
        number = 25,
        address1 = "<b>David Yurman</b><br>3615 Galleria",
        address2 = "",
        address3 = "Edina, Minnesota 55435",
        country = 0,
        phone = "(952) 920-9331",
        extension = 3500,
        email = "store25ops@davidyurman.com",
        type = 0,
        BOSS = false,
        closed = false,
        image = "https://www.davidyurman.com/on/demandware.static/-/Sites/default/dwc1ddbbdb/images/storeImages/StoreLocator_Edina_Thumbnail.jpg"
    ),
    new boutique (
        title = "Glendale | Glendale, CA",
        number = 26,
        address1 = "<b>David Yurman</b><br>798 Americana Way",
        address2 = "",
        address3 = "Glendale, California 91210",
        country = 0,
        phone = "(818) 241-2836",
        extension = 3600,
        email = "store26ops@davidyurman.com",
        type = 0,
        BOSS = false,
        closed = false,
        image = "https://www.davidyurman.com/on/demandware.static/-/Sites/default/dwa5854058/images/storeImages/StoreLocator_Glendale_Thumbnail.jpg"
    ),
    new boutique (
        title = "City Center | Washington, DC",
        number = 27,
        address1 = "<b>David Yurman</b><br>924 Palmer Alley Northwest",
        address2 = "",
        address3 = "Washington, District of Columbia 20009",
        country = 0,
        phone = "(202) 682-0260",
        extension = 3700,
        email = "store27ops@davidyurman.com",
        type = 0,
        BOSS = false,
        closed = false,
        image = "https://www.davidyurman.com/on/demandware.static/-/Sites/default/dw5a8ad877/images/storeImages/StoreLocator_CityCenter_Thumbnail.jpg"
    ),
    new boutique (
        title = "Plaza Frontenac | St. Louis, MO",
        number = 30,
        address1 = "<b>David Yurman</b><br>1701 S Lindbergh Boulevard",
        address2 = "Space #81",
        address3 = "St. Louis, Missouri 63131",
        country = 0,
        phone = "(314) 989-0524",
        extension = 4000,
        email = "store30ops@davidyurman.com",
        type = 0,
        BOSS = false,
        closed = false,
        image = "https://www.davidyurman.com/on/demandware.static/-/Sites/default/dwafb56f32/images/storeImages/StoreLocator_StLouis_Thumbnail.jpg"
    ),
    new boutique (
        title = "SOHO | SOHO - NY",
        number = 31,
        address1 = "<b>David Yurman</b><br>114 Prince Street",
        address2 = "",
        address3 = "New York, New York 10012",
        country = 0,
        phone = "(212) 343-7918",
        extension = 1100,
        email = "store31ops@davidyurman.com",
        type = 0,
        BOSS = false,
        closed = false,
        image = "https://www.davidyurman.com/on/demandware.static/-/Sites/default/dw4975705d/images/storeImages/StoreLocator_Soho_Thumbnail.jpg"
    ),
    new boutique (
        title = "International Plaza and Bay Street | Tampa, FL",
        number = 32,
        address1 = "<b>David Yurman</b><br>2223 North Westshore Boulevard",
        address2 = "Suite 267",
        address3 = "Tampa, Florida 33607",
        country = 0,
        phone = "(813) 870-2719",
        extension = 4200,
        email = "store32ops@davidyurman.com",
        type = 0,
        BOSS = false,
        closed = false,
        image = "https://www.davidyurman.com/on/demandware.static/-/Sites/default/dwcded9923/images/storeImages/StoreLocator_Tampa_Thumbnail.jpg"
    ),
    new boutique (
        title = "Ala Moana Center | Honolulu, HI",
        number = 33,
        address1 = "<b>David Yurman</b><br>1450 Ala Moana Boulevard",
        address2 = "Suite 2830",
        address3 = "Honolulu, Hawaii 96814",
        country = 0,
        phone = "(808) 947-8702",
        extension = 4300,
        email = "store33ops@davidyurman.com",
        type = 0,
        BOSS = false,
        closed = true,
    ),
    new boutique (
        title = "Cherry Creek Shopping Center | Denver, CO",
        number = 34,
        address1 = "<b>David Yurman</b><br>3000 East 1st Avenue",
        address2 = "Space #268",
        address3 = "Denver, Colorado 80206",
        country = 0,
        phone = "(303) 355-0453",
        extension = 4400,
        email = "store34ops@davidyurman.com",
        type = 0,
        BOSS = false,
        closed = false,
        image = "https://www.davidyurman.com/on/demandware.static/-/Sites/default/dw21566a36/images/storeImages/StoreLocator_CherryCreek_Thumbnail.jpg"
    ),
    new boutique (
        title = "Oakbrook Center | Oak Brook, IL",
        number = 35,
        address1 = "<b>David Yurman</b><br>130 Oakbrook Center",
        address2 = "",
        address3 = "Oak Brook, Illinois 60523",
        country = 0,
        phone = "(630) 928-1005",
        extension = 4500,
        email = "store35ops@davidyurman.com",
        type = 0,
        BOSS = false,
        closed = false,
        image = "https://www.davidyurman.com/on/demandware.static/-/Sites/default/dw1d79856a/images/storeImages/StoreLocator_Oakbrook_Thumbnail.jpg"
    ),
    new boutique (
        title = "Mall at Short Hills | Short Hills, NJ",
        number = 36,
        address1 = "<b>David Yurman</b><br>1200 Morris Turnpike",
        address2 = "Space A-135",
        address3 = "Short Hills, New Jersey 07078",
        country = 0,
        phone = "(973) 379-2382",
        extension = 4600,
        email = "store36ops@davidyurman.com",
        type = 0,
        BOSS = false,
        closed = false,
        image = "https://www.davidyurman.com/on/demandware.static/-/Sites/default/dw039bddc6/images/storeImages/StoreLocator_ShortHills_Thumbnail.jpg"
    ),
    new boutique (
        title = "Aventura Mall | Aventura, FL",
        number = 37,
        address1 = "<b>David Yurman</b><br>19501 Biscayne Boulevard",
        address2 = "Suite 515",
        address3 = "Miami, Florida 33180",
        country = 0,
        phone = "(305) 936-3091",
        extension = 4700,
        email = "store37ops@davidyurman.com",
        type = 0,
        BOSS = false,
        closed = false,
        image = "https://www.davidyurman.com/on/demandware.static/-/Sites/default/dwb826336e/images/storeImages/StoreLocator_Aventura_Thumbnail.jpg"
    ),
    new boutique (
        title = "Worth Avenue | Palm Beach, FL",
        number = 38,
        address1 = "<b>David Yurman</b><br>249 Worth Avenue",
        address2 = "",
        address3 = "Palm Beach, Florida 33480",
        country = 0,
        phone = "(561) 933-6402",
        extension = "5800",
        email = "store38ops@davidyurman.com",
        type = 0,
        BOSS = false,
        closed = false,
        image = "https://www.davidyurman.com/on/demandware.static/-/Sites/default/dwa4156271/images/storeImages/StoreLocator_WorthAvenue_Thumbnail_1.jpg"
    ),
    new boutique (
        title = "Legacy West | Plano, TX",
        number = 39,
        address1 = "<b>David Yurman</b><br>7801 Windrose Avenue",
        address2 = "Suite H145",
        address3 = "Plano, Texas 75024",
        country = 0,
        phone = "(469) 277-2560",
        extension = "",
        email = "store39ops@davidyurman.com",
        type = 0,
        BOSS = false,
        closed = false,
        image = "https://www.davidyurman.com/on/demandware.static/-/Sites/default/dwa4156271/images/storeImages/StoreLocator_LegacyWest_Thumbnail.jpg"
    ),
    new boutique (
        title = "Fashion Valley | San Diego, CA",
        number = 40,
        address1 = "<b>David Yurman</b><br>7007 Friars Road",
        address2 = "Suite 1030",
        address3 = "San Diego, California 92108",
        country = 0,
        phone = "619-927-1890 ",
        extension = "",
        email = "store40ops@davidyurman.com",
        type = 0,
        BOSS = false,
        closed = false,
        image = "https://www.davidyurman.com/on/demandware.static/-/Sites/default/dw410ae3d1/images/storeImages/StoreLocator_FashionValley_Thumbnail@2x.jpg"
    ),
    new boutique (
        title = "La Cantera | San Antonio, TX",
        number = 41,
        address1 = "<b>David Yurman</b><br>15900 La Cantera Parkway",
        address2 = "Suite #2296",
        address3 = "San Antonio, Texas 78256",
        country = 0,
        phone = "(210) 352-9622",
        extension = "",
        email = "store41ops@davidyurman.com",
        type = 0,
        BOSS = false,
        closed = false,
        image = "https://www.davidyurman.com/on/demandware.static/-/Sites/default/dw99642e22/images/storeImages/StoreLocator_SanAntonio_Thumbnail.jpg"
    ),
    new boutique (
        title = "Stanford | Palo Alto, CA",
        number = 42,
        address1 = "<b>David Yurman</b><br>180 El Camino Real",
        address2 = "Building D, Space #114",
        address3 = "Palo Alto, California 94304",
        country = 0,
        phone = "(650) 509-3215",
        extension = "",
        email = "store42ops@davidyurman.com",
        type = 0,
        BOSS = false,
        closed = false,
        image = "https://www.davidyurman.com/on/demandware.static/-/Sites/default/dwb5cb8075/images/storeImages/StoreLocator_PaloAlto_Thumbnail@2x.jpg"
    ),
    new boutique (
        title = "The Grove | Plano, TX",
        number = 43,
        address1 = "<b>David Yurman</b><br>189 The Grove Drive",
        address2 = "Suite #G80",
        address3 = "Los Angeles, CA 90036",
        country = 0,
        phone = "(323) 487-6400",
        extension = "",
        email = "store43ops@davidyurman.com",
        type = 0,
        BOSS = false,
        closed = false
    ),
    new boutique (
        title = "Printemps | Paris, France",
        number = 80,
        address1 = "<b>David Yurman</b><br>Le Printemps de la Mode - 1 er etage",
        address2 = "64, Boulevard Haussman",
        address3 = "Paris, 75009, France",
        country = 2,
        phone = "+33 (0)1 42 82 42 59",
        extension = 0,
        email = "",
        type = 0,
        BOSS = false,
        closed = false,
        image = "https://www.davidyurman.com/on/demandware.static/-/Sites/default/dw4b935c26/images/storeImages/StoreLocator_Printemps_Thumbnail.jpg"
    ),
    new boutique (
        title = "Rue Saint Honoré | Paris, France",
        number = 85,
        address1 = "<b>David Yurman</b><br>245 Rue Saint Honoré",
        address2 = "",
        address3 = "Paris 75001",
        country = 2,
        phone = "+33 1 73 03 06 80",
        extension = 0,
        email = "",
        type = 0,
        BOSS = false,
        closed = false,
        image = "https://www.davidyurman.com/on/demandware.static/-/Sites/default/dw0001aa2a/images/storeImages/StoreLocator_Paris_Thumbnail.jpg"
    ),
    new boutique (
        title = "Distribution Center | DYE",
        number = 92,
        address1 = "<b>DYE</b><br>1250 Valley Brook Avenue",
        address2 = "Gates 17 & 18",
        address3 = "Lyndhurst, NJ 07071",
        country = 0,
        phone = "(888) 398-7626",
        extension = 0,
        email = "customercare@davidyurman.com",
        type = 2,
        BOSS = false,
        closed = false
    ),
    new boutique (
        title = "Colonnade Outlets Sawgrass | Sunrise, FL",
        number = 100,
        address1 = "<b>David Yurman</b><br>1800 Sawgrass Mills Circle",
        address2 = "Lot # 2426",
        address3 = "Sunrise, Florida 33323",
        country = 0,
        phone = "(954) 838-9979",
        extension = 6900,
        email = "store100ops@davidyurman.com",
        type = 1,
        BOSS = false,
        closed = false,
        image = "https://www.davidyurman.com/on/demandware.static/-/Sites/default/dw73fb5b28/images/storeImages/StoreLocator_SawgrassOutlet_Thumbnail.jpg"
    ),
    new boutique (
        title = "Las Vegas Premium Outlets North | Las Vegas, NV",
        number = 101,
        address1 = "<b>David Yurman</b><br>795 South Grand Central Parkway",
        address2 = "Space 2223",
        address3 = "Las Vegas, Nevada 89106",
        country = 0,
        phone = "(702) 383-9039",
        extension = 6800,
        email = "store101ops@davidyurman.com",
        type = 1,
        BOSS = false,
        closed = false,
        image = "https://www.davidyurman.com/on/demandware.static/-/Sites/default/dw7140a892/images/storeImages/StoreLocator_LasVegasOutlet_Thumbnail.jpg"
    ),
    new boutique (
        title = "Wrentham Premium Outlets | Wrentham, MA",
        number = 204,
        address1 = "<b>David Yurman</b><br>1 Premium Outlet Boulevard",
        address2 = "Space 560",
        address3 = "Wrentham, Massachusettes 02093",
        country = 0,
        phone = "(508) 384-2378",
        extension = 0,
        email = "store204ops@davidyurman.com",
        type = 1,
        BOSS = false,
        closed = false,
    ),
    new boutique (
        title = "Houston Premium Outlets | Houston, TX",
        number = 205,
        address1 = "<b>David Yurman</b><br>29300 Hempstead Road",
        address2 = "Suite 1310",
        address3 = "Cypress, Texas 77433",
        country = 0,
        phone = "(281) 758-4244",
        extension = 0,
        email = "store205ops@davidyurman.com",
        type = 1,
        BOSS = false,
        closed = true,
    ),
    new boutique (
        title = "Desert Hills Premium Outlets | Cabzaon, CA Outlet",
        number = 206,
        address1 = "<b>David Yurman</b><br>48650 Seminole Drive",
        address2 = "Suite 1128",
        address3 = "Cabazon, California 92230",
        country = 0,
        phone = "(951) 849-1873",
        extension = 0,
        email = "store206ops@davidyurman.com",
        type = 1,
        BOSS = false,
        closed = false,
    ),
    new boutique (
        title = "Fashion Outlets Of Chicago | Chicago, IL Outlet",
        number = 207,
        address1 = "<b>David Yurman</b><br>5220 North Rose Street",
        address2 = "Space 2131",
        address3 = "Rosemont, Illinois 60018",
        country = 0,
        phone = "(847) 233-9580",
        extension = 0,
        email = "store207ops@davidyurman.com",
        type = 1,
        BOSS = false,
        closed = true,
    ),
    new boutique (
        title = "Woodbury Commons Premium Outlets | Woodbury, NY Outlet",
        number = 208,
        address1 = "<b>David Yurman</b><br>861 Adirondack Way Central Valley",
        address2 = "Space 2131",
        address3 = "Central Valley, NY 10917",
        country = 0,
        phone = "(845) 378-8800",
        extension = 0,
        email = "store208ops@davidyurman.com",
        type = 1,
        BOSS = false,
        closed = false,
    ),
    new boutique (
        title = "Holt Bloor | Toronto, ON",
        number = 300,
        address1 = "<b>Holt Renfrew Centre</b><br>50 Bloor Street West",
        address2 = "",
        address3 = "Toronto, Ontario M4W 1A1",
        country = 1,
        phone = "416-922-2333 x21413",
        extension = 0,
        email = "HoltBloorRetailStore@davidyurman.com",
        type = 0,
        BOSS = false,
        closed = false,
        image="https://mma.prnewswire.com/media/964314/DY_Toronto_Image_2.jpg"
    ),
    new boutique (
        title = "Holt Calgary | Calgary, AB",
        number = 301,
        address1 = "<b>CORE Shopping Centre</b><br>510 8 Avenue Southwest",
        address2 = "",
        address3 = "Calgary, Alberta T2P 4H9",
        country = 1,
        phone = "403-269-7341 x51418 ",
        extension = 0,
        email = "HoltBloorRetailStore@davidyurman.com",
        type = 0,
        BOSS = false,
        closed = false,
        image="https://www.davidyurman.com/on/demandware.static/-/Sites/default/dw809a824d/images/storeImages/StoreLocator_HoltCalgary_Thumbnail.jpg"
    ),
    new boutique (
        title = "Holt Montreal | Montreal, QB",
        number = 302,
        address1 = "1307 Saint-Catherine Street West",
        address2 = "",
        address3 = "Montreal, Quebec H3G 1P7",
        country = 1,
        phone = "514-842-7711 x10613",
        extension = 0,
        email = "HoltMontrealRetailStore@davidyurman.com",
        type = 0,
        BOSS = false,
        closed = false,
        image="https://mma.prnewswire.com/media/889174/David_Yurman_exterior.jpg"
    ),
    new boutique (
        title = "Holt Vancouver | Vancouver, BC",
        number = 303,
        address1 = "<b>CF Pacific Centre</b><br>737 Dunsmuir Street",
        address2 = "",
        address3 = "Vancouver, British Columbia V7Y 1E4",
        country = 1,
        phone = "514-842-7711 x10613",
        extension = 0,
        email = "",
        type = 0,
        BOSS = false,
        closed = false,
        image="https://www.davidyurman.com/on/demandware.static/-/Sites/default/dw633b7dcd/images/storeImages/StoreLocator_Nordstrom_Thumbnail.jpg"
    ),
    new boutique (
        title = "David Yurman At Nordstrom | Vancouver, BC",
        number = 310,
        address1 = "<b>CORE Shopping Centre</b><br>799 Robson Street",
        address2 = "",
        address3 = "Vancouver, British Columbia V7Y 0A2",
        country = 1,
        phone = "604-699-2100",
        extension = 0,
        email = "NordstromRetailStore@davidyurman.com",
        type = 4,
        BOSS = false,
        closed = false,
        image="https://www.davidyurman.com/on/demandware.static/-/Sites/default/dw83b116c7/images/storeImages/StoreLocator_HoltVancouver_Thumbnail.jpg"
    ),
    new boutique (
        title = "Holt Square 1 | Mississauga, ON",
        number = 330,
        address1 = "100 City Centre Drive",
        address2 = "",
        address3 = "Mississauga, Ontario L5B 2C9",
        country = 1,
        phone = "905-897-1044",
        extension = 0,
        email = "",
        type = 0,
        BOSS = false,
        closed = false
    ),
    new boutique (
        title = "Americana Manhasset | Manhasset, NY",
        number = 350,
        address1 = "<b>David Yurman</b><br>2050 Northern Boulevard",
        address2 = "",
        address3 = "Manhasset, New York 11030",
        country = 0,
        phone = "(516) 627-1700",
        extension = 0,
        email = "store350ops@davidyurman.com",
        type = 0,
        BOSS = false,
        closed = false,
        image="https://www.davidyurman.com/on/demandware.static/-/Sites/default/dwf87c1b8e/images/storeImages/StoreLocator_Manhasset_Thumbnail.jpg"
    ),
    new boutique (
        title = "Finance Street | Hong Kong, China",
        number = 500,
        address1 = "<b>David Yurma</b><br>Lane Crawford IFC<br>8 Finance Street, Central",
        address2 = "",
        address3 = "Hong Kong",
        country = 4,
        phone = "",
        extension = 0,
        email = "",
        type = 0,
        BOSS = false,
        closed = false
    ),
    new boutique (
        title = "Canton Road | Hong Kong, China",
        number = 501,
        address1 = "<b>David Yurma</b><br>Canton Road – Lane Crawford<br>3 Canton Road",
        address2 = "",
        address3 = "Tsim Sha Tsui, Hong Kong",
        country = 4,
        phone = "",
        extension = 0,
        email = "",
        type = 0,
        BOSS = false,
        closed = false,
        image="https://www.davidyurman.com/on/demandware.static/-/Sites/default/dw8845f416/images/storeImages/StoreLocator_IFC_Thumbnail_1.jpg"
    ),
    new boutique (
        title = "David Yurman At Saks Fifth Avenue | New York, NY",
        number = 601,
        address1 = "611 5th Avenue",
        address2 = "",
        address3 = "New York, New York 10022",
        country = 0,
        phone = "212-940-2348",
        extension = 0,
        email = "",
        type = 4,
        BOSS = false,
        closed = false
    ),
    new boutique (
        title = "David Yurman At Saks Fifth Avenue | North Naples, FL",
        number = 602,
        address1 = "5395 Tamiami Trail ",
        address2 = "",
        address3 = "North Naples, Florida 34108",
        country = 0,
        phone = "239-571-2255",
        extension = 0,
        email = "",
        type = 4,
        BOSS = false,
        closed = false
    ),
    new boutique (
        title = "David Yurman At Saks Fifth Avenue | Miami, FL",
        number = 603,
        address1 = "7687 N Kendall Drive",
        address2 = "",
        address3 = "Miami, Florida 33156",
        country = 0,
        phone = "561-897-1565",
        extension = 0,
        email = "",
        type = 4,
        BOSS = false,
        closed = false
    ),
    new boutique (
        title = "David Yurman At Saks Fifth Avenue | Sarasota, FL",
        number = 604,
        address1 = "120 University Town Center Drive",
        address2 = "",
        address3 = "Sarasota, Florida 34243",
        country = 0,
        phone = "941-724-4273",
        extension = 0,
        email = "",
        type = 4,
        BOSS = false,
        closed = false
    ),
    new boutique (
        title = "David Yurman At Saks Fifth Avenue | Atlanta, GA",
        number = 605,
        address1 = "3440 Peachtree Road",
        address2 = "",
        address3 = "Atlanta, Georgia 30326",
        country = 0,
        phone = "470-654-4822",
        extension = 0,
        email = "",
        type = 4,
        BOSS = false,
        closed = false
    ),
    new boutique (
        title = "David Yurman At Saks Fifth Avenue | Birmingham, AL",
        number = 606,
        address1 = "129 Summit Boulevard ",
        address2 = "",
        address3 = "Birmingham, Alabama 35243",
        country = 0,
        phone = "205-704-1729",
        extension = 0,
        email = "",
        type = 4,
        BOSS = false,
        closed = false
    ),
    new boutique (
        title = "Ecomm - BOSS",
        number = 850,
        address1 = "",
        address2 = "",
        address3 = "",
        country = 0,
        phone = "(888) 398-7626",
        extension = 0,
        email = "customercare@davidyurman.com",
        type = 3,
        BOSS = false,
        closed = false
    ),
    new boutique (
        title = "Ecomm - Non-BOSS",
        number = 851,
        address1 = "",
        address2 = "",
        address3 = "",
        country = 0,
        phone = "(888) 398-7626",
        extension = 0,
        email = "customercare@davidyurman.com",
        type = 3,
        BOSS = false,
        closed = false
    ),
    new boutique (
        title = "DRS | New York, NY",
        number = 0,
        address1 = "<b>Domani Repair Service</b><br>251 West 39th Street",
        address2 = "11th Floor",
        address3 = "New York, NY 10018",
        country = 0,
        phone = "(212) 382-0654 | 1 (877) 474-0925",
        extension = 0,
        email = "drsny@domanionline.com",
        type = 7,
        BOSS = false,
        closed = false
    ),
]

//----------------------------------------------------------------------------------------------------
//
//  DATA: Versions
//
//----------------------------------------------------------------------------------------------------

class version {
    constructor (number="0.0.0", title="", date="", additions=[], changes=[]) {
        this.number = number;
        this.title = title;
        this.date = date;
        this.additions = additions;
        this.changes = changes
    }
}

const versions = [
    // Unlike other classes, Versions should be added top to bottom as this is how they will appear in the list.
    new version  (
        number = "1.8.0",
        title = "Crystal",
        date = "10/19/2023",
        additions = [
            "Developed Wholesale Phrases tool for frequently used Wholesale phrases.",
            "Implemented a wholesale week counter to limit time counting weeks on wholesale calls. The counter will automatically update-week-over week.",
            "Integrated the internal document creator into DART for convenience.",
            "Created Bingo! as a fun way to help agents be mindful of soft goals to complete throughout the day.",
            "Add Toronto, Canada and Auckland, New Zealand time zones.",
            "Added additional holiday templates and blurbs.",
            "Added additional stores to the Location tool.",
        ],
        changes = [
            "Updated Stone & Metal Codes to show images.",
            "Corrected issues related to notes and blurbs not being favorited properly.",
            "Birthstone chart will generate more accurate results from the website",
            "Updated missing date from previous update.",
            "Replaced photo for Breast Cancer Awareness Month."
        ]
    ),
    new version  (
        number = "1.7.0",
        title = "Morganite",
        date = "10/6/2023",
        additions = [
            "Implimented <b>What's New</b> window, making new additions easier to find and access.",
            "Added Holiday tab for specialized holiday content for seasonal training."
        ],
        changes = [
            "Updated IT support details for ease of access.",
            "Updated policy details and template information.",
            "Updated repair cheat sheet with Rhodium Plating details.",
            "Version numbers on the home screen will update automatically to avoid inconsistencies.",
            "Improved verbiage and clarity for ease of use.",
            "Temporarily removed returns related Steps to avoid usage of Narvar."
        ]
    ),
    new version  (
        number = "1.6.2",
        title = "Amethyst III",
        date = "2/13/2023",
        additions = [],
        changes = [
            "Removed NarvarForMe.",
        ]
    ),
    new version  (
        number = "1.6.1",
        title = "Amethyst II",
        date = "2/13/2023",
        additions = [],
        changes = [
            "Minor bug fixes.",
        ]
    ),
    new version  (
        number = "1.6.0",
        title = "Amethyst I",
        date = "2/13/2023",
        additions = [
            "DART will default to the Dartboard, DART's Dashboard, to advise the user of important notifications, such as set up progress or holidays up to a month in advance.",
            "DART's user interface has been adjusted due to added content, with additional general improvements to content design, such as some elements reflecting Salesforce's task/case layout.",
            "Users can check the current time and weather of the warehouse, current and upcoming holidays, estimated delivery dates, as well as times of noteworthy geographical locations with the Weather & Time dropdown menu.",
            "The Randomized Product Description generator now includes optional Qualities to add increased details to product descriptions, and had additional occassions for events.",
            "Keyword Search displays a count of search results, and makes suggestions if you get 0 results.",
            "Search filters user interface has been improved.",
            "Search Tags have been refinded to display fewer Tags, but each tag can be found with similar keywords.",
            "Stone, Metal, and Chain codes are searchable by name or style code. Full lists in Product Inquiry.",
            "New note: Narvar Return Codes.",
            "Add new steps for Product Availability & Sales.",
            "Added some support for questions that can be asked in the Keywords Search Bar. Please note: searches will still keyword based and common search terms (<i>how, where, can, etc.</i>) are removed in favor of keywords.",
            "New Seasonal themes for Spring, Summer, Fall, Winter, New Year, Lunar New Year, Valentine's Day, American Independence, Pan African Traditions, Cinco De Mayo. Additional Purple, Yellow, Orange, and Cyan Color Schemes.",
            "The Notification Queue will keep record of up to 50 previous actions.",
            "Notes & Tools can be favorited.",
        ],
        changes = [
            "Much of DART has been unlocked, but it will still default or DART LITE for future incoming content.",
            "QuickText has been renamed to QuickTask and given a new icon due to bloat. QuickTask will only return generic versions of tasks for departments.",
            "Steps have been moved to the navigation bar and will function as tool.",
            "Favorites have been moved to the navigation bar in the menu. The Favorites icon will be filled if the user has Favorite, and the favorites limit increased to 30.",
            "Updated Birthstone chart to include images of birthstones and an improved layout.",
            "Boutiques is now Locations and has been moved to general. Changed Boutique display images to appear smaller. Boutique images will also appear in searches. Corrected issue with incorrect phone number for Charlotte store.",
            "Classic - Rainbow Light/Dark Schemes have been renamed to Confetti Light/Dark, and moved to the Themed section.",
            "Fixed bug with some rainbow colors not appearing properly.",
            "Added clarity to the shipping policy, returns policy, repair details, and existing templates for accuracy.",
            "improved backend functionality.",
        ]
    ),
    new version (
        number = "1.5.0",
        title = "Sapphire",
        date = "12/15/2022",
        additions = [
            "Introduced Tip Of The Day to give users some general information as they start DART. Clicking the tip area will randomly generate a new tip.",
            "Added several new notes regarding policies, sizing, measurements, product information, repair information, and delivery times.",
            "Added a list of boutiques, which can also be searched for when looking for boutique related information (Name, City, State, Zip, etc.).",
            "Added additional Steps for out of policy returns processes.",
            "Integrated Search Sensitivity & Search Filters, so searches will return more accurate results.",
            "Added a new Customer Care Tab to the end of the Tab list of for office related tools, with a new <i>What's For Lunch</i> tool for team members to pick lunch randomly together or alone.",
            "Added descriptions to existing Colors Schemes, while also adding 7 new Color Schemes: <i>Pietersite</i> in Gemstones, and a new set of Color Schemes inspired by David Yurman Collections: <i>Novella, Renaissance, Cairo, Waves, and Shipwreck</i>. Lastly, a color scheme inspired by the popular digital content platform, Steam, titled <i>Player 1</i> under Themed. Additionally, Snowflakes will fall for current winter seasonal themes.",
            "The Navigation dock now has an icon to return to the Search Bar and Tabs area."
        ],
        changes = [
            "Checklists have been completely removed, replaced with Steps.",
            "Tools now have additional text and descriptions associated with them for added clarify.",
            "Templates now have clear indications of their purposes (Task, Case, Email, etc.).",
            "Moved favorites to the front of the list for ease of access. Favorites will also show before QuickText if the user has favorites saved.",
            "<i>Styling</i> has been changed to <i>Styling & Sizing</i>",
            "Navigation Dock is now shown by default, with a slight icon change for the toggle, due to the addition of the new button.",
            "Corrected searches activating the boutique tab.",
            "Corrected incorrect DRS links.",
            "General settings will now load if a color scheme hasn't been set.",
            "Changed IT Support icons to be a computer instead of a laptop.",
            "Slight adjustments to color schemes and existing UI elements, such as row-hoverovers for several lists, and a special black-and-white hoverover for the birthstone table to see the colors more clearly on different color schemes.",
            "Improved verbiage and clarity for ease of use.",
            "Adjusted dates of patch 1.0.0 & 1.4.0."
        ]
    ),
    new version (
        number = "1.4.0",
        title = "Jade",
        date = "12/1/2022",
        additions = [
            "Integrated Settings into the navgation bar, so users can setup their personal data as well as adjust their preferences.<br>If DART is launched without your first or last name saved, it will open to the Settings page.<br>Once saved, DART will greet you.",
            "Checklists will be replaced with Steps, so users can walk through a process step-by-step and consider alternatives if needed. This experimental feature is still in development as is not active in DART Lite.",
            "Implemented Favorites, marked with a star, so users can save (or remove) their often used Templates or Blurbs for later.<br>Currently, users may have up to 20 saved.",
            "Added Notifications, to alert the user of their activity, such as copying text to your clipboard, and to greet the user upon loading DART.",
            "Developed Custom Color Schemes, which can be used with HTML Colors, RGB Colors, or Hexidecimal Colors.",
            "Preset Color Schemes are categorized by style: Light, Dark, Gemstones, Themed, Seasonal.",
        ],
        changes = [
            "Indented Blurbs no longer have pieces of code in them.",
            "Products with apostrophe no longer cause the Randomized Product Description to break.",
            "Color Schemes have been moved to the new Settings options.",
            "Slight modifications to existing Color Schemes.",
            "Text for Search Results doesn't permanently change the color of title text.",
            "Tabs are larger and display text below them."
        ]
    ),
    new version (
        number = "1.3.1",
        title = "Amber II",
        date = "11/17/2022",
        additions = ["New Template For Engraving Inquiries."],
        changes = [
            "Fixed issue with search populating incorrectly.",
            "Corrected typos."
        ]
    ),
    new version (
        number = "1.3.0",
        title = "Amber I",
        date = "11/17/2022",
        additions = [
            "Implemented <i>Search</i> & <i>Tags</i> to make filtering through Templates and Blurbs easier. Search will bring up related content involving the keyword or phrase entered. Tags can be clicked to query similar results for convenience.",
            "Some Templates and Blurbs will appears in multiple categories where appropriate.",
            "Added additionl tabs: Product Inquiry for product, gemstone, and metal inquiries, and Wholesale for wholesale inquiries.",
            "Integrated preset color schemes. DART will default to Classic - Light.",
            "Currently active Tab will show as highlighted.",
            "Additional Templates and Blurbs have been added."
        ],
        changes = [
            "The Randomized Product Description Tool will only note a product is a gift if the occassion is a gift giving occasion.",
            "Moved NarvarForMe to Returns.",
            "Rearranged Tabs to group similar Tabs together.",
            "Changed Wedding Tab icon to a heart.",
            "Improved verbiage and clarity for ease of use.",
            "Shade of grey is darkened for improved visability."
        ]
    ),
    new version (
        number = "1.2.0",
        title = "Citrine",
        date = "11/10/2022",
        additions = [
            "Developed Blurbs - Similar to templates, these are smaller bits of text to fill in an email with common verbiage. Currently locked until more are reviewed and added.",
            "Restored QuickText. QuickText allows for immediate access to all templates without filtering.",
            "Improved the Randomized Product Description Tool with additional descriptions. The tool also adds <i>Occasions</i> - What is the purchase/gift for? - across a varity of occasions for more refined communication between the agent and the customer.",
            "Implemented a navigation menu to toggle Between DART and DART LITE, and to view changelog and credits.",
            "Added descriptions to all class types when loaded into the User Interface (Templates, Tools, Notes, Etc.)",
            "Users will be asked to open DART in a JavaScript enabled browser if Javascript is not enabled.",
            "integrated error messages when tools are used incorrectly.",
            "Increased number of hoverovers for ease of use."
        ],
        changes = [
            "DART now defaults to DART LITE until unlocked instead of having two versions.",
            "Generated text from tools will no longer automatically copy to the user's clipboard. Instead, the user will have the option of copying the text to their clipboard.",
            "Overhauled backend to make templates, tools, changelogs, etc. easier to implement in alignment with the addition of QuickText.",
            "Minor design changes in alignment with alignment with the addition of QuickText.",
            "Updated tab alignment to prevent tabs from being slightly off center.",
            "Removed changelog from tabs to avoid confusion. It can be accessed from the Navigation menu.",
            "Improved verbiage and clarity for ease of use.",
        ]
    ),
    new version (
        number = "1.1.0",
        title = "Garnet",
        date = "11/05/2022",
        additions = [
            "Implemented Changelog filter to monitor changes.",
            "Added IT Support filter for recent IT Changes.",
            "Additional Boutique templates.",
            "Additional Repair templates."
        ],
        changes = [
            "Updated Boutique department names.",
            "Corrected minor errors in the Canadian Returns Checklist</b>."
        ]
    ),
    new version (
        number = "1.0.0",
        title = "Gold",
        date = "9/25/2022 | Launch",
        additions = [],
        changes = []
    )
]

//----------------------------------------------------------------------------------------------------
//
//  GENERAL
//
//----------------------------------------------------------------------------------------------------

window.addEventListener('DOMContentLoaded', (event) => {
    start();

    if (!lite_mode) {
        toggleLite();
    } else {
        addTabs();
    }

    setDropDowns();

    getTime();
    setInterval(getTime, 1000);

    //getWholesaleTimes()
    //setInterval(getWholesaleTimes, 30000);

    getWeather();
    setInterval(getWeather, 30000);

    startNotice();
    addDashboard();
    getVersion();
});

//----------------------------------------------------------------------------------------------------
//
//  DATA: Chains
//
//----------------------------------------------------------------------------------------------------

class chain {
    constructor (title="", code="") {
        this.title = title;
        this.code = code;
    }
}

const chains = [
    new chain (title="1mm Mini Box Chain", code="130"),
    new chain (title="1.1mm Mini Oval Chain", code="279"),
    new chain (title="1.25mm Petite Box Chain", code="181"),
    new chain (title="1.7mm Baby Box Chain", code="126"),
    new chain (title="1.7mm Baby Box Chain", code="306"),
    new chain (title="2.7mm Small Box Chain", code="104"),
    new chain (title="2.7mm Small Box Chain", code="189"),
    new chain (title="2.7mm Small Acrylic Box Chain", code="425"),
    new chain (title="3.6mm Medium Box Chain", code="100"),
    new chain (title="3.6mm Medium Box Chain", code="238"),
    new chain (title="3.6mm Medium Box Chain", code="140"),
    new chain (title="4.8mm Large Box Chain", code="235"),
    new chain (title="4.8mm Large Box Chain", code="240"),
    new chain (title="4.8mm Large Box Chain", code="360"),
    new chain (title="4.8mm Large Box Chain", code="379"),
    new chain (title="5.2mm Extra Large Box Chain", code="115"),
]

//----------------------------------------------------------------------------------------------------
//
//  DATA: Stones
//
//----------------------------------------------------------------------------------------------------

class stone {
    constructor (title="", code="") {
        this.title = title;
        this.code = code;
    }
}

const stones = [
    new stone (title="African Amethyst", code="AA"),
    new stone (title="Bolivian Amethyst", code="AB"),
    new stone (title="Aqua Chalcedony", code="AC"),
    new stone (title="Andradite Garnet", code="AD"),
    new stone (title="Ametrine", code="AE"),
    new stone (title="Agate", code="AG"),
    new stone (title="Black Orchid", code="AH"),
    new stone (title="Anthracite", code="AI"),
    new stone (title="Milky Amethyst", code="AJ"),
    new stone (title="Argonite", code="AK"),
    new stone (title="Lavender Amethyst", code="AL"),
    new stone (title="Amethyst", code="AM"),
    new stone (title="Andalusite", code="AN"),
    new stone (title="Black Opal", code="AO"),
    new stone (title="Cultured Apricot Pearl", code="AP"),
    new stone (title="Aquamarine", code="AQ"),
    new stone (title="Amber", code="AR"),
    new stone (title="Butterscotch Amber", code="AS"),
    new stone (title="Apatite", code="AT"),
    new stone (title="Aquaprase", code="AU"),
    new stone (title="Aventurine", code="AV"),
    new stone (title="Alexandrite", code="AX"),
    new stone (title="Cat's Eye Apatite", code="AY"),
    new stone (title="Amazonite", code="AZ"),
    new stone (title="Botswana Agate", code="BA"),
    new stone (title="Blue Beryl", code="BB"),
    new stone (title="Blue Chalcedony", code="BC"),
    new stone (title="Black Diamond", code="BD"),
    new stone (title="Beryl", code="BE"),
    new stone (title="Black Carbon Fiber", code="BF"),
    new stone (title="Blue Agate", code="BG"),
    new stone (title="Black Sapphire", code="BH"),
    new stone (title="Blue Tiger's Eye", code="BI"),
    new stone (title="Black Jade", code="BJ"),
    new stone (title="Black Slate With Pyrite", code="BK"),
    new stone (title="Bloodstone", code="BL"),
    new stone (title="Blue Topaz Over Mother Of Pearl", code="BM"),
    new stone (title="London Blue Topaz", code="BN"),
    new stone (title="Black Onyx", code="BO"),
    new stone (title="Cultured Black Pearl", code="BP"),
    new stone (title="Beer Quartz", code="BQ"),
    new stone (title="Brown Sapphire", code="BR"),
    new stone (title="Light Blue Sapphire", code="BS"),
    new stone (title="Blue Topaz", code="BT"),
    new stone (title="Burmese Jade", code="BU"),
    new stone (title="Brown Tsavana Tourmaline", code="BV"),
    new stone (title="African Blackwood", code="BW"),
    new stone (title="Siphon Blue Onyx", code="BX"),
    new stone (title="Yellow Botswana Agate", code="BY"),
    new stone (title="Bronzite", code="BZ"),
    new stone (title="Carnelian", code="CA"),
    new stone (title="Carribean Blue Onyx", code="CB"),
    new stone (title="Champagne Citrine", code="CC"),
    new stone (title="Cognac Diamond", code="CD"),
    new stone (title="White Ceramic", code="CE"),
    new stone (title="Charoite", code="CF"),
    new stone (title="Color Change Garnet", code="CG"),
    new stone (title="Chrysoprase", code="CH"),
    new stone (title="Citrine", code="CI"),
    new stone (title="Cacoxenite", code="CJ"),
    new stone (title="Black Ceramic", code="CK"),
    new stone (title="Coleoptera - Beetle", code="CL"),
    new stone (title="Chocolate Moonstone", code="CM"),
    new stone (title="Gunmetal Grey Ceramic", code="CN"),
    new stone (title="Condor Agate", code="CO"),
    new stone (title="Cultured Peach Pearl", code="CP"),
    new stone (title="Cinnamon Quartz", code="CQ"),
    new stone (title="Rock Crystal Quartz", code="CR"),
    new stone (title="Carnelian Sardonyx", code="CS"),
    new stone (title="Chrome Tourmaline", code="CT"),
    new stone (title="Cuprite", code="CU"),
    new stone (title="Canary Lava", code="CV"),
    new stone (title="Cocobolo Wood", code="CW"),
    new stone (title="Red Ceramic", code="CX"),
    new stone (title="Caymanite", code="CY"),
    new stone (title="Cubic Zirconia", code="CZ"),
    new stone (title="Banded Agate", code="DA"),
    new stone (title="Dyed Blue Chalcedony", code="DB"),
    new stone (title="Champagne Diamond", code="DC"),
    new stone (title="Dyed Sea Bamboo", code="DD"),
    new stone (title="Grey Agatized Dinosaur Bone", code="DE"),
    new stone (title="Demantoid Garnet", code="DG"),
    new stone (title="Deep Rhodonite", code="DH"),
    new stone (title="Diamond", code="DI"),
    new stone (title="Damascus", code="DK"),
    new stone (title="Blue Agatized Dinosaur Bone", code="DL"),
    new stone (title="Pressed Amber", code="DM"),
    new stone (title="Orange Agatized Dinosaur Bone", code="DO"),
    new stone (title="Pink Diamond", code="DP"),
    new stone (title="Red Quartz", code="DQ"),
    new stone (title="Red Agatized Dinosaur Bone", code="DR"),
    new stone (title="Red Spinel", code="DS"),
    new stone (title="Dolomite", code="DT"),
    new stone (title="Dumortierite", code="DU"),
    new stone (title="Dark Green Tsavana Tourmaline", code="DV"),
    new stone (title="Desert Ironwood Burl", code="DW"),
    new stone (title="Dyed Cultured Yellow Pearl", code="DY"),
    new stone (title="Druzy", code="DZ"),
    new stone (title="Red Agate", code="EA"),
    new stone (title="Ebony Wood", code="EB"),
    new stone (title="Blue Sponge Coral", code="EC"),
    new stone (title="Eudialyte", code="ED"),
    new stone (title="Cat's Eye Emerald", code="EE"),
    new stone (title="Ethiopian Fluorite", code="EF"),
    new stone (title="Green Agate", code="EG"),
    new stone (title="Blue Spinel", code="EL"),
    new stone (title="Emerald", code="EM"),
    new stone (title="Benitoite", code="EN"),
    new stone (title="Cultured Blue Pearl", code="EP"),
    new stone (title="Grey Sapphire", code="ES"),
    new stone (title="Cat's Eye Tourmaline", code="ET"),
    new stone (title="Endgrain Palm Wood", code="EW"),
    new stone (title="Cat's Eye Sillimanite", code="EY"),
    new stone (title="Fire Agate", code="FA"),
    new stone (title="Fossilized Coral", code="FC"),
    new stone (title="Forged Carbon", code="FG"),
    new stone (title="Champagne Cultured Freshwater Pearl", code="FH"),
    new stone (title="Faience-Glazed Ceramic", code="FI"),
    new stone (title="Frosted Rock Crystal Quartz", code="FL"),
    new stone (title="Fused Meteorite", code="FM"),
    new stone (title="Fire Opal", code="FO"),
    new stone (title="Dark Grey Cultured Freshwater Pearl", code="FP"),
    new stone (title="Feldspar", code="FR"),
    new stone (title="Leaf Green Sapphire", code="FS"),
    new stone (title="Garnet", code="GA"),
    new stone (title="Green Beryl", code="GB"),
    new stone (title="Grey Chalcedony", code="GC"),
    new stone (title="Chrome Diopside", code="GD"),
    new stone (title="Grey Agate", code="GE"),
    new stone (title="Grey Carbon Fiber", code="GF"),
    new stone (title="Gold Dome", code="GG"),
    new stone (title="Green Honeycomb", code="GH"),
    new stone (title="Grey Diamond", code="GI"),
    new stone (title="Granite", code="GJ"),
    new stone (title="Grey Keshi Pearl", code="GK"),
    new stone (title="Glass", code="GL"),
    new stone (title="Grey Moonstone", code="GM"),
    new stone (title="Grossular Garnet", code="GN"),
    new stone (title="Green Onyx", code="GO"),
    new stone (title="Cultured Grey Pearl", code="GP"),
    new stone (title="Cognac Quartz", code="GQ"),
    new stone (title="Green Amber", code="GR"),
    new stone (title="Green Sapphire", code="GS"),
    new stone (title="Green Tourmaline", code="GT"),
    new stone (title="Guava Quartz", code="GU"),
    new stone (title="Green Tsavana Tourmaline", code="GV"),
    new stone (title="Salt And Pepper Diamond", code="GW"),
    new stone (title="Grey Onyx", code="GX"),
    new stone (title="Green Chalcedony", code="GY"),
    new stone (title="Green Zircon", code="GZ"),
    new stone (title="Amethyst Over Hematine", code="HA"),
    new stone (title="Blue Honeycomb", code="HB"),
    new stone (title="Honey Chalcedony", code="HC"),
    new stone (title="Schalenblende", code="HD"),
    new stone (title="Hematite", code="HE"),
    new stone (title="Hornblende", code="HF"),
    new stone (title="Hessonite Garnet", code="HG"),
    new stone (title="Honey Jade", code="HJ"),
    new stone (title="Hawk's Eye", code="HK"),
    new stone (title="Labradorite Over Hematine", code="HL"),
    new stone (title="Hemimorphite", code="HM"),
    new stone (title="Garnet Over Hematine", code="HN"),
    new stone (title="Grey Orchid", code="HO"),
    new stone (title="Purple Sapphire", code="HP"),
    new stone (title="Honey Quartz", code="HQ"),
    new stone (title="Cacholong", code="HR"),
    new stone (title="Color Change Sapphire", code="HS"),
    new stone (title="Peach Tourmaline", code="HT"),
    new stone (title="Burgandy Honeycomb", code="HU"),
    new stone (title="Howlite", code="HW"),
    new stone (title="Hypersthene", code="HY"),
    new stone (title="Hampton Blue Topaz", code="IB"),
    new stone (title="Hampton Blue Topaz Over Hematine", code="IE"),
    new stone (title="Mandarin Garnet", code="IG"),
    new stone (title="Larimar", code="IL"),
    new stone (title="Milky Idocrase", code="IM"),
    new stone (title="Indicolite", code="IN"),
    new stone (title="Iolite", code="IO"),
    new stone (title="Hampton Blue Topaz Over Mother Of Pearl", code="IP"),
    new stone (title="Barite", code="IR"),
    new stone (title="Hot Pink Spinel", code="IS"),
    new stone (title="Imperial Topaz", code="IT"),
    new stone (title="Ivory", code="IV"),
    new stone (title="Indian Grey Sapphire", code="IY"),
    new stone (title="Jasper", code="JA"),
    new stone (title="Jade", code="JD"),
    new stone (title="Gunnery Point Jasper", code="JG"),
    new stone (title="Blue Savannah Jasper", code="JH"),
    new stone (title="Leopard Skin Jasper", code="JL"),
    new stone (title="Porcelain Jasper", code="JN"),
    new stone (title="Poppy Jasper", code="JP"),
    new stone (title="Red Jasper", code="JR"),
    new stone (title="Ocean Jasper", code="JS"),
    new stone (title="Jet", code="JT"),
    new stone (title="Vista Jasper", code="JV"),
    new stone (title="Pink Ocean Wave Jasper", code="JW"),
    new stone (title="Brecciated Mookaite Jasper", code="KB"),
    new stone (title="Cracked Rock Crystal Quartz", code="KC"),
    new stone (title="Milky Morganite", code="KE"),
    new stone (title="Cultured Akoya Grey Pearl", code="KG"),
    new stone (title="Shattuckite", code="KH"),
    new stone (title="Black Coral", code="KL"),
    new stone (title="Pink Opal", code="KO"),
    new stone (title="Black Star Sapphire", code="KP"),
    new stone (title="Black Spinel", code="KS"),
    new stone (title="Black Tourmaline", code="KT"),
    new stone (title="Kunzite", code="KU"),
    new stone (title="Cultured Akoya White Pearl", code="KW"),
    new stone (title="Kyanite", code="KY"),
    new stone (title="Lapis Lazuli", code="LA"),
    new stone (title="Labradorite", code="LB"),
    new stone (title="Lemon Citrine", code="LC"),
    new stone (title="Blue Diamond", code="LD"),
    new stone (title="Blue Lace Agate", code="LE"),
    new stone (title="Silver Lightning Strike Carbon Fiber", code="LF"),
    new stone (title="Laguna Agate", code="LG"),
    new stone (title="Lemon Chrysoprase", code="LH"),
    new stone (title="Lemon Citrine Over Grey Mother Of Pearl", code="LI"),
    new stone (title="Silver Leaf Jasper", code="LJ"),
    new stone (title="Lemon Citrine Over Black Onyx", code="LK"),
    new stone (title="Chrysocolla", code="LL"),
    new stone (title="Lemon Citrine Over Mother Of Pearl", code="LM"),
    new stone (title="Lavender Chalcedony", code="LN"),
    new stone (title="Lavender Onyx", code="LO"),
    new stone (title="Cultured Lavender Pearl", code="LP"),
    new stone (title="Lavender Moon Quartz", code="LQ"),
    new stone (title="Light Amber", code="LR"),
    new stone (title="Light Pink Sapphire", code="LS"),
    new stone (title="Green Orchid", code="LT"),
    new stone (title="Pallasite", code="LU"),
    new stone (title="Lava", code="LV"),
    new stone (title="White Agate Over Lapis Lazuli", code="LW"),
    new stone (title="Lemon Chalcedony", code="LY"),
    new stone (title="Light Blue Topaz", code="LZ"),
    new stone (title="Moss Agate", code="MA"),
    new stone (title="Black Mother Of Pearl", code="MB"),
    new stone (title="Madeira Citrine", code="MC"),
    new stone (title="Moldavite", code="MD"),
    new stone (title="Meteorite", code="ME"),
    new stone (title="Moldavite Over Black Onyx", code="MF"),
    new stone (title="Mali Garnet", code="MG"),
    new stone (title="Peach Mother Of Pearl", code="MH"),
    new stone (title="Gaspeite Magnesite", code="MI"),
    new stone (title="Milky Jade", code="MJ"),
    new stone (title="Pink Mother Of Pearl", code="MK"),
    new stone (title="Malachite", code="ML"),
    new stone (title="Milky Rose Quartz Over Mother Of Pearl", code="MM"),
    new stone (title="Malachite With Black Onyx", code="MN"),
    new stone (title="Morganite", code="MO"),
    new stone (title="Mother Of Pearl", code="MP"),
    new stone (title="Milky Aquamarine", code="MQ"),
    new stone (title="Milky Rose Quartz", code="MR"),
    new stone (title="Mixed Sapphires", code="MS"),
    new stone (title="Maw Sit Sit", code="MT"),
    new stone (title="Mokume", code="MU"),
    new stone (title="Lavender Moon Quartz Over Mother Of Pearl", code="MV"),
    new stone (title="Moldavite Over Hematine", code="MW"),
    new stone (title="Mixed Stones", code="MX"),
    new stone (title="Mahogany Obsidian", code="MY"),
    new stone (title="Milky Quartz", code="MZ"),
    new stone (title="Not Applicable", code="NA"),
    new stone (title="Mango Chalcedony", code="NC"),
    new stone (title="Magnesite", code="NE"),
    new stone (title="Sphene", code="NF"),
    new stone (title="Green Garnet", code="NG"),
    new stone (title="Mint Chrysoprase", code="NH"),
    new stone (title="Pinolith", code="NI"),
    new stone (title="Nepharite Jade", code="NJ"),
    new stone (title="Milky Pink Tourmaline", code="NK"),
    new stone (title="Lemon Magnesite", code="NL"),
    new stone (title="Rainbow Moonstone", code="NM"),
    new stone (title="Champagne Garnet", code="NN"),
    new stone (title="Green Opal", code="NO"),
    new stone (title="Cultured Abalone Pearl", code="NP"),
    new stone (title="Tyrone Turquoise", code="NQ"),
    new stone (title="Noreena Jasper", code="NR"),
    new stone (title="Sillimanite", code="NS"),
    new stone (title="Mint Tourmaline", code="NT"),
    new stone (title="Nevada Silk Jade", code="NV"),
    new stone (title="Natural Yellow Sapphire", code="NY"),
    new stone (title="Opal Chalcedony", code="OA"),
    new stone (title="Black Obsidian", code="OB"),
    new stone (title="Orange Chalcedony", code="OC"),
    new stone (title="Gold Sheen Sapphire", code="OD"),
    new stone (title="Grey Mother Of Pearl", code="OE"),
    new stone (title="Silver Cobolt", code="OF"),
    new stone (title="Gold Sheen Obsidian", code="OG"),
    new stone (title="Light Orange Sapphire", code="OH"),
    new stone (title="Silver Sheen Obsidian", code="OI"),
    new stone (title="Orange Spinel", code="OL"),
    new stone (title="Orange Moonstone", code="OM"),
    new stone (title="Orange Carnelian", code="ON"),
    new stone (title="Mookaite Jasper", code="OO"),
    new stone (title="Opal", code="OP"),
    new stone (title="Olive Quartz", code="OQ"),
    new stone (title="Marra Momba Tiger's Eye", code="OR"),
    new stone (title="Orange Sapphire", code="OS"),
    new stone (title="Orange Tourmaline", code="OT"),
    new stone (title="Orange Tsavana Tourmaline", code="OV"),
    new stone (title="Opalized Wood", code="OW"),
    new stone (title="Opal Over Black Onyx", code="OX"),
    new stone (title="Spiny Oyster Shell", code="OY"),
    new stone (title="New Prasiolite", code="PA"),
    new stone (title="Pariba Tourmaline", code="PB"),
    new stone (title="Pink Coral", code="PC"),
    new stone (title="South American Amaranth", code="PD"),
    new stone (title="Cultured Pearl", code="PE"),
    new stone (title="Prasiolite Over Mother Of Pearl", code="PF"),
    new stone (title="Pyrope Garnet", code="PG"),
    new stone (title="Padparadscha Sapphire", code="PH"),
    new stone (title="Pyrite", code="PI"),
    new stone (title="Picture Jasper", code="PJ"),
    new stone (title="Pink Chalcedony", code="PK"),
    new stone (title="Prasiolite", code="PL"),
    new stone (title="Peach Moonstone", code="PM"),
    new stone (title="Prehnite", code="PN"),
    new stone (title="Peruvian Opal", code="PO"),
    new stone (title="Cultured Pink Pearl", code="PP"),
    new stone (title="Peruvian Turquoise", code="PQ"),
    new stone (title="Peridot", code="PR"),
    new stone (title="Pink Sapphire", code="PS"),
    new stone (title="Pink Tourmaline", code="PT"),
    new stone (title="Medium Shade Pink Sapphire", code="PU"),
    new stone (title="Prasiolite Over Pyrite", code="PV"),
    new stone (title="Petrified Palm Wood", code="PW"),
    new stone (title="Pietersite Over Black Onyx", code="PX"),
    new stone (title="Pietersite", code="PY"),
    new stone (title="Pink Topaz", code="PZ"),
    new stone (title="Antique Black Agate", code="QA"),
    new stone (title="Black & Gold Quartz", code="QB"),
    new stone (title="Rock Crystal Quartz Over Aqua Chalcedony", code="QC"),
    new stone (title="Gold & White Quartz", code="QE"),
    new stone (title="Grey Quartz", code="QG"),
    new stone (title="Mona Lisa Turquoise", code="QI"),
    new stone (title="Rock Crystal Quartz Over Opal", code="QL"),
    new stone (title="Moon/Milky Quartz", code="QM"),
    new stone (title="Cinnamon Quartz Over Carnelian", code="QN"),
    new stone (title="Moon/Milky Quartz Over Mother Of Pearl", code="QO"),
    new stone (title="Rose Quartz Over Pink Mother Of Pearl", code="QP"),
    new stone (title="Red Rutilated Quartz", code="QR"),
    new stone (title="Spider Web Turquoise", code="QS"),
    new stone (title="Tourmilated Quartz", code="QT"),
    new stone (title="Quartz", code="QU"),
    new stone (title="White Quartzite", code="QW"),
    new stone (title="Brown Agate", code="RA"),
    new stone (title="Rubellite", code="RB"),
    new stone (title="Red Coral", code="RC"),
    new stone (title="Rhodochrosite", code="RD"),
    new stone (title="Red Tiger's Eye", code="RE"),
    new stone (title="Rock Crystal Quartz Over Mother Of Pearl", code="RF"),
    new stone (title="Rhodolite Garnet", code="RG"),
    new stone (title="Rhodonite", code="RH"),
    new stone (title="Rhine River Rock", code="RI"),
    new stone (title="Rainbow Jasper", code="RJ"),
    new stone (title="Rock Crystal Quartz Over Rhodolite Garnet", code="RK"),
    new stone (title="Red Labradorite", code="RL"),
    new stone (title="Rose Quartz Over Mother Of Pearl", code="RM"),
    new stone (title="Red Carnelian", code="RN"),
    new stone (title="Grey Opal", code="RO"),
    new stone (title="Rose Quartz With Pink Opal", code="RP"),
    new stone (title="Rose Quartz", code="RQ"),
    new stone (title="Red Ruby", code="RR"),
    new stone (title="Red Sapphire", code="RS"),
    new stone (title="Rock Crystal Quartz Over Gold Sheen Obsidian", code="RT"),
    new stone (title="Ruby", code="RU"),
    new stone (title="Riverstone", code="RV"),
    new stone (title="Banded Rhodochrosite", code="RX"),
    new stone (title="Indian Ruby", code="RY"),
    new stone (title="Ruby Zoisite", code="RZ"),
    new stone (title="Sapphire", code="SA"),
    new stone (title="Top Blue Sapphire", code="SB"),
    new stone (title="Red Sponge Coral", code="SC"),
    new stone (title="Seed Bead", code="SD"),
    new stone (title="Serpentine", code="SE"),
    new stone (title="Blue Star Sapphire", code="SF"),
    new stone (title="Synthetic Green", code="SG"),
    new stone (title="Sphalerite", code="SH"),
    new stone (title="Indian Blue Sapphire", code="SI"),
    new stone (title="Picasso Jasper", code="SJ"),
    new stone (title="Champagne Cultured South Sea Pearl", code="SK"),
    new stone (title="Scapolite", code="SL"),
    new stone (title="Smokey Quartz Over Mother Of Pearl", code="SM"),
    new stone (title="Snowflake Obsidian", code="SN"),
    new stone (title="Sodalite", code="SO"),
    new stone (title="Cultured Silver Pearl", code="SP"),
    new stone (title="Smokey Quartz", code="SQ"),
    new stone (title="Spessartite Garnet", code="SR"),
    new stone (title="Silver Dome", code="SS"),
    new stone (title="Tangerine Sapphire", code="ST"),
    new stone (title="Polychrome Sapphire", code="SU"),
    new stone (title="Lavender Spinel", code="SV"),
    new stone (title="Cultured South Sea White Pearl", code="SW"),
    new stone (title="Sphene", code="SX"),
    new stone (title="Cultured South Sea Golden Pearl", code="SY"),
    new stone (title="Star Quartz", code="SZ"),
    new stone (title="Tuxedo Agate", code="TA"),
    new stone (title="Cultured Tahitian Black Pearl", code="TB"),
    new stone (title="Champagne Topaz", code="TC"),
    new stone (title="Blue Tiger's Eye", code="TD"),
    new stone (title="Tiger's Eye", code="TE"),
    new stone (title="American Turquoise", code="TF"),
    new stone (title="Cultured Tahitian Grey Pearl", code="TG"),
    new stone (title="Chinese Turquoise", code="TH"),
    new stone (title="Tiger Iron", code="TI"),
    new stone (title="Egyptian Turquoise", code="TJ"),
    new stone (title="Cultured Tahitian Keshi Pearl", code="TK"),
    new stone (title="Tourmaline Crystal", code="TL"),
    new stone (title="Blue Topaz Over Black Mother Of Pearl", code="TM"),
    new stone (title="Tiger Skin", code="TN"),
    new stone (title="Tourmaline", code="TO"),
    new stone (title="Tahitian Peacock", code="TP"),
    new stone (title="Turquoise", code="TQ"),
    new stone (title="Reconstituted Turquoise", code="TR"),
    new stone (title="Tsavorite", code="TS"),
    new stone (title="Travertine", code="TT"),
    new stone (title="High Quality Chinese Turquoise", code="TU"),
    new stone (title="Mexican Turquoise", code="TV"),
    new stone (title="Mexican Matrix Turquoise", code="TW"),
    new stone (title="Matrix-Kingsman Turquoise", code="TX"),
    new stone (title="Tiger's Eye With Black Onyx", code="TY"),
    new stone (title="Tanzanite", code="TZ"),
    new stone (title="Agua Nueva Agate", code="UA"),
    new stone (title="Black Sunstone", code="UB"),
    new stone (title="TBD", code="UC"),
    new stone (title="Golden Sunstone", code="UD"),
    new stone (title="Purple Garnet", code="UE"),
    new stone (title="Purple Banded Fluorite", code="UF"),
    new stone (title="Sugilite", code="UG"),
    new stone (title="Silicium", code="UI"),
    new stone (title="Ural Jasper", code="UJ"),
    new stone (title="Unknown Stone Sample", code="UK"),
    new stone (title="Purple Spinel", code="UL"),
    new stone (title="Blue Moonstone", code="UM"),
    new stone (title="Unakite", code="UN"),
    new stone (title="Rutilated Quartz Over Black Onyx", code="UO"),
    new stone (title="Pink Sapphire Ruby", code="UP"),
    new stone (title="Rutilated Quartz", code="UQ"),
    new stone (title="Sunstone", code="US"),
    new stone (title="Purple Tourmaline", code="UT"),
    new stone (title="Blue Chalcedony Over Mother Of Pearl", code="UW"),
    new stone (title="Blue Moonstone Over Black Onyx", code="UX"),
    new stone (title="Blue Moonstone With Grey Mother Of Pearl", code="UY"),
    new stone (title="Violet Blue Sapphire", code="VB"),
    new stone (title="Variscite", code="VC"),
    new stone (title="Violet Sapphire", code="VH"),
    new stone (title="Cultured Violet Pearl", code="VP"),
    new stone (title="Lavender Sapphire", code="VS"),
    new stone (title="White Agate", code="WA"),
    new stone (title="18k White Gold With Black Rhodium", code="WB"),
    new stone (title="Chinese Writing Stone", code="WC"),
    new stone (title="Desert Iron Wood", code="WD"),
    new stone (title="White Quartz Over Hematine", code="WE"),
    new stone (title="Sycamore Wood", code="WF"),
    new stone (title="Green Agate Over White Quartz", code="WG"),
    new stone (title="White Sapphire", code="WH"),
    new stone (title="White Jasper", code="WJ"),
    new stone (title="White Beryl", code="WL"),
    new stone (title="White Moonstone", code="WM"),
    new stone (title="White Agate Over Green Onyx", code="WN"),
    new stone (title="Bogwood", code="WO"),
    new stone (title="White Topaz With Grey Mother Of Pearl", code="WP"),
    new stone (title="Whiskey Quartz", code="WQ"),
    new stone (title="Spider Web Jasper", code="WR"),
    new stone (title="Snake Wood", code="WS"),
    new stone (title="White Topaz", code="WT"),
    new stone (title="Brown-Orange Tsavana Tourmaline", code="WV"),
    new stone (title="Brown Chalcedony", code="WY"),
    new stone (title="Strawberry Quartz", code="WZ"),
    new stone (title="Matrix Turquoise With Black Onyx", code="XB"),
    new stone (title="Black Onyx With Green Onyx", code="XG"),
    new stone (title="Matrix-Kingsman Turquoise With Lapis Lazuli", code="XL"),
    new stone (title="Black Onyx With White Agate Over Mother Of Pearl", code="XM"),
    new stone (title="Matrix-Kingsman Turquoise With White Agate Over Mother Of Pearl", code="XO"),
    new stone (title="Chocolate Cultured Pearl", code="XP"),
    new stone (title="Green Matrix Reconstituted Turquoise", code="XQ"),
    new stone (title="White Agate Over Red Onyx", code="XR"),
    new stone (title="Cherry Amber", code="YA"),
    new stone (title="Yellow Beryl", code="YB"),
    new stone (title="Yellow Chalcedony", code="YC"),
    new stone (title="Yellow Diamond", code="YD"),
    new stone (title="Yellow Agate", code="YE"),
    new stone (title="Rock Crystal Quartz With Fire Opal", code="YF"),
    new stone (title="Malayan Garnet", code="YG"),
    new stone (title="Yellow Cat's Eye Chrysoberyl", code="YH"),
    new stone (title="Smoke Honeycomb", code="YK"),
    new stone (title="Light Blue Chalcedony", code="YL"),
    new stone (title="Dark Grey Moonstone", code="YM"),
    new stone (title="Hypersthene Moonstone", code="YN"),
    new stone (title="Yellow Onyx", code="YO"),
    new stone (title="Yellow Pietersite", code="YP"),
    new stone (title="Red Honeycomb", code="YR"),
    new stone (title="Yellow Sapphire", code="YS"),
    new stone (title="Yellow-Green Tourmaline", code="YT"),
    new stone (title="Chrysocolla Cuprite", code="YU"),
    new stone (title="Amarillo", code="YW"),
    new stone (title="Yellow Topaz", code="YZ"),
    new stone (title="Azurite", code="ZA"),
    new stone (title="Zebra Agate", code="ZB"),
    new stone (title="Bronze Lightning Strike Carbon Fiber", code="ZF"),
    new stone (title="Blue Topaz Over Hematine", code="ZH"),
    new stone (title="Brazilian Opal", code="ZL"),
    new stone (title="Azurite Malachite", code="ZM"),
    new stone (title="London Blue Topaz Over Hematine", code="ZN"),
    new stone (title="Peach Zircon", code="ZP"),
    new stone (title="Zircon", code="ZR"),
    new stone (title="Not Applicable", code="ZZ"),
]

//----------------------------------------------------------------------------------------------------
//
//  DATA: Metal
//
//----------------------------------------------------------------------------------------------------

class metal {
    constructor (title="", code="") {
        this.title = title;
        this.code = code;
    }
}

const metals = [
    new metal (title="20k Yellow Gold", code="20"),
    new metal (title="22k Yellow Gold", code="22"),
    new metal (title="22k Yellow Gold with Sterling Silver", code="2S"),
    new metal (title="14k Yellow Gold", code="44"),
    new metal (title="14k Rose Gold", code="4R"),
    new metal (title="14k Yellow Gold with Sterling Silver", code="4S"),
    new metal (title="18k Yellow Gold", code="88"),
    new metal (title="18k Yellow Gold with Darkened Sterling Silver", code="8B"),
    new metal (title="18k Yellow Gold with Black Rhodium", code="8D"),
    new metal (title="18k Yellow Gold with 18k Rose Gold and 18k White Gold", code="8G"),
    new metal (title="High Jewelry 18k Yellow Gold", code="8H"),
    new metal (title="18K Yellow Gold with Black Titanium", code="8N"),
    new metal (title="18k Yellow Gold with Platinum", code="8P"),
    new metal (title="18k Rose Gold", code="8R"),
    new metal (title="18k Yellow Gold with Sterling Silver", code="8S"),
    new metal (title="18k White Gold", code="8W"),
    new metal (title="Recycled 18k Yellow Gold", code="8Y"),
    new metal (title="Black Aluminum", code="AB"),
    new metal (title="Sand Aluminum", code="AD"),
    new metal (title="Forest Green Aluminum", code="AF"),
    new metal (title="Grey Aluminum", code="AG"),
    new metal (title="White Aluminum", code="AH"),
    new metal (title="Indigo Aluminum", code="AI"),
    new metal (title="Aluminum with 18k Yellow Gold", code="AK"),
    new metal (title="Aluminum", code="AL"),
    new metal (title="Rose Aluminum", code="AO"),
    new metal (title="Pink Aluminum", code="AP"),
    new metal (title="Blue Aluminum", code="AU"),
    new metal (title="Aluminum with 18k White Gold", code="AW"),
    new metal (title="Black Titanium with 22k Gold", code="B2"),
    new metal (title="Darkened Sterling Silver with 14k Yellow Gold", code="B4"),
    new metal (title="Darkened Sterling Silver with 18k Yellow Gold", code="B8"),
    new metal (title="Black Titanium", code="BB"),
    new metal (title="Black Titanium with 18k Rose Gold", code="BR"),
    new metal (title="Black Titanium with Sterling Silver", code="BS"),
    new metal (title="Black Titanium with Sterling Silver and 18k Yellow Gold", code="BS8"),
    new metal (title="Bronze", code="BZ"),
    new metal (title="PVD Coated Sterling Silver and 18k Yellow Gold", code="C8"),
    new metal (title="Copper", code="CP"),
    new metal (title="PVD Coated Stainless Steel and Sterling Silver", code="CX"),
    new metal (title="Ceramic Coated Sterling Silver and 18k Yellow Gold", code="E8"),
    new metal (title="Stainless Steel with 14k Yellow Gold", code="L4"),
    new metal (title="Stainless Steel with 18k Yellow Gold", code="L8"),
    new metal (title="Stainless Steel with 14k Rose Gold", code="LK"),
    new metal (title="Stainless Steel with 18k Rose Gold", code="LR"),
    new metal (title="Multi 18k Gold", code="M8"),
    new metal (title="Black Titanium with 18k Yellow Gold", code="N8"),
    new metal (title="Black Titanium with Grey Titanium", code="NT"),
    new metal (title="Copper with 22k Yellow Gold", code="O2"),
    new metal (title="Copper with 18k Yellow Gold", code="OH"),
    new metal (title="Copper with 18k Rose Gold", code="OR"),
    new metal (title="Copper with Sterling Silver", code="OS"),
    new metal (title="Platinum with 22k Yellow Gold", code="P2"),
    new metal (title="Platinum with 18k Yellow Gold", code="P8"),
    new metal (title="Platinum with Black Titanium", code="PB"),
    new metal (title="Palladium", code="PD"),
    new metal (title="Platinum with Black Rhodium", code="PH"),
    new metal (title="Platinum", code="PL"),
    new metal (title="Platinum with Sterling Silver", code="PS"),
    new metal (title="Platinum with Grey Titanium", code="PT"),
    new metal (title="18k Rose Gold with 14k Yellow Gold", code="R4"),
    new metal (title="18k Rose Gold with 18k Yellow Gold", code="R8"),
    new metal (title="18k Rose Gold with Black Rhodium", code="RB"),
    new metal (title="18k Rose Gold with Sterling Silver", code="RS"),
    new metal (title="18k Rose Gold with 18k White Gold", code="RW"),
    new metal (title="Recycled 18k Rose Gold", code="RY"),
    new metal (title="Sterling Silver with 22k Yellow Gold", code="S2"),
    new metal (title="Sterling Silver with 14k Yellow Gold", code="S4"),
    new metal (title="Sterling Silver with 18k Yellow Gold", code="S8"),
    new metal (title="Silver Plated Brass", code="SA"),
    new metal (title="Darkened Sterling Silver (Oxidation or Black Rhodium)", code="SB"),
    new metal (title="PVD Coated Sterling Silver", code="SC"),
    new metal (title="Silver and Gold Plated Brass", code="SD"),
    new metal (title="Sterling Silver with Stainless Steel", code="SE"),
    new metal (title="Sterling Silver with 18k Yellow Gold and Grey Titanium", code="SG"),
    new metal (title="Sterling Silver with 14k Rose Gold", code="SK"),
    new metal (title="Sterling Silver with 18k Rose Gold and Grey Titanium", code="SL"),
    new metal (title="Sterling Silver with Platinum", code="SP"),
    new metal (title="Sterling Silver with 18k Rose Gold", code="SR"),
    new metal (title="Sterling Silver", code="SS"),
    new metal (title="Stainless Steel", code="ST"),
    new metal (title="Sterling Silver with Stainless Steel and 18k Yellow Gold", code="SV"),
    new metal (title="Sterling Silver with 18k White Gold", code="SW"),
    new metal (title="PVD Coated Stainless Steel", code="SX"),
    new metal (title="Recycled Sterling Silver", code="SY"),
    new metal (title="Grey Titanium with 18k Yellow Gold", code="T8"),
    new metal (title="Black Titanium with Darkened Sterling Silver", code="TB"),
    new metal (title="Golden Titanium", code="TG"),
    new metal (title="Grey Titanium with 18k Yellow Gold and Darkened Sterling Silver", code="TK"),
    new metal (title="Grey Titanium with 18k Rose Gold and Darkened Sterling Silver", code="TL"),
    new metal (title="Grey Titanium with Black Titanium", code="TN"),
    new metal (title="Purple Titanium", code="TP"),
    new metal (title="Grey Titanium with 18k Rose Gold", code="TR"),
    new metal (title="Grey Titanium with Sterling Silver", code="TS"),
    new metal (title="Grey Titanium", code="TT"),
    new metal (title="Grey Titanium with 18k White Gold", code="TW"),
    new metal (title="Tantalum", code="US"),
    new metal (title="Tantalum with Sterling Silver", code="UT"),
    new metal (title="18k White Gold with 22k Yellow Gold", code="W2"),
    new metal (title="18k White Gold with 14k Yellow Gold", code="W4"),
    new metal (title="18k White Gold with 18k Yellow Gold", code="W8"),
    new metal (title="18k White Gold with Black Rhodium", code="WB"),
    new metal (title="18k White Gold with Platinum", code="WP"),
    new metal (title="18k White Gold with 18k Rose Gold", code="WR"),
    new metal (title="18k White Gold with Sterling Silver", code="WS"),
    new metal (title="Recycled 18k White Gold", code="WY"),
    new metal (title="Bronze with Sterling Silver and 14k Yellow Gold", code="Z4"),
    new metal (title="Bronze with 18k Yellow Gold", code="Z8"),
    new metal (title="Aluminum with Silver", code="ZC"),
    new metal (title="Bronze with Sterling Silver and 18k Yellow Gold", code="ZG"),
    new metal (title="Bronze with Sterling Silver", code="ZS"),
]


//----------------------------------------------------------------------------------------------------
//
//  DATA: Credits
//
//----------------------------------------------------------------------------------------------------

class credit {
    constructor (member="", role="") {
        this.member = member;
        this.role = role;
    }
}

const credits = [
    // Credits should updated as team grows and improves. All world MUST be credited!
    new credit (
        member = "Michael Clancy",
        role ="Developement, Writing"
    ),
    new credit (
        member = "Laura Brigley",
        role ="Writing, Testing"
    ),
    new credit (
        member = "Asmaa Yasin",
        role ="Writing"
    ),
    new credit (
        member = "Erika Varano",
        role = "Testing"
    ),
    new credit (
        member = "codeconvey",
        role = "Additional Code (Screen Effects)"
    ),
]

//----------------------------------------------------------------------------------------------------
//
//  FUNCTIONS: General
//
//----------------------------------------------------------------------------------------------------

function start () {
    setData();
    addTip();
    updateFavoriteIcon();

    if (window.innerWidth > 1800) document.getElementById("menu").classList.add("active");
}

function addSelections () {
    addBoutiques();
    addStones();
    addMetals();
    addChains();
    addBingo();
    showStone();
    showMetal();
}

function setIcon (title="") {
    return `<i class="bi bi-` + title + `"></i>`;
}

function copyToClipboard(text="") {
    navigator.clipboard.writeText(text);

    setNotice("Text Copied To Clipboard", `This text has been copied to your clipboard. You may now paste this text wherever you'd like.<br><br><i>` + HTMLToRichText(text) + `</i>`);
}

function toggleClipboard (targetClipboard) {
    clipboards = document.getElementsByClassName("clipboard");

    for (const clipboard of clipboards) {
        clipboard.innerHTML = setIcon(iconClipboardOff);
    }

    targetClipboard.innerHTML = setIcon(iconClipboardOn);
}

function HTMLToRichText(input) {
    replacement = input;
    replacement = replacement.replace(/'/g, `\'`);
    replacement = replacement.replace(/"/g, `\"`);
    replacement = replacement.replace(/<b>/g, ``);
    replacement = replacement.replace('</b>', ``);
    replacement = replacement.replace(/<i>/g, ``);
    replacement = replacement.replace('</i>', ``);
    replacement = replacement.replace(/<u>/g, ``);
    replacement = replacement.replace('</u>', ``);
    replacement = replacement.replace(/&emsp;/g, "\t");
    replacement = replacement.replace(/<br\s*\/?>/mg,"\n");
    return replacement;
}

function jumpToTop () {
    window.scroll(0, 0);
}

function clear () {
    togglePopup(0);
    clearables = document.getElementsByClassName("clearable");

    for (const c of clearables) {
        c.innerHTML = ``;
    }
}

function clearFilterCheckboxes () {
    var checkboxes = document.getElementsByClassName("searchFilterCheckbox");

    for (const checkbox of checkboxes) {
        checkbox.checked = false;
    }
}

function setFilterCheckboxes () {
    var checkboxes = document.getElementsByClassName("searchFilterCheckbox");

    for (const checkbox of checkboxes) {
        checkbox.checked = true;
    }
}

function removeHTML (text) {
    replacement = text;
    
    if (replacement.includes("<b>")) {
        replacement = replacement.replace("<b>", "");
        replacement = replacement.replace("</b>", "");
    }

    return replacement;
}

function updateText (text) {
    replacement = text;
    
    if (replacement.includes("&repl:firstName")) {
        if (firstName) {
            replacement = replacement.replace("&repl:firstName", firstName);
        } else {
            replacement = replacement.replace("&repl:firstName", "FIRST NAME");
        }
    }
    
    if (replacement.includes("&repl:lastName")) {
        if (lastName) {
            replacement = replacement.replace("&repl:lastName", lastName);
        } else {
            replacement = replacement.replace("&repl:lastName", "LAST NAME");
        }
    }

    if (replacement.includes("&repl:phone")) {
        if (phone) {
            replacement = replacement.replace("&repl:phone", phone);
        } else {
            replacement = replacement.replace("&repl:phone", "PHONE NUMBER");
        }
    }

    if (replacement.includes("&repl:position")) {
        if (position) {
            replacement = replacement.replace("&repl:position", position);
        } else {
            replacement = replacement.replace("&repl:position", "POSITION");
        }
    }

    if (replacement.includes("&repl:policyUsReturnRefundDays")) {
        replacement = replacement.replace("&repl:policyUsReturnRefundDays", policy_return_US_refund_days);
    }

    if (replacement.includes("&repl:policyUsReturnExchangeDays")) {
        replacement = replacement.replace("&repl:policyUsReturnExchangeDays", policy_return_US_exchange_days);
    }

    if (replacement.includes("&repl:policyUsReturnMerchCreditDays")) {
        replacement = replacement.replace("&repl:policyUsReturnMerchCreditDays", policy_return_US_merch_credit_days);
    }

    if (replacement.includes("&repl:policyUsReturnOutletDays")) {
        replacement = replacement.replace("&repl:policyUsReturnOutletDays", policy_return_US_outlet_days);
    }

    if (replacement.includes("&repl:policyUsReturnHolidayStart")) {
        replacement = replacement.replace("&repl:policyUsReturnHolidayStart", policy_return_US_holiday_start);
    }

    if (replacement.includes("&repl:policyUsReturnHolidayEnd")) {
        replacement = replacement.replace("&repl:policyUsReturnHolidayEnd", policy_return_US_holiday_end);
    }

    if (replacement.includes("&repl:policyLGCExpiration")) {
        replacement = replacement.replace("&repl:policyLGCExpiration", policy_LGC_expiration);
    }


    return replacement;
}

String.prototype.capitalize = function() {
    return this.replace( /(^|\s)([a-z])/g , function(m,p1,p2){ return p1+p2.toUpperCase(); } );
};

function createElement (type="", innerHTML="", id="", Class="", title="", style="") {
    element = document.createElement(type); element.innerHTML = innerHTML; element.id = id; element.className = Class; element.title = title;element.style = style; return element;
}

function appendChildren (element, children=[]) {
    for (const child of children) {element.appendChild(child);}
}

//----------------------------------------------------------------------------------------------------
//
//  Functions: Data
//
//----------------------------------------------------------------------------------------------------

function setData () {
    var scheme = parseInt(localStorage.getItem('colorScheme'));

    if (scheme) {
        if (scheme > 0 && scheme < schemes.length) {
            setColorScheme(scheme);
        } else if (scheme < 0) {
            getColorSchemeCustom();
        }
    }

    setColorSchemeStyle(0);

    firstName = localStorage.getItem("firstName");
    lastName = localStorage.getItem("lastName");
    phone = localStorage.getItem("phone");
    position = localStorage.getItem("position");
}

//----------------------------------------------------------------------------------------------------
//
//  Functions: Notice
//
//----------------------------------------------------------------------------------------------------

function startNotice () {
    document.getElementById("noticeClose").addEventListener("click", function() {
        document.getElementById("notice").style.display = "none";
    });
}

function setNotice (title, body, push=true) {
    const noticeDock = document.getElementById("notice");

    if (noticeDock) {
        noticeDock.style.display = "block";
        document.getElementById("noticeTitle").innerHTML = title;
        document.getElementById("noticeBody").innerHTML = body;

        const animationNotice = [
            { transform: 'translateY(150%)' },
            { opacity: '0' },
            { transform: 'translateY(0%)' },
            { opacity: '1' },
        ];

        const timingNotice = {
            duration: 400,
            iterations: 1,
        }

        noticeDock.animate(animationNotice, timingNotice);

        if (push) {

            const navNotice = document.getElementById("navNotice");

            if (navNotice) {
                const animationNavNotice = [
                    { transform: 'rotate(0deg)' },
                    { transform: 'rotate(45deg)' },
                    { transform: 'rotate(-45deg)' },
                    { transform: 'rotate(15deg)' },
                    { transform: 'rotate(-15deg)' },
                    { transform: 'rotate(0deg)' }
                ];
            
                const timingNavNotice = {
                    duration: 400,
                    iterations: 1,
                }
            
                navNotice.animate(animationNavNotice, timingNavNotice);
                
                notices.unshift(new notice(title, body));
                navNotice.innerHTML = `<i class="bi bi-` + noticesNew + `"></i>`;
    
                if (notices.length > noticesMax) {
                    notices.pop();
                }
            }
        }
    }
}

function addNotices () {
    showTab("");

    const title = document.getElementById("title");
    title.innerHTML = "Notifications";

    const body = document.getElementById("notices");
    const container = document.createElement("div");

    if (notices.length > 0) {
        for (const not of notices) {
            var noticeTitle = document.createElement("h3");
            var noticeBody = document.createElement("div");
    
            noticeTitle.innerHTML = not.title;
            noticeBody.innerHTML = not.body;
    
            container.appendChild(noticeTitle);
            container.appendChild(noticeBody);
            container.appendChild(document.createElement("br"));
            container.appendChild(document.createElement("hr"));
        }
    } else {
        container.innerHTML = "<h3>No Notifications Found</h3>As you use DART, your notifications will populate with new activity. Your notifications will not be saved between sessions.";
    }

    const animationNotice = [
        { opacity: '0' },
        { opacity: '1' },
    ];

    const timingNotice = {
        duration: 400,
        iterations: 1,
    }

    container.animate(animationNotice, timingNotice);
    
    body.appendChild(container);

    document.getElementById("navNotice").innerHTML = `<i class="bi bi-` + noticesClear + `"></i>`;
}

//----------------------------------------------------------------------------------------------------
//
//  Functions: Favorites
//
//----------------------------------------------------------------------------------------------------

function findFavorite (fav) {
    const favorites = localStorage.getItem("favorites");

    if (favorites) {
        for (const favorite of favorites.split("; ")) {
            if (favorite == fav) {
                return true;
            }
        }   
    }

    return false;
}

function toggleFavorite (fav) {
    if (findFavorite(fav) == false) {
        const favorites = localStorage.getItem("favorites");

        if (favorites) {
            if (favorites.split("; ").length < favoritesMax) {
                localStorage.setItem("favorites", favorites + "; " + fav);
            } else {
                setNotice("Maximum Favorites Reached", `Please remove one of your existing Favorites to add more. To view your Favorites, select the Favorites Tab or click <a href="javascript:void(0);" onclick="showTab('favorites'); addFavorites();">here<a>.`);
                return;
            }
        } else {
            localStorage.setItem("favorites", fav);
        }

        setNotice("Favorite " + favoriteCount() + "/" + favoritesMax + " Added", `Your Favorite has been added successfully. To view your Favorites, select the Favorites Tab or click <a href="javascript:void(0);" onclick="showTab('favorites'); addFavorites();">here<a>.`);
        document.getElementById(fav + "Fav").innerHTML = `<i class="bi bi-` + iconFavoriteOn + `"></i>`;
    } else {
        const favorites = localStorage.getItem("favorites").split("; ");

        var count = favorites.length - 1;

            localStorage.removeItem("favorites");
    
            var placeholder = "";
    
            for (var f = 0; f < favorites.length; f++) {
                if (favorites[f] != fav) {
                    placeholder += favorites[f];
                    count--;
                    
                    if (count > 0) {
                        placeholder += "; ";
                    }    
                }
            }
    
            document.getElementById(fav + "Fav").innerHTML = `<i class="bi bi-` + iconFavoriteOff + `"></i>`;
            setNotice("Favorite Removed", `Your Favorite has been removed successfully. To view your existing Favorites, select the Favorites Tab or click <a href="javascript:void(0);" onclick="showTab('favorites'); addFavorites();">here<a>.`);
    
            if (placeholder) {
                localStorage.setItem("favorites", placeholder);
            }
    }

    const icon = document.getElementById("navFavorites");

    const animationIcon = [
        { transform: 'scale(100%)' },
        { transform: 'scale(125%)' },
        { transform: 'scale(100%)' }
    ];

    const timingIcon = {
        duration: 400,
        iterations: 1,
    }

    icon.animate(animationIcon, timingIcon);

    updateFavoriteIcon();
}

function addFavorites() {
    showTab("");
    const title = document.getElementById("title");
    title.innerHTML = "Favorites";

    const body = document.getElementById("favorites");
    
    const dataFavorites = localStorage.getItem("favorites");

    if (dataFavorites) {

        const titleText = "Favorites";
        title.innerHTML = titleText + " (" + dataFavorites.split("; ").length + "/" + favoritesMax + ")";

        const favorites = dataFavorites.split("; ");

        articleCount = 0;

        for (const favorite of favorites) {
            if (favorite.startsWith("tmp")) {
                for (const tmp of templates) {
                    if (favorite == tmp.id) {
                        appendArticle(tmp.id, "templates", "Template", tmp.title, templateTypes[tmp.type], templateIcons[tmp.type], templateDesc[tmp.type], tmp.text, {}, "", tmp.tags.split(" "), tmp.contact, [
                            {title: "Assigned To", content: tmp.assign, icon: tmp.assignType},
                            {title: "Department", content: tmp.department},
                            {title: "Order Number", content: tmp.orderNumber},
                            {title: "Task Type", content: tmp.task},
                        ], tmp.warning, true, tmp.text, true, findFavorite(tmp.id), tmp.id, 0);
                    }
                }
            } else if (favorite.startsWith("blb")) {
                for (const blb of blurbs) {
                    if (favorite == blb.id) {
                        appendArticle(blb.id, "blurbs", "Blurb", blb.title, "", "", "", blb.text, {}, "", blb.tags.split(" "), "", [], "", true, blb.text, true, findFavorite(blb.id), blb.id, 0);
                    }
                }
            } else if (favorite.startsWith("not")) {
                for (const not of notes) {
                    if (favorite == not.id) {
                        appendArticle(not.id, "notes", "Notes", not.title, not.subtitle, "", "", not.html, {}, "", [], "", [], "", false, "", true, findFavorite(not.id), not.id, 0);
                    }
                }
            } else if (favorite.startsWith("tol")) {
                for (const tol of tools) {
                    if (favorite == tol.id) {
                        if (tol.hidden == true){
                            appendArticle(tol.id, "tools", "Tool", tol.title, tol.subtitle, "", "", "<i>This tool has depreciated. Please remove from your favorites.</i>", {}, "", [], "", [], "", false, "", true, findFavorite(tol.id), tol.id, 0);
                        } else {
                            appendArticle(tol.id, "tools", "Tool", tol.title, tol.subtitle, "", "", tol.html, {}, "", [], "", [], tol.warning, false, "", true, findFavorite(tol.id), tol.id, 0);
                        }
                    }
                }
            } else if (favorite.startsWith("lnk")) {
                for (const lnk of links) {
                    if (favorite == lnk.id) {
                        appendArticle(lnk.id, "links", "Links:", lnk.title, lnk.subtitle, lnk.subtitleIcon, lnk.subtitleDesc, lnk.html, {}, "", [], "", [], "", false, "", true, findFavorite(lnk.id), lnk.id, 0);
                    }
                }
            }

            articleCount++;
        }
    } else {
        newBody = document.createElement("div");

        newBody.innerHTML = "<h3>No Favorites Found</h3>To save a Template or Blurb to your Favorites, select the empty <i class='bi bi-star'> Star</i> icon in the corner of a template or blurb.<br><br>Once favorited, you'll see a filled in <i class='bi bi-star-fill'> Star</i> icon, and the Template or Blurb can be viewed here.";

        const animationFav = [
            { opacity: '0' },
            { opacity: '1' },
        ];
    
        const timingFav = {
            duration: 400,
            iterations: 1,
        }
    
        newBody.animate(animationFav, timingFav);
        
        body.appendChild(newBody);
    }

    addSelections();
}

function favoriteCount () {
    const favorites = localStorage.getItem("favorites");

    if (favorites) {
        return favorites.split("; ").length;
    } else {
        return 0;
    }
}

function updateFavoriteIcon () {
    const icon = document.getElementById("navFavorites");

    if (favoriteCount() > 0) {
        icon.innerHTML = setIcon(iconFavoriteOn);
    } else {
        icon.innerHTML = setIcon(iconFavoriteOff);
    }
}

//----------------------------------------------------------------------------------------------------
//
//  Functions: Add Dashboard
//
//----------------------------------------------------------------------------------------------------

function addDashboard () {
    showTab("");
    drawDashboard();
    for (const b of banners) {
        appendBanner(b);
    }
}

function drawDashboard() {
    const title = document.getElementById("title");
    title.innerHTML = "Dartboard";

    var date = new Date();

    if (date.getDay() == 5) {
        appendArticle("dashboardTimeSheet", "dashboard", "", "It's Friday!", "Productivity", "clock", "", "Ease into your weekend with a clear mind. Enjoy your day and weekend!<br><br><a href='https://workforcenow.adp.com/theme/index.html' target='_blank'>Review Your Time Sheet</a>", {}, "", [], "", [], "Please Review Your Timesheet Below", false, "", false, false, false, 0);
    }

    if (!firstName || !lastName || !phone || !position) {
        var setupProgress = 0;

        if (firstName) setupProgress += 25;
        if (lastName) setupProgress += 25;
        if (phone) setupProgress += 25;
        if (position) setupProgress += 25;

        if (setupProgress == 0) {

            appendArticle("dashboardSetup", "dashboard", "Getting Started", "Welcome To DART!", "Setup", "gear", "", "Welcome To DART! To get started, configure your settings by clicking <i>Let's Get Started</i> below. Add your personal details and pick a fun color scheme you like best.<br><br><a onclick='addSettings()' href='javascript:void(0);'>Let's Get Started</a>", {}, "", [], "", [], "", false, "", false, false, false, 0);
        } else {
            const setupProgressText = [
                "Things are just getting started!",
                "You're halfway there!",
                "You're almost there - Awesome!"
            ]

            appendArticle("dashboardSetup", "dashboard", "Getting Started", "Complete Your Profile", "Setup", "gear", "", "<div class='progressBar'><div style='width: " + setupProgress +"%'>" + setupProgress + "%</div></div><br>" + setupProgressText[(setupProgress/25) - 1] + " Click <i>Complete Your Profile</i> below to finish setting up your profile.<br><br><a onclick='addSettings()' href='javascript:void(0);'>Complete Your Profile</a>", {}, "", [], "", [], "", false, "", false, false, false, 0);
        }
    } else {
        appendArticle("dashboardGreeting", "dashboard", "", "Featured Content", greetings[Math.floor(Math.random() * greetings.length)] + ", " + firstName + ". Welcome Back!", "emoji-smile", "", "Working on something time sensitive? Feeling overwhelmed? Want to keep things simple?<br>Try out some of DART's featured content.<br><br><div id='banners'></div>", {}, "", [], "", [], "", false, "", false, false, false, 0);
    }

    appendArticle("dashboardTimeSheet", "dashboard", "", "Review Your Time Sheet", "Productivity", "clock", "", "Give yourself the pay you deserve this pay period by reviewing your time sheet now and reporting any inaccuracies.<br><br><a href='https://workforcenow.adp.com/theme/index.html' target='_blank'>Review Your Time Sheet</a>", {}, "https://media.istockphoto.com/id/961742336/photo/businesswoman-checking-the-time-on-watch.jpg?s=612x612&w=0&k=20&c=ALcjYVpDVKroYdVv2WWBC7C8pzgIaDOZ5AhWZn9KDq4=", [], "", [], "", false, "", false, false, false, 0);

    appendArticle("dashboardFavorites", "dashboard", "", "You've Saved " + favoriteCount() + " Favorite(s)", "Favorites", "star", "", "Saving content for later makes your work day much easier. Click <i>View Favorites</i> to view or manage your favorites.<br><br><a onclick='addFavorites()' href='javascript:void(0);'>View Favorites</a>", {}, "https://www.corporatevision-news.com/wp-content/uploads/2022/03/Work-Tools.jpg", [], "", [], "", false, "", false, false, false, 0);

    appendArticle("dashboardNotifications", "dashboard", "", "Notifications", "Productivity", "clock", "", "What have you been up to? Take a look by clicking <i>View Notifications</i>, and view your last " + noticesMax +" actions.<br><br><a onclick='addNotices()' href='javascript:void(0);'>View Notifications</a>", {}, "https://media.istockphoto.com/id/1388642146/photo/call-center-workers.jpg?b=1&s=170667a&w=0&k=20&c=vhEceInRNbuimQBoohUPXBBzHtZbusPKD7y6fd1u9OU=", [], "", [], "", false, "", false, false, false, 0);

    for (const hol of holidayToday) {
        appendArticle("dashboardHoliday" + hol, "dashboard", "", holidays[hol].title + " Is " + holidays[hol].ending + "!", "Holiday", "calendar", "", "Celebrating? Honoring? Memorializing? Click<br><i>View Holiday Ideas</i> for inspiration.<br><br><a href='https://www.google.com/search?q=" + holidays[hol].title + "+Ideas' target='_blank'>View Holiday Ideas</a><br><a href='javascript:void(0);' onclick='setColorScheme(" + holidays[hol].colorScheme + ")'>Use Holiday Color Scheme</a>", {}, holidays[hol].image, [], "", [], "", false, "", false, false, false, 0);
    }

    for (const uhol of holidayUpcoming) {
        appendArticle("dashboardHoliday" + uhol, "dashboard", "", holidays[uhol].title + " Is Coming!", "Holiday", "calendar", "", "Celebrating? Honoring? Memorializing? Click<br><i>View Holiday Ideas</i> for inspiration.<br><br><a href='https://www.google.com/search?q=" + holidays[uhol].title + "+Ideas' target='_blank'>View Holiday Ideas</a><br><a href='javascript:void(0);' onclick='setColorScheme(" + holidays[uhol].colorScheme + ")'>Use Holiday Color Scheme</a>", {}, holidays[uhol].image, [], "", [], "", false, "", false, false, false, 0);
    }
}

//----------------------------------------------------------------------------------------------------
//
//  Functions: Settings Schemes
//
//----------------------------------------------------------------------------------------------------

function addSettings () {
    showTab("");

    const title = document.getElementById("title");
    title.innerHTML = "Settings";

    const body = document.getElementById("settings");
    const container = document.createElement("article");

    const titleGeneral = document.createElement("h3");
    const containerGeneral = document.createElement("div");
    const firstNameGeneral = document.createElement("input");
    const lastNameGeneral = document.createElement("input");
    const phoneGeneral = document.createElement("input");
    const positionGeneral = document.createElement("input");
    const confirmGeneral = document.createElement("button");

    const titleColorSchemes = document.createElement("h3");
    const containerColorSchemes = document.createElement("div");

    const colorSchemeCustomBackground = document.createElement("input");
    const colorSchemeCustomPrimary = document.createElement("input");
    const colorSchemeCustomSecondary = document.createElement("input");
    const colorSchemeCustomAccentA = document.createElement("input");
    const colorSchemeCustomAccentB = document.createElement("input");
    const colorSchemeCustomAccentC = document.createElement("input");
    const colorSchemeCustomWarning = document.createElement("input");
    const confirmColorSchemeCustom = document.createElement("button");

    const titleColorSchemeSortLight = document.createElement("h4");
    const titleColorSchemeSortDark = document.createElement("h4");
    const titleColorSchemeSortGemstones = document.createElement("h4");
    const titleColorSchemeSortThemed = document.createElement("h4");
    const titleColorSchemeSortSeasonal = document.createElement("h4");
    const titleColorSchemeSortCustom = document.createElement("h4");
    const titleColorSchemeSortCollections = document.createElement("h4");

    const containerColorSchemeSortLight = document.createElement("div");
    const containerColorSchemeSortDark = document.createElement("div");
    const containerColorSchemeSortGemstones = document.createElement("div");
    const containerColorSchemeSortThemed = document.createElement("div");
    const containerColorSchemeSortSeasonal = document.createElement("div");
    const containerColorSchemeCustom = document.createElement("div");
    const containerColorSchemeSortCollections = document.createElement("div");

    titleColorSchemeSortLight.innerHTML = `Light Presets`;
    titleColorSchemeSortDark.innerHTML = `Dark Presets`;
    titleColorSchemeSortGemstones.innerHTML = `Gemstone Presets`;
    titleColorSchemeSortCollections.innerHTML = `Collection Inspired Presets`;
    titleColorSchemeSortThemed.innerHTML = `Themed Presets`;
    titleColorSchemeSortSeasonal.innerHTML = `Seasonal Presets`;
    titleColorSchemeSortCustom.innerHTML = `Custom HTML/RGB/Hex Colors`;

    containerColorSchemeSortLight.style.display = "flex";
    containerColorSchemeSortLight.style.flexWrap = "wrap";
    containerColorSchemeSortLight.style.display.justifyContent = "center";

    containerColorSchemeSortDark.style.display = "flex";
    containerColorSchemeSortDark.style.flexWrap = "wrap";
    containerColorSchemeSortDark.style.display.justifyContent = "center";

    containerColorSchemeSortGemstones.style.display = "flex";
    containerColorSchemeSortGemstones.style.flexWrap = "wrap";
    containerColorSchemeSortGemstones.style.display.justifyContent = "center";

    containerColorSchemeSortThemed.style.display = "flex";
    containerColorSchemeSortThemed.style.flexWrap = "wrap";
    containerColorSchemeSortThemed.style.display.justifyContent = "center";

    containerColorSchemeSortSeasonal.style.display = "flex";
    containerColorSchemeSortSeasonal.style.flexWrap = "wrap";
    containerColorSchemeSortSeasonal.style.display.justifyContent = "center";

    containerColorSchemeSortCollections.style.display = "flex";
    containerColorSchemeSortCollections.style.flexWrap = "wrap";
    containerColorSchemeSortCollections.style.display.justifyContent = "center";

    colorSchemeCustomBackground.placeholder = "Background Color";
    colorSchemeCustomPrimary.placeholder = "Accent Background Color (Navigation, Notification)";
    colorSchemeCustomSecondary.placeholder = "Font & Selected Tab Color";
    colorSchemeCustomAccentA.placeholder = "Light Accent Color (Tags, Scroll Highlight)";
    colorSchemeCustomAccentB.placeholder = "Medium Accent Color (Borders, Accents, Scrollbar)";
    colorSchemeCustomAccentC.placeholder = "Dark Accent Color (Links, Button Hover, Input Text)";
    colorSchemeCustomWarning.placeholder = "Warning Color";

    colorSchemeCustomBackground.id = "colorSchemeCustomBackground";
    colorSchemeCustomPrimary.id = "colorSchemeCustomPrimary";
    colorSchemeCustomSecondary.id = "colorSchemeCustomSecondary";
    colorSchemeCustomAccentA.id = "colorSchemeCustomAccentA";
    colorSchemeCustomAccentB.id = "colorSchemeCustomAccentB";
    colorSchemeCustomAccentC.id = "colorSchemeCustomAccentC";
    colorSchemeCustomWarning.id = "colorSchemeCustomWarning";

    colorSchemeCustomBackground.value = localStorage.getItem("colorSchemeCustomBackground");
    colorSchemeCustomPrimary.value = localStorage.getItem("colorSchemeCustomPrimary");
    colorSchemeCustomSecondary.value = localStorage.getItem("colorSchemeCustomSecondary");
    colorSchemeCustomAccentA.value = localStorage.getItem("colorSchemeCustomAccentA");
    colorSchemeCustomAccentB.value = localStorage.getItem("colorSchemeCustomAccentB");
    colorSchemeCustomAccentC.value = localStorage.getItem("colorSchemeCustomAccentC");
    colorSchemeCustomWarning.value = localStorage.getItem("colorSchemeCustomWarning");

    colorSchemeCustomBackground.title = "To use a gradient, try something like:\n'linear-gradient(to bottom, #ff0000 400px, #00ff00 800px, #00ff00)\n\nThe last 2 of the 3 colors should be the same.\nThe px after the numbers determine the height in pixels.'"

    confirmColorSchemeCustom.innerHTML = `<i class="bi bi-gear"></i> Confirm Custom Color Scheme Settings`;
    confirmColorSchemeCustom.title = "Confirm Custom Color Scheme Settings";
    confirmColorSchemeCustom.classList.add("textButton");
    confirmColorSchemeCustom.addEventListener("click", function() {
        setColorSchemeCustom();
    });

    containerColorSchemeCustom.appendChild(document.createElement("br"));
    containerColorSchemeCustom.appendChild(colorSchemeCustomBackground);
    containerColorSchemeCustom.appendChild(document.createElement("br"));
    containerColorSchemeCustom.appendChild(document.createElement("br"));
    containerColorSchemeCustom.appendChild(colorSchemeCustomPrimary);
    containerColorSchemeCustom.appendChild(document.createElement("br"));
    containerColorSchemeCustom.appendChild(document.createElement("br"));
    containerColorSchemeCustom.appendChild(colorSchemeCustomSecondary);
    containerColorSchemeCustom.appendChild(document.createElement("br"));
    containerColorSchemeCustom.appendChild(document.createElement("br"));
    containerColorSchemeCustom.appendChild(colorSchemeCustomAccentA);
    containerColorSchemeCustom.appendChild(document.createElement("br"));
    containerColorSchemeCustom.appendChild(document.createElement("br"));
    containerColorSchemeCustom.appendChild(colorSchemeCustomAccentB);
    containerColorSchemeCustom.appendChild(document.createElement("br"));
    containerColorSchemeCustom.appendChild(document.createElement("br"));
    containerColorSchemeCustom.appendChild(colorSchemeCustomAccentC);
    containerColorSchemeCustom.appendChild(document.createElement("br"));
    containerColorSchemeCustom.appendChild(document.createElement("br"));
    containerColorSchemeCustom.appendChild(colorSchemeCustomWarning);
    containerColorSchemeCustom.appendChild(document.createElement("br"));
    containerColorSchemeCustom.appendChild(document.createElement("br"));
    containerColorSchemeCustom.appendChild(confirmColorSchemeCustom);
    containerColorSchemeCustom.appendChild(document.createElement("br"));

    containerColorSchemes.appendChild(titleColorSchemeSortLight);
    containerColorSchemes.appendChild(containerColorSchemeSortLight);
    containerColorSchemes.appendChild(titleColorSchemeSortDark);
    containerColorSchemes.appendChild(containerColorSchemeSortDark);
    containerColorSchemes.appendChild(titleColorSchemeSortGemstones);
    containerColorSchemes.appendChild(containerColorSchemeSortGemstones);
    containerColorSchemes.appendChild(titleColorSchemeSortCollections);
    containerColorSchemes.appendChild(containerColorSchemeSortCollections);
    containerColorSchemes.appendChild(titleColorSchemeSortThemed);
    containerColorSchemes.appendChild(containerColorSchemeSortThemed);
    containerColorSchemes.appendChild(titleColorSchemeSortSeasonal);
    containerColorSchemes.appendChild(containerColorSchemeSortSeasonal);
    
    containerColorSchemes.appendChild(titleColorSchemeSortCustom);
    containerColorSchemes.appendChild(containerColorSchemeCustom);

    titleGeneral.innerHTML = `General`;

    firstNameGeneral.placeholder = "First Name";
    firstNameGeneral.id = "firstName";
    firstNameGeneral.value = firstName;

    lastNameGeneral.placeholder = "Last Name";
    lastNameGeneral.id = "lastName";
    lastNameGeneral.value = lastName;

    phoneGeneral.placeholder = "Office Phone Number (Recommend Format: (123) 456-7890)";
    phoneGeneral.id = "phone";
    phoneGeneral.value = phone;

    phoneGeneral.pattern = "([0-9]{3}) [0-9]{3}-[0-9]{4}";

    positionGeneral.placeholder = "Job Title or Position (Recommended: Customer Care Specialist)";
    positionGeneral.id = "position";
    positionGeneral.value = position;

    confirmGeneral.innerHTML = `<i class="bi bi-gear"></i> Confirm General Settings`;
    confirmGeneral.title = `Confirm General Settings`;
    confirmGeneral.classList.add("textButton");

    confirmGeneral.addEventListener("click", function() {
        saveGeneralSettings();
    });

    containerGeneral.appendChild(titleGeneral);
    containerGeneral.appendChild(firstNameGeneral);
    containerGeneral.appendChild(document.createElement("br"));
    containerGeneral.appendChild(document.createElement("br"));
    containerGeneral.appendChild(lastNameGeneral);
    containerGeneral.appendChild(document.createElement("br"));
    containerGeneral.appendChild(document.createElement("br"));
    containerGeneral.appendChild(phoneGeneral);
    containerGeneral.appendChild(document.createElement("br"));
    containerGeneral.appendChild(document.createElement("br"));
    containerGeneral.appendChild(positionGeneral);
    containerGeneral.appendChild(document.createElement("br"));
    containerGeneral.appendChild(document.createElement("br"));
    containerGeneral.appendChild(confirmGeneral);
    containerGeneral.appendChild(document.createElement("br"));
    containerGeneral.appendChild(document.createElement("br"));

    container.appendChild(containerGeneral);

    titleColorSchemes.innerHTML = `Color Schemes`;

    container.appendChild (titleColorSchemes);

    for (let i = 0; i < schemes.length; i++) {
        const button = document.createElement("button");

        button.style.margin = "10px";
        button.style.marginLeft = "0";
        button.title = schemes[i].title + "\n\n" + schemes[i].description;

        button.innerHTML = `<i class="bi bi-` + schemes[i].icon + `" style="color: ` + schemes[i].color + `"></i>`;
        
        button.addEventListener("click", function() {
            setColorScheme(i);
        });

        if (schemes[i].filter == "light") {
            containerColorSchemeSortLight.appendChild(button);
        } else if (schemes[i].filter == "dark") {
            containerColorSchemeSortDark.appendChild(button);
        } else if (schemes[i].filter == "gemstones") {
            containerColorSchemeSortGemstones.appendChild(button);
        } else if (schemes[i].filter == "collections") {
            containerColorSchemeSortCollections.appendChild(button);
        } else if (schemes[i].filter == "themed") {
            containerColorSchemeSortThemed.appendChild(button);
        } else if (schemes[i].filter == "seasonal") {
            containerColorSchemeSortSeasonal.appendChild(button);
        }
    }

    const animationSettings = [
        { opacity: '0' },
        { opacity: '1' },
    ];

    const timingSettings = {
        duration: 400,
        iterations: 1,
    }

    container.animate(animationSettings, timingSettings);

    container.appendChild(containerColorSchemes);

    body.appendChild(container);
}

function saveGeneralSettings () {
    firstName = document.getElementById("firstName").value;
    lastName = document.getElementById("lastName").value;
    phone = document.getElementById("phone").value;
    position = document.getElementById("position").value;

    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
    localStorage.setItem("phone", phone);
    localStorage.setItem("position", position);

    setNotice("General Settings Saved", "Your general settings have been updated. If you clear your browser's storage or change DART's file path, these settings will be removed.");
}

//----------------------------------------------------------------------------------------------------
//
//  Functions: Add QuickTask
//
//----------------------------------------------------------------------------------------------------

function addQuickTask () {
    showTab("quickTask");
}

//----------------------------------------------------------------------------------------------------
//
//  Functions: Color Schemes
//
//----------------------------------------------------------------------------------------------------

function setColorScheme (id) {
    
    var root = document.querySelector(':root');

    root.style.setProperty('--color-background', schemes[id].background);
    root.style.setProperty('--color-primary', schemes[id].primary);
    root.style.setProperty('--color-secondary', schemes[parseInt(id)].secondary);

    root.style.setProperty('--color-accent-light', schemes[parseInt(id)].accentLight);
    root.style.setProperty('--color-accent-medium', schemes[parseInt(id)].accentMedium);
    root.style.setProperty('--color-accent-dark', schemes[parseInt(id)].accentDark);

    root.style.setProperty('--color-accent-warning', schemes[parseInt(id)].accentWarning);

    root.style.setProperty('--font-secondary', schemes[parseInt(id)].font);

    localStorage.setItem('colorScheme', id);

    rainbow = schemes[parseInt(id)].rainbow;

    if (schemes[id].effect == 1) {
        document.getElementById("overlay-snow").style.display = "block";
        document.getElementById("overlay-hearts").style.display = "none";
        document.getElementById("overlay-confettis").style.display = "none";
        document.getElementById("overlay-flowers").style.display = "none";
        document.getElementById("overlay-leafs").style.display = "none";
    } else if (schemes[id].effect == 2) {
        document.getElementById("overlay-snow").style.display = "none";
        document.getElementById("overlay-hearts").style.display = "block";
        document.getElementById("overlay-confettis").style.display = "none";
        document.getElementById("overlay-flowers").style.display = "none";
        document.getElementById("overlay-leafs").style.display = "none";
    } else if (schemes[id].effect == 3) {
        document.getElementById("overlay-snow").style.display = "none";
        document.getElementById("overlay-hearts").style.display = "none";
        document.getElementById("overlay-confettis").style.display = "block";
        document.getElementById("overlay-flowers").style.display = "none";
        document.getElementById("overlay-leafs").style.display = "none";
    } else if (schemes[id].effect == 4) {
        document.getElementById("overlay-snow").style.display = "none";
        document.getElementById("overlay-hearts").style.display = "none";
        document.getElementById("overlay-confettis").style.display = "none";
        document.getElementById("overlay-flowers").style.display = "block";
        document.getElementById("overlay-leafs").style.display = "none";
    } else if (schemes[id].effect == 5) {
        document.getElementById("overlay-snow").style.display = "none";
        document.getElementById("overlay-hearts").style.display = "none";
        document.getElementById("overlay-confettis").style.display = "none";
        document.getElementById("overlay-flowers").style.display = "none";
        document.getElementById("overlay-leafs").style.display = "block";
    } else {
        document.getElementById("overlay-snow").style.display = "none";
        document.getElementById("overlay-hearts").style.display = "none";
        document.getElementById("overlay-confettis").style.display = "none";
        document.getElementById("overlay-flowers").style.display = "none";
        document.getElementById("overlay-leafs").style.display = "none";
    }

    var elementMenu = document.getElementById("menu");
    var elementNav = document.getElementById("nav");
    var elementNotice = document.getElementById("notice");

    if (schemes[id].blur) {
        elementMenu.style.background = "transparent";
        elementNav.style.backgroundColor = "transparent";
        elementNotice.style.backgroundColor = "transparent";

        elementMenu.style.backdropFilter = "blur(30px)";
        elementNav.style.backdropFilter = "blur(30px)";
        elementNotice.style.backdropFilter = "blur(30px)";
    } else {
        elementMenu.style.backgroundColor = schemes[id].primary;
        elementNav.style.backgroundColor = schemes[id].primary;
        elementNotice.style.backgroundColor = schemes[id].primary;

        elementMenu.style.backdropFilter = "none";
        elementNav.style.backdropFilter = "none";
        elementNotice.style.backdropFilter = "none";
    }

    setNotice("Color Scheme Updated", "Your color scheme has been updated and changed to <b>" + schemes[parseInt(id)].title + "</b>. If you clear your browser's storage or change DART's file path, these settings will be removed.");
}

function setColorSchemeCustom () {
    rainbow = 0;
    localStorage.setItem('colorScheme', -1);

    background = document.getElementById("colorSchemeCustomBackground");
    primary = document.getElementById("colorSchemeCustomPrimary");
    secondary = document.getElementById("colorSchemeCustomSecondary");
    accentA = document.getElementById("colorSchemeCustomAccentA");
    accentB = document.getElementById("colorSchemeCustomAccentB");
    accentC = document.getElementById("colorSchemeCustomAccentC");
    warning = document.getElementById("colorSchemeCustomWarning");

    localStorage.setItem("colorSchemeCustomBackground", background.value);
    localStorage.setItem("colorSchemeCustomPrimary", primary.value);
    localStorage.setItem("colorSchemeCustomSecondary", secondary.value);
    localStorage.setItem("colorSchemeCustomAccentA", accentA.value);
    localStorage.setItem("colorSchemeCustomAccentB", accentB.value);
    localStorage.setItem("colorSchemeCustomAccentC", accentC.value);
    localStorage.setItem("colorSchemeCustomWarning", warning.value);

    var root = document.querySelector(':root');

    root.style.setProperty('--color-background', background.value);
    root.style.setProperty('--color-primary', primary.value);
    root.style.setProperty('--color-secondary', secondary.value);
    root.style.setProperty('--color-accent-light', accentA.value);
    root.style.setProperty('--color-accent-medium', accentB.value);
    root.style.setProperty('--color-accent-dark', accentC.value);
    root.style.setProperty('--color-accent-warning', warning.value);

    setNotice("Custom Color Scheme Updated", "Your personalized color scheme has been updated. If you clear your browser's storage or change DART's file path, these settings will be removed.");
}

function setColorSchemeStyle (style) {
    var schemeStyle;
    var r = document.querySelector(':root');

    if (style == 1) {
        schemeStyle = "modern";
    } else {
        schemeStyle = "classic";
    }

    var padding = window.getComputedStyle(document.documentElement).getPropertyValue('--style-'+ schemeStyle + '-article-padding');
    var radius = window.getComputedStyle(document.documentElement).getPropertyValue('--style-'+ schemeStyle + '-article-border-radius');
    var margin = window.getComputedStyle(document.documentElement).getPropertyValue('--style-'+ schemeStyle + '-article-margin-bottom');
    var backgroundColor = window.getComputedStyle(document.documentElement).getPropertyValue('--style-'+ schemeStyle + '-article-background-color');
    var bodyColor = window.getComputedStyle(document.documentElement).getPropertyValue('--style-'+ schemeStyle + '-background');

    r.style.setProperty('--article-padding', padding);
    r.style.setProperty('--article-border-radius', radius);
    r.style.setProperty('--article-margin-bottom', margin);
    r.style.setProperty('--article-background-color', backgroundColor);
    r.style.setProperty('--body-background', bodyColor);
}

function getColorSchemeCustom () {
    var root = document.querySelector(':root');

    root.style.setProperty('--color-background', localStorage.getItem("colorSchemeCustomBackground"));
    root.style.setProperty('--color-primary', localStorage.getItem("colorSchemeCustomPrimary"));
    root.style.setProperty('--color-secondary', localStorage.getItem("colorSchemeCustomSecondary"));
    root.style.setProperty('--color-accent-light', localStorage.getItem("colorSchemeCustomAccentA"));
    root.style.setProperty('--color-accent-medium', localStorage.getItem("colorSchemeCustomAccentB"));
    root.style.setProperty('--color-accent-dark', localStorage.getItem("colorSchemeCustomAccentC"));
    root.style.setProperty('--color-accent-warning', localStorage.getItem("colorSchemeCustomWarning"));
}

//----------------------------------------------------------------------------------------------------
//
//  Functions: Search
//
//----------------------------------------------------------------------------------------------------

function searchBar (query) {
    if (query.value && event.key === 'Enter') {
        search(query.value);
        setNotice("Search Results", "Showing search results for <i>" + query.value + "</i>.");
    }
}

function searchBarButton() {
    query = document.getElementById("searchBar").value;
    
    if (query) {
        search(query);
        setNotice("Search Results", "Showing search results for <i>" + query + "</i>.");
    }
}

function search (query) {
    showTab("");

    var totalResults = 0;

    const searchBarSettingTemplates = document.getElementById("searchBarSettingTemplates").checked;
    const searchBarSettingBlurbs = document.getElementById("searchBarSettingBlurbs").checked;
    const searchBarSettingNotes = document.getElementById("searchBarSettingNotes").checked;
    const searchBarSettingBoutiques = document.getElementById("searchBarSettingBoutiques").checked;
    const searchBarSettingTools = document.getElementById("searchBarSettingTools").checked;
    const searchBarSettingLinks = document.getElementById("searchBarSettingLinks").checked;
    const searchBarSettingStones = document.getElementById("searchBarSettingStones").checked;
    const searchBarSettingMetals = document.getElementById("searchBarSettingMetals").checked;
    const searchBarSettingChains = document.getElementById("searchBarSettingChains").checked;

    var newQuery = query.replace(/[\p{P}$+<=>^`|~]/gu, '');

    if (searchBarSettingBoutiques) {
        totalResults += searchBoutiques(newQuery);
    }

    if (searchBarSettingTools) {
        totalResults += searchTools(newQuery);
    }

    if (searchBarSettingLinks) {
        totalResults += searchLinks(newQuery);
    }

    if (searchBarSettingTemplates) {
        totalResults += searchTemplates(newQuery);
    }

    if (searchBarSettingBlurbs) {
        totalResults += searchBlurbs(newQuery);
    }

    if (searchBarSettingNotes) {
        totalResults += searchNotes(newQuery);
    }

    if (searchBarSettingStones) {
        totalResults += searchStones(newQuery);
    }

    if (searchBarSettingMetals) {
        totalResults += searchMetals(newQuery);
    }

    if (searchBarSettingChains) {
        totalResults += searchChains(newQuery);
    }

    const title = document.getElementById("title");
    title.innerHTML = `Search Results: <span class="liteTitle">` + query + `</span>`;

    if (totalResults == 0) {
        const results = document.getElementById("results");
        results.innerHTML = `<h3>No Search Results Found</h3>Try using relevant keywords, such as <i>Returns</i> or <i>Shipping</i>, or reducing the Keyword Search Sensitivity to greatly improve your search results.`;
    } else {
        const titleResults = document.getElementById("titleResults");
        titleResults.innerHTML = "<i>" + totalResults.toString() + " Result(s) Found</i>"
    }

    addSelections();
}

function splitText (text) {
    return text.split(" ");
}

//----------------------------------------------------------------------------------------------------
//
//  FUNCTIONS: Navigation Menu
//
//----------------------------------------------------------------------------------------------------

function toggleMenu () {
    nav = document.getElementById("menu");
    nav.classList.toggle("active");

    if (nav.classList.contains("active")) {
        const animationMenu = [
            { transform: 'translateX(-150%)' },
            { opacity: '0' },
            { transform: 'translateX(0%)' },
            { opacity: '1' },
        ];

        const timingMenu = {
            duration: 400,
            iterations: 1,
        }

        nav.animate(animationMenu, timingMenu);
    }
}

function togglePopup (state) {
    popup = document.getElementById("popup");
    article = document.getElementById("popup-article");
    body = document.body;

    if (state == 1) {
        body.style.overflowY = "hidden";
        popup.style.display = "flex";
        
        const animationMenuFade = [
            { opacity: '0' },
            { opacity: '1' },
        ];

        const animationMenuScale = [
            { scale: '0' },
            { scale: '1' },
        ];

        const timingMenu = {
            duration: 200,
            iterations: 1,
        }

        popup.animate(animationMenuFade, timingMenu)
        article.animate(animationMenuFade, timingMenu);
        article.animate(animationMenuScale, timingMenu);
    } else if (state == 0) {
        body.style.overflowY = "auto";
        popup.style.display = "none";
    }
}

function toggleLite () {
    navlocks = document.getElementsByClassName("navlock");
    
    for (const navlock of navlocks) {
        navlock.classList.toggle ("hidden");
    }

    lite_mode = !lite_mode;

    if (lite_mode) {
        setNotice("DART Locked", "DART has been locked. ", false);
    } else {
        setNotice("DART Unlocked", "DART has been unlocked. Feel free to use DART's upcoming and experimental features.", false);
    }

    addTabs();
}

//----------------------------------------------------------------------------------------------------
//
//  FUNCTIONS: Tabs
//
//----------------------------------------------------------------------------------------------------

function addTabs () {
    const container = document.getElementById("tabs");

    container.innerHTML = ``;

    if (!lite_mode) {
        document.getElementById("lite_title").style.display = "none";
    } else {
        document.getElementById("lite_title").style.display = "block";
    }

    for (let t = 0; t < tabs.length; t++) {
        if (!lite_mode || lite_mode == true && tabs[t].lite == true)
        {
            const tabContainer = document.createElement("div");
            const button = document.createElement("button");
            const icon = document.createElement("i");
            const p = document.createElement("p");

            tabContainer.className = "tab";

            button.title = tabs[t].title;
            button.id = tabs[t].id + "Tab";
            button.classList.add("tab");

            button.addEventListener("click", function() {
                showTab(tabs[t].id, tabs[t].changelog);
            });

            icon.className = "bi bi-" + tabs[t].icon;

            p.innerHTML = tabs[t].title;
            p.wordWrap = "break-word";

            button.appendChild(icon);

            tabContainer.appendChild(button);
            tabContainer.appendChild(p);

            container.appendChild(tabContainer);
        }
    }
}

function showTab (id="") {
    jumpToTop();
    clear();
    
    const title = document.getElementById("title");

    for (const tab of tabs) {
        if (tab.id == id) {
            title.innerHTML = tab.title;
        }
    }

    const tabElements = document.getElementsByClassName("tab");

    for (const element of tabElements) {
        if (element.id == id + "Tab") {
            element.classList.add("active");
        } else {
            element.classList.remove("active");
        }
    }

    if (id) {
    
        const searchBarSettingTemplates = document.getElementById("searchBarSettingTemplates").checked;
        const searchBarSettingBlurbs = document.getElementById("searchBarSettingBlurbs").checked;
        const searchBarSettingNotes = document.getElementById("searchBarSettingNotes").checked;
        const searchBarSettingTools = document.getElementById("searchBarSettingTools").checked;
        const searchBarSettingLinks = document.getElementById("searchBarSettingLinks").checked;
    
    
        if (searchBarSettingTools) {
            addTools(id);
        }
    
        if (searchBarSettingLinks) {
            addLinks(id);
        }
    
        if (searchBarSettingTemplates) {
            addTemplates(id);
        }
    
        if (searchBarSettingBlurbs) {
            addBlurbs(id);
        }
    
        if (searchBarSettingNotes) {
            addNotes(id);
        }
    }

    // Boutiques are added last due to a tool using boutique information.
    // Boutiques should be omitted from the search filter so they can be added to said tool.
    addSelections();
}

//----------------------------------------------------------------------------------------------------
//
//  FUNCTIONS: Tips
//
//----------------------------------------------------------------------------------------------------

function addTip () {
    const tipContainer = document.getElementById("tip");

    if (tipContainer) {
        tipContainer.innerHTML = updateText(tips[Math.floor(Math.random() * tips.length)].text);
    }
}

//----------------------------------------------------------------------------------------------------
//
//  FUNCTIONS: Templates
//
//----------------------------------------------------------------------------------------------------

function searchTemplates (query) {
    var splitQueries = splitText(query.toLowerCase());
    
    var queries = [];
    var results = 0;
    
    for (const q of splitQueries) {
        if (!searchRemoval.includes(q)) {
            queries.push(q);
        }
    }

    var queryCount = queries.length;
    var matchCount = 0;
    
    if (queries.length > 0) {
        for (let t = 0; t < templates.length; t++) {
            matchCount = 0;

            for (const tag of queries) {
                if (findTagInTemplate(tag, templates[t])) {
                    matchCount += 1;

                    if (matchCount/queryCount >= parseInt(document.getElementById("searchBarSettingSensitivity").value) / 100) {
                        appendArticle(templates[t].id, "templates", "Template", templates[t].title, templateTypes[templates[t].type], templateIcons[templates[t].type], templateDesc[templates[t].type], templates[t].text, {}, "", templates[t].tags.split(" "), templates[t].contact, [
                            {title: "Assigned To", content: templates[t].assign, icon: templates[t].assignType},
                            {title: "Department", content: templates[t].department},
                            {title: "Order Number", content: templates[t].orderNumber},
                            {title: "Task Type", content: templates[t].task},
                        ], templates[t].warning, true, templates[t].text, true, findFavorite(templates[t].id), templates[t].id, 0);
                        results++;
                        break;
                    }
                }
            }
        }
    }

    return results;
}

function findTagInTemplate (tag, template) {
    if (template.title.toLowerCase().includes(tag.toLowerCase())) {
        return true;
    }
    
    if (template.contact.toLowerCase().includes(tag.toLowerCase())) {
        return true;
    }
    
    if (template.department.toLowerCase().includes(tag.toLowerCase())) {
        return true;
    }

    if (template.task.toLowerCase().includes(tag.toLowerCase())) {
        return true;
    }
    
    if (template.assign.toLowerCase().includes(tag.toLowerCase())) {
        return true;
    }
    
    if (template.warning.toLowerCase().includes(tag.toLowerCase())) {
        return true;
    }

    if (template.hasKeyword(tag.toLowerCase())) {
        return true;
    }
    
    return false;
}

function addTemplates (id, delay) {
    for (let t = 0; t < templates.length; t++) {
        if (templates[t].filter.toLowerCase().includes(id.toLowerCase()) || id == "all") {
            appendArticle(templates[t].id, "templates", "Template", templates[t].title, templateTypes[templates[t].type], templateIcons[templates[t].type], templateDesc[templates[t].type], templates[t].text, {}, "", templates[t].tags.split(" "), templates[t].contact, [
                {title: "Assigned To", content: templates[t].assign, icon: templates[t].assignType},
                {title: "Department", content: templates[t].department},
                {title: "Order Number", content: templates[t].orderNumber},
                {title: "Task Type", content: templates[t].task},
            ], templates[t].warning, true, HTMLToRichText(templates[t].text), true, findFavorite(templates[t].id), templates[t].id, 0);
        }
    }
}

//----------------------------------------------------------------------------------------------------
//
//  FUNCTIONS: Notes
//
//----------------------------------------------------------------------------------------------------

function addNotes (id) {
    const body = document.getElementById("notes");

    for (let n = 0; n < notes.length; n++) {
        if (notes[n].filter == id) {
            appendArticle(notes[n].id, "notes", "Note", notes[n].title, notes[n].subtitle, "", "", notes[n].html, {}, "", [], "", [], "", false, "", true, findFavorite(notes[n].id), notes[n].id, 0);
        }
    }
}

function searchNotes (query) {
    var splitQueries = splitText(query.toLowerCase());
    
    var queries = [];
    var results = 0;
    
    for (const q of splitQueries) {
        if (!searchRemoval.includes(q)) {
            queries.push(q);
        }
    }

    var queryCount = queries.length;
    var matchCount = 0;
    
    if (queries.length > 0) {
        for (let n = 0; n < notes.length; n++) {
            matchCount = 0;

            for (const tag of queries) {
                if (findTagInNote(tag, notes[n])) {
                    matchCount += 1;

                    if (matchCount/queryCount >= parseInt(document.getElementById("searchBarSettingSensitivity").value) / 100) {
                        //appendNote(notes[n]);
                        appendArticle(notes[n].id, "notes", "Note", notes[n].title, notes[n].subtitle, "", "", notes[n].html, {}, "", [], "", [], "", false, "", true, findFavorite(notes[n].id), notes[n].id, 0);
                        results++;
                        break;
                    }
                }
            }
        }
    }

    return results;
}

function findTagInNote (tag, note) {
    if (note.title.toLowerCase().includes(tag.toLowerCase())) {
        return true;
    }

    if (note.html.toLowerCase().includes(tag.toLowerCase())) {
        return true;
    }
    
    return false;
}

function appendNote (note) {
    const body = document.getElementById("stores");

    if (body) {
        const container = document.createElement("div");
            
        const title = document.createElement("h3");
        const html = document.createElement("div");

        title.innerHTML = `Notes: ` + note.title;
        html.innerHTML = note.html;

        container.append(title);
        container.append(html);

        body.append(container);

        body.appendChild(document.createElement("hr"));
    }
}

//----------------------------------------------------------------------------------------------------
//
//  FUNCTIONS: Links
//
//----------------------------------------------------------------------------------------------------

function addLinks (id) {
    const body = document.getElementById("links");

    for (let l = 0; l < links.length; l++) {
        if (links[l].filter == id) {
            appendArticle(links[l].id, "links", "Links", links[l].title, links[l].subtitle, links[l].subtitleIcon, links[l].subtitleDesc, links[l].html, {}, "", [], "", [], "", false, "", true, findFavorite(links[l].id), links[l].id, 0);
        }
    }
}

function findTagInLink (tag, link) {
    if (link.title.toLowerCase().includes(tag.toLowerCase())) {
        return true;
    }

    if (link.html.toLowerCase().includes(tag.toLowerCase())) {
        return true;
    }

    return false;
}

function searchLinks (query) {
    var splitQueries = splitText(query.toLowerCase());
    
    var queries = [];
    var results = 0;
    
    for (const q of splitQueries) {
        if (!searchRemoval.includes(q)) {
            queries.push(q);
        }
    }

    var queryCount = queries.length;
    var matchCount = 0;

    if (queries.length > 0) {
        for (let l = 0; l < links.length; l++) {
            matchCount = 0;
            
            for (const tag of queries) {
                if (findTagInLink(tag, links[l])) {
                    matchCount += 1;
                    
                    if (matchCount/queryCount >= parseInt(document.getElementById("searchBarSettingSensitivity").value) / 100) {
                        appendArticle(links[l].id, "links", "Links", links[l].title, links[l].subtitle, links[l].subtitleIcon, links[l].subtitleDesc, links[l].html, {}, "", [], "", [], "", false, "", true, findFavorite(links[l].id), links[l].id, 0);
                        results++;
                        break;
                    }                   
                }
            }
        }
    }

    return results;
}

//----------------------------------------------------------------------------------------------------
//
//  FUNCTIONS: Blurbs
//
//----------------------------------------------------------------------------------------------------

function searchBlurbs (query) {
    var splitQueries = splitText(query.toLowerCase());
    
    var queries = [];
    var results = 0;
    
    for (const q of splitQueries) {
        if (!searchRemoval.includes(q)) {
            queries.push(q);
        }
    }

    var queryCount = queries.length;
    var matchCount = 0;
    
    if (queries.length > 0) {
        for (let b = 0; b < blurbs.length; b++) {
            matchCount = 0;
            
            for (const tag of queries) {
                if (findTagInBlurb(tag, blurbs[b])) {
                    matchCount += 1;
                    
                    if (matchCount/queryCount >= parseInt(document.getElementById("searchBarSettingSensitivity").value) / 100) {
                        appendArticle(blurbs[b].id, "blurbs", "Blurb", blurbs[b].title, "", "", "", blurbs[b].text, {}, "", blurbs[b].tags.split(" "), "", [], "", true, blurbs[b].text, true, findFavorite[blurbs[b].id], blurbs[b].id, 0);
                        results++;
                        break;
                    }                   
                }
            }
        }
    }

    return results;
}

function addBlurbs (id) {
    for (let b = 0; b < blurbs.length; b++) {
        if (blurbs[b].filter.toLowerCase().includes(id)) {
            appendArticle(blurbs[b].id, "blurbs", "Blurb", blurbs[b].title, "", "", "", blurbs[b].text, {}, "", blurbs[b].tags.split(" "), "", [], "", true, blurbs[b].text, true, findFavorite(blurbs[b].id), blurbs[b].id, 0);
        }
    }
}

function findTagInBlurb (tag, blurb) {
    if (blurb.title.toLowerCase().includes(tag.toLowerCase())) {
        return true;
    }

    if (blurb.filter.toLowerCase().includes(tag.toLowerCase())) {
        return true;
    }

    if (blurb.text.toLowerCase().includes(tag.toLowerCase())) {
        return true;
    }

    if (blurb.tags.toLowerCase().includes(tag.toLowerCase()) || blurb.hasKeyword(tag.toLowerCase())) {
        return true;
    }
    
    return false;
}

function appendBlurb (blurb) {
    const body = document.getElementById("blurbs");
    const container = document.createElement("div");
    const tagContainer = document.createElement("div");
            
    const header = document.createElement("div");
    const title = document.createElement("h3");
    const text = document.createElement("div");
    const buttonGroup = document.createElement("div");
    const favorite = document.createElement("button");
    const clipboard = document.createElement("button");

    title.innerHTML = `Blurb: ` + blurb.title;
    text.innerHTML = updateText(blurb.text);

    if (findFavorite(blurb.id)) {
        favorite.innerHTML = `<i class="bi bi-` + iconFavoriteOn + `"></i>`;
    } else {
        favorite.innerHTML = `<i class="bi bi-` + iconFavoriteOff + `"></i>`;
    }
    
    favorite.title = "Toggle Favorite";
    favorite.id = blurb.id + "Fav";
    favorite.addEventListener ("click", function() {
        toggleFavorite(HTMLToRichText(blurb.id))
    });

    clipboard.innerHTML = `<i class="bi bi-` + iconClipboardOff + `"></i>`;
    clipboard.title = "Copy To Clipboard";
    clipboard.style.marginRight = "4px";
    clipboard.addEventListener ("click", function() {
        copyToClipboard(HTMLToRichText(updateText(blurb.text)))
    });

    buttonGroup.style.display = "flex";
    buttonGroup.style.justifyContent = "space-between";

    buttonGroup.appendChild(clipboard);
    buttonGroup.appendChild(favorite);

    header.style.display = "flex";
    header.style.justifyContent = "space-between";

    header.appendChild(title);
    header.appendChild(buttonGroup);

    tagContainer.style.display = "flex";
    tagContainer.style.flexWrap = "wrap";

    if (blurb.tags) {

        tags = splitText(blurb.tags);
        tags.sort();

        for (const tag of tags) {
            const element = document.createElement("button");
            element.innerHTML = tag;
            element.classList.add("tag");
            element.title = "Search " + tag;

            element.addEventListener ("click", function() {
                search(tag)
            });

            var rainbowLight = ["pink", "orange", "yellow", "lightgreen", "lightblue", "Lavender"];
            var rainbowDark = ["darkred", "darkorange", "goldyellow", "darkgreen", "darkblue", "RebeccaPurple"];
            
            if (rainbow == 1) {

                const color = rainbowLight[Math.floor(Math.random() * rainbowLight.length)];
                element.style.backgroundColor = color;
                element.style.border = color;

            } else if (rainbow == 2) {
                
                const color = rainbowDark[Math.floor(Math.random() * rainbowDark.length)];
                element.style.backgroundColor = color;
                element.style.border = color;

            } else if (rainbow == 3) {
                
                const color = rainbowGem[Math.floor(Math.random() * rainbowDark.length)];
                element.style.backgroundColor = color;
                element.style.border = color;

            } else if (rainbow == 4) {
                
                const color = rainbowIndependence[Math.floor(Math.random() * rainbowIndependence.length)];
                element.style.backgroundColor = color;
                element.style.border = color;

            } else if (rainbow == 5) {
                
                const color = rainbowFreedom[Math.floor(Math.random() * rainbowFreedom.length)];
                element.style.backgroundColor = color;
                element.style.border = color;
            }

            tagContainer.appendChild(element);
        }
    }

    container.appendChild(header);
    container.appendChild(document.createElement("br"));
    container.append(text);
    container.appendChild(document.createElement("br"));
    container.appendChild(tagContainer);

    body.append(container);
    body.appendChild(document.createElement("hr"));
}

//----------------------------------------------------------------------------------------------------
//
//  FUNCTIONS: Changelog
//
//----------------------------------------------------------------------------------------------------

function addChangelogs () {
    jumpToTop();
    clear();

    const title = document.getElementById("title");
    title.innerHTML = "Credits";

    const body1 = document.getElementById("credits");

    const animationChangeLog = [
        { opacity: '0' },
        { opacity: '1' },
    ];

    const timingChangeLog = {
        duration: 400,
        iterations: 1,
    }

    for (let c = 0; c < credits.length; c++) {
        const container = document.createElement("div");
        const member = document.createElement("p");
        const role = document.createElement("h4");

        role.innerHTML = credits[c].role;
        member.innerHTML = credits[c].member;

        container.appendChild(role);
        container.appendChild(member);
        container.appendChild(document.createElement("br"));

        body1.appendChild(container);const animationChangeLog = [
            { opacity: '0' },
            { opacity: '1' },
        ];
    
        const timingChangeLog = {
            duration: 400,
            iterations: 1,
        }
    }

    body1.appendChild(document.createElement("hr"));

    const subtitle = document.getElementById("subtitle")
    subtitle.innerHTML = "Changelog";

    const body2 = document.getElementById("changelog");

    for (let v = 0; v < versions.length; v++) {
        const container = document.createElement("div");
        const version = document.createElement("h3");
        const date = document.createElement("p");
        const additions = document.createElement("p");
        const changes = document.createElement("p");
        const additionList = document.createElement("ul");
        const changeList = document.createElement("ul");

        version.innerHTML = versions[v].number + " | " + versions[v].title;
        date.innerHTML = versions[v].date;
        additions.innerHTML = "<h4>Additions</h4>";
        changes.innerHTML = "<h4>Changes</h4>";

        container.appendChild(version);
        container.appendChild(date);
        container.appendChild(document.createElement("br"));
        
        if (versions[v].additions.length > 0) {
            container.appendChild(additions);
            container.appendChild(additionList);
        
            for (const addition of versions[v].additions) {
                const li = document.createElement("li");
                li.innerHTML = addition;
                additionList.appendChild(li);
            }
        }

        container.appendChild(document.createElement("br"));
        
        if (versions[v].changes.length > 0) {
            container.appendChild(changes);
            container.appendChild(changeList);

            for (const change of versions[v].changes) {
                const li = document.createElement("li");
                li.innerHTML = change;
                changeList.appendChild(li);
            }
        }

        body2.appendChild(container);

        if (v != versions.length - 1) {
            body2.appendChild(document.createElement("hr"));
        }
    }

    body1.animate(animationChangeLog, timingChangeLog);
    body2.animate(animationChangeLog, timingChangeLog);
}

//----------------------------------------------------------------------------------------------------
//
//  FUNCTIONS: All Tools
//
//----------------------------------------------------------------------------------------------------

function addTools (id) {
    const body = document.getElementById("tools");

    for (let t = 0; t < tools.length; t++) {
        if (tools[t].filter == id) {
            if (tools[t].id == "tolBtqLctnList") {
                appendArticle(tools[t].id, "tools", "Tool", tools[t].title, tools[t].subtitle, "", "", tools[t].html, {}, "", [], "", [], tools[t].warning, true, "", true, findFavorite(tools[t].id), tools[t].id, 0);
            } else {
                if (tools[t].hidden == true) {
                    appendArticle(tools[t].id, "tools", "Tool", tools[t].title, tools[t].subtitle, "", "", "<i>This tool has depreciated. Please remove from your favorites.</i>", {}, "", [], "", [], tools[t].warning, false, "", true, findFavorite(tools[t].id), tools[t].id, 0);
                } else {
                    appendArticle(tools[t].id, "tools", "Tool", tools[t].title, tools[t].subtitle, "", "", tools[t].html, {}, "", [], "", [], tools[t].warning, false, "", true, findFavorite(tools[t].id), tools[t].id, 0);
                }
            }
        }
    }
}

function findTagInTool (tag, tool) {
    if (tool.title.toLowerCase().includes(tag.toLowerCase())) {
        return true;
    }

    if (tool.subtitle.toLowerCase().includes(tag.toLowerCase())) {
        return true;
    }
    
    if (tool.html.toString().includes(tag.toLowerCase())) {
        return true;
    }

    return false;
}

function searchTools (query) {
    var splitQueries = splitText(query.toLowerCase());
    
    var queries = [];
    var results = 0;
    
    for (const q of splitQueries) {
        if (!searchRemoval.includes(q)) {
            queries.push(q);
        }
    }

    var queryCount = queries.length;
    var matchCount = 0;
    
    

    if (queries.length > 0) {
        for (let t = 0; t < tools.length; t++) {
            matchCount = 0;

            for (const tag of queries) {
                if (findTagInTool(tag, tools[t])) {
                    matchCount += 1;

                    if (matchCount/queryCount >= parseInt(document.getElementById("searchBarSettingSensitivity").value) / 100) {
                        if (!tools[t].hidden) {
                            appendArticle(tools[t].id, "tools", "Tool", tools[t].title, tools[t].subtitle, "", "", tools[t].html, {}, "", [], "", [], tools[t].warning, false, "", true, findFavorite(tools[t].id), tools[t].id, 0);
                            results++;
                            break;    
                        }
                    }
                }
            }
        }
    }

    return results;
}

//----------------------------------------------------------------------------------------------------
//
//  FUNCTIONS: TOOL: Boutiques
//
//----------------------------------------------------------------------------------------------------

function showBoutique () {
    const body = document.getElementById("boutique");
    const select = document.getElementById("boutiques").value;

    for (const boutique of boutiques) {
        if (boutique.number == select) {
            body.innerHTML = ``;
            const container = document.createElement("div");
            const contentContainer = document.createElement("div");
            const textContainer = document.createElement("div");
            const image = document.createElement("div");

            const title = document.createElement("h3");
            const subtitle = document.createElement("p");
            const address1 = document.createElement("div");
            const address2 = document.createElement("div");
            const bPhone = document.createElement("div");
            const bEmail = document.createElement("div");
            const extension = document.createElement("div");
            const country = document.createElement("div");

            title.innerHTML = boutique.title;
            subtitle.innerHTML = setIcon(boutiqueIcons[boutique.type]) + ` ` + boutiqueTypes[boutique.type];

            if (boutique.closed) {
                title.innerHTML += " (Closed)";
            }

            if (boutique.address2) {
                address1.innerHTML = boutique.address1 + `<br>` + boutique.address2;
            } else {
                address1.innerHTML = boutique.address1;
            }
            
            address2.innerHTML = boutique.address3;

            if (boutique.phone) {
                bPhone.innerHTML = `<i class="bi bi-telephone-fill"></i> ` + boutique.phone;
            } else {
                bPhone.innerHTML = `<i class="bi bi-telephone-fill"></i> No Phone`;
            }

            if (boutique.extension > 0) {
                extension.innerHTML = `<i class="bi bi-telephone-plus-fill"></i> Ext ` + boutique.extension;
            } else {
                extension.innerHTML = `<i class="bi bi-telephone-plus-fill"></i> No Extension`;
            }

            if (boutique.email) {
                bEmail.innerHTML = `<i class="bi bi-envelope"></i> ` + boutique.email;
            } else {
                bEmail.innerHTML= `<i class="bi bi-envelope"></i> No Email Address`
            } 
            
            country.innerHTML = countryList[boutique.country];

            container.appendChild(title);
            container.appendChild(subtitle);
            container.appendChild(document.createElement("br"));

            contentContainer.style.display = "flex";
            contentContainer.style.justifyContent = "space-between";

            textContainer.appendChild(address1);
            textContainer.appendChild(address2);
            textContainer.appendChild(country);
            textContainer.appendChild(document.createElement("br"));
            textContainer.appendChild(bEmail);
            textContainer.appendChild(bPhone);
            textContainer.appendChild(extension);
            textContainer.appendChild(document.createElement("br"));

            contentContainer.appendChild(textContainer);

            if (boutique.image) {
                //image.style.width = "800px";
                //image.style.height = "531px";
                image.style.width = "400px";
                image.style.height = "265px";
                image.style.backgroundImage = "url(" + boutique.image + ")";
                image.style.backgroundRepeat = "no-repeat;"
                image.style.backgroundPosition = "center";
                image.style.backgroundSize = "cover";
                image.title = boutique.title;
                contentContainer.appendChild(image);
            }
            
            container.appendChild(contentContainer);

            body.appendChild(container);

            const element = document.getElementById("tolBtqLctnList");

            element.childNodes[0].childNodes[1].childNodes[0].innerHTML = setIcon(iconClipboardOff);
            element.childNodes[0].childNodes[1].childNodes[0].addEventListener ("click", function() {
                copyToClipboard(HTMLToRichText(boutique.copyable()))
            });
            
            return null;
        }
    }
}

function addBoutiques () {
    const select = document.getElementById("boutiques");

    if (select) {
        for (let b = 0; b < boutiques.length; b++) {
            const option = document.createElement("option");
            
            if (boutiques[b].number > 0) {
                option.innerHTML = `(Store #` + boutiques[b].number + `) ` + boutiques[b].title;
            } else {
                option.innerHTML = `(` + boutiqueTypes[boutiques[b].type] + `) ` + boutiques[b].title;
            }
            
            option.value = boutiques[b].number;
            select.append(option);
        }
    }
}

function findTagInBoutique (tag, boutique) {
    if (boutique.title.toLowerCase().includes(tag.toLowerCase())) {
        return true;
    }
    
    if (boutique.number.toString().includes(tag.toLowerCase())) {
        return true;
    }
    
    if (boutique.address1.toLowerCase().includes(tag.toLowerCase())) {
        return true;
    }

    if (boutique.address2.toLowerCase().includes(tag.toLowerCase())) {
        return true;
    }
    
    if (boutique.address3.toLowerCase().includes(tag.toLowerCase())) {
        return true;
    }
    
    if (boutique.phone.toLowerCase().includes(tag.toLowerCase())) {
        return true;
    }
    
    if (boutique.extension.toString().includes(tag.toLowerCase())) {
        return true;
    }

    if (countryList[boutique.country].toLowerCase() == tag.toLowerCase()) {
        return true;
    }

    if (boutiqueTypes[boutique.type].toLowerCase() == tag.toLowerCase()) {
        return true;
    }

    return false;
}

function searchBoutiques (query) {
    var splitQueries = splitText(query.toLowerCase());
    
    var queries = [];
    var results = 0;
    
    for (const q of splitQueries) {
        if (!searchRemoval.includes(q)) {
            queries.push(q);
        }
    }

    var queryCount = queries.length;
    var matchCount = 0;

    if (queries.length > 0) {
        for (let b = 0; b < boutiques.length; b++) {
            matchCount = 0;

            for (const tag of queries) {
                if (findTagInBoutique(tag, boutiques[b])) {
                    matchCount += 1;

                    if (matchCount/queryCount >= parseInt(document.getElementById("searchBarSettingSensitivity").value) / 100) {
                        appendArticle("", "stores", "Location", boutiques[b].title, boutiqueTypes[boutiques[b].type], boutiqueIcons[boutiques[b].type], "", "", {
                            title: boutiques[b].title,
                            address1: boutiques[b].address1,
                            address2: boutiques[b].address2,
                            address3: boutiques[b].address3,
                            country: countryList[Number(boutiques[b].country)],
                            phone: boutiques[b].phone,
                            extension: boutiques[b].extension,
                            email: boutiques[b].email,
                            status: Number(boutiques[b].closed),
                        },
                        boutiques[b].image, [], "", [], "", true, boutiques[b].copyable(), false, false, "", 0);
                        results++;
                        break;
                    }
                }
            }
        }
    }

    return results;
}

function appendBoutique (boutique) {
    const body = document.getElementById("stores");

    if (body) {
        const container = document.createElement("div");
        const contentContainer = document.createElement("div");
        const textContainer = document.createElement("div");
        const image = document.createElement("div");

        const title = document.createElement("h3");
        const address1 = document.createElement("div");
        const address2 = document.createElement("div");
        const bPhone = document.createElement("div");
        const bEmail = document.createElement("div");
        const extension = document.createElement("div");
        const country = document.createElement("div");

        if (boutique.outlet == true) {
            title.innerHTML = `Boutique: (` + boutique.number.toString() + `) <i class="bi bi-` + iconBoutiqueOutlet + `"></i> ` + boutique.title;
        } else {
            title.innerHTML = `Boutique: (` + boutique.number.toString() + `) <i class="bi bi-` + iconBoutiqueFull + `"></i> ` + boutique.title;
        }

        if (boutique.closed) {
            title.innerHTML += " (Closed)";
        }

        if (boutique.address2) {
            address1.innerHTML = boutique.address1 + `<br>` + boutique.address2;
        } else {
            address1.innerHTML = boutique.address1;
        }
        
        address2.innerHTML = boutique.address3;

        if (boutique.phone) {
            bPhone.innerHTML = `<i class="bi bi-telephone-fill"></i> ` + boutique.phone;
        } else {
            bPhone.innerHTML = `<i class="bi bi-telephone-fill"></i> No Phone`;
        }

        if (boutique.extension > 0) {
            extension.innerHTML = `<i class="bi bi-telephone-plus-fill"></i> Ext ` + boutique.extension;
        } else {
            extension.innerHTML = `<i class="bi bi-telephone-plus-fill"></i> No Extension`;
        }
        
        if (boutique.email) {
            bEmail.innerHTML = `<i class="bi bi-envelope"></i> ` + boutique.email;
        } else {
            bEmail.innerHTML= `<i class="bi bi-envelope"></i> No Email Address`
        }

        country.innerHTML = countryList[boutique.country];

        container.appendChild(title);
        container.appendChild(document.createElement("br"));

        contentContainer.style.display = "flex";
        contentContainer.style.justifyContent = "space-between";

        textContainer.appendChild(address1);
        textContainer.appendChild(address2);
        textContainer.appendChild(country);
        textContainer.appendChild(document.createElement("br"));
        textContainer.appendChild(bEmail);
        textContainer.appendChild(bPhone);
        textContainer.appendChild(extension);
        textContainer.appendChild(document.createElement("br"));

        contentContainer.appendChild(textContainer);

        if (boutique.image) {
            //image.style.width = "800px";
            //image.style.height = "531px";
            image.style.width = "400px";
            image.style.height = "265px";
            image.style.backgroundImage = "url(" + boutique.image + ")";
            image.style.backgroundRepeat = "no-repeat;"
            image.style.backgroundPosition = "center";
            image.style.backgroundSize = "cover";
            image.title = boutique.title;
            contentContainer.appendChild(image);
        }
        
        container.appendChild(contentContainer);
        container.appendChild(document.createElement("hr"));

        body.appendChild(container);
    }
}

//----------------------------------------------------------------------------------------------------
//
//  FUNCTIONS: TOOL: FedEx Tracking URL Generator
//
//----------------------------------------------------------------------------------------------------

function generateTrackingUrl () {
    trackingNumber = document.getElementById("trackingNumber").value;
    generatedTracking = document.getElementById("generatedTracking")

    if (trackingNumber) {
        url = "https://www.fedex.com/apps/fedextrack/?tracknumbers=" + trackingNumber;
        
        if (generatedTracking) {
            generatedTracking.innerHTML = `<b>FedEx Tracking URL:</b> ` + url + `<br><br></button>`;

            const button = document.createElement("button");
            button.innerHTML = `<i class="bi bi-` + iconClipboardOff + `"></i>`;
            button.title = "Copy To Clipboard";
            button.href = "javascript:void(0)";
            button.classList.add("clipboard");
            button.addEventListener("click", function() {
                copyToClipboard (url);
            });

            button.addEventListener ("click", function() {
                toggleClipboard(this)
            });

            generatedTracking.appendChild(button);
        }
    } else {
        generatedTracking.innerHTML = `<b>Error:</b> Please enter a FedEx tracking number.`;
    }
}

//----------------------------------------------------------------------------------------------------
//
//  FUNCTIONS: TOOL: Out Of Policy Narvar Link (NarvarForMe)
//
//----------------------------------------------------------------------------------------------------

function go_to_narvar () {
    order = document.getElementById("narvarOrder").value;			
    zip = document.getElementById("narvarZip").value;
    country = document.getElementById("narvarCountry").value;
    link = document.getElementById("narvarURL")

    if (!order) {
        link.innerHTML = "<b>Error:</b> Please input an order number.";
        return null;
    }

    if (!zip) {
        link.innerHTML = "<b>Error:</b> Please input a zip or postal code.";
        return null;
    }

    if (country != "null") {
        var approved = false;

        text = ""

        switch(country) {
            case "en_us":
                text = "United States";
                break;
            case "en_ca":
                text = "Canada";
                break;
        }

        message = "Are you sure this is a " + text + " order?\nIncorrect submissions may cause shipping issues. \n\nIf you're unsure, please verify and try submitting again.";
        

        if (confirm(message)) {
            approved = true;
        } else {
            return false;
        }

        if (approved) {
            url = "https://returns.narvar.com/davidyurman/returns/step-1?init=true&order=" + order + "&bzip=" + zip + "&userType=20100420DY&locale=" + country;
            window.open(url);
            link.innerHTML = `<b>Narvar URL:</b> ` + url + `<br><br>`;

            const button = document.createElement("button");
            button.innerHTML = `<i class="bi bi-` + iconClipboardOff + `"></i>`;
            button.title = "Copy To Clipboard";
            button.href = "javascript:void(0)";
            button.classList.add("clipboard");
            
            button.addEventListener("click", function() {
                copyToClipboard (url);
            });
            
            button.addEventListener ("click", function() {
                toggleClipboard(this)
            });

            link.appendChild(button);
        }
    } else {
        link.innerHTML = "<b>Error:</b> Please select a country.";
    }
}

//----------------------------------------------------------------------------------------------------
//
//  FUNCTIONS: TOOL: Randomized Piece Descriptions
//
//----------------------------------------------------------------------------------------------------

function randomizedPieceDescription (gender=0) {			

    input = document.getElementById("styleNameForRandomizedPieceDescriptionInput").value.toLowerCase().capitalize();
    output = document.getElementById("styleNameForRandomizedPieceDescriptionOutput");
    quality = document.getElementById("qualityForRandomizedPieceDescriptionInput").value;
    occasion = document.getElementById("occasionForRandomizedPieceDescriptionInput").value;
    
    if (input) {
        text = [];
        descriptionText = "";
        selectionText = "";
        qualityText = ".";
        occasionText = "";
        isOrAre = "is";

        for (const piece of plural_jewelry) {
            if (input.toLowerCase().includes(piece)) {
                isOrAre = "are";
            }
        }

        if ([1, 2].includes(gender)) {
            text = product_descriptions[gender];
        } else {
            text = product_descriptions[0];
        }

        descriptionText = text[Math.floor(Math.random() * text.length)]

        if (occasion.includes("gift")) {
            selectionText = gift_synonyms[Math.floor(Math.random() * gift_synonyms.length)]
        } else {
            selectionText = selection_synonyms[Math.floor(Math.random() * selection_synonyms.length)]
        }

        if (quality != "null") {
            quality_descriptions_length = quality_descriptions[quality].length;
            qualityText = ", " + quality_descriptions[quality][Math.floor(Math.random() * quality_descriptions_length)] + ".";
        }
        
        if (occasion != "null") {
            occasion_descriptions_length = occasion_descriptions[occasion].length;
            occasionText = occasion_descriptions[occasion][Math.floor(Math.random() * occasion_descriptions_length)];
        }

        finalText = "Our " + input + " " + isOrAre + " "  + descriptionText + " " + selectionText + qualityText;

        if (occasionText != "") {
            finalText += " " + occasionText;
        }

        if (finalText.startsWith("Dy")) {
            finalText.replace("Dy", "DY");
        }

        //copyToClipboard(finalText);
        output.innerHTML = finalText + `<br><br>`;
        
        const button = document.createElement("button");
        button.innerHTML = `<i class="bi bi-` + iconClipboardOff + `"></i>`;
        button.title = "CopyToClipboard";
        button.href = "javascript:void(0)";
        button.title = "Copy To Clipboard";

        button.addEventListener("click", function() {
            copyToClipboard (HTMLToRichText(finalText));
        });

        button.addEventListener ("click", function() {
            toggleClipboard(this)
        });

        output.appendChild(button);
    } else {
        output.innerHTML = `<b>Error:</b> Please enter the name of the product.`;
    }
}

//----------------------------------------------------------------------------------------------------
//
//  FUNCTIONS: Steps
//
//----------------------------------------------------------------------------------------------------

function addSteps (id) {
    showTab("");
    
    const body = document.getElementById("tools");
    const title = document.getElementById("title");

    const container = document.createElement("article");
    const subtitle = document.createElement("p");
    const content = document.createElement("div");

    title.innerHTML = `Steps & Checklists`;
    subtitle.innerHTML = `Let's go Step-By-Step to find the best solution to your problem.<br><br>Click Begin below to start.<br><br>`;
    content.innerHTML = `<button onclick="showStep('start')" class="textButton" title="Start">Begin</button><br><br><div id="step"></div>`;

    container.appendChild(subtitle);
    container.appendChild(content);

    const animationStep = [
        { opacity: '0' },
        { opacity: '1' },
    ];

    const timingStep = {
        duration: 400,
        iterations: 1,
    }

    body.animate(animationStep, timingStep);

    body.appendChild(container);
}

function showStep (key) {
    for (const step of steps) {
        if (step.key == key) {
            const container = document.getElementById("step");

            const title = document.createElement("h3");
            const anchorContainer = document.createElement("div");
            anchorContainer.display = "flex";
            anchorContainer.flexWrap = "wrap";

            title.innerHTML = step.title;

            container.appendChild(document.createElement("hr"));
            
            if (step.title) {
                container.appendChild(title);
            }
            
            container.append(step.question);

            if (step.checklist) {
                var counter = 0;

                for (const check of stepChecks) {
                    if (check.filter == step.checklist) {
                        
                        const htmlContainer = document.createElement("div");

                        if (check.extra) {
                            container.appendChild(document.createElement("hr"));

                            if (check.extraTitle) {
                                container.innerHTML += `<b>` + check.extraTitle  + `: </b>`;
                            }

                            container.innerHTML += check.extra;

                        container.appendChild(document.createElement("hr"));

                        } else {
                            counter += 1;

                            htmlContainer.innerHTML += `<input style="height: 16px; width: 16px;" type="checkbox"> <b>` + counter  + `. </b>`;
                            
                            if (check.title) {
                                htmlContainer.innerHTML += `<b>` + check.title  + `: </b>` + check.text;
                            }
                            
                            htmlContainer.innerHTML += check.text;
                        }

                        container.append(htmlContainer);
                    }
                }
            }

            container.appendChild(document.createElement("br"));
            container.appendChild(document.createElement("br"));

            for (const [key, value] of Object.entries(step.options)) {
                const button = document.createElement("button");
                
                button.display = "inline-block";
                button.display.margin = "4px";
                button.marginLeft = "0px";
                button.innerHTML = key;
                button.href = "javascript:void(0)";
                button.className = "textButton";

                button.addEventListener("click", function() {
                    showStep (value);
                });

                anchorContainer.appendChild(button);
            }

            container.appendChild(anchorContainer);

            window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
            return null;
        }
    }
}

//----------------------------------------------------------------------------------------------------
//
//  FUNCTIONS: Force Overlay: Internal Document Creator
//
//----------------------------------------------------------------------------------------------------

function addInternalDocument () {
    jumpToTop();
    clear();
    showTab("");

    const body = document.getElementById("internaldocument");
    const title = document.getElementById("title");

    title.innerHTML = "DY Internal Document";
    
    // Containers
    const container = document.createElement("div");
    const dateContainer = document.createElement("div");
    const internalContainer = document.createElement("div");
    const shippingContainer = document.createElement("div");
    const detailsContainer = document.createElement("div")
    const contentsContainer = document.createElement("div");

    // Elements
    const dateTitle = document.createElement("h3");
    const date = document.createElement("input");

    const titleShipper = document.createElement("h3");
    const titleReceiver = document.createElement("h3");
    const nameShipper = document.createElement("input");
    const nameReceiver = document.createElement("input");
    const departmentShipper = document.createElement("input");
    const departmentReceiver = document.createElement("input");
    const extensionShipper = document.createElement("input");
    const extensionReceiver = document.createElement("input");
    
    const commentsTitle = document.createElement("h3");
    const comments = document.createElement("TEXTAREA");    

    const titleShippingAddress = document.createElement("h3");

    const shippingName = document.createElement("input");
    const shippingAddress = document.createElement("input");
    const shippingCityStateZip = document.createElement("input");
    const shippingCountry = document.createElement("input");
    const shippingPhone = document.createElement("input");

    const shippingMethodTitle = document.createElement("h3");
    const shippingMethod = document.createElement("select");
    const quantityTitle = document.createElement("h3");
    const quantity = document.createElement("input");
    const valueTitle = document.createElement("h3");
    const value = document.createElement("input");

    const contentsTitle = document.createElement("h3");
    const contents1 = document.createElement("input");
    const contents2 = document.createElement("input");
    const contents3 = document.createElement("input");
    const contents4 = document.createElement("input");
    const contents5 = document.createElement("input");

    // Common Styles
    const commonContainerStyle = "display: flex; flex-wrap: wrap; justify-content: space-between;"
    const commonInputStyle = "display: flex; width: 380px;"
    const commonInputLongStyle = "display: flex; width: 100%;"
    const commonTitleStyle = "display: flex; width: 380px; margin-bottom: 10px; letter-spacing: 4px;"
    const commonTitleStyleInLine = "display: flex; width: 380px; letter-spacing: 4px; vertical-align: baseline;"
    const commonTitleFullStyle = "display: flex; width: 100%; margin-bottom: 10px; letter-spacing: 4px;"
    const commonTitleBreakStyle = "border-bottom: 1px solid  " + window.getComputedStyle(document.documentElement).getPropertyValue('--color-accent-light') + "; padding: 16px 0px; width: 100%; letter-spacing: 4px;"
    const commonTitleStyleInLineBreak = "display: flex; width: 380px; border-bottom: 1px solid " + window.getComputedStyle(document.documentElement).getPropertyValue('--color-accent-light') + "; padding: 16px 0px; letter-spacing: 4px; vertical-align: baseline;"

    //Date Container
    dateContainer.style = commonContainerStyle;

    date.style = commonInputStyle;
    date.type = "date";
    date.valueAsDate = new Date();

    dateTitle.innerHTML = "Date"
    dateTitle.style = commonTitleFullStyle;

    dateContainer.appendChild(dateTitle);
    dateContainer.appendChild(date);

    // Internal Container
    internalContainer.style = commonContainerStyle;

    titleShipper.innerHTML = `Sender`;
    titleShipper.style = commonTitleStyle;
    
    titleReceiver.innerHTML = `Reciever`;
    titleReceiver.style = commonTitleStyle;

    nameShipper.style = commonInputStyle;
    nameShipper.value = firstName + " " + lastName;
    nameShipper.placeholder = "Shipper First & Last Name";

    nameReceiver.style = commonInputStyle;
    nameReceiver.value = "Javier Hernandez";
    nameReceiver.placeholder = "Shipper First & Last Name";

    departmentShipper.style = commonInputStyle;
    departmentShipper.value = "Customer Care";
    departmentShipper.placeholder = "Shipper Department";

    departmentReceiver.style = commonInputStyle;
    departmentReceiver.value = "Shipping Department";
    departmentReceiver.placeholder = "Receiver Department";

    extensionShipper.style = commonInputStyle;
    extensionShipper.value = phone;
    extensionShipper.placeholder = "Shipper Work Phone Number";

    extensionReceiver.style = commonInputStyle;
    extensionReceiver.value = "(201) 528-4885";
    extensionReceiver.placeholder = "Receiver Phone Number";

    internalContainer.appendChild(titleShipper);
    internalContainer.appendChild(titleReceiver);
    internalContainer.appendChild(nameShipper);
    internalContainer.appendChild(nameReceiver);
    internalContainer.appendChild(departmentShipper);
    internalContainer.appendChild(departmentReceiver);
    internalContainer.appendChild(extensionShipper);
    internalContainer.appendChild(extensionReceiver);

    // Shipping Details
    shippingContainer.style = commonContainerStyle;

    titleShippingAddress.innerHTML = `Shipping Address`;
    titleShippingAddress.style = commonTitleBreakStyle;

    shippingContainer.appendChild(titleShippingAddress);

    shippingName.placeholder = "Shipping Recipient Name";
    shippingAddress.placeholder = "Address Line 1 & 2";
    shippingCityStateZip.placeholder = "City, State/Providence, Zip/Postal Code";
    shippingCountry.placeholder = "Country";
    shippingPhone.placeholder = "Phone Number";

    shippingName.style = commonInputLongStyle;
    shippingAddress.style = commonInputLongStyle;
    shippingCityStateZip.style = commonInputLongStyle;
    shippingCountry.style = commonInputLongStyle;
    shippingPhone.style = commonInputLongStyle;

    shippingContainer.appendChild(shippingName);
    shippingContainer.appendChild(shippingAddress);
    shippingContainer.appendChild(shippingCityStateZip);
    shippingContainer.appendChild(shippingCountry);
    shippingContainer.appendChild(shippingPhone);

    // Details Container
    detailsContainer.style = commonContainerStyle;

    shippingMethodTitle.innerHTML = `Delivery Method`;
    shippingMethodTitle.style = commonTitleStyleInLineBreak;

    contentsTitle.innerHTML = `Contents`;
    contentsTitle.style = commonTitleStyleInLineBreak;

    quantityTitle.innerHTML = `Quantity Of Boxes`;
    quantityTitle.style = commonTitleStyleInLine;

    quantity.style = commonInputStyle;
    quantity.value = 1;
    quantity.placeholder = "Quantity"

    valueTitle.innerHTML = `Value`;
    valueTitle.style = commonTitleStyleInLine;

    value.style = commonInputStyle;
    value.value = "$0";
    value.placeholder = "Value"

    shippingMethod.style = commonInputStyle;
    contents1.style = commonInputStyle;
    contents2.style = commonInputStyle;
    contents3.style = commonInputStyle;
    contents4.style = commonInputStyle;
    contents5.style = commonInputStyle;

    shippingMethod.className = "element";

    contents1.placeholder = "Contents 1 & Quantity";
    contents2.placeholder = "Contents 2 & Quantity";
    contents3.placeholder = "Contents 3 & Quantity";
    contents4.placeholder = "Contents 4 & Quantity";
    contents5.placeholder = "Contents 5 & Quantity";

    contents1.value = "1 Jewelry Care Kit";

    shippingMethod.innerHTML = `<option>FedEx Ground</option>
        <option>FedEx Two Day</option>
        <option>FedEx Overnight</option>
        <option>FedEx Saturday</option>
        <option>FedEx Smart Post</option>
        <option>USPS Ground</option>
        <option>Other</option>`;

    contentsContainer.style = commonContainerStyle;

    detailsContainer.appendChild(shippingMethodTitle);
    detailsContainer.appendChild(contentsTitle);
    detailsContainer.appendChild(shippingMethod);
    detailsContainer.appendChild(contents1);
    detailsContainer.appendChild(quantityTitle);
    detailsContainer.appendChild(contents2);
    detailsContainer.appendChild(quantity);
    detailsContainer.appendChild(contents3);
    detailsContainer.appendChild(valueTitle);
    detailsContainer.appendChild(contents4);
    detailsContainer.appendChild(value);
    detailsContainer.appendChild(contents5);
    
    // Comments
    commentsTitle.style = commonTitleBreakStyle;
    commentsTitle.innerHTML = `Comment(s)`;

    comments.className = "element";
    comments.style.fontSize = "16px";
    comments.style.lineHeight = "21px;"
    comments.style.height = "90px";
    comments.style.resize = "none";
    comments.maxLength = "200";
    comments.value = "Please ship the content(s) above to the address provided with the requested shipping method."

    // Done
    container.appendChild(dateContainer);
    container.appendChild(internalContainer);
    container.appendChild(shippingContainer);
    container.appendChild(document.createElement("br"));
    container.appendChild(detailsContainer);
    container.appendChild(commentsTitle);
    container.appendChild(comments);

    const animationStep = [
        { opacity: '0' },
        { opacity: '1' },
    ];

    const timingStep = {
        duration: 400,
        iterations: 1,
    }

    body.animate(animationStep, timingStep);

    body.appendChild(container);
}

//----------------------------------------------------------------------------------------------------
//
//  FUNCTIONS: Stones
//
//----------------------------------------------------------------------------------------------------

function showStone () {
    const img = document.getElementById("stone");
    
    if (img){
        const select = document.getElementById("stones").value;
    
        for (const stone of stones) {
            if (stone.code == select) {
                console.log(stone.title);
                img.src = "images/stones/" + stone.code + ".jpg";
                break;
            }
        }
    }
    
}

function addStones () {
    const select = document.getElementById("stones");

    if (select) {
        for (let s = 0; s < stones.length; s++) {
            const option = document.createElement("option");
            
            option.innerHTML = `(` + stones[s].code + `) ` + stones[s].title;
            option.value = stones[s].code;
            select.append(option);
        }
    }
}

function findTagInStones (tag, stone) {
    if (stone.title.toLowerCase().includes(tag.toLowerCase())) {
        return true;
    }
    
    if (stone.code.toLowerCase().includes(tag.toLowerCase())) {
        return true;
    }

    return false;
}

function searchStones (query) {
    var splitQueries = splitText(query.toLowerCase());
    
    var queries = [];
    var results = 0;
    
    for (const q of splitQueries) {
        if (!searchRemoval.includes(q)) {
            queries.push(q);
        }
    }

    var queryCount = queries.length;
    var matchCount = 0;

    if (queries.length > 0) {
        for (let b = 0; b < stones.length; b++) {
            matchCount = 0;

            for (const tag of queries) {
                if (findTagInStones(tag, stones[b])) {
                    matchCount += 1;

                    if (matchCount/queryCount >= parseInt(document.getElementById("searchBarSettingSensitivity").value) / 100) {
                        appendArticle("", "materials", "Stone", stones[b].title + " (" + stones[b].code + ")", "Gemstone", "gem", "", `<img src="images/stones/` + stones[b].code + `.jpg" class="elementSwatch">`, {}, "", [], "", [], "", true, stones[b].title + " (" + stones[b].code + ")", false, false, "", 0);
                        results++;
                    }
                }
            }
        }
    }

    return results;
}

//----------------------------------------------------------------------------------------------------
//
//  FUNCTIONS: Metals
//
//----------------------------------------------------------------------------------------------------

function showMetal () {
    const img = document.getElementById("metal");
    
    if (img) {
        const select = document.getElementById("metals").value;
    
        for (const metal of metals) {
            if (metal.code == select) {
                console.log(metal.title);
                img.src = "images/metals/" + metal.code + ".jpg";
                break;
            }
        }
    }
}

function addMetals () {
    const select = document.getElementById("metals");

    if (select) {
        for (let m = 0; m < metals.length; m++) {
            const option = document.createElement("option");
            
            option.innerHTML = `(` + metals[m].code + `) ` + metals[m].title;
            option.value = metals[m].code;
            select.append(option);
        }
    }
}

function findTagInMetals (tag, metals) {
    if (metals.title.toLowerCase().includes(tag.toLowerCase())) {
        return true;
    }
    
    if (metals.code.toLowerCase().includes(tag.toLowerCase())) {
        return true;
    }

    return false;
}

function searchMetals (query) {
    var splitQueries = splitText(query.toLowerCase());
    
    var queries = [];
    var results = 0;
    
    for (const q of splitQueries) {
        if (!searchRemoval.includes(q)) {
            queries.push(q);
        }
    }

    var queryCount = queries.length;
    var matchCount = 0;

    if (queries.length > 0) {
        for (let b = 0; b < metals.length; b++) {
            matchCount = 0;

            for (const tag of queries) {
                if (findTagInStones(tag, metals[b])) {
                    matchCount += 1;

                    if (matchCount/queryCount >= parseInt(document.getElementById("searchBarSettingSensitivity").value) / 100) {
                        appendArticle("", "materials", "Metal", metals[b].title + " (" + metals[b].code + ")", "Metal", "diamond-half", "", `<img src="images/metals/` + metals[b].code + `.jpg" class="elementSwatch">`, {}, "", [], "", [], "", true, metals[b].title + " (" + metals[b].code + ")", false, false, "", 0);
                        results++;
                    }
                }
            }
        }
    }

    return results;
}

//----------------------------------------------------------------------------------------------------
//
//  FUNCTIONS: Chains
//
//----------------------------------------------------------------------------------------------------

function addChains () {
    const select = document.getElementById("chains");

    if (select) {
        for (let c = 0; c < chains.length; c++) {
            const option = document.createElement("option");
            
            option.innerHTML = `(` + chains[c].code + `) ` + chains[c].title;
            option.value = chains[c].code;
            select.append(option);
        }
    }
}

function findTagInChains (tag, chain) {
    if (chain.title.toLowerCase().includes(tag.toLowerCase())) {
        return true;
    }
    
    if (chain.code.toLowerCase().includes(tag.toLowerCase())) {
        return true;
    }

    return false;
}

function searchChains (query) {
    var splitQueries = splitText(query.toLowerCase());
    
    var queries = [];
    var results = 0;
    
    for (const q of splitQueries) {
        if (!searchRemoval.includes(q)) {
            queries.push(q);
        }
    }

    var queryCount = queries.length;
    var matchCount = 0;

    if (queries.length > 0) {
        for (let c = 0; c < chains.length; c++) {
            matchCount = 0;

            for (const tag of queries) {
                if (findTagInChains(tag, chains[c])) {
                    matchCount += 1;

                    if (matchCount/queryCount >= parseInt(document.getElementById("searchBarSettingSensitivity").value) / 100) {
                        appendArticle("", "materials", "Chain", chains[c].title + " (" + chains[c].code + ")", "Chain", "circle", "", "", {}, "", [], "", [], "", true, chains[c].title + " (" + chains[c].code + ")", false, false, "", 0);
                        results++;
                    }
                }
            }
        }
    }

    return results;
}

//----------------------------------------------------------------------------------------------------
//
//  FUNCTIONS: Generic Article
//
//----------------------------------------------------------------------------------------------------

function appendBanner (element) {
    const body = document.getElementById("banners");

    const newBanner = createElement("div", "", "", "banner", "banner", "");
    
    const image = createElement("div", "", "", "bannerImage", "", "background-image: url('" + element.image + "'); background-repeat: no-repeat; background-position: center; background-size: cover;");
    const text = createElement("div", `<b>` + element.title + `</b><br>` + element.subtitle, "", "bannerText", "", "");

    newBanner.addEventListener ("click", window[element.action]);

    newBanner.appendChild(image);
    newBanner.appendChild(text);

    body.appendChild(newBanner);
}

//----------------------------------------------------------------------------------------------------
//
//  FUNCTIONS: Generic Article
//
//----------------------------------------------------------------------------------------------------

function appendArticle (aId="", aAppendTo="", aArticleType="", aTitle="", aSubtitle="", aSubtitleIcon="", aSubtitleDesc="", aBody="", aBoutique={}, aBoutiqueImage="", aTags=[], aContact="", aAssignments=[], aWarning="", canCopy=true, aCopyable="", canFavorite=true, isFavorite=false, aFavoriteId="", delay=0) {
    const body = document.getElementById(aAppendTo);
    
    const article = createElement("article");

    if (aId) {
        article.id = aId;
    }

    // Build Header
    const header = createElement("header", "", "", "", "", "margin-bottom: 20px; display: flex; flex-wrap: wrap; justify-content: space-between;");
    const headerText = createElement("div");

    var titleTextTemp = ""
    if (aArticleType) titleTextTemp += aArticleType + ": "

    const title = createElement("h3", titleTextTemp + aTitle, "", "", "", "max-width: 600px;");

    if (Object.keys(aBoutique).length > 0) {
        if (aBoutique.status == 1) {
            title.innerHTML += " (Closed)";
        }
    }

    headerText.appendChild(title);

    if (aSubtitle) {
        const subtitle = createElement("p", aSubtitleDesc, "", "", aSubtitleDesc, "max-width: 500px;");
        
        if (aSubtitleIcon) {
            subtitle.innerHTML = setIcon(aSubtitleIcon) + " " + aSubtitle;
        } else {
            subtitle.innerHTML = aSubtitle;
        }

        headerText.appendChild(subtitle);
    }

    header.appendChild(headerText);
    
    if (canCopy || canFavorite) {
        const headerButtons = createElement("div", "", "", "", "", "display: flex; justify-content: space-between; float: right;")

        if (canCopy && canFavorite) {
            headerButtons.style.width = "104px";
        } else {
            headerButtons.style.width = "48px";
        }

        if (canCopy) {
            const buttonCopy = document.createElement("button");

            buttonCopy.innerHTML = setIcon(iconClipboardOff);
            buttonCopy.title = "Copy To Clipboard";
            buttonCopy.classList.add("clipboard");
            buttonCopy.addEventListener ("click", function() {
                copyToClipboard(HTMLToRichText(updateText(aCopyable)))
            });

            buttonCopy.addEventListener ("click", function() {
                toggleClipboard(this)
            });

            headerButtons.appendChild(buttonCopy);
        }

        if (canFavorite) {
            const buttonFavorite = document.createElement("button");

            if (isFavorite) {
                buttonFavorite.innerHTML = setIcon(iconFavoriteOn);
            } else {
                buttonFavorite.innerHTML = setIcon(iconFavoriteOff);
            }
            
            buttonFavorite.title = "Toggle Favorite";
            buttonFavorite.id = aFavoriteId + "Fav";

            buttonFavorite.addEventListener ("click", function() {
                toggleFavorite(HTMLToRichText(aFavoriteId))
            });

            headerButtons.appendChild(buttonFavorite);
        }

        header.appendChild(headerButtons);
    }

    article.appendChild(header);

    // Build Warning

    if (aWarning) {
        const warning = document.createElement("p");
        warning.classList.add("warning");
        warning.style.paddingBottom = "20px";
        warning.innerHTML = setIcon("exclamation-circle-fill") + " " + aWarning;
        article.appendChild(warning);
    }

    // Build Assignments
    if (aAssignments.length > 0) {
        const assignments = document.createElement("div");

        assignments.style.display = "flex";
        assignments.style.flexWrap = "wrap";
        assignments.style.justifyContent = "space-between";

        for (const assignment of aAssignments) {
            if (aSubtitle == templateTypes[0] || aSubtitle == templateTypes[1]) {
                if (assignment.content) {
                    const element = document.createElement("div");
                    const elementLabel = document.createElement("p");
                    //const elementInput = document.createElement("input");
                    const elementInput = document.createElement("div");
                    const elementIcon = assignment.icon;

                    element.style.width = "47.5%";

                    elementLabel.innerHTML = assignment.title;
                    elementLabel.style.paddingBottom = "4px";
                    elementLabel.style.fontSize = "small";
                    
                    elementInput.disabled = true;

                    elementInput.innerHTML = setIcon(iconAssignments[assignment.icon]) + " ";
                    elementInput.innerHTML += assignment.content;
                    
                    if (AssignmentsName[assignment.icon]) {
                        elementInput.title = AssignmentsName[assignment.icon];
                    }
                    
                    elementInput.classList = "inputExample";
                    elementInput.style.marginBottom = "20px";
                    elementInput.style.borderRadius = "6px";

                    element.appendChild(elementLabel);
                    element.appendChild(elementInput);

                    assignments.appendChild(element);
                }
            }
        }

        article.appendChild(assignments);
    }

    // Build Contact
    if (aContact) {
        const contact = document.createElement("p");
        contact.style.marginBottom = "20px";
    
        contact.innerHTML = "<b>Suggested Contact(s):</b> " + aContact;
    
        article.appendChild(contact);
    }

    // Build Content
    const content = document.createElement("div");
    
    content.style.display = "flex";
    content.style.marginBottom = "20px";
    content.style.verticalAlign = " text-top";

    const copyable = document.createElement("p");
    copyable.innerHTML = updateText(aBody);

    if (Object.keys(aBoutique).length > 0) {
        const boutique = document.createElement("div");
        const boutiqueAddress1 = document.createElement("div");
        const boutiqueAddress2 = document.createElement("div");
        const boutiquePhone = document.createElement("div");
        const boutiqueEmail = document.createElement("div");
        const boutiqueExtension = document.createElement("div");
        const boutiqueCountry = document.createElement("div");

        /*if (boutique.outlet == true) {
            title.innerHTML = `Boutique: (` + boutique.number.toString() + `) <i class="bi bi-` + iconBoutiqueOutlet + `"></i> ` + boutique.title;
        } else {
            title.innerHTML = `Boutique: (` + boutique.number.toString() + `) <i class="bi bi-` + iconBoutiqueFull + `"></i> ` + boutique.title;
        }*/

        if (aBoutique.address2) {
            boutiqueAddress1.innerHTML = aBoutique.address1 + `<br>` + aBoutique.address2;
        } else {
            boutiqueAddress1.innerHTML = aBoutique.address1;
        }
        
        boutiqueAddress2.innerHTML = aBoutique.address3;

        if (aBoutique.phone) {
            boutiquePhone.innerHTML = `<i class="bi bi-telephone-fill"></i> ` + aBoutique.phone;
        } else {
            boutiquePhone.innerHTML = `<i class="bi bi-telephone-fill"></i> No Phone`;
        }

        if (aBoutique.extension > 0) {
            boutiqueExtension.innerHTML = `<i class="bi bi-telephone-plus-fill"></i> Ext ` + aBoutique.extension;
        } else {
            boutiqueExtension.innerHTML = `<i class="bi bi-telephone-plus-fill"></i> No Extension`;
        }
        
        if (aBoutique.email) {
            boutiqueEmail.innerHTML = `<i class="bi bi-envelope"></i> ` + aBoutique.email;
        } else {
            boutiqueEmail.innerHTML= `<i class="bi bi-envelope"></i> No Email Address`
        }

        boutiqueCountry.innerHTML = aBoutique.country;

        appendChildren(boutique, [boutiqueAddress1, boutiqueAddress2, boutiqueCountry, createElement("br"), boutiqueEmail, boutiquePhone, boutiqueExtension, createElement("br")])

        copyable.appendChild(boutique);
    }

    if (aBoutiqueImage) {
        copyable.style.width = "50%";
        
        const image = createElement("div", "", "", "", aTitle, "width: 400px; height: 265px; background-image: url(" + aBoutiqueImage + "); background-repeat: no-repeat; background-position: center; background-size: cover;")
        appendChildren(content, [copyable, image]);

    } else {
        copyable.style.width = "100%";
        content.appendChild(copyable);
    }

    article.appendChild(content);

    // Build Footer
    if (aTags.length > 0) {
        // Footer...
        const footer = document.createElement("footer");

        const footerTitle = document.createElement("p");
        footerTitle.style.textDecoration = "italic";
        footerTitle.style.fontSize = "smaller";
        footerTitle.innerHTML = "Search Tags:";
        footerTitle.style.marginBottom = "6px";

        const footerTags = document.createElement("div");
        footerTags.style.display = "flex";
        footerTags.style.flexDirection = "row";
        footerTags.style.flexWrap = "wrap";

        aTags.sort()

        for (const tag of aTags) {
            const element = document.createElement("button");
            element.innerHTML = tag;
            element.classList.add("tag");
            element.title = "Search " + tag;

            element.addEventListener ("click", function() {
                search(tag)
            });

            if (rainbow == 1) {

                const color = rainbowLight[Math.floor(Math.random() * rainbowLight.length)];
                element.style.backgroundColor = color;
                element.style.border = color;

            } else if (rainbow == 2) {
                
                const color = rainbowDark[Math.floor(Math.random() * rainbowDark.length)];
                element.style.backgroundColor = color;
                element.style.border = color;

            } else if (rainbow == 3) {
                
                const color = rainbowGem[Math.floor(Math.random() * rainbowDark.length)];
                element.style.backgroundColor = color;
                element.style.border = color;

            } else if (rainbow == 4) {
                
                const color = rainbowIndependence[Math.floor(Math.random() * rainbowIndependence.length)];
                element.style.backgroundColor = color;
                element.style.border = color;

            } else if (rainbow == 5) {
                
                const color = rainbowFreedom[Math.floor(Math.random() * rainbowFreedom.length)];
                element.style.backgroundColor = color;
                element.style.border = color;
            }

            footerTags.appendChild(element);
        }

        footer.appendChild(footerTitle);
        footer.appendChild(footerTags);
    
        article.appendChild(footer);
    }
    
    // End 
    article.appendChild(createElement("hr"));

    const animationArticle = [
        { opacity: '0' },
        { opacity: '1' },
    ];

    const timingArticle = {
        duration: 400,
        iterations: 1,
    }

    article.animate(animationArticle, timingArticle);
    body.appendChild(article);
    
}

//----------------------------------------------------------------------------------------------------
//
//  FUNCTIONS: TOOL: Lunch
//
//----------------------------------------------------------------------------------------------------

class cuisine {
    constructor (name, spicy, familiar, nonAmerican, cheap, quick, nonAnimal, filling) {
        this.name = name;
        this.spicy = spicy;
        this.familiar = familiar;
        this.nonAmerican = nonAmerican;
        this.cheap = cheap;
        this.quick = quick;
        this.nonAnimal = nonAnimal;
        this.filling = filling;
    }
}

var options = [
    //Generic
    new cuisine (
        "Coffee And Donuts", false, true, false, false, true, false, false
    ),
    new cuisine (
        "Tea And Pasteries", false, true, false, false, true, true, false
    ),
    new cuisine (
        "Sandwiches And Subs", false, true, false, true, true, true, false
    ),
    new cuisine (
        "Salads", false, false, false, true, true, true, false
    ),
    new cuisine (
        "Steak", false, true, false, false, false, false, true
    ),
    new cuisine (
        "Seafood", false, true, false, false, true, false, false
    ),
    //American
    new cuisine (
        "Brunch", false, true, false, false, false, false, true
    ),
    new cuisine (
        "Burgers And Fries", false, true, false, true, true, false, true
    ),
    new cuisine (
        "Hot Dogs", false, true, false, true, true, false, true
    ),
    new cuisine (
        "Fried Chicken", true, true, false, true, true, false, true
    ),
    new cuisine (
        "Shakes And Ice Cream", false, true, false, true, true, false, false
    ),
    new cuisine (
        "Tacos", true, true, true, true, true, false, true
    ),
    new cuisine (
        "Burritos", true, true, true, true, true, true, true
    ),
    new cuisine (
        "Fajitas", true, true, true, true, true, false, true
    ),
    //Carribbean
    new cuisine (
        "Gyro", true, false, true, true, true, true, true
    ),
    new cuisine (
        "Jerk", true, true, true, false, false, false, true
    ),
    // European
    new cuisine (
        "Fish And Chips", false, true, true, true, true, false, true
    ),
    new cuisine (
        "Pasta", true, true, true, true, false, true, true
    ),
    new cuisine (
        "Pizza", false, true, true, true, true, true, true
    ),
    //Asian
    new cuisine (
        "Curry", true, false, true, true, true, true, true
    ),
    new cuisine (
        "Shawarma", true, false, true, true, true, true, true
    ),
    new cuisine (
        "Chinese Takeout", true, true, true, true, true, false, false
    ),
    new cuisine (
        "Sushi", true, false, true, false, true, false, false
    ),
    new cuisine (
        "Ramen", true, false, true, false, true, false, true
    ),
    new cuisine (
        "Hibachi", true, false, true, false, false, false, true
    ),
]

var myOptions = []

var option = "";

function filterLunch () {
    output = document.getElementById('output');

    myOptions = fillOptions();

    var spicy = parseInt(document.getElementById('spicy').getAttribute('value'));
    var familiar = parseInt(document.getElementById('familiar').getAttribute('value'));
    var nonAmerican = parseInt(document.getElementById('nonAmerican').getAttribute('value'));
    var cheap = parseInt(document.getElementById('cheap').getAttribute('value'));
    var quick = parseInt(document.getElementById('quick').getAttribute('value'));
    var nonAnimal = parseInt(document.getElementById('nonAnimal').getAttribute('value'));
    var filling = parseInt(document.getElementById('filling').getAttribute('value'));

    filterSpicy(spicy);
    filterFamiliar(familiar);
    filterNonAmerican(nonAmerican);
    filterCheap(cheap);
    filterQuick(quick);
    filterNonAnimal(nonAnimal);
    filterFilling(filling);

    num = Math.floor(Math.random() * myOptions.length);

    if (myOptions.length > 0) {
        output.innerHTML = `Find ` + myOptions[num].name + ` Near Me`;
        option = myOptions[num].name;
    } else {
        output.innerHTML = `Find Water Near Me`;
        option = "Water";
    }

    output.style.display = "inline-block";
}

function fillOptions() {
    var arr = [];

    for (var i = 0; i < options.length; i++) {
        if (options[i].name != option) {
            arr.push(options[i]);
        }
    }

    return arr;
}

function filterSpicy(filter)
{
    if (filter == true) {
        for (var i = 0; i < myOptions.length; i++) {
            if (myOptions[i].spicy == false) {
                myOptions.splice(i, 1);
                i--;
            }
        }
    }  
}

function filterFamiliar(filter)
{
    if (filter == true) {
        for (var i = 0; i < myOptions.length; i++) {
            if (myOptions[i].familiar == false) {
                myOptions.splice(i, 1);
                i--;
            }
        }
    }
}

function filterNonAmerican(filter)
{
    if (filter == true)
    {
        for (var i = 0; i < myOptions.length; i++) {
            if (myOptions[i].nonAmerican == false) {
                myOptions.splice(i, 1);
                i--;
            }
        }
    }
}

function filterCheap(filter)
{
    if (filter == true) {
        for (var i = 0; i < myOptions.length; i++) {
            if (myOptions[i].cheap == false) {
                myOptions.splice(i, 1);
                i--;
            }
        }
    }
}

function filterQuick(filter)
{
    if (filter == true) {
        for (var i = 0; i < myOptions.length; i++) {
            if (myOptions[i].quick == false) {
                myOptions.splice(i, 1);
                i--;
            }
        }
    }
}

function filterNonAnimal(filter)
{
    if (filter == true) {
        for (var i = 0; i < myOptions.length; i++) {
            if (myOptions[i].nonAnimal == false) {
                myOptions.splice(i, 1);
                i--;
            }
        }
    }
}

function filterFilling(filter)
{
    if (filter == true) {
        for (var i = 0; i < myOptions.length; i++) {
            if (myOptions[i].filling == false) {
                myOptions.splice(i, 1);
                i--;
            }
        }
    }
}

function toggle(id) {
    var element = document.getElementById(id);

    if (element.getAttribute('value') == 0) {
        element.setAttribute('value', 1);
        element.setAttribute('class', 'lunch-choice-on');
    } else {
        element.setAttribute('value', 0);
        element.setAttribute('class', 'lunch-choice-off');
    }
}

function find () {
    open("https://www.google.com/search?q=Find+" + option + "+Restaurant+Near+Me");
}

function setDropDowns () {
    const titles = document.querySelectorAll('.dropdown-title');

    titles.forEach(title =>  {
        title.addEventListener("click", event => {
            title.classList.toggle("active");
            const body = title.nextElementSibling;
            if (title.classList.contains("active")){
                body.style.maxHeight = body.scrollHeight + "px";
            }
            else {
                body.style.maxHeight = 0;
            }
        });
    });
}

function getTime() {
    var date = new Date();
    var dateLong = date.toLocaleString('en-US', {
        timeZone: 'America/New_York',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZoneName: 'short',
    });

    var weekday = date.getDay();
    var day = date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear();
    //var time = date.getHours();

    var twoDayShipping = "";
    var oneDayShipping = "";

    if (parseInt(dateLong.substring(12,14)) >= '03' && dateLong.substring(21,23) == 'PM') {
        twoDayShipping = weekdays[deliveryTwoDayCutOff[weekday]];
        oneDayShipping = weekdays[deliveryOneDayCutOff[weekday]];
    } else {
        twoDayShipping = weekdays[deliveryTwoDay[weekday]];
        oneDayShipping = weekdays[deliveryOneDay[weekday]];
    }

    document.getElementById('timeWeather').innerHTML = setIcon(warehouseStates[warehouseState].icon) +  ` | <b>` + dateLong.substring(12, 17) + " " + dateLong.substring(21, 23) + "</b> " + weekdays[weekday] + ", " + months[month] + " " + day + ", " + year;
    document.getElementById('twoDayShipping').innerHTML = twoDayShipping;
    document.getElementById('oneDayShipping').innerHTML = oneDayShipping;

    //Warehouse
    warehouseState = 2;
    var whatever = document.getElementById("warehouse");
    whatever.childNodes[9].innerHTML = `Opens Next Business Day`;

    if (weekday > 0 && weekday < 6) {
        if (parseInt(dateLong.substring(12,14)) >= '08' && dateLong.substring(21,23) == 'AM' ||
            parseInt(dateLong.substring(12,14)) < '03' && dateLong.substring(21,23) == 'PM'  ||
            parseInt(dateLong.substring(12,14)) == '12' && dateLong.substring(21,23) == 'PM') {
            warehouseState = 0;
            whatever.childNodes[9].innerHTML = `Ends 3 PM`;
        } else if (parseInt(dateLong.substring(12,14)) < '05' && dateLong.substring(21,23) == 'PM') {
            warehouseState = 1;
            whatever.childNodes[9].innerHTML = `Ends 5 PM`;
        }
    } else if (weekday == 6) {
        if (parseInt(dateLong.substring(12,14)) >= '08' && dateLong.substring(21,23) == 'AM') {
            warehouseState = 0;
            whatever.childNodes[9].innerHTML = `Ends 12 PM`;
        } else if (parseInt(dateLong.substring(12,14)) < '04' && dateLong.substring(21,23) == 'PM'||
                parseInt(dateLong.substring(12,14)) == '12' && dateLong.substring(21,23) == 'PM') {
            warehouseState = 1;
            whatever.childNodes[9].innerHTML = `Ends 4 PM`;
        }
    }

    whatever.childNodes[3].innerHTML = warehouseStates[warehouseState].name;
    whatever.childNodes[3].title = warehouseStates[warehouseState].description;
    whatever.childNodes[5].innerHTML = `<i class="bi bi-` + warehouseStates[warehouseState].icon + `"></i>`;
    whatever.childNodes[7].innerHTML = warehouseStates[warehouseState].notice;

    // Time Zones
    var dateLongNewYork = date.toLocaleString('en-US', {
        timeZone: 'US/Eastern',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZoneName: 'short',
    });

    var dateLongTexas = date.toLocaleString('en-US', {
        timeZone: 'US/Central',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZoneName: 'short',
    });

    var dateLongArizona = date.toLocaleString('en-US', {
        timeZone: 'US/Mountain',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZoneName: 'short',
    });

    var dateLongCalifornia = date.toLocaleString('en-US', {
        timeZone: 'US/Pacific',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZoneName: 'short',
    });

    var dateLongAlaska = date.toLocaleString('en-US', {
        timeZone: 'US/Alaska',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZoneName: 'short',
    });

    var dateLongHawaii = date.toLocaleString('en-US', {
        timeZone: 'US/Hawaii',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZoneName: 'short',
    });

    var dateLongParis = date.toLocaleString('en-US', {
        timeZone: 'Europe/Paris',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZoneName: 'short',
    });

    var dateLongLondon = date.toLocaleString('en-US', {
        timeZone: 'Europe/London',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZoneName: 'short',
    });

    var dateLongDubai = date.toLocaleString('en-US', {
        timeZone: 'Asia/Dubai',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZoneName: 'short',
    });

    var dateLongHongKong = date.toLocaleString('en-US', {
        timeZone: 'Asia/Hong_Kong',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZoneName: 'short',
    });

    var dateLongToronto = date.toLocaleString('en-US', {
        timeZone: 'Canada/Eastern',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZoneName: 'short',
    });

    var dateLongAuckland = date.toLocaleString('en-US', {
        timeZone: 'Pacific/Auckland',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZoneName: 'short',
    });

    document.getElementById('timeNewYork').innerHTML = dateLongNewYork.substring(12, 17) + " " + dateLongNewYork.substring(21, 23);
    document.getElementById('timeTexas').innerHTML = dateLongTexas.substring(12, 17) + " " + dateLongTexas.substring(21, 23);
    document.getElementById('timeArizona').innerHTML = dateLongArizona.substring(12, 17) + " " + dateLongArizona.substring(21, 23);
    document.getElementById('timeCalifornia').innerHTML = dateLongCalifornia.substring(12, 17) + " " + dateLongCalifornia.substring(21, 23);
    document.getElementById('timeAlaska').innerHTML = dateLongAlaska.substring(12, 17) + " " + dateLongAlaska.substring(21, 23);
    document.getElementById('timeHawaii').innerHTML = dateLongHawaii.substring(12, 17) + " " + dateLongHawaii.substring(21, 23);
    document.getElementById('timeToronto').innerHTML = dateLongToronto.substring(12, 17) + " " + dateLongToronto.substring(21, 23);
    document.getElementById('timeParis').innerHTML = dateLongParis.substring(12, 17) + " " + dateLongParis.substring(21, 23);
    document.getElementById('timeLondon').innerHTML = dateLongLondon.substring(12, 17) + " " + dateLongLondon.substring(21, 23);
    document.getElementById('timeDubai').innerHTML = dateLongDubai.substring(12, 17) + " " + dateLongDubai.substring(21, 23);
    document.getElementById('timeHongKong').innerHTML = dateLongHongKong.substring(12, 17) + " " + dateLongHongKong.substring(21, 23);
    document.getElementById('timeNewZealand').innerHTML = dateLongAuckland.substring(12, 17) + " " + dateLongAuckland.substring(21, 23);

    const bodyHolidays = document.getElementById("holidays");
    const holidaysList = document.createElement("div");

    bodyHolidays.innerHTML = "No Holidays Today";
    holidaysList.innerHTML = "";

    holidayToday = [];
    holidayUpcoming = [];

    // getDayAhead
    if (bodyHolidays) {
        for (var i = 0; i < daysAheadHolidays; i++) {
            for (var e = 0; e < holidays.length; e++) {
                if (i == 0) {
                    if (holidays[e].month == date.getMonth()) {
                        if (holidays[e].day == date.getDate() || holidays[e].monthLong == true) {
                            const element = document.createElement("div");
                            element.innerHTML = holidays[e].title;
                            element.className = "today";
                            holidaysList.appendChild(element);
                            holidayToday.push(e);
                        } else if (holidays[e].day == 0) {
                            for (const [key, value] of Object.entries(holidays[e].years)){
                                if (key == date.getFullYear() && value == date.getDate())
                                {
                                    console.log (key + " " + value)
                                    const element = document.createElement("div");
                                    element.innerHTML = holidays[e].title;
                                    element.className = "today";
                                    holidaysList.appendChild(element);
                                    holidayToday.push(e);
                                    holidayUpcoming.push(e);
                                    break;
                                }
                            }
                        }
                    }
                } else {
                    if (holidays[e].month == getDayAhead(i).getMonth()) {
                        if (holidays[e].day == getDayAhead(i).getDate()) {
                            const element = document.createElement("div");
                            element.innerHTML = holidays[e].title + ` (` + (holidays[e].month + 1) + `/` + holidays[e].day + `)`;
                            element.className = "upcoming";
                            holidaysList.appendChild(element);
                            holidayUpcoming.push(e);
                        } else if (holidays[e].day == 0) {
                            for (const [key, value] of Object.entries(holidays[e].years)){
                                if (key == getDayAhead(i).getFullYear() && value == getDayAhead(i).getDate())
                                {
                                    const element = document.createElement("div");
                                    element.innerHTML = holidays[e].title + ` (` + (holidays[e].month + 1) + `/` + value + `)`;
                                    element.className = "upcoming";
                                    holidaysList.appendChild(element);
                                    holidayUpcoming.push(e);
                                    break;
                                }
                            }
                        }
                    }
                }
            }
        }

        if (holidaysList.innerHTML) {
            bodyHolidays.innerHTML = holidaysList.innerHTML;
        }
    }
}

function getWholesaleTimes () {
    var date = new Date();
    var element = document.getElementById("wholesaleTimes");
    element.innerHTML = ``;
    
    for (var i = 0; i < 24; i++) {
        if (i > 0) {
            var newDateStart = new Date();
            var newDateEnd = new Date();
    
            newDateStart.setDate(date.getDate() + (7 * i))
            newDateEnd.setDate(date.getDate() + (7 * i) + 6)
    
            var timeframe = months[(newDateStart.getMonth())].substr(0, 3) + ` ` + newDateStart.getDate() + ` to ` + months[(newDateEnd.getMonth())].substr(0, 3) + ` ` + newDateEnd.getDate();
            var leadTimeFrame = (i + 2) + ` to ` + (i + 4) + ` Weeks`;
    
            var button = document.createElement("button");
            var buttonTime = document.createElement("div");
            var buttonLeadTime = document.createElement("div");
    
            button.style.width = "100%";
            button.style.display = "flex";
            button.style.justifyContent = "space-between";
            button.style.border = "none";
            button.style.height = "24px";
            
            buttonTime.style.fontSize = "16px";
            buttonTime.style.verticalAlign = "middle";
    
            buttonLeadTime.style.fontSize = "16px";
            buttonLeadTime.style.verticalAlign = "middle";
    
            button.addEventListener("click", copyToClipboard.bind(this, leadTimeFrame), false);
            
            buttonTime.innerHTML = timeframe;
            buttonLeadTime.innerHTML = leadTimeFrame;
    
            button.appendChild(buttonTime);
            button.appendChild(buttonLeadTime);
            element.append (button);
        }
    }
}

function getVersion() {
    var text = document.getElementById("version");
    text.innerHTML = "v." + versions[0].number;
}

function getDayAhead (time=1) {
    var date = new Date();
    date.setDate(date.getDate() + time);
    return date;
}

function getWeather() {
    fetch('https://api.openweathermap.org/data/2.5/forecast?zip=07071,us&units=imperial&cnt=5&appid=b3456f9acbfa64fc4495e6696ecdc9a5')
    .then((response) => response.json())
    .then((data) => {
        if (data.cod == "200") {
            var hasWarningIcon = false;

            var date = new Date();

            for (var i = 0; i < 5; i++) {
                var code = data.list[i].weather[0].id;

                var dayOfWeek = date.getDay() + i;

                if (dayOfWeek >= 7) {
                    dayOfWeek -= 7;
                }

                document.getElementById('weather').children[i].title = data.list[i].weather[0].description.toLowerCase().capitalize() + "\n"
                                                                    + "Feels Like: " + data.list[i].main.feels_like.toFixed().toString().split(".")[0] + "°\n" 
                                                                    + "Humidity: " + data.list[i].main.humidity + "%\n"
                                                                    + "Wind: " + data.list[i].wind.speed + " mph\n";

                const weatherWarning = document.getElementById("weatherWarning");
                if (i == 0) {
                    weatherWarning.innerHTML = "&nbsp;" + data.list[i].main.temp.toFixed().toString().split(".")[0] + "°&nbsp;" + codeToIcon(data.list[i].weather[0].icon);
                }

                if (weather_warning.includes(code)) {
                    document.getElementById('weather').children[i].children[0].innerHTML = "<i class='bi bi-" + iconWeatherWarningToday + "'></i> " + weekdaysShort[dayOfWeek];

                    if (!hasWarningIcon) {
                        if (i == 0) {
                            weatherWarning.insertAdjacentHTML('beforeend', "&nbsp;<i class='bi bi-" + iconWeatherWarningToday + "'></i>");
                        } else {
                            weatherWarning.insertAdjacentHTML('beforeend', "&nbsp;<i class='bi bi-" + iconWeatherWarningOther + "'></i>");
                        }
                        hasWarningIcon = true;
                    }

                } else {
                    document.getElementById('weather').children[i].children[0].innerHTML = weekdaysShort[dayOfWeek];
                    
                }

                document.getElementById('weather').children[i].children[1].innerHTML = codeToIcon(data.list[i].weather[0].icon);
                document.getElementById('weather').children[i].children[2].innerHTML = data.list[i].weather[0].main;

                var tempHigh = data.list[i].main.temp_max.toFixed().toString().split(".")[0];
                var tempLow = data.list[i].main.temp_min.toFixed().toString().split(".")[0];

                document.getElementById('weather').children[i].children[3].innerHTML = `<b>` + tempHigh + "°</b> " + tempLow + "°";
            }
        }
    });
}

function codeToIcon (code) {
    switch (code) {
        case "01d":
            return `<i class="bi bi-sun"></i>`;
        case "01n":
            return `<i class="bi bi-sun"></i>`;
        case "02d":
            return `<i class="bi bi-cloud-sun"></i>`;
        case "02n":
            return `<i class="bi bi-cloud-sun"></i>`;
        case "03d":
            return `<i class="bi bi-cloud"></i>`;
        case "03n":
            return `<i class="bi bi-cloud"></i>`;
        case "04d":
            return `<i class="bi bi-clouds"></i>`;
        case "04n":
            return `<i class="bi bi-clouds"></i>`;
        case "09d":
            return `<i class="bi bi-cloud-rain-heavy"></i>`;
        case "09n":
            return `<i class="bi bi-cloud-rain-heavy"></i>`;
        case "10d":
            return `<i class="bi bi-cloud-rain"></i>`;
        case "10n":
            return `<i class="bi bi-cloud-rain"></i>`;
        case "11d":
            return `<i class="bi bi-cloud-lightning"></i>`;
        case "11n":
            return `<i class="bi bi-cloud-lightning"></i>`;
        case "13d":
            return `<i class="bi bi-cloud-snow"></i>`;
        case "13n":
            return `<i class="bi bi-cloud-snow"></i>`;
        case "50d":
            return `<i class="bi bi-cloud-haze2"></i>`;
        case "50n":
            return `<i class="bi bi-cloud-haze2"></i>`;
    }
}

//----------------------------------------------------------------------------------------------------
//
//  FUNCTIONS: TOOL: Bingo!
//
//----------------------------------------------------------------------------------------------------

function addBingo () {
    const element = document.getElementById("bingo");

    if (element) {
        bingoBoard = localStorage.getItem("bingoBoard");

        if (bingoBoard) {
            board = bingoBoard.split(";");

            for (var i = 0; i < 24; i++) {
                document.getElementById("bingo" + i.toString()).innerHTML = bingoTiles[board[i]];
            }
        } else {
            generateBingoBoard();
        }
    }
}

function generateBingoBoard () {
    remainingBingoTiles = [];
            
    for (var c = 0; c < bingoTiles.length; c++) {
        remainingBingoTiles.push(c);
    }

    bingoBoard = "";
    
    for (var i = 0; i < 24; i++) {
        // Pull a random tile from a set of remaining tiles to avoid duplicates.
        var tile = remainingBingoTiles[Math.floor(Math.random() * remainingBingoTiles.length)];

        // Add random tile to string list with semi-colon to be split later.
        bingoBoard += tile.toString() + ";";

        // Remove random tile from remaining tile list.
        remainingBingoTiles.splice(remainingBingoTiles.indexOf(tile), 1);

        // Get strings from Bingo Tiles array based on number in array
        document.getElementById("bingo" + i.toString()).innerHTML = bingoTiles[tile];
    }

    localStorage.setItem("bingoBoard", bingoBoard);

    setNotice("Bingo!", "A New Bingo board has been generated. Every time a new board is generated, it will be saved for later until a new one is generated.")
}
