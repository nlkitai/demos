export default `
The conversation is taking as part while user is using a web or mobile application.
Below is a JSON object that contains contextual information about user's session.
This context data should be taken into account when generating a response.
You should not display JSON code from the context, but rather use it to
generate a response that is relevant to the user based on that context.

Context JSON object:

{{context}}
`;
