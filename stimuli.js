////////////////
// STIMULI
///////////////

// Item types
const NON_WORD = "NON_WORD";
const REAL_WORD = "REAL_WORD";
const PRACTICE = "PRACTICE";

// name for lists, in this case one list, one item in the list
const LISTS = ["my_one_and_only_list"];

// In case of more complex design, the above could be, for example:

// const LISTS = [
//     "my_first_list",
//     "my_second_list"
// ];

const PRACTICE_ITEMS = [
    { id: 1, item_type: PRACTICE, word: "palve", filename: "./sounds/palve.wav", correct: 0 },
    { id: 2, item_type: PRACTICE, word: "hot", filename: "./sounds/hot.wav", correct: 1 }
];

const LIST_1 = [
    { id: 1, item_type: NON_WORD, word: "slirque", filename: "./sounds/slirque.wav", correct: 0 },
    { id: 2, item_type: NON_WORD, word: "crawse", filename: "./sounds/crawse.wav", correct: 0 },
    { id: 3, item_type: NON_WORD, word: "thwurp", filename: "./sounds/thwurp.wav", correct: 0 },
    { id: 4, item_type: NON_WORD, word: "clem", filename: "./sounds/clem.wav", correct: 0 },
    { id: 5, item_type: REAL_WORD, word: "white", filename: "./sounds/white.wav", correct: 1 },
    { id: 6, item_type: REAL_WORD, word: "travel", filename: "./sounds/travel.wav", correct: 1 },
    { id: 7, item_type: REAL_WORD, word: "letter", filename: "./sounds/letter.wav", correct: 1 },
    { id: 8, item_type: REAL_WORD, word: "clown", filename: "./sounds/clown.wav", correct: 1  }
];

const TEST_ITEMS = [
    {list_name: LISTS[0], table: LIST_1}
    ];
   
// If there were two lists to choose from:

// const TEST_ITEMS = [
//     {list_name: LISTS[0], table: LIST_1},
//     {list_name: LISTS[1], table: LIST_2}
// ];

/**
 * Get the list of practice items
 *
 * Returns an object with a list and a table, the list will always indicate
 * "practice" since it are the practice items
 *
 * @returns {object} object with list and table fields
 */
function getPracticeItems() {
    return {list_name : "practice", table : PRACTICE_ITEMS};
}

/**
 * This function will pick a random list from the TEST_ITEMS array.
 * @returns {object} object with one or more "lists" and table fields
 */
function pickRandomList() {
    let range = function (n) {
        let empty_array = [];
        let i;
        for (i = 0; i < n; i++) {
            empty_array.push(i);
        }
        return empty_array;
    }
    let num_lists = TEST_ITEMS.length;
    var shuffled_range = jsPsych.randomization.repeat(range(num_lists), 1);
    var retlist = TEST_ITEMS[shuffled_range[0]];
    return retlist;
}
