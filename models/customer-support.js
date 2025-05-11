/* {
    "id": 1401,
    "query": "What is the refund policy for membership?",
    "response": "You can request a refund within 7 days of purchase. Contact support for assistance.",
    "confidenceScore": "95%",
    "alternativeResponses": [
      "Refunds are processed within 5-7 business days.",
      "Check our refund policy page for detailed information."
    ],
    "escalationNeeded": false
  } */
    
    
    const supportQueries = [
      {
        query: "How can I reset my password?",
        response: "To reset your password, go to 'Forgot Password' on the login page and follow the steps.",
        confidenceScore: "95%",
        alternativeResponses: JSON.stringify([
          "You can reset your password by clicking the 'Forgot Password' link.",
          "Go to the login page and select 'Forgot Password' to receive a password reset email."
        ]),
        escalationNeeded: false
      },
      {
        query: "How do I cancel my subscription?",
        response: "You can cancel your subscription by visiting the account settings and selecting 'Cancel Subscription'.",
        confidenceScore: "90%",
        alternativeResponses: JSON.stringify([
          "To cancel, go to your account settings and choose 'Cancel Subscription'.",
          "Head to account settings, then click 'Subscription' and select 'Cancel'."
        ]),
        escalationNeeded: true
      },
      {
        query: "Why is my payment failing?",
        response: "Please check your credit card details and ensure that your card has sufficient funds.",
        confidenceScore: "85%",
        alternativeResponses: JSON.stringify([
          "Make sure your card details are entered correctly and check if there are sufficient funds.",
          "Verify your payment details and check if your card has enough balance."
        ]),
        escalationNeeded: true
      }
    ];
    
    async function insertCustomerSupportQueries() {
      try {
        const timestamp = new Date().toISOString();
    
        // Add timestamps for createdAt and updatedAt for each support record
        const queries = supportQueries.map(query => ({
          ...query,
          createdAt: timestamp,
          updatedAt: timestamp
        }));
    
        await CustomerSupport.bulkCreate(queries);
        console.log("✅ Customer support queries added successfully!");
      } catch (error) {
        console.error("❌ Error inserting customer support queries:", error);
      }
    }
    
    insertCustomerSupportQueries();   