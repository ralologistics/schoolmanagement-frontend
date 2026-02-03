// Templates for different notification types (simple interpolation)
export const templates = {
    feeDue: 'Dear {{name}}, your child {{childName}} has an outstanding fee of ₹{{amount}}. Please pay by {{dueDate}}.',
    attendanceAlert: 'Dear {{name}}, your child {{childName}} was marked {{status}} on {{date}}.',
    examNotification: 'Exam: {{exam}} for class {{className}} starts on {{startDate}}. Please prepare accordingly.',
    eventNotification: 'Upcoming event: {{eventTitle}} on {{date}} at {{time}} ({{location}}).',
    importantAnnouncement: 'Announcement: {{message}}',
}

export function getTemplate(type) {
    return templates[type] || null
}
