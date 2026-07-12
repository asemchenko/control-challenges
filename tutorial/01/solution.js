let mistakeSum = 0;
let lastMistake = 0;
let lastT = 0;

const targetX = 0;

function controlFunction(block) {
    const dT = block.T - lastT;
    lastT = block.T;

    // make PID controller
    const p = targetX - block.x;
    const i = mistakeSum * dT;
    const d = (p - lastMistake) / dT;

    mistakeSum += p;
    lastMistake = p;

    return 30 * p + 0 * i + (7 + 1 * tanh(p)) * d;
}

function tanh(x) {
    return 1 - Math.tanh(x);
}
