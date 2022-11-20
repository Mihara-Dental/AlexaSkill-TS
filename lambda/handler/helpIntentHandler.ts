import {getIntentName, getRequestType, HandlerInput, RequestHandler} from "ask-sdk-core";
import {Response} from "ask-sdk-model";

const HelpIntentHandler: RequestHandler = {
    canHandle(handlerInput: HandlerInput): Promise<boolean> | boolean {
        return getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent';
    },
    handle(handlerInput: HandlerInput): Promise<Response> | Response {
        const speakOutput = 'You can say hello to me! How can I help?';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
}

export default HelpIntentHandler