<a href="#root"></a>
 root    

<a href="#module:handbrake-js"></a>
# handbrake-js
Handbrake for node.js.


<a href="#module:handbrake-js.spawn"></a>
## hbjs.spawn ⇒ module:handbrake-js~Handbrake  
Spawns a HandbrakeCLI process with the supplied [options](https://trac.handbrake.fr/wiki/CLIGuide#options), returning an instance of `Handbrake` on which you can listen for events.

**Params**

- options Object - [Options](https://trac.handbrake.fr/wiki/CLIGuide#options) to pass directly to HandbrakeCLI

<a href="#module:handbrake-js.exec"></a>
## hbjs.exec    
Runs HandbrakeCLI with the supplied [options](https://trac.handbrake.fr/wiki/CLIGuide#options) calling the supplied callback on completion. The exec method is best suited for short duration tasks where you can wait until completion for the output.

**Params**

- options Object - [Options](https://trac.handbrake.fr/wiki/CLIGuide#options) to pass directly to HandbrakeCLI
- [onComplete] function - If passed, `onComplete(err, stdout, stderr)` will be called on completion, `stdout` and `stderr` being strings containing the HandbrakeCLI output.

<a href="#module:handbrake-js~Handbrake"></a>
## hbjs~Handbrake ⇐ external:EventEmitter  
A handle on the HandbrakeCLI process. Emits events you can monitor to track progress. An instance of this class is returned by {@link module:handbrake-js.spawn}.


<a href="#module:handbrake-js~Handbrake#output"></a>
### handbrake.output :YEAH? string  
A `string` containing all handbrakeCLI output


<a href="#module:handbrake-js~Handbrake#options"></a>
### handbrake.options :YEAH? object  
a copy of the options passed to {@link module:handbrake-js.spawn}


<a href="#module:handbrake-js~Handbrake#eError"></a>
### handbrake.eError : enum  
All operational errors are emitted via the {@link module:handbrake-js~Handbrake#event:error} event.


<a href="#module:handbrake-js~Handbrake#event:start"></a>
### "start"
Fired as HandbrakeCLI is launched. Nothing has happened yet.


<a href="#module:handbrake-js~Handbrake#event:begin"></a>
### "begin"
Fired when encoding begins. If you're expecting an encode and this never fired, something went wrong.


<a href="#module:handbrake-js~Handbrake#event:progress"></a>
### "progress"
Fired at regular intervals passing a `progress` object.

**Params**

- progress object - details of encode progress
    - .taskNumber number - current task index
    - .taskCount number - total tasks in the queue
    - .percentComplete number - percent complete
    - .fps number - Frames per second
    - .avgFps number - Average frames per second
    - .eta string - Estimated time until completion
    - .task string - Task description, either "Encoding" or "Muxing"

<a href="#module:handbrake-js~Handbrake#event:output"></a>
### "output"
**Params**

- output string - An aggregate of `stdout` and `stderr` output from the underlying HandbrakeCLI process.

<a href="#module:handbrake-js~Handbrake#event:error"></a>
### "error"
**Params**

- error Error - All operational exceptions are delivered via this event.
    - .name module:handbrake-js~Handbrake#eError - The unique error identifier
    - .message string - Error description
    - .errno string - The HandbrakeCLI return code

<a href="#module:handbrake-js~Handbrake#event:end"></a>
### "end"
Fired on successful completion of an encoding task. Always follows a {@link module:handbrake-js~Handbrake#event:begin} event, with some {@link module:handbrake-js~Handbrake#event:progress} in between.


<a href="#module:handbrake-js~Handbrake#event:complete"></a>
### "complete"
Fired when HandbrakeCLI exited cleanly. This does not necessarily mean your encode completed as planned..


<a href="#external:EventEmitter"></a>
# EventEmitter    

