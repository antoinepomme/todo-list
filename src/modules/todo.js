export default function todo(title, description, dueDate, priority) {
    return { title, description, dueDate, priority, check: 0 };
}