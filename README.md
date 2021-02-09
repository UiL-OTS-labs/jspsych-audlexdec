# jspsych-audlexdec
Auditory [Lexical Decision](https://en.wikipedia.org/wiki/Lexical_decision_task) Experiment (template)

# Generic documentation
Please read the [generic documentation](https://github.com/UiL-OTS-labs/jspsych-uil-template-docs) for some context and scope.

# Task description
The most basic auditory lexical decision task: the participant sees a fixation cross and hears a real word or a non existing word (non-word). The task is to respond as quickly as possible and indicate wether the heard word is a real word or not.

Crucial trial phases (sub trial phases):
- Fixation cross
- Auditory item (Decision phase)

### Reference:
        Rubenstein, H., Garfield, L., & Millikan, J.A. (1970). 
        Homographic entries in the internal lexicon. 
        Journal of Verbal Learning and Verbal Behavior, 9, 487≠494.

# Output
The data of _all_ (sub) _trial phases_ are logged in the data, but the output data can be filtered after data collection in many ways.
Please read the [general primer on jsPsych's data](https://github.com/UiL-OTS-labs/jspsych-output) if you are new to jsPsych data output.

Essential output for the _'true experimental'_ purpose in this template are:

- Reaction Time (RT) of the keyboard response in the decision phase
- Correctness of the keyboard response in the decision phase

The crucial trial/sub-trial phase (decision phase) output may look similar to this:

```json
	{
		"rt": 1335,
		"stimulus": "./sounds/hot.wav",
		"key_press": 65,
		"condition": "REAL_WORD",
		"word": "hot",
		"filename": "./sounds/hot.wav",
		"id": 2,
		"trial_phase": "present_word",
		"useful_data_flag": true,
		"correct_response": 1,
		"trial_type": "audio-keyboard-response",
		"trial_index": 15,
		"time_elapsed": 36569,
		"internal_node_id": "0.0-8.0-1.1",
		"subject": "hygb1h3q",
		"list": "my_one_and_only_list",
		"correct": true,
		"key_chosen_ascii": 65,
		"key_chosen_char": "A",
		"yes_key": "A",
		"no_key": "L"
	},
	//(...)
```
Variable name (key) | Description          | Unit  | Type           | Comments                             | jsPsych default | Template default | Plugin name
--------------------|----------------------|-------|----------------|--------------------------------------|-----------------|------------------|------------
"rt"                | Reaction Time        | ms.   | float          | Reaction time in milliseconds        | yes             |                  |            
stimulus"           | stimulus (audio file)|       | string/html    | For instance: "./sounds/hot.wav"     | yes             |                  |
"key_press"         | Keyboard response    |       | string/object? | https://en.wikipedia.org/wiki/ASCII  | yes             |                  | html-keyboard-response
"condition"         | Condition            |       | string         | See ```stimuli.js```                 | no              | yes              |
"word"              | Decision phase item  |       | string/html    | String (represents "audio")          | no              | yes              | 
"id"                | ID/code              |       |                | (See `stimuli.js` and `index.html`)  |                 | yes              |                  |
"trial_phase"       | Trial phase          |       |                | (...)                                | no              | yes              | 
"useful_data_flag"  | Filter flag          |       | boolean        |                                      | no              | yes              | 
_"expected_answer"_ | TODO change!         |       | todo           | Now (still) named "correct_response" | no              | no/yes/willbe.   | 
"trial_type"        | What plugin was used |       |                |                                      | yes             |                  | "html-keyboard-response"
"trial_index"       | jsPsych index        |       |                |                            	   | yes             |                  |	
"time_elapsed".     | jsPsych time object  | ms    | int (/float?)  | For instance: 45062                  | yes             |                  |
"internal_node_id.  | jsPsych node object  |       |                | For instance:"0.0-11.0-1.4"          | yes             |                  |
"subject"           | Subject ID           |       |                | For instance: "8oo722dq"             |                 | yes              |
"list"              | Stimulus list name.  |       | string         | For instance: "my_one_and_only_list" | no              | yes              | 
"correct"           | Scoring result       |       | Boolean        | 'true or false' score of response    |                 | yes              |   
"key_chosen_ascii"  |                      |       |                | For instance: 65                     | no              | yes              |
"key_chosen_char"   |                      |       |                | For instance: "A"                    | no              | yes              |
"yes_key"           |                      |       |                | For instance:  "A"                   | no              | yes              |
"no_key"            |                      |       |                | For instance: "L"                    | no              | yes              |



# Getting started 
People _affiliated with our lab_ can use the information [from our lab webiste](https://uilots-labs.wp.hum.uu.nl/experiments/overview/) and expand the "Online experiments using jsPsych" section for details. Please follow [this how-to](https://uilots-labs.wp.hum.uu.nl/how-to/online-experimenting/).

### Make your experiment ready for use with the data server

### Update access key
In the file `globals.js` is a variable:
```javascript
const ACCESS_KEY = '00000000-0000-0000-0000-000000000000';
```
Before uploading your experimentto the UiL-OTS data server, you will need to change this to the access_key that you obtained when your experiment was approved. For elaborate info see `globals.js`.


### Adapting stimuli
- Open the file `stimuli.js` in your plain text editor.
- There is a list, called LIST_1:

```javacript
const LIST_1 = [ // stimuli and timeline variables

```
-  This list can be adapted to your own needs, i.e, you can replace values, make the list longer (don't forget to increment the 'id' values for new items!).
- If you need to implement a more complex design, you should read the `stimuli.js` file (and its comment sections) a little better. 
- For an example of a Latin square design, please have a look [here](https://github.com/UiL-OTS-labs/jspsych-spr-mw).





  

