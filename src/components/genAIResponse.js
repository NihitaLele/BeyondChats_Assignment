//Some mock/dummy chats to interact

export async function genAIResponse(message) {
  try {
    console.log('Generating AI response for:', message);
    
    const delay = Math.floor(Math.random() * 2000) + 1000;
    await new Promise(resolve => setTimeout(resolve, delay));
    
    let response = '';
    
    if (message.toLowerCase().includes('hello') || message.toLowerCase().includes('hi')) {
      response = "Hello! How can I assist you today?";
    } else if (message.toLowerCase().includes('help')) {
      response = "I'd be happy to help. Could you please provide more details about what you need assistance with?";
    } else if (message.toLowerCase().includes('price') || message.toLowerCase().includes('cost')) {
      response = "Our pricing plans start at $10/month for the basic plan. Would you like me to provide more details about our pricing tiers?";
    } else if (message.toLowerCase().includes('feature')) {
      response = "Our product includes features like real-time chat support, AI-powered responses, customer management, and analytics. Which specific feature would you like to know more about?";
    } else if (message.toLowerCase().includes('thank')) {
      response = "You're welcome! Is there anything else I can help you with?";
    }else if (message.toLowerCase().includes('refund')) {
      response = "To get a refund, you usually need to provide your order ID and proof of purchase. Be aware that there might be a time limit, like 60 days, and the item may need to meet specific return conditions. Once confirmed, you might receive a returns QR code for processing.";
    } else {
      const responses = [
        "I understand your question. Let me provide you with more information about that.",
        "That's a great question. Based on your needs, I would recommend...",
        "Thanks for reaching out about this. Here's what you should know...",
        "I'm looking into this for you. In the meantime, could you provide any additional details?",
        "I appreciate your patience. Let me explain how our service can address your needs."
      ];
      response = responses[Math.floor(Math.random() * responses.length)];
    }
    
    return response;
  } catch (error) {
    console.error('Error generating AI response:', error);
    return "I apologize, but I'm having trouble generating a response right now. Please try again later.";
  }
}
