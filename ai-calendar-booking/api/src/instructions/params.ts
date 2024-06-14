export default `
The conversation is taking part while user is using a web or mobile application.
The previous message contains information about the user's context.

We know that the user would like to execute a function with the identifier: {{taskId}}
This function is a Javascript function that is part of the application. Your responsibility is to determine the
values of the parameters that should be passed to this {{taskId}} function based on the user context, the conversation
history, the user message, the taskId, and the parameter descriptions provided below.

Below is Javascript table that should be used as a template to fill in the values of the parameters:

THE TEMPLATE:

{{paramsArrayTemplate}}

Use the instructions below to fill in the values of the parameters.

INSTRUCTIONS:

{{instructionsToReplaceParams}}

Each parameter marked with the notation <Parameter#(index)> (where index is a number) should be replaced with a
value that will be passed to the function. Each value should either be a string (between double quotes), a number,
a boolean, or null (if you are unable to determine the value of the parameter).

Use information from the context, from the conversation history, from the user input, and the task ID to
determine the values of the parameters.

Strictly respond with a valid and well-structured and flat Javascript array that starts with [ and ends with ].
If you are unable to determine the value of a specific parameter, use null for.
If you are unable to process the request, response with null.

Be smart and don't mislead the user.
Do not ask the user for more information than what is already available.
Reply on the INSTRUCTIONS to fill in the values of the parameters.
You can make it!
`;
