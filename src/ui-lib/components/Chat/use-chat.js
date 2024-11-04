import { useRef, useState, useEffect } from 'react';
import { toDate, getStartDay } from '../../utils/methods/date.js';

function useChat(props) {
    const { messages: messagesProp, sendMethod } = props;
    const textAreaRef = useRef(null);
    const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    const dateFormatter = new Intl.DateTimeFormat('ru', dateOptions);
    const [message, setMessage] = useState('');
    const idRef = useRef(0);
    const [messages, setMessages] = useState([]);
    const messagesRef = useRef([]);
    useEffect(() => {
        let result = [];
        if (messagesProp) {
            result = messagesProp.map((m) => ({
                ...m,
                dateLabel: dateFormatter.format(toDate(m.date)),
                dateTime: toDate(m.date).getTime(),
                startOfDay: getStartDay(m.date).getTime(),
                loading: false,
                error: false,
                id: idRef.current++
            }));
            result = result.sort((a, b) => a.dateTime - b.dateTime);
        }
        messagesRef.current = result;
        setMessages(messagesRef.current);
    }, [messagesProp]);
    const sendMessage = (messageToSend) => {
        const date = new Date();
        const messageId = idRef.current++;
        const messageObject = {
            date,
            dateLabel: dateFormatter.format(date),
            dateTime: date.getTime(),
            error: false,
            loading: true,
            message: messageToSend,
            isAuthor: true,
            startOfDay: getStartDay(date).getTime(),
            id: messageId
        };
        messagesRef.current = messagesRef.current.concat(messageObject);
        setMessages(messagesRef.current);
        sendMethod(message)
            .then(() => {
            const foundedIndex = messagesRef.current.findIndex((m) => m.id === messageId);
            messagesRef.current[foundedIndex].loading = false;
            setMessages([...messagesRef.current]);
        })
            .catch(() => {
            const foundedIndex = messagesRef.current.findIndex((m) => m.id === messageId);
            messagesRef.current[foundedIndex].loading = false;
            messagesRef.current[foundedIndex].error = true;
            setMessages([...messagesRef.current]);
        });
    };
    const handleSubmit = (event) => {
        event?.preventDefault();
        if (!message)
            return;
        if (textAreaRef.current) {
            textAreaRef.current.value = '';
            textAreaRef.current.rows = 1;
        }
        sendMessage(message);
        setMessage('');
    };
    const handleTextAreaChange = (event) => {
        const value = event.target.value;
        setMessage(value);
    };
    const handleKeyDown = (event) => {
        if (event.key === 'Enter' && !event.shiftKey)
            handleSubmit();
    };
    return {
        message,
        messages,
        textAreaRef,
        handleSubmit,
        handleKeyDown,
        handleTextAreaChange
    };
}

export { useChat };
