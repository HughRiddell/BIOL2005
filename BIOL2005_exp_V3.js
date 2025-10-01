/************************ 
 * Biol2005_Exp_V3 *
 ************************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2024.2.4.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'BIOL2005_exp_V3';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'contrast': '1',
};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0,0,0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(BeginRoutineBegin());
flowScheduler.add(BeginRoutineEachFrame());
flowScheduler.add(BeginRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);


flowScheduler.add(ThanksRoutineBegin());
flowScheduler.add(ThanksRoutineEachFrame());
flowScheduler.add(ThanksRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'condition_BIOL2005_alt.csv', 'path': 'condition_BIOL2005_alt.csv'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2024.2.4';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var BeginClock;
var text_3;
var key_resp_2;
var trialClock;
var gabor;
var resp;
var text;
var contrast;
var orientation_log;
var response_log;
var correct_log;
var ThanksClock;
var key_resp;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "Begin"
  BeginClock = new util.Clock();
  text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_3',
    text: 'Press the LEFT key if the grating is oriented to the left and the RIGHT key if the grating is oriented to the right\n\nPress space to begin',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  gabor = new visual.GratingStim({
    win : psychoJS.window,
    name : 'gabor', units : undefined, 
    tex : undefined, mask : 'gauss',
    ori : 1.0, 
    pos : [0, 0],
    draggable: false,
    anchor : 'center',
    sf : 2.0, phase : 0.0,
    size : [0.2, 0.2],
    color : new util.Color([1,1,1]), opacity : undefined,
    contrast : 1.0, blendmode : 'avg',
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  // Run 'Begin Experiment' code from code
  contrast = Number.parseFloat(expInfo['contrast']);
  
  orientation_log = [];
  response_log = [];
  correct_log = [];
  
  // Initialize components for Routine "Thanks"
  ThanksClock = new util.Clock();
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var BeginMaxDurationReached;
var _key_resp_2_allKeys;
var BeginMaxDuration;
var BeginComponents;
function BeginRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Begin' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    BeginClock.reset();
    routineTimer.reset();
    BeginMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_2.keys = undefined;
    key_resp_2.rt = undefined;
    _key_resp_2_allKeys = [];
    psychoJS.experiment.addData('Begin.started', globalClock.getTime());
    BeginMaxDuration = null
    // keep track of which components have finished
    BeginComponents = [];
    BeginComponents.push(text_3);
    BeginComponents.push(key_resp_2);
    
    for (const thisComponent of BeginComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function BeginRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Begin' ---
    // get current time
    t = BeginClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_3* updates
    if (t >= 0.0 && text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_3.tStart = t;  // (not accounting for frame time here)
      text_3.frameNStart = frameN;  // exact frame index
      
      text_3.setAutoDraw(true);
    }
    
    
    // *key_resp_2* updates
    if (t >= 0.0 && key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_2.tStart = t;  // (not accounting for frame time here)
      key_resp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.clearEvents(); });
    }
    
    if (key_resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_2.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_2_allKeys = _key_resp_2_allKeys.concat(theseKeys);
      if (_key_resp_2_allKeys.length > 0) {
        key_resp_2.keys = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_2.rt = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].rt;
        key_resp_2.duration = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of BeginComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function BeginRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Begin' ---
    for (const thisComponent of BeginComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Begin.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_2.corr, level);
    }
    psychoJS.experiment.addData('key_resp_2.keys', key_resp_2.keys);
    if (typeof key_resp_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_2.rt', key_resp_2.rt);
        psychoJS.experiment.addData('key_resp_2.duration', key_resp_2.duration);
        routineTimer.reset();
        }
    
    key_resp_2.stop();
    // the Routine "Begin" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 10, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'condition_BIOL2005_alt.csv',
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial of trials) {
      snapshot = trials.getSnapshot();
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(trialRoutineBegin(snapshot));
      trialsLoopScheduler.add(trialRoutineEachFrame());
      trialsLoopScheduler.add(trialRoutineEnd(snapshot));
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trialMaxDurationReached;
var _resp_allKeys;
var trialMaxDuration;
var trialComponents;
function trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    trialClock.reset();
    routineTimer.reset();
    trialMaxDurationReached = false;
    // update component parameters for each repeat
    gabor.setContrast(contrast);
    gabor.setOri(orientation);
    resp.keys = undefined;
    resp.rt = undefined;
    _resp_allKeys = [];
    psychoJS.experiment.addData('trial.started', globalClock.getTime());
    trialMaxDuration = null
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(gabor);
    trialComponents.push(resp);
    trialComponents.push(text);
    
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function trialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial' ---
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *gabor* updates
    if (t >= 0.5 && gabor.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      gabor.tStart = t;  // (not accounting for frame time here)
      gabor.frameNStart = frameN;  // exact frame index
      
      gabor.setAutoDraw(true);
    }
    
    frameRemains = 0.5 + 0.1 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (gabor.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      gabor.setAutoDraw(false);
    }
    
    
    // *resp* updates
    if (t >= 0.5 && resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      resp.tStart = t;  // (not accounting for frame time here)
      resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { resp.clearEvents(); });
    }
    
    if (resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = resp.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _resp_allKeys = _resp_allKeys.concat(theseKeys);
      if (_resp_allKeys.length > 0) {
        resp.keys = _resp_allKeys[_resp_allKeys.length - 1].name;  // just the last key pressed
        resp.rt = _resp_allKeys[_resp_allKeys.length - 1].rt;
        resp.duration = _resp_allKeys[_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trialRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial' ---
    for (const thisComponent of trialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trial.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(resp.corr, level);
    }
    psychoJS.experiment.addData('resp.keys', resp.keys);
    if (typeof resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('resp.rt', resp.rt);
        psychoJS.experiment.addData('resp.duration', resp.duration);
        routineTimer.reset();
        }
    
    resp.stop();
    // Run 'End Routine' code from code
    // Determine correct answer from orientation
    let correctAns = (orientation < 0) ? 'left' : 'right';
    
    // Extract response (handle both string and array cases)
    let response = Array.isArray(resp.keys) ? resp.keys[0] : resp.keys;
    
    // Compare and score
    let correct = (response === correctAns) ? 1 : 0;
    
    orientation_log.push(orientation);
    response_log.push(resp.keys);
    correct_log.push(correct);
    // the Routine "trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var ThanksMaxDurationReached;
var _key_resp_allKeys;
var ThanksMaxDuration;
var ThanksComponents;
function ThanksRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Thanks' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    ThanksClock.reset();
    routineTimer.reset();
    ThanksMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    // Build CSV content
    let csvContent = "orientation,response,correct\n";
    for (let i = 0; i < orientation_log.length; i++) {
        csvContent += `${orientation_log[i]},${response_log[i]},${correct_log[i]}\n`;
    }
    
    // Filename with participant ID fallback
    let filename = (typeof expInfo !== 'undefined' && expInfo['participant']) ? `${expInfo['participant']}_clean_data.csv` : "clean_data.csv";
    
    // Create Blob and trigger download
    let blob = new Blob([csvContent], { type: 'text/csv' });
    let url = window.URL.createObjectURL(blob);
    
    let a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    
    // Cleanup
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
    
    // Plotting
    // Setup canvas (centered)
    let canvas = document.createElement("canvas");
    canvas.id = "psychometricCanvas";
    canvas.width = 600;
    canvas.height = 400;
    canvas.style.position = "absolute";
    canvas.style.top = "50%";
    canvas.style.left = "50%";
    canvas.style.transform = "translate(-50%, -50%)";
    canvas.style.zIndex = "1000";
    document.body.appendChild(canvas);
    let ctx = canvas.getContext("2d");
    
    // Group responses by orientation
    let dataByOrientation = {};
    for (let i = 0; i < orientation_log.length; i++) {
        let o = orientation_log[i];
        let r = response_log[i];
        if (!(o in dataByOrientation)) {
            dataByOrientation[o] = { right: 0, total: 0 };
        }
        if (r === 'right') {
            dataByOrientation[o].right += 1;
        }
        dataByOrientation[o].total += 1;
    }
    
    let orientations = Object.keys(dataByOrientation).map(Number).sort((a, b) => a - b);
    let proportions = orientations.map(o => dataByOrientation[o].right / dataByOrientation[o].total);
    
    function logistic(x, mu, sigma) {
        return 1 / (1 + Math.exp(-(x - mu) / sigma));
    }
    
    // Compute sum of squared errors
    function sse(mu, sigma, xs, ys) {
        let error = 0;
        for (let i = 0; i < xs.length; i++) {
            let pred = logistic(xs[i], mu, sigma);
            error += Math.pow(ys[i] - pred, 2);
        }
        return error;
    }
    
    // Grid search for best-fit parameters
    let bestMu = 0;
    let bestSigma = 1;
    let bestError = Infinity;
    
    let muMin = -1;
    let muMax = 1;
    let sigmaMin = 0.01;
    let sigmaMax = 2;
    
    let muSteps = 50;
    let sigmaSteps = 50;
    
    for (let i = 0; i <= muSteps; i++) {
        let mu = muMin + i * (muMax - muMin) / muSteps;
        for (let j = 0; j <= sigmaSteps; j++) {
            let sigma = sigmaMin + j * (sigmaMax - sigmaMin) / sigmaSteps;
            let error = sse(mu, sigma, orientations, proportions);
            if (error < bestError) {
                bestError = error;
                bestMu = mu;
                bestSigma = sigma;
            }
        }
    }
    
    let mu_est = bestMu;
    let sigma_est = bestSigma;
    
    // Invert the logistic function to get thresholds
    function invLogistic(p, mu, sigma) {
        return mu - sigma * Math.log((1 / p) - 1);
    }
    
    let pse = invLogistic(0.5, mu_est, sigma_est);
    let thresh = invLogistic(0.75, mu_est, sigma_est);
    
    // Canvas plot area
    let minX = Math.min(...orientations);
    let maxX = Math.max(...orientations);
    let marginX = 50;
    let marginY = 40;
    let width = canvas.width - 2 * marginX;
    let height = canvas.height - 2 * marginY;
    
    // Draw axes
    ctx.strokeStyle = "#000";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(marginX, marginY);
    ctx.lineTo(marginX, canvas.height - marginY);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(marginX, canvas.height - marginY);
    ctx.lineTo(canvas.width - marginX, canvas.height - marginY);
    ctx.stroke();
    
    // Axis labels
    ctx.font = "16px sans-serif";
    ctx.fillText("Orientation (°)", canvas.width / 2 - 40, canvas.height - 5);
    ctx.save();
    ctx.translate(10, canvas.height / 2 + 40);
    ctx.rotate(-Math.PI / 2);
    ctx.fillText('Proportion "Right"', 0, 0);
    ctx.restore();
    
    // Plot raw data points
    ctx.fillStyle = "blue";
    for (let i = 0; i < orientations.length; i++) {
        let x = orientations[i];
        let y = proportions[i];
        let px = marginX + ((x - minX) / (maxX - minX)) * width;
        let py = canvas.height - marginY - y * height;
        ctx.beginPath();
        ctx.arc(px, py, 4, 0, 2 * Math.PI);
        ctx.fill();
    }
    
    // Plot fitted logistic curve
    ctx.strokeStyle = "red";
    ctx.lineWidth = 2;
    ctx.beginPath();
    let steps = 100;
    for (let i = 0; i <= steps; i++) {
        let x = minX + (i / steps) * (maxX - minX);
        let y = logistic(x, mu_est, sigma_est);
        let px = marginX + ((x - minX) / (maxX - minX)) * width;
        let py = canvas.height - marginY - y * height;
        if (i === 0) {
            ctx.moveTo(px, py);
        } else {
            ctx.lineTo(px, py);
        }
    }
    ctx.stroke();
    
    // Draw PSE (50%) vertical line
    let pse_px = marginX + ((pse - minX) / (maxX - minX)) * width;
    ctx.strokeStyle = "green";
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.moveTo(pse_px, marginY);
    ctx.lineTo(pse_px, canvas.height - marginY);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.fillStyle = "green";
    ctx.fillText("PSE (50%)", pse_px + 5, marginY + 15);
    
    // Draw Threshold (75%) vertical line
    let thresh_px = marginX + ((thresh - minX) / (maxX - minX)) * width;
    ctx.strokeStyle = "orange";
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.moveTo(thresh_px, marginY);
    ctx.lineTo(thresh_px, canvas.height - marginY);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.fillStyle = "orange";
    ctx.fillText("Threshold (75%)", thresh_px + 5, marginY + 30);
    
    // Draw x-axis ticks and labels from -1 to 1 in 0.25 steps
    ctx.fillStyle = "#000";
    ctx.font = "12px sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "top";
    for (let x = -1.0; x <= 1.0001; x += 0.25) {
        let px = marginX + ((x - minX) / (maxX - minX)) * width;
        // Tick
        ctx.beginPath();
        ctx.moveTo(px, canvas.height - marginY);
        ctx.lineTo(px, canvas.height - marginY + 5);
        ctx.stroke();
        // Label
        ctx.fillText(x.toFixed(2), px, canvas.height - marginY + 8);
    }
    
    // Draw y-axis ticks and labels from 0 to 1 in 0.25 steps
    ctx.textAlign = "right";
    ctx.textBaseline = "middle";
    for (let y = 0.0; y <= 1.0001; y += 0.25) {
        let py = canvas.height - marginY - y * height;
        // Tick
        ctx.beginPath();
        ctx.moveTo(marginX - 5, py);
        ctx.lineTo(marginX, py);
        ctx.stroke();
        // Label
        ctx.fillText(y.toFixed(2), marginX - 8, py);
    }
    
    psychoJS.experiment.addData('Thanks.started', globalClock.getTime());
    ThanksMaxDuration = null
    // keep track of which components have finished
    ThanksComponents = [];
    ThanksComponents.push(key_resp);
    
    for (const thisComponent of ThanksComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function ThanksRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Thanks' ---
    // get current time
    t = ThanksClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *key_resp* updates
    if (t >= 1 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }
    
    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        key_resp.duration = _key_resp_allKeys[_key_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of ThanksComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ThanksRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Thanks' ---
    for (const thisComponent of ThanksComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Thanks.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp.corr, level);
    }
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        psychoJS.experiment.addData('key_resp.duration', key_resp.duration);
        routineTimer.reset();
        }
    
    key_resp.stop();
    let canvasToRemove = document.getElementById("psychometricCanvas");
    if (canvasToRemove) {
        document.body.removeChild(canvasToRemove);
    }
    // the Routine "Thanks" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
