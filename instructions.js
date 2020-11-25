/*
 * In this file the instructions are defined that are used throughout
 * the experiment.
 * Make sure when editing this file, the file is stored with
 * utf8 text encoding.
 */

/*
 * HTML string that shows the instruction before the practice
 * The goal of this instruction is that the participant knows 
 * what to do in the task.
 * The strings are concatenated together by adding (+) them
 * together.
 */
const PRE_PRACTICE_INSTRUCTION =
    "<strong>Dear participant,</string><BR><BR>"        +
    "Thank you for participating in this experiment."   +
    "<BR><BR>"                                          +
    "You are now going to hear words, one "             +
    "after the other. Your task is to indicate for "    +
    "each word as quickly as possible whether you "     + 
    "think the word is <i>a real word or not</i>. "     + 
    "Try to make no mistakes.<BR><BR>"                  +
    "To respond, hit the <kbd>%correct_key%</kbd> "     +
    "key for <i>Yes</i> and the "                       +
    "<kbd>%incorrect_key%</kbd> key for <i>No</i>"      +
    "<BR><BR>First, you can practice.<BR><BR>"          +
    "<i>Click OK to start practicing</i>"
    ;


const PRE_TEST_INSTRUCTION = 
    "End of the practice part.<BR><BR>"                 +
    "If you have any questions at this moment, please " +
    " ask yourself now.<BR><BR>"                        +
    "If not, click OK to continue with the real task."
    ;
