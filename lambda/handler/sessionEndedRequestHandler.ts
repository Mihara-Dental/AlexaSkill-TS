import {getRequestType, HandlerInput, RequestHandler} from "ask-sdk-core";
import {Response} from "ask-sdk-model";

const SessionEndedRequestHandler: RequestHandler = {
    canHandle(handlerInput: HandlerInput): Promise<boolean> | boolean {
        return getRequestType(handlerInput.requestEnvelope) === 'SessionEndedRequest'
    },
    handle(handlerInput: HandlerInput): Promise<Response> | Response {
        console.log(`~~~~ Session ended: ${JSON.stringify(handlerInput.requestEnvelope)}`);
        // Any cleanup logic goes here.
        return handlerInput.responseBuilder.getResponse(); // notice we send an empty response
    }
}

export default SessionEndedRequestHandler