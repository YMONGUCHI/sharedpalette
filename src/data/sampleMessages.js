const sampleConversations = [
  {
    id: 1,
    contact: "Maya L.",
    online: true,
    orderId: "SP-1048",
    preview: "Starting on the sketch phase today...",
    timestamp: "2h",
    unread: 0,
    messages: [
      { from: "them", text: "Hi! Thanks for picking me. I've reviewed your references, can't wait to start.", date: "March 28" },
      { from: "me", text: "Amazing! Let me know if you need any other angles of Bailey.", date: "March 28" },
      { from: "them", text: "The photos you sent are perfect!", date: "March 28" },
      { from: "them", text: "Starting on the sketch phase today — will share soon!", date: "Today" }
    ]
  },
  {
    id: 2,
    contact: "Jordan P.",
    online: false,
    orderId: "SP-1039",
    preview: "Proof is ready for your review",
    timestamp: "5h",
    unread: 2,
    messages: [
      { from: "them", text: "Quick update — I'll have the proof ready in a few hours.", date: "Yesterday" },
      { from: "them", text: "Proof is ready for your review!", date: "Today" }
    ]
  },
  {
    id: 3,
    contact: "Alex R.",
    online: false,
    orderId: "SP-1021",
    preview: "Thanks for the approval!",
    timestamp: "1d",
    unread: 0,
    messages: [
      { from: "me", text: "This is amazing, approving now!", date: "Yesterday" },
      { from: "them", text: "Thanks for the approval!", date: "Yesterday" }
    ]
  },
  {
    id: 4,
    contact: "Priya S.",
    online: false,
    orderId: "SP-0997",
    preview: "Here's the final file, hope you love it",
    timestamp: "3d",
    unread: 0,
    messages: [
      { from: "them", text: "Here's the final file, hope you love it", date: "3 days ago" }
    ]
  },
  {
    id: 5,
    contact: "Chris V.",
    online: false,
    orderId: "SP-0985",
    preview: "Order cancelled and refunded",
    timestamp: "1w",
    unread: 0,
    messages: [
      { from: "them", text: "I have to step away from this project — order cancelled and refunded.", date: "1 week ago" }
    ]
  }
];

export default sampleConversations;