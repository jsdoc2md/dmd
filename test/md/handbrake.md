<a name="module_handbrake-js"></a>
##handbrake-js
Handbrake for node.js.

**Example**  
```js
var hbjs = require("handbrake-js");
```

* [handbrake-js](#module_handbrake-js)
  * _static_
    * [.spawn(options)](#module_handbrake-js.spawn) ⇒ `module:handbrake-js~Handbrake`
    * [.exec(options, [onComplete])](#module_handbrake-js.exec)
    * [.cliOptions](#module_handbrake-js.cliOptions) → `array`
  * _inner_
    * [class: ~Handbrake](#module_handbrake-js..Handbrake)
      * _instance_
        * [.output](#module_handbrake-js..Handbrake#output) → `string`
        * [.options](#module_handbrake-js..Handbrake#options) → `object`
        * ["start"](#module_handbrake-js..Handbrake#event_start)
        * ["begin"](#module_handbrake-js..Handbrake#event_begin)
        * ["progress" (progress)](#module_handbrake-js..Handbrake#event_progress)
        * ["output"](#module_handbrake-js..Handbrake#event_output)
        * ["error"](#module_handbrake-js..Handbrake#event_error)
        * ["end" (one, two)](#module_handbrake-js..Handbrake#event_end)
        * ["complete"](#module_handbrake-js..Handbrake#event_complete)
      * _events_
        * ["start"](#module_handbrake-js..Handbrake#event_start)
        * ["begin"](#module_handbrake-js..Handbrake#event_begin)
        * ["progress" (progress)](#module_handbrake-js..Handbrake#event_progress)
        * ["output"](#module_handbrake-js..Handbrake#event_output)
        * ["error"](#module_handbrake-js..Handbrake#event_error)
        * ["end" (one, two)](#module_handbrake-js..Handbrake#event_end)
        * ["complete"](#module_handbrake-js..Handbrake#event_complete)

<a name="module_handbrake-js.cliOptions"></a>
###hbjs.cliOptions → `array`
[Command-line-args](https://github.com/75lb/command-line-args) option definitions, useful when building a CLI.

<a name="module_handbrake-js.spawn"></a>
###hbjs.spawn(options) ⇒ `module:handbrake-js~Handbrake`
Spawns a HandbrakeCLI process with the supplied [options](https://trac.handbrake.fr/wiki/CLIGuide#options), returning an instance of `Handbrake` on which you can listen for events.

| Param | Type | Description |
| ----- | ---- | ----------- |
| options | `Object` \| `Array` | [Options](https://trac.handbrake.fr/wiki/CLIGuide#options) to pass directly to HandbrakeCLI |

**Example**  
```js
var hbjs = require("handbrake-js");

hbjs.spawn(options)
    .on("error", console.error)
    .on("output", console.log);
```
<a name="module_handbrake-js.exec"></a>
###hbjs.exec(options, [onComplete])
Runs HandbrakeCLI with the supplied [options](https://trac.handbrake.fr/wiki/CLIGuide#options) calling the supplied callback on completion. The exec method is best suited for short duration tasks where you can wait until completion for the output.

| Param | Type | Description |
| ----- | ---- | ----------- |
| options | `Object` | [Options](https://trac.handbrake.fr/wiki/CLIGuide#options) to pass directly to HandbrakeCLI |
| \[onComplete\] | `function` | If passed, `onComplete(err, stdout, stderr)` will be called on completion, `stdout` and `stderr` being strings containing the HandbrakeCLI output. |

**Example**  
```js
var hbjs = require("handbrake-js");

hbjs.exec({ preset-list: true }, function(err, stdout, stderr){
    if (err) throw err;
    console.log(stdout);
});
```
<a name="module_handbrake-js..Handbrake"></a>
###class: hbjs~Handbrake
A thin wrapper on the handbrakeCLI child_process handle. An instance of this class is returned by `hbjs.spawn()`.

**Extends**: `EventEmitter`  
**Scope**: inner class of [handbrake-js](#module_handbrake-js)  
**Emits**: event:start, module:handbrake-js~Handbrake#event:progress, module:handbrake-js~Handbrake#event:begin, module:handbrake-js~Handbrake#event:end, event:complete

  * [class: ~Handbrake](#module_handbrake-js..Handbrake)
    * _instance_
      * [.output](#module_handbrake-js..Handbrake#output) → `string`
      * [.options](#module_handbrake-js..Handbrake#options) → `object`
      * ["start"](#module_handbrake-js..Handbrake#event_start)
      * ["begin"](#module_handbrake-js..Handbrake#event_begin)
      * ["progress" (progress)](#module_handbrake-js..Handbrake#event_progress)
      * ["output"](#module_handbrake-js..Handbrake#event_output)
      * ["error"](#module_handbrake-js..Handbrake#event_error)
      * ["end" (one, two)](#module_handbrake-js..Handbrake#event_end)
      * ["complete"](#module_handbrake-js..Handbrake#event_complete)
    * _events_
      * ["start"](#module_handbrake-js..Handbrake#event_start)
      * ["begin"](#module_handbrake-js..Handbrake#event_begin)
      * ["progress" (progress)](#module_handbrake-js..Handbrake#event_progress)
      * ["output"](#module_handbrake-js..Handbrake#event_output)
      * ["error"](#module_handbrake-js..Handbrake#event_error)
      * ["end" (one, two)](#module_handbrake-js..Handbrake#event_end)
      * ["complete"](#module_handbrake-js..Handbrake#event_complete)

<a name="module_handbrake-js..Handbrake#output"></a>
####handbrake.output → `string`
A `String` containing all handbrakeCLI output

<a name="module_handbrake-js..Handbrake#options"></a>
####handbrake.options → `object`
the options HandbrakeCLI was spawned with

<a name="module_handbrake-js..Handbrake#event_start"></a>
####event: "start"
Fired as HandbrakeCLI is launched. Nothing has happened yet.

<a name="module_handbrake-js..Handbrake#event_begin"></a>
####event: "begin"
Fired when encoding begins. If you're expecting an encode and this never fired, something went wrong.

<a name="module_handbrake-js..Handbrake#event_progress"></a>
####event: "progress" (progress)
Fired at regular intervals passing a `progress` object.

| Param | Type | Description |
| ----- | ---- | ----------- |
| progress | `object` | details of encode progress |
| progress.taskNumber | `number` | current task index |
| progress.taskCount | `number` | total tasks in the queue |
| progress.percentComplete | `number` |  |
| progress.fps | `number` | Frames per second |
| progress.avgFps | `number` | Average frames per second |
| progress.eta | `string` | Estimated time until completion |
| progress.task | `string` | Task description, either "Encoding" or "Muxing" |

<a name="module_handbrake-js..Handbrake#event_output"></a>
####event: "output"
An aggregate of `stdout` and `stderr` output from the underlying HandbrakeCLI process.

<a name="module_handbrake-js..Handbrake#event_error"></a>
####event: "error"
All operational exceptions are delivered via this event. Passes an `Error` instance.

**Properties**

- name `string` - One of `HandbrakeCLINotFound`, `HandbrakeCLIError`, `NoTitleFound`, `HandbrakeCLICrash` or `ValidationError`  
- message `string`  
- errno `string`  

<a name="module_handbrake-js..Handbrake#event_end"></a>
####event: "end" (one, two)
Fired on successful completion of an encoding task. Always follows a `begin` event, with some `progress` in between.

| Param | Type | Description |
| ----- | ---- | ----------- |
| one | `string` | first param |
| two | `string` | second param |

<a name="module_handbrake-js..Handbrake#event_complete"></a>
####event: "complete"
Fired when HandbrakeCLI exited cleanly. This does not necessarily mean your encode completed as planned..

