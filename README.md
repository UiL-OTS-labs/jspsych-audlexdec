# jspsych-audlexdec
Auditory [Lexical Decision](https://en.wikipedia.org/wiki/Lexical_decision_task) Experiment (template)

# Generic documentation
Please read the [generic documentation](https://github.com/UiL-OTS-labs/jspsych-uil-template-docs) for some context and scope.

# Task description

### Short description
The most basic auditory lexical decision task: the participant sees a fixation cross and hears a real word or a non existing word (non-word). The task is to respond as quickly as possible and indicate wether the heard word is a real word or not.

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

# Getting started (the easy way, working internet connection required)
For now, the easiest way to test these templates, is:

1. Download this repository by clicking the green code button above and Download zip.
2. Unzip at a location of your choosing.
3. Inside the folder is a file called index.html, double click it in order to open it
   in a browser.





  

