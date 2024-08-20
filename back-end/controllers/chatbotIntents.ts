interface ChatbotState {
  currentState: string;
  username: string | null;
  requestDetails: {
    requesterName?: string;
    email?: string;
    phoneNo?: string;
    deviceType?: string;
    requestType?: string;
    department?: string;
    description?: string;
    modelNo?: string;
    urgency?: string;
  };
}

const stopWords = [
  'a', 'an', 'the', 'is', 'it', 'of', 'and', 'to', 'in', 'with', 'for', 'on', 'at', 'by', 'or', 'that', 'this', 'can', 'as', 'be', 'will', 'are', 'you', 'i', 'me', 'my', 'your', 'his', 'her', 'its', 'their', 'ours', 'ourselves', 'them', 'us'
];

const removeStopWords = (text: string): string => {
  const words = text.split(/\s+/);
  const filteredWords = words.filter(word => !stopWords.includes(word));
  return filteredWords.join(' ');
};

const extractEmail = (text: string): string | null => {
  const emailPattern = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;
  const match = text.match(emailPattern);
  return match ? match[0] : null;
};

const chatbotState: ChatbotState = {
  currentState: '',
  username: null,
  requestDetails: {}
};

export const handleChatbotMessage = (message: string): string => {
  const lowerMessage = message.toLowerCase().trim();
  const normalizedMessage = removeStopWords(lowerMessage);

  const regexMatch = (regex: RegExp): boolean => regex.test(normalizedMessage);

  let response = '';

  switch (chatbotState.currentState) {
    case 'awaitingUsername':
      chatbotState.username = normalizedMessage.replace('my username is', '').trim();
      response = `Got it, ${chatbotState.username}. Now, please say your password.`;
      chatbotState.currentState = 'awaitingPassword';
      break;
      
    case 'awaitingPassword':
      // Handle password logic here
      const password = normalizedMessage.replace('my password is', '').trim();
      response = 'Logging you in now...';
      chatbotState.currentState = ''; // Reset state after login attempt
      chatbotState.username = null;
      break;
      
    case 'awaitingRequestDetails':
      response = handleAwaitingRequestDetails(normalizedMessage);
      break;

    case 'awaitingEmail':
      response = handleAwaitingEmail(normalizedMessage);
      break;

    case 'awaitingPhoneNo':
      response = handleAwaitingPhoneNo(normalizedMessage);
      break;

    case 'awaitingDeviceType':
      response = handleAwaitingDeviceType(normalizedMessage);
      break;

    case 'awaitingRequestType':
      response = handleAwaitingRequestType(normalizedMessage);
      break;

    case 'awaitingDepartment':
      response = handleAwaitingDepartment(normalizedMessage);
      break;

    case 'awaitingDescription':
      response = handleAwaitingDescription(normalizedMessage);
      break;

    case 'awaitingModelNo':
      response = handleAwaitingModelNo(normalizedMessage);
      break;

    case 'awaitingUrgency':
      response = handleAwaitingUrgency(normalizedMessage);
      break;

    default:
      // Regular intent handling
      if (regexMatch(/^(hello|hi|selam|hey)$/)) {
        response = 'Hello to you too!';
      } else if (regexMatch(/how can i login|login|sign in|log in/)) {
        response = 'Sure, let me help you log in. Please say your username.';
        chatbotState.currentState = 'awaitingUsername';
      } else if (regexMatch(/submit request|new request|create request|make request/)) {
        response = 'To submit a request, please provide your details. What is your name?';
        chatbotState.currentState = 'awaitingRequestDetails';
      } else if (regexMatch(/how was your day|how are you|how are you doing|what’s up|what is up/)) {
        response = 'I’m just a chatbot, so I don’t have days, but I’m here to help you! How can I assist you today?';
      } else if (regexMatch(/log me out|send me back to the login page|navigate problem search|navigate all request history|navigate completed page|navigate accepted page|navigate rejected page|navigate inprogress page/)) {
        response = '';
      } else if (regexMatch(/how can i register|create account|new account|register|sign up/)) {
        response = 'You don’t need to create an account. Accounts are provided by the admin. Please sign in with your given username and password. If you forget your password, use the "Forgot Password" section.';
      } else if (regexMatch(/forgot password|recover password|reset password|password recovery/)) {
        response = 'To recover your password, go to the "Forgot Password" section, input your email, and we will send you a recovery password if your email is in our database.';
      } else if (regexMatch(/account creation|sign up process|register account/)) {
        response = 'Accounts are managed by the admin. Please contact them if you need a new account or have questions about account creation.';
      } else if (regexMatch(/what do you do|what does this app do|tell me about this system|what is this app|what is this system/)) {
        response = 'This app is a Request Management System built to streamline maintenance requests for employees at the Ethiopian Artificial Intelligence Institute.';
      } else if (regexMatch(/how does this system work|what is the purpose of this app|how does this app function/)) {
        response = 'The system helps manage maintenance requests efficiently. Employees can submit requests, track their status, and provide feedback on completed tasks.';
      } else if (regexMatch(/submit request|new request|create request|make request/)) {
        response = 'To submit a request, navigate to the "emp_dashboard" section and click on "+ New Request." You can then fill out the form and submit it.';
      } else if (regexMatch(/view request|request history|track request|check request status/)) {
        response = 'You can view your previous request history on the "emp_dashboard" section. Your requests are categorized as completed, accepted, in progress, or rejected.';
      } else if (regexMatch(/how can i check my requests|where can i view my requests|view past requests/)) {
        response = 'To check your past requests, go to the "emp_dashboard" section and look for the request history section.';
      } else if (regexMatch(/approve request|request approval|approval process|how is a request approved/)) {
        response = 'Your request will be pre-processed by our app and sent to your department head for approval. If approved, a technician will be assigned to you.';
      } else if (regexMatch(/how long|request duration|how much time/)) {
        response = 'The time it takes to process and address a request depends on various factors including urgency and technician availability. You will be notified once a technician is assigned.';
      } else if (regexMatch(/assign technician|when will a technician be assigned|technician assignment/)) {
        response = 'A technician will be assigned to your request once it has been approved. You will receive a notification with their details.';
      } else if (regexMatch(/contact support|need help|support|help/)) {
        response = 'For support, you can contact our IT helpdesk via email or phone. If you have specific issues, please provide details so we can assist you better.';
      } else if (regexMatch(/contact|support contact|helpdesk contact|get in touch/)) {
        response = 'To get in touch with support, you can use the contact details provided on the "Contact Us" page. For urgent issues, please call our support hotline.';
      } else if (regexMatch(/update request|modify request|change request|edit request/)) {
        response = 'If you need to update a request, you can do so through the "emp_dashboard" section. Locate your request and use the edit option to make changes.';
      } else {
        response = 'Sorry, I didn’t understand that. Can you please provide more details or rephrase your question?';
      }
  }

  return response;
};

const handleAwaitingRequestDetails = (message: string): string => {
  let response = '';

  if (!chatbotState.requestDetails.requesterName) {
    chatbotState.requestDetails.requesterName = message.replace('my name is', '').trim();
    response = `Got it, ${chatbotState.requestDetails.requesterName}. What is your email?`;
    chatbotState.currentState = 'awaitingEmail';
  } else {
    response = handleAwaitingEmail(message);
  }

  return response;
};

const handleAwaitingEmail = (message: string): string => {
  let response = '';
  const email = extractEmail(message);
  
  if (email) {
    chatbotState.requestDetails.email = email;
    response = 'Great. What is your phone number?';
    chatbotState.currentState = 'awaitingPhoneNo';
  } else {
    response = 'I didn’t catch that. Can you please provide your email address?';
  }

  return response;
};

const handleAwaitingPhoneNo = (message: string): string => {
  let response = '';
  chatbotState.requestDetails.phoneNo = message.replace('my phone number is', '').trim();
  response = 'Thanks. What is the type of your device?';
  chatbotState.currentState = 'awaitingDeviceType';

  return response;
};

const handleAwaitingDeviceType = (message: string): string => {
  let response = '';
  chatbotState.requestDetails.deviceType = message.replace('my device type is', '').trim();
  response = 'What type of request are you making?';
  chatbotState.currentState = 'awaitingRequestType';

  return response;
};

const handleAwaitingRequestType = (message: string): string => {
  let response = '';
  chatbotState.requestDetails.requestType = message.replace('my request type is', '').trim();
  response = 'Which department are you requesting assistance from?';
  chatbotState.currentState = 'awaitingDepartment';

  return response;
};

const handleAwaitingDepartment = (message: string): string => {
  let response = '';
  chatbotState.requestDetails.department = message.replace('my department is', '').trim();
  response = 'Please provide a description of your request.';
  chatbotState.currentState = 'awaitingDescription';

  return response;
};

const handleAwaitingDescription = (message: string): string => {
  let response = '';
  chatbotState.requestDetails.description = message.replace('my description is', '').trim();
  response = 'What is the model number of your device?';
  chatbotState.currentState = 'awaitingModelNo';

  return response;
};

const handleAwaitingModelNo = (message: string): string => {
  let response = '';
  chatbotState.requestDetails.modelNo = message.replace('my model number is', '').trim();
  response = 'How urgent is this request?';
  chatbotState.currentState = 'awaitingUrgency';

  return response;
};

const handleAwaitingUrgency = (message: string): string => {
  let response = '';
  chatbotState.requestDetails.urgency = message.replace('my urgency is', '').trim();
  response = 'Thank you for providing all the details. Your request has been submitted.';
  chatbotState.currentState = '';
  chatbotState.requestDetails = {}; // Reset after completion

  return response;
};
