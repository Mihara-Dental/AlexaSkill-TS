import {getIntentName, getRequestType, HandlerInput, RequestHandler} from "ask-sdk-core";
import {Response} from "ask-sdk-model";


const CancelAndStopIntentHandler: RequestHandler = {
    canHandle(handlerInput: HandlerInput): Promise<boolean> | boolean {
        return getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && (getIntentName(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent'
                || getIntentName(handlerInput.requestEnvelope) === 'AMAZON.StopIntent')
    },
    handle(handlerInput: HandlerInput): Promise<Response> | Response {
        const speakOutput = 'Goodbye!'

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse()
    }
}

export default CancelAndStopIntentHandler