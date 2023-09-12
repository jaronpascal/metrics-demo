function controller(msg) {
	if (msg == 1)
		console.log("START");
	else if (msg == 1)
    console.log("STOP");
	else
		throw new Error("Message not understood.");
}


const input = 1;

if(input === NaN){
    throw new Error("Message not understood.");
}
controller(input);