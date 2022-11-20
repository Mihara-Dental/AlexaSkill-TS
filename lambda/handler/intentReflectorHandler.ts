import {getIntentName, getRequestType, HandlerInput, RequestHandler} from "ask-sdk-core";
import {Response} from "ask-sdk-model";

const IntentReflectorHandler: RequestHandler = {
    canHandle(handlerInput: HandlerInput): Promise<boolean> | boolean {
        return getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
    },
    handle(handlerInput: HandlerInput): Promise<Response> | Response {
        const intentName = getIntentName(handlerInput.requestEnvelope);
        const speakOutput = `You just triggered ${intentName}`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
}

export default IntentReflectorHandler