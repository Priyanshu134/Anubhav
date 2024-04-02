import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Form, Button, ListGroup } from 'react-bootstrap';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState('');

  useEffect(() => {
    // Fetch messages from backend on component mount
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/messages');
      setMessages(response.data);
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  const sendMessage = async () => {
    try {
      await axios.post('http://localhost:3000/api/messages', { message: messageInput });
      setMessageInput('');
      fetchMessages(); // Refresh messages after sending
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <Container>
      <ListGroup>
        {messages.map((message, index) => (
          <ListGroup.Item key={index}>{message}</ListGroup.Item>
        ))}
      </ListGroup>
      <Form onSubmit={(e) => { e.preventDefault(); sendMessage(); }}>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Type your message"
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
          />
        </Form.Group>
        <Button type="submit">Send</Button>
      </Form>
    </Container>
  );
};

export default Chat;

