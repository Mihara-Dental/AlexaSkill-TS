import {getIntentName, getRequestType, HandlerInput, RequestHandler} from "ask-sdk-core";
import {Response} from "ask-sdk-model";

const FallbackIntentHandler: RequestHandler = {
    canHandle(handlerInput: HandlerInput): Promise<boolean> | boolean {
        return getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && getIntentName(handlerInput.requestEnvelope) === 'AMAZON.FallbackIntent'
    },
    handle(handlerInput: HandlerInput): Promise<Response> | Response {
        const speakOutput = 'Sorry, I don\'t know about that. Please try again.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
}

export default FallbackIntentHandler