import { addLog } from './notificationLog'
import { getTemplate } from './notificationTemplates'

// Simulated SMS sender — returns a Promise that resolves with a fake message id
export function sendSMS(to, message) {
    const result = { success: true, to, message, messageId: `MSG-${Date.now()}` }
    // record in log for demo
    addLog({ type: 'sms', to, message, result })
    return Promise.resolve(result)
}

// Higher-level helper: build message from template and send
export async function sendNotification(type, { to, vars = {}, meta = {} }) {
    const tpl = getTemplate(type)
    const message = tpl
        ? tpl.replace(/{{\s*([^}]+)\s*}}/g, (_, k) => (vars[k.trim()] ?? ''))
        : (vars.message || '')

    const res = await sendSMS(to, message)
    return { res, meta }
}

export default { sendSMS, sendNotification }
