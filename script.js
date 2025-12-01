// --- CONFIGURATION: Font Styles ---
// type: 'map' (default), 'combining', 'decoration', 'reverse_map'
const fontStyles = [
    // --- SERIF STYLES ---
    {
        name: "Bold Serif",
        type: "map",
        map: "𝐚𝐛𝐜𝐝𝐞𝐟𝐠𝐡𝐢𝐣𝐤𝐥𝐦𝐧𝐨𝐩𝐪𝐫𝐬𝐭𝐮𝐯𝐰𝐱𝐲𝐳𝐀𝐁𝐂𝐃𝐄𝐅𝐆𝐇𝐈𝐉𝐊𝐋𝐌𝐍𝐎𝐏𝐐𝐑𝐒𝐓𝐔𝐕𝐖𝐗𝐘𝐙𝟎𝟏𝟐𝟑𝟒𝟓𝟔𝟕𝟖𝟗"
    },
    {
        name: "Italic Serif",
        type: "map",
        map: "𝑎𝑏𝑐𝑑𝑒𝑓𝑔ℎ𝑖𝑗𝑘𝑙𝑚𝑛𝑜𝑝𝑞𝑟𝑠𝑡𝑢𝑣𝑤𝑥𝑦𝑧𝐴𝐵𝐶𝐷𝐸𝐹𝐺𝐻𝐼𝐽𝐾𝐿𝑀𝑁𝑂𝑃𝑄𝑅𝑆𝑇𝑈𝑉𝑊𝑋𝑌𝑍0123456789" // Fixed 'h' hole
    },
    {
        name: "Bold Italic Serif",
        type: "map",
        map: "𝒂𝒃𝒄𝒅𝒆𝒇𝒈𝒉𝒊𝒋𝒌𝒍𝒎𝒏𝒐𝒑𝒒𝒓𝒔𝒕𝒖𝒗𝒘𝒙𝒚𝒛𝑨𝑩𝑪𝑫𝑬𝑭𝑮𝑯𝑰𝑱𝑲𝑳𝑴𝑵𝑶𝑷𝑸𝑹𝑺𝑻𝑼𝑽𝑾𝑿𝒀𝒁𝟎𝟏𝟐𝟑𝟒𝟓𝟔𝟕𝟖𝟗"
    },

    // --- SANS SERIF STYLES ---
    {
        name: "Sans Serif",
        type: "map",
        map: "𝖺𝖻𝖼𝖽𝖾𝖿𝗀𝗁𝗂𝗃𝗄𝗅𝗆𝗇𝗈𝗉𝗊𝗋𝗌𝗍𝗎𝗏𝗐𝗑𝗒𝗓𝖠𝖡𝖢𝖣𝖤𝖥𝖦𝖧𝖨𝖩𝖪𝖫𝖬𝖭𝖮𝖯𝖰𝖱𝖲𝖳𝖴𝖵𝖶𝖷𝖸𝖹𝟢𝟣𝟤𝟥𝟦𝟧𝟨𝟩𝟪𝟫"
    },
    {
        name: "Sans Serif Bold",
        type: "map",
        map: "𝗮𝗯𝗰𝗱𝗲𝗳𝗴𝗵𝗶𝗷𝗸𝗹𝗺𝗻𝗼𝗽𝗾𝗿𝘀𝘁𝘂𝘃𝘄𝘅𝘆𝘇𝗔𝗕𝗖𝗗𝗘𝗙𝗚𝗛𝗜𝗝𝗞𝗟𝗠𝗡𝗢𝗣𝗤𝗥𝗦𝗧𝗨𝗩𝗪𝗫𝗬𝗭𝟬𝟭𝟮𝟯𝟰𝟱𝟲𝟳𝟴𝟵"
    },
    {
        name: "Sans Serif Italic",
        type: "map",
        map: "𝘢𝘣𝘤𝘥𝘦𝘧𝘨𝘩𝘪𝘫𝘬𝘭𝘮𝘯𝘰𝘱𝘲𝘳𝘴𝘵𝘶𝘷𝘸𝘹𝘺𝘻𝘈𝘉𝘊𝘋𝘌𝘍𝘎𝘏𝘐𝘑𝘒𝘓𝘔𝘕𝘖𝘗𝘘𝘙𝘚𝘛𝘜𝘝𝘞𝘟𝘠𝘡0123456789"
    },
    {
        name: "Sans Bold Italic",
        type: "map",
        map: "𝙖𝙗𝙘𝙙𝙚𝙛𝙜𝙝𝙞𝙟𝙠𝙡𝙢𝙣𝙤𝙥𝙦𝙧𝙨𝙩𝙪𝙫𝙬𝙭𝙮𝙯𝘼𝘽𝘾𝘿𝙀𝙁𝙂𝙃𝙄𝙅𝙆𝙇𝙈𝙉𝙊𝙋𝙌𝙍𝙎𝙏𝙐𝙑𝙒𝙓𝙔𝙕𝟎𝟏𝟐𝟑𝟒𝟓𝟔𝟕𝟖𝟗"
    },

    // --- SCRIPT & GOTHIC ---
    {
        name: "Script (Normal)",
        type: "map",
        map: "𝒶𝒷𝒸𝒹ℯ𝒻ℊ𝒽𝒾𝒿𝓀𝓁𝓂𝓃ℴ𝓅𝓆𝓇𝓈𝓉𝓊𝓋𝓌𝓍𝓎𝓏𝒜ℬ𝒞𝒟ℰℱ𝒢ℋℐ𝒥𝒦ℒℳ𝒩𝒪𝒫𝒬ℛ𝒮𝒯𝒰𝒱𝒲𝒳𝒴𝒵0123456789" // Patched holes
    },
    {
        name: "Script (Bold)",
        type: "map",
        map: "𝓪𝓫𝓬𝓭𝓮𝓯𝓰𝓱𝓲𝓳𝓴𝓵𝓶𝓷𝓸𝓹𝓺𝓻𝓼𝓽𝓾𝓿𝔀𝔁𝔂𝔃𝓐𝓑𝓒𝓔𝓕𝓖𝓗𝓘𝓙𝓚𝓛𝓜𝓝𝓞𝓟𝓠𝓡𝓢𝓣𝓤𝓥𝓦𝓧𝓨𝓩0123456789"
    },
    {
        name: "Fraktur (Gothic)",
        type: "map",
        map: "𝔞𝔟𝔠𝔡𝔢𝔣𝔤𝔥𝔦𝔧𝔨𝔩𝔪𝔫𝔬𝔭𝔮𝔯𝔰𝔱𝔲𝔳𝔴𝔵𝔶𝔷𝔄𝔅ℭ𝔇𝔈𝔉𝔊ℌℑ𝔍𝔎𝔏𝔐𝔑𝔒𝔓𝔔ℜ𝔖𝔗𝔘𝔙𝔚𝔛𝔜ℨ0123456789"
    },
    {
        name: "Fraktur Bold",
        type: "map",
        map: "𝖆𝖇𝖈𝖉𝖊𝖋𝖌𝖍𝖎𝖏𝖐𝖑𝖒𝖓𝖔𝖕𝖖𝖗𝖘𝖙𝖚𝖛𝖜𝖝𝖞𝖟𝕬𝕭𝕮𝕯𝕰𝕱𝕲𝕳𝕴𝕵𝕶𝕷𝕸𝕹𝕺𝕻𝕼𝕽𝕾𝕿𝖀𝖁𝖂𝖃𝖄𝖅0123456789"
    },

    // --- SPECIALTY ---
    {
        name: "Double Struck",
        type: "map",
        map: "𝕒𝕓𝕔𝕕𝕖𝕗𝕘𝕙𝕚𝕛𝕜𝕝𝕞𝕟𝕠𝕡𝕢𝕣𝕤𝕥𝕦𝕧𝕨𝕩𝕪𝕫𝔸𝔹ℂ𝔻𝔼𝔽𝔾ℍ𝕀𝕁𝕂𝕃𝕄ℕ𝕆ℙℚℝ𝕊𝕋𝕌𝕍𝕎𝕏𝕐ℤ𝟘𝟙𝟚𝟛𝟜𝟝𝟞𝟟𝟠𝟡"
    },
    {
        name: "Monospace",
        type: "map",
        map: "𝚊𝚋𝚌𝚍𝚎𝚏𝚐𝚑𝚒𝚓𝚔𝚕𝚖𝚗𝚘𝚙𝚚𝚛𝚜𝚝𝚞𝚟𝚠𝚡𝚢𝚣𝙰𝙱𝙲𝙳𝙴𝙵𝙶𝙷𝙸𝙹𝙺𝙻𝙼𝙽𝙾𝙿𝚀𝚁𝚂𝚃𝚄𝚅𝚆𝚇𝚈𝚉𝟶𝟷𝟸𝟹𝟺𝟻𝟼𝟽𝟾𝟿"
    },
    {
        name: "Small Caps",
        type: "map",
        map: "ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘǫʀꜱᴛᴜᴠᴡxʏᴢᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘǫʀꜱᴛᴜᴠᴡxʏᴢ0123456789"
    },
    {
        name: "Wide (Fullwidth)",
        type: "map",
        map: "ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ０１２３４５６７８９"
    },
    {
        name: "Bubbles (White)",
        type: "map",
        map: "ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏ0①②③④⑤⑥⑦⑧⑨"
    },
    {
        name: "Bubbles (Black)",
        type: "map",
        map: "🅐🅑🅒🅓🅔🅕🅖🅗🅘🅙🅚🅛🅜🅝🅞🅟🅠🅡🅢🅣🅤🅥🅦🅧🅨🅩🅐🅑🅒🅓🅔🅕🅖🅗🅘🅙🅚🅛🅜🅝🅞🅟🅠🅡🅢🅣🅤🅥🅦🅧🅨🅩0➊➋➌➍➎➏➐➑➒"
    },
    {
        name: "Square (White)",
        type: "map",
        map: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789" // Standard fallback
    },
    {
        name: "Square (Black)",
        type: "map",
        map: "🅰🅱🅲🅳🅴🅵🅶🅷🅸🉹🅺🅻🅼🅽🅾🅿🆀🆁🆂🆃🆄🆅🆆🆇🆈🆉🅰🅱🅲🅳🅴🅵🅶🅷🅸🉹🅺🅻🅼🅽🅾🅿🆀🆁🆂🆃🆄🆅🆆🆇🆈🆉0123456789"
    },
    {
        name: "Upside Down",
        type: "reverse_map",
        map: {
            'a': 'ɐ', 'b': 'q', 'c': 'ɔ', 'd': 'p', 'e': 'ǝ', 'f': 'ɟ', 'g': 'ƃ', 'h': 'ɥ', 'i': 'ᴉ', 'j': 'ɾ', 'k': 'ʞ', 'l': 'l', 'm': 'ɯ', 'n': 'u', 'o': 'o', 'p': 'd', 'q': 'b', 'r': 'ɹ', 's': 's', 't': 'ʇ', 'u': 'n', 'v': 'ʌ', 'w': 'ʍ', 'x': 'x', 'y': 'ʎ', 'z': 'z',
            'A': '∀', 'B': 'q', 'C': 'Ɔ', 'D': 'p', 'E': 'Ǝ', 'F': 'Ⅎ', 'G': 'פ', 'H': 'H', 'I': 'I', 'J': 'ſ', 'K': 'ʞ', 'L': '˥', 'M': 'W', 'N': 'N', 'O': 'O', 'P': 'd', 'Q': 'b', 'R': 'R', 'S': 'S', 'T': '┴', 'U': '∩', 'V': 'Λ', 'W': 'M', 'X': 'X', 'Y': '⅄', 'Z': 'Z',
            '0': '0', '1': 'Ɩ', '2': 'ᄅ', '3': 'Ɛ', '4': 'ㄣ', '5': 'ϛ', '6': '9', '7': 'ㄥ', '8': '8', '9': '6',
            '?': '¿', '!': '¡', '"': '„', "'": ',', '.': '˙', ',': "'", '(': ')', ')': '(', '[': ']', ']': '[', '{': '}', '}': '{', '<': '>', '>': '<', '&': '⅋', '_': '‾'
        }
    },
    
    // --- COMBINING EFFECTS ---
    { name: "Strikethrough", type: "combining", value: "\u0336" },
    { name: "Slash Through", type: "combining", value: "\u0337" },
    { name: "Underline", type: "combining", value: "\u0332" },
    { name: "Squiggle", type: "combining", value: "\u035A" },

    // --- DECORATIONS ---
    { name: "Sparkles", type: "decoration", prefix: "★·.·´¯`·.·★ ", suffix: " ★·.·´¯`·.·★" },
    { name: "Arrows", type: "decoration", prefix: "«-(¯`v´¯)-« ", suffix: " »-(¯`v´¯)-»" },
    { name: "Wings", type: "decoration", prefix: "꧁ ", suffix: " ꧂" },
    { name: "Heart", type: "decoration", prefix: "♥ ", suffix: " ♥" }
];

// --- CONFIGURATION: Symbol Library ---
const symbolPacks = [
    { name: "Stars", content: "★ ☆ ✦ ✧ ✩ ✪ ✫ ✬ ✭ ✮ ✯ ✰ ✡ ⁂ ⁎ ⁑ ☸ ✢ ✣ ✤ ✥ ✱ ✲ ✳ ✴ ✵ ✶ ✷ ✸ ✹ ✺ ✻ ✼ ✽ ✾ ✿ ❀ ❁ ❂ ❃ ❇ ❈ ❉ ❊ ❋" },
    { name: "Arrows", content: "← ↑ → ↓ ↔ ↕ ↖ ↗ ↘ ↙ ↚ ↛ ↜ ↝ ↞ ↟ ↠ ↡ ↢ ↣ ↤ ↥ ↦ ↧ ↨ ↩ ↪ ↫ ↬ ↭ ↮ ↯ ↰ ↱ ↲ ↳ ↴ ↵ ↶ ↷ ↸ ↹ ↺ ↻ ↼ ↽ ↾ ↿ ⇀ ⇁ ⇂ ⇃ ⇄ ⇅ ⇆ ⇇ ⇈ ⇉ ⇊ ⇋ ⇌ ⇍ ⇎ ⇏ ⇐ ⇑ ⇒ ⇓ ⇔ ⇕ ⇖ ⇗ ⇘ ⇙ ⇚ ⇛ ⇜ ⇝ ⇞ ⇟ ⇠ ⇡ ⇢ ⇣" },
    { name: "Math", content: "∀ ∁ ∂ ∃ ∄ ∅ ∆ ∇ ∈ ∉ ∊ ∋ ∌ ∍ ∎ ∏ ∐ ∑ − ∓ ∔ ∕ ∖ ∗ ∘ ∙ √ ∛ ∜ ∝ ∞ ∟ ∠ ∡ ∢ ∣ ∤ ∥ ∦ ∧ ∨ ∩ ∪ ∫ ∬ ∭ ∮ ∯ ∰ ∱ ∲ ∳ ∴ ∵ ∶ ∷ ∸ ∹ ∺ ∻ ∼ ∽ ∾ ∿ ≀ ≁ ≂ ≃ ≄ ≅ ≆ ≇ ≈ ≉ ≊ ≋ ≌ ≍ ≎ ≏ ≐ ≑ ≒ ≓ ≔ ≕ ≖ ≗ ≘ ≙ ≚ ≛ ≜ ≝ ≞ ≟ ≠ ≡ ≢ ≣ ≤ ≥ ≦ ≧ ≨ ≩ ≪ ≫" },
    { name: "Music", content: "♩ ♪ ♫ ♬ ♭ ♮ ♯ 𝄪 𝄆 𝄇 𝄈 𝄉 𝄊 𝄋 𝄌 𝄍 𝄎 𝄏 𝄐 𝄑 𝄒 𝄓 𝄔 𝄕 𝄖 𝄗 𝄘 𝄙 𝄚 𝄛 𝄜 𝄝 𝄞 𝄟 𝄠 𝄡 𝄢 𝄣 𝄤 𝄥 𝄦 𝄧 𝄨 𝄩 𝄪 𝄫 𝄬 𝄭 𝄮 𝄯 𝄰 𝄱 𝄲 𝄳 𝄴 𝄵 𝄶 𝄷 𝄸 𝄹 𝄺 𝄻 𝄼 𝄽 𝄾 𝄿 𝅀 𝅁 𝅂 𝅃 𝅄 𝅅 𝅆 𝅇 𝅈 𝅉 𝅊 𝅋 𝅌 𝅍 𝅎 𝅏 𝅐 𝅑 𝅒 𝅓 𝅔 𝅕 𝅖 𝅗 𝅘 𝅙 𝅚 𝅛 𝅜 𝅝 𝅗𝅥 𝅘𝅥 𝅘𝅥𝅮 𝅘𝅥𝅯 𝅘𝅥𝅰 𝅘𝅥𝅱 𝅘𝅥𝅲 𝅥 𝅦 𝅧 𝅨 𝅩 𝅪 𝅫 𝅬 𝅭 𝅮 𝅯" },
    { name: "Kaomoji", content: "(▀̿Ĺ̯▀̿ ̿) (ง ͠° ͟ل͜ ͡°)ง ༼ つ ◕_◕ ༽つ ( ͡° ͜ʖ ͡°) ¯\\_(ツ)_/¯ ಠ_ಠ (◕‿◕) (｡♥‿♥｡) (づ｡◕‿‿◕｡)づ ᕙ(⇀‸↼‶)ᕗ (╯°□°）╯︵ ┻━┻" },
    { name: "Checks", content: "✓ ✔ ✕ ✖ ✗ ✘ ☒ ☑ ❏ ❐ ❑ ❒ ✇ ☐" }
];

const standardAlphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

// DOM Elements
const inputField = document.getElementById('userInput');
const outputGrid = document.getElementById('outputGrid');
const symbolGrid = document.getElementById('symbolGrid');
const clearBtn = document.getElementById('clearBtn');
const toast = document.getElementById('toast');

// Event Listeners
inputField.addEventListener('input', generateFonts);
clearBtn.addEventListener('click', () => {
    inputField.value = '';
    generateFonts();
    inputField.focus();
});

// Initialization
generateFonts();
renderSymbols();

function generateFonts() {
    const text = inputField.value;

    if (!text) {
        outputGrid.innerHTML = `
            <div class="placeholder-state">
                <i class="ri-text"></i>
                <p>Start typing to see the magic happen</p>
            </div>
        `;
        return;
    }

    outputGrid.innerHTML = '';

    fontStyles.forEach(style => {
        let transformedText = "";
        
        switch (style.type) {
            case "map":
                transformedText = transformMap(text, style.map);
                break;
            case "reverse_map":
                transformedText = transformReverse(text, style.map);
                break;
            case "combining":
                transformedText = transformCombining(text, style.value);
                break;
            case "decoration":
                transformedText = style.prefix + text + style.suffix;
                break;
            default:
                transformedText = text;
        }
        
        createCard(style.name, transformedText, outputGrid);
    });
}

function transformMap(text, fontMap) {
    // Handle surrogate pairs by splitting correctly
    const mapArray = Array.from(fontMap);
    return text.split('').map(char => {
        const index = standardAlphabet.indexOf(char);
        if (index !== -1 && mapArray[index]) {
            return mapArray[index];
        }
        return char;
    }).join('');
}

function transformReverse(text, charMap) {
    return text.split('').reverse().map(char => {
        return charMap[char] || char;
    }).join('');
}

function transformCombining(text, combiner) {
    return text.split('').map(char => char + combiner).join('');
}

function renderSymbols() {
    symbolGrid.innerHTML = '';
    symbolPacks.forEach(pack => {
        createCard(pack.name, pack.content, symbolGrid, "symbol-card");
    });
}

function createCard(label, content, container, customClass = 'font-card') {
    const card = document.createElement('div');
    card.className = customClass;
    
    // Accessibility
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('title', 'Click to copy');

    // Content based on class
    if (customClass === 'font-card') {
        card.innerHTML = `
            <div class="font-label">${label}</div>
            <div class="font-preview">${content}</div>
        `;
    } else {
        card.innerHTML = `
            <div class="symbol-label">${label}</div>
            <div class="symbol-content">${content}</div>
        `;
    }

    card.addEventListener('click', () => copyToClipboard(content));
    container.appendChild(card);
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showToast();
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}

function showToast() {
    toast.classList.remove('hidden');
    setTimeout(() => {
        toast.classList.add('hidden');
    }, 2000);
}
