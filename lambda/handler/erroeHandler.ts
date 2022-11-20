import {HandlerInput, ErrorHandler} from "ask-sdk-core";
import {Response} from "ask-sdk-model";

const ErrorHandler: ErrorHandler = {
    canHandle(handlerInput: HandlerInput, error: Error): Promise<boolean> | boolean {
        return true
    },
    handle(handlerInput: HandlerInput, error: Error): Promise<Response> | Response {
        const speakOutput = 'Sorry, I had trouble doing what you asked. Please try again.';
        console.log(`~~~~ Error handled: ${JSON.stringify(error)}`);

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
}

export default ErrorHandler;