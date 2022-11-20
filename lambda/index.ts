import {SkillBuilders} from "ask-sdk-core";

import LaunchRequestHandler from "./handler/launchRequestHandler";
import HelloWorldIntentHandler from "./handler/helloWorldIntentHandler";
import HelpIntentHandler from "./handler/helpIntentHandler";
import CancelAndStopIntentHandler from "./handler/cancelAndStopIntentHandler";
import FallbackIntentHandler from "./handler/fallbackIntentHandler";
import SessionEndedRequestHandler from "./handler/sessionEndedRequestHandler";
import IntentReflectorHandler from "./handler/intentReflectorHandler";
import ErrorHandler from "./handler/erroeHandler";

export const handler = SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        HelloWorldIntentHandler,
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        FallbackIntentHandler,
        SessionEndedRequestHandler,
        IntentReflectorHandler,
    )
    .addErrorHandlers(
        ErrorHandler
    )
    .withCustomUserAgent('sample/hello-world/v1.2')
    .lambda();