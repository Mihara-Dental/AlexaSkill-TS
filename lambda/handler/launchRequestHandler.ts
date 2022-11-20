import {getRequestType, HandlerInput, RequestHandler} from "ask-sdk-core";
import {Response} from "ask-sdk-model";

const LaunchRequestHandler: RequestHandler = {
    canHandle(input: HandlerInput): Promise<boolean> | boolean {
        return getRequestType(input.requestEnvelope) === 'LaunchRequest';
    },
    handle(input: HandlerInput): Promise<Response> | Response {
        const speakOutput = 'Welcome, you can say Hello or Help. Which would you like to try?';

        return input.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

export default LaunchRequestHandler