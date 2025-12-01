/* Configuration: Map regular characters to mathematical alphanumeric symbols
  Note: This logic maps a-z, A-Z, and 0-9.
*/

const fonts = [
    {
        name: "Script",
        map: "𝕒𝕓𝕔𝕕𝕖𝕗𝕘𝕙𝕚𝕛𝕜𝕝𝕞𝕟𝕠𝕡𝕢𝕣𝕤𝕥𝕦𝕧𝕨𝕩𝕪𝕫𝔸𝔹ℂ𝔻𝔼𝔽𝔾ℍ𝕀𝕁𝕂𝕃𝕄ℕ𝕆ℙℚℝ𝕊𝕋𝕌𝕍𝕎𝕏𝕐ℤ𝟘𝟙𝟚𝟛𝟜𝟝𝟞𝟟𝟠𝟡"
    },
    {
        name: "Bold Serif",
        map: "𝐚𝐛𝐜𝐝𝐞𝐟𝐠𝐡𝐢𝐣𝐤𝐥𝐦𝐧𝐨𝐩𝐪𝐫𝐬𝐭𝐮𝐯𝐰𝐱𝐲𝐳𝐀𝐁𝐂𝐃𝐄𝐅𝐆𝐇𝐈𝐉𝐊𝐋𝐌𝐍𝐎𝐏𝐐𝐑𝐒𝐓𝐔𝐕𝐖𝐗𝐘𝐙𝟎𝟏𝟐𝟑𝟒𝟓𝟔𝟕𝟖𝟗"
    },
    {
        name: "Italic",
        map: "𝘢𝘣𝘤𝘥𝘦𝘧𝘨𝘩𝘪𝘫𝘬𝘭𝘮𝘯𝘰𝘱𝘲𝘳𝘴𝘵𝘶𝘷𝘸𝘹𝘺𝘻𝘈𝘉𝘊𝘋𝘌𝘍𝘎𝘏𝘐𝘑𝘒𝘓𝘔𝘕𝘖𝘗𝘘𝘙𝘚𝘛𝘜𝘝𝘞𝘟𝘠𝘡0123456789"
    },
    {
        name: "Monospace",
        map: "𝚊𝚋𝚌𝚍𝚎𝚏𝚐𝚑𝚒𝚓𝚔𝚕𝚖𝚗𝚘𝚙𝚚𝚛𝚜𝚝𝚞𝚟𝚠𝚡𝚢𝚣𝙰𝙱𝙲𝙳𝙴𝙵𝙶𝙷𝙸𝙹𝙺𝙻𝙼𝙽𝙾𝙿𝚀𝚁𝚂𝚃𝚄𝚅𝚆𝚇𝚈𝚉𝟶𝟷𝟸𝟹𝟺𝟻𝟼𝟽𝟾𝟿"
    },
    {
        name: "Bubbles",
        map: "ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏ0①②③④⑤⑥⑦⑧⑨"
    },
    {
        name: "Gothic",
        map: "𝔞𝔟𝔠𝔡𝔢𝔣𝔤𝔥𝔦𝔧𝔨𝔩𝔪𝔫𝔬𝔭𝔮𝔯𝔰𝔱𝔲𝔳𝔴𝔵𝔶𝔷𝔄𝔅ℭ𝔇𝔈𝔉𝔊ℌℑ𝔍𝔎𝔏𝔐𝔑𝔒𝔓𝔔ℜ𝔖𝔗𝔘𝔙𝔚𝔛𝔜ℨ0123456789"
    },
    {
        name: "Square",
        map: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789" // Standard fallback/comparison
    },
    {
        name: "Bold Script",
        map: "𝓪𝓫𝓬𝓭𝓮𝓯𝓰𝓱𝓲𝓳𝓴𝓵𝓶𝓷𝓸𝓹𝓺𝓻𝓼𝓽𝓾𝓿𝔀𝔁𝔂𝔃𝓐𝓑𝓒𝓔𝓕𝓖𝓗𝓘𝓙𝓚𝓛𝓜𝓝𝓞𝓟𝓠𝓡𝓢𝓣𝓤𝓥𝓦𝓧𝓨𝓩0123456789"
    },
    {
        name: "Wide",
        map: "ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ０１２３４５６７８９"
    }
];

const standardAlphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

// DOM Elements
const inputField = document.getElementById('userInput');
const outputGrid = document.getElementById('outputGrid');
const clearBtn = document.getElementById('clearBtn');
const toast = document.getElementById('toast');

// Event Listeners
inputField.addEventListener('input', generateFonts);
clearBtn.addEventListener('click', () => {
    inputField.value = '';
    generateFonts();
    inputField.focus();
});

// Initial load (optional: generate for a default string)
// inputField.value = "Hello World";
// generateFonts();

function generateFonts() {
    const text = inputField.value;

    // Handle empty state
    if (!text) {
        outputGrid.innerHTML = `
            <div class="placeholder-state">
                <i class="ri-text"></i>
                <p>Start typing to see the magic happen</p>
            </div>
        `;
        return;
    }

    // Clear previous results
    outputGrid.innerHTML = '';

    // Generate Cards
    fonts.forEach(font => {
        const transformedText = transformText(text, font.map);
        createCard(font.name, transformedText);
    });
}

function transformText(text, fontMap) {
    return text.split('').map(char => {
        const index = standardAlphabet.indexOf(char);
        // If character is in our standard list, replace it. Otherwise keep original (e.g., spaces, punctuation)
        return index !== -1 ? fontMap.substring(index * 2, index * 2 + 2) : char; // Note: unicode chars in JS are length 2 usually (surrogate pairs), but let's use Array.from logic for safety
    }).join('');
}

// Better Transform Function handling Surrogate Pairs correctly
function transformText(text, targetAlphabet) {
    // Convert target string to array to handle surrogate pairs (emojis/symbols) correctly
    const targetChars = Array.from(targetAlphabet);
    
    return text.split('').map(char => {
        const index = standardAlphabet.indexOf(char);
        if (index !== -1 && targetChars[index]) {
            return targetChars[index];
        }
        return char;
    }).join('');
}

function createCard(fontName, text) {
    const card = document.createElement('div');
    card.className = 'font-card';
    
    // Add accessibility
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('title', 'Click to copy');

    card.innerHTML = `
        <div class="font-label">${fontName}</div>
        <div class="font-preview">${text}</div>
    `;

    // Copy Logic
    card.addEventListener('click', () => copyToClipboard(text));
    
    outputGrid.appendChild(card);
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
