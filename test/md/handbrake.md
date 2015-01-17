<a name="module_handbrake-js"></a>
##handbrake-js
Handbrake for node.js.

**Example**  
```js
var hbjs = require("handbrake-js");
```

* [handbrake-js](#module_handbrake-js)
  * [.spawn(options)](#module_handbrake-js.spawn) ⇒ <code>[Handbrake](#module_handbrake-js..Handbrake)</code>
  * [.exec(options, [onComplete])](#module_handbrake-js.exec)
  * [class: ~Handbrake](#module_handbrake-js..Handbrake) ⇐ <code>[EventEmitter](http://nodejs.org/api/events.html)</code>
    * _instance_
      * [.output](#module_handbrake-js..Handbrake#output) → <code>string</code>
      * [.options](#module_handbrake-js..Handbrake#options) → <code>object</code>
      * [enum: .eError](#module_handbrake-js..Handbrake#eError)
    * _events_
      * ["start"](#module_handbrake-js..Handbrake#event_start)
      * ["begin"](#module_handbrake-js..Handbrake#event_begin)
      * ["progress" (progress)](#module_handbrake-js..Handbrake#event_progress)
      * ["output" (output)](#module_handbrake-js..Handbrake#event_output)
      * ["error" (error)](#module_handbrake-js..Handbrake#event_error)
      * ["end"](#module_handbrake-js..Handbrake#event_end)
      * ["complete"](#module_handbrake-js..Handbrake#event_complete)

<a name="module_handbrake-js.spawn"></a>
###hbjs.spawn(options) ⇒ <code>[Handbrake](#module_handbrake-js..Handbrake)</code>
Spawns a HandbrakeCLI process with the supplied [options](https://trac.handbrake.fr/wiki/CLIGuide#options), returning an instance of `Handbrake` on which you can listen for events.

| Param | Type | Description |
| ----- | ---- | ----------- |
| options | <code>Object</code> | [Options](https://trac.handbrake.fr/wiki/CLIGuide#options) to pass directly to HandbrakeCLI |

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
| options | <code>Object</code> | [Options](https://trac.handbrake.fr/wiki/CLIGuide#options) to pass directly to HandbrakeCLI |
| \[onComplete\] | <code>function</code> | If passed, `onComplete(err, stdout, stderr)` will be called on completion, `stdout` and `stderr` being strings containing the HandbrakeCLI output. |

**Example**  
```js
var hbjs = require("handbrake-js");

hbjs.exec({ preset-list: true }, function(err, stdout, stderr){
    if (err) throw err;
    console.log(stdout);
});
```
<a name="module_handbrake-js..Handbrake"></a>
###class: hbjs~Handbrake ⇐ <code>[EventEmitter](http://nodejs.org/api/events.html)</code>
A handle on the HandbrakeCLI process. Emits events you can monitor to track progress. An instance of this class is returned by [spawn](#module_handbrake-js.spawn).

**Extends:** <code>[EventEmitter](http://nodejs.org/api/events.html)</code>  
**Emits**: <code>[start](#module_handbrake-js..Handbrake#event_start)</code>, <code>[begin](#module_handbrake-js..Handbrake#event_begin)</code>, <code>[progress](#module_handbrake-js..Handbrake#event_progress)</code>, <code>[output](#module_handbrake-js..Handbrake#event_output)</code>, <code>[error](#module_handbrake-js..Handbrake#event_error)</code>, <code>[end](#module_handbrake-js..Handbrake#event_end)</code>, <code>[complete](#module_handbrake-js..Handbrake#event_complete)</code>  

* [class: ~Handbrake](#module_handbrake-js..Handbrake) ⇐ <code>[EventEmitter](http://nodejs.org/api/events.html)</code>
  * _instance_
    * [.output](#module_handbrake-js..Handbrake#output) → <code>string</code>
    * [.options](#module_handbrake-js..Handbrake#options) → <code>object</code>
    * [enum: .eError](#module_handbrake-js..Handbrake#eError)
  * _events_
    * ["start"](#module_handbrake-js..Handbrake#event_start)
    * ["begin"](#module_handbrake-js..Handbrake#event_begin)
    * ["progress" (progress)](#module_handbrake-js..Handbrake#event_progress)
    * ["output" (output)](#module_handbrake-js..Handbrake#event_output)
    * ["error" (error)](#module_handbrake-js..Handbrake#event_error)
    * ["end"](#module_handbrake-js..Handbrake#event_end)
    * ["complete"](#module_handbrake-js..Handbrake#event_complete)

<a name="module_handbrake-js..Handbrake#output"></a>
####handbrake.output → <code>string</code>
A `string` containing all handbrakeCLI output

<a name="module_handbrake-js..Handbrake#options"></a>
####handbrake.options → <code>object</code>
a copy of the options passed to [spawn](#module_handbrake-js.spawn)

<a name="module_handbrake-js..Handbrake#eError"></a>
####enum: handbrake.eError
All operational errors are emitted via the [error](#module_handbrake-js..Handbrake#event_error) event.

**Properties**

| Name | Default | Description |
| --- | --- | --- |
| VALIDATION | `ValidationError` | Thrown if you accidentally set identical input and output paths (which would clobber the input file), forget to specifiy an output path and other validation errors |
| INVALID_INPUT | `InvalidInput` | Thrown when the input file specified does not appear to be a video file |
| OTHER | `Other` | Thrown if Handbrake crashes |
| NOT_FOUND | `HandbrakeCLINotFound` | Thrown if the installed HandbrakeCLI binary has gone missing.. |

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
| progress | <code>object</code> | details of encode progress |
| progress.taskNumber | <code>number</code> | current task index |
| progress.taskCount | <code>number</code> | total tasks in the queue |
| progress.percentComplete | <code>number</code> | percent complete |
| progress.fps | <code>number</code> | Frames per second |
| progress.avgFps | <code>number</code> | Average frames per second |
| progress.eta | <code>string</code> | Estimated time until completion |
| progress.task | <code>string</code> | Task description, either "Encoding" or "Muxing" |

<a name="module_handbrake-js..Handbrake#event_output"></a>
####event: "output" (output)
| Param | Type | Description |
| ----- | ---- | ----------- |
| output | <code>string</code> | An aggregate of `stdout` and `stderr` output from the underlying HandbrakeCLI process. |

<a name="module_handbrake-js..Handbrake#event_error"></a>
####event: "error" (error)
| Param | Type | Description |
| ----- | ---- | ----------- |
| error | <code>Error</code> | All operational exceptions are delivered via this event. |
| error.name | <code>[eError](#module_handbrake-js..Handbrake#eError)</code> | The unique error identifier |
| error.message | <code>string</code> | Error description |
| error.errno | <code>string</code> | The HandbrakeCLI return code |

<a name="module_handbrake-js..Handbrake#event_end"></a>
####event: "end"
Fired on successful completion of an encoding task. Always follows a [begin](#module_handbrake-js..Handbrake#event_begin) event, with some [progress](#module_handbrake-js..Handbrake#event_progress) in between.

<a name="module_handbrake-js..Handbrake#event_complete"></a>
####event: "complete"
Fired when HandbrakeCLI exited cleanly. This does not necessarily mean your encode completed as planned..

